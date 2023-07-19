import { Inicio } from "./pages/Inicio.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Error } from "./pages/Error.jsx";
import { Nosotros } from "./pages/Nosotros.jsx";
function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Inicio />} />
				<Route path="/:id" element={<Error />} />
				<Route path="/nosotros" element={<Nosotros />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
