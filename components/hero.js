/** @format */

export default function Hero() {
  return (
    <div className="bg-[url('/home.jpg')] h-screen w-screen bg-cover bg-center bg-fixed flex items-center relative">
      <div className="absolute inset-0 bg-black/50">
        <div className="container mx-auto px-4 z-10">
          <div className="md:h-screen md:items-center pt-48 text-4xl text-white flex flex-col  gap-[40px]">
            <div>
              <h1>FIND YOUR FAVOURITE FOOD & RECIPIES</h1>
            </div>
            <div>
              <h1>FOOD-SEARCH</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
