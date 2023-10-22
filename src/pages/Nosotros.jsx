import { Base } from "../components/Base";
import { Card } from "../components/Card";
import { useTheme } from "../context/ThemeContext";

export function Nosotros() {
	const { isDarkTheme } = useTheme();
	return (
		<>
			<Base />
			<section
				className={`w-full absolute top-10 flex justify-center items-center px-1 ${
					isDarkTheme ? "bg-gray-900" : "bg-gray-50 "
				}`}>
				<article className="lg:w-3/5 lg:ml-[320px] sm:ml-0">
					<span
						href="#"
						className="bg-red-100 text-red-800 text-xs font-medium flex items-center px-2.5 py-0.5 rounded-md dark:bg-gray-700 dark:text-blue-400 mb-2">
						<svg
							className="w-2.5 h-2.5 mr-1.5"
							aria-hidden="true"
							xmlns="http://www.w3.org/2000/svg"
							fill="currentColor"
							viewBox="0 0 20 14">
							<path d="M11 0H2a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm8.585 1.189a.994.994 0 0 0-.9-.138l-2.965.983a1 1 0 0 0-.685.949v8a1 1 0 0 0 .675.946l2.965 1.02a1.013 1.013 0 0 0 1.032-.242A1 1 0 0 0 20 12V2a1 1 0 0 0-.415-.811Z" />
						</svg>
						Compañia
					</span>
					<h1 className="text-5xl py-2 mb-5 text-blue-700 bg-gray-200 pl-3 rounded-lg font-extrabold">
						Sobre nosotros
					</h1>
					<div className="flex-col mt-5 ">
						<h1
							className={`${
								isDarkTheme ? "text-white" : "text-gray-900"
							} mb-10 text-4xl  font-bold leading-none tracking-tight md:text-3xl lg:text-3xl `}>
							Fresh water son creadas por{" "}
							<span className="underline underline-offset-3 decoration-8 decoration-blue-400 dark:decoration-blue-600">
								Alloatti SRL
							</span>{" "}
							estas innovadoras maquinas, para sanitizar y
							rellenar bidones de agua{" "}
						</h1>
						<p className="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">
							Estas máquinas pueden ser utilizadas por empresas
							que se dedican a la distribución de agua embotellada
							o purificada, así como por aquellas que operan en
							áreas donde se requiere una fuente de agua confiable
							y segura. Garantizar la higiene y la calidad del
							agua es esencial para cumplir con estándares y
							regulaciones de salud y seguridad.
						</p>
					</div>
					<div className="flex justify-center flex-col items-center">
						<aside className="gap-5 h-auto">
							<div className="mt-5 ">
								<Card
									title="Misión"
									text="Nuestra misión es brindar soluciones innovadoras y de calidad para el envasado de agua purificada, con el objetivo de satisfacer las necesidades de nuestros clientes."
								/>
							</div>
							<div className="mt-5">
								<Card
									title="Misión"
									text="Nuestra misión es brindar soluciones innovadoras y de calidad para el envasado de agua purificada, con el objetivo de satisfacer las necesidades de nuestros clientes."
								/>
							</div>
						</aside>

						<blockquote className="p-4 my-4 border-l-4 border-gray-300 rounded-lg bg-gray-50 dark:border-gray-500 dark:bg-gray-800">
							<p className="text-xl italic font-medium leading-relaxed text-gray-900 dark:text-white">
								Si tienes más información o preguntas
								específicas sobre las máquinas{"Fresh Water"}de
								Alloatti SRL, estaré encantado de ayudarte.
							</p>
						</blockquote>
						<p className="text-gray-500 dark:text-gray-400">
							First of all you need to understand how Flowbite
							works. This library is not another framework.
							Rather, it is a set of components based on Tailwind
							CSS that you can just copy-paste from the
							documentation.
						</p>
					</div>
				</article>
			</section>
		</>
	);
}
