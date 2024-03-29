const defaultTheme = require('tailwindcss/defaultTheme')

export default {
  content: [
    './src/**/*.svelte', 
    './src/**/*.html'
  ],
  theme: {
    extend: {
      colors: {
        "pink": "#F21AB6",
        "orange": "#E96138",
        "gray-1": "#3B3B3B",
        "gray-2": "#7F7F7F",
        "gray-3": "#BDBDBD",
        "black": "#181818",
        "white": "#FCFCFC"
      },
      fontFamily: {
        "title": ["Cormorand Garamond", ...defaultTheme.fontFamily.serif],
        "body": ["Inter", ...defaultTheme.fontFamily.sans]
      },
      spacing: {
        "neg-7": "-1.75rem",
        "88": "22rem"
      },
      lineHeight: {
        "title": "0.68"
      },
      fontSize: {
        '10xl': '10.5rem',
      }
    },
  },
  plugins: [require("daisyui")],
}

