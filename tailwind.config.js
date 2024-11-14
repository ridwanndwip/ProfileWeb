/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'xs': '460px',
      's': '576px',
      'm': '768px',
      'l': '992px',
      'xl': '1280px',
      'hd': '1680px',
    },
    extend: {
      colors: {
        'light': '#FAF6F0',
        'dark' : '#000000',
      },
    },
  },
  plugins: [],
}