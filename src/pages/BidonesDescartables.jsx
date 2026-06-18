import { Base } from "../components/Base";
import { Table } from "../components/Table";
import { bidonesDescartables } from "../machines_info/bidonesDescartables";
import "./Table.css";
import { BlurVideo } from "../components/BlurVideo/BlurVideo";
import cargador from "../videos/cargador.mp4";
import { SEO } from "../components/SEO";
import { PremiumFooter } from "../components/PremiumFooter";

const productSchema = {
	"@context": "https://schema.org",
	"@graph": [
		{
			"@type": "Product",
			"name": "Línea de Envasadoras para Bidones Descartables AT-D",
			"image": "https://www.alloatti.com/Alloatti-logo-dark.png",
			"description": "Líneas industriales automáticas y semiautomáticas para el enjuague, llenado y tapado roscado de bidones descartables de un solo uso (PET) de 6, 8 y 10 litros. Construidas en acero inoxidable AISI 304 con capacidades de 300 a 700 bidones por hora y opciones de colocador de manijas automático.",
			"brand": { 
				"@type": "Brand", 
				"name": "Alloatti" 
			},
			"manufacturer": { 
				"@type": "Organization", 
				"name": "Alloatti SRL",
				"logo": "https://www.alloatti.com/Alloatti-logo-dark.png",
				"url": "https://www.alloatti.com"
			},
			"category": "PackagingMachinery",
			"material": "Acero Inoxidable AISI 304",
			"model": ["AT-300D", "AT-700D"],
			"additionalProperty": [
				{
					"@type": "PropertyValue",
					"name": "Capacidad de producción",
					"value": "300 a 700 bidones/hora (según modelo)"
				},
				{
					"@type": "PropertyValue",
					"name": "Formatos de bidón",
					"value": "Bidones descartables de 6 litros, 8 litros y 10 litros"
				},
				{
					"@type": "PropertyValue",
					"name": "Tipo de cierre",
					"value": "Tapador roscador automático/neumático"
				},
				{
					"@type": "PropertyValue",
					"name": "Tipo de llenado",
					"value": "Llenado por gravedad sin contacto físico (evita contaminación cruzada)"
				},
				{
					"@type": "PropertyValue",
					"name": "Higiene y soldadura",
					"value": "Soldadura sanitaria TIG con respaldo de gas"
				}
			]
		}
	]
};

export function BidonesDescartables() {
	const { sectionData1, sectionData2 } = bidonesDescartables;

	const sectionDataArray = [sectionData1, sectionData2];
	return (
		<>
			<SEO 
				title="Envasadoras de Bidones Descartables y de un Solo Uso" 
				description="Líneas industriales automáticas y semiautomáticas de enjuague, llenado y roscado para bidones descartables de PET (6L, 8L y 10L). Rendimiento de 300 a 700 bidones/hora."
				keywords="envasadora de bidones descartables, llenadora de bidones PET, roscadora automatica, enjuagadora de bidones, planta embotelladora de agua, envasado de agua mineral"
				url="/maquina-para-bidones-descartables"
				jsonLd={productSchema}
			/>
			<Base />
			<section className="w-full absolute left-0 top-12 flex justify-center items-center flex-col">
				<article className="lg:w-4/6 lg:ml-[300px] sm:ml-0 mb-20 px-2">

					<header className="hp-page-header">
						<div className="hp-eyebrow hp-eyebrow-blue">
							<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
								<path d="M3 21h18M5 21v-12l5 4v-4l5 4h4M19 21v-8l-1.436 -9.574a.5 .5 0 0 0 -.495 -.426h-1.145a.5 .5 0 0 0 -.494 .418l-1.43 8.582" />
							</svg>
							Líneas Automáticas • Bidones Descartables
						</div>
						<h1 className="hp-h1">Maquinaria de Envasado para Bidones Descartables</h1>
					</header>
					<p className="hp-p my-20">
						Nuestras avanzadas líneas para bidones descartables
						representan la excelencia en maquinaria dedicada al
						enjuague, llenado y roscado de bidones. Construidas con
						acero inoxidable de alta calidad, nuestras líneas de
						producción abarcan capacidades desde 300 hasta 700
						bidones por hora.
					</p>
					<p className="hp-p border-l-4 border-[#024ad8] pl-8 my-20">
						Tiempo de enjuague ajustable a su necesidad, asegurando
						una limpieza completa del interior. Esta operación
						asegura la sanitización del interior del bidón
						cumpliendo los standares de calidad.
					</p>
					<aside className="lg:p-10 p-4 rounded-[16px] my-10 bg-slate-50 dark:bg-slate-900/40 shadow-2xl border border-slate-100 dark:border-slate-800 transition-all duration-500">
						<BlurVideo
							video={cargador}
							urlYoutube="https://www.youtube.com/embed/KQ4Qwh-nuow?si=rFlpPyrepISuX-uY&autoplay=1&mute=0"
						/>
					</aside>
					<p className="hp-p border-l-4 border-[#024ad8] pl-8 my-20">
						Adicionalmente, hemos diseñado nuestras líneas para
						prevenir el contacto directo entre la boca del bidón y
						el pico de llenado, eliminando cualquier posibilidad de
						contaminación del bidón. En Alloatti, nos comprometemos
						a ofrecer soluciones de calidad que garanticen la
						seguridad y pureza de cada bidón procesado.
					</p>
				</article>
					<div className="table-container lg:w-4/6 lg:ml-[300px] sm:ml-0 mb-20 px-8 md:px-0">
						{sectionDataArray.map((section, index) => (
							<Table key={index} data={section} />
						))}
					</div>
					<div className="w-full lg:w-4/6 lg:ml-[300px] sm:ml-0 mb-20 px-4 md:px-0">
						<PremiumFooter />
					</div>
			</section>
		</>
	);
}
