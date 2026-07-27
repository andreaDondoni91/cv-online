module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        paper: "#E9EDF2",
        paper2: "#DDE4EC",
        ink: "#12213A",
        inksoft: "#2A3B57",
        muted: "#51617A",
        grid: "#C3CEDA",
        teal: "#0D727A",
        tealdim: "#0D727A22",
        amber: "#E0982A",
        paperwhite: "#FBFCFE",
        terminalText: "#CFE8E6",
        terminalOutput: "#9FB4C7",
        codeText: "#D8E4EE",
        codeKey: "#8FD6CE",
        codePunct: "#6E8299",
        codeValue: "#F2C57C",
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
