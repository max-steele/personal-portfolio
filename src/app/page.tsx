import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { ProjectFeatureSection, sections } from "./components/PagesSections";
import style from "./page.module.css";

export default function Home() {
  return (
    <div className={style.Layout}>
      <Header />
      <ProjectFeatureSection {...sections.about} />
      <Footer />
    </div>
  );
}
