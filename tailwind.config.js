/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode:"class",
  theme: {
    screens: {

      'mobile': '400px',
      // => @media (min-width: 320px) { ... }

      'sm':'640px'
    },
  },
  plugins: [],
}

