"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const services = [
  {
    title: "Website Development",
    description:
      "Your website is your first impression—we ensure it’s lasting. We create stunning, conversion-driven websites.",
    icon: "/icons/web-dev.svg",
    link: "/services/website-development",
  },
  {
    title: "App Development",
    description:
      "From mobile to web applications, we develop scalable, feature-rich solutions designed for engagement.",
    icon: "/icons/app-dev.svg",
    link: "/services/app-development",
  },
  {
    title: "Digital Marketing & Branding",
    description:
      "We craft data-driven marketing strategies to grow brands, enhance visibility, and boost conversions.",
    icon: "/icons/digital-marketing.svg",
    link: "/services/digital-marketing",
  },
  {
    title: "SaaS Product Development",
    description:
      "We build scalable, cloud-based SaaS products that help businesses optimize operations and drive revenue.",
    icon: "/icons/saas.svg",
    link: "/services/saas-development",
  },
];

export default function NevaraAdvantage() {
  return (
    <section className="relative py-20 px-6">
      {/* 🌟 Background Gradient & Eclipse Effect */}
      {/* <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-gradient-radial from-blue-500/20 via-purple-500/30 to-transparent blur-[150px] -z-10" /> */}

      <div className="container max-w-screen-xl mx-auto text-center">
        {/* Heading */}
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-white dark:text-white mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          The Nevara Advantage: <span className="text-gradient">Our Key Offerings</span>
        </motion.h2>

        {/* Grid Layout */}
        <div className="grid md:grid-cols-2 gap-8 mt-12">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ service, index }: { service: any; index: number }) {
  return (
    <motion.div
      className="flex flex-col items-center text-center bg-gray-200/20 dark:bg-gray-700/30 
      border border-white/10 rounded-xl p-6 shadow-md backdrop-blur-md group cursor-pointer"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      whileHover={{ scale: 1.05 }}
    >
      <Image src={service.icon} alt={service.title} width={64} height={64} />
      <h3 className="text-2xl font-semibold text-white mt-4">{service.title}</h3>
      <p className="text-gray-400 mt-2">{service.description}</p>
      <Link href={service.link} className="mt-4 px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg shadow hover:opacity-90">
        Learn More
      </Link>
    </motion.div>
  );
}
