import { useEffect, useState } from "react";
import { useTheme } from "../context/ThemeContext";
import { SkeletonVideo } from "./VideoSkeleton";
import { WithClose } from "./WithClose";
import { Link, useNavigate } from "react-router-dom";
import logo from "../img/Alloatti-logo-dark.png";
import { LogoCelular } from "./LogoCelular";
import { BlurVideo } from "./BlurVideo/BlurVideo";
import bidonesCorriendo from "../videos/bidonesCorriendo.mp4";

export function Home() {
	const navigate = useNavigate();
	const { isDarkTheme } = useTheme();
	const [isLoading, setIsLoading] = useState(true);

	const handleClick = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	};

	useEffect(() => {
		setTimeout(() => {
			setIsLoading(false);
		}, 1000);
	}, []);
	return (
		<>
			<section
				className={`w-full absolute top-8 flex flex-col justify-center items-center px-1 transition-colors duration-500 ${
					isDarkTheme ? "bg-[#1a1a1a]" : "bg-white"
				}`}>
				<article className="lg:w-5/6 lg:ml-[300px] sm:ml-0 mb-48 animate-hp-fade">
					{/* HP Hero Section with Chevrons */}
					<WithClose />
					<div className="hp-chevron-container mb-20 rounded-[16px] overflow-visible">
						<div className="hidden lg:block hp-chevron hp-chevron-left"></div>
						<div className="hidden lg:block hp-chevron hp-chevron-right"></div>
						
						<div className={`relative z-10 flex-col px-8 py-16 md:px-20 md:py-24 border rounded-[16px] transition-all duration-500 ${
							isDarkTheme ? "bg-[#1a1a1a] border-slate-800" : "bg-white border-gray-100"
						}`}>
							<LogoCelular />

							<h1
								className={`${
									isDarkTheme ? "text-white" : "text-[#1a1a1a]"
								} text-5xl font-medium md:text-7xl tracking-tight leading-[1.0] mb-8`}>
								Líderes en innovación de{" "}
								<span className="text-[#024ad8]">
									{" "}
									máquinas lavadoras, enjuagadoras, llenadoras y
									tapadoras{" "}
								</span>{" "}
								de bidones
							</h1>

							<p className="hp-p-intro max-w-3xl mb-10">
								Elevando estándares, garantizando pureza: tu socio en
								transformación industrial. Con tecnología vanguardista y
								compromiso incansable.
							</p>

							<div className="flex gap-4">
								<button 
									onClick={() => navigate("/contacto")}
									className="hp-btn-primary">
									Solicitar Presupuesto
								</button>
								<button 
									onClick={() => navigate("/nosotros")}
									className="px-6 py-3 border border-[#1a1a1a] dark:border-gray-200 rounded-[4px] font-semibold text-sm uppercase tracking-wider hover:bg-white dark:hover:bg-slate-500 transition-colors">
									Conócenos
								</button>
							</div>
						</div>
					</div>

					{/* Section 2: Solutions */}
					<div className="hp-section-cloud py-20 px-6 rounded-[16px] mb-12">
						<div className="max-w-screen-xl mx-auto ">
							<div className="flex flex-col md:flex-row justify-between items-start gap-12">
								<div className="md:w-1/2">
									<span className="bg-blue-100 text-[#024ad8] text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-sm mb-4 inline-block">
										Innovación
									</span>
									<h2 className="hp-h2">
										Ofrecemos soluciones personalizadas para tus
										necesidades de producción
									</h2>
									<p className="hp-p text-lg">
										Alloatti SRL, líder con más de 30 años en
										maquinaria para bidones de agua. Innovamos
										con tecnología avanzada, ofreciendo
										soluciones personalizadas y calidad
										excepcional.
									</p>
								</div>

								<div className="md:w-1/2 w-full">
									{isLoading ? (
										<SkeletonVideo />
									) : (
										<div className="overflow-hidden">
											<BlurVideo
												video={bidonesCorriendo}
												urlYoutube="https://www.youtube.com/embed/KQ4Qwh-nuow?si=rFlpPyrepISuX-uY&autoplay=1&mute=0"
											/>
										</div>
									)}
								</div>
							</div>
							
							<div className="mt-12 text-center">
								<a
									href="https://www.youtube.com/@AlloattiSRL"
									rel="noopener noreferrer"
									target="_blank"
									className="hp-btn-primary inline-flex items-center gap-2">
									Ver más videos en YouTube
									<svg
										className="w-4 h-4"
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
									</svg>
								</a>
							</div>
						</div>
					</div>
							<div className="grid md:grid-cols-2 gap-8">
								{/* sección 1 */}
								<div className="hp-card flex flex-col h-full">
									<div className="flex-grow">
										<div className="hp-eyebrow hp-eyebrow-blue mb-4">
											<svg width="14" height="14" viewBox="0 0 24 24">
												<path fill="currentColor" d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
											</svg>
											Bidones Retornables
										</div>
										<h2 className="text-2xl md:text-3xl font-medium text-slate-900 dark:text-white mb-6 leading-tight">
											Características destacadas en máquinas retornables
										</h2>
										<div className="hp-p text-sm mb-8 space-y-2">
											<p className="mb-2">
												&#8226; Tiempo en lavado: 120
												segundos
											</p>
											<p className="mb-2">
												&#8226; Picos de lavado exterior
												rotativos
											</p>
											<p className="mb-2">
												&#8226; Puertas accionadas
												neumáticamente
											</p>
											<p className="mb-2">
												&#8226; Soportes abiertos para
												bidones
											</p>
											<p className="mb-2">
												&#8226; Pantalla táctil para
												operación y control
											</p>
											<p className="mb-2">
												&#8226; Proceso de saneado
											</p>
											<p className="mb-2">
												&#8226; Registro de producción y
												saneado
											</p>
											<p className="mb-2">
												&#8226; Diagnóstico inteligente de
												eventuales fallas
											</p>
										</div>
									</div>

									<Link
										to="/maquina-para-bidones-retornables"
										onClick={handleClick}
										className="inline-flex justify-center items-center py-2.5 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
										Más información
										<svg
											className="w-3.5 h-3.5 ml-2"
											aria-hidden="true"
											xmlns="http://www.w3.org/2000/svg"
											fill="none"
											viewBox="0 0 14 10">
											<path
												stroke="currentColor"
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth="2"
												d="M1 5h12m0 0L9 1m4 4L9 9"
											/>
										</svg>
									</Link>
								</div>
								{/* sección 2 */}
								<div className="hp-card flex flex-col h-full">
									<div className="flex-grow">
										<div className="hp-eyebrow hp-eyebrow-blue mb-4">
											<svg width="14" height="14" viewBox="0 0 24 24">
												<path fill="currentColor" d="M21 16.5c0 .38-.21.71-.53.88l-7.9 4.44c-.16.08-.33.12-.51.12s-.35-.04-.51-.12l-7.9-4.44c-.32-.17-.53-.5-.53-.88V7.5c0-.38.21-.71.53-.88l7.9-4.44c.16-.08.33-.12.51-.12s.35.04.51.12l7.9 4.44c.32.17.53.5.53.88v9z" />
											</svg>
											Bidones Descartables
										</div>
										<h2 className="text-2xl md:text-3xl font-medium text-slate-900 dark:text-white mb-6 leading-tight">
											Innovación en máquinas de bidones descartables
										</h2>
										<div className="hp-p text-sm mb-8 space-y-2">
											<p className="mb-2">
												&#8226; Tiempo de enjuague ajustable
											</p>
											<p className="mb-2">
												&#8226; Picos de enjuague interior
											</p>
											<p className="mb-2">
												&#8226; Colocador automático de
												manijas
											</p>
											<p className="mb-2">
												&#8226; Colocador automático de
												tapas a rosca
											</p>
											<p className="mb-2">
												&#8226; Roscador automático
											</p>
											<p className="mb-2">
												&#8226; Pantalla táctil para
												operación y control
											</p>
											<p className="mb-2">
												&#8226; Diagnóstico inteligente de
												eventuales fallas
											</p>
										</div>
									</div>

									<Link
										onClick={handleClick}
										to="/maquina-para-bidones-descartables"
										className="inline-flex justify-center items-center py-2.5 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
										Más información
										<svg
											className="w-3.5 h-3.5 ml-2"
											aria-hidden="true"
											xmlns="http://www.w3.org/2000/svg"
											fill="none"
											viewBox="0 0 14 10">
											<path
												stroke="currentColor"
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth="2"
												d="M1 5h12m0 0L9 1m4 4L9 9"
											/>
										</svg>
									</Link>
								</div>
								{/* sección 3 */}
								<div className="hp-card flex flex-col h-full">
									<div className="flex-grow">
										<div className="hp-eyebrow hp-eyebrow-blue mb-4">
											<svg width="14" height="14" viewBox="0 0 24 24">
												<path fill="currentColor" d="M6.27 17.05A2.991 2.991 0 0 1 4 22c-1.66 0-3-1.34-3-3s1.34-3 3-3c.18 0 .36 0 .53.05l3.07-5.36l-1.74-.99l4.09-1.12l1.12 4.09l-1.74-.99l-3.06 5.37M20 16c-1.3 0-2.4.84-2.82 2H11v-2l-3 3l3 3v-2h6.18c.42 1.16 1.52 2 2.82 2c1.66 0 3-1.34 3-3s-1.34-3-3-3m-8-8c.18 0 .36 0 .53-.05l3.07 5.36l-1.74.99l4.09 1.12l1.12-4.09l-1.74.99l-3.06-5.37A2.991 2.991 0 0 0 12 2c-1.66 0-3 1.34-3 3s1.34 3 3 3Z" />
											</svg>
											Accesorios Mecanizados
										</div>
										<h2 className="text-2xl md:text-3xl font-medium text-slate-900 dark:text-white mb-6 leading-tight">
											Accesorios imprescindibles para tu línea
										</h2>
										<div className="hp-p text-sm mb-8 space-y-2">
											<p className="mb-2">
												&#8226; Sacatapas automático y
												sacatapas manual
											</p>
											<p className="mb-2">
												&#8226; Alimentador automático para
												500 tapas
											</p>
											<p className="mb-2">
												&#8226; Cargador automático de
												bidones vacíos
											</p>
											<p className="mb-2">
												&#8226; Precintador automático
											</p>
											<p className="mb-2">
												&#8226; Cargador automático de
												bidones en racks
											</p>
											<p className="mb-2">
												&#8226; Lavadora con cepillos
												automática
											</p>
										</div>
									</div>

									<Link
										onClick={handleClick}
										to="/accesorios-para-maquinas"
										className="inline-flex justify-center items-center py-2.5 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
										Más información
										<svg
											className="w-3.5 h-3.5 ml-2"
											aria-hidden="true"
											xmlns="http://www.w3.org/2000/svg"
											fill="none"
											viewBox="0 0 14 10">
											<path
												stroke="currentColor"
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth="2"
												d="M1 5h12m0 0L9 1m4 4L9 9"
											/>
										</svg>
									</Link>
								</div>
								{/* sección 4 */}
								<div className="hp-card flex flex-col h-full">
									<div className="flex-grow">
										<div className="hp-eyebrow hp-eyebrow-blue mb-4">
											<svg width="14" height="14" viewBox="0 0 24 24">
												<path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" />
											</svg>
											Próximamente
										</div>
										<h2 className="text-2xl md:text-3xl font-medium text-slate-900 dark:text-white mb-6 leading-tight">
											Innovación en desarrollo constante
										</h2>
										<div className="hp-p text-sm mb-4">
											<picture className=" opacity-5 h-full w-full flex justify-center items-center">
												<img
													className="py-20 w-auto h-auto"
													src={logo}
													alt=""
												/>
											</picture>{" "}
										</div>
									</div>
								</div>
							</div>
				</article>
			</section>
		</>
	);
}