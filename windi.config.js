import { defineConfig } from "windicss/helpers"

export default defineConfig({
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  safelist: ["prose", "prose-sm", "m-auto"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {}
  },
  variants: {
    extend: {}
  },
  plugins: []
})
