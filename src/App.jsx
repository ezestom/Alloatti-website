import { Inicio } from "./pages/Inicio.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Error } from "./pages/Error.jsx";
import { Nosotros } from "./pages/Nosotros.jsx";
import { BidonesRetornables } from "./pages/BidonesRetornables.jsx";
import { UltimasNoticias } from "./pages/UltimasNoticias.jsx";
import { BidonesDescartables } from "./pages/BidonesDescartables.jsx";
import { Contacto } from "./pages/Contacto.jsx";
import { PreguntasFrecuentes } from "./pages/PreguntasFrecuentes.jsx";
import { Accesorios } from "./pages/Accesorios.jsx";
import { Normas } from "./pages/Normas.jsx";
function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Inicio />} />
				<Route path="*" element={<Error />} />
				<Route path="/nosotros" element={<Nosotros />} />
				<Route
					path="/BidonesRetornables"
					element={<BidonesRetornables />}
				/>
				<Route
					path="/BidonesDescartables"
					element={<BidonesDescartables />}
				/>
				<Route path="/Accesorios" element={<Accesorios />} />
				<Route path="/Normas" element={<Normas />} />
				<Route path="UltimasNoticias" element={<UltimasNoticias />} />
				<Route path="/Contacto" element={<Contacto />} />
				<Route
					path="/PreguntasFrecuentes"
					element={<PreguntasFrecuentes />}
				/>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
