import { FaLinkedin, FaInstagram } from "react-icons/fa";
import { useTheme } from "../context/ThemeContext";
import { BsYoutube } from "react-icons/bs";
import logo from "../img/e_logo_op.png"
export function Footer() {
	const { isDarkTheme } = useTheme();
	return (
		<section
			className={`absolute bottom-0 left-1/2 z-10 w-full max-w-2xl -translate-x-1/2 p-4 transition-colors duration-500 backdrop-blur-sm ${
				isDarkTheme ? "bg-[#1a1a1a]" : "bg-white "
			}`}>
			<div className="flex flex-col items-center justify-center gap-1">

				
				<div className="flex justify-center gap-4">
					<a
						href="https://www.instagram.com/maquinaria.alloatti/"
						rel="noreferrer"
						target="_blank"
						className={`${
							isDarkTheme ? "text-slate-400 hover:text-white" : "text-slate-600 hover:text-[#024ad8]"
						} transition-colors`}>
						<FaInstagram size={16} />
					</a> 
					<a
						href="https://www.linkedin.com/company/alloatti/"
						rel="noreferrer"
						target="_blank"
						className={`${
							isDarkTheme ? "text-slate-400 hover:text-white" : "text-slate-600 hover:text-[#024ad8]"
						} transition-colors`}>
						<FaLinkedin size={16} />
					</a> 
					<a
						target="_blank"
						href="https://www.youtube.com/@AlloattiSRL"
						rel="noreferrer"
						className={`${
							isDarkTheme ? "text-slate-400 hover:text-white" : "text-slate-600 hover:text-[#024ad8]"
						} transition-colors`}>
						<BsYoutube size={16} />
					</a>
				</div>
				
				<div className="text-[10px] text-center leading-relaxed">
					<p className="text-slate-500 uppercase tracking-tighter">
						&copy; {new Date().getFullYear()} Alloatti SRL.<br/> All rights reserved.
					</p>
					<p className="mt-1 text-slate-400 uppercase tracking-tighter">
						Developed by{" "}
						<a
							href="https://ezestom.is-a.dev/"
							target="_blank"
							rel="noopener noreferrer"
							className="flex items-center justify-center hover:scale-110 transition-transform text-blue-">
							<img
								src={logo}
								alt="Eze Stom"
								className="w-4 h-4 mt-1"
							/>
						</a>
					</p>
				</div>
			</div>
		</section>
	);
}
