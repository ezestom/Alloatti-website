import { createContext, useState, useContext, useEffect } from "react";
import PropTypes from "prop-types";

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
	const [isDarkTheme, setIsDarkTheme] = useState(false);

	useEffect(() => {
		if (isDarkTheme) {
			document.documentElement.classList.add("dark");
		} else {
			document.documentElement.classList.remove("dark");
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
