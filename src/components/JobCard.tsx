"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import dayjs from "dayjs";

export default function JobCard({ job }: any) {
  const postedDate = dayjs(job.postedAt).format("MMM DD, YYYY");
  const isOpen = job.status?.toLowerCase() === "open";

  return (
    <motion.div
      className="p-5 bg-gray-200/40 dark:bg-gray-800/50 border border-white/10 
      backdrop-blur-xl rounded-lg shadow-lg transition-all hover:-translate-y-2 hover:shadow-2xl"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
    >
      <h3 className="text-2xl font-bold text-black dark:text-white leading-snug">
        {job.title}
      </h3>

      <div className="flex items-center gap-3 mt-4 flex-wrap">
        <span className="px-3 py-1 text-sm rounded-full bg-gray-300/20 dark:bg-gray-700/40 
         text-gray-800 dark:text-gray-200
         border border-white/10">
          {job.location.toLowerCase()}
        </span>

        <span className="px-3 py-1 text-sm rounded-full bg-gray-300/20 dark:bg-gray-700/40 
         text-gray-800 dark:text-gray-200
         border border-white/10">
          {job.type}
        </span>

        <span
          className={`px-3 py-1 text-sm rounded-full ${isOpen
              ? "bg-green-500/20 text-green-400 border border-green-500/40"
              : "bg-red-500/20 text-red-400 border border-red-500/40"
            }`}
        >
          {job.status.toLowerCase()}
        </span>
      </div>

      {job.shortDescription && (
        <p className="text-gray-700 dark:text-gray-300 mt-4 line-clamp-3">
          {job.shortDescription}
        </p>
      )}

      <p className="text-xs text-gray-500 dark:text-gray-400 mt-4">
        Posted on {postedDate}
      </p>

      <Link href={`/careers/${job.slug}`}>
        <button
          disabled={!isOpen}
          className={`mt-6 px-4 py-2 rounded-md text-white text-sm transition ${!isOpen
              ? "bg-gray-500 cursor-not-allowed"
              : "bg-gradient-to-r from-blue-500 to-purple-500 hover:opacity-90"
            }`}
        >
          {isOpen ? "View Details" : "Position Filled"}
        </button>
      </Link>
    </motion.div>
  );
}
