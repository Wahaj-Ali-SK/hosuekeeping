/** @type {import('tailwindcss').Config} */

const withMT = require("@material-tailwind/react/utils/withMT");

// export default {
//   content: [
//     "./index.html",
//     "./src/**/*.{js,ts,jsx,tsx}",
//   ],
//   theme: {
//     extend: {
//       colors: {
//         'input-bg': '#d8e5f9',
//         'button': '#483d8b',
//       },
//     },
//   },
//   plugins: [],
// }

module.exports = withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'input-bg': '#d8e5f9',
        'button': '#000',
      },
    },
  },
  plugins: [],
});