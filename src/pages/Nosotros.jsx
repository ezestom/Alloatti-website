import { Base } from "../components/Base";
import { Card } from "../components/Card";
import { Data } from "../components/Data";
import { SEO } from "../components/SEO";
import hector from "../img/tito_card_op.jpg";
import matias from "../img/mati_card_op.jpg";

export function Nosotros() {
	return (
		<>
			<SEO 
				title="Nosotros" 
				description="Conoce la trayectoria de Alloatti SRL, una empresa dirigida por ingenieros con más de 30 años de experiencia en maquinaria para el procesamiento de agua."
				keywords="ingeniería, maquinaria, agua potable, trayectoria, experiencia"
			url="/nosotros"
			/>
			<Base />
			<section className="w-full absolute top-12 flex justify-center items-center">
				<article className="lg:w-4/6 lg:ml-[300px] sm:ml-0 mb-20 px-8 md:px-0">
					<header className="hp-page-header">
						<div className="hp-eyebrow hp-eyebrow-blue">
							<svg width="12" height="12" viewBox="0 0 24 24">
								<path fill="currentColor" d="M12 10a4 4 0 1 0 0-8a4 4 0 0 0 0 8Zm-6.5 3a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5ZM21 10.5a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0Zm-9 .5a5 5 0 0 1 5 5v6H7v-6a5 5 0 0 1 5-5Zm-7 5c0-.693.1-1.362.288-1.994l-.17.014A3.5 3.5 0 0 0 2 17.5V22h3v-6Zm17 6v-4.5a3.5 3.5 0 0 0-3.288-3.494c.187.632.288 1.301.288 1.994v6h3Z" />
							</svg>
							Trayectoria Profesional
						</div>
						<h1 className="hp-h1">Nuestra empresa</h1>
					</header>

					<div className="mt-16 text-left">
						<p className="hp-p-intro mb-12">
							<strong className="hp-strong">Alloatti SRL</strong> es una empresa dirigida por{" "}
							<strong className="hp-strong">ingenieros</strong>, aportando una amplia
							experiencia técnica y soluciones{" "}
							<strong className="hp-strong">innovadoras</strong> en cada una de nuestras
							operaciones industriales.
						</p>
						<Data />
						<div className="mt-32 mb-20 border-l-4 border-[#024ad8] pl-8 text-left">
							<p className="hp-p-intro italic">
								La visión liderada por ingenieros impulsa cada
								aspecto de nuestras operaciones. Nuestro equipo está dedicado a superar desafíos y
								ofrecer soluciones que definen la industria.
							</p>
						</div>
					</div>
					<div className="flex flex-col items-start">
					<div className="space-y-32 w-full">
						<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12">
							<Card
								name={"Ing. Hector Alloatti"}
								photo={hector}
								university={"Universidad Nacional de La Plata"}
								description={"Fundador y Gerente de Alloatti SRL, con más de 30 años de experiencia en la industria del agua. Especialista en ingeniería mecánica y eléctrica."}
								position={"Fundador-Gerente"}
								date={"2005"}
								location={"Buenos Aires, Argentina"}
							/>
							<Card
								name={"Ing. Matías Alloatti"}
								photo={matias}
								university={"Universidad Tecnológica Nacional"}
								description={"Director de Logística y Programación de maquinarias con más de 15 años de experiencia. Especialista en programación de PLC y pantallas táctiles."}
								position={"Director de Logística"}
								date={"2010"}
								location={"Buenos Aires, Argentina"}
							/>
						</div>

						<blockquote className="py-20 px-4 mb-20 border-y border-slate-100 dark:border-slate-800">
							<p className="hp-p-intro italic">
								&ldquo;La combinación de pasión por la ingeniería y el
								compromiso con la calidad nos coloca en primera
								línea en la innovación en el mercado,
								garantizando que cada producto y servicio
								refleje la excelencia que caracteriza a nuestra
								empresa.&rdquo;
							</p>
						</blockquote>
					</div>
				</div>
				</article>
			</section>
		</>
	);
}
