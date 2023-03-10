/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},

    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      "2xl": "1536px",
    },

    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'ahmar': '#EE462F',
      'azra9': '#A8D4FD',
      'white': '#FFFFFF' , 
      'beige': '#FCFCFC' ,
      'gris': '#333333' , 
      'black': '#000000' , 
      'lightgris' : '#D9D9D9' ,
      'cutegris' : '#999999' ,  
    }, 

  },
  plugins: [],
}

