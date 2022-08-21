const Testimonial = ({ t }) => {
  return (
    <section className="pb-32 overflow-hidden bg-black">
      <div className="relative px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="relative">
          <blockquote className="mt-10">
            <div className="max-w-3xl mx-auto text-2xl italic font-light leading-9 text-center text-stone-500">
              <p>&ldquo;{t.testimonial.text}&rdquo;</p>
            </div>
            <footer className="mt-8">
              <div className="flex items-center justify-center">
                <div className="flex-shrink-0">
                  <img
                    className="w-10 h-10 mx-auto rounded-full"
                    src="https://scontent-hel3-1.cdninstagram.com/v/t51.2885-15/35459251_1927628440589217_3461974619622211584_n.jpg?stp=dst-jpg_e35&cb=2d435ae8-d7f9aae8&_nc_ht=scontent-hel3-1.cdninstagram.com&_nc_cat=109&_nc_ohc=Q6V-_m-jq1cAX8j_IE_&edm=ALQROFkBAAAA&ccb=7-5&ig_cache_key=MTgwODY1NDE1OTE0ODE4OTc1Mw%3D%3D.2-ccb7-5&oh=00_AT_OZbUCBT7bYQdFveDUkfFZhpT5nLooZyQ7Km4TiEQGyA&oe=6308DD65&_nc_sid=30a2ef"
                    alt={t.testimonial.author}
                  />
                </div>
                <div className="flex items-center mt-0 ml-4 text-center">
                  <div className="text-lg font-medium text-stone-500">
                    {t.testimonial.author}
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
