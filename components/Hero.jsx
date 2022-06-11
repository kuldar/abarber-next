import { ChevronRightIcon } from "@heroicons/react/solid";

import Header from "./Header";

const Hero = () => (
  <div className="relative">
    {/* Background Image */}
    <div className="absolute inset-0">
      <img className="object-cover w-full h-full" src="img/header-bg.jpg" />
      <div className="absolute inset-0 bg-stone-500 mix-blend-multiply" />
    </div>

    <Header />

    {/* Hero */}
    <div className="relative pt-10 sm:pt-16 lg:pt-8 lg:pb-14">
      <div className="mx-auto max-w-7xl lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8">
          <div className="max-w-md px-4 mx-auto sm:max-w-2xl sm:px-6 sm:text-center lg:px-0 lg:text-left lg:flex lg:items-center">
            <div className="lg:py-24">
              {/* Pill */}
              <a
                href="#"
                className="inline-flex items-center px-2 py-1 text-white rounded-full bg-amber-900 lg:text-sm sm:text-base xl:text-base hover:text-stone-200"
              >
                <span className="text-sm">Vaata avamise eripakkumisi</span>

                <ChevronRightIcon
                  className="w-5 h-5 ml-1 text-stone-500"
                  aria-hidden="true"
                />
              </a>

              {/* H1 */}
              <h1 className="mt-4 text-4xl font-bold tracking-tight text-white font-prompt sm:mt-5 sm:text-6xl lg:mt-6 xl:text-7xl">
                <span className="mr-3 text-transparent whitespace-nowrap bg-clip-text bg-gradient-to-r from-amber-200 to-yellow-400">
                  A-Barber
                </span>
                <span className="pb-3 sm:pb-5">meeste juuksur Tallinnas</span>
              </h1>

              {/* Paragraph */}
              <p className="mt-4 text-base text-stone-300 sm:text-xl lg:text-lg xl:text-xl">
                Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
                Lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
                fugiat.
              </p>

              {/* Form */}
              <div className="mt-10 sm:mt-12">
                <form action="#" className="sm:max-w-xl sm:mx-auto lg:mx-0">
                  <div className="p-4 border rounded-xl sm:flex border-stone-400/50">
                    {/* Email */}
                    <div className="flex-1 min-w-0">
                      <span className="block text-sm text-stone-400">
                        Kirjuta meile
                      </span>
                      <span className="text-2xl text-white">
                        booking@a-barber.ee
                      </span>
                    </div>

                    {/* Button */}
                    <div className="mt-3 sm:mt-0 sm:ml-3">
                      <button
                        type="submit"
                        className="block w-full px-4 py-3 font-medium text-white rounded-md shadow bg-gradient-to-r from-amber-600 to-orange-800 hover:from-amber-700 hover:to-orange-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-400 focus:ring-offset-gray-900"
                      >
                        Broneeri aeg internetis
                      </button>
                    </div>
                  </div>

                  {/* Footnote */}
                  <p className="mt-3 text-sm text-stone-400 sm:mt-6">
                    Start your free 14-day trial, no credit card necessary. By
                    providing your email, you agree to our{" "}
                    <a href="#" className="font-medium text-white">
                      terms of service
                    </a>
                    .
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Hero;
