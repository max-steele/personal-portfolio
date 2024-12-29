import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import style from "./page.module.css";

export default function Home() {
  return (
    <div className={style.Layout}>
      <Header />
      <Footer />
    </div>
  );
}
