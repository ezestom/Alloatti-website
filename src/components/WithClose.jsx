import { IoLogoWhatsapp } from "react-icons/io5";
import { useTheme } from "../context/ThemeContext";
import { Link } from "react-router-dom";

export function WithClose() {
	const { isDarkTheme } = useTheme();

	return (
		<section className="w-full absolute top-1  flex justify-center items-center z-0">
			<div
				className={` lg:w-3/5 lg:ml-[320px]   ${
					isDarkTheme ? "text-white bg-gray-800" : " text-gray-900 "
				} bg-transparent flex items-center justify-center z-10  `}>
				<p className="text-center text-sm font-semibold  font-sm  flex flex-row-reverse gap-1 opacity-80  ">
					Contactate con nosotros, te brindaremos el mejor servicio
					<Link
						href="https://api.whatsapp.com/send?phone=NUMERO_DE_TELEFONO"
						target="_blank"
						rel="noopener noreferrer"
						className=" flex gap-1 items-center hover:text-green-500">
						<span className=" flex justify-center items-center gap-1 bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded hover:bg-green-200 dark:text-green-300">
							<IoLogoWhatsapp />
							Contactanos por WhatsApp
						</span>{" "}
					</Link>
				</p>
			</div>
		</section>
	);
}
