export default function Hero() {
  return (
    <section
      className="flex flex-col items-center justify-center h-screen text-center 
      bg-gradient-to-b from-white to-lightBg dark:from-black dark:to-darkBg 
      transition-all duration-500 ease-in-out"
    >
      {/* Title */}
      <h1 className="text-5xl md:text-6xl font-bold text-black dark:text-white transition-all duration-500 ease-in-out">
        Bringing Your Dream Into <span className="text-gradient">Reality</span>
      </h1>

      {/* Subtitle */}
      <p className="mt-4 text-lg md:text-xl text-gray-700 dark:text-gray-300 transition-all duration-500 ease-in-out">
        We increase revenue and ensure sustainable long-term growth for your business 
        through powerful Webflow websites.
      </p>

      {/* Call-to-Action Buttons */}
      <div className="mt-8 flex space-x-4">
        {/* Primary Button */}
        <button className="px-6 py-3 text-white bg-gradient-to-r from-blue-500 to-purple-500 
          rounded-lg shadow-lg hover:opacity-90 transition-all duration-500 ease-in-out">
          Book A Meeting
        </button>

        {/* Secondary Button */}
        <button className="px-6 py-3 text-black dark:text-white border border-black 
          dark:border-white rounded-lg hover:bg-black hover:text-white 
          dark:hover:bg-white dark:hover:text-black transition-all duration-500 ease-in-out">
          Learn More
        </button>
      </div>
    </section>
  );
}
