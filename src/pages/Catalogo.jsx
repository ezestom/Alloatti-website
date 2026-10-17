import { Link } from "react-router-dom";
import { Base } from "../components/Base";
import { SEO } from "../components/SEO";
import { PremiumFooter } from "../components/PremiumFooter";
import { GridPattern } from "../components/GridPattern";
import imgCatalogo from "../img/ppt.jpeg";

export function Catalogo() {
	return (
		<>
			<SEO
				title="Catálogo Institucional de Envasadoras de Agua | Alloatti SRL"
				description="Descargue el catálogo institucional y presentación técnica completa de Alloatti SRL. Conozca nuestra maquinaria para bidones retornables, descartables y periféricos."
				keywords="catalogo de envasadoras, catalogo institucional, envasadoras de agua, fichas tecnicas, maquinaria industrial, Alloatti SRL, presentacion tecnica"
				url="/catalogo"
			/>
			<Base />
			<section className="w-full absolute top-12 flex justify-center items-center">
				<article className="rounded-[16px] w-full max-w-7xl lg:pl-[290px] px-2 mb-20 animate-hp-fade">
					<header className="hp-page-header">
						<div className="hp-eyebrow hp-eyebrow-blue">
							<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
								<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
								<polyline points="14 2 14 8 20 8" />
								<line x1="16" y1="13" x2="8" y2="13" />
								<line x1="16" y1="17" x2="8" y2="17" />
								<polyline points="10 9 9 9 8 9" />
							</svg>
							Ventas • Recursos Técnicos
						</div>
						<h1 className="hp-h1">Catálogo Institucional</h1>
					</header>

					<p className="hp-p-intro mb-8">
						Descubra nuestra ingeniería aplicada y explore el{" "}
						<strong className="hp-strong">catálogo completo de soluciones</strong>{" "}
						de envasado, lavado y automatización para plantas embotelladoras de agua.
					</p>

					{/* Main Resource Showcase Card */}
					<figure className="w-full py-8 md:py-12 px-6 md:px-10 my-6 flex flex-col justify-center items-start bg-slate-50 dark:bg-slate-900/40 rounded-[24px] shadow-2xl border border-slate-100 dark:border-slate-800 transition-all duration-500 relative overflow-hidden">
						<GridPattern />
						<div className="relative z-10 w-full flex flex-col items-start">
							<div className="w-full flex justify-center mb-10">
								<img
									src={imgCatalogo}
									alt="Catálogo Oficial Alloatti SRL - Línea de Maquinaria"
									className="rounded-2xl h-auto shadow-2xl max-w-3xl w-full border border-slate-200 dark:border-slate-700"
								/>
							</div>
							<div className="text-left w-full">
								<div className="hp-eyebrow hp-eyebrow-blue mb-4">Presentación Técnica Oficial</div>
								<h2 className="hp-h2 !text-3xl mb-4">Dossier de Equipamiento 2026</h2>
								<p className="hp-p max-w-3xl mb-8">
									Explore en detalle la ingeniería, capacidades productivas, layouts recomendados
									y ventajas competitivas de nuestra maquinaria fabricada íntegramente en acero inoxidable AISI 304.
									Incluye diagramas de flujo y especificaciones técnicas de toda la línea.
								</p>

								<div className="flex flex-wrap items-center gap-4">
									<Link
										target="_blank"
										rel="noopener noreferrer"
										to="https://docs.google.com/presentation/d/1nxAnPC36P5ZGGVoCrPrG6OuOgro9ctrZ/edit?usp=sharing&ouid=100382327728309392109&rtpof=true&sd=true"
										className="hp-btn-primary inline-flex items-center gap-2">
										Ver Catálogo Interactivo
										<svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
										</svg>
									</Link>
								</div>
							</div>
						</div>
					</figure>

					{/* 3 Pillars Summary Cards */}
					<div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-14">
						<div className="p-6 rounded-2xl bg-white dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800 shadow-sm flex flex-col justify-between relative overflow-hidden">
							<GridPattern />
							<div className="relative z-10 flex flex-col justify-between h-full">
								<div>
									<div className="w-10 h-10 rounded-xl bg-blue-500/10 text-[#024ad8] dark:text-blue-400 flex items-center justify-center font-bold text-lg mb-4">
										01
									</div>
									<h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
										Bidones Retornables
									</h3>
									<p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
										Líneas continuas de 120 a 1000 bidones/hora con lavado activo de 120 segundos y llenado aséptico sin contacto.
									</p>
								</div>
								<Link
									to="/maquina-para-bidones-retornables"
									className="mt-6 text-xs font-bold uppercase tracking-wider text-[#024ad8] dark:text-blue-400 hover:underline inline-flex items-center gap-1">
									Ver Modelos &rarr;
								</Link>
							</div>
						</div>

						<div className="p-6 rounded-2xl bg-white dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800 shadow-sm flex flex-col justify-between relative overflow-hidden">
							<GridPattern />
							<div className="relative z-10 flex flex-col justify-between h-full">
								<div>
									<div className="w-10 h-10 rounded-xl bg-blue-500/10 text-[#024ad8] dark:text-blue-400 flex items-center justify-center font-bold text-lg mb-4">
										02
									</div>
									<h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
										Bidones Descartables
									</h3>
									<p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
										Equipos para envases PET descartables de 6 a 10 litros. Rendimientos de 300 y 700 bid/h con roscado automático.
									</p>
								</div>
								<Link
									to="/maquina-para-bidones-descartables"
									className="mt-6 text-xs font-bold uppercase tracking-wider text-[#024ad8] dark:text-blue-400 hover:underline inline-flex items-center gap-1">
									Ver Modelos &rarr;
								</Link>
							</div>
						</div>

						<div className="p-6 rounded-2xl bg-white dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800 shadow-sm flex flex-col justify-between relative overflow-hidden">
							<GridPattern />
							<div className="relative z-10 flex flex-col justify-between h-full">
								<div>
									<div className="w-10 h-10 rounded-xl bg-blue-500/10 text-[#024ad8] dark:text-blue-400 flex items-center justify-center font-bold text-lg mb-4">
										03
									</div>
									<h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
										Accesorios y Conectividad
									</h3>
									<p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
										Tolvas rotativas, elevadores jirafa, sacatapas automáticos y monitoreo en tiempo real vía app Android.
									</p>
								</div>
								<Link
									to="/accesorios-para-maquinas"
									className="mt-6 text-xs font-bold uppercase tracking-wider text-[#024ad8] dark:text-blue-400 hover:underline inline-flex items-center gap-1">
									Ver Accesorios &rarr;
								</Link>
							</div>
						</div>
					</div>

					<PremiumFooter />
				</article>
			</section>
		</>
	);
}
