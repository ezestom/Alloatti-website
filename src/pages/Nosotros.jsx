import { Base } from "../components/Base";
import { Card } from "../components/Card";
import { Data } from "../components/Data";
import { SEO } from "../components/SEO";
import { CarouselAutoScroll } from "../components/CarouselAutoScroll";
import hector from "../img/tito_card_op.jpg";
import matias from "../img/mati_card_op.jpg";

import foto1 from "../img/carousel/1.jpg";
import foto2 from "../img/carousel/2.jpg";
import foto3 from "../img/carousel/3.jpg";
import foto4 from "../img/carousel/4.jpg";
import foto5 from "../img/carousel/5.jpg";
import foto6 from "../img/carousel/6.jpg";
import foto7 from "../img/carousel/7.jpg";
import foto8 from "../img/carousel/8.jpg";
import foto9 from "../img/carousel/9.jpg";
import foto10 from "../img/carousel/10.jpg";
import foto11 from "../img/carousel/11.jpg";
import foto12 from "../img/carousel/12.jpg";
import foto13 from "../img/carousel/13.jpg";
import foto14 from "../img/carousel/14.jpg";
import foto15 from "../img/carousel/15.jpg";
import foto16 from "../img/carousel/16.jpg";
import foto17 from "../img/carousel/17.jpg";
import foto18 from "../img/carousel/18.jpg";
import foto19 from "../img/carousel/19.jpg";
import foto20 from "../img/carousel/20.jpg";
import foto21 from "../img/carousel/21.jpg";
import foto22 from "../img/carousel/22.jpg";
import foto23 from "../img/carousel/23.jpg";
import foto24 from "../img/carousel/24.jpg";
import foto25 from "../img/carousel/25.jpg";
import foto26 from "../img/carousel/26.jpg";

export function Nosotros() {
	const carouselImages =
		[foto1, foto2, foto3, foto4, foto5, foto6, foto7, foto8, foto9, foto10, foto11, foto12, foto13, foto14, foto15, foto16, foto17, foto18, foto19, foto20, foto21, foto22, foto23, foto24, foto25, foto26];
	return (
		<>
			<SEO
				title="Quiénes Somos | Fábrica de Maquinaria para Procesamiento de Agua"
				description="Conozca la trayectoria de Alloatti SRL, empresa líder dirigida por ingenieros con más de 30 años de experiencia técnica en el diseño de envasadoras de agua y automatización."
				keywords="trayectoria envasadoras, ingenieria industrial, automatizacion de bidones, fabricacion de maquinaria, ingenieros de agua, Alloatti SRL"
				url="/nosotros"
			/>
			<Base />
			<section className="w-full absolute top-12 flex justify-center items-center">
				<article className="lg:w-4/6 lg:ml-[300px] sm:ml-0 mb-20 px-4 md:px-0">
					<header className="hp-page-header">
						<div className="hp-eyebrow hp-eyebrow-blue">
							<svg width="12" height="12" viewBox="0 0 24 24">
								<path
									fill="currentColor"
									d="M12 10a4 4 0 1 0 0-8a4 4 0 0 0 0 8Zm-6.5 3a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5ZM21 10.5a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0Zm-9 .5a5 5 0 0 1 5 5v6H7v-6a5 5 0 0 1 5-5Zm-7 5c0-.693.1-1.362.288-1.994l-.17.014A3.5 3.5 0 0 0 2 17.5V22h3v-6Zm17 6v-4.5a3.5 3.5 0 0 0-3.288-3.494c.187.632.288 1.301.288 1.994v6h3Z"
								/>
							</svg>
							Trayectoria Profesional
						</div>
						<h1 className="hp-h1">Nuestra empresa</h1>
					</header>

					<div className="mt-16 text-left">
						<p className="hp-p-intro mb-12">
							<strong className="hp-strong">Alloatti SRL</strong>{" "}
							es una empresa dirigida por{" "}
							<strong className="hp-strong">ingenieros</strong>,
							aportando una amplia experiencia técnica y
							soluciones{" "}
							<strong className="hp-strong">innovadoras</strong>{" "}
							en cada una de nuestras operaciones industriales.
						</p>
						<Data />

						<div className="mt-12 mb-12 w-[calc(100vw-2rem)] md:w-auto -ml-4 md:ml-0 overflow-hidden rounded-2xl">
							<CarouselAutoScroll>
					
								{[...Array(26)].map((_, idx) => (
									<div
										key={idx}
										className="w-full h-full sm:min-h-[250px] bg-slate-100 dark:bg-slate-800/50 rounded-xl flex items-center justify-center border-2 border-dashed border-slate-300 dark:border-slate-700 overflow-hidden">
										{/* Cuando tengas las imágenes cargadas en el array, reemplaza este <span> por tu imagen */}
										<img src={carouselImages[idx]} alt={`Carousel ${idx}`} className="w-full h-full object-cover rounded-lg" />

										{/* <span className="text-slate-400 dark:text-slate-500 font-medium">
											Foto {idx + 1}
										</span> */}
									</div>
								))}
							</CarouselAutoScroll>
						</div>

						<div className="mt-20 mb-20 border-l-4 border-[#024ad8] pl-8 text-left">
							<p className="hp-p-intro italic">
								La visión liderada por ingenieros impulsa cada
								aspecto de nuestras operaciones. Nuestro equipo
								está dedicado a superar desafíos y ofrecer
								soluciones que definen la industria.
							</p>
						</div>
					</div>
					<div className="flex flex-col items-start">
						<div className="space-y-32 w-full">
							<div className="grid grid-cols-1 2xl:grid-cols-2 gap-8 mt-12">
								<Card
									name={"Ing. Hector Alloatti"}
									photo={hector}
									university={
										"Universidad Nacional de La Plata"
									}
									description={
										"Fundador y Gerente de Alloatti SRL, con más de 30 años de experiencia en la industria del agua. Especialista en ingeniería mecánica y eléctrica."
									}
									position={"Fundador-Gerente"}
									date={"2005"}
									location={"Buenos Aires, Argentina"}
								/>
								<Card
									name={"Ing. Matías Alloatti"}
									photo={matias}
									university={
										"Universidad Tecnológica Nacional"
									}
									description={
										"Director de Logística y Programación de maquinarias con más de 15 años de experiencia. Especialista en programación de PLC y pantallas táctiles."
									}
									position={"Director de Logística"}
									date={"2010"}
									location={"Buenos Aires, Argentina"}
								/>
							</div>

							<blockquote className="px-4 mb-20 border-y border-slate-100 dark:border-slate-800">
								<p className="hp-p-intro italic">
									&ldquo;La combinación de pasión por la
									ingeniería y el compromiso con la calidad
									nos coloca en primera línea en la innovación
									en el mercado, garantizando que cada
									producto y servicio refleje la excelencia
									que caracteriza a nuestra empresa.&rdquo;
								</p>
							</blockquote>
						</div>
					</div>
				</article>
			</section>
		</>
	);
}
