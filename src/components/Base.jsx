import { Promotion } from "./Promotion";
import { WithClose } from "./WithClose";
import { Navbar } from "./Navbar";
import { useTheme } from "../context/ThemeContext";
import { Footer } from "./Footer";

export function Base() {
	const { isDarkTheme } = useTheme();
	return (
		<>
			<div
				className={`bg-${
					isDarkTheme ? " bg-gray-800" : "gray-100"
				} h-screen flex  flex-col `}>
				<Navbar />
				<WithClose />
				<Promotion />
				<Footer />
			</div>
		</>
	);
}
