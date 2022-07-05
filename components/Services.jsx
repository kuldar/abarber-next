import { useRouter } from "next/router";
import { ArrowRightIcon } from "@heroicons/react/solid";

import { SmallLogoMark } from "./Svg.jsx";
import services from "../data/services";
import et from "../locales/et";
import ru from "../locales/ru";
import en from "../locales/en";

const Divider = () => (
  <div className="w-full h-2 border-t-2 border-b-2 opacity-30 border-stone-500" />
);

const Service = ({ name, duration, cost, url, t }) => (
  <div className="flex flex-col items-start xs:items-center xs:flex-row">
    <div className="flex flex-col items-start flex-1 sm:items-center sm:flex-row">
      <span className="flex-1 text-2xl font-medium leading-none">{name}</span>

      <div className="flex items-center mx-0 my-2 mt-1 space-x-2 text-xl xs:my-0 sm:mt-0 sm:mx-6 text-stone-400 font-base">
        <span>
          {duration} {t.services.min}
        </span>
        <span className="opacity-40">/</span>
        <span>{cost} €</span>
      </div>
    </div>

    <a
      href={url}
      className="px-4 py-2 text-base font-medium rounded-md shadow bg-gradient-to-r from-gold-400 to-gold-500 whitespace-nowrap text-gold-900"
    >
      {t.services.book}
    </a>
  </div>
);

const ServicesTitle = ({ title }) => (
  <div className="flex flex-col items-center mt-20 space-y-6">
    <SmallLogoMark />
    <h2 className="text-4xl font-semibold leading-none text-center text-white">
      {title}
    </h2>
    <Divider />
  </div>
);

const FeaturedService = ({ name, duration, cost, url, image, t }) => (
  <div className="relative h-64 p-6 overflow-hidden rounded-xl">
    <div className="absolute inset-0">
      <img src={image} className="object-cover w-full h-full grayscale" />
      <div className="absolute inset-0 bg-gradient-to-t from-stone-700 to-white mix-blend-multiply" />
    </div>

    <div className="relative flex flex-row items-end h-full sm:flex-col-reverse lg:flex-row">
      <div className="flex-1 sm:flex-0 lg:flex-1">
        <h3 className="text-2xl font-medium leading-none text-white">{name}</h3>
        <div className="flex items-center mt-3 space-x-2 text-xl leading-none text-stone-400 font-base">
          <span>
            {duration} {t.services.min}
          </span>
          <span className="opacity-40">/</span>
          <span>{cost} €</span>
        </div>
      </div>
      <div className="hidden sm:block sm:flex-1 lg:hidden" />
      <a
        href={url}
        className="ml-2 inline-flex items-center p-1.5 border border-transparent rounded-full shadow-sm text-gold-900 bg-gradient-to-r from-gold-400 to-gold-500 hover:bg-gold-400"
      >
        <ArrowRightIcon className="w-6 h-6" aria-hidden="true" />
      </a>
    </div>
  </div>
);

const Services = () => {
  const router = useRouter();
  const { locale } = router;
  const t = locale === "et" ? et : locale === "ru" ? ru : en;

  return (
    <div className="pb-16 bg-black sm:pb-24 lg:pb-32" id={t.header.nav[0].id}>
      <div className="relative max-w-md px-4 mx-auto sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">
        {/* Featured Services */}
        <div className="grid grid-cols-1 gap-8 -mt-14 sm:grid-cols-3 lg:grid-cols-3">
          {services.featured.map((feature) => (
            <FeaturedService
              name={
                services.sections[feature.section].services[feature.service]
                  .name[locale]
              }
              duration={
                services.sections[feature.section].services[feature.service]
                  .duration
              }
              cost={
                services.sections[feature.section].services[feature.service]
                  .price
              }
              url={
                services.sections[feature.section].services[feature.service]
                  .link
              }
              image={feature.image}
              t={t}
            />
          ))}
        </div>

        {/* Services List */}
        <div className="max-w-xs px-4 mx-auto xs:max-w-3xl xs:px-0">
          {services.sections.map((section) => (
            <>
              <ServicesTitle title={section.title[locale]} />
              <div className="flex flex-col mt-10 space-y-8 text-white xs:space-y-4">
                {section.services.map((service) => (
                  <Service
                    name={service.name[locale]}
                    duration={service.duration}
                    cost={service.price}
                    url={service.link}
                    t={t}
                  />
                ))}
              </div>
            </>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
