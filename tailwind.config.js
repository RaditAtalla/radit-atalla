/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        orangePrimary: "#F16529",
        orangeOpacity: "rgba(241, 101, 41, 0.3)",
        cyanPrimary: "#001B28",
        cyanOpacity: "rgba(132, 202, 237, 0.2)",
        cyanOpacity5: "rgba(132, 202, 237, 0.05)",
        cyanOpacity10: "rgba(132, 202, 237, 0.1)",
        yellowPrimary: "#F5DE19",
        yellowOpacity: "rgba(245, 222, 25, 0.3)",
        bluePrimary: "#2965F1",
        blueOpacity: "rgba(41, 101, 241, 0.3)",
        grayPrimary: "#D5D5D5",
        grayOpacity: "rgba(217, 217, 217, 0.1)",
      }
    },
  },
  plugins: [],
}