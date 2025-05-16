"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

// Service Offerings Data with Links
const offerings = [
    {
      title: "Custom Website Development",
      subtitle: "Responsive, SEO-Friendly Sites for Global Brands",
      description:
        "We design fast, visually stunning, and SEO-optimized websites using modern stacks like React and Next.js. Trusted by clients across the US, UK, Europe, and the Middle East. Now offering flexible, interest-free installment plans on select projects.",
      buttonText: "Explore Our Website Services",
      icon: "/icons/web-dev.svg",
      link: "/services/web-development",
    },
    {
      title: "Mobile App Development",
      subtitle: "iOS & Android Apps Built to Scale",
      description:
        "Our team builds responsive, feature-rich mobile and web applications using Flutter and React Native. Ideal for businesses in the Emirates, Europe, and North America seeking scalability and user engagement. Ask about our interest-free monthly installment plans.",
      buttonText: "Learn More About App Development",
      icon: "/icons/app-dev.svg",
      link: "/services/app-development",
    },
    {
      title: "Digital Marketing & Brand Building",
      subtitle: "Targeted Strategies for Global Visibility",
      description:
        "We craft high-conversion SEO campaigns, PPC ads, and social media strategies tailored to the US, UK, and GCC markets. Boost your online visibility with strategic execution. Interest-free payment plans available for selected campaigns.",
      buttonText: "Grow My Brand Now",
      icon: "/icons/digital-marketing.svg",
      link: "/services/digital-marketing",
    },
    {
      title: "SaaS Product Development",
      subtitle: "Cloud-Based Platforms for Scalable Growth",
      description:
        "From MVPs to enterprise-ready SaaS solutions, we build secure and scalable products that streamline operations and boost revenue. Serving clients across the US, UK, Europe, and MENA. Eligible services come with flexible installment options.",
      buttonText: "Develop My SaaS Product",
      icon: "/icons/product-dev.svg",
      link: "/services/saas-product-development",
    },
  ];
  
export default function NevaraAdvantage() {
    return (
        <div className="relative w-full py-20 px-6 md:px-12 lg:px-24">
            {/* Background Glow Effect */}
            <div className="absolute ecclipse -bottom-32 right-0 sm:-right-[-20px] size-[300px]" />
            <div className="absolute ecclipse -top- -left-[190px] size-[300px]" />

            {/* ✅ Section Heading */}
            <motion.h2
                className="text-3xl md:text-5xl font-bold text-center mb-12 text-black dark:text-white"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
            >
                The Nevara Advantage <br className="hidden md:block" />
                <span className="text-gradient">Our Key Offerings</span>
            </motion.h2>
            <h2 className="sr-only">
                    Explore our custom development services including Web Development, App Development, SaaS Products, and Digital Marketing
                </h2>

            {/* ✅ Grid Layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {offerings.map((offering, index) => (
                    <motion.div
                        key={index}
                        className="relative flex flex-col p-8 bg-gray-200/40 dark:bg-gray-800/50 border border-white/10
             backdrop-blur-xl rounded-lg shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl group"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.2 }}
                    >
                        {/* ✅ Service Icon */}
                        <div className="flex items-center justify-center size-20 bg-background-gradient rounded-full p-5 shadow-lg">
                            <Image src={offering.icon} alt={offering.title} width={50} height={50} />
                        </div>

                        {/* ✅ Title & Subtitle */}
                        <h3 className="text-2xl font-bold text-black dark:text-white mt-4">
                            {offering.title}
                        </h3>
                        <p className="text-lg font-semibold text-gradient mt-1">{offering.subtitle}</p>

                        {/* ✅ Description */}
                        <p className="mt-3 text-gray-700 dark:text-gray-300">{offering.description}</p>

                        {/* ✅ CTA Button (Now wrapped with Link) */}
                        <Link href={offering.link}>
                            <button className="mt-6 px-4 py-2 max-w-[300px] text-center bg-gradient-to-r from-blue-500 to-purple-500 
                            text-white font-medium text-sm md:text-base rounded-md shadow-md 
                            transition-all duration-300 group-hover:shadow-lg group-hover:scale-105 self-start"
                            >
                                {offering.buttonText}
                            </button>
                        </Link>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
