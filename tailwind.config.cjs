/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      "backgroundImage": {
        'hero-pattern': "url('/src/assets/home_background.jpg')"
      }
    },
  },
  plugins: [],
}
