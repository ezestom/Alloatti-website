import { useTheme } from "../context/ThemeContext";
import logoLigth from "../img/Alloatti-logo-light.png";
import logoDark from "../img/Alloatti-logo-dark.png";

export function LogoCelular() {
	const { isDarkTheme } = useTheme();

	return (
		<div className="flex items-center justify-center w-full my-6 sm:block md:hidden">
			<img
				className={`px-24 py-4 rounded-lg shadow-sm transition-all duration-300 ${
					isDarkTheme
						? "bg-slate-1000/80 shadow-black/40 backdrop-blur-sm"
						: "bg-white/20 shadow-slate-200 backdrop-blur-sm"
				}`}
				src={isDarkTheme ? logoDark : logoLigth}
				alt="logo Alloatti"
			/>
		</div>
	);
}
