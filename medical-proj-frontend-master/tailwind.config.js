/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-one": "#31363F",
        "primary-two": "#D9DDDC",

        "sidebar-button": "#50adb3",
        "sidebar-button-hover": "#05998c",
        "sidebar-text": "#ffffff",
        "sidebar-button-text": "#ffffff",
        "cam-button": "#7f8899",
        "uploadimg-text": "#000000",
        "webcam-back": "#222021",
        "modal-back": "#D9DDDC",
        "planthealthy-text": "green",
        "notfound-text": "red",

        "main-title": "#000000",
        "normal-text": "#000000",

        "tabs-primary": "#00000",

        "tabs-bg": "#e2e9e8",
        "tabs-text": "#000000",
        "tabs-curr-text": "#ffffff",
        "tabs-hover-text": "#ffffff",
        "tabs-hover": "#4c5762",
        "tabs-curr-bg": "#556677",
        "search-bg": "#50adb3",
        "search-bg-hover": "#05998c",
      },
    },
  },
  plugins: [],
};
