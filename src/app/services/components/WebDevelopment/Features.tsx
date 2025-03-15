"use client";

import { motion } from "framer-motion";

// Features Data
const features = [
  "Brand-Reflecting Custom Design",
  "Robust E-commerce Solutions",
  "Easy Content Management (CMS)",
  "SEO for Higher Rankings",
  "Intuitive User Experiences",
  "Secure, Scalable Development",
  "Collaborative Vision Realization",
  "Ongoing Post-Launch Support",
];

export default function Features() {
  return (
    <section className="relative w-full py-0 py-lg-10 px-6 md:px-12 lg:px-24">
      {/* Background Glow Effect */}
      <div className="absolute ecclipse -top-32 -left-[150px] size-[300px]" />
      <div className="absolute ecclipse -bottom-32 right-0 sm:-right-[150px] size-[300px]" />

      {/* ✅ Section Heading */}
      <motion.h2
        className="text-3xl md:text-5xl font-bold text-center mb-12 text-lightText dark:text-darkText"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        Ready for a Website That <span className="text-gradient">Drives Real Results?</span>
      </motion.h2>

      <p className="text-center text-lg text-gray-400 max-w-2xl mx-auto mb-12">
        Let&apos;s transform your online presence. Here’s how <span className="text-gradient">Nevara Solutions</span> can help:
      </p>

      {/* ✅ Features List */}
      <div className="max-w-3xl mx-auto flex flex-col gap-8">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            className="relative flex items-center gap-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            {/* Feature Number with Gradient */}
            <div className="flex items-center justify-center size-14 text-2xl font-bold text-white rounded-full bg-gradient-to-r from-blue-500 to-purple-500 shadow-lg">
              {index + 1}
            </div>

            {/* Feature Text */}
            <p className="text-xl text-lightText dark:text-darkText font-medium">{feature}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
