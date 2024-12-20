import { Base } from "../components/Base";
import { useTheme } from "../context/ThemeContext";
import { Table } from "../components/Table";
import { useEffect, useState } from "react";
import { SkeletonVideo } from "../components/VideoSkeleton";
import { bidonesDescartables } from "../machines_info/bidonesDescartables";
import "./Table.css";
import { BlurVideo } from "../components/BlurVideo/BlurVideo";
import cargador from "../videos/cargador.mp4";

export function BidonesDescartables() {
	const { isDarkTheme } = useTheme();

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
		<section>
			<Base />
			<section
				className={`w-full absolute top-12 flex justify-center items-center  ${
					isDarkTheme ? "bg-gray-900" : "bg-gray-50 "
				}`}>
				<article className="lg:w-4/6 lg:ml-[300px] sm:ml-0  mb-20 ">
					<span
						href="#"
						className="bg-blue-100 pl-2 text-blue-800 text-xs font-medium flex items-center  py-0.5 rounded-md dark:text-blue-400 mb-2">
						<svg
							xmlns="http://www.w3.org/2000/svg"
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
						Máquinas automáticas {">"} Bidones descartables
					</span>
					<h1 className="text-2xl md:text-5xl flex items-center py-5 my-5 text-dark bg-gray-200 rounded-lg font-extrabold shadow-md ">
						<svg
							className="mx-1"
							width="35"
							height="35"
							viewBox="0 0 32 32">
							<path
								fill="#000000"
								d="M26 9.37V3a1 1 0 0 0-1-1h-3v2h2v6.72s3 .507 3 4.28v13h-3v2h4a1 1 0 0 0 1-1V15c0-3.452-1.933-5.024-3-5.63zm-7 0V3a1 1 0 0 0-1-1h-3v2h2v6.72s3 .507 3 4.28v13h-3v2h4a1 1 0 0 0 1-1V15c0-3.452-1.933-5.024-3-5.63zM13 28h-3v2h4a1 1 0 0 0 1-1v-4h-2v3zm-8-3H3v4a1 1 0 0 0 1 1h4v-2H5v-3zm8-7h2v5h-2zM3 18h2v5H3zm9-8.63V3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1v6.37c-1.067.606-3 2.178-3 5.63v1h2v-1c0-3.772 3-4.28 3-4.28V4h2v6.72s3 .508 3 4.28v1h2v-1c0-3.452-1.933-5.024-3-5.63z"
							/>
						</svg>
						Para Bidones Descartables
					</h1>
					<p className="px-2 text-1xl text-gray-500 md:text-xl font-medium my-20">
						Nuestras avanzadas líneas para bidones retornables
						representan la excelencia en maquinaria dedicada al
						enjuague, llenado y roscado de bidones. Construidas con
						acero inoxidable de alta calidad, nuestras líneas de
						producción abarcan capacidades desde 300 hasta 700
						bidones por hora.
					</p>
					<p className="text-gray-500 my-20 border-l-4 border-blue-400 px-2 rounded-sm mx-1">
						Tiempo de enjuague ajustable a su necesidad, asegurando
						una limpieza completa del interior. Esta operación
						asegura la sanitización del interior del bidón
						cumpliendo los standares de calidad.
					</p>
					<aside className="lg:p-10 sm:p-none rounded-lg my-10 bg-gray-100 shadow-lg ">
						{isLoading ? (
							<SkeletonVideo />
						) : (
							<BlurVideo
								video={cargador}
								urlYoutube="https://www.youtube.com/embed/KQ4Qwh-nuow?si=rFlpPyrepISuX-uY&autoplay=1&mute=0"
							/>
						)}
					</aside>
					<p className="text-gray-500 px-2  border-l-4 border-blue-400  my-20 mx-1">
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
