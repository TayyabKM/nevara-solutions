"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function GroupCTA() {
  return (
    <section className="relative w-full py-20 px-6 md:px-12 lg:px-24 text-center">
      <div className="absolute ecclipse -top-32 -left-[150px] size-[300px] -z-10" />
      <div className="absolute ecclipse -bottom-32 right-0 sm:-right-[-20px] size-[300px] -z-10" />

      <motion.h2
        className="text-3xl md:text-5xl font-bold text-lightText dark:text-darkText mb-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
      >
        One Group. <span className="text-gradient">Full-Stack Capability.</span>
      </motion.h2>

      <motion.p
        className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, delay: 0.15 }}
      >
        Whether you need MMT Consulting&apos;s data strategy and intelligence, Nevara
        Solutions&apos; digital execution, or both working together — the MMT Group has you
        covered from day one.
      </motion.p>

      <motion.div
        className="flex flex-wrap items-center justify-center gap-4"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <Link href="/contact">
          <motion.button
            className="px-8 py-4 text-white bg-gradient-to-r from-blue-500 to-purple-500 text-lg sm:text-xl
            rounded-lg shadow-lg hover:opacity-90 transition-all duration-300 hover:shadow-xl"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Talk to Nevara Solutions
          </motion.button>
        </Link>
        <Link href="https://mmt-consulting.com" target="_blank" rel="noopener noreferrer">
          <motion.button
            className="px-8 py-4 text-black dark:text-white border border-black dark:border-white text-lg sm:text-xl
            rounded-lg hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Talk to MMT Consulting
          </motion.button>
        </Link>
      </motion.div>
    </section>
  );
}
