"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="text-center py-20"
    >
      <h1 className="text-4xl md:text-5xl font-bold text-gradient">
        Digital Marketing & Brand Building
      </h1>
      <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
        Stand Out. Get Noticed. Grow Faster.
      </p>
      <p className="mt-2 text-gray-600 dark:text-gray-400">
        At Nevara Solutions, we use data-driven strategies, creative storytelling, and innovative marketing techniques to help businesses achieve their goals.
      </p>
    </motion.div>
  );
}
