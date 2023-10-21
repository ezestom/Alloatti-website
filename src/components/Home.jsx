import { useEffect, useState } from "react";
import { useTheme } from "../context/ThemeContext";
import { SkeletonVideo } from "./VideoSkeleton";
import { WithClose } from "./WithClose";

export function Home() {
	const { isDarkTheme } = useTheme();
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		setTimeout(() => {
			setIsLoading(false);
		}, 1000);
	}, []);
	return (
		<>
			<WithClose />
			<section
				className={`w-full absolute top-10 flex justify-center items-center ${
					isDarkTheme ? "bg-gray-900" : "bg-gray-50 "
				}`}>
				<article className="w-3/5 lg:ml-[320px] sm:ml-0">
					<div className="flex-col lg:px-10 lg:my-5 ">
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

					<div className=" h-auto ">
						<div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16">
							<div className=" flex-col flex justify-between dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-8 md:p-12 mb-8">
								<span
									href="#"
									className="bg-blue-100 text-blue-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded-md dark:bg-gray-700 dark:text-blue-400 mb-2">
									<svg
										className="w-2.5 h-2.5 mr-1.5"
										aria-hidden="true"
										xmlns="http://www.w3.org/2000/svg"
										fill="currentColor"
										viewBox="0 0 20 14">
										<path d="M11 0H2a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm8.585 1.189a.994.994 0 0 0-.9-.138l-2.965.983a1 1 0 0 0-.685.949v8a1 1 0 0 0 .675.946l2.965 1.02a1.013 1.013 0 0 0 1.032-.242A1 1 0 0 0 20 12V2a1 1 0 0 0-.415-.811Z" />
									</svg>
									Inovación
								</span>
								<h1
									className={`${
										isDarkTheme
											? "text-white"
											: "text-gray-900"
									} text-3xl md:text-5xl font-extrabold mb-2`}>
									Compromiso con la calidad y la innovación
								</h1>

								<p className="text-lg font-normal text-gray-500 dark:text-gray-400 mb-6">
									Alloatti SRL es una fábrica de máquinas
									lavadoras y llenadoras para bidones
									retornables y descartables. En la misma
									desarrollan su labor operarios altamente
									capacitados y un área de ingeniería dedicada
									al diseño de proyectos, atención de
									consultas y asesoramiento.
								</p>

								{isLoading ? (
									<SkeletonVideo />
								) : (
									<iframe
										className="w-full aspect-video py-5 "
										src="https://www.youtube.com/embed/hgixpNYZd3w?si=h36skoRJ-xC9ie-0"
										title="YouTube video player"
										frameborder="0"
										allow="accelerometer; autoplay; clipboard-write ;  encrypted-media; gyroscope; picture-in-picture; web-share"
										allowfullscreen></iframe>
								)}
								<a
									href="#"
									className="inline-flex justify-center items-center py-2.5 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
									Ver más videos
									<svg
										className="w-3.5 h-3.5 ml-2"
										aria-hidden="true"
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 14 10">
										<path
											stroke="currentColor"
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="2"
											d="M1 5h12m0 0L9 1m4 4L9 9"
										/>
									</svg>
								</a>
							</div>
							<div className="grid md:grid-cols-2 gap-8">
								<div className=" flex-col flex justify-between  dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-8 md:p-12">
									<span
										href="#"
										className="bg-green-100 text-green-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded-md dark:bg-gray-700 dark:text-green-400 mb-2">
										<svg
											className="w-2.5 h-2.5 mr-1.5"
											aria-hidden="true"
											xmlns="http://www.w3.org/2000/svg"
											fill="currentColor"
											viewBox="0 0 18 18">
											<path d="M17 11h-2.722L8 17.278a5.512 5.512 0 0 1-.9.722H17a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1ZM6 0H1a1 1 0 0 0-1 1v13.5a3.5 3.5 0 1 0 7 0V1a1 1 0 0 0-1-1ZM3.5 15.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2ZM16.132 4.9 12.6 1.368a1 1 0 0 0-1.414 0L9 3.55v9.9l7.132-7.132a1 1 0 0 0 0-1.418Z" />
										</svg>
										Diseño
									</span>
									<h2
										className={`${
											isDarkTheme
												? "text-white"
												: "text-gray-900"
										} text-3xl font-extrabold mb-2`}>
										Pioneros en el desarrollo de máquinas
										lavadoras
									</h2>
									<p className="text-lg font-normal text-gray-500 dark:text-gray-400 mb-4">
										Cuenta con personal técnico
										especializado en la instalación y en el
										service de los equipos. Ello le ha
										permitido el reconocimiento tanto en el
										mercado local como en el regional, dado
										que sus productos se exportan desde el
										año 2000 a toda latinoamérica.
									</p>
									<a
										href="#"
										className="inline-flex justify-center items-center py-2.5 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
										Más información
										<svg
											className="w-3.5 h-3.5 ml-2"
											aria-hidden="true"
											xmlns="http://www.w3.org/2000/svg"
											fill="none"
											viewBox="0 0 14 10">
											<path
												stroke="currentColor"
												stroke-linecap="round"
												stroke-linejoin="round"
												stroke-width="2"
												d="M1 5h12m0 0L9 1m4 4L9 9"
											/>
										</svg>
									</a>
								</div>
								<div className=" flex-col flex justify-start  dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-8 md:p-12">
									<span
										href="#"
										className="bg-purple-100 text-purple-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded-md dark:bg-gray-700 dark:text-purple-400 mb-2">
										<svg
											className="w-2.5 h-2.5 mr-1.5"
											aria-hidden="true"
											xmlns="http://www.w3.org/2000/svg"
											fill="none"
											viewBox="0 0 20 16">
											<path
												stroke="currentColor"
												stroke-linecap="round"
												stroke-linejoin="round"
												stroke-width="2"
												d="M5 4 1 8l4 4m10-8 4 4-4 4M11 1 9 15"
											/>
										</svg>
										Profesional
									</span>
									<h2
										className={`${
											isDarkTheme
												? "text-white"
												: "text-gray-900"
										} text-3xl font-extrabold mb-2`}>
										Best react libraries around the web
									</h2>
									<p className="text-lg font-normal text-gray-500 dark:text-gray-400 mb-4">
										Normas IVESS Estamos desarrollando
										líneas bajo normas IVESS, manteniéndonos
										siempre el camino de la calidad y la
										innovación. Normas IVESS Estamos
										desarrollando líneas bajo normas IVESS,
										manteniéndonos siempre el camino de la
										calidad y la innovación.
									</p>
									<a
										href="#"
										className="inline-flex justify-center items-center py-2.5 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
										Ir a nuestras normas Ivess
										<svg
											className="w-3.5 h-3.5 ml-2"
											aria-hidden="true"
											xmlns="http://www.w3.org/2000/svg"
											fill="none"
											viewBox="0 0 14 10">
											<path
												stroke="currentColor"
												stroke-linecap="round"
												stroke-linejoin="round"
												stroke-width="2"
												d="M1 5h12m0 0L9 1m4 4L9 9"
											/>
										</svg>
									</a>
								</div>
							</div>
						</div>
						<div className="w-full flex justify-center items-center "></div>
					</div>
				</article>
			</section>
		</>
	);
}
