"use client";

import { motion } from "framer-motion";

// Chat-Style Growth Messages
const chatMessages = [
  {
    sender: "Nevara",
    text: "Looking to scale your business? Let’s talk about how Nevara can fuel your growth. 🚀",
  },
  {
    sender: "User",
    text: "That sounds great! What makes Nevara different?",
  },
  {
    sender: "Nevara",
    text: "	We engineer business growth with AI-powered solutions, scalable development, and automation—built for startups and enterprise clients in the US, UK, and GCC - and beyond",
  },
  {
    sender: "User",
    text: "Interesting! How do you stay ahead in such a fast-moving industry?",
  },
  {
    sender: "Nevara",
    text: "Innovation is at our core.Our team uses cutting-edge frameworks and tools like Next.js, React, and Firebase to stay ahead—powering tech-forward brands worldwide.",
  },
  {
    sender: "User",
    text: "That’s exactly what I need! How do you ensure businesses perform at their best?",
  },
  {
    sender: "Nevara",
    text: "	We leverage business analytics and conversion tracking to turn data into revenue, optimizing every digital experience.",
  },
  {
    sender: "User",
    text: "I’m impressed. But long-term growth is my main goal.",
  },
  {
    sender: "Nevara",
    text: "That’s why we don’t just provide solutions— We're your dedicated growth partner. 	From flexible installment plans to post-launch support, Nevara becomes your long-term strategic growth partner across global markets.",
  },
];

export default function NevaraGrowthChat() {
  return (
    <div className="relative w-full py-20 px-6 md:px-12 lg:px-24">
      {/* Background Glows for Styling */}
      <div className="absolute ecclipse -bottom-40 -left-[150px] size-[300px]" />

      {/* ✅ Section Heading */}
      <motion.h2
        className="text-3xl md:text-5xl font-bold text-center mb-12 text-black dark:text-white"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        Your Growth Engine: <br className="hidden md:block" />
        <span className="text-gradient">Powered by Nevara</span>
      </motion.h2>
      <div className="sr-only">
        <h4>Business Growth with Nevara Solutions</h4>
        <p>Nevara helps startups and enterprises in the US, UK, Europe, and GCC scale using custom development, SaaS platforms, and digital marketing.</p>
        <p>We focus on delivering scalable, ROI-driven results through modern tools like React, Next.js, and Flutter, supported by interest-free installment plans and 24/7 technical support.</p>
      </div>


      {/* ✅ Chat UI Container */}
      <div className="max-w-2xl mx-auto space-y-6">
        {chatMessages.map((msg, index) => (
          <motion.div
            key={index}
            className={`flex ${msg.sender === "Nevara" ? "justify-start" : "justify-end"}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.2 }}
          >
            <motion.div
              className={`relative px-5 py-3 max-w-sm text-white transition-all duration-300 ${msg.sender === "Nevara"
                  ? "bg-blue-500 text-left rounded-tr-lg rounded-br-lg rounded-bl-lg"
                  : "bg-gray-700 text-right rounded-tl-lg rounded-br-lg rounded-bl-lg"
                } shadow-md group`}
              whileHover={{
                scale: 1.05, // Slight pop effect
                boxShadow: "0px 0px 20px rgba(105, 110, 2471, 1)", // Purple-Blue glow effect
              }}
            >
              {msg.text}
              {/* Optional: Sender Name on Top */}
              <motion.div
                className={`absolute -top-5 text-sm font-semibold transition-all duration-300 ${msg.sender === "Nevara" ? "text-blue-400" : "text-gray-400"
                  }`}
                whileHover={{ scale: 1.1 }} // Slight hover scale effect on sender name
              >
                {msg.sender}
              </motion.div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
