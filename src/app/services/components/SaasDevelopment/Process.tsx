"use client";

import { motion } from "framer-motion";

const processSteps = [
  { title: "Discovery & Validation", description: "We begin by deeply understanding your vision and defining the core SaaS features." },
  { title: "Design & Prototyping", description: "Creating intuitive user interfaces and gathering early feedback with interactive prototypes." },
  { title: "Agile Development", description: "Developing your SaaS product in iterative sprints with regular feedback loops." },
  { title: "Testing & Quality Assurance", description: "Rigorous testing throughout development to ensure a stable and secure product." },
  { title: "Deployment & Scaling", description: "Deploying your SaaS to the cloud with a focus on scalability and reliability." },
  { title: "Continuous Improvement", description: "Providing ongoing support, monitoring performance, and iterating based on user feedback." },
];

export default function Process() {
  return (
    <div className="py-12">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-gradient">Our SaaS Development Process</h2>
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
