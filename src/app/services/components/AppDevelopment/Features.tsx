"use client";

import { motion } from "framer-motion";

// Feature Data
const features = [
  { title: "iOS App Development", description: "Building high-performance, feature-rich apps for iPhones and iPads." },
  { title: "Android App Development", description: "Creating robust and scalable apps for the Android ecosystem." },
  { title: "Cross-Platform Development", description: "Developing apps that run seamlessly on multiple platforms, saving you time and resources." },
  { title: "UI/UX Design", description: "Designing intuitive and engaging user interfaces for the best experience." },
  { title: "App Testing & Deployment", description: "Rigorous testing and seamless deployment to ensure a bug-free launch." },
];

export default function ExpandingFeatures() {
  return (
    <section className="relative w-full py-20 px-6 md:px-12 lg:px-24">
      {/* Background Gradient */}
      <div className="absolute ecclipse -top-32 -left-[150px] size-[300px]" />
      <div className="absolute ecclipse -bottom-32 right-0 sm:-right-[150px] size-[300px]" />

      {/* ✅ Section Heading */}
      <motion.h2
        className="text-3xl md:text-5xl font-bold text-center mb-12 text-lightText dark:text-darkText"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        Unlocking Mobile Potential:
        <br />
        <span className="text-gradient">Our App Development Services</span>
      </motion.h2>

      {/* ✅ Features List */}
      <div className="max-w-3xl mx-auto space-y-6">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            className="relative p-5 bg-gray-800/50 border border-gray-700 rounded-lg shadow-md transition-all duration-300 hover:bg-gray-900/80 hover:border-blue-500 hover:scale-105"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            {/* ✅ Feature Title */}
            <h3 className="text-xl font-bold text-white">{feature.title}</h3>

            {/* ✅ Expanded Content (Always Visible) */}
            <p className="mt-2 text-gray-300">{feature.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
