import logoDark from "../../src/assets/img/logoFinalDark.png";
import logoLight from "../../src/assets/img/logoFinalLight.png";
import { FaChevronDown } from "react-icons/fa";
import { RiHomeLine } from "react-icons/ri";
import { useTheme } from "../context/ThemeContext";
import { Link } from "react-router-dom";
import { ThemeButton } from "./ThemeButton";
import { AiFillHome } from "react-icons/ai";
import { GiFactory, GiNetworkBars } from "react-icons/gi";
import {
	BsBriefcaseFill,
	BsFillChatRightTextFill,
	BsNutFill,
} from "react-icons/bs";

export function Navbar() {
	const { isDarkTheme } = useTheme();

	const logoTurnTop = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	};
	return (
		<div
			className={` z-10 px-8 border-gray-200 h-screen fixed   w-screen  max-w-xs bg-${
				isDarkTheme ? "bg-gray-800 z-10  " : " bg-gray-50"
			}`}>
			<ThemeButton />
			<div className=" h-auto  ">
				<span className="">
					<Link onClick={logoTurnTop} to="./">
						{isDarkTheme ? (
							<img
								src={logoDark}
								alt="logo"
								className="mx-auto h-30 w-auto py-5"
							/>
						) : (
							<img
								src={logoLight}
								alt="logo"
								className="mx-auto h-30 w-auto pt-5"
							/>
						)}
					</Link>
				</span>

				<ul className="mt-6 space-y-1">
					<Link>
						<Link
							to="/"
							className=" flex items-center justify-start gap-1 block rounded-lg bg-gray-200 px-4 py-2 text-m font-medium text-gray-700">
							<AiFillHome />
							Inicio
							{RiHomeLine}
						</Link>
					</Link>

					<li>
						<details className="group [&_summary::-webkit-details-marker]:hidden">
							<summary className="flex cursor-pointer items-center justify-between rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-200 hover:text-gray-700">
								<span className=" flex justify-start items-center gap-1 text-m font-medium">
									<GiFactory />
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
										className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-200 hover:text-gray-700">
										Automáticas
									</Link>
								</li>
								<li>
									<Link
										to="/Semiautomaticas"
										className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-200 hover:text-gray-700">
										Semiautomáticas
									</Link>
								</li>
								<li>
									<Link
										to="Automaticas-especiales"
										className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-200 hover:text-gray-700">
										Automáticas Especiales
									</Link>
								</li>

								<li>
									<Link
										to="bidones-descartables"
										className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-200 hover:text-gray-700">
										Para bidones descartables
									</Link>
								</li>
							</ul>
						</details>
					</li>

					<li>
						<Link
							to="/nosotros"
							className=" flex justify-start items-center gap-1 block rounded-lg px-4 py-2 text-m font-medium text-gray-500 hover:bg-gray-200 hover:text-gray-700">
							<BsBriefcaseFill />
							Nosotros
						</Link>
					</li>

					<li>
						<Link
							to="/servicios"
							className="flex justify-start items-center gap-1 block rounded-lg px-4 py-2 text-m font-medium text-gray-500 hover:bg-gray-200 hover:text-gray-700">
							<BsNutFill />
							Servicios
						</Link>
					</li>

					<li>
						<details className="group [&_summary::-webkit-details-marker]:hidden">
							<summary className="flex cursor-pointer items-center justify-between rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-200 hover:text-gray-700">
								<span className=" flex items-center justify-start gap-1 text-m font-medium">
									<GiNetworkBars />
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
										className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-200 hover:text-gray-700">
										Normas IVESS
									</Link>
								</li>
								<li>
									<Link
										to=""
										className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-200 hover:text-gray-700">
										Últimas noticias
									</Link>
								</li>
								<li>
									<Link
										to=""
										className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-200 hover:text-gray-700">
										Soluciones
									</Link>
								</li>
							</ul>
						</details>
						<li>
							<Link
								to=""
								className="flex justify-start items-center gap-1 block rounded-lg px-4 py-2 text-m font-medium text-gray-500 hover:bg-gray-200 hover:text-gray-700">
								<BsFillChatRightTextFill />
								Contacto
							</Link>
						</li>
					</li>
				</ul>
			</div>
		</div>
	);
}
