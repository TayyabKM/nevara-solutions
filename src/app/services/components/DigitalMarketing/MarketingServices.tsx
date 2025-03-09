"use client";

import { motion } from "framer-motion";

const services = [
  { title: "Search Engine Optimization (SEO)", description: "Improving your website's visibility in search results to drive organic traffic." },
  { title: "Social Media Marketing (SMM)", description: "Building and engaging your audience on social media platforms." },
  { title: "Pay-Per-Click (PPC) Advertising", description: "Driving targeted traffic through paid advertising campaigns." },
  { title: "Content Marketing", description: "Creating valuable and engaging content to attract and retain your audience." },
  { title: "Email Marketing", description: "Nurturing leads and building customer loyalty through email campaigns." },
  { title: "Brand Strategy & Development", description: "Crafting a compelling brand identity that resonates with your audience." },
];

export default function MarketingServices() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="max-w-3xl mx-auto py-10"
    >
      <h2 className="text-3xl font-bold text-center">Drive Tangible Growth with Data-Driven Marketing</h2>
      <p className="text-center mt-2 text-gray-600 dark:text-gray-400">
        We leverage the latest trends and technologies to create innovative marketing experiences.
      </p>

      <div className="mt-6 space-y-6">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="p-6 bg-gray-200/50 dark:bg-gray-700/50 rounded-lg shadow-md"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
          >
            <h3 className="text-xl font-semibold">{service.title}</h3>
            <p className="mt-2 text-gray-600 dark:text-gray-300">{service.description}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
