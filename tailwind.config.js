module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        accent: { DEFAULT: "#7c3aed" }
      },
      boxShadow: { soft: "0 8px 24px rgba(15,12,41,0.12)" }
    }
  },
  plugins: []
};
