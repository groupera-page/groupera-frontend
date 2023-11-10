/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        PURPLE_PRIMARY: "#A64D79",
        BLUE_PRIMARY: "#ACD7EB",
        YELLOW_PRIMARY: "#F9F5E6",
        //Primary white
        BG_PRIMARY: "#FCFCFC",
        BG_SECONDARY: "rgb(154, 192, 209)",
        BG_GRAY: "rgb(248, 249, 250)",
        BLUE_LINK: "rgb(24, 24, 125)",
        TEXT_PRIMARY: "#212529",
        TEXT_SECONDARY: "#8590A6",
        TEXT_GRAY: "rgb(73, 80, 87)",
        TEXT_LIGHTGRAY: "#9ca3af",
      },
      boxShadow: {
        RIGHT: "8px 0 4px -4px rgba(0, 0, 0.0, 0.08)",
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],

  "tailwindCSS.includeLanguages": {
    javascript: "javascript",
    html: "HTML",
  },
  "editor.quickSuggestions": {
    strings: true,
  },
};
