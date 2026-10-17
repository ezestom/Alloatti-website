import { Base } from "../components/Base";
import { Card } from "../components/Card";
import { Data } from "../components/Data";
import { SEO } from "../components/SEO";
import { CarouselAutoScroll } from "../components/CarouselAutoScroll";
import { PremiumFooter } from "../components/PremiumFooter";
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
import foto27 from "../img/carousel/27.jpg";
import foto28 from "../img/carousel/28.jpg";
import foto29 from "../img/carousel/29.jpg";

export function Nosotros() {
	const carouselImages =
		[foto1, foto2, foto3, foto4, foto5, foto6, foto7, foto8, foto9, foto10, foto11, foto12, foto13, foto14, foto15, foto16, foto17, foto18, foto19, foto20, foto21, foto22, foto23, foto24, foto25, foto26, foto27, foto28, foto29];
	return (
		<>
			<SEO
				title="Quiénes Somos | Trayectoria en Maquinaria"
				description="Conozca la trayectoria de Alloatti SRL: más de 30 años de experiencia técnica en ingeniería y fabricación de envasadoras de agua y automatización."
				keywords="trayectoria envasadoras, ingenieria industrial, automatizacion de bidones, fabricacion de maquinaria, ingenieros de agua, Alloatti SRL"
				url="/nosotros"
			/>
			<Base />
			<section className="w-full absolute top-12 flex justify-center items-center">
				<article className="rounded-[16px] w-full max-w-7xl lg:pl-[290px] px-2 mb-20 animate-hp-fade">
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

					<div className="mt-6 text-left">
						<p className="hp-p mb-4">
							<strong className="hp-strong">Alloatti SRL</strong>{" "}
							es una empresa dirigida por{" "}
							<strong className="hp-strong">ingenieros</strong>,
							aportando una amplia experiencia técnica y
							soluciones{" "}
							<strong className="hp-strong">innovadoras</strong>{" "}
							en cada una de nuestras operaciones industriales.
						</p>

						<div className="mt-5 mb-5 border-l-4 border-[#024ad8] pl-5 text-left">
							<p className="hp-p italic text-sm xl:text-base">
								La visión liderada por ingenieros impulsa cada
								aspecto de nuestras operaciones. Nuestro equipo
								está dedicado a superar desafíos y ofrecer
								soluciones que definen la industria.
							</p>
						</div>
						<div className="mt-6 mb-6 w-full overflow-hidden rounded-2xl">
							<CarouselAutoScroll direction="forward" speed={0.75}>
								{carouselImages.slice(0, 13).map((img, idx) => (
									<div
										key={idx}
										className="group relative w-full h-48 sm:h-56 md:h-72 rounded-2xl overflow-hidden bg-slate-100 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/60 shadow-sm transition-all duration-300 hover:shadow-lg hover:border-blue-500/40">
										<img
											src={img}
											alt={`Instalaciones Alloatti ${idx + 1}`}
											className="w-full h-full object-cover rounded-2xl transition-transform duration-500 ease-out group-hover:scale-105"
											loading="lazy"
										/>
									</div>
								))}
							</CarouselAutoScroll>
						</div>

					</div>
					<div className="flex flex-col items-start">
						<div className="space-y-8 xl:space-y-12 w-full">
							<div className="grid grid-cols-1 xl:grid-cols-2 gap-5 xl:gap-6 mt-6">
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

							{/* Galería complementaria con desplazamiento en sentido contrario */}
							<div className="w-[calc(100vw-2rem)] md:w-auto -ml-4 md:ml-0 overflow-hidden rounded-2xl">
								<CarouselAutoScroll direction="backward" speed={0.75}>
									{carouselImages.slice(13).map((img, idx) => (
										<div
											key={idx}
											className="group relative w-full h-56 md:h-80 rounded-2xl overflow-hidden bg-slate-100 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/60 shadow-sm transition-all duration-300 hover:shadow-lg hover:border-blue-500/40">
											<img
												src={img}
												alt={`Taller y Producción Alloatti ${idx + 14}`}
												className="w-full h-full object-cover rounded-2xl transition-transform duration-500 ease-out group-hover:scale-105"
												loading="lazy"
											/>
										</div>
									))}
								</CarouselAutoScroll>
							</div>

							<blockquote className="px-4 mb-20">
								<p className="hp-p italic">
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
					<Data />
					<PremiumFooter />
				</article>
			</section>
		</>
	);
}
