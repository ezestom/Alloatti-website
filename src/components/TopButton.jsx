import { FaArrowUp } from "react-icons/fa";
import { useTheme } from "../context/ThemeContext";

export function TopButton() {
	const { isDarkTheme } = useTheme();
	
	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	};

	return (
		<button
			onClick={scrollToTop}
			type="button"
			className={`w-12 h-12 rounded-full flex items-center justify-center shadow-2xl transition-all duration-500 backdrop-blur-xl border hover:scale-110 active:scale-95 group ${
				isDarkTheme 
					? "bg-slate-800/80 border-white/10 text-blue-400 shadow-black/40" 
					: "bg-white/80 border-slate-200 text-[#024ad8] shadow-slate-200"
			}`}
			aria-label="Volver arriba"
		>
			<FaArrowUp className="text-xl group-hover:-translate-y-1 transition-transform" />
		</button>
	);
}
