import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			fontSize: {
				base: [
					"1.15rem",
					{
						lineHeight: "2rem",
					},
				],
			},
			fontFamily: {
				header: "var(--header-font)",
			},
			container: {
				center: true,
			},
			colors: {
				lightPeriwinkle: "#c4cfde",
				darkGunmetalBlue: "#212130",
				darkGunmetal: "#212428",
				gunmetal: "#29293b",
				platinum: "#e6e6e6",
				folly: "#ff014f",
			},
		},
	},
	plugins: [],
};
export default config;
