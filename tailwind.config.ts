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
        lightText: "#000000", // Font color for light mode
        darkText: "#FFFFFF", // Font color for dark mode
      },
      fontFamily: {
        sans: ['var(--font-outfit)', 'sans-serif'], // Use the custom CSS variable
      },
    },
  },
  darkMode: "class", // Enables dark mode using the "class" strategy
};

export default config;
