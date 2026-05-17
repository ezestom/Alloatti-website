import { NavLink, Link } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";
import { useLocation } from "react-router-dom";
import { AiFillHome, AiOutlineHome } from "react-icons/ai";
import { 
	BsBriefcaseFill, 
	BsBriefcase,
	BsChatRightTextFill,
	BsChatRightText,
	BsQuestionSquareFill,
	BsQuestionSquare
} from "react-icons/bs";
import { GiFactory, GiNetworkBars } from "react-icons/gi";

export function NavbarMobile() {
	const { isDarkTheme } = useTheme();
	const location = useLocation();

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	};

	const navItems = [
		{ to: "/", label: "Inicio", icon: AiOutlineHome, activeIcon: AiFillHome },
		{ to: "/maquina-para-bidones-retornables", label: "Máquinas", icon: GiFactory, activeIcon: GiFactory },
		{ to: "/nosotros", label: "Nosotros", icon: BsBriefcase, activeIcon: BsBriefcaseFill },
		{ to: "/preguntas-frecuentes", label: "FAQ", icon: BsQuestionSquare, activeIcon: BsQuestionSquareFill },
		{ to: "/normas-de-calidad", label: "Ventas", icon: GiNetworkBars, activeIcon: GiNetworkBars },
		{ to: "/contacto", label: "Contacto", icon: BsChatRightText, activeIcon: BsChatRightTextFill },
	];

	const isMachinesPath = [
		"/maquina-para-bidones-retornables",
		"/maquina-para-bidones-descartables",
		"/accesorios-para-maquinas"
	].includes(location.pathname);

	const isSalesPath = [
		"/normas-de-calidad",
		"/ultimas-noticias"
	].includes(location.pathname);

	const isTabActive = (item) => {
		if (item.to === "/maquina-para-bidones-retornables") {
			return isMachinesPath;
		}
		if (item.to === "/normas-de-calidad") {
			return isSalesPath;
		}
		return location.pathname === item.to;
	};

	return (
		<div className="z-30 fixed bottom-0 w-full px-4 pb-4 flex flex-col gap-2">
			{/* Sub-navigation Mobile (Context-Aware and Auto-Collapsible) */}
			{(isMachinesPath || isSalesPath) && (
				<div className={`flex overflow-x-auto justify-evenly scrollbar-hide py-2 px-2 gap-2 rounded-xl border shadow-sm backdrop-blur-sm transition-all duration-500 ${
					isDarkTheme ? "bg-[#292929]/80 border-slate-700" : "bg-slate-50/80 border-slate-200"
				}`}>
					{isSalesPath ? (
						<>
							<Link
								to="/normas-de-calidad"
								onClick={scrollToTop}
								className={`whitespace-nowrap px-3 py-1.5 rounded-lg text-[10px] font-bold uppercase transition-all duration-300 shadow-sm border ${
									location.pathname === "/normas-de-calidad"
										? (isDarkTheme 
											? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white border-transparent scale-105 shadow-blue-500/30" 
											: "bg-gradient-to-r from-[#024ad8] to-[#1e60eb] text-white border-transparent scale-105 shadow-blue-500/20")
										: (isDarkTheme 
											? "bg-[#1a1a1a] border-slate-700 text-slate-400 hover:text-slate-200" 
											: "bg-white border-slate-200 text-slate-500 hover:text-slate-700")
								}`}
							>
								Normas de Calidad
							</Link>
							<Link
								to="/ultimas-noticias"
								onClick={scrollToTop}
								className={`whitespace-nowrap px-3 py-1.5 rounded-lg text-[10px] font-bold uppercase transition-all duration-300 shadow-sm border ${
									location.pathname === "/ultimas-noticias"
										? (isDarkTheme 
											? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white border-transparent scale-105 shadow-blue-500/30" 
											: "bg-gradient-to-r from-[#024ad8] to-[#1e60eb] text-white border-transparent scale-105 shadow-blue-500/20")
										: (isDarkTheme 
											? "bg-[#1a1a1a] border-slate-700 text-slate-400 hover:text-slate-200" 
											: "bg-white border-slate-200 text-slate-500 hover:text-slate-700")
								}`}
							>
								Últimas Noticias
							</Link>
						</>
					) : (
						<>
							<Link
								to="/maquina-para-bidones-retornables"
								onClick={scrollToTop}
								className={`whitespace-nowrap px-3 py-1.5 rounded-lg text-[10px] font-bold uppercase transition-all duration-300 shadow-sm border ${
									location.pathname === "/maquina-para-bidones-retornables"
										? (isDarkTheme 
											? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white border-transparent scale-105 shadow-blue-500/30" 
											: "bg-gradient-to-r from-[#024ad8] to-[#1e60eb] text-white border-transparent scale-105 shadow-blue-500/20")
										: (isDarkTheme 
											? "bg-[#1a1a1a] border-slate-700 text-slate-400 hover:text-slate-200" 
											: "bg-white border-slate-200 text-slate-500 hover:text-slate-700")
								}`}
							>
								Bidones Retornables
							</Link>
							<Link
								to="/maquina-para-bidones-descartables"
								onClick={scrollToTop}
								className={`whitespace-nowrap px-3 py-1.5 rounded-lg text-[10px] font-bold uppercase transition-all duration-300 shadow-sm border ${
									location.pathname === "/maquina-para-bidones-descartables"
										? (isDarkTheme 
											? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white border-transparent scale-105 shadow-blue-500/30" 
											: "bg-gradient-to-r from-[#024ad8] to-[#1e60eb] text-white border-transparent scale-105 shadow-blue-500/20")
										: (isDarkTheme 
											? "bg-[#1a1a1a] border-slate-700 text-slate-400 hover:text-slate-200" 
											: "bg-white border-slate-200 text-slate-500 hover:text-slate-700")
								}`}
							>
								Bidones Descartables
							</Link>
							<Link
								to="/accesorios-para-maquinas"
								onClick={scrollToTop}
								className={`whitespace-nowrap px-3 py-1.5 rounded-lg text-[10px] font-bold uppercase transition-all duration-300 shadow-sm border ${
									location.pathname === "/accesorios-para-maquinas"
										? (isDarkTheme 
											? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white border-transparent scale-105 shadow-blue-500/30" 
											: "bg-gradient-to-r from-[#024ad8] to-[#1e60eb] text-white border-transparent scale-105 shadow-blue-500/20")
										: (isDarkTheme 
											? "bg-[#1a1a1a] border-slate-700 text-slate-400 hover:text-slate-200" 
											: "bg-white border-slate-200 text-slate-500 hover:text-slate-700")
								}`}
							>
								Accesorios
							</Link>
						</>
					)}
				</div>
			)}

			{/* Main Navigation Bar */}
			<div className={`flex justify-around items-center rounded-2xl shadow-2xl border backdrop-blur-xl py-3 transition-all duration-500 ${
				isDarkTheme 
					? "bg-[#121212]/90 border-white/5 shadow-black/40" 
					: "bg-white/90 border-slate-200/50 shadow-slate-200/60"
			}`}>
				<ul className="flex w-full justify-around items-center px-2">
					{navItems.map((item) => {
						const isActive = isTabActive(item);
						const Icon = isActive ? item.activeIcon : item.icon;
						
						return (
							<li key={item.to} className="relative">
								<NavLink
									onClick={scrollToTop}
									to={item.to}
									className={`flex flex-col items-center gap-1.5 transition-all duration-300 ${
										isActive 
											? (isDarkTheme ? "text-blue-400" : "text-[#024ad8]") 
											: (isDarkTheme ? "text-slate-500 hover:text-slate-300" : "text-slate-400 hover:text-slate-600")
									}`}>
									<Icon size={20} className={`transition-transform duration-300 ${isActive ? "scale-110" : "scale-100"}`} />
									<span className={`text-[8px] font-extrabold uppercase tracking-wider transition-opacity duration-300 ${isActive ? "opacity-100" : "opacity-70"}`}>
										{item.label}
									</span>
									{isActive && (
										<span className={`absolute -bottom-3 w-1 h-1 rounded-full ${isDarkTheme ? "bg-blue-400" : "bg-[#024ad8]"} shadow-lg shadow-blue-500/50`}></span>
									)}
								</NavLink>
							</li>
						);
					})}
				</ul>
			</div>
		</div>
	);
}
