import { Navbar } from "./Navbar";
import { NavbarMobile } from "./NavbarMobile";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { WhatsAppButton } from "./WhatsAppButton";
import { ThemeButton } from "./ThemeButton";
import { BackButton } from "./BackButton";
import { TopButton } from "./TopButton";

export function Base() {
	const location = useLocation();
	const [isMobile, setIsMobile] = useState(() => window.matchMedia("(max-width: 1023px)").matches);
	const [showTopButton, setShowTopButton] = useState(false);

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
			
			{/* Theme Toggle - Top Right */}
			<div className="fixed top-4 right-4 z-50">
				<ThemeButton />
			</div>

			{/* Navigation & Contact Stack - Bottom Right */}
			<div className="fixed bottom-32 lg:bottom-12 right-4 z-50 flex flex-col items-center gap-3">
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
