import getTheme from "@/hooks/getTheme";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Develop() {
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
  const lineWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div
      ref={containerRef}
      className="h-[320px] w-full md:max-w-[430px] rounded-lg bg-gray-200/50 dark:bg-black dark:bg-gradient-to-br from-gradBlue/5 to-gradPurple/5 relative overflow-hidden
      border border-l-gradBlue/50 border-t-gradBlue/50 border-b-gradPurple/50 border-r-gradPurple/50
      p-8 z-[1]"
    >
      <div className="flex flex-col size-full gap-1">
        <div className="h-16 w-full flex gap-1">
          {/** MOVING TABS */}
          <div className="flex w-full rounded-xl border-2 border-black/20 dark:border-white/20 items-center justify-start px-5 relative">
            <motion.div className="h-1 rounded-full" style={{ backgroundColor: finalColor, width: lineWidth }} />
          </div>
        </div>

        {/** PLUS ICON */}
        <div className="flex-1 rounded-xl border-2 border-black/20 dark:border-white/20 flex items-center justify-center">
          <motion.div style={{ borderWidth: borderWidth, borderColor: color }} className="size-14 rounded-xl border relative flex items-center justify-center">
            <div className="size-12 border-2 border-black/20 dark:border-white/20 rounded-lg flex items-center justify-center p-2">
              <motion.svg viewBox="0 0 24 24" style={{ stroke: color }} fill="none" xmlns="http://www.w3.org/2000/svg">
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                <g id="SVGRepo_iconCarrier">
                  <path d="M6 12H18M12 6V18" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"></path>
                </g>
              </motion.svg>
            </div>
          </motion.div>
        </div>
        <div className="h-16 w-full flex gap-1">
          <div className="flex flex-1 rounded-xl border-2 border-black/20 dark:border-white/20"></div>
          <div className="flex flex-1 rounded-xl border-2 border-black/20 dark:border-white/20"></div>
          <div className="flex flex-1 rounded-xl border-2 border-black/20 dark:border-white/20"></div>
        </div>
      </div>
    </div>
  );
}
