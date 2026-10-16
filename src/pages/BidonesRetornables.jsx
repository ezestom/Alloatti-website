import { Base } from "../components/Base";
import { Table } from "../components/Table";
import { bidonesRetornables } from "../machines_info/bidonesRetornables";
import "./Table.css";
import imgRetornables from "../img/img_retornables.jpg";
import { SEO } from "../components/SEO";
import { PremiumFooter } from "../components/PremiumFooter";
import { useTheme } from "../context/ThemeContext";

const productSchema = {
	"@context": "https://schema.org",
	"@graph": [
		{
			"@type": "Product",
			"name": "Línea de Envasadoras Automáticas AT (Bidones Retornables)",
			"image": "https://www.alloatti.com/Alloatti-logo-dark.png",
			"description": "Líneas industriales automáticas de lavado, enjuague, llenado y tapado (a presión o por cinta transportadora) para bidones retornables de agua de 10, 12 y 20 litros. Fabricadas en acero inoxidable AISI 304 bajo normas IVESS y CIMES, con capacidades desde 120 hasta 1000 bidones por hora y ciclo de lavado de 2 minutos garantizado.",
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
	const { isDarkTheme } = useTheme();
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
				<article className="lg:w-4/6 lg:ml-[300px] sm:ml-0 mb-20 px-2">
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
					<div className={`relative rounded-3xl border overflow-hidden p-6 sm:p-8 md:p-10 lg:p-12 my-14 transition-colors duration-500 ${
						isDarkTheme 
							? "bg-[#292929] border-[#2a2a2a] shadow-[0_4px_25px_rgba(0,0,0,0.25)]" 
							: "bg-white border-[#e8e8e8] shadow-[0_4px_25px_rgba(0,0,0,0.04)]"
					}`}>
						<div className="grid grid-cols-1 2xl:grid-cols-2 gap-10 items-center">
							<div className="flex flex-col gap-8">
								<p className="hp-p border-l-4 border-[#024ad8] pl-6 !my-0">
									Garantizamos un tiempo de lavado total de 2 minutos para
									cada bidón, asegurando una limpieza completa tanto en el
									interior como en el exterior, incluyendo la boca del
									bidón. Esta eficiente operación maximiza la efectividad
									del lavado y cumple con los más altos estándares de
									higiene.
								</p>
								<p className="hp-p border-l-4 border-[#024ad8] pl-6 !my-0">
									Adicionalmente, hemos diseñado nuestras líneas para
									prevenir el contacto directo entre la boca del bidón y
									el pico de llenado, eliminando cualquier posibilidad de
									contaminación del bidón. En Alloatti, nos comprometemos
									a ofrecer soluciones de calidad que garanticen la
									seguridad y pureza de cada bidón procesado.
								</p>
							</div>
							<div className="w-full">
								<div className={`group relative overflow-hidden rounded-2xl shadow-xl border transition-all duration-300 hover:shadow-2xl hover:border-blue-500/40 ${
									isDarkTheme 
										? "border-[#383838] bg-[#1f1f1f]" 
										: "border-slate-200/80 bg-slate-100"
								}`}>
									<img
										src={imgRetornables}
										alt="Línea de envasado para bidones retornables de agua Alloatti"
										className="w-full h-auto object-cover transition-transform duration-700 ease-out"
									/>
									<div className="absolute inset-0 bg-gradient-to-t from-black/20 via-black/0 to-transparent" />
									<div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 z-10">
										<span className="inline-flex items-center gap-1.5 text-[10px] sm:text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full backdrop-blur-md bg-black/60 text-white border border-white/20 shadow-sm">
											<span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse"></span>
											Línea Automática en Planta
										</span>
									</div>
								</div>
							</div>
						</div>
					</div>
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
