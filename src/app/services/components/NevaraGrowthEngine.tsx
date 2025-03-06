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
    text: "We engineer growth, not just solutions. Our strategic tech fuels expansion with real, proven results.",
  },
  {
    sender: "User",
    text: "Interesting! How do you stay ahead in such a fast-moving industry?",
  },
  {
    sender: "Nevara",
    text: "Innovation is at our core. We constantly integrate the latest technologies to keep you ahead of the curve.",
  },
  {
    sender: "User",
    text: "That’s exactly what I need! How do you ensure businesses perform at their best?",
  },
  {
    sender: "Nevara",
    text: "We optimize with data-driven insights. Turning raw data into actionable strategies for success.",
  },
  {
    sender: "User",
    text: "I’m impressed. But long-term growth is my main goal.",
  },
  {
    sender: "Nevara",
    text: "That’s why we don’t just provide solutions— We're your dedicated growth partner. Nevara accelerates your trajectory with ongoing support and expertise.",
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
              className={`relative px-5 py-3 max-w-sm text-white transition-all duration-300 ${
                msg.sender === "Nevara"
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
                className={`absolute -top-5 text-sm font-semibold transition-all duration-300 ${
                  msg.sender === "Nevara" ? "text-blue-400" : "text-gray-400"
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
