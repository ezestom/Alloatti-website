import { Base } from "../components/Base";
import { SEO } from "../components/SEO";
import familia from "../img/family.png";

export function Normas() {
	return (
		<>
			<SEO 
				title="Normas de Calidad" 
				description="Conoce las normativas IVESS y CIMES que cumplen nuestras máquinas envasadoras. Estándares de higiene y seguridad garantizados en cada proceso."
				keywords="normas de calidad, IVESS, CIMES, higiene, agua potable, certificación"
				url="/normas-de-calidad"
			/>
			<Base />
			<section className="w-full absolute top-12 flex justify-center items-center">
				<article className="lg:w-4/6 lg:ml-[300px] sm:ml-0  mb-20 px-4 md:px-0">
					<header className="hp-page-header">
						<div className="hp-eyebrow hp-eyebrow-blue">
							<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
								<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
							</svg>
							Certificaciones • Calidad IVESS/CIMES
						</div>
						<h1 className="hp-h1">Normas de Calidad</h1>
					</header>
					<p className="hp-p-intro my-20 px-2">
						Contamos con una estrecha relación con IVESS y CIMES,
						normativas que garantizan la máxima calidad y pureza del
						agua. Estas normas definen los estándares a cumplir para
						el correcto proceso de sanitizado y llenado del bidón.
						Teniendo como guía estás normativas, desarrollamos
						nuestras bases para las características que cumplen
						nuestras máquinas:
					</p>
					
					<div className="space-y-12 mb-20 px-2">
						<p className="hp-p">
							<strong className="hp-strong">~ Duración óptima del lavado:</strong>{" "}
							Se garantiza un tiempo mínimo de 2 minutos para cada
							ciclo de lavado de los bidones, asegurando un proceso
							completo y efectivo.
						</p>
						<p className="hp-p">
							<strong className="hp-strong">~ Presión rotativa en el exterior:</strong>{" "}
							Implementamos un lavado con presión rotativa que abarca
							toda la superficie externa del bidón, garantizando la
							limpieza integral.
						</p>
						<p className="hp-p">
							<strong className="hp-strong">~ Presión interna del bidón:</strong>{" "}
							Nuestras máquinas incorporan un sistema de lavado
							interno con presión, asegurando la higiene en todos los
							rincones del recipiente.
						</p>
					</div>

					<div className="flex flex-col justify-center items-center">
						<figure className="w-full py-16 px-8 my-10 flex flex-col justify-center items-center bg-slate-50 dark:bg-slate-900/40 rounded-[16px] shadow-2xl border border-slate-100 dark:border-slate-800 transition-all duration-500">
							<div className="mb-12 text-center">
								<h2 className="hp-h2 mb-4">Calidad garantizada</h2>
								<p className="hp-p-intro text-slate-500 dark:text-slate-400">
									Tranquilidad para tu negocio y tu familia.
								</p>
							</div>
							<img
								src={familia}
								alt="Calidad IVESS Alloatti"
								className="h-auto w-full max-w-4xl"
							/>
						</figure>

						<div className="space-y-12 my-20 px-2 w-full">
							<p className="hp-p">
								<strong className="hp-strong">~ Separación sin contacto:</strong>{" "}
								En el proceso, garantizamos que no exista ningún
								contacto entre los bidones y las puertas que separan
								las distintas etapas, manteniendo la integridad del
								proceso.
							</p>
							<p className="hp-p">
								<strong className="hp-strong">~ Llenado sin contacto:</strong>{" "}
								Asimismo, nos aseguramos de que no haya contacto
								entre los picos de llenado y la boca de los bidones,
								cumpliendo con los estándares más exigentes en
								términos de higiene y pureza.
							</p>
						</div>

						<p className="hp-p-intro border-l-4 border-[#024ad8] pl-8 italic">
							Estas directrices reflejan nuestro compromiso
							inquebrantable con la calidad y la seguridad en cada
							paso de nuestro proceso de producción.
						</p>
					</div>
				</article>
			</section>
		</>
	);
}
