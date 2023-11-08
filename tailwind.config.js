/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        PURPLE_PRIMARY: "#A64D79",
        BLUE_PRIMARY: "#ACD7EB",
        YELLOW_PRIMARY: "#F9F5E6",

        BG_PRIMARY: "#FCFCFC",
        BG_SECONDARY: "rgb(154, 192, 209)",
        BG_GRAY: "rgb(248, 249, 250)",
        BLUE_LINK: "rgb(24, 24, 125)",
        TEXT_PRIMARY: "#212529",
        TEXT_SECONDARY: "#8590A6",
        TEXT_GRAY: "rgb(73, 80, 87)",
        TEXT_LIGHTGRAY: "#9ca3af",
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
