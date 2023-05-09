/** @format */
export default function Hero() {
  return (
    <div className="relative dark:bg-violet-100 px-4 pt-16 mx-auto lg:py-32 md:px-8 xl:px-20 scroll-smooth">
      <div className="max-w-xl mx-auto lg:max-w-screen-xl">
        <div className="mb-16 lg:max-w-lg lg:mb-0">
          <div className="max-w-xl mb-6">
            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
              Food😋
            </h2>
            <p className="text-base text-gray-700 md:text-lg">
              Food is any substance consumed by an organism for nutritional
              support. Food is usually of plant, animal,contains essential
              nutrients, such as carbohydrates, fats, proteins, vitamins, or
              minerals.
            </p>
          </div>
          <div className="flex items-center">
            <a
              href={"/auth/login"}
              className="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium  bg-violet-500 text-white transition duration-200 rounded shadow-md  focus:shadow-outline focus:outline-none"
            >
              Taste Now
            </a>
          </div>
        </div>
      </div>
      <div className=" justify-center h-96 lg:w-1/2 xl:w-1/2 lg:absolute lg:justify-start lg:top-0 lg:right-0 ">
        <img src="FOODHOME.png" alt="mockup" />
      </div>
    </div>
  );
}
