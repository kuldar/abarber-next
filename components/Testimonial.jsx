const Testimonial = () => {
  return (
    <section className="pb-32 overflow-hidden bg-black">
      <div className="relative px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="relative">
          <blockquote className="mt-10">
            <div className="max-w-3xl mx-auto text-2xl italic font-light leading-9 text-center text-stone-500">
              <p>
                &ldquo;Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Nemo expedita voluptas culpa sapiente alias molestiae. Numquam
                corrupti in laborum sed rerum et corporis.&rdquo;
              </p>
            </div>
            <footer className="mt-8">
              <div className="flex items-center justify-center">
                <div className="flex-shrink-0">
                  <img
                    className="w-10 h-10 mx-auto rounded-full"
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  />
                </div>
                <div className="flex items-center mt-0 ml-4 text-center">
                  <div className="text-lg font-medium text-stone-500">
                    Judith Black
                  </div>
                </div>
              </div>
            </footer>
          </blockquote>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
