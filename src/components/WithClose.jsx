import { IoLogoWhatsapp } from "react-icons/io5";
import { useTheme } from "../context/ThemeContext";

export function WithClose() {
	const { isDarkTheme } = useTheme();

	return (
		<section className="w-full fixed top-0 left-0 right-0 z-50 flex justify-center items-center pointer-events-none p-8">
			<div
				className={`pointer-events-auto flex justify-center items-center w-full max-w-lg transition-all duration-500 rounded-xl border shadow-2xl backdrop-blur-md px-6 py-2 ${
					isDarkTheme 
						? "bg-[#1a1a1a]/80 border-slate-700 text-white justify-around" 
						: "bg-white/80 border-slate-200 text-slate-800 justify-around"
				}`}>
				<div className="flex items-center gap-2">
					<div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
					<span className="text-[10px] md:text-xs font-bold uppercase tracking-wider opacity-80">
						Atención Inmediata
					</span>
				</div>
				
				<a
					href="https://wa.me/+5491168641122"
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
