/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class", // Enables dark mode by adding a class
  theme: {
    extend: {},
  },
  plugins: [],

  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      padding: "1rem",
    },
    extend: {
      fontFamily: {
        sans: ["var(--font-raleway)"],
        mono: ["var(--font-open-sans)"],
      },
      backgroundColor: {
        primary: "#5540af",
      },
      textColor: {
        primary: "#5540af",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        transparent: "transparent",
        current: "currentColor",
        voilet: {
          50: "#5540af",
        },
        dark: {
          50: "#202020",
        },
      },
    },
  },
  plugins: [],
};
