import { useRouter } from "next/router";

import Hero from "../components/Hero";
import Services from "../components/Services";
import Testimonial from "../components/Testimonial";
import About from "../components/About";
import Images from "../components/Images";
import Footer from "../components/Footer";
import Seo from "../components/Seo";

import et from "../locales/et";
import ru from "../locales/ru";
import en from "../locales/en";

export default function Home() {
  const router = useRouter();
  const { locale } = router;
  const t = locale === "et" ? et : locale === "ru" ? ru : en;

  return (
    <>
      <Seo t={t} />
      <div
        className={`relative overflow-hidden bg-black ${
          locale === "ru" ? "font-montserrat" : "font-prompt"
        }`}
      >
        <div className="relative z-10 mb-0 md:mb-[600px]">
          <Hero t={t} />
          <Services />
          <Testimonial t={t} />
          <About t={t} />
          <Images />
        </div>
        <div id={t.header.nav[2].id} />
        <div className="static md:fixed bottom-0 w-full h-auto md:h-[600px] bg-black">
          <Footer t={t} />
        </div>
      </div>
    </>
  );
}
