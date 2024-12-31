import { cx } from "./utils/joinClassNames";
import style from "./page.module.css";

import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { ProjectFeatureSection, sections } from "./components/Sections";

export default function Home() {
  return (
    <div className={style.Layout}>
      <Header />
      <main className={cx(style.SectionLayout)}>
        <ProjectFeatureSection {...sections.about} />
        <ProjectFeatureSection {...sections.pnnl} />
        <ProjectFeatureSection {...sections.dhsWIRED} />
      </main>
      <Footer />
    </div>
  );
}
