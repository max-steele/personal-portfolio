import Link from "next/link";
import { Spacer } from "../components/Spacer";
import { Txt } from "../components/Text";
import style from "./Footer.module.css";
import { externalLinkAttributes as external } from "../utils/link";

const year = new Date().getFullYear();

export const Footer: React.FC<React.ComponentProps<"footer">> = ({
  className,
  ...props
}) => (
  <footer
    className={className}
    {...props}
  >
    <Txt tag="p" size={6} className={style.FooterSection}>
      <Txt>
        <Txt>Copyright {year}</Txt>
        <Spacer>-</Spacer>
        <Txt fg={1} bold>Max Steele</Txt>
      </Txt>
      <Spacer>/</Spacer>
      <Txt>
        <Link href={"https://github.com/max-steele/personal-portfolio"} {...external}>
          Coded with ♥
        </Link>
        {" using "}
        <Link href={"https://react.dev/"} {...external}>
          React
        </Link>
        {", "}
        <Link href={"https://www.framer.com/motion/"} {...external}>
          Framer Motion
        </Link>
        {", & "}
        <Link href={"https://nextjs.org/"} {...external}>
          Next.js
        </Link>
      </Txt>
      <Spacer>/</Spacer>
      <Txt>
        Deployed on{" "}
        <Link href={"https://vercel.com/solutions/nextjs"} {...external}>
          Vercel
        </Link>
      </Txt>
    </Txt>
  </footer>
);
