"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import TrustedBrands from "./TrustedBrands"; // Import the new component

export default function Hero() {
  const variants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3, ease: "circOut" } },
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-white to-lightBg dark:from-black dark:to-darkBg transition-all duration-500 ease-in-out">
      
      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center h-screen text-center px-md-6 animate-gradient">
        
        {/* Background Image */}
        <motion.div
          className="absolute inset-0 z-[0] bg-[url('/hero-bg.png')] bg-no-repeat bg-center bg-[length:260%] md:bg-[length:80%] mt-5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        ></motion.div>

        {/* ⭐ Animated Stars (Always Visible, Only Glimmering) */}
        <img
          src="/star.svg"
          alt="Glowing Star"
          className="absolute w-8 md:w-12 top-40 left-36 opacity-70 animate-glimmer"
        />

        <img
          src="/star.svg"
          alt="Glowing Star"
          className="absolute w-6 md:w-10 bottom-16 right-24 opacity-50 animate-glimmer"
        />

        {/* Text Container */}
        <motion.div
          className="relative z-[1] flex flex-col items-center justify-center w-full h-full"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          {/* Title with Arrow Icon */}
          <motion.div
            className="text-4xl md:text-7xl font-bold text-black dark:text-white flex flex-col items-center text-center md:text-left"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.2 } },
            }}
          >
            {/* Line 1: "Building your vision" */}
            <motion.div className="flex items-center gap-2 md:gap-4 md:flex-nowrap" variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}>
              <span className="whitespace-nowrap">
                Building your{" "}
                <motion.span className="text-gradient drop-shadow-lg" variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}>
                  vision
                </motion.span>
              </span>

              {/* Arrow Icon (Desktop Only) */}
              <motion.div
                className="hidden md:block lg:block"
                animate={{ rotate: [0, -5, 5, 0] }}
                transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
              >
                <Image src="/arrow-icon.png" alt="Growth Arrow Icon" width={95} height={95} className="w-16 md:w-24" />
              </motion.div>
            </motion.div>

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
          <motion.p
            className="mt-4 text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-2xl"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            We increase revenue and ensure sustainable long-term growth through powerful web solutions.
          </motion.p>

          {/* Call-to-Action Buttons */}
          <motion.div className="mt-8 flex space-x-4" initial="hidden" animate="visible" variants={{
            hidden: { opacity: 0, y: 10 },
            visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.2 } },
          }}>
            <motion.button
              className="px-6 py-3 text-white bg-gradient-to-r from-blue-500 to-purple-500
              rounded-lg shadow-lg hover:opacity-90 transition-all duration-300 hover:shadow-xl"
              variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Take the First Step
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
      </section>

      {/* Trusted Brands Section */}
      <TrustedBrands />
    </div>
  );
}
