/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        paper: "#E9EDF2",
        paper2: "#DDE4EC",
        ink: "#12213A",
        inksoft: "#2A3B57",
        muted: "#5B6B7F",
        grid: "#C3CEDA",
        teal: "#0E7C86",
        tealdim: "#0E7C8622",
        amber: "#E0982A",
        paperwhite: "#FBFCFE",
      },
      fontFamily: {
        display: ["'Space Grotesk'", "sans-serif"],
        sans: ["Inter", "sans-serif"],
        mono: ["'IBM Plex Mono'", "monospace"],
      },
    },
  },
  plugins: [],
};
