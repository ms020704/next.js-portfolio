/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Noto sans KR', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 0 20px rgba(59,130,246,0.5)',
      },
    },
  },
  plugins: [],
}
