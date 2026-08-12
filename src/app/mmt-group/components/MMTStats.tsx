"use client";

import { motion } from "framer-motion";

const stats = [
  { value: "20+", label: "Years Industry Experience" },
  { value: "1,000+", label: "Dashboards Built" },
  { value: "PKR 500B+", label: "Portfolio Impact" },
  { value: "8+", label: "Industries Served" },
];

export default function MMTStats() {
  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  };

  return (
    <section className="relative py-10">
      <div className="container max-w-screen-xl mx-auto px-4">
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 rounded-2xl border border-black/5 dark:border-white/10 bg-gray-200/40 dark:bg-gray-700/40 backdrop-blur-md p-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {stats.map((stat) => (
            <motion.div key={stat.label} variants={itemVariants} className="flex flex-col items-center text-center gap-1">
              <div className="text-gradient font-bold text-3xl md:text-4xl">{stat.value}</div>
              <div className="text-gray-600 dark:text-gray-400 text-sm md:text-base">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
