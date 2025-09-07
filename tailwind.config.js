export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1F1F1F",    // Haupt-Hintergrund
        dark: "#0D0D0D",       // Navbar / Footer
        secondary: "#E5E5E5",  // Text
        accent: "#ba3939ff",     // Akzentfarbe für Hover / Buttons
        card: "#2C2C2C",       // Container / Sektionen
        highlight: "#b74b4b",  // Optional für Links / Icons
      },
      fontFamily: {
        heading: ["Poppins", "sans-serif"],
        body: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
