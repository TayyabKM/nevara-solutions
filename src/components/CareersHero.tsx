"use client";

import { motion } from "framer-motion";

export default function CareersHero() {
  return (
    <section className="relative flex flex-col items-center justify-center h-[70vh] text-center">
      <motion.h1
        className="text-5xl md:text-7xl font-bold text-black dark:text-white drop-shadow-lg"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Join <span className="text-gradient">Nevara Solutions</span>
      </motion.h1>

      <motion.p
        className="text-lg md:text-xl mt-4 text-gray-700 dark:text-gray-300 max-w-2xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        We're always looking for talented, driven individuals to join our
        growing software team.
      </motion.p>
    </section>
  );
}
