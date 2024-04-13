/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'sm': '360px',
        // => @media (min-width: 992px) { ... }
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["night"], // false: only light + dark | true: all themes | array: specific themes like this ["light", "dark", "cupcake"]
  },
}

