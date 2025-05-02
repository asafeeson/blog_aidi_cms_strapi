// tailwind.config.ts

import type { Config } from 'tailwindcss';

export default {
	content: [],
	theme: {
		colors: {
			primary: '#01DA01',
			secondary: '#01BC01',
			lightgray: '#F7F7F7',
		},
		extend: {}
	},
	plugins: []
} satisfies Config;

// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [
//     './src/**/*.{html,js,svelte,ts}', // всё, что нужно Tailwind для поиска классов
//   ],
//   theme: {
//     extend: {
//       colors: {
//         primary: '#01DA01',
//         secondary: '#01BC01',
//         'style-title': '#001C32',
//         'style-subtitle': '#A3A3A3',
//         'accent-blue': '#0F61EF',
//         lightblue: '#E2EDFF',
//         page: '#F7F7F7' // 👈 вот это добавь
//       },
//       fontFamily: {
//         sans: ['Manrope', 'sans-serif'],
//         heading: ['Oswald', 'sans-serif'],
//       },
//     },
//   },
//   plugins: [],
// }
