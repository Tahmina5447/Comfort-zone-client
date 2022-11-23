/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#911A1D",

          "secondary": "#6C0E18",

          "accent": "#dcf9a9",

          "neutral": "#281C2C",

          "base-100": "#f3f4f6",

          "info": "#5FC3F1",

          "success": "#2FC190",

          "warning": "#F09738",

          "error": "#EA3974",
        },
      },
    ],
  },
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}
