import { useTheme } from "../context/ThemeContext";

export function Data() {
	const { isDarkTheme } = useTheme();
	return (
		<section className="bg-transparent">
			<div className="mx-auto max-w-screen-xl my-10 py-12 sm:px-6 md:py-16 lg:px-8 border border-gray-200  rounded-lg shadow-md  bg-gradient-to-r from-cyan-400 to-blue-500 ">
				<div className="text-white mx-auto text-center max-w-4xl  my-10 ">
					<h2 className=" font-bold md:text-5xl">
						Manteniendo la confianza de nuestros clientes
					</h2>
					<p className="mt-4  sm:text-xl">
						Estamos orgullosos de haber brindado un servicio de
						calidad a nuestros clientes durante más de 30 años.
						Estos son algunos de nuestros logros.
					</p>
				</div>

				<div className="mt-8 sm:mt-12 ">
					<dl className="grid grid-cols-1 gap-4 sm:grid-cols-3 ">
						<div className="flex flex-col rounded-lg border border-gray-200 px-4 py-8 text-center shadow-md mx-8  ">
							<dt className="order-last text-lg font-medium text-white">
								Países Alcanzados
							</dt>

							<dd className="text-4xl font-extrabold text-blue-600 md:text-5xl">
								+5
							</dd>
						</div>

						<div className="flex flex-col rounded-lg border border-gray-200 px-4 py-8 text-center shadow-md mx-8 ">
							<dt className="order-last text-lg font-medium text-white">
								Máquinas Vendidas
							</dt>

							<dd className="text-4xl font-extrabold text-blue-600 md:text-5xl">
								+600
							</dd>
						</div>

						<div className="flex flex-col rounded-lg border border-gray-200 px-4 py-8 text-center shadow-md mx-8 ">
							<dt className="order-last text-lg font-medium text-white">
								Clientes Satisfechos
							</dt>

							<dd className="text-4xl font-extrabold text-blue-600 md:text-5xl">
								+400
							</dd>
						</div>
					</dl>
				</div>
			</div>
		</section>
	);
}
