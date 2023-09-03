import { useTheme } from "../context/ThemeContext";

export function Promotion() {
	const { isDarkTheme } = useTheme();
	return (
		<div
			className={`text-${
				isDarkTheme ? "white z-0"  : "black"
			} `}>
			<marquee behavior="scroll" direction="left" className=" bg-slate-400 z-0">
				Más eficiencia, más calidad. Nuestras máquinas envasadoras y
				lavadoras hacen la diferencia. ¡Aprovecha el descuento! -
				Envasado perfecto, producción eficiente. Descubre nuestras
				máquinas en promoción. ¡Mejora tu negocio ahora! - Innovación
				envasada. Lleva tu producción al siguiente nivel con nuestras
				máquinas. ¡Oferta única! - Higiene y calidad asegurada. Máquinas
				envasadoras y lavadoras a precio especial. ¡Compra ahora! -
				Máxima precisión, mínimo esfuerzo. Obtén ventaja competitiva con
				nuestras máquinas. ¡Descuento exclusivo! -
			</marquee>
		</div>
	);
}
