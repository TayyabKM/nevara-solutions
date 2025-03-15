"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function CTA() {
  return (
    <section className="relative w-full py-20 px-6 md:px-12 lg:px-24 text-center">
      {/* ✅ Background Glow Effects */}
      <div className="absolute ecclipse -top-32 -left-[150px] size-[300px]" />
      <div className="absolute ecclipse -bottom-32 right-0 sm:-right-[-20px] size-[300px]" />

      {/* ✅ Heading */}
      <motion.h2
        className="text-3xl md:text-5xl font-bold text-lightText dark:text-darkText mb-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        Unlock Your Business’s <span className="text-gradient">Full Potential</span>
      </motion.h2>

      {/* ✅ Subtitle */}
      <motion.p
        className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        Collaborate with us to create digital strategies that deliver measurable results and drive sustainable growth.
      </motion.p>

      {/* ✅ CTA Button */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <Link href="/contact">
          <motion.button
            className="px-8 py-4 text-white bg-gradient-to-r from-blue-500 to-purple-500 text-lg sm:text-xl 
            rounded-lg shadow-lg hover:opacity-90 transition-all duration-300 hover:shadow-xl"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Connect with Us
          </motion.button>
        </Link>
      </motion.div>
    </section>
  );
}
