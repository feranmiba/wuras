/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}" ,
    "./components/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      screens :{
        'tablet': '200px',
        // => @media (min-width: 640px) { ... }
  
        'laptop': '1024px',
        // => @media (min-width: 1024px) { ... }
  
        'desktop': '1280px',
        // => @media (min-width: 1280px) { ... }

      }
    },
  },
  plugins: [],
}

