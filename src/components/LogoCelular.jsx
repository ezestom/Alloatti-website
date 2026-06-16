import logoDark from "../img/Alloatti-logo-dark.png";
import logoLight from "../img/Alloatti-logo-light.png";
import { useTheme } from "../context/ThemeContext";

export function LogoCelular() {
	const { isDarkTheme } = useTheme();

	return (
		<div className="flex items-center justify-center w-full sm:block md:hidden mb-12">
			<img
				className="max-w-[250px] transition-all duration-300"
				src={isDarkTheme ? logoDark : logoLight}
				alt="logo Alloatti"
			/>
		</div>
	);
}

