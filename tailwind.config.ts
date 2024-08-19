import type { Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      screens: {
        md: "1920px",
      },
    },
    extend: {
      colors: {
        "default-black": "#242424",
        "default-white": "#FFFFFE",
        "default-ghost-white": "#F1F0EF",
        "default-gray": "#CBC8C5",
      },
      fontFamily: {
        raleway: ["var(--font-raleway)", ...fontFamily.sans],
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-20%)" },
        },
      },
      animation: {
        marquee: "marquee 20s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
