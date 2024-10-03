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
      }
    },
  },
  plugins: [],
}
export default config
