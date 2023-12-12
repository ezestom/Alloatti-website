import ok from "../icons/ok.png";

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
		const destinatario = "ezequielstom@gmail.com";
		const ccOculto = "ezequielstom@hotmail.com"; // Puedes cambiar esto a tu destinatario oculto
		const asunto = `Estoy interesado en la ${modelo}`;
		const cuerpo = `Buenos días,\n\n Visité su página web recientemente y estoy interesado/a en obtener más información sobre ${modelo}. Agradecería recibir detalles adicionales sobre el producto, incluidos los precios y las opciones de entrega.\n
		Quedo a la espera de su pronta respuesta.\n
		Saludos cordiales,\n	
		[Nombre y Apellido]
		[Empresa]
		[Localidad]`;

		const mailtoLink = `mailto:${destinatario}?cc=${ccOculto}&subject=${encodeURIComponent(
			asunto
		)}&body=${encodeURIComponent(cuerpo)}`;

		// Abrir en una nueva ventana/tab o cambiar window.location.href
		window.open(mailtoLink, "_blank");
	};

	return (
		<button
			onClick={sendEmail}
			className="bg-blue-700 hover:bg-blue-800 text-white font-bold py-2 px-4 w-full text-lg"
			id="close-dialog">
			<span className="flex items-center justify-center gap-1">
				<img src={ok} alt=" ok-icon" />
				Consultar por {"-> "}
				{modelo}
			</span>
		</button>
	);
};
