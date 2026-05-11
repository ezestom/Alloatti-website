import worker from "../img/trabajador2.jpg";
import { BackButton } from "../components/BackButton";
import { Base } from "../components/Base";
import { SEO } from "../components/SEO";

export function Error(handleClick) {
	return (
		<>
			<SEO 
				title="Página no encontrada" 
				description="Lo sentimos, la página que buscas no existe en Alloatti SRL. Regresa al inicio para explorar nuestra maquinaria industrial."
			/>
			<Base />
			<section className="w-full absolute top-12 flex justify-center items-center px-4">
				<article className="lg:w-4/6 lg:ml-[300px] flex flex-col items-center justify-center min-h-[70vh] text-center">
					<div className="hp-eyebrow hp-eyebrow-blue mb-8">Error 404 • Ruta no encontrada</div>
					
					<h1 className="hp-h1 mb-8">Upsss, esta ruta no existe</h1>
					
					<p className="hp-p-intro max-w-2xl mb-12">
						Parece que el bidón se ha perdido en el camino. No te preocupes, 
						podés volver al inicio para encontrar toda nuestra maquinaria y soluciones.
					</p>

					<figure className="mb-12 relative group">
						<div className="absolute -inset-1 bg-gradient-to-r from-[#024ad8] to-blue-400 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
						<img
							src={worker}
							alt="Trabajador Alloatti"
							className="relative max-w-[400px] w-full rounded-2xl shadow-2xl grayscale hover:grayscale-0 transition-all duration-700"
						/>
					</figure>

					<div className="flex flex-col items-center gap-6">
						<p className="hp-p font-medium">Click abajo para volver al Inicio</p>
						<BackButton handleClick={handleClick} />
					</div>
				</article>
			</section>
		</>
	);
}
