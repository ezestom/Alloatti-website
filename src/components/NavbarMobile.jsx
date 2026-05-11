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
		{ to: "/nosotros", label: "Nosotros", icon: BsBriefcase, activeIcon: BsBriefcaseFill },
		{ to: "/preguntas-frecuentes", label: "FAQ", icon: BsQuestionSquare, activeIcon: BsQuestionSquareFill },
		{ to: "/contacto", label: "Contacto", icon: BsChatRightText, activeIcon: BsChatRightTextFill },
	];
	return (
		<div className="z-30 fixed bottom-0 w-full px-4 pb-4 flex flex-col gap-2">
			{/* Machine Sub-navigation Mobile */}
			<div className={`flex overflow-x-auto justify-evenly scrollbar-hide py-2 px-2 gap-2 rounded-xl border shadow-sm backdrop-blur-sm transition-colors duration-500 ${
				isDarkTheme ? "bg-[#292929]/80 border-slate-700" : "bg-slate-50/80 border-slate-200"
			}`}>
				<Link to="/maquina-para-bidones-retornables" onClick={scrollToTop} className="whitespace-nowrap px-2 py-1 rounded-lg text-[10px] font-semibold uppercase  shadow-sm border border-slate-100 dark:border-slate-700">Bidones Retornables</Link>
				<Link to="/maquina-para-bidones-descartables" onClick={scrollToTop} className="whitespace-nowrap px-2 py-1 rounded-lg text-[10px] font-semibold uppercase  shadow-sm border border-slate-100 dark:border-slate-700">Bidones Descartables</Link>
				<Link to="/accesorios-para-maquinas" onClick={scrollToTop} className="whitespace-nowrap px-2 py-1 rounded-lg text-[10px] font-semibold uppercase  shadow-sm border border-slate-100 dark:border-slate-700">Accesorios</Link>
			</div>

			<div className={`flex justify-around items-center rounded-2xl shadow-2xl border backdrop-blur-xl py-3 transition-all duration-500 ${
				isDarkTheme 
					? "bg-[#121212]/90 border-white/5 shadow-black/40" 
					: "bg-white/90 border-slate-200/50 shadow-slate-200/60"
			}`}>
				<ul className="flex w-full justify-around items-center px-2">
					{navItems.map((item) => {
						const isActive = location.pathname === item.to;
						const Icon = isActive ? item.activeIcon : item.icon;
						
						return (
							<li key={item.to} className="relative">
								<NavLink
									onClick={scrollToTop}
									to={item.to}
									className={({ isActive }) => `flex flex-col items-center gap-1.5 transition-all duration-300 ${
										isActive 
											? (isDarkTheme ? "text-blue-400" : "text-[#024ad8]") 
											: (isDarkTheme ? "text-slate-500 hover:text-slate-300" : "text-slate-400 hover:text-slate-600")
									}`}>
									<Icon size={22} className={`transition-transform duration-300 ${isActive ? "scale-110" : "scale-100"}`} />
									<span className={`text-[9px] font-bold uppercase tracking-widest transition-opacity duration-300 ${isActive ? "opacity-100" : "opacity-70"}`}>
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
