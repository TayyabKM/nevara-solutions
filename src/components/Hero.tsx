"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  const variants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3, ease: "circOut" } },
  };

  return (
    <section
      className="relative flex flex-col items-center justify-center h-screen text-center backdrop-blur-md
      transition-all duration-500 ease-in-out overflow-hidden"
    >
      {/** ECCLIPSES */}
      <div className="ecclipse size-[240px] dark:size-[400px] absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute ecclipse -bottom-32 -left-[150px] size-[300px]" />

      {/* Text Container with Background Image */}
      <motion.div
        className="relative bg-no-repeat bg-center 
        bg-cover w-full h-full flex flex-col items-center justify-center p-4"
        variants={{
          visible: { transition: { staggerChildren: 0.2 } },
        }}
        initial="hidden"
        animate="visible"
      >
        {/* Title with Arrow Icon */}
        <motion.div
          className="text-4xl md:text-7xl font-bold text-black dark:text-white flex flex-col items-center text-center md:text-left"
          variants={variants}
        >
          {/* Line 1: "Building your vision" (with and without Arrow based on screen size) */}
          <div className="flex items-center gap-2 md:gap-4 md:flex-nowrap">
            Building your <span className="text-gradient drop-shadow-lg">vision</span>
            {/* Arrow Icon (Only visible on Desktop `md:` and larger) */}
            {/* Arrow Icon (Only visible on DESKTOP, Hidden on Mobile & Laptop) */}
            <motion.div
              className="hidden md:block lg:block" // Shows only on DESKTOP (`md:` and larger)
              animate={{ rotate: [0, -5, 5, 0] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            >
              <Image src="/arrow-icon.png" alt="Growth Arrow Icon" width={95} height={95} className="w-16 md:w-24" />
            </motion.div>
          </div>

          {/* Line 2: "One byte at a time" */}
          <motion.span className="text-4xl md:text-7xl md:whitespace-nowrap" variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}>
            One{" "}
            <motion.span className="text-gradient drop-shadow-lg" variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}>
              byte
            </motion.span>{" "}
            at a time
          </motion.span>
        </motion.div>

        {/* Subtitle */}
        <motion.p className="mt-4 text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-2xl" variants={variants}>
          We increase revenue and ensure sustainable long-term growth through powerful web solutions.
        </motion.p>

        {/* Call-to-Action Buttons */}
        <motion.div className="mt-8 flex space-x-4" variants={variants}>
          <motion.button
            className="px-6 py-3 text-white bg-gradient-to-r from-blue-500 to-purple-500 
            rounded-lg shadow-lg hover:opacity-90 transition-all duration-300 hover:shadow-xl"
            variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Book A Meeting
          </motion.button>

          <motion.button
            className="px-6 py-3 text-black dark:text-white border border-black 
            dark:border-white rounded-lg hover:bg-black hover:text-white 
            dark:hover:bg-white dark:hover:text-black transition-all duration-300"
            variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Learn More
          </motion.button>
        </motion.div>
      </motion.div>

      {/* Floating Stars */}
      <motion.img
        src="/star.svg"
        alt="Star"
        className="absolute top-36 left-48 w-6 md:w-8 opacity-100"
        animate={{ y: [0, -10, 0] }}
        transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
      />
      <motion.img
        src="/star.svg"
        alt="Star"
        className="absolute bottom-16 right-16 w-8 md:w-12 opacity-100 animate-glimmer"
        animate={{ y: [0, -10, 0] }}
        transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
      />
    </section>
  );
}
