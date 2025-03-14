"use client";

import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import Image from "next/image";

// ✅ Updated Achievements Data
const achievements = [
  { title: "Client Satisfaction Rate", value: 95, icon: "/icons/rating.png", isPercentage: true },
  { title: "Faster Project Delivery Than Industry Standard", value: 50, icon: "/icons/speedometer.png", isPercentage: true },
  { title: "Focus on Scalable & Future-Proof Solutions", value: 100, icon: "/icons/encrypted.png", isPercentage: true },
  { title: "Cups of Coffee", value: 500, icon: "/icons/coffee-cup.png", isPercentage: false },
];

export default function Counter() {
  return (
    <section className="relative w-full py-20 px-6 md:px-12 lg:px-24">
      {/* ✅ Section Heading */}
      <motion.h2
        className="text-3xl md:text-5xl font-bold text-center mb-16 text-lightText dark:text-darkText"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        Our <span className="text-gradient">Achievements</span>
      </motion.h2>

      {/* ✅ Achievement Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
        {achievements.map((item, index) => (
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
              <Image src={item.icon} alt={item.title} width={40} height={40} />
            </div>

            {/* ✅ Counter Animation (Starts when in viewport) */}
            <AnimatedCounter targetValue={item.value} isPercentage={item.isPercentage} />

            {/* ✅ Title */}
            <h3 className="text-xl font-bold text-lightText dark:text-darkText mt-2">{item.title}</h3>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

// ✅ Counter Animation Component
function AnimatedCounter({ targetValue, isPercentage }: { targetValue: number; isPercentage: boolean }) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const counterRef = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          let start = 0;
          const duration = 2000; // 2 seconds
          const stepTime = Math.abs(Math.floor(duration / targetValue));

          const timer = setInterval(() => {
            start += 1;
            setCount(start);
            if (start === targetValue) {
              clearInterval(timer);
              setHasAnimated(true); // Prevent re-triggering
            }
          }, stepTime);

          return () => clearInterval(timer);
        }
      },
      { threshold: 0.5 } // Trigger when 50% of the counter is in view
    );

    if (counterRef.current) observer.observe(counterRef.current);

    return () => observer.disconnect();
  }, [targetValue, hasAnimated]);

  return (
    <motion.span ref={counterRef} className="text-4xl md:text-5xl font-bold text-white">
      {count}
      {isPercentage ? "%" : "+"}
    </motion.span>
  );
}
