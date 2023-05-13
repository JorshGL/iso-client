/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        custom: {
          blue: {
            main: "#005395",
            soft: "#256CA5",
            extralight: "#B0C0F7"
          },
          yellow: {
            main: "#F8D464",
            soft: "#F3F3A6",
            extralight: "#F9F9D6",
          }
        },
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
