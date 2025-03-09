"use client";

import { motion } from "framer-motion";

const features = [
  { title: "iOS App Development", description: "Building high-performance, feature-rich apps for iPhones and iPads." },
  { title: "Android App Development", description: "Creating robust and scalable apps for the Android ecosystem." },
  { title: "Cross-Platform Apps", description: "Developing apps that run seamlessly on multiple platforms, saving time and resources." },
  { title: "UI/UX Design", description: "Designing intuitive and engaging user interfaces for the best experience." },
  { title: "App Testing & Deployment", description: "Rigorous testing and seamless deployment to ensure a bug-free launch." },
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
