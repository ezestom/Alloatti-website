import { Base } from "../components/Base";
import { Details } from "../components/Details";
import { useTheme } from "../context/ThemeContext";

export function PreguntasFrecuentes() {
	const { isDarkTheme } = useTheme();

	return (
		<>
			<Base />
			<section
				className={`w-full absolute top-10 flex flex-col justify-center items-center ${
					isDarkTheme ? "bg-gray-900" : "bg-gray-50 "
				}`}>
				<article className="w-3/5 ml-[320px]">
					<div className="flex-col  my-5 ">
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
