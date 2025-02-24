import getTheme from "@/hooks/getTheme";
import { motion, useScroll, useTransform } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

interface Props {
  name: string;
}

export default function Deployment() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  const [containerWidth, setContainerWidth] = useState<number>(0);
  useEffect(() => {
    if (containerRef.current) {
      setContainerWidth(containerRef.current.offsetWidth);
    }
  }, []);

  const { isLight } = getTheme();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const initialColor = isLight ? "#FFFFFF" : "#000000";
  const finalColor = isLight ? "#7532E6" : "#3997F3";
  const color = useTransform(scrollYProgress, [0, 1], [initialColor, finalColor]);
  const borderWidth = useTransform(scrollYProgress, [0, 1], [1, 3]);
  const opacity = useTransform(scrollYProgress, [0.6, 1], [0, 1]);
  const xValues = [
    useTransform(scrollYProgress, [0, 1], [0, containerWidth / 6]),
    useTransform(scrollYProgress, [0, 1], [0, containerWidth / 5]),
    useTransform(scrollYProgress, [0, 1], [0, containerWidth / 4]),
    useTransform(scrollYProgress, [0, 1], [0, containerWidth / 3]),
  ];

  const names: string[] = ["Ideas & Analytics", "Plannign & Milestones", "Design & Development", "Testing & Deployment"];
  return (
    <div
      ref={containerRef}
      className="h-[320px] w-full md:max-w-[430px] rounded-lg bg-gray-200/50 dark:bg-black dark:bg-gradient-to-br from-gradBlue/5 to-gradPurple/5 relative overflow-hidden
      border border-l-gradBlue/50 border-t-gradBlue/50 border-b-gradPurple/50 border-r-gradPurple/50
      p-8 z-[1]"
    >
      <div className="flex flex-col size-full gap-2">
        <div className="text-lg">Project Plan</div>
        <Divider />
        <div className="flex flex-col gap-2 mt-2">
          {names.map((name, index, arr) => (
            <React.Fragment key={index}>
              <motion.div
                style={{
                  x: xValues[index],
                  borderColor: index === 3 ? color : "",
                  borderWidth: index === 3 ? borderWidth : 1,
                }}
                className="h-9 rounded-lg bg-black/10 dark:bg-white/10 flex items-center pl-1.5 w-fit pr-8 border dark:border-white/10 border-black/5 relative"
              >
                <div className="h-7 p-2 flex items-center rounded-lg bg-black/15 dark:bg-white/15 text-sm">{name}</div>

                {index === 3 ? (
                  <motion.svg
                    style={{ opacity }}
                    className="size-4 absolute right-2 fill-black dark:fill-white"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                    <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                    <g id="SVGRepo_iconCarrier">
                      <path d="M1 2.00001L2 1L14 5V7L10.0102 8.59595L14.7071 13.2929L13.2929 14.7071L8.59594 10.0102L7 14H5L1 2.00001Z"></path>
                    </g>
                  </motion.svg>
                ) : null}
              </motion.div>
              {index !== arr.length - 1 ? <Divider /> : null}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}

function Divider() {
  return <div className="h-1 w-full border-b border-b-textGradBlue/[.07] dark:border-b-textGradBlue/[.09] px-2" />;
}
