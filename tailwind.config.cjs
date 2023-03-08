/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        modalwindow: "#cececeed",
      },
      animation: {
        modalwindow: "fadein 0.2s",
        omikuji: "omikuji 3s"
      },
      keyframes: {
        fadein: {
          "0%": {
            opacity: 0.5,
          },
          to: {
            opacity: 1,
          },
        },
        omikuji: {
          "0%": {
            transform: "rotate(135deg)",
          },
          "25%": {
            transform: "rotate(155deg)",
          },
          "50%": {
            transform: "rotate(135deg)",
          },
          "75%": {
            transform: "rotate(155deg)",
          },
          "100%": {
            transform: "rotate(135deg)",
          },
        },
      },
    },
  },
  plugins: [],
};
