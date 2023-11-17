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
				<p className="text-center text-xs font-semibold felx justify-center items-center font-sm  flex flex-row-reverse gap-1 opacity-80  ">
					Contactate con nosotros, para brindarle la mejor atención
					<Link
						href="https://api.whatsapp.com/send?phone=5491168641122"
						target="_blank"
						rel="noopener noreferrer"
						className="flex gap-1 items-center hover:text-green-600">
						<span className="flex justify-center items-center gap-1 bg-green-300 text-black text-xs font-medium px-2.5 py-0.5 rounded hover:bg-green-400 dark:text-green-500">
							<IoLogoWhatsapp /> Contactanos por WhatsApp
						</span>
					</Link>
				</p>
			</div>
		</section>
	);
}
