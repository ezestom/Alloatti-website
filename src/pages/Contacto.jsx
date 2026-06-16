import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Base } from "../components/Base";
import InputData from "../components/InputData";
import chat from "../img/call-center.jpg";
import { SEO } from "../components/SEO";
import { Map } from "../components/Map";
import { PremiumFooter } from "../components/PremiumFooter";

export function Contacto() {
	const location = useLocation();

	useEffect(() => {
		if (location.hash) {
			const id = location.hash.replace("#", "");
			const element = document.getElementById(id);
			if (element) {
				setTimeout(() => {
					element.scrollIntoView({ behavior: "smooth" });
				}, 100);
			}
		}
	}, [location]);

	return (
		<>
			<SEO 
				title="Contacto y Presupuestos de Maquinaria de Agua" 
				description="Solicite un presupuesto personalizado para su planta embotelladora de agua. Póngase en contacto con nuestros ingenieros y asesores técnicos."
				keywords="contacto, presupuesto de envasadora, ventas de maquinas de agua, soporte tecnico"
				url="/contacto"
			/>
			<Base />
			<section className="w-full absolute top-12 flex justify-center items-center">
				<article className="lg:w-4/6 lg:ml-[300px] sm:ml-0 mb-20 px-4 md:px-0">
					<header className="hp-page-header">
						<div className="hp-eyebrow hp-eyebrow-blue">
							<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
								<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10z" />
							</svg>
							Ventas y Soporte • Contacto Directo
						</div>
						<h1 className="hp-h1">Contactanos</h1>
					</header>
					<p className="hp-p my-20">
						¿Tenés alguna pregunta sobre nuestra maquinaria para el
						procesamiento de bidones retornables y descartables? No
						dudes en ponerte en contacto con nosotros. Estamos aquí
						para ayudarte a encontrar la solución que mejor se
						adapte a tus necesidades. ¡Esperamos con interés
						escuchar de vos!
					</p>

										{/* Map Section */}
					<section className="mt-16">
						<div className="hp-card p-6 md:p-8 flex flex-col gap-6 shadow-xl border border-slate-100 dark:border-slate-800 transition-all duration-500">
							<div>
								<span className="bg-blue-100 dark:bg-blue-900/30 text-[#024ad8] dark:text-blue-400 text-[10px] font-bold uppercase tracking-[0.2em] px-4 py-1.5 rounded-full mb-4 inline-block">
									Planta Industrial
								</span>
								<h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white mb-2">
									Nuestra Ubicación
								</h2>
								<address className="not-italic text-sm text-slate-500 dark:text-slate-400 font-semibold uppercase tracking-wider flex items-center gap-2">
									<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-[#024ad8]">
										<path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
										<circle cx="12" cy="10" r="3" />
									</svg>
									Ing. Luis Silveyra 1139, B1607BQC Villa Adelina, Provincia de Buenos Aires
								</address>
							</div>
							
							<div className="w-full h-[350px] md:h-[420px] rounded-2xl overflow-hidden">
								<Map />
							</div>
						</div>
					</section>
					
					<section className="mt-20">
						<div className="hp-card flex flex-col md:flex-row gap-12 items-center !p-12 shadow-2xl transition-all duration-500">
							<div className="flex-1 order-2 md:order-1">
								<div className="hp-eyebrow hp-eyebrow-blue mb-6">Asistencia Personalizada</div>
								<h2 className="hp-h2">
									Nuestros asesores
								</h2>
								<p className="hp-p">
									Estamos para ayudarte a optimizar tu planta.
									Consultá con nuestros expertos para obtener 
									una solución técnica a medida.
								</p>
							</div>
							<div className="w-full md:w-1/2 order-1 md:order-2">
								<img
									className="rounded-2xl shadow-2xl w-full aspect-video object-cover border border-slate-100 dark:border-slate-800"
									src={chat}
									alt="Asesores Alloatti"
								/>
							</div>
						</div>
					</section>



					<div className="my-32" id="form">
						<div className="hp-eyebrow hp-eyebrow-blue mb-8">Solicitud de Presupuesto</div>
						<p className="hp-p mb-12">
							Proporcionanos tus datos y los detalles de tu consulta. Nuestro equipo comercial se encargará de brindarte una propuesta integral y detallada.
						</p>
						<InputData />
					</div>
					<PremiumFooter />
				</article>
			</section>
		</>
	);
}
