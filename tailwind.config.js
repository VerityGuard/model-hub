/** const plugin = require('tailwindcss/plugin') */

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{html,js,svelte,ts}',
    './node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}'
  ],
  theme: {
    extend: {
      colors: {
        'muted': '#969FAF',
        // flowbite-svelte
        primary: { 50: '#FFF5F2', 100: '#FFF1EE', 200: '#FFE4DE', 300: '#FFD5CC', 400: '#FFBCAD', 500: '#FE795D', 600: '#EF562F', 700: '#EB4F27', 800: '#CC4522', 900: '#A5371B'},
        gray: {
          10:  '#FEFEFE',
          25:  '#F9FAFB',
          75:  '#F6F7F8',
          125: '#EFF0F3',
          150: '#ECEDF1',
          250: '#DBDEE3',
          325: '#C4C9D0',
          350: '#B7BCC5',
          550: '#5B646E',
          625: '#46505F',
          650: '#414B5A',
          725: '#313B4A',
          750: '#2B3544',
          775: '#252F3D',
          825: '#1B2533',
          850: '#18212F',
          875: '#151C2B'
        }
      },
      width: {
        "4.5": "1.125rem",
      },
      height: {
        "4.5": "1.125rem",
      },
      spacing: {
        'initial': 'initial',
      },
      screens: {
        'xs': '576px',
        '3xl': '1720px',
      },
      gradientColorStopPositions: {
        "33%": '33.3%',
        "66%": '66.6%'
      },
      grayscale: {
        10: '10%',
        20: '20%',
        30: '30%',
        40: '40%',
        50: '50%',
        60: '60%',
        70: '70%',
        80: '80%',
        90: '90%',
      }
    },
  },
  darkMode: 'class',
  plugins: [
    require('flowbite/plugin'),
    require('./src/plugins/backgroundSplit')
  ],
}

