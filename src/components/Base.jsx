import { Navbar } from "./Navbar";
import { useTheme } from "../context/ThemeContext";
import { NavbarMobile } from "./NavbarMobile";
import { useEffect, useState } from "react";

export function Base() {
	const { isDarkTheme } = useTheme();
	const [windowWidth, setWindowWidth] = useState(window.innerWidth);

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	};
	useEffect(() => {
		const hanfleRsize = () => {
			setWindowWidth(window.innerWidth);
		};
		window.addEventListener("resize", hanfleRsize);
		return () => {
			window.removeEventListener("resize", hanfleRsize);
		};
	}, []);

	return (
		<>
			<div
				className={`relative bg-${
					isDarkTheme ? " bg-gray-900" : "gray-50"
				} h-screen flex  flex-col `}>
				{windowWidth < 1023 ? <NavbarMobile /> : <Navbar />}
				<div className="fixed bottom-3 bg-red- right-3 z-10">
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
			<footer
				className={`w-full flex justify-center items-center ${
					isDarkTheme ? "bg-gray-900 text-white" : ""
				} `}>
				<p className="text-xs">
					© 2021 Fresh Water Project. All rights reserved.
				</p>
			</footer>
		</>
	);
}
