import { FaFacebookF, FaInstagram, FaTwitter, FaGithub } from "react-icons/fa";
import { useTheme } from "../context/ThemeContext";
import { Link } from "react-router-dom";

export function Footer() {
	const { isDarkTheme } = useTheme();
	return (
		<section
			className={`flex justify-center items-center ${
				isDarkTheme ? "bg-gray-800 " : "bg-gray-50 "
			}`}>
			<div className=" ">
				<ul
					className={`flex gap-5 justify-center pb-2  ${
						isDarkTheme ? "text-white" : "text-black"
					}`}>
					<li>
						<Link className="hover:underline text-sm ">
							Compania
						</Link>
					</li>
					<li>
						<Link className="hover:underline text-sm ">Normas</Link>
					</li>
					<li>
						<Link className="hover:underline text-sm ">
							Referencia
						</Link>
					</li>
					<li>
						<Link className="hover:underline text-sm ">
							Soporte
						</Link>
					</li>
					<li>
						<Link className="hover:underline text-sm ">
							Licencia
						</Link>
					</li>
				</ul>
				<ul className="flex justify-center gap-6 sm:justify-end">
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
					<p className="mt-1 text-center text-sm text-gray-500 sm:mt-0 sm:text-right">
						Copyright &copy; 2023. All rights reserved.
					</p>
				</ul>
			</div>
		</section>
	);
}
