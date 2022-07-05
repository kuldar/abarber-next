import { Fragment } from "react";
import { useRouter } from "next/router";
import { Menu, Transition } from "@headlessui/react";

import et from "../locales/et";
import ru from "../locales/ru";
import en from "../locales/en";

import { EstFlag, RuFlag, EnFlag } from "./Svg";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const flags = {
  et: <EstFlag className="w-6 h-6" aria-hidden="true" />,
  ru: <RuFlag className="w-6 h-6" aria-hidden="true" />,
  en: <EnFlag className="w-6 h-6" aria-hidden="true" />,
};

const locales = [
  { label: "Eesti keeles", code: "et" },
  { label: "По-русски", code: "ru" },
  { label: "In English", code: "en" },
];

const LanguagePicker = () => {
  const router = useRouter();
  const { locale, pathname, asPath, query } = router;
  const t = locale === "et" ? et : locale === "ru" ? ru : en;

  const changeLocale = (newLocale) => {
    document.cookie = `NEXT_LOCALE=${newLocale}`;
    router.push({ pathname, query }, asPath, { locale: newLocale });
  };

  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="flex items-center text-gray-400 bg-gray-100 rounded-full hover:text-gray-600 focus:outline-none">
          <span className="sr-only">{t.header.chooseLang}</span>
          {flags[locale]}
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
        <Menu.Items className="absolute right-0 w-40 mt-2 overflow-hidden origin-top-right bg-white rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            {locales.map((l) => (
              <Menu.Item>
                {({ active }) => (
                  <button
                    onClick={() => changeLocale(l.code)}
                    className={classNames(
                      active ? "bg-gold-200 text-gold-900" : "text-gray-700",
                      "flex w-full items-center px-4 py-2 text-sm"
                    )}
                  >
                    {flags[l.code]}
                    <span className="ml-2 text-sm">{l.label}</span>
                  </button>
                )}
              </Menu.Item>
            ))}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export default LanguagePicker;
