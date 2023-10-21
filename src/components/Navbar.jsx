import logoDark from "../../src/assets/img/logoFinalDark.png";
import logoLight from "../../src/assets/img/logoFinalLight.png";
import { FaChevronDown } from "react-icons/fa";
import { RiHomeLine } from "react-icons/ri";
import { useTheme } from "../context/ThemeContext";
import { Link, useNavigate } from "react-router-dom";
import { ThemeButton } from "./ThemeButton";
import { AiFillHome } from "react-icons/ai";
import { GiFactory, GiNetworkBars } from "react-icons/gi";
import {
	BsBriefcaseFill,
	BsFillChatRightTextFill,
	BsNutFill,
} from "react-icons/bs";
import { Footer } from "../components/Footer";

export function Navbar() {
	const { isDarkTheme } = useTheme();

	const logoTurnTop = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	};
	const navigate = useNavigate();
	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	};
	return (
		<div
			className={` z-10 px-8 h-screen fixed  w-screen  max-w-xs bg-${
				isDarkTheme ? "bg-gray-800 z-10  " : " bg-gray-50"
			} `}>
			<ThemeButton />
			<div className=" h-auto  ">
				<span
					onClick={() => {
						navigate("/");
					}}
					className="">
					<Link onClick={logoTurnTop}>
						{isDarkTheme ? (
							<img
								src={logoDark}
								alt="logo"
								className="mx-auto h-50 w-auto py-10"
							/>
						) : (
							<img
								src={logoLight}
								alt="logo"
								className="mx-auto h-50 w-auto py-10"
							/>
						)}
					</Link>
				</span>

				<ul className="mt-6 space-y-1">
					<Link>
						<Link
							onClick={scrollToTop}
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
										to="/Automatica"
										className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-200 hover:text-gray-700">
										Automática
									</Link>
								</li>
								<li>
									<Link
										to="/ControlPorCelular"
										className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-200 hover:text-gray-700">
										Control por celular
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
							to="/PreguntasFrecuentes"
							className="flex justify-start items-center gap-1 block rounded-lg px-4 py-2 text-m font-medium text-gray-500 hover:bg-gray-200 hover:text-gray-700">
							<BsNutFill />
							Preguntas Frecuentes
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
										to="/NormasIvess"
										className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-200 hover:text-gray-700">
										Normas IVESS
									</Link>
								</li>
								<li>
									<Link
										to="/UltimasNoticias"
										className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-200 hover:text-gray-700">
										Últimas noticias
									</Link>
								</li>
							</ul>
						</details>
						<li>
							<Link
								to="/Contacto"
								className="flex justify-start items-center gap-1 block rounded-lg px-4 py-2 text-m font-medium text-gray-500 hover:bg-gray-200 hover:text-gray-700">
								<BsFillChatRightTextFill />
								Contacto
							</Link>
						</li>
					</li>
				</ul>
			</div>
			<Footer />
		</div>
	);
}
