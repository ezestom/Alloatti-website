import LogoLigth from "../img/Alloatti-logo-light.png";
import LogoDark from "../img/Alloatti-logo-dark.png";
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
	BsFillQuestionSquareFill,
} from "react-icons/bs";
import { Footer } from "../components/Footer";
import { TopButton } from "./TopButton";
import { BackButton } from "./BackButton";

export function Navbar() {
	const { isDarkTheme } = useTheme();

	const navigate = useNavigate();
	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	};
	return (
		<div
			className={` z-20 px-8 fixed min-h-screen max-w-xs bg-${
				isDarkTheme ? "bg-gray-800 z-10  " : " bg-gray-50"
			} overflow-y-auto  `}>
			<ThemeButton />
			<div className=" h-auto  ">
				<span
					onClick={() => {
						navigate("/");
					}}
					className="">
					<Link onClick={scrollToTop}>
						{isDarkTheme ? (
							<img
								src={LogoDark}
								alt="logo"
								className="pt-11 hover:scale-95 active:scale-100 transition "
							/>
						) : (
							<img
								src={LogoLigth}
								alt="logo"
								className="pt-11 hover:scale-95 active:scale-100 transition"
							/>
						)}
					</Link>
				</span>

				<ul className="mt-6 space-y-1  ">
					<Link
						onClick={scrollToTop}
						to="/"
						className=" flex items-center justify-start gap-1 block rounded-lg bg-gray-200 px-4 py-2 text-m font-medium text-gray-700">
						<AiFillHome />
						Inicio
						{RiHomeLine}
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
										onClick={scrollToTop}
										to="/maquina-para-bidones-retornables"
										className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-200 hover:text-gray-700">
										~ Bidones Retornables
									</Link>
								</li>
								<li>
									<Link
										onClick={scrollToTop}
										to="/maquina-para-bidones-descartables"
										className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-200 hover:text-gray-700">
										~ Bidones Descartables
									</Link>
								</li>
								<li>
									<Link
										onClick={scrollToTop}
										to="/accesorios-para-maquinas"
										className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-200 hover:text-gray-700">
										~ Accesorios
									</Link>
								</li>
							</ul>
						</details>
					</li>

					<li>
						<Link
							onClick={scrollToTop}
							to="/nosotros"
							className=" flex justify-start items-center gap-1 block rounded-lg px-4 py-2 text-m font-medium text-gray-500 hover:bg-gray-200 hover:text-gray-700">
							<BsBriefcaseFill />
							Nosotros
						</Link>
					</li>

					<li>
						<Link
							onClick={scrollToTop}
							to="/preguntas-frecuentes"
							className="flex justify-start items-center gap-1 block rounded-lg px-4 py-2 text-m font-medium text-gray-500 hover:bg-gray-200 hover:text-gray-700">
							<BsFillQuestionSquareFill />
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
										onClick={scrollToTop}
										to="/normas-de-calidad"
										className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-200 hover:text-gray-700">
										Normas de calidad
									</Link>
								</li>
								<li>
									<Link
										onClick={scrollToTop}
										to="/ultimas-noticias"
										className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-200 hover:text-gray-700">
										Últimas noticias
									</Link>
								</li>
							</ul>
						</details>
						<li>
							<Link
								onClick={scrollToTop}
								to="/contacto"
								className="flex justify-start items-center gap-1 block rounded-lg px-4 py-2 text-m font-medium text-gray-500 hover:bg-gray-200 hover:text-gray-700">
								<BsFillChatRightTextFill />
								Contacto
							</Link>
						</li>
					</li>
				</ul>
			</div>
			<div className="fixed top-12 right-0 z-10 ">
				<BackButton />
			</div>
			<div className="fixed bottom-1 right-0 z-10">
				<TopButton />
			</div>
			<Footer />
		</div>
	);
}
