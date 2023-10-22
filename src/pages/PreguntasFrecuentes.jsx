import { Base } from "../components/Base";
import { Details } from "../components/Details";
import { useTheme } from "../context/ThemeContext";

export function PreguntasFrecuentes() {
	const { isDarkTheme } = useTheme();

	return (
		<>
			<Base />
			<section
				className={`w-full absolute top-10 flex justify-center items-center px-1 ${
					isDarkTheme ? "bg-gray-900" : "bg-gray-50 "
				}`}>
				<article className="lg:w-3/5 lg:ml-[320px] sm:ml-0">
					<div className="flex-col  my-5 ">
						<span
							href="#"
							className="bg-blue-100 text-blue-800 text-xs font-medium inline-flex w-full items-center px-2.5 py-0.5 rounded-md dark:bg-gray-700 dark:text-blue-400 mb-2">
							<svg
								className="w-2.5 h-2.5 mr-1.5"
								aria-hidden="true"
								xmlns="http://www.w3.org/2000/svg"
								fill="currentColor"
								viewBox="0 0 20 14">
								<path d="M11 0H2a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm8.585 1.189a.994.994 0 0 0-.9-.138l-2.965.983a1 1 0 0 0-.685.949v8a1 1 0 0 0 .675.946l2.965 1.02a1.013 1.013 0 0 0 1.032-.242A1 1 0 0 0 20 12V2a1 1 0 0 0-.415-.811Z" />
							</svg>
							Preguntas frecuentes
						</span>
						<h1
							className={`${
								isDarkTheme ? "text-white" : "text-gray-900"
							} mb-10 text-4xl  font-bold leading-none tracking-tight md:text-5xl lg:text-6xl `}>
							Preguntas frequentes y{" "}
							<span className="underline underline-offset-3 decoration-8 decoration-blue-400 dark:decoration-blue-600">
								respuestas
							</span>{" "}
							para que puedas quietarte tus dudas{" "}
						</h1>
						<p className="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">
							Te brindamos preguntas y respuestas para que puedas
							conocer más sobre nuestros productos y servicios. Y
							así puedas tener una mejor experiencia con nosotros.
						</p>
					</div>

					<div className="bg-gray-100 p-4 rounded-lg shadow-sm mt-10 ">
						<Details />
						<Details />
						<Details />
						<Details />
					</div>
				</article>
			</section>
		</>
	);
}
