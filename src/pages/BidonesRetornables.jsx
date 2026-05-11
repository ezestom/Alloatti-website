import { Base } from "../components/Base";
import { Table } from "../components/Table";
import { useEffect, useState } from "react";
import { SkeletonVideo } from "../components/VideoSkeleton";
import { bidonesRetornables } from "../machines_info/bidonesRetornables";
import "./Table.css";
import { BlurVideo } from "../components/BlurVideo/BlurVideo";
import bidonesEnjuagandose from "../videos/bidonesEnjuagandose.mp4";
import { SEO } from "../components/SEO";

export function BidonesRetornables() {
	const [isLoading, setIsLoading] = useState(false);

	const {
		sectionData1,
		sectionData2,
		sectionData3,
		sectionData4,
		sectionData5,
		sectionData6,
		sectionData7,
		sectionData8,
		sectionData9,
	} = bidonesRetornables;

	const sectionDataArray = [
		sectionData1,
		sectionData2,
		sectionData3,
		sectionData4,
		sectionData5,
		sectionData6,
		sectionData7,
		sectionData8,
		sectionData9,
	];

	useEffect(() => {
		setIsLoading(true);
		setTimeout(() => {
			setIsLoading(false);
		}, 1000);
	}, []);

	return (
		<section>
			<SEO 
				title="Máquinas para Bidones Retornables" 
				description="Líneas automáticas de lavado, llenado y tapado para bidones retornables de 12 a 20 litros. Capacidad de 120 a 1000 bidones por hora."
				keywords="bidones retornables, lavadora de bidones, envasadora automatica, acero inoxidable"
			/>
			<Base />
			<section className="w-full absolute top-12 flex justify-center items-center">
				<article className="lg:w-4/6 lg:ml-[300px] sm:ml-0 mb-20 px-8 md:px-0">
					<header className="hp-page-header">
						<div className="hp-eyebrow hp-eyebrow-blue">
							<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
								<path d="M3 21h18M5 21v-12l5 4v-4l5 4h4M19 21v-8l-1.436 -9.574a.5 .5 0 0 0 -.495 -.426h-1.145a.5 .5 0 0 0 -.494 .418l-1.43 8.582" />
							</svg>
							Líneas Automáticas • Bidones Retornables
						</div>
						<h1 className="hp-h1">Para Bidones Retornables</h1>
					</header>
					<p className="hp-p-intro my-20 px-2">
						Nuestras avanzadas líneas para bidones retornables
						representan la excelencia en maquinaria dedicada al
						lavado, enjuague, llenado y tapado de bidones.
						Construidas con acero inoxidable de alta calidad,
						nuestras líneas de producción abarcan capacidades desde
						120 hasta 1000 bidones por hora.
					</p>
					<p className="hp-p-intro border-l-4 border-[#024ad8] pl-8 my-20">
						Garantizamos un tiempo de lavado total de 2 minutos para
						cada bidón, asegurando una limpieza completa tanto en el
						interior como en el exterior, incluyendo la boca del
						bidón. Esta eficiente operación maximiza la efectividad
						del lavado y cumple con los más altos estándares de
						higiene.
					</p>
					<aside className="lg:p-10 p-4 rounded-[16px] my-10 bg-slate-50 dark:bg-slate-900/40 shadow-2xl border border-slate-100 dark:border-slate-800 transition-all duration-500">
						{isLoading ? (
							<SkeletonVideo />
						) : (
							<BlurVideo
								video={bidonesEnjuagandose}
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
					<div className="table-container ">
						{sectionDataArray.map((section, index) => (
							<Table key={index} data={section} />
						))}
					</div>
				</article>
			</section>
		</section>
	);
}
