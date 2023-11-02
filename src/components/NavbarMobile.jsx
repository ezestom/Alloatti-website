import { Link } from "react-router-dom";

import { ThemeButton } from "./ThemeButton";
import { AiFillHome } from "react-icons/ai";
import { GiFactory, GiNetworkBars } from "react-icons/gi";
import { BiMobile } from "react-icons/bi";
import {
	BsBriefcaseFill,
	BsFillChatRightTextFill,
	BsFillQuestionSquareFill,
} from "react-icons/bs";
import { SiPagseguro } from "react-icons/si";

export function NavbarMobile() {
	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	};
	return (
		<div className=" z-10 fixed w-screen bottom-0 flex justify-around items-center">
			<ThemeButton />

			<div>
				<ul className="flex w-screen justify-around  bg-white rounded-lg">
					<li className="list-none">
						<Link
							to="/"
							className=" rounded-lg  py-2 text-sm font-medium  grid place-items-center text-gray-500 hover:bg-gray-200 hover:text-gray-700">
							<AiFillHome className="text-2xl" />
							<span className="text-xs">Inicio</span>
						</Link>
					</li>

					<li className="list-none">
						<Link
							to="/ControlPorCelular"
							className=" rounded-lg  py-2 text-sm font-medium  grid place-items-center text-gray-500 hover:bg-gray-200 hover:text-gray-700">
							<GiFactory className="text-2xl" />
							<span className="text-xs ">Auto</span>
						</Link>
					</li>

					<li className="list-none">
						<Link
							to="/ControlPorCelular"
							className=" rounded-lg  py-2 text-sm font-medium  grid place-items-center text-gray-500 hover:bg-gray-200 hover:text-gray-700">
							<BiMobile className="text-2xl" />
							<span className="text-xs ">Control</span>
						</Link>
					</li>

					<li className="list-none">
						<Link
							to="/nosotros"
							className=" rounded-lg  py-2 text-sm font-medium  grid place-items-center text-gray-500 hover:bg-gray-200 hover:text-gray-700">
							<BsBriefcaseFill className="text-2xl" />
							<span className="text-xs">Nosotros</span>
						</Link>
					</li>

					<li className="list-none">
						<Link
							to="/PreguntasFrecuentes"
							className=" rounded-lg  py-2 text-sm font-medium  grid place-items-center text-gray-500 hover:bg-gray-200 hover:text-gray-700">
							<BsFillQuestionSquareFill className="text-2xl" />
							<span className="text-xs">Preguntas</span>
						</Link>
					</li>

					<li className="list-none">
						<Link
							to="/NormasIvess"
							className=" rounded-lg  py-2 text-sm font-medium  grid place-items-center text-gray-500 hover:bg-gray-200 hover:text-gray-700">
							<SiPagseguro className="text-2xl" />
							<span className="text-xs">Normas</span>
						</Link>
					</li>

					<li className="list-none">
						<Link
							to="/UltimasNoticias"
							className=" rounded-lg  py-2 text-sm font-medium  grid place-items-center text-gray-500 hover:bg-gray-200 hover:text-gray-700">
							<GiNetworkBars className="text-2xl" />
							<span className="text-xs">Noticias</span>
						</Link>
					</li>

					<li className="list-none">
						<Link
							to="/Contacto"
							className=" rounded-lg  py-2 text-sm font-medium  grid place-items-center text-gray-500 hover:bg-gray-200 hover:text-gray-700">
							<BsFillChatRightTextFill className="text-2xl" />
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
