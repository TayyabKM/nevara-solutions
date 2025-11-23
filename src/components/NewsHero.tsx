"use client";

import { motion } from "framer-motion";

export default function NewsHero() {
  return (
    <div className="relative min-h-[60vh] md:min-h-[70vh] flex items-center justify-center">
      {/* Background Glow */}
      <motion.div
        className="ecclipse size-[350px] absolute left-1/2 top-1/2 
                   -translate-x-1/2 -translate-y-1/2 opacity-40"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
      />

      {/* Text */}
      <motion.div
        className="relative text-center px-4 md:px-0"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-4xl md:text-6xl font-bold text-black dark:text-white">
          Nevara <span className="text-gradient">News</span>
        </h1>

        <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto text-gray-700 dark:text-gray-300">
          Stay updated with the latest announcements, launches, and company updates from Nevara Solutions.
        </p>
      </motion.div>
    </div>
  );
}
