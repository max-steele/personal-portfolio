import { cx } from "./utils/joinClassNames";
import style from "./page.module.css";

import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Section, sections } from "./components/Sections";
import { ThemeToggle } from "./components/ThemeToggle";

export default function Home() {
  return (
    <div className={style.Layout}>
      <ThemeToggle />
      <Header />
      <main className={cx(style.SectionLayout)}>
        <Section {...sections.contact} />
        <Section {...sections.experience} />
        <Section {...sections.education} />
      </main>
      <Footer />
    </div>
  );
}

