import getTheme from "@/hooks/getTheme";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function ProjectKickOff() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const { isLight } = getTheme();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const initialColor = isLight ? "#FFFFFF" : "#000000";
  const finalColor = isLight ? "#7532E6" : "#3997F3";
  const color = useTransform(scrollYProgress, [0, 1], [initialColor, finalColor]);
  const borderWidth = useTransform(scrollYProgress, [0, 1], [3, 4]);

  return (
    <div
      ref={containerRef}
      className="h-[280px] md:h-[320px] w-full md:max-w-[430px] rounded-lg bg-gray-200/50 dark:bg-black relative overflow-hidden
      border border-l-gradBlue/50 border-t-gradBlue/50 border-b-gradPurple/50 border-r-gradPurple/50
      p-8 z-[1]"
    >
      {/** UPPER_CURVE */}
      <div className="absolute size-56 left-1/2 -translate-x-1/2 -top-16 rounded-full border-b-2 border-b-black/20 dark:border-b-white/30 overflow-hidden">
        <div className="absolute bg-black dark:bg-white opacity-15 dark:opacity-40 rounded-full blur-[80px] size-28 bottom-0 left-1/2 -translate-x-1/2" />
      </div>

      {/** BOTTOM_CURVE */}
      <div className="absolute size-56 left-1/2 -translate-x-1/2 -bottom-16 rounded-full border-t-2 border-t-black/20 dark:border-t-white/30">
        <div className="absolute bg-black dark:bg-white opacity-15 dark:opacity-40 rounded-full blur-[80px] size-28 top-0 left-1/2 -translate-x-1/2" />
      </div>

      {/** CENTER USER BOX */}
      <motion.div
        style={{ borderColor: color, borderWidth: borderWidth }}
        className="absolute z-[1] size-16 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center  justify-center border rounded-full"
      >
        <div
          className="size-14 absolute bg-white dark:bg-black rounded-full 
          border-2 border-black/20 dark:border-white/40 flex items-center justify-center p-2.5"
        >
          <motion.svg
            style={{ stroke: color }}
            viewBox="0 0 24 24"
            className={`stroke-black/50 dark:stroke-white/80`}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
            <g id="SVGRepo_iconCarrier">
              <circle cx="12" cy="6" r="4" strokeWidth="2"></circle>
              <path
                d="M19.9975 18C20 17.8358 20 17.669 20 17.5C20 15.0147 16.4183 13 12 13C7.58172 13 4 15.0147 4 17.5C4 19.9853 4 22 12 22C14.231 22 15.8398 21.8433 17 21.5634"
                strokeWidth="2"
                strokeLinecap="round"
              ></path>
            </g>
          </motion.svg>
        </div>
      </motion.div>

      {/** TOP LINKEDIN BOX */}
      <div className="absolute size-16 rounded-full border-2 border-black/20 dark:border-white/20 bg-white dark:bg-black left-1/2 -translate-x-1/2 flex items-center justify-center p-2.5">
        <svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" className={`fill-black/30 dark:fill-white/30`}>
          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
          <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
          <g id="SVGRepo_iconCarrier">
            <path d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zM349.3 793.7H230.6V411.9h118.7v381.8zm-59.3-434a68.8 68.8 0 1 1 68.8-68.8c-.1 38-30.9 68.8-68.8 68.8zm503.7 434H675.1V608c0-44.3-.8-101.2-61.7-101.2-61.7 0-71.2 48.2-71.2 98v188.9H423.7V411.9h113.8v52.2h1.6c15.8-30 54.5-61.7 112.3-61.7 120.2 0 142.3 79.1 142.3 181.9v209.4z"></path>{" "}
          </g>
        </svg>
      </div>

      {/** BOTTOM SLACK BOX */}
      <div className="absolute size-16 rounded-full border-2 border-black/20 dark:border-white/20 bg-white dark:bg-black left-1/2 -translate-x-1/2 bottom-8 p-2.5">
        <svg className={`fill-black/30 dark:fill-white/30`} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" data-name="Layer 1">
          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
          <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
          <g id="SVGRepo_iconCarrier">
            <path d="M2,14.67a2,2,0,1,0,4,0v-2H4A2,2,0,0,0,2,14.67Zm12.64-3.34a2,2,0,0,0,2-2V4a2,2,0,1,0-4,0V9.33A2,2,0,0,0,14.66,11.33Zm7.32-2a2,2,0,1,0-4,0v2h2A2,2,0,0,0,22,9.33ZM9.34,12.67a2,2,0,0,0-2,2V20a2,2,0,1,0,4,0V14.67A2,2,0,0,0,9.34,12.67ZM14.66,18h-2v2a2,2,0,1,0,2-2ZM20,12.67H14.66a2,2,0,0,0,0,4H20a2,2,0,0,0,0-4ZM9.34,7.33H4a2,2,0,1,0,0,4H9.34a2,2,0,0,0,0-4ZM9.34,2a2,2,0,0,0,0,4h2V4A2,2,0,0,0,9.34,2Z"></path>
          </g>
        </svg>
      </div>
    </div>
  );
}
