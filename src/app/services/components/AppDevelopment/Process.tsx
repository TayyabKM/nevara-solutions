"use client";

import { motion } from "framer-motion";

// Process Steps Data
const processSteps = [
  {
    title: "Discovery & Strategy",
    description: "Understanding your vision, goals, and defining the app's purpose.Defining your goals, audience, and tech requirements to craft a clear app development roadmap.",
  },
  {
    title: "Design & Prototyping",
    description: "Creating wireframes and high-fidelity UI/UX designs with tools like Figma and building clickable MVP prototypes.",
  },
  {
    title: "Development & Testing",
    description: "Coding with modern stacks like React Native and Flutter, followed by thorough QA testing to ensure stability and performance.",
  },
  {
    title: "Launch & Support",
    description: "Deploying your app to the App Store or Google Play, and offering post-launch monitoring, updates, and maintenance.",
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
        The Process of Bringing <span className="text-gradient">Your App</span> to{" "}
        <span className="text-gradient">Life</span>
      </motion.h2>

      {/* ✅ Timeline Container */}
      <div className="relative max-w-4xl mx-auto">
        {/* ✅ Vertical Line - Moves Left for Mobile */}
        <div className="absolute left-6 md:left-1/2 transform -translate-x-1/2 md:-translate-x-1 w-1 bg-gradient-to-b from-blue-500 to-purple-500 h-full md:left-1/2 md:translate-x-0 md:w-1"></div>

        {/* ✅ Process Steps */}
        <div className="flex flex-col space-y-12">
          {processSteps.map((step, index) => (
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
              {/* ✅ Connector Line Dot (Moves Left for Mobile) */}
              <div className="absolute left-6 md:left-1/2 transform -translate-x-1/2 size-6 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full shadow-md"></div>

              {/* ✅ Step Content */}
              <div className="max-w-[90%] md:w-[45%] bg-gray-800/50 border border-gray-700 p-6 rounded-xl shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-blue-500/40 ml-12 md:ml-0">
                <h3 className="text-lg md:text-xl font-bold text-white">{step.title}</h3>
                <p className="mt-2 text-sm md:text-base text-gray-300">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
