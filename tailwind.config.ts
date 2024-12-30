import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}", 
  ],
  theme: {
    extend: {
      colors: {
        lightBg: "#FFFFFF", // Background color for light mode
        darkBg: "#111204", // Background color for dark mode
        lightText: "#FFFFFF", // Font color for light mode
        darkText: "#000000", // Font color for dark mode
      },
    },
  },
  darkMode: "class", // Enables dark mode using the "class" strategy
};

export default config;
