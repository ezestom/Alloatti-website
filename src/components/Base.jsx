import { WithClose } from "./WithClose";
import { Navbar } from "./Navbar";
import { useTheme } from "../context/ThemeContext";
import { Footer } from "./Footer";
import { Home } from "./Home";

export function Base() {
	const { isDarkTheme } = useTheme();
	return (
		<>
			<div
				className={`relative bg-${
					isDarkTheme ? " bg-gray-800" : "gray-50"
				} h-screen flex  flex-col `}>
				<Navbar />

				<Home />
			</div>
			<Footer />
		</>
	);
}
