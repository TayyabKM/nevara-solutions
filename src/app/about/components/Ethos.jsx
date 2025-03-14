"use client";

import { motion } from "framer-motion";
import Image from "next/image";

// Core Values Data
const ethos = [
  {
    title: "Empower Growth",
    description: "Drive growth through high-quality, innovative digital solutions.",
    icon: "/icons/productivity.png",
  },
  {
    title: "Forge Transparent Partnerships",
    description: "Sustainable success through open, strategic partnerships.",
    icon: "/icons/handshake.png",
  },
  {
    title: "Drive Leadership",
    description: "Establish clients as industry pioneers with exceptional solutions.",
    icon: "/icons/leadership.png",
  },
  {
    title: "Advance Innovation",
    description: "Redefine standards with high-quality, cutting-edge technology.",
    icon: "/icons/team.png",
  },
  {
    title: "Ensure Commitment",
    description: "Deliver unwavering client success through open communication.",
    icon: "/icons/commitment.png",
  },
  {
    title: "Collaboration",
    description: "Cultivating strong alliances for mutual advancement.",
    icon: "/icons/collaboration.png",
  },
];

export default function Ethos() {
  return (
    <section className="relative w-full py-20 px-6 md:px-12 lg:px-24">
      <div className="absolute ecclipse -top-32 -left-[150px] size-[300px]" />
      <div className="absolute ecclipse -bottom-32 right-0 sm:-right-[-20px] size-[300px]" />
      {/* ✅ Section Heading */}
      <motion.h2
        className="text-3xl md:text-5xl font-bold text-center mb-16 text-lightText dark:text-darkText"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        The <span className="text-gradient">Nevara Ethos</span>
      </motion.h2>

      {/* ✅ Ethos Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {ethos.map((value, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center text-center p-6 bg-gray-800/50 border border-gray-700 rounded-xl shadow-lg hover:shadow-blue-500/30 transition-all"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            {/* ✅ Icon */}
            <div className="size-16 bg-background-gradient rounded-full flex items-center justify-center p-4 shadow-lg mb-4">
              <Image src={value.icon} alt={value.title} width={40} height={40} />
            </div>

            {/* ✅ Title & Description */}
            <h3 className="text-xl font-bold text-lightText dark:text-darkText">{value.title}</h3>
            <p className="mt-2 text-lightText dark:text-gray-400">{value.description}</p>
          </motion.div> 
        ))}
      </div>
    </section>
  );
}
