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
	
	const isMachinesOpen = [
		"/maquina-para-bidones-retornables",
		"/maquina-para-bidones-descartables",
		"/accesorios-para-maquinas"
	].includes(location.pathname);

	const isSalesOpen = [
		"/normas-de-calidad",
		"/ultimas-noticias"
	].includes(location.pathname);

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	};
	return (
		<div
			className={`z-20 px-6 fixed min-h-screen w-full max-w-[280px] border-r transition-all duration-500 flex flex-col ${
				isDarkTheme ? "bg-[#1a1a1a] border-slate-800 text-white" : "bg-white border-gray-100 text-[#1a1a1a]"
			} overflow-y-auto scrollbar-hide`}>
			
			<div className="pt-10 pb-6 flex justify-between items-center">
				<Link to="/" onClick={scrollToTop} className="block w-full">
					<img
						src={isDarkTheme ? LogoDark : LogoLigth}
						alt="Alloatti Logo"
						className="w-auto h-16 mx-auto hover:opacity-80 transition-opacity duration-300"
					/>
				</Link>
			</div>

				<ul className="flex-grow space-y-1">
					<li>
						<Link
							onClick={scrollToTop}
							to="/"
							className="flex items-center justify-start gap-4 rounded-[4px] px-4 py-3 text-sm font-semibold transition-all duration-300 hover:bg-[#024ad8] hover:text-white group relative overflow-hidden">
							<AiFillHome className="text-xl group-hover:scale-110 transition-transform" />
							<span>Inicio</span>
							<div className="absolute left-0 top-0 h-full w-1 bg-[#024ad8] opacity-0 group-hover:opacity-100 transition-opacity"></div>
						</Link>
					</li>

					<li>
						<details 
							open={isMachinesOpen}
							className="group [&_summary::-webkit-details-marker]:hidden">
							<summary className="flex cursor-pointer items-center justify-between rounded-[4px] px-4 py-3 text-slate-500 transition-all duration-300 hover:bg-[#024ad8] hover:text-white group relative overflow-hidden">
								<span className="flex items-center gap-4 text-sm font-semibold">
									<GiFactory className="text-xl group-hover:scale-110 transition-transform" />
									<span>Máquinas</span>
								</span>
								<FaChevronDown className="shrink-0 text-xs transition duration-300 group-open:-rotate-180" />
								<div className="absolute left-0 top-0 h-full w-1 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
							</summary>

							<ul className="mt-2 space-y-1 pl-8">
								<li>
									<Link
										onClick={scrollToTop}
										to="/maquina-para-bidones-retornables"
										className="block rounded-[4px] px-4 py-2 text-xs font-medium text-slate-500 hover:text-[#024ad8] transition-colors border-l border-slate-100 dark:border-slate-800">
										Bidones Retornables
									</Link>
								</li>
								<li>
									<Link
										onClick={scrollToTop}
										to="/maquina-para-bidones-descartables"
										className="block rounded-[4px] px-4 py-2 text-xs font-medium text-slate-500 hover:text-[#024ad8] transition-colors border-l border-slate-100 dark:border-slate-800">
										Bidones Descartables
									</Link>
								</li>
								<li>
									<Link
										onClick={scrollToTop}
										to="/accesorios-para-maquinas"
										className="block rounded-[4px] px-4 py-2 text-xs font-medium text-slate-500 hover:text-[#024ad8] transition-colors border-l border-slate-100 dark:border-slate-800">
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
							className="flex items-center gap-4 rounded-[4px] px-4 py-3 text-sm font-semibold text-slate-500 hover:bg-[#024ad8] hover:text-white transition-all duration-300 group relative overflow-hidden">
							<BsBriefcaseFill className="text-xl group-hover:scale-110 transition-transform" />
							<span>Nosotros</span>
							<div className="absolute left-0 top-0 h-full w-1 bg-[#024ad8] opacity-0 group-hover:opacity-100 transition-opacity"></div>
						</Link>
					</li>

					<li>
						<Link
							onClick={scrollToTop}
							to="/preguntas-frecuentes"
							className="flex items-center gap-4 rounded-[4px] px-4 py-3 text-sm font-semibold text-slate-500 hover:bg-[#024ad8] hover:text-white transition-all duration-300 group relative overflow-hidden">
							<BsFillQuestionSquareFill className="text-xl group-hover:scale-110 transition-transform" />
							<span>FAQ</span>
							<div className="absolute left-0 top-0 h-full w-1 bg-[#024ad8] opacity-0 group-hover:opacity-100 transition-opacity"></div>
						</Link>
					</li>

					<li>
						<details 
							open={isSalesOpen}
							className="group [&_summary::-webkit-details-marker]:hidden">
							<summary className="flex cursor-pointer items-center justify-between rounded-[4px] px-4 py-3 text-slate-500 transition-all duration-300 hover:bg-[#024ad8] hover:text-white group relative overflow-hidden">
								<span className="flex items-center gap-4 text-sm font-semibold">
									<GiNetworkBars className="text-xl group-hover:scale-110 transition-transform" />
									<span>Ventas</span>
								</span>
								<FaChevronDown className="shrink-0 text-xs transition duration-300 group-open:-rotate-180" />
								<div className="absolute left-0 top-0 h-full w-1 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
							</summary>

							<ul className="mt-2 space-y-1 pl-8">
								<li>
									<Link
										onClick={scrollToTop}
										to="/normas-de-calidad"
										className="block rounded-[4px] px-4 py-2 text-xs font-medium text-slate-500 hover:text-[#024ad8] transition-colors border-l border-slate-100 dark:border-slate-800">
										Normas de Calidad
									</Link>
								</li>
								<li>
									<Link
										onClick={scrollToTop}
										to="/ultimas-noticias"
										className="block rounded-[4px] px-4 py-2 text-xs font-medium text-slate-500 hover:text-[#024ad8] transition-colors border-l border-slate-100 dark:border-slate-800">
										Últimas Noticias
									</Link>
								</li>
							</ul>
						</details>
					</li>

					<li>
						<Link
							onClick={scrollToTop}
							to="/contacto"
							className="flex items-center gap-4 rounded-[4px] px-4 py-3 text-sm font-semibold text-slate-500 hover:bg-[#024ad8] hover:text-white transition-all duration-300 group relative overflow-hidden">
							<BsFillChatRightTextFill className="text-xl group-hover:scale-110 transition-transform" />
							<span>Contacto</span>
							<div className="absolute left-0 top-0 h-full w-1 bg-[#024ad8] opacity-0 group-hover:opacity-100 transition-opacity"></div>
						</Link>
					</li>
				</ul>
			<Footer />
		</div>
	);
}
