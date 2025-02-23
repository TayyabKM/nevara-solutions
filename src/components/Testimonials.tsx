"use client";

import Marquee from "@/components/Marquee";
import { motion } from "framer-motion";

interface IReview {
  name: string;
  testimonial: string;
  company: string;
}

const reviews: IReview[] = [
  {
    name: "Dr Donna",
    company: "",
    testimonial:
      "Nevara's Team have been so wonderful to work with. They are progressive with their ideas, timely in responsiveness, and growth oriented to help my site more visible.",
  },
  {
    name: "Dr Donna",
    company: "",
    testimonial:
      "Nevara's Team have been so wonderful to work with. They are progressive with their ideas, timely in responsiveness, and growth oriented to help my site more visible.",
  },
];
const Testimonials = () => {
  return (
    <div className="relative overflow-hidden py-10 backdrop-blur-md">
      <div className="ecclipse size-[300px] dark:size-[400px] absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" />

      <div className="flex flex-col container max-w-screen-xl mx-auto p-4 gap-10 relative">
        {/* Header */}
        <Header />
        <Marquee pauseOnHover className="[--duration:20s]">
          {reviews.map((review, index) => (
            <ReviewCard key={index} {...review} />
          ))}
        </Marquee>

        <div className="pointer-events-none absolute inset-y-0 left-0 w-[10%] bg-gradient-to-r from-white/80 dark:from-black/60"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-[10%] bg-gradient-to-l from-white/80 dark:from-black/60"></div>
      </div>
    </div>
  );
};

export default Testimonials;

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
      <motion.div variants={textVariants} className="text-textGradPurple dark:text-textGradBlue font-medium text-lg md:text-xl uppercase tracking-widest">
        Testimonials
      </motion.div>
      <motion.div variants={textVariants} className="text-gradient font-bold text-4xl md:text-5xl">
        Client is Our Top Priority
      </motion.div>
      <motion.div variants={textVariants} className="font-medium text-2xl max-w-md md:max-w-xl">
        We survey all of our clients, the results of which go directly to our CEO.
      </motion.div>
    </motion.div>
  );
}

const ReviewCard = ({ name, testimonial, company }: IReview) => {
  return (
    <div
      className="relative w-[300px] md:w-[400px] cursor-pointer overflow-hidden rounded-xl
      p-6 bg-gray-200/50 dark:bg-gray-700/50 border border-black/5 dark:border-white/10
      shadow-sm backdrop-blur-md flex flex-col gap-2
      hover:bg-gray-300/50 hover:dark:bg-gray-600/50 transition-colors"
    >
      <div className="text-gray-800 dark:text-gray-200 text-base md:text-lg">{testimonial}</div>
      <div className="flex flex-col">
        <div className="text-xl font-bold">{name}</div>
        <div className="text-lg font-medium">{company}</div>
      </div>
    </div>
  );
};
