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
				"medium-gray": "#727272",
				"ebony-black": "#181818",
				"dark-gray": "#282828",
				"green-primary": "#1ed760",
				"dim-black": "#1f1f1f"
			}
		},
	},
	plugins: [],
}
