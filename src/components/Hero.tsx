// src/components/Hero.tsx
export default function Hero() {
    return (
      <section className="flex flex-col items-center justify-center h-screen text-center bg-gradient-to-b from-darkBg to-black">
        <h1 className="text-5xl font-bold text-white">
          Bringing Your Dream Into Reality
        </h1>
        <p className="mt-4 text-lg text-gray-300">
          Empowering businesses with innovative solutions.
        </p>
        <div className="mt-6">
          <button className="px-6 py-3 bg-blue-500 text-white rounded-lg">Contact Us</button>
          <button className="px-6 py-3 ml-4 border border-white text-white rounded-lg">
            Explore Services
          </button>
        </div>
      </section>
    );
  }
  