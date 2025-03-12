"use client";

import { motion } from "framer-motion";
import Image from "next/image";

// Features Data
const points = [
  { title: "Data-Driven Marketing for Maximum Impact", icon: "/icons/point.png" },
  { title: "Creative & Engaging Brand Strategies", icon: "/icons/point.png" },
  { title: "Proven Track Record of Growth & Success", icon: "/icons/point.png" },
  { title: "Tailored Solutions for Every Business Size", icon: "/icons/point.png" },
  { title: "Experienced Team", icon: "/icons/point.png" },
];

export default function WhyChooseUs() {
  return (
    <section className="relative w-full py-20 px-6 md:px-12 lg:px-24">
      
      <div className="absolute ecclipse -bottom-32 left-0 sm:-right-[150px] size-[300px]" />
      {/* ✅ Section Heading */}
      <motion.h2
        className="text-3xl md:text-5xl font-bold text-center mb-12 text-lightText dark:text-darkText"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        Why is <span className="text-gradient">Nevara</span> the Best Choice for all your digital marketing and brand building needs?
      </motion.h2>

      {/* ✅ Bullet Point List */}
      <ul className="max-w-2xl mx-auto space-y-6 text-lg text-gray-700 dark:text-gray-300">
        {points.map((point, index) => (
          <motion.li
            key={index}
            className="flex items-center gap-4 bg-gray-800/50 border border-gray-700 p-4 rounded-lg shadow-md transition-all duration-300 hover:scale-105 hover:shadow-blue-500/40"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2 }}
          >
            {/* ✅ Icon as Bullet Point */}
            <div className="size-10 flex-shrink-0">
              <Image src={point.icon} alt={point.title} width={40} height={40} />
            </div>

            {/* ✅ Text Content */}
            <span className="text-lightText dark:text-darkText font-medium">{point.title}</span>
          </motion.li>
        ))}
      </ul>
    </section>
  );
}
