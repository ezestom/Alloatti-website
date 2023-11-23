import { Link } from "react-router-dom";

import { ThemeButton } from "./ThemeButton";
import { GiNetworkBars } from "react-icons/gi";
import { FaPrescriptionBottle } from "react-icons/fa";
import { CiPillsBottle1 } from "react-icons/ci";
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
		<div className=" z-10 fixed w-screen  bottom-0 flex justify-around items-center">
			<ThemeButton />

			<div>
				<ul className="flex w-screen justify-around  bg-white rounded-lg">
					<li className="list-none">
						<Link
							onClick={scrollToTop}
							to="/"
							className=" rounded-lg  py-2 text-sm font-medium  grid place-items-center text-gray-500 ">
							<svg width="35" height="35" viewBox="0 0 24 24">
								<path
									fill="#666666"
									d="M4 21V9l8-6l8 6v12h-6v-7h-4v7H4Z"
								/>
							</svg>
							<span className="text-xs">Inicio</span>
						</Link>
					</li>

					{/* <li className="list-none">
						<Link
							onClick={scrollToTop}
							to="/BidonesRetornables"
							className=" rounded-lg  py-2 text-sm font-medium  grid place-items-center text-gray-500 ">
							<FaPrescriptionBottle className="text-2xl" />
							<span className="text-xs ">Retornables</span>
						</Link>
					</li>

					<li className="list-none">
						<Link
							onClick={scrollToTop}
							to="/BidonesDescartables"
							className=" rounded-lg  py-2 text-sm font-medium  grid place-items-center text-gray-500 ">
							<CiPillsBottle1 className="text-2xl" />
							<span className="text-xs ">Descartables</span>
						</Link>
					</li> */}

					<li className="list-none">
						<Link
							onClick={scrollToTop}
							to="/Nosotros"
							className=" rounded-lg  py-2 text-sm font-medium  grid place-items-center text-gray-500 ">
							<svg width="35" height="35" viewBox="0 0 24 24">
								<path
									fill="#666666"
									d="M10 2h4a2 2 0 0 1 2 2v2h4a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8c0-1.11.89-2 2-2h4V4c0-1.11.89-2 2-2m4 4V4h-4v2h4Z"
								/>
							</svg>
							<span className="text-xs">Nosotros</span>
						</Link>
					</li>

					<li className="list-none">
						<Link
							onClick={scrollToTop}
							to="/PreguntasFrecuentes"
							className=" rounded-lg  py-2 text-sm font-medium  grid place-items-center text-gray-500 ">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="35"
								height="35"
								viewBox="0 0 24 24">
								<path
									fill="#666666"
									d="M12 23q-2.8 0-5.15-1.275T3 18.325V21H1v-6h6v2H4.525q1.2 1.8 3.163 2.9T12 21q1.875 0 3.513-.713t2.85-1.924q1.212-1.213 1.925-2.85T21 12h2q0 2.275-.863 4.275t-2.362 3.5q-1.5 1.5-3.5 2.363T12 23ZM1 12q0-2.275.863-4.275t2.362-3.5q1.5-1.5 3.5-2.362T12 1q2.8 0 5.15 1.275t3.85 3.4V3h2v6h-6V7h2.475q-1.2-1.8-3.163-2.9T12 3q-1.875 0-3.513.713t-2.85 1.924Q4.426 6.85 3.714 8.488T3 12H1Zm11 6q.525 0 .888-.363t.362-.887q0-.525-.363-.9T12 15.475q-.525 0-.888.363t-.362.887q0 .525.363.9T12 18Zm-.9-3.8h1.825q0-.9.213-1.35t.862-1.1q.875-.875 1.163-1.413t.287-1.287q0-1.4-1-2.225T12 6q-1.25 0-2.15.65T8.55 8.5l1.65.7q.175-.65.663-1.075T12 7.7q.675 0 1.137.388t.463 1.037q0 .425-.2.85t-.85 1q-.825.725-1.137 1.413T11.1 14.2Z"
								/>
							</svg>
							<span className="text-xs">Preguntas</span>
						</Link>
					</li>

					<li className="list-none">
						<Link
							onClick={scrollToTop}
							to="/Normas"
							className=" rounded-lg  py-2 text-sm font-medium  grid place-items-center text-gray-500 ">
							<svg width="35" height="35" viewBox="0 0 24 24">
								<path
									fill="#666666"
									d="M12 22q-3.475-.875-5.738-3.988T4 11.1V5l8-3l8 3v6.1q0 3.8-2.263 6.913T12 22Zm0-2.1q2.425-.75 4.05-2.963T17.95 12H12V4.125l-6 2.25v5.175q0 .175.05.45H12v7.9Z"
								/>
							</svg>
							<span className="text-xs">Normas</span>
						</Link>
					</li>

					<li className="list-none">
						<Link
							onClick={scrollToTop}
							to="/UltimasNoticias"
							className=" rounded-lg  py-2 text-sm font-medium  grid place-items-center text-gray-500 ">
							<svg width="35" height="35" viewBox="0 0 24 24">
								<path
									fill="#666666"
									d="M4 21q-.825 0-1.413-.588T2 19V5q0-.825.588-1.413T4 3h16q.825 0 1.413.588T22 5v14q0 .825-.588 1.413T20 21H4Zm0-2h16V5H4v14Zm3-2h10q.425 0 .713-.288T18 16q0-.425-.288-.713T17 15H7q-.425 0-.713.288T6 16q0 .425.288.713T7 17Zm0-4h2q.425 0 .713-.288T10 12V8q0-.425-.288-.713T9 7H7q-.425 0-.713.288T6 8v4q0 .425.288.713T7 13Zm6 0h4q.425 0 .713-.288T18 12q0-.425-.288-.713T17 11h-4q-.425 0-.713.288T12 12q0 .425.288.713T13 13Zm0-4h4q.425 0 .713-.288T18 8q0-.425-.288-.713T17 7h-4q-.425 0-.713.288T12 8q0 .425.288.713T13 9ZM4 19V5v14Z"
								/>
							</svg>
							<span className="text-xs">Noticias</span>
						</Link>
					</li>

					<li className="list-none">
						<Link
							onClick={scrollToTop}
							to="/Contacto"
							className=" rounded-lg  py-2 text-sm font-medium  grid place-items-center text-gray-500 ">
							<svg width="35" height="35" viewBox="0 0 24 24">
								<path
									fill="#666666"
									d="M20 2H4a2 2 0 0 0-2 2v18l4-4h14a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2M8 14H6v-2h2v2m0-3H6V9h2v2m0-3H6V6h2v2m7 6h-5v-2h5v2m3-3h-8V9h8v2m0-3h-8V6h8v2Z"
								/>
							</svg>
							<span className="text-xs">Contacto</span>
						</Link>
					</li>
				</ul>
			</div>
			<div className="fixed bottom-20 bg-red- right-0 z-10">
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
