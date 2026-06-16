import { Base } from "../components/Base";
import { Table } from "../components/Table";
import { bidonesRetornables } from "../machines_info/bidonesRetornables";
import "./Table.css";
import { BlurVideo } from "../components/BlurVideo/BlurVideo";
import bidonesEnjuagandose from "../videos/bidonesEnjuagandose.mp4";
import { SEO } from "../components/SEO";
import { PremiumFooter } from "../components/PremiumFooter";

const productSchema = {
	"@context": "https://schema.org",
	"@graph": [
		{
			"@type": "Product",
			"name": "Línea de Envasadoras Automáticas AT (Bidones Retornables)",
			"image": "https://alloatti.com/Alloatti-logo-dark.png",
			"description": "Líneas industriales automáticas de lavado, enjuague, llenado y tapado (a presión o por cinta transportadora) para bidones retornables de agua de 10, 12 y 20 litros. Fabricadas en acero inoxidable AISI 304 bajo normas IVESS y CIMES, con capacidades desde 120 hasta 1000 bidones por hora y ciclo de lavado de 2 minutos garantizado.",
			"brand": { 
				"@type": "Brand", 
				"name": "Alloatti" 
			},
			"manufacturer": { 
				"@type": "Organization", 
				"name": "Alloatti SRL",
				"logo": "https://alloatti.com/Alloatti-logo-dark.png",
				"url": "https://alloatti.com"
			},
			"category": "PackagingMachinery",
			"material": "Acero Inoxidable AISI 304",
			"model": ["AT-120", "AT-180", "AT-240", "AT-360", "AT-480", "AT-600", "AT-720", "AT-840", "AT-960"],
			"additionalProperty": [
				{
					"@type": "PropertyValue",
					"name": "Capacidad de producción",
					"value": "120 a 1000 bidones/hora"
				},
				{
					"@type": "PropertyValue",
					"name": "Formatos de bidón",
					"value": "Bidones retornables de 10 litros, 12 litros y 20 litros"
				},
				{
					"@type": "PropertyValue",
					"name": "Ciclo de lavado garantizado",
					"value": "2 minutos (120 segundos) de permanencia bajo lavado activo"
				},
				{
					"@type": "PropertyValue",
					"name": "Tipo de llenado",
					"value": "Llenado por gravedad sin contacto físico (evita contaminación cruzada)"
				},
				{
					"@type": "PropertyValue",
					"name": "Normas y certificaciones compatibles",
					"value": "IVESS, CIMES"
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

export function BidonesRetornables() {
	const {
		sectionData1,
		sectionData2,
		sectionData3,
		sectionData4,
		sectionData5,
		sectionData6,
		sectionData7,
		sectionData8,
		sectionData9,
	} = bidonesRetornables;

	const sectionDataArray = [
		sectionData1,
		sectionData2,
		sectionData3,
		sectionData4,
		sectionData5,
		sectionData6,
		sectionData7,
		sectionData8,
		sectionData9,
	];

	return (
		<>
			<SEO 
				title="Máquinas Envasadoras de Bidones Retornables de 20L" 
				description="Líneas automáticas e industriales para lavado, enjuague, llenado y tapado de bidones retornables de 10, 12 y 20 litros. Capacidad de 120 a 1000 bidones/hora."
				keywords="maquinas para bidones retornables, lavadora de bidones de 20 litros, envasadora automatica de agua, linea de llenado, embotelladora industrial, acero inoxidable grado alimenticio"
				url="/maquina-para-bidones-retornables"
				jsonLd={productSchema}
			/>
			<Base />
			<section className="w-full absolute left-0 top-12 flex justify-center items-center flex-col">
				<article className="lg:w-4/6 lg:ml-[300px] sm:ml-0 mb-20 px-4 md:px-0">
					<header className="hp-page-header">
						<div className="hp-eyebrow hp-eyebrow-blue">
							<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
								<path d="M3 21h18M5 21v-12l5 4v-4l5 4h4M19 21v-8l-1.436 -9.574a.5 .5 0 0 0 -.495 -.426h-1.145a.5 .5 0 0 0 -.494 .418l-1.43 8.582" />
							</svg>
							Líneas Automáticas • Bidones Retornables
						</div>
						<h1 className="hp-h1">Envasadoras para Bidones Retornables de Agua</h1>
					</header>
					<p className="hp-p my-20">
						Nuestras avanzadas líneas para bidones retornables
						representan la excelencia en maquinaria dedicada al
						lavado, enjuague, llenado y tapado de bidones.
						Construidas con acero inoxidable de alta calidad,
						nuestras líneas de producción abarcan capacidades desde
						120 hasta 1000 bidones por hora.
					</p>
					<p className="hp-p border-l-4 border-[#024ad8] pl-8 my-20">
						Garantizamos un tiempo de lavado total de 2 minutos para
						cada bidón, asegurando una limpieza completa tanto en el
						interior como en el exterior, incluyendo la boca del
						bidón. Esta eficiente operación maximiza la efectividad
						del lavado y cumple con los más altos estándares de
						higiene.
					</p>
					<aside className="lg:p-10 p-4 rounded-[16px] my-10 bg-slate-50 dark:bg-slate-900/40 shadow-2xl border border-slate-100 dark:border-slate-800 transition-all duration-500">
						<BlurVideo
							video={bidonesEnjuagandose}
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
					<div className="table-container lg:w-4/6 lg:ml-[300px] sm:ml-0 mb-20 px-4 md:px-0">
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
