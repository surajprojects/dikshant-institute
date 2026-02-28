export default function HeroSection() {
  return (
    <>
      <section className="w-full pt-[3.8rem]">
        {/* Hero Section */}
        <div className="relative w-full">
          {/* Background Image */}
          <img
            src="/images/tiger-hero-page.jpg"
            alt="hero-section"
            className="w-full h-[38rem] object-cover"
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-white/100 to-white/25"></div>
          {/* Content */}
          <div className="absolute inset-0 mx-auto w-full xl:max-w-7xl px-4 md:px-8 flex flex-col justify-center">
            <div>
              <h1 className="text-7xl font-bold flex flex-col">
                <span className="text-[#2a2522]">Where words</span>
                <span className="text-orange-500 mt-1">roar to life</span>
              </h1>
              <p className="text-[#7c706a] my-8 text-2xl max-w-xl">
                Discover stories, thinking, and expertise from writers on any topic that matters to
                you.
              </p>
              {/* CTA */}
              {/* <button
                onClick={scrollToAbout}
                type="button"
                className="text-white text-sm bg-orange-500 py-3 px-8 rounded-md flex justify-center items-center font-medium hover:cursor-pointer hover:bg-orange-600 duration-300 ease-out"
              >
                Start Reading
                <ArrowRightIcon className="w-4 h-4 ml-2" />
              </button> */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
