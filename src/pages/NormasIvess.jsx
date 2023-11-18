import { Base } from "../components/Base";
import { useTheme } from "../context/ThemeContext";
import familia from "../img/familia.avif";

export function NormasIvess() {
	const { isDarkTheme } = useTheme();
	return (
		<>
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
							className="m-1"
							width="15"
							height="15"
							viewBox="0 0 24 24">
							<path
								fill="#4f46e5"
								d="M12 22q-3.425 0-5.713-2.35T4 13.8q0-1.55.7-3.1t1.75-2.975Q7.5 6.3 8.725 5.05T11 2.875q.2-.2.463-.287T12 2.5q.275 0 .537.088t.463.287q1.05.925 2.275 2.175t2.275 2.675Q18.6 9.15 19.3 10.7t.7 3.1q0 3.5-2.288 5.85T12 22Zm.275-3q.3-.025.513-.238T13 18.25q0-.35-.225-.563T12.2 17.5q-1.025.075-2.175-.563t-1.45-2.312q-.05-.275-.262-.45T7.825 14q-.35 0-.575.263t-.15.612q.425 2.275 2 3.25t3.175.875Z"
							/>
						</svg>
						Normas Eras para consumo de agua
					</span>
					<h1 className="md:text-5xl flex py-5 my-5 text-dark bg-gray-200 rounded-lg font-extrabold shadow-md   ">
						<svg
							className="mx-1"
							width="45"
							height="45"
							viewBox="0 0 24 24">
							<path
								fill="#000000"
								d="M2 18v-2q.95 0 1.413-.5T5.35 15q1.475 0 1.938.5t1.362.5q.95 0 1.413-.5T12 15q1.425 0 1.938.5t1.412.5q.95 0 1.388-.5t1.912-.5q1.475 0 1.938.5T22 16v2q-1.425 0-1.937-.5T18.65 17q-.9 0-1.362.5t-1.938.5q-1.425 0-1.937-.5T12 17q-.95 0-1.413.5T8.65 18q-1.475 0-1.913-.5T5.35 17q-.95 0-1.412.5T2 18Zm0-4v-2q.95 0 1.413-.5T5.35 11q1.425 0 1.913.5t1.387.5q.95 0 1.412-.5T12 11q1.425 0 1.925.5t1.375.5q.95 0 1.412-.5t1.938-.5q1.425 0 1.938.5T22 12v2q-1.475 0-1.963-.5T18.65 13q-.9 0-1.362.5t-1.938.5q-1.425 0-1.937-.5T12 13q-.95 0-1.388.5T8.7 14q-1.475 0-1.962-.5T5.35 13q-.9 0-1.412.5T2 14Zm0-4V8q.95 0 1.413-.5T5.35 7q1.425 0 1.913.5T8.65 8q.95 0 1.412-.5T12 7q1.425 0 1.925.5T15.3 8q.95 0 1.412-.5T18.65 7q1.425 0 1.938.5T22 8v2q-1.475 0-1.963-.5T18.65 9q-.9 0-1.362.5t-1.938.5q-1.425 0-1.937-.5T12 9q-.95 0-1.388.5T8.7 10q-1.475 0-1.962-.5T5.35 9q-.9 0-1.412.5T2 10Z"
							/>
						</svg>
						Normas de calidad ERAS
					</h1>
					<p className="my-5 px-2 text-1xl text-gray-500 md:text-xl dark:text-gray-400">
						En relación a la calidad del agua potable se han
						establecido parámetros físicos, químicos y
						bacteriológicos similares a los recomendados por la
						Organización Mundial de la Salud. La Concesionaria debe
						garantizar la calidad del agua suministrada a los
						Usuarios verificando, mediante una serie sistemática de
						controles físicos, químicos y bacteriológicos, que los
						niveles estén dentro de los límites establecidos en el
						Anexo A del Marco Regulatorio – Ley Nº 26.221.
					</p>
					<p className="text-gray-500 dark:text-gray-400 border-l-4 border-blue-400 px-2 my-5">
						El ERAS por su parte fiscaliza dicho control,
						verificando el cumplimiento del control de la
						Concesionaria AySA, realizando análisis y mediciones
						propios para verificar puntualmente la calidad del
						servicio. El ERAS también verifica mediante un muestreo
						de la información el seguimiento de eventuales anomalías
						de calidad determinadas por AySA.
					</p>
					<div className="flex flex-col justify-center  items-center ">
						<img
							src={familia}
							alt="Imagen ivess"
							className="h-auto rounded-lg my-10 "
						/>
						<p className="my-8 text-lg text-gray-500 md:text-xl dark:text-gray-400">
							Las estrictas NORMAS IVESS, creadas por el
							prestigioso grupo de profesionales sanitaristas,
							químicos y arquitectos, incursionaron en todas las
							áreas de la manufactura y abarcaron: la renovación o
							construcción total de las plantas, el tratamiento
							del agua, la renovación de envases y vehículos, la
							capacitación del personal. Las NORMAS IVESS están
							específicamente enfocadas a las buenas prácticas de
							tratamiento, elaboración y envasado del agua por sus
							asociados, y en la llegada del producto al
							consumidor en perfecto estado de conservación y
							aptitud para su consumo. Sin perjuicio de ello, las
							normas también cubren aspectos no menos importantes,
							como instalaciones e infraestructura de planta y
							edilicia, control de vehículos, etcétera. Es
							necesario destacar que las Normas IVESS no solo
							cumplen con lo exigido por el Código Alimentario
							Argentino, sino que, en varios aspectos, son aún más
							exigentes. Así nació IVESS, con un objetivo muy
							claro: “la búsqueda permanente de la excelencia”
						</p>
					</div>
				</article>
			</section>
		</>
	);
}
