import { Base } from "../components/Base";
import { Details } from "../components/Details";
import { SEO } from "../components/SEO";
import image1 from "../img/1.jpg";
import image2 from "../img/maquina5.jpg";
import image3 from "../img/7.jpg";
import image4 from "../img/maquina3.jpg";
import image5 from "../img/trabajador.jpg";
import image6 from "../img/maquina2.jpg";

const faqSchema = {
	"@context": "https://schema.org",
	"@type": "FAQPage",
	"mainEntity": [
		{
			"@type": "Question",
			"name": "¿Cuánto tiempo lleva Alloatti SRL en el mercado?",
			"acceptedAnswer": { "@type": "Answer", "text": "Alloatti SRL tiene más de 30 años de experiencia en el mercado, brindando maquinaria de calidad para el procesamiento de bidones retornables y descartables." }
		},
		{
			"@type": "Question",
			"name": "¿Cuáles son las características destacadas de sus máquinas?",
			"acceptedAnswer": { "@type": "Answer", "text": "Nuestras máquinas cuentan con tiempos de lavado de 120 segundos, picos de lavado exterior rotativos, puertas accionadas neumáticamente y control inteligente vía pantalla táctil." }
		},
		{
			"@type": "Question",
			"name": "¿Qué capacidad de producción ofrecen?",
			"acceptedAnswer": { "@type": "Answer", "text": "Ofrecemos líneas que abarcan desde 50 hasta 1000 bidones por hora, con la posibilidad de desarrollar capacidades mayores según requerimientos específicos." }
		},
		{
			"@type": "Question",
			"name": "¿Qué innovaciones recientes han incorporado?",
			"acceptedAnswer": { "@type": "Answer", "text": "Hemos sumado departamentos de automatización, sacatapas automáticos, cargadores de bidones vacíos y conectividad IoT con diagnósticos inteligentes en tiempo real." }
		},
		{
			"@type": "Question",
			"name": "¿Cómo garantizan la calidad e higiene?",
			"acceptedAnswer": { "@type": "Answer", "text": "Garantizamos un ciclo de lavado de 120 segundos y llenado sin contacto para eliminar cualquier posibilidad de contaminación, cumpliendo con los estándares de higiene más exigentes." }
		}
	]
};

export function PreguntasFrecuentes() {

	const images = [image1, image2, image3, image4, image5, image6];

	return (
		<>
			<SEO 
				title="Preguntas Frecuentes" 
				description="Respuestas a las preguntas más comunes sobre maquinaria Alloatti: capacidad de producción, características técnicas, tiempos de lavado e innovaciones."
				keywords="preguntas frecuentes, FAQ, maquinas bidones, soporte técnico, Alloatti"
				url="/preguntas-frecuentes"
				jsonLd={faqSchema}
			/>
			<Base />
			<section
				className="w-full absolute top-10 flex justify-center items-center px-1">
				<article className="lg:w-4/6 lg:ml-[300px] sm:ml-0 mb-20 px-8 md:px-0">
					<div className="flex-col px-2">
						<header className="hp-page-header">
							<div className="hp-eyebrow hp-eyebrow-blue">
								<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
									<circle cx="12" cy="12" r="10" />
									<path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
									<path d="M12 17h.01" />
								</svg>
								Centro de Ayuda • Soporte Técnico
							</div>
							<h1 className="hp-h1">Preguntas Frecuentes</h1>
						</header>
						<p className="hp-p-intro my-20">
							Explora nuestras{" "}
							<strong className="hp-strong">preguntas frecuentes</strong> y{" "}
							y encontrá información clara sobre nuestros productos, servicios y maquinaria.
						</p>
						<div className="grid grid-cols-2 md:grid-cols-3 gap-4 my-12">
							{images.map((image, index) => (
								<div key={index} className="relative group overflow-hidden rounded-2xl aspect-square shadow-xl border border-slate-200 dark:border-slate-800 bg-slate-100 dark:bg-slate-900">
									<img
										src={image}
										className="w-full h-full object-cover grayscale-[25%] transition-all duration-700 group-hover:grayscale-0"
										alt={`Galería Alloatti ${index}`}
									/>
									<div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-40"></div>
								</div>
							))}
						</div>
					</div>

					<p className="hp-p-intro border-l-4 border-[#024ad8] pl-8 my-20">
Accedé rápidamente a respuestas sobre máquinas, procesos, entregas y soporte técnico.
					</p>
					<div className="hp-card my-12 !p-0 overflow-hidden">
						<div className="bg-slate-50 dark:bg-slate-800/50 p-6 border-b border-slate-100 dark:border-slate-700">
							<div className="hp-eyebrow hp-eyebrow-blue !bg-white dark:!bg-slate-900">Soporte Técnico • FAQ</div>
						</div>
						<div className="p-4 md:p-12 space-y-2">
							<Details
								name={"Alloatti"}
								question={
									"¿Cuánto tiempo lleva Alloatti SRL en el mercado?"
								}
								answer={
									"Alloatti SRL tiene más de 30 años de experiencia en el mercado, brindando maquinaria de calidad para el procesamiento de bidones retornables y descartables."
								}
							/>
							<Details
								name={"Alloatti"}
								question={
									"¿Cuáles son las características destacadas de sus máquinas?"
								}
								answer={
									"Nuestras máquinas cuentan con tiempos de lavado de 120 segundos, picos de lavado exterior rotativos, puertas accionadas neumáticamente y control inteligente vía pantalla táctil."
								}
							/>
							<Details
								name={"Alloatti"}
								question={
									"¿Qué capacidad de producción ofrecen?"
								}
								answer={
									"Ofrecemos líneas que abarcan desde 50 hasta 1000 bidones por hora, con la posibilidad de desarrollar capacidades mayores según requerimientos específicos."
								}
							/>
							<Details
								name={"Alloatti"}
								question={
									"¿Qué innovaciones recientes han incorporado?"
								}
								answer={
									"Hemos sumado departamentos de automatización, sacatapas automáticos, cargadores de bidones vacíos y conectividad IoT con diagnósticos inteligentes en tiempo real."
								}
							/>
							<Details
								name={"Alloatti"}
								question={
									"¿Cómo garantizan la calidad e higiene?"
								}
								answer={
									"Garantizamos un ciclo de lavado de 120 segundos y llenado sin contacto para eliminar cualquier posibilidad de contaminación, cumpliendo con los estándares de higiene más exigentes."
								}
							/>
						</div>
					</div>
				</article>
			</section>
		</>
	);
}
