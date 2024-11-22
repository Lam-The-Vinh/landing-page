/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "2rem",

        screens: {
          xl: "1248px",
        },
      },
      colors: {
        "dark-blue": "rgba(23, 44, 55, 1)",
        "sub-dark-blue": "rgba(23, 32, 57, 1)",
        "primary-dark-blue": "rgba(31, 42, 68, 1)",
        "sub-orange": "rgba(178, 144, 99, 1)",
        "bg-sub-orange": "rgba(215, 196, 169, 0.9)",
      },
      padding: {
        "98px": "98px",
      },
    },
  },
  plugins: [],
};
