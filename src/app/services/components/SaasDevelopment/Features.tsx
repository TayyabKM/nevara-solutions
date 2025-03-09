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

export default function Features() {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 py-12">
      {features.map((feature, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: index * 0.1 }}
          className="bg-gray-900 text-white p-6 rounded-lg shadow-lg hover:shadow-xl transition"
        >
          <h3 className="text-xl font-bold">{feature.title}</h3>
          <p className="mt-2 text-gray-400">{feature.description}</p>
        </motion.div>
      ))}
    </div>
  );
}
