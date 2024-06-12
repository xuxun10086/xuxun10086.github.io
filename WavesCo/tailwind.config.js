/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {},
    screens: {
      "xs": '320px',
      // => @media (min-width: 320px) { ... }

      "sm": '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }
  },
    fontFamily: {
      'poppins': ['Poppins'],
  },
    backgroundImage: {
      "logo":"url('../src/assets/imgs/logo.png')"
    },
    colors: {
      white: "#ffffff",
      "eWhite":"#eeeeee",
      "pureWhite":'#a1a4af',
      "inputWhite":"#4C526A",
      "descriptionWhite":"#ACAFB8",
      black: "#000000",
      "btnBlue":'#0432df',
      "bgBlue":"#1B4BFF",
      "titleDark":"#020D37",
      "filterGray":'#F1F1F1',
      "descriptionDark":"#4C526A",
      "braveYellow":"#F59E00",
    }
  },
  plugins: [],
}
