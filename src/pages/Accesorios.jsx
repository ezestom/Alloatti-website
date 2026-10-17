import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Base } from "../components/Base";
import { TableAccesories } from "../components/TableAccesories";
import { accesorios } from "../machines_info/accesorios";
import imgAccesorios from "../img/img_accesorios.jpg";
import { SEO } from "../components/SEO";
import { PremiumFooter } from "../components/PremiumFooter";
import { useTheme } from "../context/ThemeContext";
import { GridPattern } from "../components/GridPattern";

const productSchema = {
	"@context": "https://schema.org",
	"@graph": [
		{
			"@type": "Product",
			"name": "Accesorios y Periféricos para Embotelladoras Alloatti",
			"image": "https://www.alloatti.com/Alloatti-logo-dark.png",
			"description": "Módulos de automatización, final de línea y accesorios periféricos para líneas de envasado de agua potable: tolvas rotativas distribuidoras de tapas, elevadores de tapas tipo Jirafa, cargadores automáticos de bidones vacíos, sacatapas neumáticos, prelavadoras (interiores, exteriores y mixtas), paletizadores de bidones y conectividad con visualización móvil.",
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
			"model": [
				"Tolva distribuidora de tapas",
				"Jirafa elevadora de tapas (Elevador de tapas industrial)",
				"Cargador automático de bidones",
				"Sacatapas manual",
				"Sacatapas automático en línea",
				"Sistema de conectividad (Pantalla y App)",
				"Pre-lavadora exterior",
				"Pre-lavadora interior",
				"Pre-lavadora mixta (interior y exterior)",
				"Paletizador automático de bidones",
				"Paletizador o enrackador de bidones (carga a piso y vehículos)"
			],
			"additionalProperty": [
				{
					"@type": "PropertyValue",
					"name": "Conectividad",
					"value": "Ethernet, aplicación móvil Android para monitoreo en tiempo real"
				},
				{
					"@type": "PropertyValue",
					"name": "Material principal",
					"value": "Acero Inoxidable AISI 304"
				},
				{
					"@type": "PropertyValue",
					"name": "Capacidad de prelavadoras",
					"value": "Hasta 600 bidones/hora"
				},
				{
					"@type": "PropertyValue",
					"name": "Almacenamiento de tapas en Jirafa",
					"value": "Hasta 500 tapas"
				}
			]
		}
	]
};

