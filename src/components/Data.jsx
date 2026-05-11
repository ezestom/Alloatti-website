export function Data() {
	return (
		<section className="my-20">
			<div className="hp-card border-none overflow-visible py-16 px-8 md:px-12 relative shadow-2xl transition-all duration-500 text-left">
				{/* Top Blue Accent */}
				<div className="absolute top-0 left-0 w-full h-1.5 bg-[#024ad8]"></div>
				
				<div className="max-w-4xl mb-16">
					<div className="hp-eyebrow hp-eyebrow-blue mb-4">
						Nuestra Trayectoria
					</div>
					<h2 className="hp-h2">
						Manteniendo la confianza de nuestros clientes
					</h2>
					<p className="hp-p-intro">
						Estamos orgullosos de haber brindado un servicio de
						calidad a nuestros clientes durante más de 30 años.
						Estos son algunos de nuestros logros estratégicos.
					</p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-3 gap-12">
					<div className="flex flex-col items-start">
						<dd className="text-6xl font-bold text-[#024ad8] mb-3 tracking-tighter">
							+5
						</dd>
						<dt className="text-xs font-bold uppercase tracking-[0.25em] text-slate-500 dark:text-slate-400">
							Países Alcanzados
						</dt>
					</div>

					<div className="flex flex-col items-start">
						<dd className="text-6xl font-bold text-[#024ad8] mb-3 tracking-tighter">
							+600
						</dd>
						<dt className="text-xs font-bold uppercase tracking-[0.25em] text-slate-500 dark:text-slate-400">
							Máquinas Vendidas
						</dt>
					</div>

					<div className="flex flex-col items-start">
						<dd className="text-6xl font-bold text-[#024ad8] mb-3 tracking-tighter">
							+400
						</dd>
						<dt className="text-xs font-bold uppercase tracking-[0.25em] text-slate-500 dark:text-slate-400">
							Clientes Satisfechos
						</dt>
					</div>
				</div>
			</div>
		</section>
	);
}
