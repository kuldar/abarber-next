import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";

import { EstFlag, RuFlag } from "./Svg";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const LanguagePicker = () => {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="flex items-center text-gray-400 bg-gray-100 rounded-full hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500">
          <span className="sr-only">Open options</span>
          <EstFlag className="w-6 h-6" aria-hidden="true" />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 w-40 mt-2 origin-top-right bg-white rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={classNames(
                    active ? "bg-gold-200 text-gold-900" : "text-gray-700",
                    "flex items-center px-4 py-2 text-sm"
                  )}
                >
                  <EstFlag className="w-6 h-6 mr-3 drop-shadow-lg" />
                  <span className="text-sm">Eesti keeles</span>
                </a>
              )}
            </Menu.Item>

            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={classNames(
                    active ? "bg-gold-200 text-gold-900" : "text-gray-700",
                    "flex items-center px-4 py-2 text-sm"
                  )}
                >
                  <RuFlag className="w-6 h-6 mr-3 drop-shadow-lg" />
                  <span className="text-sm">По-русски</span>
                </a>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export default LanguagePicker;
