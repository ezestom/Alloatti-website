import { useTheme } from "../context/ThemeContext";
import { WithClose } from "./WithClose";
import { useNavigate } from "react-router-dom";
import { LogoCelular } from "./LogoCelular";
import { BlurVideo } from "./BlurVideo/BlurVideo";
import { Data } from "./Data";
import bidonesCorriendo from "../videos/bidonesCorriendo.mp4";
import heroMachine from "../img/machine_2_ps.jpg";

export function Home() {
	const navigate = useNavigate();
	const { isDarkTheme } = useTheme();

	return (
		<>
			<section
				className={`rounded-[16px] w-full absolute top-8 flex flex-col justify-center items-center px-1 transition-colors duration-500 ${
					isDarkTheme ? "bg-[#1a1a1a]" : "bg-white"
				}`}>
				<article className="rounded-[16px] xl:w-[calc(100%-350px)] lg:w-[calc(100%-320px)] lg:ml-[300px] sm:ml-0 mb-20 px-4 md:px-10 animate-hp-fade">
					<WithClose />

					{/* HP Hero Section with Premium Background */}
					<div className="hp-chevron-container mb-24 rounded-[16px] overflow-visible">
						<div className="hidden xl:block hp-chevron hp-chevron-left"></div>
						<div className="hidden xl:block hp-chevron hp-chevron-right"></div>

						<div
							className={`relative z-10 flex flex-col px-6 py-16 md:px-16 md:py-52 border rounded-[16px] overflow-hidden transition-all duration-500 shadow-2xl group ${isDarkTheme ? "border-[#2a2a2a]" : "border-[#e8e8e8]"}`}
							style={{
								backgroundImage: `url(${heroMachine})`,
								backgroundSize: "cover",
								backgroundPosition: "center",
							}}>
							{/* Premium Overlay: Darker in Dark Theme, Glass-Gradient in Light Theme */}
							<div
								className={`absolute inset-0 z-0 transition-opacity duration-500 ${
									isDarkTheme
										? "bg-slate-950/80"
										: "bg-white/25 bg-gradient-to-r from-white via-white/75 to-transparent"
								}`}></div>

							<div className="relative z-10">
								<LogoCelular />

								<h1
									className={`${
										isDarkTheme
											? "text-white"
											: "text-[#1a1a1a]"
									} text-2xl md:text-4xl xl:text-5xl font-black tracking-normal mb-8 hp-text-glow !leading-[1.1]`}>
									Líderes en innovación de{" "}
									<span className="text-[#024ad8]">
										máquinas lavadoras, enjuagadoras,
										llenadoras y tapadoras
									</span>{" "}
									de bidones
								</h1>

								<p className="hp-p-intro">
									En Alloatti, nos especializamos en diseñar y
									fabricar maquinaria de última generación
									para la industria del agua, adaptándonos a
									las necesidades específicas de cada cliente.
								</p>

								<div className="flex flex-wrap gap-6">
									<button
										onClick={() => navigate("/contacto")}
										className="hp-btn-primary !px-10 !py-4 shadow-xl shadow-blue-500/20 hover:shadow-blue-500/40  transition-all">
										Solicitar Presupuesto
									</button>
									<button
										onClick={() => navigate("/nosotros")}
										className="hp-btn-outline !px-10 !py-4 hover:bg-slate-900 hover:text-white transition-all backdrop-blur-md">
										Conócenos
									</button>
								</div>
							</div>
						</div>
					</div>

					{/* Social Proof Stats Integrated */}
					<Data />

					{/* Section 2: Solutions */}
					<div
						className={`hp-section-cloud py-24 px-6 md:px-10 rounded-[16px] mb-20 shadow-sm border ${isDarkTheme ? "border-[#2a2a2a]" : "border-[#e8e8e8]"}`}>
						<div className="max-w-screen-xl mx-auto ">
							<div className="flex flex-col xl:flex-row justify-between items-center gap-16">
								<div className="xl:w-1/2">
									<span className="bg-blue-100 dark:bg-blue-900/30 text-[#024ad8] dark:text-blue-400 text-[10px] font-bold uppercase tracking-[0.2em] px-4 py-1.5 rounded-full mb-6 inline-block">
										Innovación constante
									</span>
									<h2 className="hp-h2 mb-8 leading-tight">
										Ofrecemos soluciones personalizadas
									</h2>
									<p className="hp-p-intro mb-10 text-pretty">
										En Alloatti, nos especializamos en
										diseñar y fabricar maquinaria de última
										generación para la industria del agua,
										adaptándonos a las necesidades
										específicas de cada cliente.
									</p>
									<p
										className={`hp-p-intro border-l-4 pl-8 mb-10 italic ${isDarkTheme ? "border-[#2a2a2a]" : "border-[#e8e8e8]"}`}>
										Nuestra misión es potenciar tu negocio
										con tecnología que optimiza tiempos y
										garantiza la máxima calidad en cada
										bidón.
									</p>
									<button
										onClick={() =>
											navigate(
												"/maquina-para-bidones-retornables",
											)
										}
										className="hp-btn-primary">
										Ver Productos
									</button>
								</div>
								<div className="xl:w-1/2 w-full">
									<div>
										<BlurVideo
											video={bidonesCorriendo}
											urlYoutube="https://www.youtube.com/embed/KQ4Qwh-nuow?si=rFlpPyrepISuX-uY&autoplay=1&mute=0"
										/>
									</div>
								</div>
							</div>
						</div>
					</div>

					{/* Section 3: Product Feature Cards */}
					<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 mb-20">
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
									"Registro de producción y saneado",
									"Diagnóstico inteligente de eventuales fallas",
								],
							},
							{
								title: "Bidones Descartables",
								path: "/maquina-para-bidones-descartables",
								buttonText: "Ver Líneas Descartables",
								features: [
									"Tiempo de lavado ajustable",
									"Picos de enjuague interior",
									"Colocador automático de manijas",
									"Colocador automático de tapas a rosca",
									"Roscador automático",
									"Pantalla táctil para operación y control",
									"Diagnóstico inteligente de eventuales fallas",
								],
							},
							{
								title: "Accesorios",
								path: "/accesorios-para-maquinas",
								buttonText: "Ver Accesorios y Automatización",
								features: [
									"Conectividad a internet",
									"Pantalla táctil para operación y control + App móvil",
									"Sacatapas automático y sacatapas manual",
									"Alimentador automático para 500 tapas",
									"Cargador automático de bidones vacíos",
									"Cargador automático de bidones en racks",
									"Lavadora con cepillos automática",
								],
							},
						].map((card, idx) => (
							<div
								key={idx}
								className="hp-card flex flex-col p-0 overflow-hidden transition-all duration-500 group">
								<div className="p-8 flex-1">
									<div className="hp-eyebrow hp-eyebrow-blue mb-6">
										{card.title}
									</div>
									<ul className="space-y-4">
										{card.features.map((feature, fIdx) => (
											<li
												key={fIdx}
												className="flex items-start gap-3 text-sm text-slate-600 dark:text-slate-400 font-medium">
												<span className="text-[#024ad8] mt-1">
													•
												</span>
												{feature}
											</li>
										))}
									</ul>
								</div>
								<button
									onClick={() => navigate(card.path)}
									className="w-full bg-[#024ad8] hover:bg-[#0e3191] text-white py-4 text-sm font-bold uppercase tracking-widest transition-colors flex items-center justify-center gap-2 group-hover:gap-4">
									{card.buttonText} <span>→</span>
								</button>
							</div>
						))}
					</div>
				</article>
			</section>
		</>
	);
}
