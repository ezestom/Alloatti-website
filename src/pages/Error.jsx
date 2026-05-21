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
			<section className="w-full absolute top-12 flex justify-center items-center">
				<article className="lg:w-4/6 lg:ml-[300px] sm:ml-0 mb-20 px-8 md:px-0 flex flex-col items-start justify-start">
					<div className="mt-16 text-left">
						<div className="max-w-4xl mb-16">
							<div className="hp-eyebrow hp-eyebrow-blue mb-4">
								Error 404 • Ruta no encontrada
							</div>
						</div>

						<h1 className="hp-h1 mb-8">
							Upsss, esta ruta no existe
						</h1>

						<p className="hp-p-intro max-w-2xl mb-12">
							Parece que el bidón se ha perdido en el camino. No
							te preocupes, podés volver al inicio para encontrar
							toda nuestra maquinaria y soluciones.
						</p>

						<figure className="mb-12 relative group">
							<div className="absolute -inset-1 rounded-2xl blur opacity-25"></div>
							<img
								src={worker}
								alt="Trabajador Alloatti"
								className="rounded-xl"
							/>
						</figure>

						<div className="flex items-center justify-center gap-6">
							<p className="hp-p font-medium">
								Click abajo para volver al Inicio
							</p>
							<BackButton handleClick={handleClick} />
						</div>
					</div>
				</article>
			</section>
		</>
	);
}
