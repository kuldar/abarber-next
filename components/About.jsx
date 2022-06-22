import {
  AcademicCapIcon,
  SparklesIcon,
  BriefcaseIcon,
} from "@heroicons/react/outline";
import { Signature } from "./Svg";

const About = () => {
  return (
    <div className="relative flex flex-col pb-14">
      <div className="absolute inset-0">
        <picture>
          <source srcSet="img/about-bg.jpg" media="(min-width: 900px)" />
          <img
            srcSet="img/about-bg-mobile.jpg"
            className="object-cover w-full h-full"
          />
        </picture>
      </div>
      <div className="relative flex flex-col items-center px-8 md:items-start md:flex-row lg:mx-auto lg:max-w-7xl">
        <img
          className="-rotate-2 object-cover h-full rounded-xl -mt-14 w-80 max-h-[320px] md:max-h-[450px]"
          src="img/headshot.jpg"
          alt="Albina Kalvik"
        />

        <div className="flex-1 pt-16 pl-0 text-center md:text-left md:pl-16">
          <h2 className="text-4xl font-semibold leading-[1.1] tracking-tight text-white max-w-2xl">
            Duis id vulputate urna, diam bibendum ornare eu risus.
          </h2>

          <p className="mt-6 text-xl font-light leading-8 text-stone-300">
            Vestibulum massa metus, lobortis et rutrum at, aliquam convallis
            erat. In hac habitasse platea dictumst. Proin ut mauris quis diam
            ornare lobortis. Pellentesque tortor velit, ornare eu risus ut,
            porta tincidunt tellus. Duis id vulputate urna fringilla.
          </p>

          <Signature className="mx-auto mt-10 md:mx-0" />
        </div>
      </div>

      <div className="relative w-full px-8 lg:mx-auto lg:max-w-7xl mb-14">
        <div className="w-full h-2 border-t-2 border-b-2 my-14 opacity-30 border-stone-500 lg:mx-auto lg:max-w-4xl" />

        <div className="flex flex-col items-center justify-center space-x-0 space-y-4 md:space-x-10 md:space-y-0 md:flex-row md:items-start">
          <div className="flex items-center">
            <AcademicCapIcon className="flex-shrink-0 w-6 h-6 mr-4 text-gold-600" />
            <span className="text-xl font-light text-white">
              Barberi eriala juuksurikoolis Maridel
            </span>
          </div>

          <div className="flex items-center">
            <SparklesIcon className="flex-shrink-0 w-6 h-6 mr-4 text-gold-600" />
            <span className="text-xl font-light text-white">
              Auhinnatud XYZ võistlustel
            </span>
          </div>

          <div className="flex items-center">
            <BriefcaseIcon className="flex-shrink-0 w-6 h-6 mr-4 text-gold-600" />
            <span className="text-xl font-light text-white">
              Iseseisvalt täiendõppinud
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
