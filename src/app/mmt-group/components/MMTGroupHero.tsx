"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function MMTGroupHero() {
  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.35 } },
  };

  return (
    <section className="relative min-h-[85vh] flex flex-col items-center justify-center text-center px-4 pt-32 pb-16 overflow-hidden">
      {/* Eclipses */}
      <motion.div
        className="ecclipse size-[350px] absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 -z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      />

      <motion.div
        className="flex flex-col items-center gap-6 max-w-4xl"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div
          variants={itemVariants}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-black/10 dark:border-white/10 bg-gray-200/50 dark:bg-gray-700/50 backdrop-blur-md text-sm font-medium uppercase tracking-widest text-gradient"
        >
          Big News
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className="text-4xl md:text-6xl font-bold text-black dark:text-white leading-tight"
        >
          Nevara Solutions is Now Part of the{" "}
          <span className="text-gradient drop-shadow-lg">MMT Group</span>
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-2xl"
        >
          Nevara Solutions has joined the MMT Group, with{" "}
          <span className="font-semibold text-black dark:text-white">MMT Consulting</span> as
          our parent company. Together, we bring clients a single group that spans data
          strategy and intelligence through MMT Consulting, and custom digital execution
          through Nevara Solutions.
        </motion.p>

        <motion.div variants={itemVariants} className="flex flex-wrap items-center justify-center gap-4 mt-2">
          <Link href="/contact">
            <motion.button
              className="px-6 py-3 text-white bg-gradient-to-r from-blue-500 to-purple-500 text-sm sm:text-base
              rounded-lg shadow-lg hover:opacity-90 transition-all duration-300 hover:shadow-xl"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Start a Conversation
            </motion.button>
          </Link>
          <Link href="https://mmt-consulting.com" target="_blank" rel="noopener noreferrer">
            <motion.button
              className="px-6 py-3 text-black dark:text-white border border-black text-sm sm:text-base
                dark:border-white rounded-lg hover:bg-black hover:text-white
                dark:hover:bg-white dark:hover:text-black transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Visit MMT Consulting
            </motion.button>
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
