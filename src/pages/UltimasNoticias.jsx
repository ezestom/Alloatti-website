import { Base } from "../components/Base";
import { ImageGallery } from "../components/ImageGallery";
import { useTheme } from "../context/ThemeContext";
import file from "../pdf/Catalogo.pdf";
import imgCatalogo from "../assets/img/imgPDF.png";

export function UltimasNoticias() {
	const { isDarkTheme } = useTheme();
	return (
		<>
			<Base />
			<section
				className={`w-full absolute top-10 flex flex-col justify-center items-center ${
					isDarkTheme ? "bg-gray-900" : "bg-gray-50 "
				}`}>
				<article className="w-3/5 ml-[320px]">
					<div className="flex-col px-10 my-5 ">
						<h1
							className={`${
								isDarkTheme ? "text-white" : "text-gray-900"
							} mb-10 text-4xl  font-bold leading-none tracking-tight md:text-5xl lg:text-6xl `}>
							Diseñamos máquinas{" "}
							<span className="underline underline-offset-3 decoration-8 decoration-blue-400 dark:decoration-blue-600">
								innovadoras y capaces
							</span>{" "}
							de sanitizar y rellenar tus bidones, para su
							reutilización{" "}
						</h1>
						<p className="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">
							Here at Flowbite we focus on markets where
							technology, innovation, and capital can unlock
							long-term value and drive economic growth.
						</p>
					</div>
					<figure className="w-full flex flex-col justify-center items-center p-10 bg-gray-100 rounded-lg">
						<img
							src={imgCatalogo}
							alt="Imagen del catálogo"
							title="Catálogo"
							className="max-w-md rounded-lg my-5 h-auto"
						/>
						<p className="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400 py-5">
							Descarga nuestro catálogo en PDF para conocer más de nuestros productos y servicios.
						</p>
						<a
							download
							href={file}
							className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 inline-flex items-center ">
							<svg
								className="w-4 h-6 mr-2"
								aria-hidden="true"
								xmlns="http://www.w3.org/2000/svg"
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
							Descargar catálogo PDF
						</a>
					</figure>
					<div className="flex-col px-10 my-5 ">
						<p className="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">
							Here at Flowbite we focus on markets where
							technology, innovation, and capital can unlock
							long-term value and drive economic growth.
						</p>
					</div>
				</article>

				<ImageGallery />
			</section>
		</>
	);
}
