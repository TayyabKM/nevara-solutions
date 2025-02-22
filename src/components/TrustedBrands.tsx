"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function TrustedBrands() {
  return (
<motion.section
  className="relative flex flex-col items-center justify-center py-16 w-full bg-center bg-no-repeat"
  style={{
    backgroundImage: "url('/brands-bg.png')",
    backgroundSize: "40%", // Enlarges the background
    backgroundPosition: "center center", // Ensures centering
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
        className="my-6 w-full max-w-[100%] md:max-w-7xl bg-gray-400 dark:bg-[rgba(34,34,34,0.65)]
        px-8 md:px-16 lg:px-32 py-4 rounded-2xl shadow-lg flex flex-wrap justify-between items-center"
        variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
      >
        <Image src="/amazlogo.svg" alt="Amaz Logo" width={170} height={160} className="theme-logo" />
        <Image src="/qiblalogo.svg" alt="Qibla Logo" width={170} height={160} className="theme-logo" />
        <Image src="/rockylogo.svg" alt="Rocky Logo" width={170} height={160} className="theme-logo" />
        <Image src="/dr-logo.svg" alt="Dr. Donna Logo" width={170} height={160} className="theme-logo" />
      </motion.div>
    </motion.section>
  );
}
