import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster } from "sileo";

const Inicio = lazy(() => import("./pages/Inicio.jsx").then(m => ({ default: m.Inicio })));
const Error = lazy(() => import("./pages/Error.jsx").then(m => ({ default: m.Error })));
const Nosotros = lazy(() => import("./pages/Nosotros.jsx").then(m => ({ default: m.Nosotros })));
const BidonesRetornables = lazy(() => import("./pages/BidonesRetornables.jsx").then(m => ({ default: m.BidonesRetornables })));
const BidonesDescartables = lazy(() => import("./pages/BidonesDescartables.jsx").then(m => ({ default: m.BidonesDescartables })));
const Contacto = lazy(() => import("./pages/Contacto.jsx").then(m => ({ default: m.Contacto })));
const PreguntasFrecuentes = lazy(() => import("./pages/PreguntasFrecuentes.jsx").then(m => ({ default: m.PreguntasFrecuentes })));
const Accesorios = lazy(() => import("./pages/Accesorios.jsx").then(m => ({ default: m.Accesorios })));
const UltimasNoticias = lazy(() => import("./pages/UltimasNoticias.jsx").then(m => ({ default: m.UltimasNoticias })));
const Normas = lazy(() => import("./pages/Normas.jsx").then(m => ({ default: m.Normas })));
const MaquinasPrecios = lazy(() => import("./pages/MaquinasPrecios.jsx").then(m => ({ default: m.MaquinasPrecios }))); // Cotizador de precios de maquinas

function App() {
	return (
		<>
			<Toaster position="bottom-center" />
			<BrowserRouter>
				<Suspense fallback={null}>
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
							path="/maquinas/precios"
							element={<MaquinasPrecios />}
						/>
						<Route
							path="/preguntas-frecuentes"
							element={<PreguntasFrecuentes />}
						/>
					</Routes>
				</Suspense>
			</BrowserRouter>
		</>
	);
}

export default App;
