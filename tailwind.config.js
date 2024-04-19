/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ['./public/**/*.{html,js}'],
  theme: {
    screens: {
      xs: '480px',
      ...defaultTheme.screens
    },
    extend: {
      screens: {
        xs: '480px'
      },
      fontFamily: {
        karla: ['Karla', 'sans-serif']
      },
      colors: {
        'coffee': {
          50: '#e8d6b0',
          200: '#c89f94',
          400: '#bd8e80',
          600: '#a25f4b',
        }
      }
    },
    keyframes: {
      slideDown: {
        '0%': { transform: 'translateY(-100%)' },
        '100%': { transform: 'translateY(0)' }
      },
      fadeIn: {
        from: { opacity: 0 },
        to: { opacity: 1 }
      }
    },
    animation: {
      slideDown: 'slideDown 0.5s ease-in-out',
      fadeIn: 'fadeIn 0.5s ease-in-out'
    },
    backgroundImage: {
      'slider': 'url("./images/slider.jpg")'
    }
  },
  plugins: [],
}
