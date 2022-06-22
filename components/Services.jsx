import { PlusSmIcon, ArrowRightIcon } from "@heroicons/react/solid";
import { SmallLogoMark } from "./Svg.jsx";

const Divider = () => (
  <div className="w-full h-2 border-t-2 border-b-2 opacity-30 border-stone-500" />
);

const Service = ({ name, duration, cost, url }) => (
  <div className="flex items-center space-x-4">
    <span className="flex-1 text-2xl font-medium leading-none">{name}</span>

    <div className="flex items-center space-x-2 text-xl text-stone-400 font-base">
      <span>{duration} min</span>
      <span className="opacity-40">/</span>
      <span>{cost} €</span>
    </div>

    <a
      href={url}
      className="px-4 py-2 text-base font-medium rounded-md shadow bg-gradient-to-r from-gold-400 to-gold-500 whitespace-nowrap text-gold-900"
    >
      Broneeri
    </a>
  </div>
);

const ServicesTitle = ({ title }) => (
  <div className="flex flex-col items-center mt-20 space-y-6">
    <SmallLogoMark />
    <h2 className="text-4xl font-semibold text-white">{title}</h2>
    <Divider />
  </div>
);

const FeaturedService = ({ name, duration, cost, url }) => (
  <div className="relative h-64 p-6 overflow-hidden rounded-xl">
    <div className="absolute inset-0">
      <img
        src="img/service-illustration-1.jpg"
        className="object-cover w-full h-full"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-stone-600 to-stone-200 mix-blend-multiply" />
    </div>

    <div className="relative flex flex-row items-end h-full sm:flex-col-reverse lg:flex-row">
      <div className="flex-1 sm:flex-0 lg:flex-1">
        <h3 className="text-2xl font-medium leading-none text-white">{name}</h3>
        <div className="flex items-center space-x-2 text-xl text-stone-400 font-base">
          <span>{duration} min</span>
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
  return (
    <div className="pb-16 bg-black sm:pb-24 lg:pb-32">
      <div className="relative max-w-md px-4 mx-auto sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">
        {/* Featured Services */}
        <div className="grid grid-cols-1 gap-8 -mt-14 sm:grid-cols-3 lg:grid-cols-3">
          <FeaturedService
            name="Klassikaline lõikus"
            duration={45}
            cost={22}
            url="#"
          />
          <FeaturedService
            name="Juukselõikus & habeme kujundamine trimmeriga"
            duration={90}
            cost={36}
            url="#"
          />
          <FeaturedService
            name="Habeme modelleerimine noaga"
            duration={90}
            cost={24}
            url="#"
          />
        </div>

        {/* Services List */}
        <div className="max-w-3xl mx-auto">
          {/* Services Section */}
          <ServicesTitle title="Juukselõikus" />
          <div className="flex flex-col mt-10 space-y-4 text-white">
            <Service
              name="Klassikaline lõikus"
              duration={45}
              cost={22}
              url="#"
            />
            <Service name="Masinalõikus" duration={30} cost={18} url="#" />
            <Service
              name="Juukselõikus & habeme kujundamine trimmeriga"
              duration={90}
              cost={36}
              url="#"
            />
            <Service
              name="Juukselõikus & habeme kujundamine noaga"
              duration={90}
              cost={40}
              url="#"
            />
            <Service
              name="Zero fade / CROPP lõikus"
              duration={45}
              cost={25}
              url="#"
            />
          </div>

          {/* Services Section */}
          <ServicesTitle title="Habeme hooldus" />
          <div className="flex flex-col mt-10 space-y-4 text-white">
            <Service
              name="Habeme modelleerimine trimmeriga"
              duration={45}
              cost={18}
              url="#"
            />
            <Service
              name="Habeme modelleerimine noaga"
              duration={90}
              cost={24}
              url="#"
            />
            <Service name="Habeme toonimine" duration={30} cost={20} url="#" />
          </div>

          {/* Services Section */}
          <ServicesTitle title="Eriteenused" />
          <div className="flex flex-col mt-10 space-y-4 text-white">
            <Service
              name="Näodepilatsioon (nina + kõrvad)"
              duration={10}
              cost={5}
              url="#"
            />
            <Service
              name="Laste juustelõikus kuni 12a."
              duration={30}
              cost={15}
              url="#"
            />
            <Service
              name="Isa koos lapsega kuni 12a."
              duration={90}
              cost={35}
              url="#"
            />
            <Service
              name="Patside tegemine"
              duration={180}
              cost={120}
              url="#"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
