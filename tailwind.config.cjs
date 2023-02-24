/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,html}"],
  theme: {
    extend: {
      backgroundImage: {
        'Cover': "url('./src/assets/gallery/elements/Cover.png')",
      }
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
