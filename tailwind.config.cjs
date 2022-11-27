/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      white: "hsl(0, 0%, 100%)",
      "light-grayish-violet": "hsl(270, 3%, 87%)",
      "dark-grayish-violet": "hsl(279, 6%, 55%)",
      "very-dark-violet": "hsl(278, 68%, 11%)",
      "border-start": "hsl(249, 99%, 64%)",
      "border-end": "hsl(278, 94%, 30%)",
      red: "hsl(0, 100%, 66%)",
    },
    fontFamily: {
      body: ["Space Grotesk"],
      sans: ["Space Grotesk"],
      display: ["Space Grotesk"],
    },
    fontWeight: {
      normal: 500,
    },
    extend: {},
  },
  plugins: [],
};
