import { Fragment } from "react";
import { useRouter } from "next/router";
import { Popover, Transition } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";

import et from "../locales/et";
import ru from "../locales/ru";
import en from "../locales/en";

import LanguagePicker from "./LanguagePicker";
import { FacebookIcon, InstagramIcon, LogoMark, LogoText } from "./Svg";

// Logo
const Logo = () => (
  <a href="/" className="flex items-center text-white">
    <LogoMark className="w-auto h-12" />
    <LogoText className="ml-4 h-3.5 w-auto relative top-1 hidden lg:block" />
  </a>
);

// Mobile Logo
const MobileLogo = () => (
  <div className="flex items-center">
    <LogoMark className="w-auto h-10 mr-3" />
    <LogoText className="relative w-auto h-3 top-1" />
  </div>
);

// Menu Open Button
const MenuOpenButton = ({ t }) => (
  <Popover.Button className="inline-flex items-center justify-center p-2 rounded-md sm:hidden text-gold-900 bg-gold-400 hover:bg-gold-500">
    <span className="sr-only">{t.header.openMenu}</span>
    <MenuIcon className="w-6 h-6" aria-hidden="true" />
  </Popover.Button>
);

// Menu Close Button
const MenuCloseButton = ({ t }) => (
  <div className="-mr-2">
    <Popover.Button className="inline-flex items-center justify-center p-2 text-gray-400 bg-white rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-cyan-600">
      <span className="sr-only">{t.header.closeMenu}</span>
      <XIcon className="w-6 h-6" aria-hidden="true" />
    </Popover.Button>
  </div>
);

// Header Menu
const HeaderMenu = ({ t }) => (
  <div className="items-center justify-center flex-1 hidden space-x-8 sm:flex">
    {t.header.nav.map((link) => (
      <a
        href={`#${link.id}`}
        className="text-base text-white hover:text-gray-300"
      >
        {link.label}
      </a>
    ))}
  </div>
);

// Social Menu
const SocialMenu = () => (
  <div className="hidden sm:flex sm:items-center sm:space-x-5">
    <a
      href="https://www.instagram.com/a.barber_tallinn/"
      className="text-base text-white hover:text-gray-300"
      target="_blank"
    >
      <InstagramIcon />
    </a>

    <a
      href="https://www.facebook.com/abarber.ee"
      className="text-base text-white hover:text-gray-300"
      target="_blank"
    >
      <FacebookIcon />
    </a>

    <LanguagePicker />
  </div>
);

// Mobile Social Menu
const MobileSocialMenu = () => (
  <div className="flex items-center space-x-5 sm:hidden">
    <a
      href="https://www.instagram.com/a.barber_tallinn/"
      className="text-base text-white hover:text-gray-300"
      target="_blank"
    >
      <InstagramIcon />
    </a>

    <a
      href="https://www.facebook.com/abarber.ee"
      className="text-base text-white hover:text-gray-300"
      target="_blank"
    >
      <FacebookIcon />
    </a>

    <LanguagePicker />
  </div>
);

// Mobile Menu
const MobileMenu = ({ t }) => (
  <div className="px-2 space-y-1">
    {t.header.nav.map((link) => (
      <a
        href={`#${link.id}`}
        className="block px-3 py-2 text-base text-gray-900 rounded-md hover:bg-gray-50"
      >
        {link.label}
      </a>
    ))}
  </div>
);

// Mobile Booking Button
const MobileBookingButton = ({ t }) => (
  <div className="px-5 mt-4">
    <a
      href="https://www.fresha.com/a/a-barber-tallinn-lemmiku-34-c1l0dnu6/booking"
      className="block w-full px-4 py-3 font-semibold text-center rounded-md text-gold-900 bg-gradient-to-r from-gold-400 to-gold-500"
    >
      {t.header.bookTime}
    </a>
  </div>
);

const Header = () => {
  const router = useRouter();
  const { locale } = router;
  const t = locale === "et" ? et : locale === "ru" ? ru : en;

  return (
    <Popover as="header" className="relative z-10">
      {/* Desktop Header */}
      <div className="py-6 bg-gradient-to-b from-black/80 to-black/0">
        <nav className="relative flex items-center justify-between px-4 mx-auto max-w-7xl sm:px-6">
          <div className="flex items-center justify-between w-full sm:w-auto">
            <Logo />
            <MobileSocialMenu />
            <MenuOpenButton t={t} />
          </div>

          <HeaderMenu t={t} />
          <SocialMenu />
        </nav>
      </div>

      {/* Mobile Header */}
      <Transition
        as={Fragment}
        enter="duration-150 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel
          focus
          className="absolute inset-x-0 top-0 p-2 transition origin-top transform sm:hidden"
        >
          <div className="overflow-hidden bg-white rounded-lg shadow-md ring-1 ring-black ring-opacity-5">
            <div className="flex items-center justify-between px-5 pt-4">
              <MobileLogo />
              <MenuCloseButton t={t} />
            </div>

            <div className="pt-5 pb-6">
              <MobileMenu t={t} />
              <MobileBookingButton t={t} />
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
};

export default Header;
