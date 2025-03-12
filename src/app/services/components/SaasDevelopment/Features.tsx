"use client";

import { motion } from "framer-motion";

const features = [
  { title: "Scalability & Reliability", description: "Designing cloud-based systems that scale securely and reliably." },
  { title: "Full-Stack Development", description: "Building complete SaaS applications from concept to completion." },
  { title: "API Development & Integration", description: "Creating APIs for smooth data exchange with other systems." },
  { title: "Cloud Infrastructure Setup", description: "Managing cloud platforms for optimal performance and cost-effectiveness." },
  { title: "Security & Compliance", description: "Ensuring rigorous testing and compliance for a smooth SaaS launch." },
  { title: "Ongoing Maintenance", description: "Providing continuous updates to keep your SaaS running efficiently." },
];

export default function SaaSFeaturesScroll() {
  return (
    <section className="relative w-full py-20 px-6 md:px-12 lg:px-24">
      {/* Background Glow Effects */}
      <div className="absolute ecclipse -top-32 -left-[150px] size-[300px]" />
      <div className="absolute ecclipse -bottom-32 right-0 sm:-right-[150px] size-[300px]" />

      {/* ✅ Section Heading */}
      <motion.h2
        className="text-3xl md:text-5xl font-bold text-center mb-8 text-lightText dark:text-darkText"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        Are <span className="text-gradient">SaaS development</span> challenges holding you back?
      </motion.h2>

      <motion.p
        className="text-lg md:text-xl text-center text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-16"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        We combine the essential building blocks of your ideal product with strategic solutions.
        Here’s why <span className="text-gradient">Nevara</span> is your ideal partner for your SaaS journey:
      </motion.p>

      {/* ✅ Step-by-Step Scroll Features */}
      <div className="max-w-4xl mx-auto flex flex-col gap-12">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            className="bg-gray-800/50 border border-gray-700 p-6 md:p-8 rounded-xl shadow-lg text-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <h3 className="text-2xl font-bold text-white">{feature.title}</h3>
            <p className="mt-2 text-gray-300">{feature.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
