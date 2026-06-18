import PropTypes from "prop-types";
import ok from "../icons/ok.png";
import { sileo } from "sileo";

export const OpenEmail = ({ data, className }) => {
	if (!data || !data[0]) {
		return (
			<div className="text-red-600 border border-red-600 p-1 bg-red-200 text-center">
				No hay datos disponibles para mostrar el botón de correo
				electrónico.
			</div>
		);
	}

	const { modelo } = data[0];

	const sendEmail = () => {
		const destinatario = "info@alloatti.com";
		const ccOculto = "ezequielstom@hotmail.com"; // quiero el email oculto 
		const asunto = `Consulta sobre la ${modelo}`;
		const cuerpo = `Buenos días,\n\nVisité recientemente su página web y estoy interesado/a en obtener más información sobre el ${modelo}. Agradecería recibir detalles adicionales sobre el producto, incluyendo precios, disponibilidad y opciones de entrega.\n\nQuedo a la espera de su respuesta.\n\nSaludos cordiales,\n\n[Nombre y Apellido]\n[Empresa]\n[Localidad]`;

		const mailtoLink = `mailto:${destinatario}?bcc=${ccOculto}&subject=${encodeURIComponent(
			asunto
		)}&body=${encodeURIComponent(cuerpo)}`;

		// Abrir en una nueva ventana/tab o cambiar window.location.href
		window.open(mailtoLink, "_blank");

		sileo.success({
			title: "¡Consulta iniciada!",
			description: "Se abrirá tu cliente de correo para enviar la consulta.",
		});
	};

	return (
		<button
			onClick={sendEmail}
			className={className || "flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 text-white font-bold py-3.5 px-6 rounded-2xl shadow-lg shadow-blue-500/10 hover:shadow-blue-500/20 active:scale-[0.98] transition-all text-sm tracking-wide"}
			id="close-dialog">
			<span className="flex items-center justify-center gap-2">
				<img src={ok} alt="ok-icon" className="w-4 h-4 object-contain brightness-0 invert" />
				Solicitar Cotización (Email)
			</span>
		</button>
	);
};

OpenEmail.propTypes = {
	data: PropTypes.arrayOf(
		PropTypes.shape({
			modelo: PropTypes.string,
		})
	).isRequired,
	className: PropTypes.string,
};

