import { WithClose } from "../src/components/WithClose";
import { HeaderDesktop } from "../src/components/HeaderDesktop";
import { Footer } from "../src/components/Footer";
import { Main } from "../src/components/Main";

function App() {
	return (
		<>
			<div className="h-screen flex flex-col justify-between ">
				<WithClose />
				<main className="flex">
					<HeaderDesktop />
					<Main />
				</main>

				<Footer />
			</div>
		</>
	);
}

export default App;
