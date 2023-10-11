import { Inicio } from "./pages/Inicio.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Error } from "./pages/Error.jsx";
import { NosotrosPage } from "./pages/NosotrosPage.jsx";
function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Inicio />} />
				<Route path="*" element={<Error />} />
				<Route path="/nosotros" element={<NosotrosPage />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
