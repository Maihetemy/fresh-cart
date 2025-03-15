
import flowbite from "flowbite/plugin";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{html,js,jsx,tsx,ts}",
    "./index.html",
    "./node_modules/flowbite-react/**/*.js", // Add Flowbite components
  ],
  theme: {
    extend: {},
  },
  darkMode: "class",
  plugins: [
    flowbite, // Use Flowbite as a plugin directly
  ],
};
