import Link from "next/link";

import style from "./Header.module.css";

import { externalLinkAttributes as external } from "../utils/link";
import { Txt } from "../components/Text";
import { Spacer } from "../components/Spacer";
import { cx } from "../utils/joinClassNames";
import { NavLinks } from "./NavLinks";
import { Logo } from "./Logo";

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
        uppercase
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

      <Txt tag="p" fg={2} className={style.HeaderDetails}>
        Highly organized and adaptable undergraduate student at the University of Washington with professional software development experience. 
        Currently working at {" "}
        <Link href={"https://www.pnnl.gov/"} {...external}>
          Pacific Northwest National Laboratory
        </Link>
        {"'s "}
        Seattle Office.
      </Txt>

      <NavLinks className={style.HeaderNav} />
    </div>
  </header>
);
