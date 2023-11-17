import { Base } from "../components/Base";
import { useTheme } from "../context/ThemeContext";
import { Table } from "../components/Table";
import { FaPrescriptionBottle } from "react-icons/fa";

export function BidonesRetornables() {
	const { isDarkTheme } = useTheme();
	return (
		<section>
			<Base />
			<section
				className={`w-full absolute top-10 flex justify-center items-center  ${
					isDarkTheme ? "bg-gray-900" : "bg-gray-50 "
				}`}>
				<article className="lg:w-3/5 lg:ml-[320px] sm:ml-0">
					<span
						href="#"
						className="bg-blue-100 pl-2 text-blue-800 text-xs font-medium flex items-center  py-0.5 rounded-md dark:bg-gray-700 dark:text-blue-400 mb-2">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="icon icon-tabler icon-tabler-building-factory-2"
							width="24"
							height="24"
							viewBox="0 0 30 30"
							stroke-width="2"
							stroke="currentColor"
							fill="none"
							stroke-linecap="round"
							stroke-linejoin="round">
							<path stroke="none" d="M0 0h24v24H0z" fill="none" />
							<path d="M3 21h18" />
							<path d="M5 21v-12l5 4v-4l5 4h4" />
							<path d="M19 21v-8l-1.436 -9.574a.5 .5 0 0 0 -.495 -.426h-1.145a.5 .5 0 0 0 -.494 .418l-1.43 8.582" />
							<path d="M9 17h1" />
							<path d="M14 17h1" />
						</svg>
						Máquinas automáticas
					</span>
					<h1 className="md:text-5xl flex py-5 my-5 text-blue-900 bg-gray-200 rounded-lg font-extrabold shadow-md ">
						<FaPrescriptionBottle /> Para bidones retornables
					</h1>
					<p className="my-5 px-2 text-1xl text-gray-500 md:text-xl dark:text-gray-400">
						Nuestras avanzadas líneas para bidones retornables
						representan la excelencia en maquinaria dedicada al
						lavado, enjuague, llenado y tapado de bidones.
						Construidas con acero inoxidable de alta calidad,
						nuestras líneas de producción abarcan capacidades desde
						120 bidones por hora hasta 960 bidones por hora.
					</p>
					<p className="text-gray-500 dark:text-gray-400 border-l-4 border-blue-400 px-2 my-5">
						Garantizamos un tiempo de lavado total de 2 minutos para
						cada bidón, asegurando una limpieza completa tanto en el
						interior como en el exterior, incluyendo la boca del
						bidón. Esta eficiente operación maximiza la efectividad
						del lavado y cumple con los más altos estándares de
						higiene.
					</p>
					<aside className="lg:p-10 sm:p-none rounded-lg my-10 bg-gray-100 shadow-lg ">
						<iframe
							className="w-full aspect-video py-5 rounded-lg "
							src="https://www.youtube.com/embed/X-KcX6Jqlik?si=pG5fpLAkR3vwWMGL"
							title="YouTube video player"
							frameborder="0"
							allow="accelerometer; autoplay; muted; clipboard-write ;  encrypted-media; gyroscope; picture-in-picture; web-share"
							allowfullscreen></iframe>
					</aside>
					<p className="text-gray-500 dark:text-gray-400 px-2">
						Adicionalmente, hemos diseñado nuestras líneas para
						prevenir el contacto directo entre la boca del bidón y
						el pico de llenado, eliminando cualquier posibilidad de
						contaminación del bidón. En Alloatti, nos comprometemos
						a ofrecer soluciones de calidad que garanticen la
						seguridad y pureza de cada bidón procesado.
					</p>
					<figure className="my-10"><Table /> </figure>
				</article>
			</section>
		</section>
	);
}
