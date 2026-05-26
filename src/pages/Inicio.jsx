import { Base } from "../components/Base";
import { Home } from "../components/Home";
import { SEO } from "../components/SEO";

export function Inicio() {
	return (
		<>
			<SEO 
				title="Fábrica de Envasadoras de Agua y Lavadoras de Bidones" 
				description="Fábrica de máquinas lavadoras, llenadoras y tapadoras de bidones de agua de 10 a 20 litros. Más de 30 años de trayectoria en la automatización de plantas de agua."
				keywords="envasadoras de agua, envasadoras de bidones, lavadora de bidones de 20 litros, llenadora de bidones de agua, tapadora de bidones, maquinaria industrial para agua, Alloatti SRL, planta embotelladora, IVESS, CIMES"
				url="/"
			/>
			<Base />
			<Home/>
		</>
	);
}
