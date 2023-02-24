/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,html}"],
  theme: {
    extend: {
      backgroundImage: {
        'pic1': "url('./src/assets/gallery/display/pic1.png')",
        'pic2': "url('./src/assets/gallery/display/pic2.png')",
        'pic3': "url('./src/assets/gallery/display/pic3.png')",
        'pic4': "url('./src/assets/gallery/display/pic4.png')",
        'pic5': "url('./src/assets/gallery/display/pic5.png')",
        'pic6': "url('./src/assets/gallery/display/pic6.png')",
        'footer-texture': "url('/img/footer-texture.png')",
      }
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
