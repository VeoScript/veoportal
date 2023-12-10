/** @type {import('tailwindcss').Config} */
const { fontFamily } = require('tailwindcss/defaultTheme')

module.exports = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/layouts/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/utils/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        "accent-1": "#111827",
        "accent-2": "#010101",
        "accent-3": "#84D2F6",
        "accent-4": "#F4BD83",
        "accent-5": "#386FA5",
        "accent-6": "#E1E8F4",
        "accent-7": "#BBC9E1",
        "accent-8": "#EB8B21",
        "accent-9": "#1EAAEE",
      },
      fontFamily: {
        prompt: ['var(--prompt-font)', ...fontFamily.sans],
        rock_salt: ['var(--rock_salt-font)', ...fontFamily.sans],
      },
      animation: {
        marquee: 'marquee 25s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateY(0%)' },
          '100%': { transform: 'translateY(-100%)' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      screens: {
        "large-break-point": "1440px",
        "extra-large-break-point": "1920px",
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
