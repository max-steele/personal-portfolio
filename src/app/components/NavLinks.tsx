import { cx } from "../utils/joinClassNames";
import style from "./NavLinks.module.css";
import { LinkButton } from "../components/LinkButton";
import { Txt } from "../components/Text";
import { Fragment } from "react";

export const NavLinks: React.FC<React.ComponentProps<"div"> & {}> = ({
  className,
  ...props
}) => (
  <nav className={cx(style.NavLayout, className)} {...props}>
    {links.map((linkProps, i) => (
      <Fragment key={linkProps.children}>
        {i > 0 && (
          <Txt fg={4} className={style.NavSpacer}>
            /
          </Txt>
        )}
        <LinkButton
          offsetPx={16}
          classNameInside={style.NavLinkInside}
          {...linkProps}
        />
      </Fragment>
    ))}
  </nav>
);

const links = [
  {
    children: "LinkedIn",
    href: "https://www.linkedin.com/in/maxwell-steele/",
    external: true,
  },
  {
    children: "GitHub",
    href: "https://github.com/max-steele",
    external: true,
  },
  {
    children: "Resume",
    href: "/media/resume.pdf",
    external: true,
    prefetch: false,
  },
  {
    children: "Contact",
    href: "mailto:msteele1@uw.edu",
    external: true,
    prefetch: false,
  },
];
