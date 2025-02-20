"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      className="relative flex flex-col items-center justify-center h-screen text-center 
      bg-gradient-to-b from-white to-lightBg dark:from-black dark:to-darkBg 
      transition-all duration-500 ease-in-out overflow-hidden px-md-6 animate-gradient"
    >
      {/* Text Container with Background Image */}
      <motion.div
        className="relative z-[1] bg-[url('/hero-bg.png')] bg-no-repeat bg-center 
        bg-cover w-full h-full flex flex-col items-center justify-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        {/* Title with Arrow Icon */}
        <motion.div
          className="text-5xl md:text-7xl font-bold text-black dark:text-white flex flex-col items-center"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.2 } },
          }}
        >
          <motion.div className="flex items-center gap-4" variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}>
            <span>
              Building your{" "}
              <motion.span className="text-gradient drop-shadow-lg" variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}>
                vision
              </motion.span>
            </span>
            <motion.div
              animate={{ rotate: [0, -5, 5, 0] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            >
              <Image src="/arrow-icon.png" alt="Growth Arrow Icon" width={95} height={95} className="w-16 md:w-24" />
            </motion.div>
          </motion.div>

          <motion.span variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}>
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
