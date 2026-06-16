import { useTheme } from "../context/ThemeContext";
import { WithClose } from "./WithClose";
import { useNavigate } from "react-router-dom";
import { LogoCelular } from "./LogoCelular";
import { BlurVideo } from "./BlurVideo/BlurVideo";
import { PremiumFooter } from "./PremiumFooter";
import bidonesCorriendo from "../videos/bidonesCorriendo.mp4";
import heroMachine from "../img/machine_2_ps.jpg";
import maquina from "../img/machine_3_ps.jpg";
import pantalla from "../img/pantalla.jpg";
import { 
	FaCheckCircle, 
	FaWater, 
	FaWrench,
	FaFileInvoiceDollar 
} from "react-icons/fa";
import { BsBroadcast, BsLightningChargeFill } from "react-icons/bs";

export function Home() {
	const navigate = useNavigate();
	const { isDarkTheme } = useTheme();


	return (
		<>
			<section
				className={`rounded-[16px] w-full absolute top-0 flex flex-col justify-center items-center transition-colors duration-500 ${
					isDarkTheme ? "bg-[#1a1a1a]" : "bg-slate-50"
				}`}>
				<article className="rounded-[16px] xl:w-[calc(100%-350px)] lg:w-[calc(100%-320px)] lg:ml-[300px] sm:ml-0 mb-20 px-4 md:px-10 animate-hp-fade">
					<WithClose />

					{/* 1. HERO SECTION REDESIGNED TO 2 COLUMNS */}
					<div className="grid grid-cols-1 xl:grid-cols-12 gap-12 xl:gap-16 items-center min-h-[85vh] mb-28 md:mb-36">
						{/* Left Column: Text Content */}
						<div className="xl:col-span-6 flex flex-col items-start text-left w-full">
							<LogoCelular />
							
							<span className="hp-eyebrow hp-eyebrow-blue mb-6">
								Excelencia en Ingeniería
							</span>

							<h1 className={`text-3xl md:text-4xl xl:text-6xl font-extrabold tracking-tight mb-6 ${
								isDarkTheme ? "text-white" : "text-[#1a1a1a]"
							}`}>
								<span className="text-[#024ad8] block mb-2">Líderes en innovación y desarrollo:</span>
								<span className="text-2xl md:text-3xl xl:text-5xl">de máquinas lavadoras, enjuagadoras, llenadoras y tapadoras de bidones</span>
							</h1>

							<p className={`text-sm md:text-base xl:text-lg mb-8 leading-relaxed max-w-xl ${
								isDarkTheme ? "text-slate-400" : "text-slate-600"
							}`}>
								Nos especializamos en diseñar y fabricar maquinaria de última generación para la industria del agua, adaptándonos a las necesidades específicas de cada cliente.
							</p>

							<div className="flex flex-wrap gap-4">
								<button
									onClick={() => navigate("/contacto#form")}
									className="hp-btn-primary !px-8 !py-4 shadow-xl shadow-blue-500/20 hover:shadow-blue-500/40 transition-all flex items-center gap-2">
									<FaFileInvoiceDollar size={16} /> Solicitar Presupuesto
								</button>
								<button
									onClick={() => navigate("/nosotros")}
									className="hp-btn-outline !px-8 !py-4 transition-all">
									Conócenos
								</button>
							</div>
						</div>

						{/* Right Column: Image with Floating Stats Card */}
						<div className="xl:col-span-6 relative rounded-[16px] group xl:mx-0 w-full">
							<img 
								src={heroMachine} 
								alt="Líderes en innovación y desarrollo de envasadoras" 
								className="w-full aspect-video object-cover rounded-[16px] shadow-2xl min-h-[65vh]"
							/>
							{/* Floating Stats Card */}
							<div>
								{/* Stats Row */}
							<div className={`absolute grid grid-cols-3 items-center !border-t-2 !border-t-[#024ad8] -bottom-12 left-6 right-6 p-4 md:p-8 rounded-[16px] border shadow-2xl backdrop-blur-md transition-colors duration-500 ${
										isDarkTheme 
										? "bg-zinc-900 border-[#333]" 
										: "bg-white border-slate-100"
									}`}>
									<div className="flex flex-col items-center text-center">
										<span className="text-2xl md:text-3xl font-black text-[#024ad8]">+30</span>
										<span className={`text-[8px] md:text-[9px] font-bold tracking-wider uppercase mt-1 ${
											isDarkTheme ? "text-slate-300" : "text-slate-500"
										}`}>Años de Trayectoria</span>
									</div>
									<div className="border-l border-slate-200 dark:border-slate-700 flex flex-col items-center text-center px-1">
										<span className="text-2xl md:text-3xl font-black text-[#024ad8]">+600</span>
										<span className={`text-[8px] md:text-[9px] font-bold tracking-wider uppercase mt-1 ${
											isDarkTheme ? "text-slate-300" : "text-slate-500"
										}`}>Equipos Instalados</span>
									</div>
									<div className="border-l border-slate-200 dark:border-slate-700 flex flex-col items-center text-center px-1">
										<span className="text-2xl md:text-3xl font-black text-[#024ad8]">+400</span>
										<span className={`text-[8px] md:text-[9px] font-bold tracking-wider uppercase mt-1 ${
											isDarkTheme ? "text-slate-300" : "text-slate-500"
										}`}>Clientes Satisfechos</span>
									</div>
								</div>
							</div>
						</div>
					</div>

					{/* 2. PRECISION ENGINEERING SECTION */}
					<section className="grid grid-cols-1 xl:grid-cols-2 gap-16 md:gap-20 items-center mb-28 md:mb-36">
						{/* Left Column: Image with Floating Card */}
						<div className="relative rounded-[16px] group xl:mx-0 w-full">
							<img 
								src={maquina} 
								alt="Ingeniería de precisión en acero inoxidable" 
								className="w-full aspect-video object-cover rounded-[16px]"
							/>
							{/* Floating Quality Assurance Card */}
							<div className={`absolute !border-t-2 !border-t-[#024ad8] -bottom-12 left-6 right-6 p-4 md:p-8 rounded-[16px] border shadow-2xl flex gap-4 items-start backdrop-blur-md transition-colors duration-500 ${
								isDarkTheme 
									? "bg-zinc-900 border-[#333]" 
									: "bg-white border-slate-100"
							}`}>
								<FaCheckCircle className="text-[#024ad8] shrink-0 text-xl mt-0.5" />
								<div>
									<h4 className={`text-xs font-extrabold uppercase tracking-wider mb-1 ${isDarkTheme ? "text-white" : "text-[#1a1a1a]"}`}>
										Calidad Segura
									</h4>
									<p className={`text-xs leading-relaxed ${isDarkTheme ? "text-slate-400" : "text-slate-600"}`}>
										Nuestros sistemas garantizan una esterilización del 99.9% mediante tecnología de boquillas de alta presión.
									</p>
								</div>
							</div>
						</div>

						{/* Right Column: Info & Bullets */}
						<div className="flex flex-col">
							<span className="hp-eyebrow hp-eyebrow-blue mb-4 self-start">
								Innovación Técnica
							</span>
							<h2 className="hp-h2 mb-6 leading-tight">
								Excelencia en ingeniería de precisión
							</h2>
							<p className="hp-p mb-8 text-base md:text-lg">
								Nuestra misión es potenciar tu negocio con tecnología que optimiza tiempos y garantiza la máxima calidad en cada
								bidón.
							</p>
							
							<div className="space-y-6">
								{/* Bullet 1 */}
								<div className="flex gap-4 items-start">
									<div className={`p-3 rounded-[8px] flex items-center justify-center shrink-0 ${isDarkTheme ? "bg-zinc-900" : "bg-blue-50"}`}>
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
									<div className={`p-3 rounded-[8px] flex items-center justify-center shrink-0 ${isDarkTheme ? "bg-zinc-900" : "bg-blue-50"}`}>
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
					<section className="grid grid-cols-1 xl:grid-cols-2 gap-16 md:gap-20 items-center mb-28 md:mb-36">
						{/* Left Column: Text */}
						<div className="flex flex-col w-full">
							<span className="hp-eyebrow hp-eyebrow-blue mb-4 self-start">
								Tecnología en Movimiento
							</span>
							<h2 className="hp-h2 mb-6 leading-tight">
								Nuestras líneas en acción
							</h2>
							<p className="hp-p mb-0 text-base md:text-lg">
								Diseñamos sistemas que garantizan ciclos continuos de alta eficiencia. En este video puede observar el proceso automático de transporte y envasado de bidones en tiempo real, operando bajo las más estrictas normas de higiene.
							</p>
						</div>

						{/* Right Column: Video */}
						<div className="relative rounded-[16px] overflow-hidden group mx-auto xl:mx-0 w-full">
							<div className="">
								<BlurVideo
									video={bidonesCorriendo}
									urlYoutube="https://www.youtube.com/embed/KQ4Qwh-nuow?si=rFlpPyrepISuX-uY&autoplay=1&mute=0"
								/>
							</div>
						</div>
					</section>

					{/* 4. PRODUCT LINE CARDS SECTION (KEEPING ORIGINAL HOME INFORMATION) */}
					<section className="mb-28 md:mb-36 xl:mb-44">
						<div className="text-center max-w-2xl mx-auto mb-16">
							<span className="hp-eyebrow hp-eyebrow-blue mb-4">Nuestro Portafolio</span>
							<h2 className="hp-h2">Maquinaria de envasado</h2>
							<p className="hp-p-intro text-base md:text-lg">
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
									<div className="p-4 md:p-8 flex-grow">
										<h3 className={`text-xl font-bold mb-6 ${isDarkTheme ? "text-white" : "text-[#1a1a1a]"}`}>
											{card.title}
										</h3>
										<ul className="space-y-4">
											{card.features.map((feature, fIdx) => (
												<li
													key={fIdx}
													className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400 font-medium">
													<span className="text-[#024ad8] mt-1 shrink-0">•</span>
													<span>{feature}</span>
												</li>
											))}
										</ul>
									</div>
									<button
										onClick={() => navigate(card.path)}
										className="w-full bg-[#024ad8] hover:bg-[#0e3191] transition-all duration-100 text-white py-4 text-xs font-bold uppercase tracking-widest flex items-center justify-center gap-2 group-hover:gap-4">
										{card.buttonText} <span>→</span>
									</button>
								</div>
							))}
						</div>
					</section>

					{/* 5. SMART SOLUTIONS 4.0 SECTION */}
					<section className="grid grid-cols-1 xl:grid-cols-2 gap-16 md:gap-20 items-center mb-28 md:mb-36">
						{/* Left Column: Image with Floating Card */}
						<div className="relative rounded-[16px] group xl:mx-0 w-full">
							<img 
								src={pantalla} 
								alt="Interfaz de control de maquinaria" 
								className="w-full aspect-video object-cover rounded-[16px]"
							/>
							{/* Floating Control Interface Card */}
							<div className={`absolute !border-t-2 !border-t-[#024ad8] -bottom-12 left-6 right-6 p-4 md:p-8 rounded-[16px] border shadow-2xl flex gap-4 items-start backdrop-blur-md transition-colors duration-500 ${
								isDarkTheme 
									? "bg-zinc-900 border-[#333]" 
									: "bg-white border-slate-100"
							}`}>
								<FaCheckCircle className="text-[#024ad8] shrink-0 text-xl mt-0.5" />
								<div>
									<h4 className={`text-xs font-extrabold uppercase tracking-wider mb-1 ${isDarkTheme ? "text-white" : "text-[#1a1a1a]"}`}>
										Interfaz de Control Avanzada
									</h4>
									<p className={`text-xs leading-relaxed ${isDarkTheme ? "text-slate-400" : "text-slate-600"}`}>
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
											Algoritmos inteligentes de gestión de potencia que reducen el consumo eléctrico hasta en un 20%.
										</p>
										<span className="inline-block text-[9px] font-extrabold tracking-[0.15em] text-[#024ad8] uppercase mt-2">
											Tecnología en Avance
										</span>
									</div>
								</div>
							</div>
						</div>
					</section>

					{/* 6. TRUST / SOCIAL PROOF BAND */}
					<section className="w-full py-12 px-6 rounded-[16px] mb-20 md:mb-28 flex flex-col items-center justify-center bg-[#024ad8] dark:bg-[#0e3191] text-white shadow-lg">
						<span className="text-[9px] font-bold tracking-[0.25em] text-blue-200/80 mb-6 uppercase">
							Confían en Nosotros
						</span>
						<div className="flex flex-wrap items-center justify-center gap-8 md:gap-16 text-lg md:text-3xl font-black tracking-widest text-white/50 select-none">
							<span className="hover:text-white/80 transition-colors duration-300">GLOBEX</span>
							<span className="hover:text-white/80 transition-colors duration-300">INITECH</span>
							<span className="hover:text-white/80 transition-colors duration-300">SYNDICATE</span>
							<span className="hover:text-white/80 transition-colors duration-300">UMBRELLA</span>
							<span className="hover:text-white/80 transition-colors duration-300">CYBERDYNE</span>
						</div>
					</section>

					{/* 7. PREMIUM SITE FOOTER */}
					<PremiumFooter />
				</article>
			</section>
		</>
	);
}

