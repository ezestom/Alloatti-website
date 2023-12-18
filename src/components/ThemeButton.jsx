import { useTheme } from "../context/ThemeContext.jsx";
import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";

export function ThemeButton() {
	const { toggleTheme, isDarkTheme } = useTheme();
	return (
		<span className=" ">
			<button
				onClick={toggleTheme}
				className="fixed right-0 top-1 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg p-2.5 text-center inline-flex items-center mr-2 -rotate-90 border">
				{isDarkTheme ? <BsFillSunFill /> : <BsFillMoonStarsFill />}
			</button>
		</span>
	);
}
