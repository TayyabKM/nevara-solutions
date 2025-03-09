"use client";

import { motion } from "framer-motion";

const points = [
  "Data-Driven Marketing for Maximum Impact.",
  "Creative & Engaging Brand Strategies.",
  "Proven Track Record of Growth & Success.",
  "Tailored Solutions for Every Business Size.",
  "Experienced Team.",
];

export default function WhyChooseUs() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="max-w-3xl mx-auto py-10"
    >
      <h2 className="text-3xl font-bold text-center">Why Choose Nevara?</h2>
      <ul className="mt-6 space-y-3 text-lg text-gray-700 dark:text-gray-300">
        {points.map((point, index) => (
          <motion.li
            key={index}
            className="flex items-center gap-2"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.2 }}
          >
            ✅ {point}
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
}
