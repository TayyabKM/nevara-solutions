"use client";

import { motion } from "framer-motion";

const metrics = [
  { title: "Boosted Revenue", description: "Unlock new revenue streams with scalable SaaS solutions." },
  { title: "Streamlined Operations", description: "Reduce expenses and enhance operational efficiency." },
  { title: "Enhanced Productivity", description: "Optimize workflows with intuitive SaaS applications." },
];

export default function SuccessMetrics() {
  return (
    <div className="py-12 text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-gradient">Your SaaS Success, Backed by Data</h2>
      <div className="grid sm:grid-cols-3 gap-6 mt-8">
        {metrics.map((metric, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="bg-gray-800 text-white p-6 rounded-lg shadow-md hover:shadow-lg transition"
          >
            <h3 className="text-xl font-bold">{metric.title}</h3>
            <p className="mt-2 text-gray-400">{metric.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
