"use client";

import { motion } from "framer-motion";
import Image from "next/image";

// Process Steps Data
const steps = [
  {
    number: "01",
    title: "Your Vision",
    description: "We listen to your ideas and translate them into a clear website strategy.",
    icon: "/icons/vision.png",
  },
  {
    number: "02",
    title: "Our Expertise",
    description:
      "Our developers bring your design to life, building a secure, responsive, and high-performing website, keeping you informed and involved throughout the process.",
    icon: "/icons/experiment.png",
  },
  {
    number: "03",
    title: "Your Success",
    description: "We launch your website and provide ongoing support to ensure your online presence thrives.",
    icon: "/icons/success.png",
  },
];

export default function Process() {
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
        Your Website Journey: <br className="hidden md:block" />
        <span className="text-gradient">From Vision to Victory</span>
      </motion.h2>

      {/* ✅ Process Steps - Using a 3 Column Layout */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            className="relative bg-gray-800/50 border border-gray-700 p-6 rounded-xl shadow-lg flex flex-col items-center text-center"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            {/* ✅ Step Number */}
            <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-blue-500 to-purple-500 text-lightText dark:text-darkText text-lg font-bold size-12 flex items-center justify-center rounded-full shadow-md">
              {step.number}
            </div>

            {/* ✅ Step Icon */}
            <div className="size-20 bg-background-gradient rounded-full flex items-center justify-center p-5 shadow-lg mb-4">
              <Image src={step.icon} alt={step.title} width={50} height={50} />
            </div>

            {/* ✅ Step Content */}
            <h3 className="text-2xl font-bold text-lightText dark:text-darkText">{step.title}</h3>
            <p className="mt-2  text-lightText dark:text-gray-400">{step.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
