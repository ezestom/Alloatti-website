import { Link } from "react-router-dom";
import { Base } from "../components/Base";
import { SEO } from "../components/SEO";
import { PremiumFooter } from "../components/PremiumFooter";
import { GridPattern } from "../components/GridPattern";
import infobae from "../img/infobae.jpeg";
import iprofesional from "../img/iprofesional.jpeg";
import gobbsas from "../img/gobbsas.jpeg";

const noticiasDelRubro = [
	{
		id: "infobae-agua-envasada",
		destacada: true,
		medio: "Infobae DEF",
		categoria: "Prensa Nacional",
		fecha: "21 de Diciembre, 2019",
		tiempoLectura: "5 min de lectura",
		titulo: "Agua envasada: ¿verdadera fuente de salud o solo marketing?",
		resumen:
			"Informe especial y entrevista exclusiva sobre la importancia del agua de mesa, los mitos habituales del consumo masivo y cómo los procesos tecnológicos y normativas de higiene garantizan la salud de millones de consumidores.",
		enlace:
			"https://www.infobae.com/def/desarrollo/2019/12/21/agua-envasada-verdadera-fuente-de-salud-o-solo-marketing/",
		botonTexto: "Leer nota completa en Infobae",
		imagen: infobae,
	},
	{
		id: "iprofesional-plantas-clandestinas",
		destacada: false,
		medio: "iProfesional",
		categoria: "Actualidad y Sanidad",
		fecha: "17 de Julio, 2026",
		tiempoLectura: "2 min de lectura",
		titulo: "Clausuran tres plantas clandestinas de agua en el conurbano",
		resumen:
			"La Policía Federal desarticuló tres plantas de envasado sin habilitación en el sur del conurbano bonaerense y secuestró 600 bidones de 20 litros. Un recordatorio de por qué es clave producir con plantas habilitadas y equipos que cumplan el Código Alimentario Argentino y normativas de inocuidad.",
		enlace:
			"https://www.iprofesional.com/actualidad/460128-clausuran-tres-plantas-clandestinas-de-agua-en-el-conurbano",
		botonTexto: "Leer nota completa en iProfesional",
		imagen: iprofesional,
	},
	{
		id: "gba-punta-lara",
		destacada: false,
		medio: "Gobierno Bonaerense",
		categoria: "Comunicado Oficial",
		fecha: "4 de Septiembre, 2026",
		tiempoLectura: "2 min de lectura",
		titulo: "Ensenada: La Provincia inauguró la nueva Planta Envasadora de Punta Lara",
		resumen:
			"La nueva planta puede producir hasta 8.400 bidones por día. Incorpora una máquina automática enjuagadora, llenadora y tapadora de hasta 700 bidones por hora, un claro ejemplo de hacia dónde avanza la automatización y la inversión tecnológica en el sector.",
		enlace:
			"https://gba.gob.ar/infraestructura/noticias/ensenada_la_provincia_inaugur%C3%B3_la_nueva_planta_envasadora_de_punta_lara",
		botonTexto: "Leer nota completa en GBA.gob.ar",
		imagen: gobbsas,
	},
];

