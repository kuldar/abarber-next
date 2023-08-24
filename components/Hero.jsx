import { ClockIcon, MailOpenIcon } from "@heroicons/react/outline";
import { StarIcon } from "@heroicons/react/solid";

import Header from "./Header";

const BackgroundImage = () => (
  <div className="absolute inset-0">
    <picture>
      <source srcSet="img/header-bg.jpg" media="(min-width: 480px)" />
      <img
        srcSet="img/header-bg-mobile.jpg"
        className="object-cover w-full h-full"
      />
    </picture>
    <div className="absolute inset-0 bg-stone-600 xs:bg-stone-500 mix-blend-multiply" />
  </div>
);

const Pill = ({ t }) => (
  <span className="mb-6 inline-flex items-center px-3 uppercase tracking-wide font-semibold py-0.5 rounded-full text-sm bg-gradient-to-r from-gold-300 to-gold-500 text-gold-900">
    {t.hero.pill}
  </span>
);

const Title = ({ t }) => (
  <h1 className="pb-2 text-4xl font-bold tracking-tight text-white xs:text-5xl sm:text-6xl lg:text-7xl">
    <span className="mr-3 text-transparent sm:mr-5 whitespace-nowrap bg-clip-text bg-gradient-to-r from-gold-300 to-gold-500">
      {t.hero.h1[0]}
    </span>
    <span>{t.hero.h1[1]}</span>
  </h1>
);

const Intro = ({ t }) => (
  <p className="mt-4 text-xl font-light text-stone-300">{t.hero.intro}</p>
);

const Divider = () => (
  <div className="items-center hidden w-full my-10 space-x-3 opacity-50 sm:flex text-stone-400">
    <div className="flex-1 h-2 border-t-2 border-b-2 border-stone-400" />
    <StarIcon className="w-6 h-6" />
    <StarIcon className="w-6 h-6" />
    <StarIcon className="w-6 h-6" />
    <div className="flex-1 h-2 border-t-2 border-b-2 border-stone-400" />
  </div>
);

const BookingButton = ({ t }) => (
  <a
    href="https://www.fresha.com/book-now/a-barber-u9mp3gca/all-offer?pId=672198"
    className="flex items-center px-5 py-4 space-x-3 rounded-lg shadow bg-gradient-to-r from-gold-400 to-gold-500"
  >
    <ClockIcon className="w-7 h-7 text-gold-700" aria-hidden="true" />
    <span className="text-xl font-medium whitespace-nowrap text-gold-900">
      {t.hero.bookTime}
    </span>
  </a>
);

const BookingEmail = ({ t }) => (
  <div className="flex items-center space-x-4 text-center sm:text-left">
    <MailOpenIcon
      className="hidden w-7 h-7 sm:block text-gold-200"
      aria-hidden="true"
    />

    <div>
      <span className="block text-sm font-semibold leading-none tracking-wider uppercase text-gold-500">
        {t.hero.writeUs}
      </span>
      <span className="text-3xl text-white whitespace-nowrap">
        info@a-barber.ee
      </span>
    </div>
  </div>
);

const Hero = ({ t }) => (
  <div className="relative bg-black">
    <BackgroundImage />
    <Header />

    <div className="relative pt-8 mx-auto pb-14 max-w-7xl lg:px-8 sm:pt-24 sm:pb-28 lg:pb-36">
      <div className="flex flex-col items-center max-w-md px-4 mx-auto text-center lg:mx-0 sm:max-w-2xl sm:px-6 lg:px-0 lg:text-left lg:items-start">
        {/* <Pill t={t} /> */}
        <Title t={t} />
        <Intro t={t} />
        <Divider />
        <div className="flex flex-col items-center py-10 space-x-0 space-y-8 sm:py-0 sm:space-x-12 sm:space-y-0 sm:flex-row">
          <BookingButton t={t} />
          <BookingEmail t={t} />
        </div>
      </div>
    </div>
  </div>
);

export default Hero;
