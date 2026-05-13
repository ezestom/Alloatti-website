import { Link } from "react-router-dom";
import { Base } from "../components/Base";
import { SEO } from "../components/SEO";
import imgCatalogo from "../img/409shots_so.jpg";
import infobae from "../img/infobae.png";

export function UltimasNoticias() {
	return (
		<>
			<SEO 
				title="Estrategia y Catálogo" 
				description="Descarga el catálogo completo de productos Alloatti SRL. Conoce nuestra presencia en medios nacionales y nuestra estrategia comercial."
				keywords="catálogo, noticias, prensa, Infobae, agua envasada, Alloatti"
				url="/ultimas-noticias"
			/>
			<Base />
			<section className="w-full absolute top-12 flex justify-center items-center">
				<article className="lg:w-4/6 lg:ml-[300px] sm:ml-0 mb-20 px-8 md:px-0">
					<header className="hp-page-header">
						<div className="hp-eyebrow hp-eyebrow-blue">
							<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
								<path d="M19 20H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h10l4 4v10a2 2 0 0 1-2 2z" />
								<path d="M7 8h4M7 12h8M7 16h8" />
							</svg>
							Ventas • Recursos y Prensa
						</div>
						<h1 className="hp-h1">Estrategia y Catálogo</h1>
					</header>
					<p className="hp-p-intro mb-12">
						Descubre nuestra estrategia comercial y descarga el 
						<strong className="hp-strong"> catálogo completo de productos </strong> 
						para explorar a fondo nuestras soluciones de envasado.
					</p>
					
					<figure className="w-full py-20 px-8 md:px-16 my-12 flex flex-col justify-center items-start bg-slate-50 dark:bg-slate-900/40 rounded-[24px] shadow-2xl border border-slate-100 dark:border-slate-800 transition-all duration-500">
						<div className="w-full flex justify-center mb-12">
							<img
								src={imgCatalogo}
								alt="Catálogo Alloatti"
								className="rounded-2xl h-auto shadow-2xl max-w-3xl w-full border border-slate-200 dark:border-slate-700"
							/>
						</div>
						<div className="text-left w-full">
							<div className="hp-eyebrow hp-eyebrow-blue mb-6">Recurso Digital</div>
							<h2 className="hp-h2 !text-3xl mb-6">Catálogo Institucional</h2>
							<p className="hp-p max-w-2xl mb-10">
								Explore nuestra gama completa de soluciones. Esta presentación técnica incluye 
								especificaciones detalladas, diagramas de procesos y ventajas competitivas de 
								nuestra maquinaria de vanguardia.
							</p>
							<Link
								target="_blank"
								to="https://docs.google.com/presentation/d/1nxAnPC36P5ZGGVoCrPrG6OuOgro9ctrZ/edit?usp=sharing&ouid=100382327728309392109&rtpof=true&sd=true"
								className="hp-btn-primary inline-flex items-center gap-2">
								Ir al catálogo
								<svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a2 2 0 002 2h12a2 2 0 002-2v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
								</svg>
							</Link>
						</div>
					</figure>

					<p className="hp-p-intro border-l-4 border-[#024ad8] pl-8 my-24">
						Nuestra presencia en medios nacionales refleja el impacto de nuestras 
						soluciones en el mercado de consumo masivo y la industria del agua.
					</p>

					<figure className="w-full py-20 px-8 md:px-16 my-12 flex flex-col justify-center items-start bg-slate-50 dark:bg-slate-900/40 rounded-[24px] shadow-2xl border border-slate-100 dark:border-slate-800 transition-all duration-500">
						<div className="w-full flex justify-center mb-12">
							<img
								src={infobae}
								alt="Noticia Infobae"
								className="rounded-2xl h-auto shadow-2xl w-full max-w-3xl border border-slate-200 dark:border-slate-700"
							/>
						</div>
						<div className="text-left w-full">
							<div className="hp-eyebrow hp-eyebrow-blue mb-6">Prensa y Medios</div>
							<h2 className="hp-h2 !text-3xl mb-6">Nota Editorial: Infobae</h2>
							<p className="hp-p max-w-2xl mb-10">
								Le invitamos a leer la entrevista exclusiva sobre la importancia del agua envasada, 
								los mitos del mercado y cómo la tecnología garantiza la salud de millones 
								de consumidores.
							</p>
							<Link
								target="_blank"
								to="https://www.infobae.com/def/desarrollo/2019/12/21/agua-envasada-verdadera-fuente-de-salud-o-solo-marketing/"
								className="hp-btn-primary inline-flex items-center gap-2">
								Ir a la noticia
								<svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
								</svg>
							</Link>
						</div>
					</figure>
				</article>
			</section>
		</>
	);
}
