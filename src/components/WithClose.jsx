
import { IoLogoWhatsapp } from "react-icons/io5";
import { ThemeButton } from "./ThemeButton";

export function WithClose() {
	return (
		<div className="bg-blue-900 px-3 py-3 text-white flex items-center justify-center">
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
