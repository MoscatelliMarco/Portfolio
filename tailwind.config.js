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
        "gray-1": "#404040",
        "gray-2": "#7F7F7F",
        "gray-3": "#BDBDBD",
        "gray-4": "#D3D3D3",
        "gray-5": "#E0E0E0",
        "black": "#181818",
        "white": "#FAFAFA"
      },
      fontFamily: {
        "title": ["Cormorand Garamond", ...defaultTheme.fontFamily.serif],
        "body": ["Inter", ...defaultTheme.fontFamily.sans]
      },
      spacing: {
        "22" : "5.5rem",
        "90": "22.5rem"
      },
      fontSize: {
        '10xl': '10.5rem',
      }
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.section-box': {
            margin: "0 1rem 0 1rem",
            maxWidth: "72rem",
            width: "100%",
            '@media (min-width: 768px)' : {
              margin: "0 3rem 0 3rem",
            },
            '@media (min-width: 1024px)' : {
              margin: "0 4rem 0 4rem",
            }
        },
      };

      // Add the new custom utilities
      addUtilities(newUtilities, ['responsive', 'hover']);
    },
  ]
}

