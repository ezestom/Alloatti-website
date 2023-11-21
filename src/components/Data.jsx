import { useTheme } from "../context/ThemeContext";

export function Data() {
	const { isDarkTheme } = useTheme();
	return (
		<section className="bg-transparent">
			<div className="mx-auto max-w-screen-xl my-10 py-12 sm:px-6 md:py-16 lg:px-8 border border-gray-100 rounded-lg shadow-md">
				<div
					className={`${
						isDarkTheme ? "text-white" : "text-gray-900"
					} mx-auto text-center max-w-4xl  my-10  '}`}>
					<h2 className=" font-bold md:text-5xl">
						Manteniendo la confianza de nuestros clientes
					</h2>
					<p className="mt-4 text-gray-500 sm:text-xl">
						Estamos orgullosos de haber brindado un servicio de
						calidad a nuestros clientes durante más de 30 años.
						Estos son algunos de nuestros logros.
					</p>
				</div>

				<div className="mt-8 sm:mt-12 ">
					<dl className="grid grid-cols-1 gap-4 sm:grid-cols-3 ">
						<div className="flex flex-col rounded-lg border border-gray-100 px-4 py-8 text-center shadow-md ">
							<dt className="order-last text-lg font-medium text-gray-500">
								Ventas Anuales
							</dt>

							<dd className="text-4xl font-extrabold text-blue-600 md:text-5xl">
								+$4.8m
							</dd>
						</div>

						<div className="flex flex-col rounded-lg border border-gray-100 px-4 py-8 text-center shadow-md">
							<dt className="order-last text-lg font-medium text-gray-500">
								Máquinas Vendidas
							</dt>

							<dd className="text-4xl font-extrabold text-blue-600 md:text-5xl">
								+300
							</dd>
						</div>

						<div className="flex flex-col rounded-lg border border-gray-100 px-4 py-8 text-center shadow-md">
							<dt className="order-last text-lg font-medium text-gray-500">
								Clientes Satisfechos
							</dt>

							<dd className="text-4xl font-extrabold text-blue-600 md:text-5xl">
								+500
							</dd>
						</div>
					</dl>
				</div>
			</div>
		</section>
	);
}
