/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,vue}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {},
    colors: {
      transparent: "transparent",
      current: "currentColor",
      laravel: "#e11d48",
      react: "#22d3ee",
      tailwind: "#0891b2",
      mysql: "#0c4a6e",
      bootstrap: "#6d28d9",
      html: "#ea580c",
      css: "#0ea5e9",
      javascript: "#fbbf24",
      jquery: "#0369a1",
    },
  },
  plugins: [require("daisyui"), require("flowbite/plugin")],
  daisyui: {
    themes: ["cupcake", "luxury"],
  },
};
