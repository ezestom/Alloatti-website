/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	darkMode: "class",
	theme: {
		extend: {
			colors: {
				hp: {
					blue: "#024ad8",
					"blue-deep": "#0e3191",
					"blue-bright": "#296ef9",
					"blue-soft": "#c9e0fc",
					ink: "#1a1a1a",
					"ink-soft": "#292929",
					cloud: "#f7f7f7",
					fog: "#e8e8e8",
					steel: "#c2c2c2",
					graphite: "#636363",
					charcoal: "#3d3d3d",
				},
			},
			fontFamily: {
				inter: ["Inter", "system-ui", "-apple-system", "sans-serif"],
			},
			borderRadius: {
				btn: "4px",
				card: "16px",
			},
			spacing: {
				section: "80px",
			},
			zIndex: {
				20: "20",
				30: "30",
			},
		},
	},
	plugins: [],
};
