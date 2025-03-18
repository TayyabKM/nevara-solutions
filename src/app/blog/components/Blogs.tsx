"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Hero() {
  const variants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3, ease: "circOut" } },
  };

  return (
    <div className="relative min-h-screen ">
      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center h-screen text-center backdrop-blur-md">
        {/** ECCLIPSES */}
        <motion.div
          className="ecclipse size-[350px] absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        />

        {/* Text Container */}
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
            <div className="flex items-center gap-2 md:gap-2 lg:gap-4 md:flex-nowrap">
              Coming <span className="text-gradient">Soon</span>
              <motion.span
                className="hidden md:block lg:block" // Shows only on DESKTOP (`md:` and larger)
                animate={{ rotate: [0, -5, 5, 0] }}
                transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
              >
                <Image src="/arrow-icon.png" alt="Growth Arrow Icon" width={95} height={95} className="w-16 md:w-24" />
              </motion.span>
            </div>

          </motion.div>

          {/* Subtitle */}
          <motion.p className="mt-4 text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-2xl" variants={variants}>
            Stay tuned! 
          </motion.p>
        </motion.div>
      </section>
    </div>
  );
}
