import { Base } from "../components/Base";
import { MovilMockup } from "../components/MovilMockup";
import { useTheme } from "../context/ThemeContext";
import ninos from "../assets/img/ninos.png";

export function ControlPorCelular() {
	const { isDarkTheme } = useTheme();
	return (
		<section>
			<Base />
			<section
				className={`w-full absolute top-10 flex justify-center items-center  ${
					isDarkTheme ? "bg-gray-900" : "bg-gray-50 "
				}`}>
				<article className="lg:w-3/5 lg:ml-[320px] sm:ml-0">
					<span
						href="#"
						className="bg-blue-100 pl-2 text-blue-800 text-xs font-medium flex items-center  py-0.5 rounded-md dark:bg-gray-700 dark:text-blue-400 mb-2">
						<svg
							className="w-2.5 h-2.5 mr-1.5"
							aria-hidden="true"
							xmlns="http://www.w3.org/2000/svg"
							fill="currentColor"
							viewBox="0 0 20 14">
							<path d="M11 0H2a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm8.585 1.189a.994.994 0 0 0-.9-.138l-2.965.983a1 1 0 0 0-.685.949v8a1 1 0 0 0 .675.946l2.965 1.02a1.013 1.013 0 0 0 1.032-.242A1 1 0 0 0 20 12V2a1 1 0 0 0-.415-.811Z" />
						</svg>
						Inovación
					</span>
					<h1 className="text-5xl p-2 mb-5 text-blue-700 bg-gray-200 rounded-lg font-extrabold">
						Control por celular
					</h1>
					<p className="mb-3 text-1xl text-gray-500 md:text-xl dark:text-gray-400">
						Deliver great service experiences fast - without the
						complexity of traditional ITSM solutions.Accelerate
						critical development work and deploy.
					</p>
					<p className="text-gray-500 dark:text-gray-400">
						Track work across the enterprise through an open,
						collaborative platform. Link issues across Jira and
						ingest data from other software development tools, so
						your IT support and operations teams have richer
						contextual information to rapidly respond to requests,
						incidents, and changes.
					</p>
					<aside className="py-10">
						<MovilMockup />
					</aside>
					<p className="text-gray-500 dark:text-gray-400">
						Track work across the enterprise through an open,
						collaborative platform. Link issues across Jira and
						ingest data from other software development tools, so
						your IT support and operations teams have richer
						contextual information to rapidly respond to requests,
						incidents, and changes.
					</p>
					<figure className="flex-col  items-center inline-flex py-10">
						<img src={ninos} alt="" className="max-w-md  rounded-lg " />
						<p className="text-gray-500 dark:text-gray-400 ">
							Lorem ipsum dolor sit amet consectetur adipisicing
							elit. Quisquam voluptatum, quae, laboriosam,
							voluptates dolorum quidem voluptatibus quibusdam
							voluptate consequatur quas exercitationem
							doloremque. Quisquam voluptatum, quae, laboriosam,
							voluptates dolorum quidem voluptatibus quibusdam
							voluptate consequatur quas exercitationem
							doloremque.
						</p>
					</figure>
				</article>
			</section>
		</section>
	);
}
