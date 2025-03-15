"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Clients() {
  return (
    <section className="relative w-full py-20 px-6 md:px-12 lg:px-24">
      {/* ✅ Section Heading */}
      <motion.h2
        className="text-3xl md:text-5xl font-bold text-center mb-16 text-lightText dark:text-darkText"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        Companies <span className="text-gradient">We&apos;ve Helped Grow</span>
      </motion.h2>

      {/* ✅ Logos Container - Centered Properly */}
      <motion.div
        className="my-6 w-full max-w-5xl bg-gray-300/50 dark:bg-gray-700/50 relative backdrop-blur-md 
        px-6 md:px-16 lg:px-32 py-8 md:py-4 rounded-2xl shadow-lg 
        flex flex-col md:flex-row justify-center items-center md:justify-between gap-6 md:gap-0 mx-auto"
        variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
      >
        {/* Logos align in a row on desktop and stack vertically on mobile */}
        <Image src="/amazlogo.svg" alt="Amaz Logo" width={170} height={160} className="theme-logo my-3 md:my-0" />
        <Image src="/rockylogo.svg" alt="Rocky Logo" width={170} height={160} className="theme-logo my-3 md:my-0" />
        <Image src="/qiblalogo.svg" alt="Qibla Logo" width={170} height={160} className="theme-logo my-3 md:my-0" />
        <Image src="/dr-logo.svg" alt="Dr. Donna Logo" width={170} height={160} className="theme-logo my-2 md:my-0" />
      </motion.div>
    </section>
  );
}
