import { Base } from "../components/Base";
import { Card } from "../components/Card";
import { Data } from "../components/Data";
import { useTheme } from "../context/ThemeContext";

export function Nosotros() {
	const { isDarkTheme } = useTheme();
	return (
		<>
			<Base />
			<section
				className={`w-full absolute top-12 flex justify-center items-center  ${
					isDarkTheme ? "bg-gray-900" : "bg-gray-50 "
				}`}>
				<article className="lg:w-4/6 lg:ml-[300px] sm:ml-0 mb-20 ">
					<span
						href="#"
						className="bg-violet-100 pl-2 text-violet-800 text-xs font-medium flex items-center  py-0.5 rounded-md dark:bg-gray-700 dark:text-violet-400 mb-2">
						<svg
							className="m-1"
							width="15"
							height="15"
							viewBox="0 0 24 24">
							<path
								fill="#7c3aed"
								d="M12 10a4 4 0 1 0 0-8a4 4 0 0 0 0 8Zm-6.5 3a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5ZM21 10.5a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0Zm-9 .5a5 5 0 0 1 5 5v6H7v-6a5 5 0 0 1 5-5Zm-7 5c0-.693.1-1.362.288-1.994l-.17.014A3.5 3.5 0 0 0 2 17.5V22h3v-6Zm17 6v-4.5a3.5 3.5 0 0 0-3.288-3.494c.187.632.288 1.301.288 1.994v6h3Z"
							/>
						</svg>
						Nosotros
					</span>
					<h1 className="md:text-5xl flex items-center py-5 my-5 text-dark bg-gray-200 rounded-lg font-extrabold shadow-md ">
						<svg
							className="mx-1"
							width="45"
							height="45"
							viewBox="0 0 24 24">
							<path
								fill="#000"
								d="M1.05 21v-2.8q0-.825.425-1.55t1.175-1.1q1.275-.65 2.875-1.1T9.05 14q1.925 0 3.525.45t2.875 1.1q.75.375 1.175 1.1t.425 1.55V21h-16Zm8-8q-1.65 0-2.825-1.175T5.05 9H4.8q-.225 0-.362-.138T4.3 8.5q0-.225.138-.363T4.8 8h.25q0-1.125.55-2.025T7.05 4.55v.95q0 .225.138.363T7.55 6q.225 0 .363-.138T8.05 5.5V4.15q.225-.075.475-.113T9.05 4q.275 0 .525.038t.475.112V5.5q0 .225.138.363T10.55 6q.225 0 .363-.138t.137-.362v-.95q.9.525 1.45 1.425T13.05 8h.25q.225 0 .363.138t.137.362q0 .225-.138.363T13.3 9h-.25q0 1.65-1.175 2.825T9.05 13Zm0-2q.825 0 1.413-.588T11.05 9h-4q0 .825.588 1.413T9.05 11Zm7.5 4l-.15-.75q-.15-.05-.287-.113t-.263-.187l-.7.25l-.5-.9l.55-.5v-.6l-.55-.5l.5-.9l.7.25q.1-.1.25-.175t.3-.125l.15-.75h1l.15.75q.15.05.3.125t.25.175l.7-.25l.5.9l-.55.5v.6l.55.5l-.5.9l-.7-.25q-.125.125-.263.188t-.287.112l-.15.75h-1Zm.5-1.75q.3 0 .525-.225t.225-.525q0-.3-.225-.525t-.525-.225q-.3 0-.525.225t-.225.525q0 .3.225.525t.525.225Zm1.8-3.25l-.2-1.05q-.225-.075-.412-.188T17.9 8.5l-1.05.35l-.7-1.2l.85-.75q-.05-.125-.05-.2v-.4q0-.075.05-.2l-.85-.75l.7-1.2l1.05.35q.15-.15.338-.263t.412-.187l.2-1.05h1.4l.2 1.05q.225.075.413.188t.337.262l1.05-.35l.7 1.2l-.85.75q.05.125.05.2v.4q0 .075-.05.2l.85.75l-.7 1.2l-1.05-.35q-.15.15-.337.263t-.413.187l-.2 1.05h-1.4Zm.7-2.25q.525 0 .888-.363T20.8 6.5q0-.525-.363-.888t-.887-.362q-.525 0-.888.363T18.3 6.5q0 .525.363.888t.887.362Z"
							/>
						</svg>
						Nuestra empresa
					</h1>
					<div className="flex-col mt-5 px-1 ">
						<h6
							className={`${
								isDarkTheme ? "text-white" : "text-gray-700"
							} 	my-20 font-medium lg:text-2xl dark:text-gray-400 px-2 `}>
							<span className="underline underline-offset-3 decoration-4 decoration-blue-400 dark:decoration-blue-600">
								<strong>Alloatti SRL:</strong>
							</span>{" "}
							nuestra empresa está dirigida por{" "}
							<strong>ingenieros</strong>, aportando una amplia
							experiencia técnica y soluciones{" "}
							<strong>innovadoras</strong> en nuestras
							operaciones.
						</h6>
						<Data />
						<p className="p-4  my-20 ">
							<p className="text-2xl  font-medium  text-gray-500">
								La visión liderada por ingenieros impulsa cada
								aspecto de nuestras operaciones. Nuestro equipo,
								compuesto por mentes creativas y expertos
								técnicos, está dedicado a superar desafíos y
								ofrecer soluciones que definen la industria.
							</p>
						</p>
					</div>
					<div className="flex justify-center flex-col items-center">
						<aside className="gap-5 h-auto w-full flex flex-wrap justify-around ">
							<div className="mt-10 ">
								<Card
									name={"Ing. Hector Alloatti"}
									university={
										"Universidad Nacional de La Plata"
									}
									description={
										"Fundador y Gerente de Alloatti SRL, con más de 30 años de experiencia en la industria del agua. Especialista en ingeniería mecánica y eléctrica, con un enfoque sobresaliente en el diseño y fabricación de maquinaria para el procesamiento de agua. "
									}
									position={"Fundador-Gerente"}
									date={"2023"}
									location={"Buenos Aires, Argentina"}
								/>
							</div>
							<div className="my-10">
								<Card
									name={"Ing. Matías Alloatti"}
									university={
										"Universidad Tecnológica Nacional"
									}
									description={
										"Director de Logística y Programación de maquinarias con más de 15 años de experiencia. Especialista en programación de PLC y pantallas táctiles, con un enfoque destacado en el diseño y fabricación de maquinaria para el procesamiento de agua. "
									}
									position={"Director de Logística"}
									date={"2023"}
									location={"Buenos Aires, Argentina"}
								/>
							</div>
						</aside>

						<blockquote className="py-20  bmb-20">
							<p className="text-2xl  font-medium  text-gray-500 ">
								La combinación de pasión por la ingeniería y el
								compromiso con la calidad nos coloca en primera
								línea en la innovación en el mercado,
								garantizando que cada producto y servicio
								refleje la excelencia que caracteriza a nuestra
								empresa.
							</p>
						</blockquote>
					</div>
				</article>
			</section>
		</>
	);
}
