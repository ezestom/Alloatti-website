import { Base } from "../components/Base";
import { Home } from "../components/Home";
import { SEO } from "../components/SEO";

export function Inicio() {
	return (
		<>
			<SEO 
				title="Inicio" 
				description="Especialistas en máquinas para bidones de agua. Soluciones industriales de lavado, llenado y tapado con tecnología de vanguardia."
				keywords="envasadoras, agua potable, bidones, maquinaria industrial, argentina"
			url="/"
			/>
			<Base />
			<Home/>
		</>
	);
}
