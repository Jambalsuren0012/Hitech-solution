/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-pattern": "url('/img/14294-ai.jpg')",
      },
    },
  },
  plugins: [],
};
