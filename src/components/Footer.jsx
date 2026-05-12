import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { useTheme } from "../context/ThemeContext";
import { BsYoutube } from "react-icons/bs";
export function Footer() {
	const { isDarkTheme } = useTheme();
	return (
		<section
			className={`absolute bottom-0 left-1/2 z-10 w-full max-w-2xl -translate-x-1/2 p-4 transition-colors duration-300 backdrop-blur-sm ${
				isDarkTheme ? "bg-[#1a1a1a]" : "bg-white "
			}`}>
			<div className="flex flex-col items-center justify-center gap-1">
				{/* <Link
					to="https://wa.me/+5491168641122"
					target="_blank"
					rel="noopener noreferrer"
					className="group flex items-center justify-center gap-2 py-2 px-4 rounded-[4px] bg-[#25d366] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#128c7e] transition-all">
					<IoLogoWhatsapp className="text-lg" />
					Soporte Directo
				</Link> */}
				
				<div className="flex justify-center gap-2">
					<a
						href="https://www.facebook.com/alloatti.srl/"
						rel="noreferrer"
						target="_blank"
						className={`${
							isDarkTheme ? "text-slate-400 hover:text-white" : "text-slate-600 hover:text-[#024ad8]"
						} transition-colors`}>
						<FaFacebookF size={12} />
					</a>
					<a
						href="https://www.instagram.com/alloatti.srl/"
						rel="noreferrer"
						target="_blank"
						className={`${
							isDarkTheme ? "text-slate-400 hover:text-white" : "text-slate-600 hover:text-[#024ad8]"
						} transition-colors`}>
						<FaInstagram size={12} />
					</a>
					<a
						target="_blank"
						href="https://www.youtube.com/@AlloattiSRL"
						rel="noreferrer"
						className={`${
							isDarkTheme ? "text-slate-400 hover:text-white" : "text-slate-600 hover:text-[#024ad8]"
						} transition-colors`}>
						<BsYoutube size={12} />
					</a>
				</div>
				
				<div className="text-[10px] text-center leading-relaxed">
					<p className="text-slate-500 uppercase tracking-tighter">
						&copy; {new Date().getFullYear()} Alloatti SRL. All rights reserved.
					</p>
					<p className="mt-1 text-slate-400">
						Developed by{" "}
						<a
							href="https://ezestom.is-a.dev/"
							target="_blank"
							rel="noopener noreferrer"
							className="text-[#024ad8] hover:underline">
							Eze Stom
						</a>
					</p>
				</div>
			</div>
		</section>
	);
}
