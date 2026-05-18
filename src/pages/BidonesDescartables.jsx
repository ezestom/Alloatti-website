import { Base } from "../components/Base";
import { Table } from "../components/Table";
import { useEffect, useState } from "react";
import { SkeletonVideo } from "../components/VideoSkeleton";
import { bidonesDescartables } from "../machines_info/bidonesDescartables";
import "./Table.css";
import { BlurVideo } from "../components/BlurVideo/BlurVideo";
import cargador from "../videos/cargador.mp4";
import { SEO } from "../components/SEO";

export function BidonesDescartables() {
	const [isLoading, setIsLoading] = useState(true);

	const { sectionData1, sectionData2 } = bidonesDescartables;

	const sectionDataArray = [sectionData1, sectionData2];

	useEffect(() => {
		setIsLoading(true);
		setTimeout(() => {
			setIsLoading(false);
		}, 1000);
	}, []);
	return (
		<>
			<SEO 
				title="Máquinas Envasadoras para Bidones Descartables" 
				description="Líneas industriales automáticas de enjuague, llenado y roscado para bidones descartables. Producción continua de 300 a 700 bidones por hora con precisión extrema."
				keywords="maquinas para bidones descartables, llenadora de bidones de PET, envasadora de agua, roscadora automatica, planta embotelladora, industria de agua"
				url="/maquina-para-bidones-descartables"
			/>
			<Base />
			<section className="w-full absolute top-12 flex justify-center items-center flex-col">
				<article className="lg:w-4/6 lg:ml-[300px] sm:ml-0 mb-20 px-8 md:px-0">

					<header className="hp-page-header">
						<div className="hp-eyebrow hp-eyebrow-blue">
							<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
								<path d="M3 21h18M5 21v-12l5 4v-4l5 4h4M19 21v-8l-1.436 -9.574a.5 .5 0 0 0 -.495 -.426h-1.145a.5 .5 0 0 0 -.494 .418l-1.43 8.582" />
							</svg>
							Líneas Automáticas • Bidones Descartables
						</div>
						<h1 className="hp-h1">Para Bidones Descartables</h1>
					</header>
					<p className="hp-p-intro my-20">
						Nuestras avanzadas líneas para bidones descartables
						representan la excelencia en maquinaria dedicada al
						enjuague, llenado y roscado de bidones. Construidas con
						acero inoxidable de alta calidad, nuestras líneas de
						producción abarcan capacidades desde 300 hasta 700
						bidones por hora.
					</p>
					<p className="hp-p-intro border-l-4 border-[#024ad8] pl-8 my-20">
						Tiempo de enjuague ajustable a su necesidad, asegurando
						una limpieza completa del interior. Esta operación
						asegura la sanitización del interior del bidón
						cumpliendo los standares de calidad.
					</p>
					<aside className="lg:p-10 p-4 rounded-[16px] my-10 bg-slate-50 dark:bg-slate-900/40 shadow-2xl border border-slate-100 dark:border-slate-800 transition-all duration-500">
						{isLoading ? (
							<SkeletonVideo />
						) : (
							<BlurVideo
								video={cargador}
								urlYoutube="https://www.youtube.com/embed/KQ4Qwh-nuow?si=rFlpPyrepISuX-uY&autoplay=1&mute=0"
							/>
						)}
					</aside>
					<p className="hp-p-intro border-l-4 border-[#024ad8] pl-8 my-20">
						Adicionalmente, hemos diseñado nuestras líneas para
						prevenir el contacto directo entre la boca del bidón y
						el pico de llenado, eliminando cualquier posibilidad de
						contaminación del bidón. En Alloatti, nos comprometemos
						a ofrecer soluciones de calidad que garanticen la
						seguridad y pureza de cada bidón procesado.
					</p>
				</article>
					<div className="table-container lg:w-4/6 lg:ml-[300px] sm:ml-0 mb-20 px-8 md:px-0">
						{sectionDataArray.map((section, index) => (
							<Table key={index} data={section} />
						))}
					</div>
			</section>
		</>
	);
}
