/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				playwrite: ["PlaywriteCU", "sans-serif"],
				playwriteGuides: ["PlaywriteCUGuides", "sans-serif"],
				tt: ["TT2020Base", "sans-serif"],
			  },
		},
	},
	plugins: [],
}
