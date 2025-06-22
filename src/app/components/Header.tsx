import Link from "next/link";

import style from "./Header.module.css";

import { Txt } from "../components/Text";
import { Spacer } from "../components/Spacer";
import { cx } from "../utils/joinClassNames";
import { Logo } from "./Logo";
import { ThemeToggle } from "./ThemeToggle";

export const Header: React.FC<React.ComponentProps<"header">> = ({
  className,
  ...props
}) => (
  <header
    className={className}
    {...props}
  >
    <div className={cx(style.HeaderLayout)}>
      <Logo
        style={{
          marginBottom: 48,
          height: 16 * 4,
          width: 16 * 4,
          marginInline: -16,
          paddingLeft: 18,
        }}
      />

      <Txt
        tag="h1"
        size={1}
        fg={1}
        className={style.HeaderText}
        bold
      >
        Maxwell Steele
      </Txt>

      <Txt tag="p" fg={2} className={style.HeaderDetails}>
        <Txt bold fg={2}>
          Software Engineer
          <Spacer>/</Spacer>
          Student
        </Txt>
      </Txt>

      <Txt tag="p" fg={2}>
        Hello, I&apos;m an undergraduate student studying computer science at the University of Washington&apos;s{" "}
        <Link href={"https://www.cs.washington.edu/"} target="_blank">
          Paul G. Allen School of Computer Science & Engineering
        </Link>{" "}
        in Seattle, Washington. 
        My interests are in software as a service (SaaS), AL/ML integration, and data visualization.
      </Txt>

      <ThemeToggle />
    </div>
  </header>
);
