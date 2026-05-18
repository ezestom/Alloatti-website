import { Base } from "../components/Base";
import { Home } from "../components/Home";
import { SEO } from "../components/SEO";

export function Inicio() {
	return (
		<>
			<SEO 
				title="Fábrica de Máquinas Envasadoras de Agua y Bidones" 
				description="Fábrica de máquinas lavadoras, llenadoras y tapadoras de bidones de agua. Más de 30 años liderando la innovación industrial en Argentina."
				keywords="envasadoras de agua, maquinas para bidones, lavadora de bidones, llenadora de bidones, tapadora de bidones, maquinaria industrial para agua, Alloatti SRL"
				url="/"
			/>
			<Base />
			<Home/>
		</>
	);
}
