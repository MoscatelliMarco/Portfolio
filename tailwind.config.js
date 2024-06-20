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
        "orange-dark": "#A02802",
        "gray-1": "#404040",
        "gray-2": "#757575",
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
            paddingRight: "1rem",
            paddingLeft: "1rem",
            maxWidth: "72rem",
            width: "100%",
            '@media (min-width: 768px)' : {
              paddingRight: "3rem",
              paddingLeft: "3rem",
            },
            '@media (min-width: 1024px)' : {
              paddingRight: "4rem",
              paddingLeft: "4rem",
            }
        },
      };

      // Add the new custom utilities
      addUtilities(newUtilities, ['responsive', 'hover']);
    },
    require('daisyui'),
    require('svelte-ux/plugins/tailwind.cjs')
  ]
}

