"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="relative text-center py-16 px-6 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg shadow-lg"
    >
      <h1 className="text-4xl md:text-5xl font-bold">
        Build the Future of <br /> <span className="text-gradient">SaaS Software</span>
      </h1>
      <p className="mt-4 text-lg max-w-2xl mx-auto">
        We help businesses build high-performing SaaS products that drive efficiency, improve workflows, and generate consistent revenue.
      </p>
      <motion.a
        href="/contact"
        className="mt-6 inline-block bg-white text-blue-600 font-semibold px-6 py-3 rounded-lg shadow-md hover:scale-105 transition-transform"
      >
        Let's Innovate Together
      </motion.a>
    </motion.div>
  );
}
