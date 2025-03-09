"use client";

import { motion } from "framer-motion";

const processSteps = [
  { title: "Discovery & Strategy", description: "Understanding your vision, goals, and defining the app's purpose." },
  { title: "Design & Prototyping", description: "Creating intuitive user interfaces and interactive prototypes." },
  { title: "Development & Testing", description: "Building the app with the latest tech, followed by rigorous testing." },
  { title: "Launch & Support", description: "Deploying your app and providing ongoing maintenance for success." },
];

export default function Process() {
  return (
    <div className="py-12">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-gradient">The Process of Bringing Your App to Life</h2>
      <div className="grid sm:grid-cols-2 gap-6 mt-8">
        {processSteps.map((step, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="bg-gray-800 text-white p-6 rounded-lg shadow-md hover:shadow-lg transition"
          >
            <h3 className="text-xl font-bold">{step.title}</h3>
            <p className="mt-2 text-gray-400">{step.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
