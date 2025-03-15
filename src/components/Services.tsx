"use client";

import Link from "next/link"; 
import Image from "next/image";
import { motion } from "framer-motion";

export default function Services() {
  return (
    <div className="relative py-10 overflow-hidden">
      {/* Eclipses left & right */}
      <div className="absolute ecclipse -bottom-32 -right-[150px] size-[300px]" />

      <div className="flex flex-col container max-w-screen-xl mx-auto p-4 gap-10">
        {/* Header */}
        <Header />

        {/* Services */}
        <div className="grid sm:grid-cols-2 xl:grid-cols-2 gap-6">
          {servicesData?.map((service, index) => {
            return <ServiceBox key={index} service={service} index={index} />;
          })}
        </div>
      </div>
    </div>
  );
}

function Header() {
  const textVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3, ease: "circOut" } },
  };
  return (
    <motion.div
      className="flex flex-col w-full items-center text-center gap-3"
      variants={{
        visible: { transition: { staggerChildren: 0.2 } },
      }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
      <motion.div variants={textVariants} className="text-gradient font-bold text-4xl md:text-5xl">
        Services We Offer
      </motion.div>
      <motion.div variants={textVariants} className="font-medium text-2xl md:text-3xl leading-none max-w-md md:max-w-xl">
        Get a full-scale <span className="text-gradient">development team</span> without costing a fortune.
      </motion.div>
    </motion.div>
  );
}

interface IServiceBox {
  heading: string;
  description: string;
  iconSrc: string;
}

const servicesData: IServiceBox[] = [
  {
    heading: "Website Development",
    description:
      "We design and develop fast, user-friendly websites to put you at the forefront of your industry and earn you conversions, whether it’s a business site or an e-commerce platform.",
    iconSrc: "/icons/web-dev.svg",
  },
  {
    heading: "Digital marketing and Brand building",
    description: "We create compelling brand identities and optimize data-driven marketing plans to elevate their visibility, engagement, and conversions.",
    iconSrc: "/icons/digital-marketing.svg",
  },
  {
    heading: "App Development",
    description: "We develop user-friendly, scalable mobile and web applications that make user engagement frictionless and grow businesses.",
    iconSrc: "/icons/app-dev.svg",
  },
  {
    heading: "Saas Product Development",
    description: "We create original, production-ready digital ideas wherever you are in the process, from inception.",
    iconSrc: "/icons/product-dev.svg",
  },
];

function ServiceBox({ service, index }: { service: IServiceBox; index: number }) {
  const boxVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
      y: 50,
      transform: "translate3d(0px, 50px, 0px) scale3d(0.8, 0.8, 1) rotateX(5deg)",
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transform: "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg)",
      transition: {
        duration: 0.5,
        ease: "easeOut",
        delay: index * 0.1,
      },
    },
  };

  const serviceLinks: Record<string, string> = {
    "Website Development": "/services/web-development",
    "Digital marketing and Brand building": "/services/digital-marketing",
    "App Development": "/services/app-development",
    "Saas Product Development": "/services/saas-product-development",
  };

  return (
    <motion.div
      variants={boxVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      className="relative flex flex-col items-start justify-between cursor-pointer gap-4 py-4 px-6 bg-gray-200/50 dark:bg-gray-700/50
      border border-black/5 dark:border-white/10 shadow-sm backdrop-blur-md rounded-xl overflow-hidden w-full
      group"
    >
      {/* ✅ Fixed Image Optimization Issue */}
      <div className="size-20 bg-background-gradient rounded-full flex items-center justify-center p-5">
        <Image src={service.iconSrc} alt={`${service.heading} Icon`} width={60} height={60} />
      </div>

      <div className="font-bold text-2xl">{service.heading}</div>
      <div className="dark:text-gray-400 text-gray-500">{service.description}</div>
      
      <Link href={serviceLinks[service.heading] || "/services"} passHref>
        <div className="mt-2 flex items-center gap-2">
          <div
            className="flex items-center justify-center size-10 rounded-full p-2 border border-black/60 dark:border-white/60 group-hover:bg-background-gradient
          group-hover:border-gradPurple transition-all duration-300"
          >
            <svg
              className="stroke-black dark:stroke-white -rotate-[30deg] group-hover:!stroke-white transition-colors duration-300"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M2 12.0701H22" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
              <path
                d="M16 5L21.16 10C21.4324 10.2571 21.6494 10.567 21.7977 10.9109C21.946 11.2548 22.0226 11.6255 22.0226 12C22.0226 12.3745 21.946 12.7452 21.7977 13.0891C21.6494 13.433 21.4324 13.7429 21.16 14L16 19"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>
          </div>
          <div className="text-xl">Learn More</div>
        </div>
      </Link>

      {/* ✅ Fixed Image Optimization Issue */}
      <Image
        src={service.iconSrc}
        alt={`${service.heading} Background Icon`}
        width={60}
        height={60}
        className="size-14 opacity-0 invert dark:invert-0 absolute bottom-2 right-2 -z-0 group-hover:opacity-[0.2] group-hover:scale-105 transition-all duration-300"
      />
    </motion.div>
  );
}
