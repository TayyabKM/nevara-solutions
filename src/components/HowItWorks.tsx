"use client";

import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import { useRef, useState, useEffect } from "react";

interface ITimelineItem {
  heading: string;
  description: string;
}

const timelineItems: ITimelineItem[] = [
  {
    heading: "Project Kickoff",
    description:
      "This starts with a deep-dive discussion and signing the contract. This step guarantees that your vision aligns with our strategy and vice versa.",
  },
  {
    heading: "Planning & Milestones",
    description: "All project requirements are defined by our team, we also establish key milestones and set timelines required to keep everything on track.",
  },
  {
    heading: "Develop & Build",
    description: "Our team of experts starts building your solution, and we keep you updated throughout with regular updates and quality checks.",
  },
  {
    heading: "Delivery & Deployment",
    description: "After developing the final product, we carry out testing and optimization for delivery. We help you deploy to make the launch hassle-free.",
  },
  {
    heading: "Aftercare",
    description: "Our support doesn’t stop when we deliver. We provide post-deployment support, and we help keep things running smoothly.",
  },
  {
    heading: "SEO & PPC",
    description: "We drive traffic through relevant searches searching for similar requirements using custom SEO and PPC campaigns.",
  },
  {
    heading: "Brand Growth (If Any)",
    description:
      "We build your digital footprint through dedicated social media management and brand-building services that cement your brand identity and boost your engagement online.",
  },
];

export default function HowItWorks() {
  return (
    <div className="relative overflow-hidden py-10 backdrop-blur-md">
      <div className="flex flex-col container max-w-screen-xl mx-auto p-4 gap-10">
        <Header />
        <Timeline />
      </div>
    </div>
  );
}

function Header() {
  const textVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3, ease: "circOut" },
    },
  };

  return (
    <motion.div
      variants={textVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="font-bold text-4xl md:text-5xl sm:!leading-loose text-gradient text-center"
    >
      How We Bring Ideas to Life?
    </motion.div>
  );
}

function Timeline() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [containerHeight, setContainerHeight] = useState<number>(0);
  const [activeIndexes, setActiveIndexes] = useState<number[]>([]);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
  useEffect(() => {
    if (containerRef.current) {
      setContainerHeight(containerRef.current.getBoundingClientRect().height);
    }
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const lineHeight: MotionValue<number> = useTransform(scrollYProgress, [0, 1], [0, containerHeight + 100]);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const containerTop = containerRef.current.getBoundingClientRect().top;
      const currentLineHeight = lineHeight.get();
      const active: number[] = [];

      itemRefs.current.forEach((item, index) => {
        if (item) {
          const rect = item.getBoundingClientRect();
          const itemCenter = rect.top - containerTop + rect.height / 2.2;
          if (itemCenter <= currentLineHeight) {
            active.push(index);
          }
        }
      });
      setActiveIndexes(active);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lineHeight, containerHeight]);

  console.log(containerHeight, lineHeight);

  return (
    <div ref={containerRef} className="relative">
      {/** LINE ANIMATING DOWNWARDS */}
      <motion.div
        className="absolute left-4 md:left-1/2 md:-translate-x-1/2 bg-gradient-to-b from-blue-500 to-purple-500 w-1 rounded-full"
        style={{ height: lineHeight }}
      />

      <div className="flex flex-col">
        {timelineItems.map((item, index) => {
          const evenIndex = !(index & 1);

          return (
            <div
              key={index}
              ref={el => {
                itemRefs.current[index] = el;
              }}
              className="relative flex flex-col md:flex-row w-full items-center pl-12 pr-4 md:pl-0 md:pr-0"
            >
              {/** ANIMATED NUMBERED BOXES */}
              <div
                className={`absolute left-4 md:left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 size-10 md:size-12
                rounded-full flex items-center justify-center text-lg font-semibold transition-all
                ${
                  activeIndexes.includes(index)
                    ? "bg-gradient-to-br from-gradBlue to-gradPurple text-white"
                    : "bg-none bg-gray-600 dark:bg-white text-white dark:text-black"
                }`}
              >
                {index + 1}
              </div>

              {/** CONTENT */}
              <div
                className={`flex flex-col gap-4 md:w-1/2 py-8 
                ${evenIndex ? "md:order-2 items-start text-left md:pl-12" : "md:items-end md:text-right md:pr-12"}`}
              >
                <div className="font-bold text-2xl">{item.heading}</div>
                <div className="dark:text-gray-400 text-lg text-gray-500 md:max-w-md">{item.description}</div>
              </div>
              <div className="flex-1 w-full -order-1 md:order-none !h-[300px] rounded-lg border border-white/15 bg-white/10 md:mx-12 relative overflow-hidden">
                <div className="size-full bg-background-gradient absolute inset-0" />
                <div className="size-full relative z-[1] m-4">
                  <div className="size-full bg-white absolute inset-0" />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
