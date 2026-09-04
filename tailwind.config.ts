import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        pine: {
          DEFAULT: "#16302A",
          light: "#20463C",
          dark: "#0E211C",
        },
        clay: {
          DEFAULT: "#C4622D",
          light: "#DB7B45",
          dark: "#9E4C22",
        },
        ivory: "#F6F1E7",
        charcoal: "#211F1C",
        moss: {
          DEFAULT: "#7C8A7E",
          light: "#A9B2AA",
          dark: "#5C6A5E",
        },
      },
      fontFamily: {
        serif: ["Fraunces", "ui-serif", "Georgia", "serif"],
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      maxWidth: {
        content: "1200px",
      },
      borderRadius: {
        sm: "4px",
        DEFAULT: "6px",
        lg: "10px",
      },
    },
  },
  plugins: [],
} satisfies Config;
