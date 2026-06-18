import { Base } from "../components/Base";
import { TableAccesories } from "../components/TableAccesories";
import { accesorios } from "../machines_info/accesorios";
import { BlurVideo } from "../components/BlurVideo/BlurVideo";
import pantalla from "../videos/pantalla.mp4";
import { SEO } from "../components/SEO";
import { PremiumFooter } from "../components/PremiumFooter";

const productSchema = {
	"@context": "https://schema.org",
	"@graph": [
		{
			"@type": "Product",
			"name": "Accesorios y Periféricos para Embotelladoras Alloatti",
			"image": "https://www.alloatti.com/Alloatti-logo-dark.png",
			"description": "Módulos de automatización y accesorios periféricos para líneas de envasado de agua potable: tolvas rotativas distribuidoras de tapas, elevadores de tapas tipo Jirafa, cargadores automáticos de bidones vacíos, sacatapas neumáticos, prelavadoras (interiores, exteriores y mixtas) y conectividad HMI IoT con visualización móvil.",
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
				"Sistema de conectividad HMI e IoT (Pantalla y App)",
				"Pre-lavadora exterior",
				"Pre-lavadora interior",
				"Pre-lavadora mixta (interior y exterior)"
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
	return (
		<>
			<SEO 
				title="Accesorios y Automatización para Embotelladoras" 
				description="Optimice su planta embotelladora: sacatapas automáticos, cargadores de bidones, elevadores de tapas Jirafa, tolvas rotativas y conectividad IoT con app Android."
				keywords="accesorios industriales, sacatapas automatico, alimentador de tapas, elevador de tapas jirafa, tolva rotativa, prelavadora exterior, conectividad IoT, HMI"
				url="/accesorios-para-maquinas"
				jsonLd={productSchema}
			/>
			<Base />
			<section className="w-full absolute left-0 top-12 flex justify-center items-center flex-col">
				<article className="lg:w-4/6 lg:ml-[300px] sm:ml-0 mb-20 px-2">
					<header className="hp-page-header">
						<div className="hp-eyebrow hp-eyebrow-blue">
							<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
								<path d="M6.27 17.05A2.991 2.991 0 0 1 4 22c-1.66 0-3-1.34-3-3s1.34-3 3-3c.18 0 .36 0 .53.05l3.07-5.36l-1.74-.99l4.09-1.12l1.12 4.09l-1.74-.99l-3.06 5.37M20 16c-1.3 0-2.4.84-2.82 2H11v-2l-3 3l3 3v-2h6.18c.42 1.16 1.52 2 2.82 2c1.66 0 3-1.34 3-3s-1.34-3-3-3m-8-8c.18 0 .36 0 .53-.05l3.07 5.36l-1.74.99l4.09 1.12l1.12-4.09l-1.74.99l-3.06-5.37A2.991 2.991 0 0 0 12 2c-1.66 0-3 1.34-3 3s1.34 3 3 3Z" />
							</svg>
							Líneas Automáticas • Accesorios
						</div>
						<h1 className="hp-h1">Accesorios de Automatización para Embotelladoras</h1>
					</header>
					<p className="hp-p my-20">
						Nuestros equipos de accesorios están diseñados para
						optimizar y potenciar su línea de producción. Reduzca
						los tiempos de procesamiento y aumente
						significativamente la productividad de su operación.
					</p>
					<p className="hp-p border-l-4 border-[#024ad8] pl-8 my-20">
						Ofrecemos comodidades en diversas operaciones, como
						retirar las tapas de los bidones antes de lavarlos,
						realizar prelavados para eliminar la suciedad más
						gruesa, organizar las tapas de manera eficiente y
						visualizar el proceso productivo a distancia, entre
						otras funciones.
					</p>
					<aside className="lg:p-10 p-4 rounded-[16px] my-10 bg-slate-50 dark:bg-slate-900/40 shadow-2xl border border-slate-100 dark:border-slate-800 transition-all duration-500">
						<BlurVideo
							video={pantalla}
							urlYoutube="https://www.youtube.com/embed/GdnEMfxbREI?si=S4LEKZBvpEB_jUuC&autoplay=1&mute=0"
						/>
					</aside>
					<p className="hp-p border-l-4 border-[#024ad8] pl-8 my-20">
						En Alloatti, valoramos la retroalimentación de nuestros
						clientes, ya que nos permite conocer las necesidades
						específicas de la industria del agua. Este proceso nos
						impulsa a desarrollar nuevos accesorios que amplían las
						posibilidades de su línea productiva, adaptándonos de
						manera precisa a sus requerimientos.
					</p>
					<figure className="my-10">
						<TableAccesories accesories={accesorios} />
					</figure>
					<PremiumFooter />
				</article>
			</section>
		</>
	);
}
