import { Inicio } from "./pages/Inicio.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Error } from "./pages/Error.jsx";
import { Nosotros } from "./pages/Nosotros.jsx";
import { Automatica } from "./pages/Automatica.jsx";
import { UltimasNoticias } from "./pages/UltimasNoticias.jsx";
import { ControlPorCelular } from "./pages/ControlPorCelular.jsx";
import { Contacto } from "./pages/Contacto.jsx";
import { NormasIvess } from "./pages/NormasIvess.jsx";
import { PreguntasFrecuentes } from "./pages/PreguntasFrecuentes.jsx";
function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Inicio />} />
				<Route path="*" element={<Error />} />
				<Route path="/nosotros" element={<Nosotros />} />
				<Route path="/Automatica" element={<Automatica />} />
				<Route path="UltimasNoticias" element={<UltimasNoticias />} />
				<Route
					path="/ControlPorCelular"
					element={<ControlPorCelular />}
				/>
				<Route path="/Contacto" element={<Contacto />} />
				<Route path="/NormasIvess" element={<NormasIvess />} />
				<Route path="/PreguntasFrecuentes" element={<PreguntasFrecuentes />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
