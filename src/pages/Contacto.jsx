import { Base } from "../components/Base";
import InputData from "../components/InputData";
import { useTheme } from "../context/ThemeContext";

export function Contacto() {
	const { isDarkTheme } = useTheme();
	return (
		<>
			<Base />
			<section
				className={`w-full absolute top-10 flex justify-center items-center ${
					isDarkTheme ? "bg-gray-900" : "bg-gray-50 "
				}`}>
				<article className="w-3/5 ml-[320px]">
					<span
						href="#"
						className="bg-blue-100 text-green-500 text-xs font-medium flex items-center px-2.5 py-0.5 rounded-md bg-green-100 mb-2">
						<svg
							className="w-2.5 h-2.5 mr-1.5"
							aria-hidden="true"
							xmlns="http://www.w3.org/2000/svg"
							fill="currentColor"
							viewBox="0 0 20 14">
							<path d="M11 0H2a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm8.585 1.189a.994.994 0 0 0-.9-.138l-2.965.983a1 1 0 0 0-.685.949v8a1 1 0 0 0 .675.946l2.965 1.02a1.013 1.013 0 0 0 1.032-.242A1 1 0 0 0 20 12V2a1 1 0 0 0-.415-.811Z" />
						</svg>
						Contacto
					</span>
					<h1 className="text-5xl py-2 mb-5 text-blue-700 bg-gray-200 pl-3 rounded-lg font-extrabold">
						Contactanos
					</h1>
					<p className="mb-3 text-lg text-gray-500 md:text-xl dark:text-gray-400">
						Deliver great service experiences fast - without the
						complexity of traditional ITSM solutions.Accelerate
						critical development work and deploy.
					</p>
					<InputData />
				</article>
			</section>
		</>
	);
}
