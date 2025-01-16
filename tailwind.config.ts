import type { Config } from "tailwindcss";

export default {
	content: ["./app/**/*.{ts,tsx}"],
	theme: {
		extend: {
			colors: {
				white: "#fff",
				"white-a08": "hsla(0,100%,100%,.08)",
				page: {
					main: "#000212",
				},
				grey: "#858699",
				"grey-dark": "#222326",
			},
		},
		fontFamily: {
			sans: "var(--font-geist-sans)",
			mono: "var(--font-geist-mono)",
		},
		fontSize: {
			xs: ["1.2rem", ""],
			sm: ["1.4rem", ""],
			md: ["1.6rem", ""],
			lg: ["1.8rem", ""],
			xl: ["2.4rem", ""],
			"2xl": ["3.6rem", ""],
			"3xl": ["4.8rem", ""],
			"4xl": ["6rem", ""],
		},
		spacing: {
			0: "0",
			1: "0.4rem",
			2: "0.8rem",
			3: "1.2rem",
			4: "1.6rem",
			5: "2rem",
			6: "2.4rem",
			7: "2.8rem",
			8: "3.2rem",
			9: "3.6rem",
			10: "4rem",
			11: "4.4rem",
			12: "4.8rem",
			"header-height": "var(--header-height)",
		},
		backgroundImage: {
			"primary-gradient":
				"linear-gradient(92.88deg, rgb(69, 94, 181) 9.16%, rgb(86, 67, 204) 43.89%, rgb(103, 63, 215) 64.72%)",
		},
	},
	plugins: [],
} satisfies Config;
