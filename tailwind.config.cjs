/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        primary: {
          DEFAULT: "#B35D6C", 
          light: "#F3CADB",   
          dark: "#8C3A46",    
        },
        
        secondary: {
          DEFAULT: "#F4E2D8", 
          light: "#FAF3ED",  
          dark: "#E0C2B1",    
        },
        accent: "#8E5B4D", 
        background: "#FFF8F3", 
      },
    },
  },
  plugins: [],
};
