/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				quicksand: "'Quicksand', sans-serif",
				manrope: "'Manrope', sans-serif",
				"fira-code": "'Fira Code', monospace",
			},
			colors: {
				"primary-yellow": "#FFDE59",
				"rose-pink": "#74247A",
			},
		},
	},
	plugins: [],
};
