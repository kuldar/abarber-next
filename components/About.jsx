const About = () => {
  return (
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
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  urna nulla vitae laoreet augue. Amet feugiat est integer dolor
                  auctor adipiscing nunc urna, sit.
                </p>
                <p className="mt-6 text-lg font-light text-white">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  urna nulla vitae laoreet augue. Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit. Sed urna nulla vitae laoreet
                  augue. Amet feugiat est integer dolor auctor adipiscing nunc
                  urna, sit.
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
  );
};

export default About;