export function UltimasNoticias() {
	return (
		<>
			<SEO
				title="Noticias del Rubro y Prensa de la Industria | Alloatti SRL"
				description="Actualidad, tendencias y notas de prensa de la industria del agua embotellada y maquinaria de envasado. Cobertura de Infobae, iProfesional y comunicados oficiales del sector."
				keywords="noticias del rubro, prensa agua envasada, infobae agua de mesa, iprofesional envasadoras, envasadora punta lara, IVESS, CIMES, maquinaria industrial agua"
				url="/ultimas-noticias"
			/>
			<Base />
			<section className="w-full absolute top-12 flex justify-center items-center">
				<article className="rounded-[16px] w-full max-w-7xl lg:pl-[290px] px-2 mb-20 animate-hp-fade">
					<header className="hp-page-header">
						<div className="hp-eyebrow hp-eyebrow-blue">
							<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
								<path d="M19 20H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h10l4 4v10a2 2 0 0 1-2 2z" />
								<path d="M7 8h4M7 12h8M7 16h8" />
							</svg>
							Ventas • Prensa y Actualidad
						</div>
						<h1 className="hp-h1">Noticias del Rubro</h1>
					</header>

					<p className="hp-p-intro mb-8">
						Manténgase al día con las últimas{" "}
						<strong className="hp-strong">novedades, análisis y notas de prensa</strong>{" "}
						del sector de agua envasada, normativas de calidad sanitaria e innovaciones tecnológicas en plantas embotelladoras.
					</p>

					{/* FEED DE NOTICIAS CON DISEÑO DE ALTO IMPACTO */}
					<div className="space-y-10 my-6">
						{noticiasDelRubro.map((noticia, index) => (
							<figure
								key={noticia.id}
								className="w-full py-10 md:py-14 px-6 md:px-14 flex flex-col justify-center items-start bg-slate-50 dark:bg-slate-900/40 rounded-[24px] shadow-2xl border border-slate-100 dark:border-slate-800 transition-all duration-500 relative overflow-hidden">
								<GridPattern />
								<div className="relative z-10 w-full flex flex-col items-start">
									{/* Badge de destacada si es la primera */}
									{index === 0 && (
										<div className="flex items-center gap-2 mb-6">
											<span className="w-2.5 h-2.5 rounded-full bg-blue-500 animate-pulse"></span>
											<span className="text-xs font-bold uppercase tracking-widest text-[#024ad8] dark:text-blue-400">
												Nota Destacada de Portada
											</span>
										</div>
									)}

									<div className="w-full flex justify-center mb-8">
										<img
											src={noticia.imagen}
											alt={noticia.titulo}
											className="rounded-2xl h-auto shadow-2xl w-full max-w-3xl border border-slate-200 dark:border-slate-700"
										/>
									</div>

									<div className="text-left w-full">
										<div className="flex flex-wrap items-center gap-3 mb-4">
											<span className="px-3 py-1 rounded-full text-xs font-bold bg-blue-500/10 text-[#024ad8] dark:text-blue-400 border border-blue-500/20">
												{noticia.medio}
											</span>
											<span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-slate-200/60 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
												{noticia.categoria}
											</span>
											<span className="text-xs text-slate-500 dark:text-slate-400">
												{noticia.fecha}
											</span>
											<span className="text-xs text-slate-400 dark:text-slate-500">•</span>
											<span className="text-xs text-slate-500 dark:text-slate-400">
												{noticia.tiempoLectura}
											</span>
										</div>

										<h2 className="hp-h2 !text-2xl md:!text-3xl mb-4 font-bold text-slate-900 dark:text-white leading-tight">
											{noticia.titulo}
										</h2>

										<p className="hp-p max-w-3xl mb-8 text-base leading-relaxed text-slate-600 dark:text-slate-300">
											{noticia.resumen}
										</p>

										<a
											href={noticia.enlace}
											target="_blank"
											rel="noopener noreferrer"
											className="hp-btn-primary inline-flex items-center gap-2">
											{noticia.botonTexto}
											<svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
												<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
											</svg>
										</a>
									</div>
								</div>
							</figure>
						))}
					</div>

					{/* CALLOUT PARA SUMAR NOTICIAS O NOVEDADES */}
					<div className="p-8 my-14 rounded-2xl bg-gradient-to-r from-blue-900/10 via-slate-900/10 to-blue-900/10 border border-blue-500/20 flex flex-col sm:flex-row items-center justify-between gap-6 relative overflow-hidden">
						<GridPattern />
						<div className="relative z-10">
							<h4 className="text-lg font-bold text-slate-900 dark:text-white mb-1">
								¿Novedades en su planta o proyecto industrial?
							</h4>
							<p className="text-sm text-slate-600 dark:text-slate-400">
								Compartimos casos de éxito, modernizaciones y coberturas del rubro embotellador de agua.
							</p>
						</div>
						<Link
							to="/contacto#solicitud-presupuesto"
							className="shrink-0 px-5 py-2.5 rounded-lg text-sm font-semibold bg-[#024ad8] hover:bg-blue-600 text-white transition-all duration-300 relative z-10">
							Contactanos para difundir tu noticia
						</Link>
					</div>

					<PremiumFooter />
				</article>
			</section>
		</>
	);
}
