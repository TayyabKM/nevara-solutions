import Image from "next/image";

export default function Hero() {
  return (
    <section
      className="relative flex flex-col items-center justify-center h-screen text-center 
      bg-gradient-to-b from-white to-lightBg dark:from-black dark:to-darkBg 
      transition-all duration-500 ease-in-out overflow-hidden px-6"
    >
      {/* Text Container with Background Image */}
      <div
        className="relative z-[1] bg-[url('/hero-bg.png')] bg-no-repeat bg-center 
        bg-cover w-full h-full flex flex-col items-center justify-center"
      >
        {/* Title with Arrow Icon in One Line */}
        <div className="text-5xl md:text-7xl font-bold text-black dark:text-white transition-all duration-500 ease-in-out flex flex-col items-center">
          <div className="flex items-center gap-4">
            <span>Building your <span className="text-gradient">vision</span></span>
            <Image
              src="/arrow-icon.png"
              alt="Growth Arrow Icon"
              width={95}
              height={95}
              className="w-16 md:w-24"
            />
          </div>
          <span>
            One <span className="text-gradient">byte </span> at a time
          </span> 
        </div>

        {/* Subtitle */}
        <p className="mt-4 text-lg md:text-xl text-gray-700 dark:text-gray-300 transition-all duration-500 ease-in-out max-w-2xl">
          We increase revenue and ensure sustainable long-term growth through powerful web solutions. 
        </p>

        {/* Call-to-Action Buttons */}
        <div className="mt-8 flex space-x-4">
          <button className="px-6 py-3 text-white bg-gradient-to-r from-blue-500 to-purple-500 
            rounded-lg shadow-lg hover:opacity-90 transition-all duration-500 ease-in-out">
            Book A Meeting
          </button>

          <button className="px-6 py-3 text-black dark:text-white border border-black 
            dark:border-white rounded-lg hover:bg-black hover:text-white 
            dark:hover:bg-white dark:hover:text-black transition-all duration-500 ease-in-out">
            Learn More
          </button>
        </div>
      </div>

      {/* Small Star (Lowered Position) */}
      <img
        src="/star.svg"
        alt="Star"
        className="absolute top-36 left-48 w-6 md:w-8 opacity-100 animate-pulse"
      />

      {/* Bigger Star (Now Glimmering) */}
      <img
        src="/star.svg"
        alt="Star"
        className="absolute bottom-16 right-16 w-8 md:w-12 opacity-100 animate-glimmer"
      />
    </section>
  );
}