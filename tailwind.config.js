/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        PURPLE_PRIMARY: "rgb(166, 77, 121)",
        PURPLE_SECONDARY: "rgb(155, 65, 115)",
        BLUE_PRIMARY: "rgb(172, 215, 235)",
        BLUE_SECONDARY: "rgb(162, 200, 225)",
        BLUE_DARKBLUE: "rgb(24, 24, 125)",
        YELLOW_PRIMARY: "#F9F5E6",
        //Primary white
        BG_PRIMARY: "#FCFCFC",
        BG_SECONDARY: "rgb(154, 192, 209)",
        BG_GRAY: "rgb(248, 249, 250)",
        BLUE_LINK: "rgb(24, 24, 125)",
        TEXT_PRIMARY: "#212529",
        TEXT_SECONDARY: "#8590A6",
        TEXT_GRAY: "#495057",
        TEXT_LIGHTGRAY: "#8590A6",

        BORDER_PRIMARY: "#ADB5BD",
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
