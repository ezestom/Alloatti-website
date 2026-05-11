import { Base } from "../components/Base";
import InputData from "../components/InputData";
import chat from "../img/call-center.jpg";
import { SEO } from "../components/SEO";

export function Contacto() {
	return (
		<>
			<SEO 
				title="Contacto" 
				description="¿Tienes dudas sobre nuestra maquinaria? Ponte en contacto con nuestros asesores para recibir información detallada y presupuestos personalizados."
				keywords="contacto, ventas, soporte técnico, presupuesto máquinas de agua"
			/>
			<Base />
			<section className="w-full absolute top-12 flex justify-center items-center">
				<article className="lg:w-4/6 lg:ml-[300px] sm:ml-0 mb-20 px-8 md:px-0">
					<header className="hp-page-header">
						<div className="hp-eyebrow hp-eyebrow-blue">
							<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
								<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10z" />
							</svg>
							Ventas y Soporte • Contacto Directo
						</div>
						<h1 className="hp-h1">Contactanos</h1>
					</header>
					<p className="hp-p-intro my-20 px-2">
						¿Tenés alguna pregunta sobre nuestra maquinaria para el
						procesamiento de bidones retornables y descartables? No
						dudes en ponerte en contacto con nosotros. Estamos aquí
						para ayudarte a encontrar la solución que mejor se
						adapte a tus necesidades. ¡Esperamos con interés
						escuchar de vos!
					</p>
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

					<div className="my-32">
						<div className="hp-eyebrow hp-eyebrow-blue mb-8">Solicitud de Presupuesto</div>
						<p className="hp-p-intro mb-12">
							Proporcionanos tus datos y los detalles de tu consulta. Nuestro equipo comercial se encargará de brindarte una propuesta integral y detallada.
						</p>
						<InputData />
					</div>
				</article>
			</section>
		</>
	);
}
