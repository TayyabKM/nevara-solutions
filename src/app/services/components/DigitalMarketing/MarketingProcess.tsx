"use client";

import { motion } from "framer-motion";

// Process Steps Data
const steps = [
  { title: "Listen & Understand", description: "We begin by listening to your goals and understanding your brand's unique story." },
  { title: "Plan & Strategize", description: "We develop a customized marketing plan outlining strategies to achieve your objectives." },
  { title: "Create & Engage", description: "We create engaging content and launch targeted campaigns while keeping you informed." },
  { title: "Tracking & Optimization", description: "We track performance and optimize campaigns for continuous improvement." },
  { title: "Reporting & Insights", description: "We provide clear and concise reports, highlighting key insights and results." },
];

export default function MarketingProcess() {
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
        Elevate Your Brand with Our <br />
        <span className="text-gradient">Marketing Process</span>
      </motion.h2>

      {/* ✅ Timeline Container */}
      <div className="relative max-w-4xl mx-auto">
        {/* Vertical Line - Desktop */}
        <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-blue-500 to-purple-500 h-full"></div>

        {/* Vertical Line - Mobile (Left Aligned) */}
        <div className="md:hidden absolute left-4 w-1 bg-gradient-to-b from-blue-500 to-purple-500 h-full"></div>

        {/* ✅ Process Steps */}
        <div className="flex flex-col space-y-12">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className={`relative flex items-center ${
                index % 2 === 0 ? "md:justify-start justify-start" : "md:justify-end justify-start"
              }`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              {/* ✅ Connector Dot - Desktop (Centered) */}
              <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 size-6 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full shadow-md"></div>

              {/* ✅ Connector Dot - Mobile (Left Aligned) */}
              <div className="md:hidden absolute left-4 -translate-x-1/2 size-6 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full shadow-md"></div>

              {/* ✅ Step Content - Shifted Right on Mobile */}
              <div className="w-[90%] md:w-[45%] bg-gray-800/50 border border-gray-700 p-6 rounded-xl shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-blue-500/40 ml-10 md:ml-0">
                <h3 className="text-2xl font-bold text-white">{step.title}</h3>
                <p className="mt-2 text-gray-300">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
