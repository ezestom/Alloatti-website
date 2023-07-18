import maquina from "../../src/assets/img/gallon-water.jpg";
import maquina2 from "../../src/assets/img/waterjet.jpg";

export function Main() {
	return (
		<section>
			<section>
				<div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
					<div className="grid grid-cols-1 gap-4 md:grid-cols-2">
						<div className="bg-slate-800  rounded p-8 md:p-12 lg:px-16 lg:py-24">
							<div className="mx-auto max-w-xl text-center">
								<h2 className="text-2xl font-bold text-white md:text-3xl">
									Innovación y Excelencia en Envasadoras y
									Lavadoras de Bidones de Agua
								</h2>

								<p className="hidden text-white/90 sm:mt-4 sm:block">
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
										className="inline-block rounded border border-white bg-white px-12 py-3 text-sm font-medium text-slate-900 transition hover:bg-transparent hover:text-white focus:outline-none focus:ring focus:ring-yellow-400">
										Ver formulario del producto
									</a>
								</div>
							</div>
						</div>

						<div className="grid grid-cols-2 gap-4 md:grid-cols-1 lg:grid-cols-2">
							<img
								alt="Student"
								src={maquina}
								className="h-40 w-full object-cover sm:h-56 md:h-full"
							/>

							<img
								alt="Student"
								src={maquina2}
								className="h-40 w-full object-cover sm:h-56 md:h-full"
							/>
						</div>
					</div>
				</div>
			</section>
		</section>
	);
}
