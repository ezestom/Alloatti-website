import { FaMoon, FaSun } from "react-icons/fa";
import { useTheme } from "../context/ThemeContext.jsx";

export function ThemeButton() {
	const { toggleTheme, isDarkTheme } = useTheme();
	return (
		<span className="fixed toDark right-10">
			<button
				onClick={toggleTheme}
				className="fixed top-2 right-2 items-center rounded  bg-white p-1 text-black shadow-md transition-all  focus:outline-none hover:bg-gray-100 focus:ring focus:ring-blue-900 focus:ring-opacity-50 active:bg-white/90">
				{isDarkTheme ? <FaSun /> : <FaMoon />}
			</button>
		</span>
	);
}
