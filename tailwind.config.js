/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        blue: 'var(--blue)',
        cream: 'var(--cream)',
        whiteish: 'var(--whiteish)',
      }
    },
  },
  plugins: [],
}
