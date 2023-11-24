import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { useTheme } from "../context/ThemeContext";
import { Link } from "react-router-dom";
import { IoLogoWhatsapp } from "react-icons/io5";
import { BsYoutube } from "react-icons/bs";
export function Footer() {
	const { isDarkTheme } = useTheme();
	return (
		<section
			className={`fixed bottom-0 left-8 z-10  ${
				isDarkTheme ? "bg-gray-900 " : "bg-gray-50 "
			}`}>
			<div className=" text-center">
				<Link
					href="https://api.whatsapp.com/send?phone=NUMERO_DE_TELEFONO"
					target="_blank"
					rel="noopener noreferrer"
					className=" flex w-full items-center hover:text-green-500  justify-center">
					<span className=" flex w-auto justify-center text-center items-center gap-1 bg-green-300 text-black text-xs font-medium p-2  rounded-lg hover:bg-green-400">
						<IoLogoWhatsapp />
						Te responederemos a la brevedad
					</span>{" "}
				</Link>
				<ul className="flex justify-around py-1">
					<li>
						<a
							href="https://www.facebook.com/alloatti.srl/"
							rel="noreferrer"
							target="_blank"
							className={`${
								isDarkTheme
									? "text-gray-100 hover:text-blue-900"
									: "text-black hover:text-blue-900"
							}`}>
							<FaFacebookF />
						</a>
					</li>
					<li>
						<a
							href="/"
							rel="noreferrer"
							target="_blank"
							className={`${
								isDarkTheme
									? "text-gray-100 hover:text-pink-600"
									: "text-black hover:text-pink-600"
							}`}>
							<FaInstagram />
						</a>
					</li>
					<li>
						<a
							target="_blank"
							href="https://www.youtube.com/@AlloattiSRL"
							rel="noreferrer"
							className={`${
								isDarkTheme
									? "text-gray-100 hover:text-red-600"
									: "text-black hover:text-red-600"
							}`}>
							<BsYoutube />
						</a>
					</li>
				</ul>
				<p className="mt-1 text-center text-xs text-gray-500 sm:mt-0 ">
					Copyright &copy; 2023. All rights reserved.
				</p>
				<code className="mt-1 text-center text-sm  sm:mt-0 sm:text-right text-slate-600">
					Designed and Developed by{" "}
					<a
						href="https://ezestom.github.io/portfolio/"
						target="_blank"
						rel="noopener noreferrer"
						className="text-blue-500 hover:text-blue-700">
						Eze Stom {"->"}
					</a>
				</code>
			</div>
		</section>
	);
}
