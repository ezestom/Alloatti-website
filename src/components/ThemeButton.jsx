import { useTheme } from "../context/ThemeContext.jsx";
import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";

export function ThemeButton() {
	const { toggleTheme, isDarkTheme } = useTheme();
	
	return (
		<button
			onClick={toggleTheme}
			className={`w-12 h-12 rounded-full flex items-center justify-center shadow-2xl transition-all duration-500 backdrop-blur-xl border hover:scale-110 active:scale-95 group ${
				isDarkTheme 
					? "bg-slate-800/80 border-white/10 text-yellow-400 shadow-black/40" 
					: "bg-white/80 border-slate-200 text-blue-600 shadow-slate-200"
			}`}
			aria-label="Cambiar tema"
		>
			{isDarkTheme ? (
				<BsFillSunFill className="text-xl group-hover:rotate-90 transition-transform duration-500" />
			) : (
				<BsFillMoonStarsFill className="text-xl group-hover:-rotate-12 transition-transform duration-500" />
			)}
		</button>
	);
}
