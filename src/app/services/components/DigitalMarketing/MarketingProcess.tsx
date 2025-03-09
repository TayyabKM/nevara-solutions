"use client";

import { motion } from "framer-motion";

const steps = [
  { title: "Listen & Understand", description: "We begin by listening to your goals and understanding your brand's unique story." },
  { title: "Plan & Strategize", description: "We develop a customized marketing plan outlining strategies to achieve your objectives." },
  { title: "Create & Engage", description: "We create engaging content and launch targeted campaigns while keeping you informed." },
  { title: "Tracking & Optimization", description: "We track performance and optimize campaigns for continuous improvement." },
  { title: "Reporting & Insights", description: "We provide clear and concise reports, highlighting key insights and results." },
];

export default function MarketingProcess() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="max-w-3xl mx-auto py-10"
    >
      <h2 className="text-3xl font-bold text-center">Our Process</h2>
      <div className="mt-6 space-y-6">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            className="p-6 bg-gray-200/50 dark:bg-gray-700/50 rounded-lg shadow-md"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
          >
            <h3 className="text-xl font-semibold">{step.title}</h3>
            <p className="mt-2 text-gray-600 dark:text-gray-300">{step.description}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
