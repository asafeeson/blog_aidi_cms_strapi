// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,js,svelte,ts}', // всё, что нужно Tailwind для поиска классов
  ],
  theme: {
    extend: {
      colors: {
        primary: '#01DA01',
        secondary: '#01BC01',
        'style-title': '#001C32',
        'style-subtitle': '#A3A3A3',
        'accent-lightblue': '#E2EDFF',
        'accent-blue': '#0F61EF',
      },
      fontFamily: {
        sans: ['Manrope', 'sans-serif'],
        heading: ['Oswald', 'sans-serif'],
      },
    },
  },
  plugins: [],
}