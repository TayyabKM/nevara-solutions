// components/RecognitionSection.tsx
"use client";
import { motion } from "framer-motion";


export default function RecognitionSection() {
    const textVariants = {
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
    };
    return (
        <section className="recognition-section py-12 text-center">
            <motion.div variants={textVariants} className="text-textGradPurple dark:text-textGradBlue font-medium text-lg md:text-xl uppercase tracking-widest">
            INDUSTRY RECOGNITION
            </motion.div>
            <motion.div variants={textVariants} className="text-gradient font-bold text-4xl md:text-5xl pb-5 pt-3">
            Recognitions & Partnerships
            </motion.div>
            <a
                href="https://www.designrush.com/agency/profile/nevara-solutions"
                target="_blank"
                rel="noopener noreferrer"
            >
                <img
                    src="/designrush.svg"
                    alt="Nevara Solutions rating on DesignRush, the industry-leading B2B Marketplace connecting brands with agencies"
                    className="mx-auto w-32 md:w-40 hover:scale-105 transition-transform mt-3"
                />
            </a>
        </section>
    );
}
