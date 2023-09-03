import { IoLogoWhatsapp } from "react-icons/io5";
import { ThemeButton } from "./ThemeButton";
import { useTheme } from "../context/ThemeContext";

export function WithClose() {
	const { isDarkTheme } = useTheme();

	return (
		<div
			className={`white  px-3 py-3 ${
				isDarkTheme ? "text-white bg-gray-800" : " text-gray-900 "
			} bg-gray-100 flex items-center justify-center z-10`}>
			<p className="text-center text-sm font-sm flex items-center justify-center gap-2">
				No te pierdas nuestras máquinas semiautomáticas y automáticas!
				<a
					href="https://api.whatsapp.com/send?phone=NUMERO_DE_TELEFONO"
					target="_blank"
					rel="noopener noreferrer"
					className="underline flex gap-1 items-center hover:text-blue-300">
					Contáctanos por Whatsapp <IoLogoWhatsapp />
				</a>
			</p>
			<ThemeButton />
		</div>
	);
}
