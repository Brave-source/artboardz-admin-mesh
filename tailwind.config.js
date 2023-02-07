/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-color": "rgba(1, 19, 53, 1)",
        "primary-purple": "rgba(3, 23, 64, 1)",
        "light-purple": "rgba(18, 61, 145, 1)",
        "active-link": "rgba(110, 2, 143, 1)",
      },
      fontFamily: {
        Montserrat: ["Montserrat", "sans-serif"],
        Poppins: ["Poppins", "sans-serif"],
        Roboto: ["Roboto", "sans-serif"],
      },
      gridTemplateColumns: {
        search: "auto 1fr auto",
        leaderItem: "auto auto 1fr",
      },
    },
  },
  plugins: [],
}
