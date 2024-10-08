import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'selector',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'Yellowtail': ['Yellowtail', 'cursive'],
        'Inter': ['Inter', 'sans-serif'],
      },
      colors: {
        'themeBlue': {
          '1': '#f1fafa',
          '2': '#dcf1f1',
          '3': '#bde3e4',
          '4': '#90ced0',
          '5': '#64b4b9',
          '6': '#40949a',
          '7': '#387982',
          '8': '#32636c',
          '9': '#30535a',
          '10': '#2c464d',
          '11': '#192e33',
        },
      },
      keyframes: {
        hide: {
          from: { opacity: "1" },
          to: { opacity: "0" },
        },
        slideIn: {
          from: {
            transform: "translateX(calc(100% + var(--viewport-padding)))",
          },
          to: { transform: "translateX(0)" },
        },
        swipeOut: {
          from: { transform: "translateX(var(--radix-toast-swipe-end-x))" },
          to: { transform: "translateX(calc(100% + var(--viewport-padding)))" },
        },
      },
      animation: {
        hide: "hide 100ms ease-in",
        slideIn: "slideIn 150ms cubic-bezier(0.16, 1, 0.3, 1)",
        swipeOut: "swipeOut 100ms ease-out",
      },
    },
  },
  plugins: [],
}
export default config
