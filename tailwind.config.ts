import type { Config } from "tailwindcss";

const config: Config = {
	darkMode: "class",
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			backgroundColor: {
				// Light mode background colors
				"light-background": "#a8e6cf", // Soft light green
				// Dark mode background colors
				"dark-background": "#2f6a3f", // Dark green background for dark mode
			},
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic":
					"conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
			},
			colors: {
				"accent-1": "#d1f7e2", // Light green
				"accent-2": "#a5f7d2", // Medium light green
				"accent-7": "#2f6a3f", // Dark green
				success: "#28a745", // Green for success
				cyan: "#28ffb1", // Soft cyan green
				green: {
					light: "#a8e6cf", // Light green
					DEFAULT: "#4caf50", // Standard green
					dark: "#2c6b2f", // Dark green
				},
			},
			spacing: {
				28: "7rem",
			},
			letterSpacing: {
				tighter: "-.04em",
			},
			fontSize: {
				"5xl": "2.5rem",
				"6xl": "2.75rem",
				"7xl": "4.5rem",
				"8xl": "6.25rem",
			},
			boxShadow: {
				sm: "0 5px 10px rgba(0, 0, 0, 0.12)",
				md: "0 8px 30px rgba(0, 0, 0, 0.12)",
			},
		},
	},
	plugins: [],
};
export default config;
