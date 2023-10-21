import { useTheme } from "../context/ThemeContext";
import { Link } from "react-router-dom";

import { ThemeButton } from "./ThemeButton";

export function NavbarMobile() {
	const { isDarkTheme } = useTheme();

	return (
		<div className=" z-10  h-screen fixed p-1 max-w-xs bg-slate-100">
			<ThemeButton />
			<div>
				<ul className="">
					<li className="list-none">
						<Link
							to="/"
							className="block rounded-lg px-1 py-2 text-sm font-medium  grid place-items-center text-gray-500 hover:bg-gray-200 hover:text-gray-700">
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
					<h6 className="text-xs grid place-content-center bg-slate-200 rounded-md py-1 border-gray-300 border">
						Máquinas
					</h6>

					<li className="list-none">
						<Link
							to="/ControlPorCelular"
							className="block rounded-lg px-1 py-2 text-sm font-medium  grid place-items-center text-gray-500 hover:bg-gray-200 hover:text-gray-700">
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
							className="block rounded-lg px-1 py-2 text-sm font-medium  grid place-items-center text-gray-500 hover:bg-gray-200 hover:text-gray-700">
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
					<h6 className="text-xs grid place-content-center bg-slate-200 rounded-md py-1 border-gray-300 border">
						Empresa
					</h6>
					<li className="list-none">
						<Link
							to="/nosotros"
							className="block rounded-lg px-1 py-2 text-sm font-medium  grid place-items-center text-gray-500 hover:bg-gray-200 hover:text-gray-700">
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
					<h6 className="text-xs grid place-content-center bg-slate-200 rounded-md py-1 border-gray-300 border">
						Ventas
					</h6>

					<li className="list-none">
						<Link
							to="/PreguntasFrecuentes"
							className="block rounded-lg px-1 py-2 text-sm font-medium  grid place-items-center text-gray-500 hover:bg-gray-200 hover:text-gray-700">
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
							className="block rounded-lg px-1 py-2 text-sm font-medium  grid place-items-center text-gray-500 hover:bg-gray-200 hover:text-gray-700">
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
							className="block rounded-lg px-1 py-2 text-sm font-medium  grid place-items-center text-gray-500 hover:bg-gray-200 hover:text-gray-700">
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
					<h6 className="text-xs grid place-content-center bg-slate-200 rounded-md py-1 border-gray-300 border">
						Consultas
					</h6>

					<li className="list-none">
						<Link
							to="/Contacto"
							className="block rounded-lg px-1 py-2 text-sm font-medium  grid place-items-center text-gray-500 hover:bg-gray-200 hover:text-gray-700">
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
		</div>
	);
}
