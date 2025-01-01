/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        "bootFont": ["bootFont"]
      },
      screens:{
        "xs": "425px",
      },
      keyframes: {
        shine: {
          '0%': { width: '0%', left: '-100%' },
          '50%': { width: '100%', left: '100%' },
          '100%': { width: '0%', left: '100%' }
        }
      },
      animation: {
        'shine': 'shine 2s infinite'
      }
    },
  },
  plugins: [],
}