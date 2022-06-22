import Hero from "../components/Hero";
import Services from "../components/Services";
import Testimonial from "../components/Testimonial";
import About from "../components/About";
import Images from "../components/Images";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="relative overflow-hidden bg-white font-prompt">
      <Hero />
      <Services />
      <Testimonial />
      <About />
      <Images />
      <Footer />
    </div>
  );
}
