import { Navbar } from "./Navbar";
import { useTheme } from "../context/ThemeContext";
import { NavbarMobile } from "./NavbarMobile";
import { useEffect, useState } from "react";

export function Base() {
	const { isDarkTheme } = useTheme();
	const [windowWidth, setWindowWidth] = useState(window.innerWidth);


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
				
			</div>
		</>
	);
}
