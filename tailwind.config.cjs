/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,html}"],
  theme: {
    extend: {
      backgroundImage: {
        'Cover': "url(https://wallpaperaccess.com/full/7488635.jpg)",
      }
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
