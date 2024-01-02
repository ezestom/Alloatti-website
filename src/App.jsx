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
					path="/maquina-para-bidones-retornables"
					element={<BidonesRetornables />}
				/>
				<Route
					path="/maquina-para-bidones-descartables"
					element={<BidonesDescartables />}
				/>
				<Route
					path="/accesorios-para-maquinas"
					element={<Accesorios />}
				/>
				<Route path="/normas-de-calidad" element={<Normas />} />
				<Route path="/ultimas-noticias" element={<UltimasNoticias />} />
				<Route path="/contacto" element={<Contacto />} />
				<Route
					path="/preguntas-frecuentes"
					element={<PreguntasFrecuentes />}
				/>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
