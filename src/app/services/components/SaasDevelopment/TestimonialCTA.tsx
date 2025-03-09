"use client";

import { motion } from "framer-motion";

export default function TestimonialCTA() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="relative bg-gradient-to-r from-blue-500 to-purple-500 text-white text-center py-16 px-6 rounded-lg shadow-lg"
    >
      <blockquote className="text-xl md:text-2xl italic max-w-2xl mx-auto">
        "Nevara Solutions helped us launch a SaaS platform that revolutionized our business. Their expertise was invaluable!"
      </blockquote>
      <p className="mt-4 font-semibold text-lg">- Rocky</p>

      <motion.a
        href="/contact"
        className="mt-6 inline-block bg-white text-blue-600 font-semibold px-6 py-3 rounded-lg shadow-md hover:scale-105 transition-transform"
      >
        Let's Innovate Together
      </motion.a>
    </motion.div>
  );
}
