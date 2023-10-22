import { Base } from "../components/Base";
import { useTheme } from "../context/ThemeContext";
import img from "../assets/img/ivess.png";

export function NormasIvess() {
	const { isDarkTheme } = useTheme();
	return (
		<>
			<Base />
			<section
				className={`w-full absolute top-10 flex justify-center items-center px-1 ${
					isDarkTheme ? "bg-gray-900" : "bg-gray-50 "
				}`}>
				<article className="lg:w-3/5 lg:ml-[320px] sm:ml-0">
					<span
						href="#"
						className="bg-violet-100 text-violet-800 text-xs font-medium flex items-center px-2.5 py-0.5 rounded-md dark:bg-gray-700 dark:text-blue-400 mb-2">
						<svg
							className="w-2.5 h-2.5 mr-1.5"
							aria-hidden="true"
							xmlns="http://www.w3.org/2000/svg"
							fill="currentColor"
							viewBox="0 0 20 14">
							<path d="M11 0H2a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm8.585 1.189a.994.994 0 0 0-.9-.138l-2.965.983a1 1 0 0 0-.685.949v8a1 1 0 0 0 .675.946l2.965 1.02a1.013 1.013 0 0 0 1.032-.242A1 1 0 0 0 20 12V2a1 1 0 0 0-.415-.811Z" />
						</svg>
						Calidad
					</span>
					<h1 className="text-5xl py-2 mb-5 text-blue-700 bg-gray-200 pl-3 rounded-lg font-extrabold">
						Normas IVESS
					</h1>
					<div className="flex flex-col justify-center items-center ">
						<img
							src={img}
							alt="Imagen ivess"
							className="max-w-md"
						/>
						<p className="mb-3 text-lg text-gray-500 md:text-xl dark:text-gray-400">
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
