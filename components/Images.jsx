const Images = () => {
  return (
    <div>
      <div className="bg-black pb-14">
        <div className="relative px-4 pt-6 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="-mt-14 grid grid-cols-1 xs:grid-cols-2 grid-rows-3 xs:grid-rows-2 gap-5 xs:h-[600px]">
            <img
              className="object-cover w-full h-full col-span-1 row-span-1 transition-opacity rounded-lg xs:col-span-2 md:col-span-1 md:row-span-2 md:rounded-xl"
              src="img/interior-1.jpg"
              alt="A-barber interior"
            />
            <img
              className="object-cover w-full h-full col-span-1 row-span-1 transition-opacity rounded-lg md:rounded-xl"
              src="img/interior-2.jpg"
              alt="A-barber interior"
            />
            <img
              className="object-cover w-full h-full col-span-1 row-span-1 transition-opacity rounded-lg md:rounded-xl"
              src="img/interior-3.jpg"
              alt="A-barber interior"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Images;
