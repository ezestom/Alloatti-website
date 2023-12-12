import { useEffect, useState } from "react";
import { useTheme } from "../context/ThemeContext";
import { SkeletonVideo } from "./VideoSkeleton";
import { WithClose } from "./WithClose";
import { Link } from "react-router-dom";
import logo from "../img/Alloatti-logo-dark.png";
import { LogoCelular } from "./LogoCelular";

export function Home() {
	const { isDarkTheme } = useTheme();
	const [isLoading, setIsLoading] = useState(true);

	const handleClick = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	};

	useEffect(() => {
		setTimeout(() => {
			setIsLoading(false);
		}, 1000);
	}, []);
	return (
		<>
			<WithClose />
			<section
				className={`w-full absolute top-8 flex justify-center items-center px-1 ${
					isDarkTheme ? "bg-gray-900" : "bg-gray-50 "
				}`}>
				<article className="lg:w-3/5 lg:ml-[320px] sm:ml-0">
					<div className="flex-col px-2 mt-1">
						<LogoCelular />

						<h1
							className={`${
								isDarkTheme ? "text-white" : "text-gray-900"
							} mb-10 text-4xl  font-bold leading-none tracking-tight md:text-5xl lg:text-6xl `}>
							Líderes en innovación de{" "}
							<span className="underline underline-offset-3 decoration-8 decoration-blue-400">
								{" "}
								máquinas lavadoras, enjuagadoras, llenadoras y
								tapadoras{" "}
							</span>{" "}
							de bidones de agua potable{" "}
						</h1>
						<p className="text-lg border-l-4 border-blue-400  px-2 font-normal text-gray-500 lg:text-xl dark:text-gray-400 rounded-lg">
							Elevando estándares, garantizando pureza: tu socio
							en transformación industrial. Con tecnología
							vanguardista y compromiso incansable, creamos el
							futuro de la producción de agua potable.
						</p>
					</div>

					<div className=" h-auto ">
						<div className="p-1 m-10 mx-auto max-w-screen-xl ">
							<div className=" flex-col flex justify-between dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-4 md:p-12 mb-8">
								<span
									href="#"
									className="bg-blue-100 text-blue-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded-md dark:bg-gray-700 dark:text-blue-400 mb-2">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										className="icon icon-tabler icon-tabler-bulb"
										width="24"
										height="24"
										viewBox="0 0 30 30"
										stroke="currentColor"
										strokeWidth="1.5"
										strokeLinecap="round"
										strokeLinejoin="round"
										fill="none">
										<path
											stroke="none"
											d="M0 0h24v24H0z"
											fill="none"
										/>
										<path d="M3 12h1m8 -9v1m8 8h1m-15.4 -6.4l.7 .7m12.1 -.7l-.7 .7" />
										<path d="M9 16a5 5 0 1 1 6 0a3.5 3.5 0 0 0 -1 3a2 2 0 0 1 -4 0a3.5 3.5 0 0 0 -1 -3" />
										<path d="M9.7 17l4.6 0" />
									</svg>
									Innovación
								</span>
								<h1
									className={`${
										isDarkTheme
											? "text-white"
											: "text-gray-900"
									} text-3xl md:text-5xl font-extrabold mb-2`}>
									Ofrecemos soluciones personalizadas para tus
									necesidades de producción
								</h1>

								<p className="text-lg font-normal text-gray-500 dark:text-gray-400 mb-6">
									Alloatti SRL, líder con más de 30 años en
									maquinaria para bidones de agua. Innovamos
									con tecnología avanzada, ofreciendo
									soluciones personalizadas y calidad
									excepcional. Forjamos el futuro de la
									industria, convirtiendo cada gota en
									excelencia y eficiencia incomparable.
								</p>

								{isLoading ? (
									<SkeletonVideo />
								) : (
									<iframe
										className="w-full aspect-video py-5 rounded-lg "
										src="https://www.youtube.com/embed/xYFHJshns2s?si=09RVGlF8yk2FxqWH"
										title="YouTube video player"
										allow="accelerometer; autoplay; clipboard-write ;  encrypted-media; gyroscope; picture-in-picture; web-share"
										allowfullscreen></iframe>
								)}
								<a
									href="https://www.youtube.com/@AlloattiSRL"
									rel="noopener noreferrer"
									target="_blank"
									className="inline-flex justify-center items-center py-2.5 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300">
									Ver más videos en YouTube
									<svg
										className="w-3.5 h-3.5 ml-2"
										aria-hidden="true"
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 14 10">
										<path
											stroke="currentColor"
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="2"
											d="M1 5h12m0 0L9 1m4 4L9 9"
										/>
									</svg>
								</a>
							</div>
							<div className="grid md:grid-cols-2 gap-8">
								{/* sección 1 */}
								<div className=" flex-col flex justify-between  dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-4 md:p-12">
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
										Carácteristicas de las máquinas de
										bidones retornables
									</span>
									<h2
										className={`${
											isDarkTheme
												? "text-white"
												: "text-gray-900"
										} text-3xl font-extrabold mb-2`}>
										Características que destacan nuestras
										máquinas de bidones retornables
									</h2>
									<div className="text-m font-normal text-gray-500 dark:text-gray-400 mb-4">
										<p className="mb-2">
											&#8226; Tiempo en lavado: 120
											segundos
										</p>
										<p className="mb-2">
											&#8226; Picos de lavado exterior
											rotativos
										</p>
										<p className="mb-2">
											&#8226; Puertas accionadas
											neumáticamente
										</p>
										<p className="mb-2">
											&#8226; Soportes abiertos para
											bidones
										</p>
										<p className="mb-2">
											&#8226; Pantalla táctil para
											operación y control
										</p>
										<p className="mb-2">
											&#8226; Proceso de saneado
										</p>
										<p className="mb-2">
											&#8226; Registro de producción y
											saneado
										</p>
										<p className="mb-2">
											&#8226; Diagnóstico inteligente de
											eventuales fallas
										</p>
									</div>

									<Link
										to="/bidones-retornables"
										onClick={handleClick}
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
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth="2"
												d="M1 5h12m0 0L9 1m4 4L9 9"
											/>
										</svg>
									</Link>
								</div>
								{/* sección 2 */}
								<div className=" flex-col flex justify-start  dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-8 md:p-12">
									<span
										href="#"
										className="bg-purple-100 text-purple-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded-md dark:bg-gray-700 dark:text-purple-400 mb-2">
										<svg
											className="w-2.5 h-2.5 mr-1.5"
											aria-hidden="true"
											xmlns="http://www.w3.org/2000/svg"
											fill="currentColor"
											viewBox="0 0 18 18">
											<path d="M17 11h-2.722L8 17.278a5.512 5.512 0 0 1-.9.722H17a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1ZM6 0H1a1 1 0 0 0-1 1v13.5a3.5 3.5 0 1 0 7 0V1a1 1 0 0 0-1-1ZM3.5 15.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2ZM16.132 4.9 12.6 1.368a1 1 0 0 0-1.414 0L9 3.55v9.9l7.132-7.132a1 1 0 0 0 0-1.418Z" />
										</svg>
										Carácteristicas de las máquinas de
										bidones descartables
									</span>
									<h2
										className={`${
											isDarkTheme
												? "text-white"
												: "text-gray-900"
										} text-3xl font-extrabold mb-2`}>
										Características que destacan nuestras
										máquinas de bidones descartables
									</h2>
									<div className="text-m font-normal text-gray-500 dark:text-gray-400 mb-4">
										<p className="mb-2">
											&#8226; Sacatapas automático y
											sacatapas manual
										</p>
										<p className="mb-2">
											&#8226; Alimentador automático para
											500 tapas
										</p>
										<p className="mb-2">
											&#8226; Cargador automático de
											bidones vacíos
										</p>
										<p className="mb-2">
											&#8226; Precintador automático
										</p>
										<p className="mb-2">
											&#8226; Pantalla con conectividad a
											internet y app de celular
										</p>
										<p className="mb-2">
											&#8226; Pre lavadora con cepillos
											automáticos
										</p>
										<p className="mb-2">
											<br />
										</p>
										<p className="mb-2">
											<br />
										</p>
									</div>

									<Link
										onClick={handleClick}
										to="/bidones-descartables"
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
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth="2"
												d="M1 5h12m0 0L9 1m4 4L9 9"
											/>
										</svg>
									</Link>
								</div>
								{/* sección 3 */}
								<div className=" flex-col flex justify-start  dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-8 md:p-12">
									<span
										href="#"
										className="bg-yellow-100 text-yellow-900 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded-md  mb-2">
										<svg
											className="w-2.5 h-2.5 mr-1.5"
											aria-hidden="true"
											xmlns="http://www.w3.org/2000/svg"
											fill="none"
											viewBox="0 0 20 16">
											<path
												stroke="currentColor"
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth="2"
												d="M5 4 1 8l4 4m10-8 4 4-4 4M11 1 9 15"
											/>
										</svg>
										Carácteristicas de los accesorios
										mecanizados
									</span>
									<h2
										className={`${
											isDarkTheme
												? "text-white"
												: "text-gray-900"
										} text-3xl font-extrabold mb-2`}>
										Potencie al máximo su máquina con estos
										imprescindibles accesorios
									</h2>
									<div className="text-m font-normal text-gray-500 dark:text-gray-400 mb-4">
										<p className="mb-2">
											&#8226; Sacatapas automático y
											sacatapas manual
										</p>
										<p className="mb-2">
											&#8226; Alimentador automático para
											500 tapas
										</p>
										<p className="mb-2">
											&#8226; Cargador automático de
											bidones vacíos
										</p>
										<p className="mb-2">
											&#8226; Precintador automático
										</p>
										<p className="mb-2">
											&#8226; Cargador automático de
											bidones en racks
										</p>
										<p className="mb-2">
											&#8226; Lavadora con cepillos
											automática
										</p>
										<p className="mb-2">
											<br />
										</p>
										<p className="mb-2">
											<br />
										</p>
									</div>

									<Link
										onClick={handleClick}
										to="/accesorios"
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
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth="2"
												d="M1 5h12m0 0L9 1m4 4L9 9"
											/>
										</svg>
									</Link>
								</div>
								{/* sección 4 */}
								<div className=" flex-col flex justify-start  dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-8 md:p-12">
									<span
										href="#"
										className="bg-red-100 text-red-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded-md mb-2">
										<svg
											className="w-2.5 h-2.5 mr-1.5"
											aria-hidden="true"
											xmlns="http://www.w3.org/2000/svg"
											fill="none"
											viewBox="0 0 20 16">
											<path
												stroke="currentColor"
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth="2"
												d="M5 4 1 8l4 4m10-8 4 4-4 4M11 1 9 15"
											/>
										</svg>
										Próximanente innovación en máquinaria
									</span>
									<h2
										className={`${
											isDarkTheme
												? "text-white"
												: "text-gray-900"
										} text-3xl font-extrabold mb-2`}>
										Sección en producción...
									</h2>
									<div className="text-m font-normal text-gray-500 dark:text-gray-400 mb-4">
										{/* <p className="mb-2">
											&#8226; Sacatapas automático y
											sacatapas manual
										</p>
										<p className="mb-2">
											&#8226; Alimentador automático para
											500 tapas
										</p>
										<p className="mb-2">
											&#8226; Cargador automático de
											bidones vacíos
										</p>
										<p className="mb-2">
											&#8226; Precintador automático
										</p>
										<p className="mb-2">
											&#8226; Cargador automático de
											bidones en racks
										</p>
										<p className="mb-2">
											&#8226; Lavadora con cepillos
											automática
										</p>
										<p className="mb-2">
											<br />
										</p>
										<p className="mb-2">
											<br />
										</p> */}
										<picture className=" opacity-20 h-full w-full flex justify-center items-center">
											<img
												className="py-20 w-auto h-auto"
												src={logo}
												alt=""
											/>
										</picture>{" "}
									</div>

									<Link
										onClick={handleClick}
										to="#"
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
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth="2"
												d="M1 5h12m0 0L9 1m4 4L9 9"
											/>
										</svg>
									</Link>
								</div>
							</div>
						</div>
					</div>
				</article>
			</section>
		</>
	);
}
