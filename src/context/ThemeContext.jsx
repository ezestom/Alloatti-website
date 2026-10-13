import { createContext, useState, useContext, useEffect } from "react";
import PropTypes from "prop-types";

const THEME_STORAGE_KEY = "theme";

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
	const [isDarkTheme, setIsDarkTheme] = useState(() => {
		try {
			const saved = localStorage.getItem(THEME_STORAGE_KEY);
			if (saved !== null) {
				return saved === "dark";
			}
			return true; // Default to dark on first visit
		} catch (error) {
			console.warn("No se pudo leer el tema de localStorage:", error);
			return true; // Fallback default to dark
		}
	});

	useEffect(() => {
		try {
			if (isDarkTheme) {
				document.documentElement.classList.add("dark");
				localStorage.setItem(THEME_STORAGE_KEY, "dark");
			} else {
				document.documentElement.classList.remove("dark");
				localStorage.setItem(THEME_STORAGE_KEY, "light");
			}
		} catch (error) {
			console.warn("No se pudo guardar el tema en localStorage:", error);
		}
	}, [isDarkTheme]);

	const toggleTheme = () => {
		setIsDarkTheme((prevIsDarkTheme) => !prevIsDarkTheme);
	};

	return (
		<ThemeContext.Provider value={{ isDarkTheme, toggleTheme }}>
			{children}
		</ThemeContext.Provider>
	);
}

ThemeProvider.propTypes = {
	children: PropTypes.node.isRequired,
};

export function useTheme() {
	return useContext(ThemeContext);
}
