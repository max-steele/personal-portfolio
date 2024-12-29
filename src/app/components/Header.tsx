import Link from "next/link";
import { externalLinkAttributes as external } from "../utils/link";
import { Txt } from "../components/Text";
import { Spacer } from "../components/Spacer";
import { cx } from "../utils/joinClassNames";
import { NavLinks } from "./NavLinks";
import style from "./Header.module.css";
import styleSection from "./Section.module.css";
import { Logo } from "./Logo";

export const Header: React.FC<React.ComponentProps<"header">> = ({
  className,
  ...props
}) => (
  <header
    className={cx(style.HeaderWrapper, styleSection.SectionWrapper, className)}
    {...props}
  >
    <div className={cx(style.HeaderLayout, styleSection.Section)}>
      <Logo
        style={{
          marginBottom: 48,
          height: 16 * 4,
          width: 16 * 4,
          marginInline: -16,
          paddingLeft: 18,
        }}
      />

      <Txt tag="h1" size={1} fg={1} uppercase className={style.HeaderText} bold>
        <Txt>Maxwell Steele</Txt>
        <Spacer normal>/</Spacer>
        <wbr />
        <Txt fg={3}>Full-Stack Engineer</Txt>
      </Txt>

      <Txt tag="p" fg={2} className={style.HeaderDetails}>
        <Txt bold fg={2}>
          Front-End Development
          <Spacer>/</Spacer>
          Web API Development
          <Spacer>/</Spacer>
          UI Development
        </Txt>
      </Txt>

      <Txt tag="p" fg={2} className={style.HeaderDetails}>
        Currently an undergraduate student at the University of Washington&apos;s {" "}
        <Link href={"https://www.cs.washington.edu/"} {...external}>
          Paul G. Allen School of Computer Science & Engineering
        </Link>
        {" "}
        in Seattle, Washington. I am working at {" "}
        <Link href={"https://www.pnnl.gov/"} {...external}>
          Pacific Northwest National Laboratory
        </Link>
        {"'s "}
        Seattle Office as a Software Engineer Intern producing web apps for 
        data visualization and biosecurity.
      </Txt>

      <NavLinks className={style.HeaderNav} />
    </div>
  </header>
);
