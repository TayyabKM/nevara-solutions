"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

// Service Offerings Data with Links
const offerings = [
    {
        title: "Website Development",
        subtitle: "Crafting Digital Experiences",
        description:
            "Your website is your first impression—we ensure it’s lasting. Our team creates visually stunning, responsive, and conversion-driven websites that captivate audiences and drive business success.",
        buttonText: "Explore Our Website Services",
        icon: "/icons/web-dev.svg",
        link: "/services/web-development", // ✅ Add link to respective service page
    },
    {
        title: "App Development",
        subtitle: "Building Apps with an Interactive Digital Design",
        description:
            "From mobile to web applications, we develop scalable, feature-rich solutions designed to enhance user engagement and streamline business operations.",
        buttonText: "Learn More About App Development",
        icon: "/icons/app-dev.svg",
        link: "/services/app-development", // ✅ Link added
    },
    {
        title: "Digital Marketing & Brand Building",
        subtitle: "Stand Out in the Digital Crowd",
        description:
            "In today’s competitive landscape, digital visibility is everything. Our data-driven marketing strategies and brand-building techniques help businesses grow, connect with their audience, and boost conversions.",
        buttonText: "Grow My Brand Now",
        icon: "/icons/digital-marketing.svg",
        link: "/services/digital-marketing", // ✅ Link added
    },
    {
        title: "SaaS Product Development",
        subtitle: "Powering Tomorrow’s Software Solutions",
        description:
            "We create cloud-based, scalable, and highly secure SaaS products that help businesses optimize their operations, improve customer experiences, and generate consistent revenue.",
        buttonText: "Develop My SaaS Product",
        icon: "/icons/product-dev.svg",
        link: "/services/saas-product-development", // ✅ Link added
    },
];

export default function NevaraAdvantage() {
    return (
        <div className="relative w-full py-20 px-6 md:px-12 lg:px-24">
            {/* Background Glow Effect */}
            <div className="absolute ecclipse -bottom-32 right-0 sm:-right-[150px] max-w-full overflow-hidden size-[300px]" />
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
