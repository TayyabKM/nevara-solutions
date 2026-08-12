"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function GroupAnnouncementBanner() {
  return (
    <section className="relative py-4 px-4">
      <div className="container max-w-screen-xl mx-auto">
        <Link href="/mmt-group">
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 text-center
            rounded-full border border-black/10 dark:border-white/10 bg-gray-200/50 dark:bg-gray-700/50
            backdrop-blur-md px-6 py-3 hover:bg-gray-200/80 dark:hover:bg-gray-700/80 transition-colors cursor-pointer"
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.4 }}
          >
            <span className="text-gradient font-bold text-sm sm:text-base">Big News</span>
            <span className="text-sm sm:text-base text-black dark:text-white">
              Nevara Solutions is now part of the <span className="font-semibold">MMT Group</span> —
              MMT Consulting is our parent company.
            </span>
            <span className="text-sm sm:text-base font-semibold text-gradient whitespace-nowrap">Learn more →</span>
          </motion.div>
        </Link>
      </div>
    </section>
  );
}
