/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				fighter: "#f56642",
				mage: "#42bff5",
				marksman: "#f5b942",
				tank: "#6e410b",
				assassin: "#ad90de",
				support: "#8dd929",
			},
		},
	},
	plugins: [],
}
