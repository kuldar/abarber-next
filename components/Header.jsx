import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";

import { meta, navigation } from "../config";
import {
  EstFlag,
  RuFlag,
  FacebookIcon,
  InstagramIcon,
  LogoMark,
  LogoText,
} from "./Svg";

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
const MenuOpenButton = () => (
  <Popover.Button className="inline-flex items-center justify-center p-2 rounded-md sm:hidden text-gold-900 bg-gold-400 hover:bg-gold-500">
    <span className="sr-only">Ava menüü</span>
    <MenuIcon className="w-6 h-6" aria-hidden="true" />
  </Popover.Button>
);

// Menu Close Button
const MenuCloseButton = () => (
  <div className="-mr-2">
    <Popover.Button className="inline-flex items-center justify-center p-2 text-gray-400 bg-white rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-cyan-600">
      <span className="sr-only">Sulge menüü</span>
      <XIcon className="w-6 h-6" aria-hidden="true" />
    </Popover.Button>
  </div>
);

// Header Menu
const HeaderMenu = () => (
  <div className="items-center justify-center flex-1 hidden space-x-8 sm:flex">
    <a
      href="#"
      className="text-base font-medium text-white hover:text-gray-300"
    >
      Teenused
    </a>
    <a
      href="#"
      className="text-base font-medium text-white hover:text-gray-300"
    >
      Meist
    </a>
    <a
      href="#"
      className="text-base font-medium text-white hover:text-gray-300"
    >
      Kontakt
    </a>
  </div>
);

// Social Menu
const SocialMenu = () => (
  <div className="hidden sm:flex sm:items-center sm:space-x-5">
    <a
      href="#"
      className="text-base font-medium text-white hover:text-gray-300"
    >
      <InstagramIcon />
    </a>

    <a
      href="#"
      className="text-base font-medium text-white hover:text-gray-300"
    >
      <FacebookIcon />
    </a>

    {/* <RuFlag className="w-6 h-6" /> */}
    <EstFlag className="w-6 h-6" />
  </div>
);

// Mobile Menu
const MobileMenu = () => (
  <div className="px-2 space-y-1">
    <a
      href="#"
      className="block px-3 py-2 text-base font-medium text-gray-900 rounded-md hover:bg-gray-50"
    >
      Teenused
    </a>
    <a
      href="#"
      className="block px-3 py-2 text-base font-medium text-gray-900 rounded-md hover:bg-gray-50"
    >
      Meist
    </a>
    <a
      href="#"
      className="block px-3 py-2 text-base font-medium text-gray-900 rounded-md hover:bg-gray-50"
    >
      Kontakt
    </a>
  </div>
);

// Mobile Booking Button
const MobileBookingButton = () => (
  <div className="px-5 mt-4">
    <a
      href="#"
      className="block w-full px-4 py-3 font-medium text-center rounded-md text-gold-900 bg-gradient-to-r from-gold-400 to-gold-500"
    >
      Broneeri aeg
    </a>
  </div>
);

const Header = () => (
  <Popover as="header" className="relative z-10">
    {/* Desktop Header */}
    <div className="py-6 bg-gradient-to-b from-black/80 to-black/0">
      <nav className="relative flex items-center justify-between px-4 mx-auto max-w-7xl sm:px-6">
        <div className="flex items-center justify-between w-full sm:w-auto">
          <Logo />
          <MenuOpenButton />
        </div>

        <HeaderMenu />
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
            <MenuCloseButton />
          </div>

          <div className="pt-5 pb-6">
            <MobileMenu />
            <MobileBookingButton />
          </div>
        </div>
      </Popover.Panel>
    </Transition>
  </Popover>
);
export default Header;
