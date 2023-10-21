import { Navbar } from "./Navbar";
import { useTheme } from "../context/ThemeContext";
import { Footer } from "./Footer";

export function Base() {
	const { isDarkTheme } = useTheme();
	return (
		<>
			<div
				className={`relative bg-${
					isDarkTheme ? " bg-gray-900" : "gray-50"
				} h-screen flex  flex-col `}>
				<Navbar />
			</div>
			<Footer />
		</>
	);
}
