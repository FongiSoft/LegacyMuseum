/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'LegacyBlue': {
					'50': '#f0f4fe',
					'100': '#dce6fd',
					'200': '#c1d3fc',
					'300': '#97b8f9',
					'400': '#6593f5',
					'500': '#416df0',
					'600': '#2245e3', // default
					'700': '#233ad2',
					'800': '#2331aa',
					'900': '#222f86',
					'950': '#191e52',
				},
			}
		},
	},
	plugins: [],
}
