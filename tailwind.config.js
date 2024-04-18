/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: { poppins: "poppins", marker: "Permanent Marker" },
      screens: {
        xlg: "1305px",
      },
    },
  },
  plugins: [],
};
