import Hero from "../components/Hero";
import Services from "../components/Services";
import Testimonial from "../components/Testimonial";
import About from "../components/About";
import Images from "../components/Images";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="relative overflow-hidden bg-black font-prompt">
      <div className="relative z-10 mb-0 md:mb-[600px]">
        <Hero />
        <Services />
        <Testimonial />
        <About />
        <Images />
      </div>
      <div className="static md:fixed bottom-0 w-full h-auto md:h-[600px] bg-black">
        <Footer />
      </div>
    </div>
  );
}
