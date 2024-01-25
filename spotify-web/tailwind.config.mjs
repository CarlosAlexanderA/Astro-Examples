/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				"deep-black": "#121212",
				"neutral-gray": "#b3b3b3",
				"dark-slate": "#1a1a1a",
				"shadow-gray": "#242424",
				"light-gray": "#a7a7a7",
				"medium-gray": "#727272"
			}
		},
	},
	plugins: [],
}
