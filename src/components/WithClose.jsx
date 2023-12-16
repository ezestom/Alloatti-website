import { IoLogoWhatsapp } from "react-icons/io5";
import { useTheme } from "../context/ThemeContext";
import { Link } from "react-router-dom";

export function WithClose() {
	const { isDarkTheme } = useTheme();

	return (
		<section className="w-full h-auto absolute top-1 flex justify-center items-center z-10 ">
			<div
				className={` lg:w-3/5 lg:ml-[320px]   ${
					isDarkTheme ? "text-white bg-gray-800" : " text-gray-900 "
				} bg-transparent  `}>
				<Link
					to="https://wa.me/+5491168641122"
					target="_blank"
					rel="noopener noreferrer"
					className=" gap-1  hover:text-green-600 flex justify-center items-center">
					<span className=" gap-1 flex justify-center items-center bg-green-300 text-black text-xs font-medium  p-2 rounded-lg hover:bg-green-400   ">
						<IoLogoWhatsapp /> Contactanos por WhatsApp para más
						Info
					</span>
				</Link>
			</div>
		</section>
	);
}
