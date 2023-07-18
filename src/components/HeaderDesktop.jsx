import logo from "../../src/assets/img/logo.jpg";
import { FaChevronDown } from "react-icons/fa";
import { RiHomeLine } from "react-icons/ri";

export function HeaderDesktop() {
	return (
		<div className="flex flex-col w-screen justify-between  border-e bg-white max-w-xs 	">
			<div className="p-8">
				<span>
					<a href="./">
						<img
							src={logo}
							alt="logo-alloatti"
							className="rounded"
						/>
					</a>
				</span>

				<ul className="mt-6 space-y-1">
					<li>
						<a
							href=""
							className="block rounded-lg bg-gray-100 px-4 py-2 text-m font-medium text-gray-700">
							Inicio
							{RiHomeLine}
						</a>
					</li>

					<li>
						<details className="group [&_summary::-webkit-details-marker]:hidden">
							<summary className="flex cursor-pointer items-center justify-between rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700">
								<span className="text-m font-medium">
									Productos
								</span>
								<span className="shrink-0 transition duration-300 group-open:-rotate-180">
									<FaChevronDown />
								</span>
							</summary>

							<ul className="mt-2 space-y-1 px-4">
								<li>
									<a
										href=""
										className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700">
										Máquinas semiautomáticas
									</a>
								</li>
								<li>
									<a
										href=""
										className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700">
										Máquinas semiautomáticas
									</a>
								</li>
								<li>
									<a
										href=""
										className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700">
										Máquinas automáticas especiales
									</a>
								</li>

								<li>
									<a
										href=""
										className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700">
										Máquinas para bidones descartables
									</a>
								</li>
							</ul>
						</details>
					</li>

					<li>
						<a
							href=""
							className="block rounded-lg px-4 py-2 text-m font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700">
							Nosotros
						</a>
					</li>

					<li>
						<a
							href=""
							className="block rounded-lg px-4 py-2 text-m font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700">
							Servicios
						</a>
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
									<a
										href=""
										className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700">
										Normas IVESS
									</a>
								</li>
								<li>
									<a
										href=""
										className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700">
										Últimas noticias
									</a>
								</li>
								<li>
									<a
										href=""
										className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700">
										Soluciones
									</a>
								</li>
							</ul>
						</details>
						<li>
							<a
								href=""
								className="block rounded-lg px-4 py-2 text-m font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700">
								Contacto
							</a>
						</li>
					</li>
				</ul>
			</div>
		</div>
	);
}
