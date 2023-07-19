import logo from "../../src/assets/img/logo.jpg";
import { FaChevronDown } from "react-icons/fa";
import { RiHomeLine } from "react-icons/ri";
import { useTheme } from "../context/ThemeContext";
import { Link } from "react-router-dom";

export function Navbar() {
	const { isDarkTheme } = useTheme();
	return (
		<div
			className={`h-screen flex flex-col w-screen justify-start itres-start border-e  max-w-xs bg-${
				isDarkTheme ? "black" : "white"
			}`}>
			<div className="p-8 h-auto ">
				<span>
					<Link to="./">
						<img
							src={logo}
							alt="logo-alloatti"
							className="rounded"
						/>
					</Link>
				</span>

				<ul className="mt-6 space-y-1">
					<Link>
						<Link
							to="/"
							className="block rounded-lg bg-gray-100 px-4 py-2 text-m font-medium text-gray-700">
							Inicio
							{RiHomeLine}
						</Link>
					</Link>

					<li>
						<details className="group [&_summary::-webkit-details-marker]:hidden">
							<summary className="flex cursor-pointer items-center justify-between rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700">
								<span className="text-m font-medium">
									Máquinas
								</span>
								<span className="shrink-0 transition duration-300 group-open:-rotate-180">
									<FaChevronDown />
								</span>
							</summary>

							<ul className="mt-2 space-y-1 px-4">
								<li>
									<Link
										to="Automaticas"
										className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700">
										Automáticas
									</Link>
								</li>
								<li>
									<Link
										to="/Semiautomaticas"
										className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700">
										Semiautomáticas
									</Link>
								</li>
								<li>
									<Link
										to="Automaticas-especiales"
										className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700">
										Automáticas Especiales
									</Link>
								</li>

								<li>
									<Link
										to="bidones-descartables"
										className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700">
										Para bidones descartables
									</Link>
								</li>
							</ul>
						</details>
					</li>

					<li>
						<Link
							to="/nosotros"
							className="block rounded-lg px-4 py-2 text-m font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700">
							Nosotros
						</Link>
					</li>

					<li>
						<Link
							to="/servicios"
							className="block rounded-lg px-4 py-2 text-m font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700">
							Servicios
						</Link>
					</li>

					<li>
						<details className="group [&_summary::-webkit-details-marker]:hidden">
							<summary className="flex cursor-pointer items-center justify-between rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700">
								<span className="text-m font-medium">
									Ventas
								</span>
								<span className="shrink-0 transition duration-300 group-open:-rotate-180">
									<FaChevronDown />
								</span>
							</summary>

							<ul className="mt-2 space-y-1 px-4">
								<li>
									<Link
										to=""
										className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700">
										Normas IVESS
									</Link>
								</li>
								<li>
									<Link
										to=""
										className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700">
										Últimas noticias
									</Link>
								</li>
								<li>
									<Link
										to=""
										className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700">
										Soluciones
									</Link>
								</li>
							</ul>
						</details>
						<li>
							<Link
								to=""
								className="block rounded-lg px-4 py-2 text-m font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700">
								Contacto
							</Link>
						</li>
					</li>
				</ul>
			</div>
		</div>
	);
}
