export const OpenEmail = ({ data }) => {
	if (!data || !data[0]) {
		return (
			<div className="text-red-400 border border-red-500 p-1">
				No hay datos disponibles para mostrar el botón de correo
				electrónico.
			</div>
		);
	}

	const { modelo, producción_max } = data[0];

	const sendEmail = () => {
		const destinatario = "ezequielstom@gmail.com";
		const ccOculto = "ezequielstom@hotmail.com"; // Puedes cambiar esto a tu destinatario oculto
		const asunto = `Estoy interesado en la ${modelo}`;
		const cuerpo = `Buenos días, me contacto desde la página web y me gustaría recibir información sobre la máquina ${modelo} que produce ${producción_max}.
		
		[Nombre y Apellido]
		[Empresa]
		[Localidad]
		
		Gracias!`;

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
			✔️ Consultar por la {modelo} que produce {producción_max}
		</button>
	);
};
