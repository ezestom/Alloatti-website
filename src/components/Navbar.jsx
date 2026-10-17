import { useState, useEffect } from "react";
import LogoLigth from "../img/Alloatti-logo-light.png";
import LogoDark from "../img/Alloatti-logo-dark.png";
import { FaChevronDown } from "react-icons/fa";
import { useTheme } from "../context/ThemeContext";
import { Link, useLocation } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";
import { GiFactory, GiNetworkBars } from "react-icons/gi";
import {
	BsBriefcaseFill,
	BsFillChatRightTextFill,
	BsFillQuestionSquareFill,
} from "react-icons/bs";
import { Footer } from "../components/Footer";

export function Navbar() {
	const { isDarkTheme } = useTheme();
	const location = useLocation();
	
	const isMachinesPath = [
		"/maquina-para-bidones-retornables",
		"/maquina-para-bidones-descartables",
		"/accesorios-para-maquinas"
	].includes(location.pathname);

	const isSalesPath = [
		"/catalogo",
		"/normas-de-calidad",
		"/ultimas-noticias"
	].includes(location.pathname);

	// Abierto por defecto para captar la atención del cliente de inmediato
	const [machinesOpen, setMachinesOpen] = useState(true);
	const [salesOpen, setSalesOpen] = useState(isSalesPath);

	useEffect(() => {
		if (isMachinesPath) {
			setMachinesOpen(true);
		}
	}, [isMachinesPath]);

	useEffect(() => {
		if (isSalesPath) {
			setSalesOpen(true);
		}
	}, [isSalesPath]);

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	};
	return (
		<aside
			className={`z-20 px-4 xl:px-6 fixed top-0 left-0 h-screen h-[100dvh] w-full max-w-[280px] border-r transition-all duration-500 flex flex-col justify-between ${
				isDarkTheme ? "bg-[#1a1a1a] border-slate-800 text-white" : "bg-white border-gray-100 text-[#1a1a1a]"
			} overflow-y-auto sidebar-scroll`}>
			
			<div className="pt-4 pb-2 xl:pt-8 xl:pb-4 flex justify-between items-center shrink-0">
				<Link to="/" onClick={scrollToTop} className="block w-full">
					<img
						src={isDarkTheme ? LogoDark : LogoLigth}
						alt="Alloatti Logo"
						className="w-auto h-10 xl:h-12 mx-auto hover:opacity-80 transition-opacity duration-300"
					/>
				</Link>
			</div>

				<ul className="flex-grow space-y-0.5 xl:space-y-2 pt-4">
					<li>
						<Link
							onClick={scrollToTop}
							to="/"
							className="flex items-center justify-start gap-3.5 xl:gap-4 rounded-[4px] px-3 xl:px-4 py-2 xl:py-2.5 text-xs font-semibold transition-all duration-300 hover:bg-[#024ad8] hover:text-white group relative overflow-hidden">
							<AiFillHome className="text-lg xl:text-xl group-hover:scale-110 transition-transform shrink-0" />
							<span>Inicio</span>
							<div className="absolute left-0 top-0 h-full w-1 bg-[#024ad8] opacity-0 group-hover:opacity-100 transition-opacity"></div>
						</Link>
					</li>

					<li>
						<details 
							open={machinesOpen}
							onToggle={(e) => setMachinesOpen(e.currentTarget.open)}
							className="group [&_summary::-webkit-details-marker]:hidden">
							<summary className="flex cursor-pointer items-center justify-between rounded-[4px] px-3 xl:px-4 py-2 xl:py-2.5 text-slate-500 transition-all duration-300 hover:bg-[#024ad8] hover:text-white group relative overflow-hidden">
								<span className="flex items-center gap-3.5 xl:gap-4 text-xs xl:text-sm font-semibold">
									<GiFactory className="text-lg xl:text-xl group-hover:scale-110 transition-transform shrink-0" />
									<span>Máquinas</span>
								</span>
								<FaChevronDown className="shrink-0 text-xs transition duration-300 group-open:-rotate-180" />
								<div className="absolute left-0 top-0 h-full w-1 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
							</summary>

							<ul className="mt-1 space-y-0.5 pl-7 xl:pl-8">
								<li>
									<Link
										onClick={scrollToTop}
										to="/maquina-para-bidones-retornables"
										className="block rounded-[4px] px-3 py-1.5 text-[11px] xl:text-xs font-medium text-slate-500 hover:text-[#024ad8] transition-colors border-l border-slate-100 dark:border-slate-800">
										Bidones Retornables
									</Link>
								</li>
								<li>
									<Link
										onClick={scrollToTop}
										to="/maquina-para-bidones-descartables"
										className="block rounded-[4px] px-3 py-1.5 text-[11px] xl:text-xs font-medium text-slate-500 hover:text-[#024ad8] transition-colors border-l border-slate-100 dark:border-slate-800">
										Bidones Descartables
									</Link>
								</li>
								<li>
									<Link
										onClick={scrollToTop}
										to="/accesorios-para-maquinas"
										className="block rounded-[4px] px-3 py-1.5 text-[11px] xl:text-xs font-medium text-slate-500 hover:text-[#024ad8] transition-colors border-l border-slate-100 dark:border-slate-800">
										Accesorios
									</Link>
								</li>
							</ul>
						</details>
					</li>

					<li>
						<Link
							onClick={scrollToTop}
							to="/nosotros"
							className="flex items-center gap-3.5 xl:gap-4 rounded-[4px] px-3 xl:px-4 py-2 xl:py-2.5 text-xs font-semibold text-slate-500 hover:bg-[#024ad8] hover:text-white transition-all duration-300 group relative overflow-hidden">
							<BsBriefcaseFill className="text-lg xl:text-xl group-hover:scale-110 transition-transform shrink-0" />
							<span>Nosotros</span>
							<div className="absolute left-0 top-0 h-full w-1 bg-[#024ad8] opacity-0 group-hover:opacity-100 transition-opacity"></div>
						</Link>
					</li>

					<li>
						<Link
							onClick={scrollToTop}
							to="/preguntas-frecuentes"
							className="flex items-center gap-3.5 xl:gap-4 rounded-[4px] px-3 xl:px-4 py-2 xl:py-2.5 text-xs font-semibold text-slate-500 hover:bg-[#024ad8] hover:text-white transition-all duration-300 group relative overflow-hidden">
							<BsFillQuestionSquareFill className="text-lg xl:text-xl group-hover:scale-110 transition-transform shrink-0" />
							<span>Preguntas</span>
							<div className="absolute left-0 top-0 h-full w-1 bg-[#024ad8] opacity-0 group-hover:opacity-100 transition-opacity"></div>
						</Link>
					</li>

					<li>
						<details 
							open={salesOpen}
							onToggle={(e) => setSalesOpen(e.currentTarget.open)}
							className="group [&_summary::-webkit-details-marker]:hidden">
							<summary className="flex cursor-pointer items-center justify-between rounded-[4px] px-3 xl:px-4 py-2 xl:py-2.5 text-slate-500 transition-all duration-300 hover:bg-[#024ad8] hover:text-white group relative overflow-hidden">
								<span className="flex items-center gap-3.5 xl:gap-4 text-xs font-semibold">
									<GiNetworkBars className="text-lg xl:text-xl group-hover:scale-110 transition-transform shrink-0" />
									<span>Ventas</span>
								</span>
								<FaChevronDown className="shrink-0 text-xs transition duration-300 group-open:-rotate-180" />
								<div className="absolute left-0 top-0 h-full w-1 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
							</summary>

							<ul className="mt-1 space-y-0.5 pl-7 xl:pl-8">
								<li>
									<Link
										onClick={scrollToTop}
										to="/catalogo"
										className="block rounded-[4px] px-3 py-1.5 text-[11px] xl:text-xs font-medium text-slate-500 hover:text-[#024ad8] transition-colors border-l border-slate-100 dark:border-slate-800">
										Catálogo Institucional
									</Link>
								</li>
								<li>
									<Link
										onClick={scrollToTop}
										to="/normas-de-calidad"
										className="block rounded-[4px] px-3 py-1.5 text-[11px] xl:text-xs font-medium text-slate-500 hover:text-[#024ad8] transition-colors border-l border-slate-100 dark:border-slate-800">
										Normas de Calidad
									</Link>
								</li>
								<li>
									<Link
										onClick={scrollToTop}
										to="/ultimas-noticias"
										className="block rounded-[4px] px-3 py-1.5 text-[11px] xl:text-xs font-medium text-slate-500 hover:text-[#024ad8] transition-colors border-l border-slate-100 dark:border-slate-800">
										Noticias del Rubro
									</Link>
								</li>
							</ul>
						</details>
					</li>

					<li>
						<Link
							onClick={scrollToTop}
							to="/contacto"
							className="flex items-center gap-3.5 xl:gap-4 rounded-[4px] px-3 xl:px-4 py-2 xl:py-2.5 text-xs font-semibold text-slate-500 hover:bg-[#024ad8] hover:text-white transition-all duration-300 group relative overflow-hidden">
							<BsFillChatRightTextFill className="text-lg xl:text-xl group-hover:scale-110 transition-transform shrink-0" />
							<span>Contacto</span>
							<div className="absolute left-0 top-0 h-full w-1 bg-[#024ad8] opacity-0 group-hover:opacity-100 transition-opacity"></div>
						</Link>
					</li>
				</ul>
			<Footer />
		</aside>
	);
}
