import { Link } from "wouter";

export default function HeroSection() {
  return (
    <div className="relative bg-fungi-green overflow-hidden mt-8">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          <div className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              <h1 className="text-4xl tracking-tight font-extrabold text-fungi-cream sm:text-5xl md:text-6xl font-montserrat">
                <span className="block">Grow Your Own</span>
                <span className="block text-fungi-moss">
                  Gourmet Mushrooms
                </span>
              </h1>
              <p className="mt-3 text-base text-fungi-cream sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0 font-opensans">
                From spore to plate with ease. Sustainable cultivation supplies,
                expert knowledge, and a supportive community for mushroom
                enthusiasts of all levels.
              </p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow">
                  <a
                    href="#"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-fungi-bark hover:bg-opacity-90 md:py-4 md:text-lg md:px-10 transition duration-150"
                  >
                    Shop Now
                  </a>
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <a
                    href="#"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-fungi-bark bg-fungi-cream hover:bg-white md:py-4 md:text-lg md:px-10 transition duration-150"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <img
          className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
          src="https://grocycle.com/wp-content/uploads/2022/04/Oyster-mushrooms-growing-on-a-sawdust-block-2-1024x683.jpg?auto=compress&cs=tinysrgb&w=1200"
          alt="Various gourmet mushrooms"
        />
      </div>
    </div>
  );
}
