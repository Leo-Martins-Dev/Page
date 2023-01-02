/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
    "./public/index.html",
    "./src/**/*.{html,js}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
      spacing: {
        desktop: "100px",
        mobile: "15px",
      },
      colors: {
        ...require("tailwindcss/colors"),
        primary: "#1e1c2a",
        secondary: "#6e48d6",
        tertiary: "#F55F36",
        quaternary: "#fff",
        quinary: "#B5B5B5",
      },
      animation: {
        fade: "fade 0.4s ease-in-out",
        slideDown: "slide-down 1s ease-in-out",
      },
      keyframes: {
        fade: {
          "0%": { scale: 0, opacity: 0 },
          "100%": { scale: 1, opacity: 1 },
        },
        slideDown: {
          "0%": { transformS: "translateY(-70px)", opacity: 0 },
          "100%": { transformS: "translateY(0)", opacity: 1 },
        },
      },
    },
  },
  plugins: [],
};
