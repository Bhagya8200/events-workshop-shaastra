import { transform } from "typescript";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        scaleUp: {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.25)" },
        },
        fadeOutLeft: {
          "0%": { opacity: 1, transform: "translateX(0)" },
          "100%": { opacity: 0, transform: "translateX(-100vw)" },
        },
        fadeInRight: {
          "0%": { opacity: 0, transform: "translateX(100vw)" },
          "100%": { opacity: 1, transform: "translateX(0%)" },
        },
      },
      animation: {
        "scale-up": "scaleUp 0.5s ease-in-out",
        "fade-out-left": "fadeOutLeft 0.5s forwards",
        "fade-in-right": "fadeInRight 0.5s forwards",
      },
      screens: {
        "nest-hub": "1280px",
        nest: "910px",
      },
    },
  },
  plugins: [],
};
