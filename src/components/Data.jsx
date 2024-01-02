export function Data() {
	return (
		<section className="bg-transparent">
			<div className="mx-auto max-w-screen-xl my-10 py-12 sm:px-6 md:py-16 lg:px-8 border border-gray-200  rounded-lg shadow-md  bg-gradient-to-r from-cyan-400 to-blue-500 ">
				<div className="text-white mx-auto text-center max-w-4xl  my-10 ">
					<h2 className=" font-bold md:text-5xl">
						Manteniendo la confianza de nuestros clientes
					</h2>
					<p className="mt-4  sm:text-xl text-white/80">
						Estamos orgullosos de haber brindado un servicio de
						calidad a nuestros clientes durante más de 30 años.
						Estos son algunos de nuestros logros.
					</p>
				</div>

				<div className="mt-8 sm:mt-12 ">
					<dl className="grid grid-cols-1 gap-1 sm:grid-cols-3 ">
						<div className="flex flex-col rounded-lg px-4 py-8 text-center shadow-md border-4 border-white/10 mx-8  ">
							<dt className="order-last text-lg font-medium text-white/70">
								Países Alcanzados
							</dt>

							<dd className="text-4xl font-extrabold text-white lg:text-5xl">
								+5
							</dd>
						</div>

						<div className="flex flex-col rounded-lg px-4 py-8 text-center shadow-md border-4 border-white/10 mx-8   ">
							<dt className="order-last text-lg font-medium text-white/70">
								Máquinas Vendidas
							</dt>

							<dd className="text-4xl font-extrabold text-white lg:text-5xl">
								+600
							</dd>
						</div>

						<div className="flex flex-col rounded-lg px-4 py-8 text-center shadow-md border-4 border-white/10 mx-8 ">
							<dt className="order-last text-lg font-medium text-white/70">
								Clientes Satisfechos
							</dt>

							<dd className="text-4xl font-extrabold text-white lg:text-5xl">
								+400
							</dd>
						</div>
					</dl>
				</div>
			</div>
		</section>
	);
}
