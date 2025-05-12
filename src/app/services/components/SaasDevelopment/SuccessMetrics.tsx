"use client";

import { motion } from "framer-motion";
import Image from "next/image";

// Metrics Data
const metrics = [
  {
    title: "Boosted Revenue Streams",
    description: "Maximize profitability with custom SaaS monetization models, including subscription tiers, usage-based billing, and in-app upsells.",
    icon: "/icons/revenue.png",
  },
  {
    title: "Streamlined Operations",
    description: "Reduce costs and increase efficiency with automated workflows, dashboard integrations, and centralized admin controls.",
    icon: "/icons/operations.png",
  },
  {
    title: "Enhanced Productivity",
    description: "Empower teams with real-time collaboration features, smart notifications, and scalable tools designed for operational excellence.",
    icon: "/icons/productivity.png",
  },
];

export default function Metrics() {
  return (
    <section className="relative w-full py-20 px-6 md:px-12 lg:px-24">
      {/* Background Glow Effects */}
      <div className="absolute ecclipse -top-32 -left-[150px] size-[300px]" />
      <div className="absolute ecclipse -bottom-32 right-0 sm:-right-[150px] size-[300px]" />

      {/* ✅ Section Heading */}
      <motion.h2
        className="text-3xl md:text-5xl font-bold text-center mb-16 text-lightText dark:text-darkText"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        Your SaaS Success, <br className="hidden md:block" />
        <span className="text-gradient">Backed by Data</span>
      </motion.h2>

      {/* ✅ Metrics Cards - 3 Column Layout */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {metrics.map((metric, index) => (
          <motion.div
            key={index}
            className="relative bg-gray-800/50 border border-gray-700 p-6 rounded-xl shadow-lg flex flex-col items-center text-center"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            {/* ✅ Metric Icon */}
            <div className="size-20 bg-background-gradient rounded-full flex items-center justify-center p-5 shadow-lg mb-4">
              <Image src={metric.icon} alt={metric.title} width={50} height={50} />
            </div>

            {/* ✅ Metric Content */}
            <h3 className="text-2xl font-bold text-lightText dark:text-darkText">{metric.title}</h3>
            <p className="mt-2 text-lightText dark:text-gray-400">{metric.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
