/** @format */

// tailwind.config.js
import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#2797FA",
        secondary: "#313131",
        darkText: "#ffffff",
        dark: "#000000",
        textlight: "#888",
      },
      boxShadow: {
        "emerald-light": "0 2px 6px rgba(16, 185, 129, 0.15)",
        "emerald-dark": "0 2px 8px rgba(16, 185, 129, 0.4)",
        "emerald-button": "0 2px 6px rgba(16, 185, 129, 0.3)",
        "emerald-button-hover": "0 4px 12px rgba(16, 185, 129, 0.6)",
      },
      fontFamily: {
        body: ["Poppins", "sans-serif"],
        heading: ["Lora", "sans-serif"],
      },
    },
  },
};
export default config;
