/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,html}"],
  theme: {
    extend: {
      backgroundImage: {
        'pic1': "url('./src/assets/gallery/display/pic1.png')",
        'footer-texture': "url('/img/footer-texture.png')",
      }
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
