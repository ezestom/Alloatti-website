import { FaFacebookF, FaInstagram, FaTwitter, FaGithub } from "react-icons/fa";
import { useTheme } from "../context/ThemeContext";
import { Link } from "react-router-dom";
import { IoLogoWhatsapp } from "react-icons/io5";
export function Footer() {
	const { isDarkTheme } = useTheme();
	return (
		<section
			className={`fixed bottom-3 left-8 z-10  ${
				isDarkTheme ? "bg-gray-900 " : "bg-gray-50 "
			}`}>
			<div className=" ">
				<Link
					href="https://api.whatsapp.com/send?phone=NUMERO_DE_TELEFONO"
					target="_blank"
					rel="noopener noreferrer"
					className=" flex w-full items-center hover:text-green-500">
					<span className=" flex w-full justify-center items-center gap-1 bg-green-100 text-green-800 text-sm font-medium px-2.5 py-1  rounded hover:bg-green-200 dark:text-green-300">
						<IoLogoWhatsapp />
						Escribinos por WhatsApp
					</span>{" "}
				</Link>
				<ul className="flex justify-around py-1">
					<li>
						<a
							href="/"
							rel="noreferrer"
							target="_blank"
							className={`${
								isDarkTheme
									? "text-gray-100 hover:text-blue-200"
									: "text-black hover:text-blue-600"
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
									? "text-gray-100 hover:text-blue-200"
									: "text-black hover:text-blue-600"
							}`}>
							<FaInstagram />
						</a>
					</li>
					<li>
						<a
							href="/"
							rel="noreferrer"
							target="_blank"
							className={`${
								isDarkTheme
									? "text-gray-100 hover:text-blue-200"
									: "text-black hover:text-blue-600"
							}`}>
							<FaTwitter />
						</a>
					</li>
					<li>
						<a
							href="/"
							rel="noreferrer"
							target="_blank"
							className={`${
								isDarkTheme
									? "text-gray-100 hover:text-blue-200"
									: "text-black hover:text-blue-600"
							}`}>
							<FaGithub />
						</a>
					</li>
				</ul>
				<p className="mt-1 text-center text-sm text-gray-500 sm:mt-0 sm:text-right">
					Copyright &copy; 2023. All rights reserved.
				</p>
			</div>
		</section>
	);
}
