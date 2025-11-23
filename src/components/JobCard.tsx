"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function JobCard({ job }: any) {
  return (
    <motion.div
      className="p-8 bg-gray-200/40 dark:bg-gray-800/50 border border-white/10 backdrop-blur-xl
      rounded-lg shadow-lg transition-all hover:-translate-y-2 hover:shadow-2xl"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
    >
      <h3 className="text-2xl font-bold text-black dark:text-white">{job.title}</h3>

      <p className="text-gray-600 dark:text-gray-300 mt-2">{job.location}</p>

      <p
        className={`mt-3 font-semibold ${
          job.status === "Open" ? "text-green-500" : "text-red-500"
        }`}
      >
        {job.status}
      </p>

      <Link href={`/careers/${job.slug}`}>
        <button
          disabled={job.status === "Closed"}
          className={`mt-6 px-4 py-2 rounded-md text-white text-sm transition ${
            job.status === "Closed"
              ? "bg-gray-500 cursor-not-allowed"
              : "bg-gradient-to-r from-blue-500 to-purple-500 hover:opacity-90"
          }`}
        >
          {job.status === "Closed" ? "Position Filled" : "View Details"}
        </button>
      </Link>
    </motion.div>
  );
}
