/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			backgroundImage: {
				mage:
					"linear-gradient(to top, #051937, #00466d, #007aa1, #00b1cc, #12ebeb);",
				fighter:
					"linear-gradient(to top, #ac2525, #ba4d18, #c27007, #c29305, #bcb523);",
				assassin:
					"linear-gradient(to top, #742560, #89225e, #9c1e58, #ad1e50, #bc2345);",
				marksman:
					"linear-gradient(to top, #978c12, #ad971e, #c5a329, #ddae35, #f5b942);",
				tank:
					"linear-gradient(to top, #32270a, #3f2e0a, #4d350a, #5d3b0a, #6e410b);",
				support:
					"linear-gradient(to top, #59991e, #65a921, #72b924, #7fc927, #8dd929);",
			},
		},
	},
	plugins: [],
}
