/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backdropBlur: {
        sm: "4px",
      },
      animation: {
        pulse: "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      backgroundImage: {
        "gradient-soft": "linear-gradient(to bottom right, rgb(249,224,239), rgb(244,244,255), rgb(214,247,247))",
      },
      colors: {
        primary: "#00B4D8", // Warna biru muda
        secondary: "#48CAE4", // Warna biru terang
        accent: "#a855f7", // Warna ungu
        darkBlue: "#0077B6", // Biru gelap
        lightBlue: "#CAF0F8", // Biru cerah
      },
    },
  },
  plugins: [],
};
