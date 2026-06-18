import { IoLogoWhatsapp } from "react-icons/io5";
import { useLocation } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";
import { getWhatsAppUrl } from "../constants/whatsapp";

export function WithClose() {
	const { isDarkTheme } = useTheme();
	const location = useLocation();
	const whatsappUrl = getWhatsAppUrl(location.pathname);

	return (
		<section className="w-full top-0 left-0 right-0 z-50 flex justify-center items-center pointer-events-none pt-12 lg:pt-5">
			<div
				className={`pointer-events-auto flex justify-center items-center  max-w-lg transition-all duration-500 rounded-full border shadow-2xl backdrop-blur-md px-2 lg:px-4 py-1 md:py-2 ${
					isDarkTheme 
						? "bg-[#1a1a1a]/80 border-slate-700 text-white justify-around" 
						: "bg-white/80 border-slate-200 text-slate-800 justify-around"
				}`}>
				<div className="flex items-center gap-2">
					<div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
					<span className="text-xs md:text-sm opacity-80">
						Atención Inmediata{" "}
					</span>
				</div>
				<span className="text-xs md:text-sm font-semibold opacity-50"> {" • "} </span>
				<a
					href={whatsappUrl}
					target="_blank"
					rel="noopener noreferrer"
					className="flex items-center gap-2 group transition-all">
					<span className="text-xs md:text-sm font-semibold group-hover:text-[#024ad8] transition-colors">
						WhatsApp Directo
					</span>
					<div className="bg-[#25D366] text-white p-1.5 rounded-full shadow-lg group-hover:scale-110 transition-transform">
						<IoLogoWhatsapp className="text-lg" />
					</div>
				</a>
			</div>
		</section>
	);
}
