import maquina2 from "../../src/assets/img/waterjet.jpg";
import { useTheme } from "../context/ThemeContext";
import mujer from "../../src/assets/img/mujer-bidon.png";

export function Principal() {
	const { isDarkTheme } = useTheme();

	return (
		<section
			className={`absolute bottom-10 right-20 w-2/3 h-2/3 ${
				isDarkTheme ? "bg-gray-800" : "bg-gray-100"
			}`}>
			{/* Marquee Text */}
			<article>
				<div className="  sm:px-6 lg:px-8">
					<div className="grid  grid-cols-1 gap-4 md:grid-cols-2">
						<div
							className={
								isDarkTheme ? "text-white " : "text-black"
							}>
							<div className="h-auto mx-auto max-w-xl text-center flex justify-center items-center flex-col">
								<h2 className=" font-bold mx:text-4xl md:text-3xl sm:text-2xl">
									Innovación y Excelencia en Envasadoras y
									Lavadoras de Bidones de Agua Purificada y
									Mineral Natural
								</h2>

								<p
									className={
										isDarkTheme
											? "text-white/90 sm:mt-4 sm:block"
											: "sm:mt-4 sm:block "
									}>
									Somos la empresa líder en la fabricación de
									maquinaria de envasado y lavado de bidones
									de agua. Nuestros equipos, diseñados con
									innovación y precisión, garantizan la máxima
									eficiencia y seguridad alimentaria. Confíe
									en nuestra experiencia y tecnología de
									vanguardia para optimizar su producción y
									asegurar la calidad de sus productos.
								</p>

								<div className="mt-4 md:mt-8">
									<a
										href="#"
										className={`flex items-center gap-2 rounded-lg border border-white bg-white px-8 py-2 text-gray-800 shadow-md transition-all hover:bg-gray-900 hover:text-white focus:outline-none focus:ring focus:ring-indigo-600 focus:ring-opacity-50 active:	bg-gray-100/90"`}>
										Ver formulario del producto
										<svg
											className="h-5 w-5 rtl:rotate-180"
											xmlns="http://www.w3.org/2000/svg"
											fill="none"
											viewBox="0 0 24 24"
											stroke="currentColor">
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth={2}
												d="M17 8l4 4m0 0l-4 4m4-4H3"
											/>
										</svg>
									</a>
								</div>
							</div>
						</div>

						<div className="grid grid-cols-2 gap-4 md:grid-cols-1 lg:grid-cols-2">
							<img
								alt="Student"
								src={mujer}
								className="h-40 w-full object-cover sm:h-56 md:h-full"
							/>

							<img
								alt="Student"
								src={maquina2}
								className="h-40 w-full object-cover sm:h-56 md:h-full rounded-lg"
							/>
						</div>
					</div>
				</div>
			</article>
		</section>
	);
}
