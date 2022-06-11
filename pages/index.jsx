import { ExternalLinkIcon } from "@heroicons/react/solid";
import { StarIcon } from "@heroicons/react/solid";

const reviews = {
  average: 4,
  totalCount: 1624,
  counts: [
    { rating: 5, count: 1019 },
    { rating: 4, count: 162 },
    { rating: 3, count: 97 },
    { rating: 2, count: 199 },
    { rating: 1, count: 147 },
  ],
  featured: [
    {
      id: 1,
      rating: 5,
      content: `
        <p>This is the bag of my dreams. I took it on my last vacation and was able to fit an absurd amount of snacks for the many long and hungry flights.</p>
      `,
      author: "Emily Selman",
      avatarSrc:
        "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80",
    },
    {
      id: 2,
      rating: 4,
      content: `
        <p>This is the bag of my dreams. I took it on my last vacation and was able to fit an absurd amount of snacks for the many long and hungry flights.</p>
      `,
      author: "Emily Selman",
      avatarSrc:
        "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80",
    },
  ],
};

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

import { features, blogPosts } from "../config";
import Hero from "../components/Hero";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="bg-white font-prompt">
      <div className="relative overflow-hidden">
        <Hero />

        {/* Main */}
        <main>
          {/* Services */}
          <div className="relative py-16 bg-white sm:py-24 lg:py-32">
            <div className="max-w-md px-4 mx-auto text-center sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">
              <h2 className="text-base font-semibold tracking-wider uppercase text-cyan-600">
                Teenused
              </h2>
              <p className="mt-2 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                Juukselõikusest habemeajamiseni
              </p>
              <p className="mx-auto mt-5 text-xl text-gray-500 max-w-prose">
                Phasellus lorem quam molestie id quisque diam aenean nulla in.
                Accumsan in quis quis nunc, ullamcorper malesuada. Eleifend
                condimentum id viverra nulla.
              </p>
              <div className="mt-12">
                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                  {features.map((feature) => (
                    <div key={feature.name} className="pt-6">
                      <div className="flow-root px-6 pb-8 rounded-lg bg-gray-50">
                        <div className="-mt-6">
                          <div>
                            <span className="inline-flex items-center justify-center p-3 rounded-md shadow-lg bg-gradient-to-r from-teal-500 to-cyan-600">
                              <feature.icon
                                className="w-6 h-6 text-white"
                                aria-hidden="true"
                              />
                            </span>
                          </div>
                          <h3 className="mt-8 text-lg font-medium tracking-tight text-gray-900">
                            {feature.name}
                          </h3>
                          <p className="mt-5 text-base text-gray-500">
                            {feature.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Testimonial */}
          <section className="pt-3 pb-12 overflow-hidden md:pt-5 lg:pt-6 md:pb-20 lg:pb-24">
            <div className="relative px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
              <svg
                className="absolute transform top-full right-full translate-x-1/3 -translate-y-1/4 lg:translate-x-1/2 xl:-translate-y-1/2"
                width={404}
                height={404}
                fill="none"
                viewBox="0 0 404 404"
                role="img"
                aria-labelledby="svg-workcation"
              >
                <title id="svg-workcation">Workcation</title>
                <defs>
                  <pattern
                    id="ad119f34-7694-4c31-947f-5c9d249b21f3"
                    x={0}
                    y={0}
                    width={20}
                    height={20}
                    patternUnits="userSpaceOnUse"
                  >
                    <rect
                      x={0}
                      y={0}
                      width={4}
                      height={4}
                      className="text-gray-200"
                      fill="currentColor"
                    />
                  </pattern>
                </defs>
                <rect
                  width={404}
                  height={404}
                  fill="url(#ad119f34-7694-4c31-947f-5c9d249b21f3)"
                />
              </svg>
              <div className="relative">
                <blockquote className="mt-10">
                  <div className="max-w-3xl mx-auto text-2xl font-medium leading-9 text-center text-gray-900">
                    <p>
                      &ldquo;Lorem ipsum dolor sit amet consectetur adipisicing
                      elit. Nemo expedita voluptas culpa sapiente alias
                      molestiae. Numquam corrupti in laborum sed rerum et
                      corporis.&rdquo;
                    </p>
                  </div>
                  <footer className="mt-8">
                    <div className="md:flex md:items-center md:justify-center">
                      <div className="md:flex-shrink-0">
                        <img
                          className="w-10 h-10 mx-auto rounded-full"
                          src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                          alt=""
                        />
                      </div>
                      <div className="mt-3 text-center md:mt-0 md:ml-4 md:flex md:items-center">
                        <div className="text-base font-medium text-gray-900">
                          Judith Black
                        </div>

                        <svg
                          className="hidden w-5 h-5 mx-1 text-indigo-600 md:block"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M11 0h3L9 20H6l5-20z" />
                        </svg>

                        <div className="text-base font-medium text-gray-500">
                          CEO, Workcation
                        </div>
                      </div>
                    </div>
                  </footer>
                </blockquote>
              </div>
            </div>
          </section>

          {/* About */}
          <div className="pb-16 bg-gradient-to-r from-stone-800 to-stone-900 lg:pb-0 lg:z-10 lg:relative">
            <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-3 lg:gap-8">
              <div className="relative lg:-my-8">
                <div className="max-w-md px-4 mx-auto sm:max-w-3xl sm:px-6 lg:p-0 lg:h-full">
                  <div className="overflow-hidden shadow-xl aspect-w-10 aspect-h-6 rounded-xl sm:aspect-w-16 sm:aspect-h-7 lg:aspect-none lg:h-full">
                    <img
                      className="object-cover lg:h-full lg:w-full"
                      src="https://images.unsplash.com/photo-1520333789090-1afc82db536a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2102&q=80"
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <div className="mt-12 lg:m-0 lg:col-span-2 lg:pl-8">
                <div className="max-w-md px-4 mx-auto sm:max-w-2xl sm:px-6 lg:px-0 lg:py-20 lg:max-w-none">
                  <blockquote>
                    <div>
                      <p className="mt-6 text-lg font-light text-white">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Sed urna nulla vitae laoreet augue. Amet feugiat est
                        integer dolor auctor adipiscing nunc urna, sit.
                      </p>
                      <p className="mt-6 text-lg font-light text-white">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Sed urna nulla vitae laoreet augue. Lorem ipsum dolor
                        sit amet, consectetur adipiscing elit. Sed urna nulla
                        vitae laoreet augue. Amet feugiat est integer dolor
                        auctor adipiscing nunc urna, sit.
                      </p>
                    </div>
                    <footer className="mt-6">
                      <p className="text-base font-medium text-white">
                        Albina Kalvik
                      </p>
                      <p className="text-base font-medium text-stone-500">
                        Meeste juuksur
                      </p>
                    </footer>
                  </blockquote>
                </div>
              </div>
            </div>
          </div>

          {/* Images Section */}
          <div className="relative overflow-hidden bg-black">
            <div className="pt-16 pb-80 sm:pt-24 sm:pb-40 lg:pt-40 lg:pb-48">
              <div className="relative px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 sm:static">
                <div className="sm:max-w-lg">
                  <h1 className="text-4xl font-extrabold tracking-tight text-white font sm:text-6xl">
                    Summer styles are finally here
                  </h1>
                  <p className="mt-4 text-xl text-gray-500">
                    This year, our new summer collection will shelter you from
                    the harsh elements of a world that doesn't care if you live
                    or die.
                  </p>
                </div>
                <div>
                  <div className="mt-10">
                    {/* Decorative image grid */}
                    <div
                      aria-hidden="true"
                      className="pointer-events-none lg:absolute lg:inset-y-0 lg:max-w-7xl lg:mx-auto lg:w-full"
                    >
                      <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                        <div className="flex items-center space-x-6 lg:space-x-8">
                          <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                            <div className="h-64 overflow-hidden rounded-lg w-44 sm:opacity-0 lg:opacity-100">
                              <img
                                src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-01.jpg"
                                alt=""
                                className="object-cover object-center w-full h-full"
                              />
                            </div>
                            <div className="h-64 overflow-hidden rounded-lg w-44">
                              <img
                                src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-02.jpg"
                                alt=""
                                className="object-cover object-center w-full h-full"
                              />
                            </div>
                          </div>
                          <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                            <div className="h-64 overflow-hidden rounded-lg w-44">
                              <img
                                src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-03.jpg"
                                alt=""
                                className="object-cover object-center w-full h-full"
                              />
                            </div>
                            <div className="h-64 overflow-hidden rounded-lg w-44">
                              <img
                                src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-04.jpg"
                                alt=""
                                className="object-cover object-center w-full h-full"
                              />
                            </div>
                            <div className="h-64 overflow-hidden rounded-lg w-44">
                              <img
                                src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-05.jpg"
                                alt=""
                                className="object-cover object-center w-full h-full"
                              />
                            </div>
                          </div>
                          <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                            <div className="h-64 overflow-hidden rounded-lg w-44">
                              <img
                                src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-06.jpg"
                                alt=""
                                className="object-cover object-center w-full h-full"
                              />
                            </div>
                            <div className="h-64 overflow-hidden rounded-lg w-44">
                              <img
                                src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-07.jpg"
                                alt=""
                                className="object-cover object-center w-full h-full"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <a
                      href="#"
                      className="inline-block px-8 py-3 font-medium text-center text-white rounded-md shadow bg-gradient-to-r from-amber-600 to-orange-800 hover:from-amber-700 hover:to-orange-900 "
                    >
                      Shop Collection
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </div>
  );
}
