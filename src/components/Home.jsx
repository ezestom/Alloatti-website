import { useState } from "react";
import { useTheme } from "../context/ThemeContext";
import { WithClose } from "./WithClose";
import { useNavigate } from "react-router-dom";
import { LogoCelular } from "./LogoCelular";
import { BlurVideo } from "./BlurVideo/BlurVideo";
import { WelcomeVideoModal } from "./WelcomeVideoModal";
import { PremiumFooter } from "./PremiumFooter";
import { GridPattern } from "./GridPattern";
import { CardAccesories } from "./CardAccesories";
import { accesorios } from "../machines_info/accesorios";
import paletizadoraImg from "../img/accesories/paletizadora_op.jpg";
import cintaCargaCamionImg from "../img/accesories/cinta_carga_camion_op.jpg";
import bidonesCorriendo from "../videos/bidonesCorriendo.mp4";
import heroMachine from "../img/machine_2_ps.jpg";
import maquina from "../img/machine_3_ps.jpg";
import pantalla from "../img/pantalla.jpg";
import { 
	FaCheckCircle, 
	FaWater, 
	FaWrench, 
	FaFileInvoiceDollar, 
	FaBoxes, 
	FaLayerGroup, 
	FaLock,
	FaCogs
} from "react-icons/fa";
import { BsBroadcast, BsLightningChargeFill } from "react-icons/bs";

