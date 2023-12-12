import { Link } from "react-router-dom";
import { Base } from "../components/Base";
import { useTheme } from "../context/ThemeContext";
import imgCatalogo from "../img/imgPDF.png";
import infobae from "../img/infobae.png";

export function UltimasNoticias() {
	const { isDarkTheme } = useTheme();
	return (
		<>
			<Base />
			<section
				className={`w-full absolute top-10 flex justify-center items-center px-1 ${
					isDarkTheme ? "bg-gray-900" : "bg-gray-50 "
				}`}>
				<article className="lg:w-3/5 lg:ml-[320px] sm:ml-0">
					<div className="flex-col px-2">
						<h1
							className={`${
								isDarkTheme ? "text-white" : "text-gray-900"
							} mb-10 text-4xl  font-bold leading-none tracking-tight md:text-5xl lg:text-6xl `}>
							Obtén más detalles sobre nuestra estrategia de
							ventas{" "}
							<span className="underline underline-offset-3 decoration-8 decoration-blue-400 dark:decoration-blue-600">
								descargando nuestro catálogo de productos{" "}
							</span>{" "}
						</h1>
						<p className="text-lg font-normal text-gray-500 lg:text-xl border-l-4 border-blue-400  px-2 rounded-lg">
							Descubre una amplia gama de información que te
							permitirá explorar a fondo lo que ofrecemos.
						</p>
					</div>
					<figure className="w-full py-20 my-10  flex flex-col justify-center items-center   bg-gray-100 rounded-lg shadow-lg">
						<img
							src={imgCatalogo}
							alt="Imagen del catálogo"
							title="Catálogo de productos"
							className=" rounded-lg  h-auto shadow-lg "
						/>
						<p className="text-lg font-normal text-gray-500 lg:text-xl text-center py-5">
							Ver presentación con información detallada de los
							productos que ofrecemos y sus características.
						</p>
						<Link
							target="_blank"
							to="https://docs.google.com/presentation/d/1V037vKTmnGZCmRs8LkFWctZsFL3bLrEUZFudSfnOZbA/edit?usp=sharing"
							className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 inline-flex items-center gap-1 ">
							Descargar catálogo PDF{" "}
							<svg
								className="w-4 "
								aria-hidden="true"
								fill="none"
								viewBox="0 0 16 18">
								<path
									stroke="currentColor"
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M8 1v11m0 0 4-4m-4 4L4 8m11 4v3a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-3"
								/>
							</svg>
						</Link>
					</figure>
					<p className="text-lg font-normal text-gray-500 lg:text-xl  border-l-4 border-blue-400  px-2 rounded-lg">
						Además, te invitamos a leer la nota que realizó el
						periódico Infobae sobre la importancia del agua en
						nuestras vidas.
					</p>
					<figure className="w-full py-20 my-10 flex flex-col justify-center items-center  bg-gray-100 rounded-lg shadow-lg">
						<img
							src={infobae}
							alt="Imagen de la noticia"
							title="Catálogo de productos"
							className=" rounded-lg  h-auto  shadow-lg "
						/>
						<p className="text-lg font-normal text-gray-500 lg:text-xl text-center py-5">
							Vea la nota completa en el siguiente enlace
						</p>
						<Link
							target="_blank"
							to="https://www.infobae.com/def/desarrollo/2019/12/21/agua-envasada-verdadera-fuente-de-salud-o-solo-marketing/"
							className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 inline-flex items-center ">
							Ir a la noticia {"->"}
						</Link>
					</figure>
				</article>
			</section>
		</>
	);
}
