import { Base } from "../components/Base";
import InputData from "../components/InputData";
import { useTheme } from "../context/ThemeContext";
import chat from "../img/chat.webp";

export function Contacto() {
	const { isDarkTheme } = useTheme();
	return (
		<>
			<Base />
			<section
				className={`w-full absolute top-12 flex justify-center items-center  ${
					isDarkTheme ? "bg-gray-900" : "bg-gray-50 "
				}`}>
				<article className="lg:w-3/5 lg:ml-[320px] sm:ml-0">
					<span
						href="#"
						className="bg-green-100 pl-2 text-green-800 text-xs font-medium flex items-center  py-0.5 rounded-md  dark:text-green-400 mb-2">
						<svg
							className="m-1"
							width="15"
							height="15"
							viewBox="0 0 24 24">
							<path
								fill="#059669"
								d="M12 7.5c.69 0 1.27.23 1.76.7s.74 1.07.74 1.8c0 1.05-.5 1.81-1.5 2.28V21h-2v-8.72c-1-.47-1.5-1.23-1.5-2.28c0-.73.26-1.33.74-1.8s1.07-.7 1.76-.7m4.69-2.2c1.25 1.25 1.92 2.81 2.01 4.7c0 1.8-.67 3.38-2.01 4.72L15.5 13.5c1-.91 1.5-2.08 1.5-3.5c0-1.33-.5-2.5-1.5-3.5l1.19-1.2M6.09 4.08C4.5 5.67 3.7 7.64 3.7 10s.8 4.3 2.39 5.89l-1.17 1.22C3 15.08 2 12.7 2 10s1-5.06 2.92-7.09l1.17 1.17m12.99-1.17C21 4.94 22 7.3 22 10c0 2.8-1 5.17-2.92 7.11l-1.17-1.22C19.5 14.3 20.3 12.33 20.3 10s-.8-4.33-2.39-5.92l1.17-1.17M7.31 5.3L8.5 6.5C7.5 7.42 7 8.58 7 10c0 1.33.5 2.5 1.5 3.5l-1.19 1.22C5.97 13.38 5.3 11.8 5.3 10c0-1.8.67-3.36 2.01-4.7Z"
							/>
						</svg>
						Contacte con nosotros
					</span>
					<h1 className="md:text-5xl flex py-5 my-5 text-dark bg-gray-200 rounded-lg font-extrabold shadow-md items-center">
						<svg
							className="mx-1"
							width="45"
							height="45"
							viewBox="0 0 24 24">
							<path
								fill="none"
								stroke="#000000"
								strokeWidth="2"
								d="M14 9a2 2 0 0 1-2 2H6l-4 4V4c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v5Zm4 0h2a2 2 0 0 1 2 2v11l-4-4h-6a2 2 0 0 1-2-2v-1"
							/>
						</svg>
						Contactanos
					</h1>
					<p className="my-5 px-2 text-1xl text-gray-500 md:text-xl dark:text-gray-400">
						¿Tenés alguna pregunta sobre nuestra maquinaria para el
						procesamiento de bidones retornables y descartables? No
						dudes en ponerte en contacto con nosotros. Estamos aquí
						para ayudarte a encontrar la solución que mejor se
						adapte a tus necesidades. ¡Esperamos con interés
						escuchar de vos!
					</p>
					<figure className="w-full flex justify-between items-center my-10 shadow-lg rounded-lg">
						<figcaption className="w-1/2 text-center p-10 flex-wrap">
							<h1 className="text-3xl font-bold text-gray-600 pb-2">
								Nuestras asesoras
							</h1>
							<p className="text-gray-500 dark:text-gray-400">
								Están para ayudarte en lo que necesites.
							</p>
						</figcaption>
						<img className="w-1/2 rounded-lg" src={chat} alt="" />
					</figure>

					<p className="text-gray-500 dark:text-gray-400 border-l-4 border-blue-400 px-2 my-20 rounded-lg">
						¿Estás interesado en adquirir nuestras avanzadas líneas
						de producción o deseas obtener información detallada
						sobre nuestras máquinas y servicios? Te invitamos a
						contactarnos. Proporcionanos tu nombre, dirección de
						correo electrónico y los detalles de tu consulta en el
						formulario a continuación. Nuestro equipo comercial se
						encargará de brindarte la información que necesitás para
						tomar decisiones informadas.
					</p>
					<div className="w-full flex justify-center items-center px-1 my-20">
						<InputData />
					</div>
				</article>
			</section>
		</>
	);
}
