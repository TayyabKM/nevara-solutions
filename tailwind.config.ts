import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        lightBg: "#FFFFFF", // Background color for light mode
        darkBg: "#000000", // Background color for dark mode
        lightText: "#000000", // Font color for light mode
        darkText: "#FFFFFF", // Font color for dark mode
        gradBlue: "#2794D4",
        gradPurple: "#7532E6",
      },
      fontFamily: {
        sans: ["var(--font-outfit)", "sans-serif"], // Use the custom CSS variable
      },
      backgroundImage: {
        "background-gradient": "linear-gradient(to bottom, #7532E6, #2794D4)",
        "gradient-radial": "radial-gradient(circle, rgba(118,162,255,0.5) 0%, rgba(255,255,255,0.7) 70%)",
      },
    },
  },
  darkMode: "class", // Enables dark mode using the "class" strategy
};

export default config;
