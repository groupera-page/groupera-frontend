/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primarypurple: "#A64D79",
        primaryblue: "#ACD7EB",
        primaryyellow: "#F9F5E6",
        primaryBg: "#FCFCFC",
        secondaryBg: "rgb(154, 192, 209)",
        grayBg: "rgb(248, 249, 250)",
        linkblue: "rgb(24, 24, 125)",
        textLightGray: "#9ca3af",
        secondaryText: "#8590A6",
        primaryText: "#212529",

        // darkgreyCustom: "#A64D79",
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
