/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        robotoMono: [ "Roboto Mono", "monospace"]
      },
      colors: {
        primary : "#007047",
      },
      backgroundImage: {
        'hero': "url('/img/hero-pattern.svg')",
      }
    },
  },
  plugins: [],
}
