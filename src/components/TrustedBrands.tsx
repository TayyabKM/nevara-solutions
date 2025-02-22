"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function TrustedBrands() {
  return (
    <motion.section
      className="relative flex flex-col items-center justify-center py-16 w-full bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/brands-bg.png')",
        backgroundSize: "30%", // Adjusted for a balanced look
        backgroundPosition: "center center",
      }}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      {/* Title */}
      <div className="flex items-center space-x-2 md:space-x-4">
        <div className="h-[3px] w-6 md:w-12 bg-gradient-to-r from-blue-500 to-purple-500"></div>
        <p className="text-sm md:text-base text-gray-700 dark:text-gray-300">
          TRUSTED BY AMAZING BRANDS
        </p>
        <div className="h-[3px] w-6 md:w-12 bg-gradient-to-r from-blue-500 to-purple-500"></div>
      </div>

      {/* Logos Container */}
      <motion.div
        className="my-6 w-full max-w-[80%] md:max-w-7xl bg-gray-400 dark:bg-[rgba(34,34,34,0.65)]
        px-6 md:px-16 lg:px-32 py-8 md:py-4 rounded-2xl shadow-lg flex flex-col md:flex-row justify-center items-center md:justify-between gap-6 md:gap-0"
        variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
      >
        {/* Logos align in a row on desktop and stack vertically on mobile */}
        <Image src="/amazlogo.svg" alt="Amaz Logo" width={170} height={160} className="theme-logo my-3 md:my-0" />
        <Image src="/rockylogo.svg" alt="Rocky Logo" width={170} height={160} className="theme-logo my-3 md:my-0" />
        <Image src="/qiblalogo.svg" alt="Qibla Logo" width={170} height={160} className="theme-logo my-3 md:my-0" />
        <Image src="/dr-logo.svg" alt="Dr. Donna Logo" width={170} height={160} className="theme-logo my-2 md:my-0" />
      </motion.div>
    </motion.section>
  );
}
