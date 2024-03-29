import { Base } from "../components/Base";
import { useTheme } from "../context/ThemeContext";
import { Table } from "../components/Table";
import { useEffect, useState } from "react";
import { SkeletonVideo } from "../components/VideoSkeleton";
import { bidonesRetornables } from "../machines_info/bidonesRetornables";
import "./Table.css";
import { BlurVideo } from "../components/BlurVideo/BlurVideo";
import bidonesEnjuagandose from "../videos/bidonesEnjuagandose.mp4";

export function BidonesRetornables() {
	const { isDarkTheme } = useTheme();
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
			<Base />
			<section
				className={`w-full absolute top-12 flex justify-center items-center  ${
					isDarkTheme ? "bg-gray-900" : "bg-gray-50 "
				}`}>
				<article className="lg:w-4/6 lg:ml-[300px] sm:ml-0  mb-20  ">
					<span
						href="#"
						className="bg-blue-100 pl-2 text-blue-800 text-xs font-medium flex items-center  py-0.5 rounded-md   mb-2">
						<svg
							className="icon icon-tabler icon-tabler-building-factory-2"
							width="24"
							height="24"
							viewBox="0 0 30 30"
							stroke="currentColor"
							fill="none">
							<path stroke="none" d="M0 0h24v24H0z" fill="none" />
							<path d="M3 21h18" />
							<path d="M5 21v-12l5 4v-4l5 4h4" />
							<path d="M19 21v-8l-1.436 -9.574a.5 .5 0 0 0 -.495 -.426h-1.145a.5 .5 0 0 0 -.494 .418l-1.43 8.582" />
							<path d="M9 17h1" />
							<path d="M14 17h1" />
						</svg>
						Máquinas automáticas {">"} Bidones Retornables
					</span>
					<h1 className="text-2xl md:text-5xl flex items-center py-5 my-5 text-dark bg-gray-200 rounded-lg font-extrabold shadow-md   ">
						<svg
							className="mx-1"
							width="35"
							height="35"
							viewBox="0 0 32 32">
							<path
								fill="#000000"
								d="M26 9.37V3a1 1 0 0 0-1-1h-3v2h2v6.72s3 .507 3 4.28v13h-3v2h4a1 1 0 0 0 1-1V15c0-3.452-1.933-5.024-3-5.63zm-7 0V3a1 1 0 0 0-1-1h-3v2h2v6.72s3 .507 3 4.28v13h-3v2h4a1 1 0 0 0 1-1V15c0-3.452-1.933-5.024-3-5.63zm-7 0V3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1v6.37c-1.067.606-3 2.178-3 5.63v14a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V15c0-3.452-1.933-5.024-3-5.63zM13 28H5V15c0-3.772 3-4.28 3-4.28V4h2v6.72s3 .508 3 4.28v13z"
							/>
						</svg>
						Para Bidones Retornables
					</h1>
					<p className="my-20 px-2 font-medium text-1xl text-gray-500 md:text-xl  ">
						Nuestras avanzadas líneas para bidones retornables
						representan la excelencia en maquinaria dedicada al
						lavado, enjuague, llenado y tapado de bidones.
						Construidas con acero inoxidable de alta calidad,
						nuestras líneas de producción abarcan capacidades desde
						120 hasta 1000 bidones por hora.
					</p>
					<p className="text-gray-500 border-l-4 border-blue-400 px-2 my-20 rounded-sm mx-1">
						Garantizamos un tiempo de lavado total de 2 minutos para
						cada bidón, asegurando una limpieza completa tanto en el
						interior como en el exterior, incluyendo la boca del
						bidón. Esta eficiente operación maximiza la efectividad
						del lavado y cumple con los más altos estándares de
						higiene.
					</p>
					<aside className="lg:p-10 sm:p-none rounded-lg my-10 bg-gray-100 shadow-lg ">
						{isLoading ? (
							<SkeletonVideo />
						) : (
							<BlurVideo
								video={bidonesEnjuagandose}
								urlYoutube="https://www.youtube.com/embed/KQ4Qwh-nuow?si=rFlpPyrepISuX-uY&autoplay=1&mute=0"
							/>
						)}
					</aside>
					<p className="text-gray-500 dark:text-gray-400 px-2 my-20 border-l-4 border-blue-400 mx-1">
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
