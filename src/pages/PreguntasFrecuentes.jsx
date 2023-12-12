import { Base } from "../components/Base";
import { Details } from "../components/Details";
import { useTheme } from "../context/ThemeContext";
import image1 from "../img/6.jpg";
import image2 from "../img/2.jpg";
import image3 from "../img/12.jpg";
import image4 from "../img/3.jpg";
import image5 from "../img/2.jpg";
import image6 from "../img/1.webp";

export function PreguntasFrecuentes() {
	const { isDarkTheme } = useTheme();

	const images = [image1, image2, image3, image4, image5, image6];

	return (
		<>
			<Base />
			<section
				className={`w-full absolute top-10 flex justify-center items-center px-1 ${
					isDarkTheme ? "bg-gray-900" : "bg-gray-50 "
				}`}>
				<article className="lg:w-3/5 lg:ml-[320px] sm:ml-0">
					<div className="flex-col px-2">
						<h1
							className={`${
								isDarkTheme ? "text-white" : "text-gray-900"
							} mb-10 text-4xl  font-bold leading-none tracking-tight md:text-5xl lg:text-6xl `}>
							{" "}
							<span className="underline underline-offset-3 decoration-8 decoration-blue-400">
								Preguntas y respuestas
							</span>{" "}
							frecuentes de nuestros clientes{" "}
						</h1>
						<p className="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">
							Explora nuestras{" "}
							<strong>preguntas frecuentes</strong> y{" "}
							<strong>respuestas</strong> para obtener información
							detallada sobre nuestros productos y servicios.
							Nuestra intención es proporcionarte una comprensión
							completa para que disfrutes de una experiencia aún
							más enriquecedora con nosotros.
						</p>
						<figure className="w-full bg-blue-50 rounded-lg h-full my-10 flex justify-center items-center flex-wrap gap-5 shadow-md py-2 ">
							{images.map((image, index) => (
								<img
									key={index}
									src={image}
									className="  rounded-lg max-w-xs shadow-ld h-full aspect-square object-cover 	md:w-[250px] opacity-90 "
									alt={index}
								/>
							))}
						</figure>
					</div>

					<p className="text-lg border-l-4  border-blue-400 px-2 font-normal text-gray-500 lg:text-xl rounded-lg">
						Nuestro{" "}
						<strong>centro de preguntas y respuestas</strong> es una
						valiosa herramienta diseñada para proporcionar
						respuestas rápidas y precisas a las preguntas más
						comunes sobre nuestra empresa y maquinaria. En esta
						sección, encontrarás información detallada sobre
						nuestros productos, procesos y servicios, abordando
						inquietudes frecuentes. Ya sea que estés interesado en
						conocer las características técnicas de nuestras
						máquinas, los plazos de entrega, o cómo contactarnos
						para consultas específicas, nuestro{" "}
						<strong>centro de preguntas y respuestas</strong> está
						aquí para facilitar tu experiencia y brindarte la
						información que necesitas de manera fácil y accesible.
					</p>
					<div className="bg-gray-100 p-4 rounded-lg shadow-md my-10 ">
						<Details
							name={name}
							question={
								"Pregunta: ¿Cuánto tiempo lleva Alloatti SRL en el mercado de maquinaria para bidones?"
							}
							answer={
								"Respuesta: Alloatti SRL tiene más de 20 años de experiencia en el mercado, brindando maquinaria de calidad para el procesamiento de bidones retornables y descartables."
							}
						/>
						<Details
							name={name}
							question={
								"Pregunta: ¿Cuáles son algunas de las características destacadas de las máquinas ofrecidas por Alloatti SRL?"
							}
							answer={
								"Respuesta: Nuestras máquinas cuentan con características como tiempos de lavado de 120 segundos, picos de lavado exterior rotativos, puertas accionadas neumáticamente, soportes abiertos para bidones, pantalla táctil para operación y control, entre otras."
							}
						/>
						<Details
							name={name}
							question={
								"Pregunta: ¿Qué capacidad de producción tienen las líneas de producción de Alloatti SRL?"
							}
							answer={
								"Respuesta: Ofrecemos líneas de producción que abarcan un rango de 50 hasta 1000 bidones por hora. Además, podemos desarrollar líneas de mayor capacidad según los requerimientos específicos de nuestros clientes."
							}
						/>
						<Details
							name={name}
							question={
								"Pregunta: ¿Qué novedades ha incorporado Alloatti SRL?"
							}
							answer={
								"Respuesta: Hemos fortalecido nuestra operación con la introducción de un departamento de automatización y el lanzamiento de productos innovadores, que incluyen sacatapas automático y manual, alimentador automático para 500 tapas, cargador automático de bidones vacíos, prelavadora con cepillos automáticos, y pantalla con conectividad a Internet y app móvil"
							}
						/>
						<Details
							name={name}
							question={
								"Pregunta: ¿Cómo garantiza Alloatti SRL la calidad e higiene en el procesamiento de bidones?"
							}
							answer={
								"Respuesta: En Alloatti, garantizamos un tiempo de lavado total de 120 segundos para cada bidón, asegurando una limpieza completa tanto en el interior como en el exterior, incluyendo la boca del bidón. Nuestras máquinas están diseñadas para prevenir el contacto directo entre la boca del bidón y el pico de llenado, eliminando cualquier posibilidad de contaminación del bidón. Además, contamos con un proceso de saneado, registro de producción y saneado, y diagnóstico inteligente de eventuales fallas para asegurar la máxima eficiencia y estándares de higiene."
							}
						/>
					</div>
				</article>
			</section>
		</>
	);
}
