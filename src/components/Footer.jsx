import { FaFacebookF, FaInstagram, FaTwitter, FaGithub } from "react-icons/fa";

export function Footer() {
	return (
		<section className="bg-white">
			<div className="px-32">
				<div className="flex flex-col items-center gap-4 rounded bg-indigo-600 p-6 shadow-lg sm:flex-row sm:justify-between">
					<strong className="text-xl text-white sm:text-xl">
						Creamos la máquina ideal, para tu tipo de Negocio.
					</strong>
					<a
						className="inline-flex items-center gap-2 rounded border border-white bg-white px-8 py-3 text-indigo-600 shadow-md transition-all hover:bg-indigo-700 hover:text-white focus:outline-none focus:ring focus:ring-indigo-600 focus:ring-opacity-50 active:bg-white/90"
						href="/">
						<span className="text-sm font-medium">
							Iniciemos el proyecto
						</span>
						<svg
							className="h-5 w-5 rtl:rotate-180"
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor">
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="M17 8l4 4m0 0l-4 4m4-4H3"
							/>
						</svg>
					</a>
				</div>
				<div className=" max-h-0 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
					{/* ... Rest of the content ... */}
				</div>
				<div className="m-2">
					<ul className="flex justify-center gap-6 sm:justify-end">
						<li>
							<a
								href="/"
								rel="noreferrer"
								target="_blank"
								className="text-indigo-600 transition hover:text-indigo-600/75">
								<FaFacebookF />
							</a>
						</li>
						<li>
							<a
								href="/"
								rel="noreferrer"
								target="_blank"
								className="text-indigo-600 transition hover:text-indigo-600/75">
								<FaInstagram />
							</a>
						</li>
						<li>
							<a
								href="/"
								rel="noreferrer"
								target="_blank"
								className="text-indigo-600 transition hover:text-indigo-600/75">
								<FaTwitter />
							</a>
						</li>
						<li>
							<a
								href="/"
								rel="noreferrer"
								target="_blank"
								className="text-indigo-600 transition hover:text-indigo-600/75">
								<FaGithub />
							</a>
						</li>
						<p className="mt-1 text-center text-sm text-gray-500 sm:mt-0 sm:text-right">
							Copyright &copy; 2023. All rights reserved.
						</p>
					</ul>
				</div>
			</div>
		</section>
	);
}
