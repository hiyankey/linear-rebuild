import type { Config } from "tailwindcss";

export default {
	content: ["./app/**/*.{ts,tsx}"],
	theme: {
		extend: {
			colors: {
				page: {
					main: "#000212",
				},
			},
		},
		fontFamily: {
			sans: "var(--font-geist-sans)",
			mono: "var(--font-geist-mono)",
		},
		fontSize: {
			sm: ["1.4rem", ""],
			md: ["1.6rem", ""],
			lg: ["1.8rem", ""],
			xl: ["2.4rem", ""],
			"2xl": ["3.6rem", ""],
			"3xl": ["4.8rem", ""],
			"4xl": ["6rem", ""],
		},
	},
	plugins: [],
} satisfies Config;