export function Accesorios() {
	const { isDarkTheme } = useTheme();
	const location = useLocation();

	useEffect(() => {
		if (location.hash) {
			const targetId = location.hash.replace("#", "");
			const scrollToElement = () => {
				const element = document.getElementById(targetId);
				if (element) {
					element.scrollIntoView({ behavior: "smooth", block: "start" });
				}
			};

			const timer1 = setTimeout(scrollToElement, 100);
			const timer2 = setTimeout(scrollToElement, 350);
			return () => {
				clearTimeout(timer1);
				clearTimeout(timer2);
			};
		}
	}, [location]);

	return (
		<>
			<SEO 
				title="Accesorios y Automatización para Envasadoras" 
				description="Optimice su planta embotelladora: sacatapas automáticos, cargadores, elevadores Jirafa, tolvas rotativas y paletizadores industriales de bidones."
				keywords="accesorios industriales, sacatapas automatico, alimentador de tapas, elevador de tapas jirafa, tolva rotativa, prelavadora exterior, paletizador de bidones, pantallas, conectividad"
				url="/accesorios-para-maquinas"
				jsonLd={productSchema}
			/>
			<Base />
			<section className="w-full absolute left-0 top-12 flex justify-center items-center flex-col">
				<article className="rounded-[16px] w-full max-w-7xl lg:pl-[290px] px-2 mb-20 animate-hp-fade">
					<header className="hp-page-header">
						<div className="hp-eyebrow hp-eyebrow-blue">
							<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
								<path d="M6.27 17.05A2.991 2.991 0 0 1 4 22c-1.66 0-3-1.34-3-3s1.34-3 3-3c.18 0 .36 0 .53.05l3.07-5.36l-1.74-.99l4.09-1.12l1.12 4.09l-1.74.99l-3.06 5.37M20 16c-1.3 0-2.4.84-2.82 2H11v-2l-3 3l3 3v-2h6.18c.42 1.16 1.52 2 2.82 2c1.66 0 3-1.34 3-3s-1.34-3-3-3m-8-8c.18 0 .36 0 .53-.05l3.07 5.36l-1.74.99l4.09 1.12l1.12-4.09l-1.74.99l-3.06-5.37A2.991 2.991 0 0 0 12 2c-1.66 0-3 1.34-3 3s1.34 3 3 3Z" />
							</svg>
							Líneas Automáticas • Accesorios
						</div>
						<h1 className="hp-h1">Accesorios de Automatización para Embotelladoras</h1>
					</header>
					<p className="hp-p my-4 xl:my-6">
						Nuestros equipos de accesorios están diseñados para
						optimizar y potenciar su línea de producción. Reduzca
						los tiempos de procesamiento y aumente
						significativamente la productividad de su operación.
					</p>
					<div className={`relative rounded-3xl border overflow-hidden p-4 sm:p-6 xl:p-7 my-5 xl:my-6 transition-colors duration-500 ${
						isDarkTheme 
							? "bg-[#292929] border-[#2a2a2a] shadow-[0_4px_25px_rgba(0,0,0,0.25)]" 
							: "bg-white border-[#e8e8e8] shadow-[0_4px_25px_rgba(0,0,0,0.04)]"
					}`}>
						<GridPattern />
						<div className="relative z-10 grid grid-cols-1 xl:grid-cols-12 gap-4 items-center">
							<div className="xl:col-span-6 flex flex-col gap-3.5 xl:gap-4">
								<p className="hp-p border-l-4 border-[#024ad8] pl-5 !my-0 text-sm xl:text-base">
									Ofrecemos comodidades en diversas operaciones, como
									retirar las tapas de los bidones antes de lavarlos,
									realizar prelavados para eliminar la suciedad más
									gruesa, organizar las tapas de manera eficiente y
									visualizar el proceso productivo a distancia, entre
									otras funciones.
								</p>
								<p className="hp-p border-l-4 border-[#024ad8] pl-5 !my-0 text-sm xl:text-base">
									En Alloatti, valoramos la retroalimentación de nuestros
									clientes, ya que nos permite conocer las necesidades
									específicas de la industria del agua. Este proceso nos
									impulsa a desarrollar nuevos accesorios que amplían las
									posibilidades de su línea productiva, adaptándonos de
									manera precisa a sus requerimientos.
								</p>
							</div>
							<div className="xl:col-span-6 w-full">
								<div className={`group relative overflow-hidden rounded-2xl shadow-xl border h-[240px] sm:h-[280px] xl:h-[320px] transition-all duration-300 hover:shadow-2xl hover:border-blue-500/40 ${
									isDarkTheme 
										? "border-[#383838] bg-[#1f1f1f]" 
										: "border-slate-200/80 bg-slate-100"
								}`}>
									<img
										src={imgAccesorios}
										alt="Módulos y accesorios de automatización para embotelladoras Alloatti"
										className="w-full h-full object-cover transition-transform duration-700 ease-out"
									/>
									<div className="absolute inset-0 bg-gradient-to-t from-black/20 via-black/0 to-transparent" />
									<div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 z-10">
										<span className="inline-flex items-center gap-1.5 text-[10px] sm:text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full backdrop-blur-md bg-black/60 text-white border border-white/20 shadow-sm">
											<span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse"></span>
											Módulos de Automatización
										</span>
									</div>
								</div>
							</div>
						</div>
					</div>
					<figure className="my-10">
						<TableAccesories accesories={accesorios} />
					</figure>
					<PremiumFooter />
				</article>
			</section>
		</>
	);
}
