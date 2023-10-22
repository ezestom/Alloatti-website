import { Link } from "react-router-dom";

import { ThemeButton } from "./ThemeButton";

export function NavbarMobile() {
	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	};
	return (
		<div className=" z-10 fixed w-screen bottom-8 flex justify-around items-center">
			<ThemeButton />
			<div>
				<ul className="flex w-screen justify-around  bg-white rounded-lg">
					<li className="list-none">
						<Link
							to="/"
							className="block rounded-lg  py-2 text-sm font-medium  grid place-items-center text-gray-500 hover:bg-gray-200 hover:text-gray-700">
							<svg
								className="w-6 h-6 text-gray-800 dark:text-white"
								aria-hidden="true"
								xmlns="http://www.w3.org/2000/svg"
								fill="currentColor"
								viewBox="0 0 20 20">
								<path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
							</svg>
							<span className="text-xs">Home</span>
						</Link>
					</li>

					<li className="list-none">
						<Link
							to="/ControlPorCelular"
							className="block rounded-lg  py-2 text-sm font-medium  grid place-items-center text-gray-500 hover:bg-gray-200 hover:text-gray-700">
							<svg
								className="w-6 h-6 text-gray-800 dark:text-white"
								aria-hidden="true"
								xmlns="http://www.w3.org/2000/svg"
								fill="currentColor"
								viewBox="0 0 14 20">
								<path d="M12 0H2a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2ZM7.5 17.5h-1a1 1 0 0 1 0-2h1a1 1 0 0 1 0 2ZM12 13H2V4h10v9Z" />
							</svg>
							<span className="text-xs ">
								Control <br />
								Celular
							</span>
						</Link>
					</li>

					<li className="list-none">
						<Link
							to="/ControlPorCelular"
							className="block rounded-lg  py-2 text-sm font-medium  grid place-items-center text-gray-500 hover:bg-gray-200 hover:text-gray-700">
							<svg
								className="w-6 h-6 text-gray-800 dark:text-white"
								aria-hidden="true"
								xmlns="http://www.w3.org/2000/svg"
								fill="currentColor"
								viewBox="0 0 14 20">
								<path d="M12 0H2a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2ZM7.5 17.5h-1a1 1 0 0 1 0-2h1a1 1 0 0 1 0 2ZM12 13H2V4h10v9Z" />
							</svg>
							<span className="text-xs ">
								Control <br />
								Celular
							</span>
						</Link>
					</li>

					<li className="list-none">
						<Link
							to="/nosotros"
							className="block rounded-lg  py-2 text-sm font-medium  grid place-items-center text-gray-500 hover:bg-gray-200 hover:text-gray-700">
							<svg
								className="w-6 h-6 text-gray-800 dark:text-white"
								aria-hidden="true"
								xmlns="http://www.w3.org/2000/svg"
								fill="currentColor"
								viewBox="0 0 14 20">
								<path d="M12 0H2a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2ZM7.5 17.5h-1a1 1 0 0 1 0-2h1a1 1 0 0 1 0 2ZM12 13H2V4h10v9Z" />
							</svg>
							<span className="text-xs">Nosotros</span>
						</Link>
					</li>

					<li className="list-none">
						<Link
							to="/PreguntasFrecuentes"
							className="block rounded-lg  py-2 text-sm font-medium  grid place-items-center text-gray-500 hover:bg-gray-200 hover:text-gray-700">
							<svg
								className="w-6 h-6 text-gray-800 dark:text-white"
								aria-hidden="true"
								xmlns="http://www.w3.org/2000/svg"
								fill="currentColor"
								viewBox="0 0 14 20">
								<path d="M12 0H2a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2ZM7.5 17.5h-1a1 1 0 0 1 0-2h1a1 1 0 0 1 0 2ZM12 13H2V4h10v9Z" />
							</svg>
							<span className="text-xs">
								Preguntas <br />
								frecuentes
							</span>
						</Link>
					</li>

					<li className="list-none">
						<Link
							to="/NormasIvess"
							className="block rounded-lg  py-2 text-sm font-medium  grid place-items-center text-gray-500 hover:bg-gray-200 hover:text-gray-700">
							<svg
								className="w-6 h-6 text-gray-800 dark:text-white"
								aria-hidden="true"
								xmlns="http://www.w3.org/2000/svg"
								fill="currentColor"
								viewBox="0 0 14 20">
								<path d="M12 0H2a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2ZM7.5 17.5h-1a1 1 0 0 1 0-2h1a1 1 0 0 1 0 2ZM12 13H2V4h10v9Z" />
							</svg>
							<span className="text-xs">
								Normas <br />
								IVESS
							</span>
						</Link>
					</li>

					<li className="list-none">
						<Link
							to="/UltimasNoticias"
							className="block rounded-lg  py-2 text-sm font-medium  grid place-items-center text-gray-500 hover:bg-gray-200 hover:text-gray-700">
							<svg
								className="w-6 h-6 text-gray-800 dark:text-white"
								aria-hidden="true"
								xmlns="http://www.w3.org/2000/svg"
								fill="currentColor"
								viewBox="0 0 14 20">
								<path d="M12 0H2a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2ZM7.5 17.5h-1a1 1 0 0 1 0-2h1a1 1 0 0 1 0 2ZM12 13H2V4h10v9Z" />
							</svg>
							<span className="text-xs">
								Últimas <br />
								noticias
							</span>
						</Link>
					</li>

					<li className="list-none">
						<Link
							to="/Contacto"
							className="block rounded-lg  py-2 text-sm font-medium  grid place-items-center text-gray-500 hover:bg-gray-200 hover:text-gray-700">
							<svg
								className="w-6 h-6 text-gray-800 dark:text-white"
								aria-hidden="true"
								xmlns="http://www.w3.org/2000/svg"
								fill="currentColor"
								viewBox="0 0 14 20">
								<path d="M12 0H2a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2ZM7.5 17.5h-1a1 1 0 0 1 0-2h1a1 1 0 0 1 0 2ZM12 13H2V4h10v9Z" />
							</svg>
							<span className="text-xs">Contacto</span>
						</Link>
					</li>
				</ul>
			</div>
			<div className="fixed bottom-[110px] bg-red- right-3 z-10">
				<button
					onClick={scrollToTop}
					type="button"
					className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg p-2.5 text-center inline-flex items-center mr-2 dark:bg-blue-600 -rotate-90 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
					<svg
						className="w-5 h-5"
						aria-hidden="true"
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 14 10">
						<path
							stroke="currentColor"
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M1 5h12m0 0L9 1m4 4L9 9"
						/>
					</svg>
				</button>
			</div>
		</div>
	);
}