export function Home() {
	const navigate = useNavigate();
	const { isDarkTheme } = useTheme();
	const [selectedAccesory, setSelectedAccesory] = useState(null);

	const paletizadorItem = accesorios.sectionData10[0];
	const enrackadorItem = accesorios.sectionData11[0];
	const detectorItem = accesorios.sectionData12[0];

	const latestDevelopments = [
		{
			...paletizadorItem,
			id: 1,
			badge: "Fin de Línea",
			img: paletizadoraImg,
			isComingSoon: false,
		},
		{
			...enrackadorItem,
			id: 2,
			badge: "Próximamente",
			img: cintaCargaCamionImg,
			isComingSoon: true,
		},
		{
			...detectorItem,
			id: 3,
			badge: "Próximamente",
			img: paletizadoraImg,
			isComingSoon: true,
		},
	];

	return (
		<>
			<WelcomeVideoModal />
			<section
				className={`rounded-[16px] w-full absolute top-0 flex flex-col justify-center items-center transition-colors duration-500 ${
					isDarkTheme ? "bg-[#1a1a1a]" : "bg-slate-50"
				}`}>
				<article className="rounded-[16px] w-full max-w-7xl lg:pl-[290px] px-2 mb-20 animate-hp-fade">
					<WithClose />

					{/* 1. HERO SECTION REDESIGNED TO 2 COLUMNS */}
					<div className="grid grid-cols-1 xl:grid-cols-12 gap-8 items-center min-h-[60vh] xl:min-h-[72vh] mb-16 md:mb-20 xl:mb-24">
						{/* Left Column: Text Content */}
						<div className="xl:col-span-6 flex flex-col items-start text-left w-full gap-2 lg:gap-3 xl:gap-4">
							<LogoCelular />
							
							<span className="hp-eyebrow hp-eyebrow-blue">
								Excelencia en Ingeniería
							</span>

							<h1 className={`text-2xl sm:text-3xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-semibold tracking-tight ${
								isDarkTheme ? "text-white" : "text-[#1a1a1a]"
							}`}>
								<span className="text-[#024ad8] block pb-2 font-bold">Líderes en innovación y desarrollo:</span>
								<span className="text-xl sm:text-2xl lg:text-2xl xl:text-3xl 2xl:text-4xl">de máquinas lavadoras, enjuagadoras, llenadoras y tapadoras de bidones</span>
							</h1>

							<p className={`text-xs sm:text-sm md:text-base xl:text-lg mb-4 xl:mb-6 leading-relaxed max-w-xl ${
								isDarkTheme ? "text-slate-400" : "text-slate-600"
							}`}>
								Nos especializamos en diseñar y fabricar maquinaria de última generación para la industria del agua, adaptándonos a las necesidades específicas de cada cliente.
							</p>

							<div className="flex flex-wrap gap-3 xl:gap-4">
								<button
									onClick={() => navigate("/contacto#form")}
									className="hp-btn-primary !px-5 !py-2.5 xl:!px-7 xl:!py-3.5 shadow-xl shadow-blue-500/20 hover:shadow-blue-500/40 transition-all flex items-center gap-2">
									<FaFileInvoiceDollar size={16} /> Solicitar Presupuesto
								</button>
								<button
									onClick={() => navigate("/nosotros")}
									className="hp-btn-outline !px-5 !py-2.5 xl:!px-7 xl:!py-3.5 transition-all">
									Conócenos
								</button>
							</div>
						</div>

						{/* Right Column: Image with Floating Stats Card */}
						<div className="xl:col-span-6 relative rounded-[16px] group xl:mx-0 w-full">
							<img 
								src={heroMachine} 
								alt="Líderes en innovación y desarrollo de envasadoras" 
								className="w-full aspect-video object-cover rounded-[16px] shadow-2xl lg:min-h-[36vh] xl:min-h-[46vh] min-h-[28vh]"
							/>
							{/* Floating Stats Card */}
							<div>
								{/* Stats Row */}
								<div className={`absolute grid grid-cols-3 items-center !border-t-2 !border-t-[#024ad8] -bottom-8 sm:-bottom-16 left-4 right-4 sm:left-6 sm:right-6 p-2.5 sm:p-4 rounded-[16px] border shadow-2xl backdrop-blur-md transition-colors duration-500 overflow-hidden ${
										isDarkTheme 
										? "bg-zinc-900 border-[#333]" 
										: "bg-white border-slate-100"
									}`}>
									<GridPattern />
									<div className="relative z-10 flex flex-col items-center text-center">
										<span className="text-xl sm:text-2xl md:text-2xl font-semibold text-[#024ad8]">+30</span>
										<span className={`text-[7px] sm:text-[8px] md:text-xxs font-bold tracking-wider uppercase mt-1 ${
											isDarkTheme ? "text-slate-300" : "text-slate-500"
										}`}>Años de Trayectoria</span>
									</div>
									<div className="relative z-10 border-l border-slate-200 dark:border-slate-700 flex flex-col items-center text-center px-1">
										<span className="text-xl sm:text-2xl md:text-2xl font-bold text-[#024ad8]">+600</span>
										<span className={`text-[7px] sm:text-[8px] md:text-xxs font-bold tracking-wider uppercase mt-1 ${
											isDarkTheme ? "text-slate-300" : "text-slate-500"
										}`}>Equipos Instalados</span>
									</div>
									<div className="relative z-10 border-l border-slate-200 dark:border-slate-700 flex flex-col items-center text-center px-1">
										<span className="text-xl sm:text-2xl md:text-2xl font-bold text-[#024ad8]">+400</span>
										<span className={`text-[7px] sm:text-[8px] md:text-xxs font-bold tracking-wider uppercase mt-1 ${
											isDarkTheme ? "text-slate-300" : "text-slate-500"
										}`}>Clientes Satisfechos</span>
									</div>
								</div>
							</div>
						</div>
					</div>

					{/* 2 & 3. COMBINED PRECISION ENGINEERING & TECHNOLOGY IN MOTION */}
					<div className={`relative rounded-3xl border overflow-hidden p-4 sm:p-6 md:p-7 xl:p-8 mb-16 md:mb-20 transition-colors duration-500 ${
						isDarkTheme 
							? "bg-[#292929] border-[#2a2a2a] shadow-[0_4px_25px_rgba(0,0,0,0.25)]" 
							: "bg-white border-[#e8e8e8] shadow-[0_4px_25px_rgba(0,0,0,0.04)]"
					}`}>
						<GridPattern />
						{/* Sections Content */}
						<div className="relative z-10 flex flex-col">
							{/* 2. PRECISION ENGINEERING SECTION */}
							<section className="grid grid-cols-1 xl:grid-cols-2 gap-8 items-center mb-16 md:mb-20">
								{/* Left Column: Image with Floating Card */}
								<div className="relative rounded-[16px] group xl:mx-0 w-full">
									<img 
										src={maquina} 
										alt="Ingeniería de precisión en acero inoxidable" 
										className="w-full h-[240px] sm:h-[280px] xl:h-[340px] object-cover rounded-[16px]"
									/>
									{/* Floating Quality Assurance Card */}
									<div className={`absolute !border-t-2 !border-t-[#024ad8] lg:-bottom-16 -bottom-8 left-4 right-4 sm:left-6 sm:right-6 p-2.5 sm:p-4 rounded-[14px] border shadow-2xl flex gap-3 items-start transition-colors duration-500 z-10 overflow-hidden ${
										isDarkTheme 
											? "bg-[#1f1f1f] border-[#383838]" 
											: "bg-white border-slate-200/80 shadow-slate-200/60"
									}`}>
										<GridPattern />
										<FaCheckCircle className="text-[#024ad8] shrink-0 text-base sm:text-lg mt-0.5 relative z-10" />
										<div className="relative z-10">
											<h4 className={`text-xs font-extrabold uppercase tracking-wider mb-0.5 ${isDarkTheme ? "text-white" : "text-[#1a1a1a]"}`}>
												Calidad Segura
											</h4>
											<p className={`text-[11px] sm:text-xs leading-relaxed ${isDarkTheme ? "text-slate-400" : "text-slate-600"}`}>
												Nuestros sistemas garantizan una esterilización del 99.9% mediante tecnología de boquillas de alta presión.
											</p>
										</div>
									</div>
								</div>

								{/* Right Column: Info & Bullets */}
								<div className="flex flex-col">
									<span className="hp-eyebrow hp-eyebrow-blue mb-3 self-start">
										Innovación Técnica
									</span>
									<h2 className="hp-h2 mb-4 leading-tight">
										Excelencia en ingeniería de precisión
									</h2>
									<p className="hp-p mb-6 text-sm md:text-base">
										Nuestra misión es potenciar tu negocio con tecnología que optimiza tiempos y garantiza la máxima calidad en cada
										bidón.
									</p>
									
									<div className="space-y-4 sm:space-y-5">
										{/* Bullet 1 */}
										<div className="flex gap-4 items-start">
											<div className={`p-3 rounded-[8px] flex items-center justify-center shrink-0 ${isDarkTheme ? "bg-[#1f1f1f] border border-[#383838]" : "bg-blue-50"}`}>
												<FaWater className="text-[#024ad8] text-lg" />
											</div>
											<div>
												<h3 className={`text-sm font-bold uppercase tracking-wider mb-1 ${isDarkTheme ? "text-white" : "text-[#1a1a1a]"}`}>
													Optimización Hídrica
												</h3>
												<p className={`text-xs leading-relaxed ${isDarkTheme ? "text-slate-400" : "text-slate-600"}`}>
													Reducción del 35% en el consumo de agua por ciclo de lavado con estándares industriales.
												</p>
											</div>
										</div>

										{/* Bullet 2 */}
										<div className="flex gap-4 items-start">
											<div className={`p-3 rounded-[8px] flex items-center justify-center shrink-0 ${isDarkTheme ? "bg-[#1f1f1f] border border-[#383838]" : "bg-blue-50"}`}>
												<FaWrench className="text-[#024ad8] text-lg" />
											</div>
											<div>
												<h3 className={`text-sm font-bold uppercase tracking-wider mb-1 ${isDarkTheme ? "text-white" : "text-[#1a1a1a]"}`}>
													Mecánica de Alta Fidelidad
												</h3>
												<p className={`text-xs leading-relaxed ${isDarkTheme ? "text-slate-400" : "text-slate-600"}`}>
													Componentes robóticos de fácil mantenimiento diseñados para durar décadas.
												</p>
											</div>
										</div>
									</div>
								</div>
							</section>

							{/* 3. TECHNOLOGY IN MOTION (VIDEO SECTION) */}
							<section className="grid grid-cols-1 xl:grid-cols-2 gap-10 md:gap-14 items-center mb-12 lg:mb-16">
								{/* Left Column: Text */}
								<div className="flex flex-col w-full">
									<span className="hp-eyebrow hp-eyebrow-blue mb-3 self-start">
										Tecnología en Movimiento
									</span>
									<h2 className="hp-h2 mb-4 leading-tight">
										Nuestras líneas en acción
									</h2>
									<p className="hp-p mb-0 text-sm md:text-base">
										Diseñamos sistemas que garantizan ciclos continuos de alta eficiencia. En este video puede observar el proceso automático de transporte y envasado de bidones en tiempo real, operando bajo las más estrictas normas de higiene.
									</p>
								</div>

								{/* Right Column: Video */}
								<div className="relative group mx-auto xl:mx-0 w-full">
									<div className="rounded-[16px] overflow-hidden">
										<BlurVideo
											video={bidonesCorriendo}
											urlYoutube="https://www.youtube.com/embed/vLdxcTmlY18?si=jsS8PxyHdDG5GYCz&autoplay=1&mute=0"
										/>
									</div>
									{/* Floating Video Info Card */}
									<div className={`absolute !border-t-2 !border-t-[#024ad8] lg:-bottom-16 -bottom-8 left-4 right-4 sm:left-6 sm:right-6 p-2.5 sm:p-4 rounded-[14px] border shadow-2xl flex gap-3 items-start transition-colors duration-500 z-10 overflow-hidden ${
										isDarkTheme 
											? "bg-[#1f1f1f] border-[#383838]" 
											: "bg-white border-slate-200/80 shadow-slate-200/60"
									}`}>
										<GridPattern />
										<FaCheckCircle className="text-[#024ad8] shrink-0 text-base sm:text-lg mt-0.5 relative z-10" />
										<div className="text-left relative z-10">
											<h4 className={`text-xs font-extrabold uppercase tracking-wider mb-0.5 ${isDarkTheme ? "text-white" : "text-[#1a1a1a]"}`}>
												Líneas de Producción en Vivo
											</h4>
											<p className={`text-[11px] sm:text-xs leading-relaxed ${isDarkTheme ? "text-slate-400" : "text-slate-600"}`}>
												Líneas con procesos automáticos continuos de lavado, llenado y tapado con estándares sanitarios certificados.
											</p>
										</div>
									</div>
								</div>
							</section>
						</div>
					</div>

					{/* 4. PRODUCT LINE CARDS SECTION (KEEPING ORIGINAL HOME INFORMATION) */}
					<section className="mb-16 md:mb-24 xl:mb-28">
						<div className="text-center max-w-2xl mx-auto mb-10 xl:mb-14">
							<span className="hp-eyebrow hp-eyebrow-blue mb-3">Nuestro Portafolio</span>
							<h2 className="hp-h2 mb-3">Maquinaria de envasado</h2>
							<p className="hp-p-intro text-sm sm:text-base md:text-lg mb-0">
								Soluciones de alto rendimiento adaptadas al volumen y tipo de envase de tu planta.
							</p>
						</div>

						<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
							{[
								{
									title: "Bidones Retornables",
									path: "/maquina-para-bidones-retornables",
									buttonText: "Ver Líneas Retornables",
									features: [
										"Tiempo en lavado: 120 segundos",
										"Picos de lavado exterior rotativos",
										"Puertas sin contacto con bidón",
										"Soportes abiertos para bidones",
										"Pantalla táctil para operación y control",
										"Proceso de saneado",
										"Diagnóstico inteligente de fallas en vivo",
									],
								},
								{
									title: "Bidones Descartables",
									path: "/maquina-para-bidones-descartables",
									buttonText: "Ver Líneas Descartables",
									features: [
										"Tiempo de lavado ajustable por ciclo",
										"Picos de enjuague interior de alta presión",
										"Colocador automático de manijas integrado",
										"Colocador automático de tapas a rosca",
										"Roscador neumático automático en línea",
										"Pantalla táctil para operación y control",
										"Diagnóstico inteligente de fallas en vivo",
									],
								},
								{
									title: "Accesorios",
									path: "/accesorios-para-maquinas",
									buttonText: "Ver Accesorios y Automatización",
									features: [
										"Conectividad a internet",
										"Pantalla táctil para operación y control + App móvil",
										"Sacatapas automático en línea y manual",
										"Alimentador automático para 500 tapas (Jirafa)",
										"Cargador automático de bidones vacíos",
										"Cargador automático de bidones en racks",
										"Prelavadoras externas e internas automáticas",
									],
								},
							].map((card, idx) => (
								<div
									key={idx}
									className="hp-card flex flex-col p-0 overflow-hidden transition-all duration-500 group">
									<div className="p-4 sm:p-5 xl:p-6 flex-grow">
										<h3 className={`text-base sm:text-lg xl:text-xl font-bold mb-3 sm:mb-4 ${isDarkTheme ? "text-white" : "text-[#1a1a1a]"}`}>
											{card.title}
										</h3>
										<ul className="space-y-2 sm:space-y-2.5">
											{card.features.map((feature, fIdx) => (
												<li
													key={fIdx}
													className="flex items-center gap-2 text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-medium">
													<span className="text-[#024ad8] mt-0.5 shrink-0">•</span>
													<span>{feature}</span>
												</li>
											))}
										</ul>
									</div>
									<button
										onClick={() => navigate(card.path)}
										className="w-full bg-[#024ad8] hover:bg-[#0e3191] transition-all duration-200 text-white py-3 px-2 sm:px-3 text-[10.5px] sm:text-[11px] xl:text-[11.5px] font-bold uppercase tracking-wider flex items-center justify-center gap-2 whitespace-nowrap min-h-[46px]">
										<span>{card.buttonText}</span>
										<span className="transition-transform duration-200 group-hover:translate-x-1.5 font-black">→</span>
									</button>
								</div>
							))}
						</div>
					</section>

					{/* 5. LATEST DEVELOPMENTS SECTION */}
					<section className={`relative rounded-3xl border overflow-hidden p-4 sm:p-5 xl:p-7 mb-14 md:mb-18 transition-colors duration-500 ${
						isDarkTheme 
							? "bg-[#292929] border-[#2a2a2a] shadow-[0_4px_25px_rgba(0,0,0,0.25)]" 
							: "bg-white border-[#e8e8e8] shadow-[0_4px_25px_rgba(0,0,0,0.04)]"
					}`}>
						<GridPattern />
						{/* Section Content */}
						<div className="relative z-10">
							{/* Top Header & Context */}
							<div className="flex flex-col xl:flex-row xl:items-end justify-between gap-6 sm:gap-8 mb-8 lg:mb-10">
								<div className="max-w-2xl text-left">
									<span className="hp-eyebrow hp-eyebrow-blue mb-3 sm:mb-4 self-start">
										Últimos Desarrollos
									</span>
									<h2 className="hp-h2 mb-3 sm:mb-4 leading-tight">
										Automatización y final de línea
									</h2>
									<p className={`text-base md:text-lg !my-0 leading-relaxed ${isDarkTheme ? "text-slate-400" : "text-slate-600 font-medium"}`}>
										Soluciones modulares diseñadas para agilizar el despacho y maximizar la autonomía operativa.
									</p>
								</div>

								{/* Interactive Accessories Showcase Hub */}
								<div 
									onClick={() => navigate("/accesorios-para-maquinas#accesorios")}
									role="button"
									tabIndex={0}
									onKeyDown={(e) => e.key === "Enter" && navigate("/accesorios-para-maquinas#accesorios")}
									className={`group cursor-pointer rounded-2xl border p-3.5 sm:p-4 transition-all duration-300 hover:-translate-y-1 flex items-center gap-3 sm:gap-4 text-left select-none w-full xl:w-auto xl:max-w-md shrink-0 shadow-sm relative overflow-hidden ${
										isDarkTheme 
											? "bg-[#1f1f1f] border-[#383838] hover:border-blue-500/50 hover:shadow-[0_12px_35px_rgba(2,74,216,0.25)]" 
											: "bg-slate-50 border-slate-200/90 hover:border-blue-500/40 hover:shadow-[0_12px_35px_rgba(2,74,216,0.12)] shadow-slate-200/50"
									}`}>
									<GridPattern />
									{/* Left Icon with subtle hover rotation */}
									<div className={`w-11 h-11 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center shrink-0 transition-transform duration-500 group-hover:rotate-45 shadow-sm relative z-10 ${
										isDarkTheme 
											? "bg-blue-600/20 text-blue-400 border border-blue-500/30 group-hover:bg-blue-600/30" 
											: "bg-blue-50 text-[#024ad8] border border-blue-200/60 group-hover:bg-blue-100/80"
									}`}>
										<FaCogs className="text-xl" />
									</div>

									{/* Center Context & Microcopy */}
									<div className="flex-1 min-w-0 pr-1 relative z-10">
										<div className="flex items-center gap-2 mb-1">
											<span className="inline-flex items-center gap-1.5 text-[9px] font-extrabold uppercase tracking-widest text-[#024ad8] dark:text-blue-400">
												<span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
												Catálogo Integral
											</span>
											<span className={`text-[9px] font-bold px-1.5 py-0.5 rounded-md border ${
												isDarkTheme 
													? "bg-zinc-800 border-zinc-700 text-slate-300" 
													: "bg-slate-200/70 border-slate-300/80 text-slate-700"
											}`}>
												+10 módulos
											</span>
										</div>
										<h4 className={`text-xs sm:text-sm font-extrabold tracking-tight transition-colors duration-200 group-hover:text-[#024ad8] truncate ${
											isDarkTheme ? "text-white" : "text-slate-900"
										}`}>
											Accesorios y Automatización
										</h4>
										<p className={`text-[11px] leading-tight truncate ${
											isDarkTheme ? "text-slate-400" : "text-slate-500 font-medium"
										}`}>
											Sacatapas, cintas, tolvas y periféricos
										</p>
									</div>

									{/* Right Action Button Pill */}
									<div className="shrink-0 flex items-center gap-1.5 bg-[#024ad8] text-white px-3 sm:px-3.5 py-2 sm:py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider shadow-md shadow-blue-600/25 group-hover:bg-[#0e3191] group-hover:shadow-blue-600/40 transition-all duration-300 relative z-10">
										<span className="hidden sm:inline">Ver todos <br /> los accesorios</span>
										<span className="sm:hidden font-bold">Catálogo</span>
										<span className="transition-transform duration-300 group-hover:translate-x-1 font-black">→</span>
									</div>
								</div>
							</div>

							{/* Highlights Features Grid */}
							<div className="grid grid-cols-1 sm:grid-cols-3 gap-3 lg:gap-3.5 xl:gap-6 mb-8 lg:mb-10 text-left">
								{/* Bullet 1 */}
								<div className={`p-3.5 sm:p-3 lg:p-3.5 xl:p-4 rounded-2xl border flex flex-row sm:flex-col xl:flex-row items-start gap-2.5 sm:gap-3 xl:gap-4 transition-all relative overflow-hidden ${
									isDarkTheme ? "bg-[#1f1f1f] border-[#383838] shadow-sm" : "bg-slate-50 border-slate-200/90 shadow-sm"
								}`}>
									<GridPattern />
									<div className={`p-2.5 sm:p-2.5 xl:p-3 rounded-xl flex items-center justify-center shrink-0 relative z-10 ${isDarkTheme ? "bg-[#292929] text-blue-400 border border-zinc-700/60" : "bg-blue-50 text-[#024ad8] border border-blue-100/80"}`}>
										<FaBoxes className="text-base sm:text-base xl:text-lg" />
									</div>
									<div className="w-full min-w-0 relative z-10">
										<h3 className={`text-xs sm:text-[11px] lg:text-xs xl:text-sm font-bold uppercase tracking-wider mb-1 leading-snug break-words ${isDarkTheme ? "text-white" : "text-slate-900"}`}>
											Paletizado y Enrackado
										</h3>
										<p className={`text-xs sm:text-[11px] lg:text-xs leading-relaxed font-medium ${isDarkTheme ? "text-slate-400" : "text-slate-600"}`}>
											Carga continua en piso o sobre vehículos de transporte hasta 4 niveles y 1200 bidones/hora.
										</p>
									</div>
								</div>

								{/* Bullet 2 */}
								<div className={`p-3.5 sm:p-3 lg:p-3.5 xl:p-4 rounded-2xl border flex flex-row sm:flex-col xl:flex-row items-start gap-2.5 sm:gap-3 xl:gap-4 transition-all relative overflow-hidden ${
									isDarkTheme ? "bg-[#1f1f1f] border-[#383838] shadow-sm" : "bg-slate-50 border-slate-200/90 shadow-sm"
								}`}>
									<GridPattern />
									<div className={`p-2.5 sm:p-2.5 xl:p-3 rounded-xl flex items-center justify-center shrink-0 relative z-10 ${isDarkTheme ? "bg-[#292929] text-blue-400 border border-zinc-700/60" : "bg-blue-50 text-[#024ad8] border border-blue-100/80"}`}>
										<FaLayerGroup className="text-base sm:text-base xl:text-lg" />
									</div>
									<div className="w-full min-w-0 relative z-10">
										<h3 className={`text-xs sm:text-[11px] lg:text-xs xl:text-sm font-bold uppercase tracking-wider mb-1 leading-snug break-words ${isDarkTheme ? "text-white" : "text-slate-900"}`}>
											Estructura Modular
										</h3>
										<p className={`text-xs sm:text-[11px] lg:text-xs leading-relaxed font-medium ${isDarkTheme ? "text-slate-400" : "text-slate-600"}`}>
											Construcción en acero inoxidable adaptable al layout y requerimientos específicos de tu planta.
										</p>
									</div>
								</div>

								{/* Bullet 3 */}
								<div className={`p-3.5 sm:p-3 lg:p-3.5 xl:p-4 rounded-2xl border flex flex-row sm:flex-col xl:flex-row items-start gap-2.5 sm:gap-3 xl:gap-4 transition-all relative overflow-hidden ${
									isDarkTheme ? "bg-[#1f1f1f] border-[#383838] shadow-sm" : "bg-slate-50 border-slate-200/90 shadow-sm"
								}`}>
									<GridPattern />
									<div className={`p-2.5 sm:p-2.5 xl:p-3 rounded-xl flex items-center justify-center shrink-0 relative z-10 ${isDarkTheme ? "bg-[#292929] text-blue-400 border border-zinc-700/60" : "bg-blue-50 text-[#024ad8] border border-blue-100/80"}`}>
										<BsLightningChargeFill className="text-base sm:text-base xl:text-lg" />
									</div>
									<div className="w-full min-w-0 relative z-10">
										<h3 className={`text-xs sm:text-[11px] lg:text-xs xl:text-sm font-bold uppercase tracking-wider mb-1 leading-snug break-words ${isDarkTheme ? "text-white" : "text-slate-900"}`}>
											Automatización PLC
										</h3>
										<p className={`text-xs sm:text-[11px] lg:text-xs leading-relaxed font-medium ${isDarkTheme ? "text-slate-400" : "text-slate-600"}`}>
											Ajuste de altura automático que agiliza el despacho y minimiza el esfuerzo físico de los operarios.
										</p>
									</div>
								</div>
							</div>

						{/* 3 Cards Grid */}
						<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
							{latestDevelopments.map((item, idx) => {
								if (item.isComingSoon) {
									return (
										<div
											key={idx}
											className={`w-full text-left rounded-3xl border-2 border-dashed transition-all duration-500 overflow-hidden relative flex flex-col h-full select-none ${
												isDarkTheme
													? "bg-[#1f1f1f] border-[#383838] text-slate-400"
													: "bg-slate-50 border-slate-200 text-slate-600 shadow-sm"
											}`}
										>
											<GridPattern />
											{/* Top Image Section with Blur */}
											<div className="w-full h-48 md:h-72 relative overflow-hidden bg-slate-200 dark:bg-slate-800">
												<img 
													src={item.img || paletizadoraImg} 
													alt={item.name}
													className="w-full h-full object-cover filter blur-[6px] grayscale scale-110 opacity-40"
												/>
												{/* Gradient and Darkening overlay */}
												<div className="absolute inset-0 bg-slate-950/50 backdrop-blur-[2px]"></div>
												
												{/* Category badge */}
												<div className="absolute top-3.5 left-3.5 z-10">
													<span className="inline-flex items-center gap-1.5 text-[9px] font-extrabold uppercase tracking-widest px-3 py-1 rounded-full backdrop-blur-md bg-amber-500/20 text-amber-300 border border-amber-500/30 shadow-sm">
														<span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse"></span>
														{item.badge}
													</span>
												</div>
												
												{/* Lock Icon floating */}
												<div className="absolute top-3.5 right-3.5 z-10 w-7 h-7 rounded-full bg-black/50 backdrop-blur-md flex items-center justify-center text-amber-300 border border-amber-500/30 shadow-sm text-xs">
													<FaLock />
												</div>
												
												{/* Center Teaser Stamp */}
												<div className="absolute inset-0 flex items-center justify-center z-10">
													<span className="px-4 py-1.5 rounded-xl bg-black/60 backdrop-blur-md border border-white/10 text-white text-[11px] font-extrabold uppercase tracking-wider shadow-lg">
														En Fase de Desarrollo
													</span>
												</div>

												{/* Characteristics tag */}
												{item.characteristics && (
													<div className="absolute bottom-3 left-3 right-3 z-10">
														<p className="text-[11px] font-bold text-slate-300 drop-shadow-md line-clamp-1">
															✨ {item.characteristics}
														</p>
													</div>
												)}
											</div>

											{/* Content Section */}
											<div className="p-4 md:p-5 flex flex-col flex-grow w-full z-10 relative">
												<div className="flex items-center gap-2 mb-2">
													<h3 className={`text-lg font-extrabold tracking-tight ${
														isDarkTheme ? "text-slate-200" : "text-slate-800"
													}`}>
														{item.name}
													</h3>
												</div>

												<p className={`text-xs line-clamp-3 font-medium leading-relaxed mb-5 ${
													isDarkTheme ? "text-slate-400" : "text-slate-500"
												}`}>
													{item.description}
												</p>

												{/* Disabled Button */}
												<div className="mt-auto pt-1">
													<div className={`flex items-center justify-center w-full gap-2 px-4 py-2.5 rounded-xl font-bold text-xs tracking-wide border cursor-not-allowed ${
														isDarkTheme
															? "bg-slate-800/40 border-slate-700/50 text-slate-500"
															: "bg-slate-100 border-slate-200 text-slate-400"
													}`}>
														<FaLock size={10} className="opacity-70" />
														<span>Próximamente disponible</span>
													</div>
												</div>
											</div>
										</div>
									);
								}

								return (
									<button
										key={idx}
										onClick={() => setSelectedAccesory(item)}
										className={`w-full text-left group rounded-3xl border transition-all duration-500 overflow-hidden relative flex flex-col h-full shadow-sm hover:-translate-y-1 ${
											isDarkTheme
												? "bg-[#1f1f1f] border-[#383838] hover:border-[#024ad8]/60 hover:shadow-[0_12px_40px_rgba(2,74,216,0.2)]"
												: "bg-slate-50 border-slate-200/90 hover:border-[#024ad8]/40 hover:shadow-[0_12px_40px_rgba(2,74,216,0.12)]"
										}`}
									>
										<GridPattern />
										{/* Top Image Section */}
										<div className="w-full h-48 md:h-72 relative overflow-hidden bg-slate-100 dark:bg-slate-800">
											<img 
												src={item.img || paletizadoraImg} 
												alt={item.name}
												className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
											/>
											{/* Gradient overlay */}
											<div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/10 to-slate-900/30 opacity-80 group-hover:opacity-90 transition-opacity duration-500"></div>
											
											{/* Category badge */}
											<div className="absolute top-3.5 left-3.5 z-10">
												<span className={`inline-flex items-center gap-1.5 text-[9px] font-extrabold uppercase tracking-widest px-3 py-1 rounded-full backdrop-blur-md border shadow-sm transition-colors duration-300 ${
													isDarkTheme
														? "bg-black/50 border-white/10 text-white group-hover:bg-[#024ad8]/80 group-hover:border-[#024ad8]"
														: "bg-white/95 border-slate-200/50 text-[#024ad8] group-hover:bg-[#024ad8] group-hover:text-white"
												}`}>
													<span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse"></span>
													{item.badge || "Fin de Línea"}
												</span>
											</div>
											
											{/* Icon floating */}
											<div className="absolute top-3.5 right-3.5 z-10 w-7 h-7 rounded-full bg-black/40 backdrop-blur-md flex items-center justify-center text-white border border-white/20 shadow-sm text-xs">
												<FaBoxes />
											</div>
											
											{/* Characteristics tag */}
											{item.characteristics && item.characteristics !== "-" && (
												<div className="absolute bottom-3 left-3 right-3 z-10">
													<p className="text-[11px] font-bold text-white/90 drop-shadow-md line-clamp-1">
														✨ {item.characteristics}
													</p>
												</div>
											)}
										</div>

										{/* Content Section */}
										<div className="p-4 md:p-5 flex flex-col flex-grow w-full z-10 bg-inherit relative">
											<h3 className={`text-lg font-extrabold tracking-tight mb-2 transition-colors duration-300 group-hover:text-[#024ad8] ${
												isDarkTheme ? "text-white" : "text-slate-900"
											}`}>
												{item.name}
											</h3>

											<p className={`text-xs line-clamp-3 font-medium leading-relaxed mb-5 ${
												isDarkTheme ? "text-slate-400" : "text-slate-500"
											}`}>
												{item.description}
											</p>

											{/* CTA Button */}
											<div className="mt-auto pt-1">
												<div className={`flex items-center justify-center w-full gap-2 px-4 py-2.5 rounded-xl font-bold text-xs tracking-wide transition-all duration-300 border ${
													isDarkTheme
														? "bg-slate-800/50 border-slate-700 text-white group-hover:bg-[#024ad8] group-hover:border-[#024ad8] group-hover:shadow-[0_0_20px_rgba(2,74,216,0.3)]"
														: "bg-slate-50 border-slate-200/80 text-slate-700 group-hover:bg-[#024ad8] group-hover:border-[#024ad8] group-hover:text-white group-hover:shadow-[0_8px_20px_rgba(2,74,216,0.25)]"
												}`}>
													<span>Ver información detallada</span>
													<span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
												</div>
											</div>
										</div>
									</button>
								);
							})}
						</div>
					</div>
				</section>

					{/* 6. SMART SOLUTIONS 4.0 SECTION */}
					<section className="grid grid-cols-1 xl:grid-cols-2 gap-8 items-center mb-16 md:mb-20">
						{/* Left Column: Image with Floating Card */}
						<div className="relative rounded-[16px] group xl:mx-0 w-full">
							<img 
								src={pantalla} 
								alt="Interfaz de control de maquinaria" 
								className="w-full h-[240px] sm:h-[280px] xl:h-[320px] object-cover rounded-[16px]"
							/>
							{/* Floating Control Interface Card */}
							<div className={`absolute !border-t-2 !border-t-[#024ad8] lg:-bottom-16 -bottom-8 left-4 right-4 sm:left-6 sm:right-6 p-2.5 sm:p-4 rounded-[14px] border shadow-2xl flex gap-3 items-start backdrop-blur-md transition-colors duration-500 z-10 overflow-hidden ${
								isDarkTheme 
									? "bg-zinc-900 border-[#333]" 
									: "bg-white border-slate-100"
							}`}>
								<GridPattern />
								<FaCheckCircle className="text-[#024ad8] shrink-0 text-base sm:text-lg mt-0.5 relative z-10" />
								<div className="relative z-10">
									<h4 className={`text-xs font-extrabold uppercase tracking-wider mb-0.5 ${isDarkTheme ? "text-white" : "text-[#1a1a1a]"}`}>
										Interfaz de Control Avanzada
									</h4>
									<p className={`text-[11px] sm:text-xs leading-relaxed ${isDarkTheme ? "text-slate-400" : "text-slate-600"}`}>
										Monitorización en tiempo real y diagnósticos predictivos que eliminan los tiempos de inactividad no planificados.
									</p>
								</div>
							</div>
						</div>

						{/* Right Column: Info & Bullets */}
						<div className="flex flex-col">
							<span className="hp-eyebrow hp-eyebrow-blue mb-4 self-start">
								Industria 4.0
							</span>
							<h2 className="hp-h2 mb-6 leading-tight">
								Soluciones inteligentes 4.0
							</h2>
							<p className="hp-p mb-8 text-base md:text-lg">
								Integración de pantalla PLC y manejo a través de app.
							</p>
							
							<div className="space-y-6">
								{/* Bullet 1 */}
								<div className="flex gap-4 items-start">
									<div className={`p-3 rounded-[8px] flex items-center justify-center shrink-0 ${isDarkTheme ? "bg-zinc-900" : "bg-blue-50"}`}>
										<BsBroadcast className="text-[#024ad8] text-lg" />
									</div>
									<div>
										<h3 className={`text-sm font-bold uppercase tracking-wider mb-1 ${isDarkTheme ? "text-white" : "text-[#1a1a1a]"}`}>
											Conectividad a través de internet
										</h3>
										<p className={`text-xs leading-relaxed ${isDarkTheme ? "text-slate-400" : "text-slate-600"}`}>
											Hacé el seguimiento de la producción desde tu celular.
										</p>
										<button 
											onClick={() => navigate("/accesorios-para-maquinas")}
											className="text-xs font-bold text-[#024ad8] hover:text-blue-700 transition-colors uppercase tracking-wider self-start flex items-center gap-1 mt-2">
											Ver Más <span className="transition-transform group-hover:translate-x-1">→</span>
										</button>
									</div>
								</div>

								{/* Bullet 2 */}
								<div className="flex gap-4 items-start">
									<div className={`p-3 rounded-[8px] flex items-center justify-center shrink-0 ${isDarkTheme ? "bg-zinc-900" : "bg-blue-50"}`}>
										<BsLightningChargeFill className="text-[#024ad8] text-lg" />
									</div>
									<div>
										<h3 className={`text-sm font-bold uppercase tracking-wider mb-1 ${isDarkTheme ? "text-white" : "text-[#1a1a1a]"}`}>
											Eficiencia Energética
										</h3>
										<p className={`text-xs leading-relaxed ${isDarkTheme ? "text-slate-400" : "text-slate-600"}`}>
											Algoritmos inteligentes de gestión de potencia que reducen el consumo eléctrico.
										</p>
										<span className="inline-block text-[9px] font-extrabold tracking-[0.15em] text-[#024ad8] uppercase mt-2">
											Tecnología en Avance
										</span>
									</div>
								</div>
							</div>
						</div>
					</section>


					{/* Modal for detail view */}
					{selectedAccesory && (
						<CardAccesories
							model={selectedAccesory.name}
							img={selectedAccesory.img || paletizadoraImg}
							characteristics={selectedAccesory.characteristics}
							description={selectedAccesory.description}
							link={selectedAccesory.link}
							onClose={() => setSelectedAccesory(null)}
						/>
					)}

					{/* 7. PREMIUM SITE FOOTER */}
					<PremiumFooter />
				</article>
			</section>
		</>
	);
}

