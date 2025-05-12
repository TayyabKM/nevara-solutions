"use client";

import { motion } from "framer-motion";
import Image from "next/image";

// Marketing Services Data
const services = [
  { 
    title: "Search Engine Optimization (SEO)", 
    description: "Boost your search rankings and drive organic traffic with on-page, technical, and local SEO strategies.", 
    icon: "/icons/seo.png" 
  },
  { 
    title: "Social Media Marketing (SMM)", 
    description: "Engage your audience and grow your brand across platforms like Instagram, Facebook, LinkedIn, and TikTok.", 
    icon: "/icons/social.png" 
  },
  { 
    title: "Pay-Per-Click (PPC) Advertising", 
    description: "Generate high-converting traffic through targeted ad campaigns on Google, YouTube, and social platforms.", 
    icon: "/icons/ppc.png" 
  },
  { 
    title: "Content Marketing", 
    description: "Create SEO-optimized blogs, landing pages, and multimedia content that build authority and drive traffic.", 
    icon: "/icons/content.png" 
  },
  { 
    title: "Email Marketing", 
    description: "Run automated campaigns and newsletters to nurture leads, boost retention, and increase conversions.", 
    icon: "/icons/email.png" 
  },
  { 
    title: "Brand Strategy & Development", 
    description: "Define your brand voice, positioning, and visual identity to build recognition and trust in competitive markets.", 
    icon: "/icons/brand.png" 
  },
];

export default function MarketingServices() {
  return (
    <section className="relative w-full py-0 py-lg-20 px-6 md:px-12 lg:px-24">
      {/* Background Glow Effects */}
      <div className="absolute ecclipse -top-32 -left-[150px] size-[300px]" />
      <div className="absolute ecclipse -bottom-32 right-0 sm:-right-[150px] size-[300px]" />

      {/* ✅ Section Heading */}
      <motion.h2
        className="text-3xl md:text-5xl font-bold text-center mb-8 text-lightText dark:text-darkText"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        Drive Tangible Growth with <br />
        <span className="text-gradient">Data-Driven Marketing</span>
      </motion.h2>

      <motion.p
        className="text-lg md:text-xl text-center text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        We stay ahead of the curve, leveraging the latest trends and technologies 
        to create innovative marketing experiences.
      </motion.p>

      {/* ✅ Cards Layout - Responsive Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 max-w-8xl mx-auto">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="relative bg-gray-800/50 border border-gray-700 p-6 rounded-xl shadow-lg flex flex-col items-center text-center transition-all duration-300 hover:scale-105 hover:shadow-blue-500/40"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            {/* ✅ Service Icon */}
            <div className="size-20 bg-background-gradient rounded-full flex items-center justify-center p-5 shadow-lg mb-4">
              <Image src={service.icon} alt={service.title} width={50} height={50} />
            </div>

            {/* ✅ Service Content */}
            <h3 className="text-2xl font-bold text-lightText dark:text-darkText">{service.title}</h3>
            <p className="mt-2 text-lightText dark:text-gray-400">{service.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
