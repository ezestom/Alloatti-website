import { Base } from "../components/Base";
import { useTheme } from "../context/ThemeContext";
import familia from "../img/familia.avif";

export function Normas() {
	const { isDarkTheme } = useTheme();
	return (
		<>
			<Base />
			<section
				className={`w-full absolute top-12 flex justify-center items-center  ${
					isDarkTheme ? "bg-gray-900" : "bg-gray-50 "
				}`}>
				<article className="lg:w-4/6 lg:ml-[300px] sm:ml-0  mb-20 px-1 ">
					<span
						href="#"
						className="bg-blue-100 pl-2 text-blue-800 text-xs font-medium flex items-center  py-0.5 rounded-md  dark:text-blue-400 mb-2">
						<svg
							className="m-1"
							width="15"
							height="15"
							viewBox="0 0 24 24">
							<path
								fill="#4f46e5"
								d="M12 22q-3.425 0-5.713-2.35T4 13.8q0-1.55.7-3.1t1.75-2.975Q7.5 6.3 8.725 5.05T11 2.875q.2-.2.463-.287T12 2.5q.275 0 .537.088t.463.287q1.05.925 2.275 2.175t2.275 2.675Q18.6 9.15 19.3 10.7t.7 3.1q0 3.5-2.288 5.85T12 22Zm.275-3q.3-.025.513-.238T13 18.25q0-.35-.225-.563T12.2 17.5q-1.025.075-2.175-.563t-1.45-2.312q-.05-.275-.262-.45T7.825 14q-.35 0-.575.263t-.15.612q.425 2.275 2 3.25t3.175.875Z"
							/>
						</svg>
						Normas de Calidad
					</span>
					<h1 className="md:text-5xl flex items-center py-5 my-5 text-dark bg-gray-200 rounded-lg font-extrabold shadow-md   ">
						<svg
							className="mx-1"
							width="45"
							height="45"
							viewBox="0 0 24 24">
							<path
								fill="#000000"
								d="M2 18v-2q.95 0 1.413-.5T5.35 15q1.475 0 1.938.5t1.362.5q.95 0 1.413-.5T12 15q1.425 0 1.938.5t1.412.5q.95 0 1.388-.5t1.912-.5q1.475 0 1.938.5T22 16v2q-1.425 0-1.937-.5T18.65 17q-.9 0-1.362.5t-1.938.5q-1.425 0-1.937-.5T12 17q-.95 0-1.413.5T8.65 18q-1.475 0-1.913-.5T5.35 17q-.95 0-1.412.5T2 18Zm0-4v-2q.95 0 1.413-.5T5.35 11q1.425 0 1.913.5t1.387.5q.95 0 1.412-.5T12 11q1.425 0 1.925.5t1.375.5q.95 0 1.412-.5t1.938-.5q1.425 0 1.938.5T22 12v2q-1.475 0-1.963-.5T18.65 13q-.9 0-1.362.5t-1.938.5q-1.425 0-1.937-.5T12 13q-.95 0-1.388.5T8.7 14q-1.475 0-1.962-.5T5.35 13q-.9 0-1.412.5T2 14Zm0-4V8q.95 0 1.413-.5T5.35 7q1.425 0 1.913.5T8.65 8q.95 0 1.412-.5T12 7q1.425 0 1.925.5T15.3 8q.95 0 1.412-.5T18.65 7q1.425 0 1.938.5T22 8v2q-1.475 0-1.963-.5T18.65 9q-.9 0-1.362.5t-1.938.5q-1.425 0-1.937-.5T12 9q-.95 0-1.388.5T8.7 10q-1.475 0-1.962-.5T5.35 9q-.9 0-1.412.5T2 10Z"
							/>
						</svg>
						Normas de calidad
					</h1>
					<p className=" px-2 text-1xl text-gray-500 md:text-xl dark:text-gray-400  my-20">
						Contamos con una estrecha relación con IVESS y CIMES,
						normativas que garantizan la máxima calidad y pureza del
						agua. Estas normas definen los estándares a cumplir para
						el correcto proceso de sanitizado y llenado del bidón.
						Teniendo como guía estás normativas, desarrollamos
						nuestras bases para las características que cumplen
						nuestras máquinas:
					</p>
					<p className="text-gray-500 dark:text-gray-400  px-2 my-10 ">
						<strong className="text-lg  ">
							{" "}
							~ Duración óptima del lavado:
						</strong>{" "}
						Se garantiza un tiempo mínimo de 2 minutos para cada
						ciclo de lavado de los bidones, asegurando un proceso
						completo y efectivo.
					</p>
					<p className="text-gray-500 dark:text-gray-400  px-2 my-10 ">
						<strong className="text-lg  ">
							{" "}
							~ Presión rotativa en el exterior:
						</strong>{" "}
						Implementamos un lavado con presión rotativa que abarca
						toda la superficie externa del bidón, garantizando la
						limpieza integral.
					</p>
					<p className="text-gray-500 dark:text-gray-400  px-2 my-10 ">
						<strong className="text-lg  ">
							{" "}
							~ Presión interna del bidón:
						</strong>{" "}
						Nuestras máquinas incorporan un sistema de lavado
						interno con presión, asegurando la higiene en todos los
						rincones del recipiente.
					</p>
					<div className="flex flex-col justify-center  items-center ">
						<figure className="w-full py-10 px-6 my-10  flex flex-col justify-center items-center   bg-gray-100 rounded-lg shadow-lg">
							<div>
								<h2 className="text-gray-900 text-3xl md:text-5xl  text-center font-extrabold mb-2">
									Calidad garantizada
								</h2>
								<p className="text-xl  text-gray-500 dark:text-gray-400 text-center my-4">
									Tranquilidad para tu negocio y tu familia.
								</p>
							</div>
							<img
								src={familia}
								alt="Imagen ivess"
								className="rounded-lg  h-auto shadow-lg w-full"
							/>
						</figure>
						<p className="text-gray-500 dark:text-gray-400  px-2 my-10 ">
							<strong className="text-lg  ">
								{" "}
								~ Separación sin contacto:
							</strong>{" "}
							En el proceso, garantizamos que no exista ningún
							contacto entre los bidones y las puertas que separan
							las distintas etapas, manteniendo la integridad del
							proceso.
						</p>
						<p className="text-gray-500 dark:text-gray-400  px-2 my-10 ">
							<strong className="text-lg  ">
								{" "}
								~ Llenado sin contacto:
							</strong>{" "}
							Asimismo, nos aseguramos de que no haya contacto
							entre los picos de llenado y la boca de los bidones,
							cumpliendo con los estándares más exigentes en
							términos de higiene y pureza.
						</p>
						<p className="px-2 text-1xl text-gray-500 md:text-xl dark:text-gray-400  my-20 border-l-4 border-blue-400">
							Estas directrices reflejan nuestro compromiso
							inquebrantable con la calidad y la seguridad en cada
							paso de nuestro proceso de producción.
						</p>
					</div>
				</article>
			</section>
		</>
	);
}
