import { Navbar } from "./Navbar";
import { NavbarMobile } from "./NavbarMobile";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { WhatsAppButton } from "./WhatsAppButton";
import { ThemeButton } from "./ThemeButton";
import { BackButton } from "./BackButton";
import { TopButton } from "./TopButton";
import { useTheme } from "../context/ThemeContext";
import { FaLinkedin, FaInstagram } from "react-icons/fa";
import { BsYoutube } from "react-icons/bs";

export function Base() {
	const location = useLocation();
	const [isMobile, setIsMobile] = useState(() => window.matchMedia("(max-width: 1023px)").matches);
	const [showTopButton, setShowTopButton] = useState(false);
	const { isDarkTheme } = useTheme();

	const isBackVisible = location.pathname !== "/";

	useEffect(() => {
		const mediaQuery = window.matchMedia("(max-width: 1023px)");
		const handleMediaChange = (e) => setIsMobile(e.matches);
		const handleScroll = () => setShowTopButton(window.scrollY > 300);

		mediaQuery.addEventListener("change", handleMediaChange);
		window.addEventListener("scroll", handleScroll);

		return () => {
			mediaQuery.removeEventListener("change", handleMediaChange);
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return (
		<>
			<div className="relative min-h-screen flex flex-col">
				{isMobile ? <NavbarMobile /> : <Navbar />}
			</div>

			{/* Mobile Social Networks - Top Left */}
			<div className="absolute top-0 left-0 right-0 mx-auto z-50 lg:hidden">
				<div className={`!px-4 !py-2 flex items-center justify-center gap-5 transition-all duration-500 ${
					isDarkTheme 
						? " border-white/10 shadow-black/40" 
						: " border-slate-200 shadow-slate-200"
				}`}>
					<a
						href="https://www.instagram.com/maquinaria.alloatti/"
						rel="noreferrer"
						target="_blank"
						className={`transition-all duration-300 hover:scale-125 ${
							isDarkTheme ? "text-slate-300 hover:text-white" : "text-slate-600 hover:text-[#024ad8]"
						}`}
						aria-label="Instagram"
					>
						<FaInstagram size={20} />
					</a>
					<a
						href="https://www.linkedin.com/company/alloatti/"
						rel="noreferrer"
						target="_blank"
						className={`transition-all duration-300 hover:scale-125 ${
							isDarkTheme ? "text-slate-300 hover:text-white" : "text-slate-600 hover:text-[#024ad8]"
						}`}
						aria-label="LinkedIn"
					>
						<FaLinkedin size={20} />
					</a>
					<a
						target="_blank"
						href="https://www.youtube.com/@AlloattiSRL"
						rel="noreferrer"
						className={`transition-all duration-300 hover:scale-125 ${
							isDarkTheme ? "text-slate-300 hover:text-white" : "text-slate-600 hover:text-[#024ad8]"
						}`}
						aria-label="YouTube"
					>
						<BsYoutube size={20} />
					</a>
				</div>
			</div>
			
			{/* Theme Toggle - Top Right */}
			<div className="fixed top-4 right-4 z-50">
				<ThemeButton />
			</div>

			{/* Navigation & Contact Stack - Bottom Right */}
			<div className="fixed bottom-32 lg:bottom-24 right-4 z-50 flex flex-col items-center gap-3">
				{/* Smart Back Button */}
				<div className={`transition-all duration-500 transform ${
					isBackVisible 
						? "translate-y-0 opacity-100 scale-100" 
						: "translate-y-10 opacity-0 scale-50 pointer-events-none"
				}`}>
					<BackButton />
				</div>

				{/* Smart Scroll to Top */}
				<div className={`transition-all duration-500 transform ${
					showTopButton 
						? "translate-y-0 opacity-100 scale-100" 
						: "translate-y-10 opacity-0 scale-50 pointer-events-none"
				}`}>
					<TopButton />
				</div>

				{/* Primary CTA: WhatsApp */}
				<WhatsAppButton />

	
			</div>
		</>
	);
}
