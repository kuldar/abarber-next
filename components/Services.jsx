import { SmallLogoMark } from "./Svg.jsx";

const Divider = () => (
  <div className="w-full h-2 border-t-2 border-b-2 opacity-30 border-stone-500" />
);

const Service = ({ name, duration, cost, url }) => (
  <div className="flex items-center space-x-4">
    <span className="flex-1 text-2xl font-medium leading-none">{name}</span>

    <div className="flex items-center space-x-2 font-base">
      <span className="text-xl">{duration} min</span>
      <span className="text-xl opacity-30">/</span>
      <span className="text-xl">{cost} €</span>
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

const Services = () => {
  return (
    <div className="relative py-16 bg-black sm:py-24 lg:py-32">
      <div className="max-w-md px-4 mx-auto sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">
        {/* Grid */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="px-6 py-8 text-center rounded-lg bg-stone-900">
            <h3 className="text-xl font-medium tracking-tight text-white">
              Klassikaline lõikus
            </h3>
            <p className="text-stone-600">lorem ipsum</p>
          </div>

          <div className="px-6 py-8 text-center rounded-lg bg-stone-900">
            <h3 className="text-xl font-medium tracking-tight text-white">
              Juukselõikus & habeme kujundamine trimmeriga
            </h3>
            <p className="text-stone-600">lorem ipsum</p>
          </div>

          <div className="px-6 py-8 text-center rounded-lg bg-stone-900">
            <h3 className="text-xl font-medium tracking-tight text-white">
              Habeme modelleerimine trimmeriga
            </h3>
            <p className="text-stone-600">lorem ipsum</p>
          </div>

          <div className="px-6 py-8 text-center rounded-lg bg-stone-900">
            <h3 className="text-xl font-medium tracking-tight text-white">
              Isa koos lapsega kuni 12a.
            </h3>
            <p className="text-stone-600">lorem ipsum</p>
          </div>
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
