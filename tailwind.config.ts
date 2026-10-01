import type { Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

const config: Config = {
  darkMode: "class",
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
        "default-black": "#18231D",
        "default-dim-black": "#101713",
        "default-white": "#FCFDFC",
        "default-ghost-white": "#F3F6F3",
        "default-gray": "#DCE4DE",
        "theme-accent": "var(--theme-accent)",
        "theme-accent-hover": "var(--theme-accent-hover)",
        "theme-accent-soft": "var(--theme-accent-soft)",
        "theme-accent-text": "var(--theme-accent-text)",
        "theme-accent-foreground": "var(--theme-accent-foreground)",
        "theme-accent-surface": "var(--theme-accent-surface)",
      },
      fontFamily: {
        raleway: ["var(--font-raleway)", ...fontFamily.sans],
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-30%)" },
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
