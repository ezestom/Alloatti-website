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
					isDarkTheme ? "black" : "white"
				} h-screen flex  flex-col justify-between`}>
				<WithClose />
				<Promotion />
				<main className="flex">
					<Navbar />
				</main>
				<Footer />
			</div>
		</>
	);
}
