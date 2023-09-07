/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primarybutton: "#A64D79",
        secondarybutton: "#ACD7EB",
        customYellow: "#F9F5E6",
        darkgreyCustom: "#A64D79",
      },
    },
  },
  plugins: [],

  "tailwindCSS.includeLanguages": {
    javascript: "javascript",
    html: "HTML",
  },
  "editor.quickSuggestions": {
    strings: true,
  },
};
