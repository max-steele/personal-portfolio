import { cx } from "./utils/joinClassNames";
import style from "./page.module.css";

import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Section, sections } from "./components/Sections";

export default function Home() {
  return (
    <div className={style.Layout}>
      <Header />
      <main className={cx(style.SectionLayout)}>
        <Section {...sections.about} />
        <Section {...sections.experience} />
        <Section {...sections.education} />
        <Section {...sections.skills} />
      </main>
      <Footer />
    </div>
  );
}

