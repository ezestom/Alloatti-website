import PropTypes from "prop-types";
import ok from "../icons/ok.png";
import { sileo } from "sileo";

export const OpenEmail = ({ data }) => {
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
		const cuerpo = `Buenos días,\n\n Visité recientemente su página web y estoy interesado/a en obtener más información sobre el ${modelo}. Agradecería recibir detalles adicionales sobre el producto, incluyendo precios, disponibilidad y opciones de entrega.\n
		Quedo a la espera de su respuesta.\n
		Saludos cordiales,\n	
		[Nombre y Apellido]
		[Empresa]
		[Localidad]`;

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
			className="bg-blue-700 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded-2xl"
			id="close-dialog">
			<span className="flex items-center justify-center gap-1">
				<img src={ok} alt=" ok-icon" />
				Consultar por {"-> "}
				{modelo}
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
};
