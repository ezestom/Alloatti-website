import { Base } from "../components/Base";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { SEO } from "../components/SEO";
import { PremiumFooter } from "../components/PremiumFooter";
import { Drawer } from "vaul";
import { 
	FaWhatsapp, 
	FaCalculator, 
	FaFileInvoiceDollar,
	FaLock,
	FaEye,
	FaEyeSlash,
	FaSignOutAlt,
	FaShareAlt,
	FaPrint,
	FaTag,
	FaCog,
	FaCheckCircle,
	FaCalendarAlt
} from "react-icons/fa";
import { useTheme } from "../context/ThemeContext";
import { sileo } from "sileo";
import PropTypes from "prop-types";
import { useDolarApi } from "../hooks/useDolarApi";

// Catalog database (identical to MaquinasPrecios.jsx)
const PRICE_DATABASE = {
	retornables: [
		{ id: "at-120", code: "AT-120", name: "AT-120 Automática", desc: "Línea automática industrial compacta. Ciclo optimizado.", capacity: "120 bidones/hora", price: 49500 },
		{ id: "at-180", code: "AT-180", name: "AT-180 Automática", desc: "Línea automática con lavado completo y tapado a presión.", capacity: "180 bidones/hora", price: 54300 },
		{ id: "at-240", code: "AT-240", name: "AT-240 Automática", desc: "Línea automática mediana para lavados profundos.", capacity: "240 bidones/hora", price: 59100 },
		{ id: "at-360", code: "AT-360", name: "AT-360 Automática", desc: "Línea de envasado de alta eficiencia y bajo mantenimiento.", capacity: "360 bidones/hora", price: 75000 },
		{ id: "at-480", code: "AT-480", name: "AT-480 Automática", desc: "Línea industrial de gran escala. Controles HMI integrados.", capacity: "480 bidones/hora", price: 89100 },
		{ id: "at-600", code: "AT-600", name: "AT-600 Automática", desc: "Máxima higiene y potencia. Para plantas de alta producción.", capacity: "600 bidones/hora", price: 116800 },
		{ id: "at-720", code: "AT-720", name: "AT-720 Automática", desc: "Línea de alto desempeño con pantalla de control central.", capacity: "720 bidones/hora", price: 127800 },
		{ id: "at-840", code: "AT-840", name: "AT-840 Automática", desc: "Operación desatendida de alta escala. Lavado de 2 min.", capacity: "840 bidones/hora", price: 142200 },
		{ id: "at-960", code: "AT-960", name: "AT-960 Automática", desc: "Línea premium de altísimo rendimiento para grandes embotelladoras.", capacity: "960 bidones/hora", price: 159200 }
	],
	opcionales_retornables: [
		{ id: "op-prelavado", code: "Prelavado Nuevo", name: "Prelavado ext/int no recirculante", desc: "Sistema adicional de prelavado directo sin retorno de agua.", capacity: "Opcional línea", price: 6900 },
		{ id: "op-ajuste", code: "Ajuste Picos", name: "Ajuste automático de picos y tapado", desc: "Regulación neumática automatizada según tamaño del bidón.", capacity: "Opcional línea", price: 5000 }
	],
	descartables: [
		{ id: "at-300d", code: "AT-300D", name: "AT-300D Semiautomática", desc: "Enjuagado, llenado y tapado rosca para descartables PET.", capacity: "300 bidones/hora", price: 19200 },
		{ id: "at-600d", code: "AT-600D", name: "AT-600D Automática", desc: "Línea automática en línea para bidones PET (6L, 8L y 10L).", capacity: "500 bidones/hora", price: 68900 }
	],
	accesorios: [
		{ id: "sacatapas-manual", code: "ST-M", name: "Sacatapas manual", desc: "Extractor de tapas tipo palanca de fácil operación.", capacity: "Manual", price: 2300 },
		{ id: "sacatapas-auto", code: "ST-A", name: "Sacatapas automático", desc: "Extractor de tapas neumático en línea antes de la prelavadora.", capacity: "Automático", price: 11100 },
		{ id: "carga-automatica", code: "CA-A", name: "Carga automática", desc: "Cargador automático de bidones vacíos al transportador.", capacity: "Periférico", price: 8700 },
		{ id: "jirafa", code: "JIR-500", name: "Jirafa elevadora de tapas", desc: "Elevador tipo sinfín para alimentar tolvas con tapas (500 unid).", capacity: "Periférico", price: 3300 },
		{ id: "tolva", code: "TOL-R", name: "Tolva distribuidora de tapas", desc: "Tolva rotativa orientadora y distribuidora de tapas.", capacity: "Periférico", price: 2700 },
		{ id: "canerias-llenadora", code: "CN-LL", name: "Cañerías llenadora en inoxidable", desc: "Mejora y actualización de conductos en acero inoxidable AISI 304.", capacity: "Inoxidable", price: 3100 },
		{ id: "canerias-lavadora", code: "CN-LV", name: "Cañerías lavadora en inoxidable", desc: "Mejora de cañerías del sector de lavado para agentes químicos.", capacity: "Inoxidable", price: 5000 },
		{ id: "horno", code: "H-TERM", name: "Horno termocontraíble", desc: "Túnel térmico para el sellado hermético de precintos termocontraíbles.", capacity: "Térmico", price: 2100 },
		{ id: "cinta-inox", code: "C-3000", name: "Cinta X3 mts. Inox. 3000", desc: "Cinta transportadora motorizada de 3m en acero inoxidable.", capacity: "Estructura", price: 2500 },
		{ id: "lavadora-ext-cepillos", code: "LV-EXT", name: "Lavadora ext. aut. con cepillos", desc: "Remoción mecánica de suciedad exterior mediante cepillos rotativos.", capacity: "Prelavado", price: 15500 },
		{ id: "prelavadora-int", code: "PL-INT", name: "Prelavadora automática de interior", desc: "Inyección a presión para desinfección interna previa al ciclo.", capacity: "Prelavado", price: 27800 },
		{ id: "prelavadora-ext-int", code: "PL-MIX", name: "Prelavadora aut. de exterior con cepillos e interior", desc: "Prelavadora integral combinada de alta potencia.", capacity: "Prelavado", price: 43100 },
		{ id: "prelavadora-ext-int-4vias", code: "PL-MIX4", name: "Prelavadora aut. de exterior con cepillos e interior (4 vías)", desc: "Prelavadora de alta gama con 4 vías de paso simultáneo.", capacity: "Prelavado", price: 55200 },
		{ id: "cinta-rodillos", code: "C-ROD", name: "Cinta de rodillos (por metro)", desc: "Transportador de rodillos libres por gravedad.", capacity: "Por metro", price: 480, isQuantifiable: true },
		{ id: "dioxido-cloro", code: "GEN-CLO2", name: "Dióxido de cloro", desc: "Sistema completo de dosificación y generación de Dióxido de Cloro.", capacity: "Tratamiento", price: 12300 }
	]
};

const ALL_ITEMS = [
	...PRICE_DATABASE.retornables,
	...PRICE_DATABASE.opcionales_retornables,
	...PRICE_DATABASE.descartables,
	...PRICE_DATABASE.accesorios
];

// Seller Login Screen
function SellerLogin({ password, setPassword, loginError, showPassword, setShowPassword, handleLogin }) {
	return (
		<div className="flex flex-col items-center justify-center min-h-[80vh] px-4 py-12">
			<div className="w-full max-w-md bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 rounded-3xl shadow-xl p-8 space-y-6">
				<div className="text-center space-y-3">
					<img 
						src="https://www.alloatti.com/Alloatti-logo-dark.png" 
						alt="Alloatti SRL" 
						className="mx-auto h-12 w-auto dark:invert transition-all duration-300"
					/>
					<div className="inline-flex items-center gap-1.5 bg-blue-50 dark:bg-blue-900/20 text-[#024ad8] dark:text-blue-400 text-[10px] font-black uppercase tracking-wider px-3 py-1 rounded-full">
						<FaLock className="text-[10px] animate-pulse" />
						Acceso Restringido
					</div>
					<h2 className="text-xl font-black text-slate-805 dark:text-white tracking-tight">
						Portal de Vendedores
					</h2>
					<p className="text-xs text-slate-500 dark:text-slate-400">
						Ingresa la clave autorizada para simular planes Ahora 24 y confeccionar cotizaciones.
					</p>
				</div>

				<form onSubmit={handleLogin} className="space-y-4">
					<div className="space-y-2 text-left">
						<label className="block text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
							Contraseña de Acceso
						</label>
						<div className="relative">
							<span className="absolute inset-y-0 left-0 pl-3.5 flex items-center text-slate-405">
								<FaLock />
							</span>
							<input
								type={showPassword ? "text" : "password"}
								value={password}
								onChange={(e) => setPassword(e.target.value)}
								className="w-full bg-slate-50 dark:bg-zinc-800/50 border border-slate-200 dark:border-zinc-805 rounded-xl py-3 pl-10 pr-10 text-sm font-semibold focus:outline-none focus:border-[#024ad8] focus:ring-1 focus:ring-[#024ad8] dark:text-white"
								placeholder="••••••••"
								required
								autoFocus
							/>
							<button
								type="button"
								onClick={() => setShowPassword(!showPassword)}
								className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-slate-400 hover:text-slate-700 dark:hover:text-slate-200"
							>
								{showPassword ? <FaEyeSlash /> : <FaEye />}
							</button>
						</div>
						{loginError && (
							<p className="text-[10px] font-bold text-red-500 mt-1">
								{loginError}
							</p>
						)}
					</div>

					<button
						type="submit"
						className="w-full py-3.5 bg-[#024ad8] hover:bg-[#0e3191] text-white rounded-xl font-extrabold text-xs uppercase tracking-wider transition-all shadow-lg shadow-blue-500/10 hover:shadow-blue-500/20"
					>
						Ingresar al Panel
					</button>
				</form>
			</div>
		</div>
	);
}

SellerLogin.propTypes = {
	password: PropTypes.string.isRequired,
	setPassword: PropTypes.func.isRequired,
	loginError: PropTypes.string.isRequired,
	showPassword: PropTypes.bool.isRequired,
	setShowPassword: PropTypes.func.isRequired,
	handleLogin: PropTypes.func.isRequired
};

// Simulation Breakdown / Quotation Card
function QuotationCard({ 
	selectedItemArray, 
	formatValue, 
	getDisplayPrice,
	showIva, 
	subtotalDisplay, 
	discountDisplay,
	ivaDisplay, 
	totalDisplay, 
	installmentDisplay,
	currency,
	bnaExchangeRate,
	handleWhatsAppShare, 
	handleCopyLink, 
	handlePrint, 
	handleClearQuote,
	handleUpdateQty,
	validationError
}) {
	return (
		<div className="print-card bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 rounded-3xl shadow-lg p-6 min-w-[300px] space-y-6">
			<div>
				<h2 className="text-base font-black tracking-tight text-slate-800 dark:text-white flex items-center gap-2">
					<FaCalculator className="text-[#024ad8]" />
					Simulador Ahora 24
				</h2>
				<p className="text-xs text-slate-400 mt-1">
					Selecciona máquinas y accesorios para simular la financiación del plan.
				</p>
			</div>

			{/* Selected items list */}
			{selectedItemArray.length === 0 ? (
				<div className="py-12 text-center border-2 border-dashed border-slate-100 dark:border-zinc-800/80 rounded-2xl flex flex-col items-center justify-center p-4">
					<svg className="w-8 h-8 text-slate-300 dark:text-zinc-750 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
						<path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
					</svg>
					<span className="text-xs font-semibold text-slate-405 dark:text-slate-505">Ningún equipo seleccionado</span>
				</div>
			) : (
				<div className="divide-y divide-slate-100 dark:divide-zinc-800 max-h-[200px] overflow-y-auto pr-2 scrollbar-thin">
					{selectedItemArray.map(item => (
						<div key={item.id} className="py-2.5 flex justify-between items-center gap-4 text-xs">
							<div className="flex-1">
								<span className="font-extrabold text-slate-700 dark:text-slate-205 block text-left">
									{item.name} {item.qty > 1 && `(x${item.qty})`}
								</span>
								<span className="text-[10px] text-slate-405 font-bold uppercase tracking-wider block text-left">{item.capacity}</span>
							</div>
							<div className="p-2 bg-slate-100 dark:bg-zinc-800 hover:bg-slate-200 dark:hover:bg-zinc-700 text-slate-700 dark:text-slate-205 rounded-xl font-bold text-xs transition-all flex items-center justify-center gap-1.5 border border-slate-200 dark:border-zinc-700">
								<span className="font-bold text-slate-805 dark:text-slate-100">
									{formatValue(getDisplayPrice(item.price) * item.qty)}
								</span>
								<button 
									onClick={() => handleUpdateQty(item.id, -item.qty)}
									className="no-print text-red-500 hover:text-red-705 w-5 h-5 rounded hover:bg-red-50 dark:hover:bg-red-955/20 flex items-center justify-center">
									<svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
										<path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
									</svg>
								</button>
							</div>
						</div>
					))}
				</div>
			)}

			{/* Calculations / Financial breakdown */}
			{selectedItemArray.length > 0 && (
				<div className="border-t border-slate-105 dark:border-zinc-800 pt-4 space-y-3">
					{validationError ? (
						<div className="p-3 bg-red-50 dark:bg-red-955/20 border border-red-200 dark:border-red-905 rounded-xl text-center text-[10px] font-bold text-red-650 dark:text-red-400">
							{validationError}
						</div>
					) : (
						<div className={`p-4 rounded-xl space-y-3 border text-left ${
							showIva ? "bg-emerald-50/20 dark:bg-emerald-955/5 border-emerald-150" : "bg-slate-50 dark:bg-zinc-800/40 border-slate-100 dark:border-zinc-805"
						}`}>
							<div className="flex justify-between text-xs font-semibold">
								<span className="text-slate-500 dark:text-slate-400">Suma Lista:</span>
								<span className="text-slate-800 dark:text-slate-205 font-bold">
									{formatValue(showIva ? subtotalDisplay * 1.105 : subtotalDisplay)}
								</span>
							</div>

							<div className="flex justify-between text-xs font-semibold text-emerald-650 dark:text-emerald-450">
								<span>Descuento Promocional (5%):</span>
								<span className="font-bold">
									- {formatValue(showIva ? discountDisplay * 1.105 : discountDisplay)}
								</span>
							</div>

							<div className="flex justify-between text-xs font-semibold text-slate-505 dark:text-slate-400">
								<span>IVA (10.5%):</span>
								<span className={`font-bold ${!showIva ? "line-through text-slate-400 dark:text-zinc-650" : ""}`}>
									{showIva ? `+ ${formatValue(ivaDisplay)}` : formatValue(ivaDisplay)}
								</span>
							</div>

							<div className="flex justify-between text-xs font-bold border-t border-dashed border-slate-205 dark:border-zinc-850 pt-2.5">
								<span className="text-slate-650 dark:text-slate-350">Total Plan:</span>
								<span className="text-slate-855 dark:text-slate-100 font-extrabold">{formatValue(totalDisplay)}</span>
							</div>

							<div className="flex flex-col items-center justify-center text-center pt-2">
								<span className="text-[9px] font-black uppercase tracking-widest text-[#024ad8] dark:text-blue-400">
									Financiación Directa
								</span>
								<span className="text-2xl font-black text-[#024ad8] dark:text-blue-400 mt-0.5">
									24x {formatValue(installmentDisplay)}
								</span>
								<span className="text-[9px] text-slate-400 dark:text-slate-505 font-bold mt-0.5">
									Cuotas mensuales fijas sin interés {currency === "ARS" ? "en pesos" : "en dólares"}
								</span>
							</div>
						</div>
					)}

					{currency === "ARS" && (
						<div className="text-[10px] bg-slate-50 dark:bg-zinc-800/50 p-2.5 rounded-xl text-slate-405 dark:text-slate-500 font-semibold text-center border border-slate-100 dark:border-zinc-850">
							Tipo de cambio de referencia: 1 USD = {formatValue(bnaExchangeRate)} (Dólar BNA Vendedor)
						</div>
					)}
				</div>
			)}

			{/* Actions (WhatsApp, Share, Print) */}
			{selectedItemArray.length > 0 && (
				<div className="no-print flex flex-col gap-2.5 pt-2">
					<button 
						onClick={handleWhatsAppShare}
						disabled={!!validationError}
						className={`w-full py-3 rounded-xl font-extrabold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 ${
							validationError
								? "bg-slate-200 dark:bg-zinc-800 text-slate-400 cursor-not-allowed"
								: "bg-[#25D366] hover:bg-[#1ebd59] text-white shadow-lg shadow-emerald-500/10 hover:shadow-emerald-500/25"
						}`}>
						<FaWhatsapp className="text-xl" />						
						Enviar por WhatsApp
					</button>

					<div className="grid grid-cols-2 gap-2.5">
						<button 
							onClick={handleCopyLink}
							disabled={!!validationError}
							className={`p-2.5 rounded-xl font-bold text-xs uppercase transition-all flex items-center justify-center gap-1.5 border ${
								validationError
									? "bg-slate-150 dark:bg-zinc-800 text-slate-400 border-transparent cursor-not-allowed"
									: "bg-slate-105 hover:bg-slate-200 dark:bg-zinc-805 dark:hover:bg-zinc-700 text-slate-705 dark:text-slate-200 border-slate-200 dark:border-zinc-700"
							}`}>
							Compartir
						</button>
						<button 
							onClick={handlePrint}
							disabled={!!validationError}
							className={`p-2.5 rounded-xl font-bold text-xs uppercase transition-all flex items-center justify-center gap-1.5 border ${
								validationError
									? "bg-slate-150 dark:bg-zinc-800 text-slate-400 border-transparent cursor-not-allowed"
									: "bg-slate-105 hover:bg-slate-200 dark:bg-zinc-805 dark:hover:bg-zinc-700 text-slate-705 dark:text-slate-200 border-slate-200 dark:border-zinc-700"
							}`}>
							Imprimir / PDF
						</button>
					</div>

					<button 
						onClick={handleClearQuote}
						className="w-full text-center text-xs text-red-500 hover:text-red-750 font-bold hover:underline transition-colors mt-2">
						Limpiar Selección
					</button>
				</div>
			)}
		</div>
	);
}

QuotationCard.propTypes = {
	selectedItemArray: PropTypes.array.isRequired,
	formatValue: PropTypes.func.isRequired,
	getDisplayPrice: PropTypes.func.isRequired,
	showIva: PropTypes.bool.isRequired,
	subtotalDisplay: PropTypes.number.isRequired,
	discountDisplay: PropTypes.number.isRequired,
	ivaDisplay: PropTypes.number.isRequired,
	totalDisplay: PropTypes.number.isRequired,
	installmentDisplay: PropTypes.number.isRequired,
	currency: PropTypes.string.isRequired,
	bnaExchangeRate: PropTypes.number.isRequired,
	handleWhatsAppShare: PropTypes.func.isRequired,
	handleCopyLink: PropTypes.func.isRequired,
	handlePrint: PropTypes.func.isRequired,
	handleClearQuote: PropTypes.func.isRequired,
	handleUpdateQty: PropTypes.func.isRequired,
	validationError: PropTypes.string.isRequired
};

// Client specific view component for Plan 24 Promotion Page
function ClientView({
	selectedItemArray,
	formatValue,
	getDisplayPrice,
	showIva,
	handleIvaToggle,
	currency,
	toggleCurrency,
	bnaExchangeRate,
	apiFailed,
	handleWhatsAppShare,
	handlePrint,
	handleCopyLink,
	isAuthorized,
	setPreviewAsClient,
	setSearchParams,
	isDarkTheme,
	validationError,
	subtotalUSD
}) {
	// Calculations
	const subtotalDisplay = subtotalUSD * (currency === "ARS" ? bnaExchangeRate : 1);
	const discountDisplay = subtotalDisplay * 0.05;
	const promoDisplay = subtotalDisplay - discountDisplay;
	const ivaDisplay = promoDisplay * 0.105;
	const finalTotalDisplay = showIva ? promoDisplay * 1.105 : promoDisplay;
	const installmentDisplay = finalTotalDisplay / 24;

	return (
		<div className="w-full max-w-5xl my-10 flex flex-col gap-6 pb-16">
			{/* Preview Banner for Sellers */}
			{isAuthorized && (
				<div className="bg-amber-500 text-white py-3.5 px-5 rounded-2xl text-center font-bold text-xs flex flex-col sm:flex-row items-center justify-between gap-3 shadow-md border border-amber-400 no-print">
					<span className="flex items-center gap-2">
						<FaLock />
						<span><strong>Vista Previa del Cliente:</strong> Estás previsualizando la simulación tal como la recibirá el cliente.</span>
					</span>
					<button 
						onClick={() => setPreviewAsClient(false)}
						className="bg-white text-amber-700 px-4 py-1.5 rounded-xl hover:bg-slate-105 transition-colors font-extrabold text-[10px] uppercase tracking-wider shadow-sm animate-pulse">
						Volver al Editor de Planes
					</button>
				</div>
			)}

			{/* Client view header */}
			<header className="hp-page-header no-print text-left">
				<div className="hp-eyebrow hp-eyebrow-blue flex items-center gap-2">
					<FaFileInvoiceDollar className="text-xs" />
					Simulación de Financiación • Plan Ahora 24
				</div>
				<h1 className="hp-h1">Tu Propuesta Comercial</h1>
				<p className="text-sm text-slate-550 dark:text-slate-400 mt-4 leading-relaxed">
					Detalle de cuotas y financiación directa de fábrica para el equipamiento seleccionado por tu asesor comercial.
				</p>
			</header>

			{/* Flyer Hero Banner Container */}
			<div className={`relative rounded-3xl p-8 md:p-14 border overflow-hidden shadow-2xl transition-all duration-500 flex flex-col items-center justify-center text-center ${
				isDarkTheme 
					? "border-[#2a2a2a] bg-zinc-900/60" 
					: "border-slate-200 bg-white"
			}`}>
				<div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-blue-500/5 blur-3xl pointer-events-none"></div>
				<div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-blue-600/5 blur-3xl pointer-events-none"></div>

				<div className="relative z-10 max-w-2xl mx-auto space-y-6">
					<div className="inline-block bg-[#024ad8] text-white text-xs md:text-sm font-black tracking-[0.25em] px-6 py-2.5 rounded-md uppercase">
						AHORA 24
					</div>
					<h1 className="text-4xl md:text-5xl font-black tracking-tight text-slate-805 dark:text-white uppercase leading-none">
						24 Cuotas <br/>
						<span className="text-[#024ad8]">Fijas</span>
					</h1>
					<p className="text-sm md:text-base font-extrabold uppercase tracking-widest text-slate-500 dark:text-slate-400">
						Financiación Directa {currency === "ARS" ? "en Pesos" : "en Dólares"} sin Interés
					</p>
					<div className="inline-flex items-center justify-center border-2 border-[#024ad8] rounded-xl px-6 py-4 bg-[#024ad8]/5">
						<span className="text-sm md:text-base font-black uppercase tracking-wider text-[#024ad8] dark:text-blue-400">
							💥 Con 5% de Descuento sobre Valor de Lista 💥
						</span>
					</div>
				</div>
			</div>

			{/* Info Cards Grid */}
			<div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-2 text-left">
				<div className={`p-6 md:p-8 rounded-3xl border shadow-sm transition-all flex flex-col items-start ${
					isDarkTheme ? "bg-zinc-900/40 border-zinc-800" : "bg-white border-slate-200/85"
				}`}>
					<div className="bg-blue-50 dark:bg-blue-900/20 text-[#024ad8] dark:text-blue-400 p-3 rounded-2xl w-12 h-12 flex items-center justify-center mb-5 shrink-0">
						<FaFileInvoiceDollar className="text-lg" />
					</div>
					<h3 className="font-extrabold text-slate-805 dark:text-white text-sm md:text-base mb-2">Financiación en Cuotas Fijas</h3>
					<p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed font-semibold">
						Aboná tu equipo en 24 cuotas fijas directas en {currency === "ARS" ? "pesos" : "dólares"} (Valor total ÷ 24). Sin intermediarios financieros ni tasas bancarias complejas.
					</p>
				</div>

				<div className={`p-6 md:p-8 rounded-3xl border shadow-sm transition-all flex flex-col items-start ${
					isDarkTheme ? "bg-zinc-900/40 border-zinc-800" : "bg-white border-slate-200/85"
				}`}>
					<div className="bg-emerald-50 dark:bg-emerald-950/20 text-emerald-600 dark:text-emerald-400 p-3 rounded-2xl w-12 h-12 flex items-center justify-center mb-5 shrink-0">
						<FaTag className="text-lg" />
					</div>
					<h3 className="font-extrabold text-slate-805 dark:text-white text-sm md:text-base mb-2">5% de Descuento Especial</h3>
					<p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed font-semibold">
						Obtené una bonificación directa del 5% sobre el valor oficial de lista de la maquinaria como beneficio por suscripción a la promoción.
					</p>
				</div>

				<div className={`p-6 md:p-8 rounded-3xl border shadow-sm transition-all flex flex-col items-start ${
					isDarkTheme ? "bg-zinc-900/40 border-zinc-800" : "bg-white border-slate-200/85"
				}`}>
					<div className="bg-purple-50 dark:bg-purple-950/20 text-purple-600 dark:text-purple-400 p-3 rounded-2xl w-12 h-12 flex items-center justify-center mb-5 shrink-0">
						<FaCog className="text-lg" />
					</div>
					<h3 className="font-extrabold text-slate-805 dark:text-white text-sm md:text-base mb-2">Equipos Nuevos y Usados</h3>
					<p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed font-semibold">
						Aplicable a maquinarias nuevas y usadas seleccionadas. Las unidades usadas son entregadas reacondicionadas a nuevo, totalmente revisadas y probadas.
					</p>
				</div>
			</div>

			{/* Grid: Selected items on left, Simulation card on right */}
			<div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
				
				{/* Quoted Items (Left Column) */}
				<div className="lg:col-span-7 space-y-6 text-left">
					<h3 className={`text-base font-black uppercase tracking-wider ${isDarkTheme ? "text-white" : "text-slate-805"}`}>
						Equipos a Financiar
					</h3>
					
					<div className="space-y-4">
						{selectedItemArray.map(item => (
							<div 
								key={item.id}
								className="p-6 bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 rounded-3xl shadow-sm space-y-4">
								<div className="flex flex-col sm:flex-row justify-between items-start gap-3">
									<div>
										<span className="text-[10px] font-extrabold uppercase px-2 py-0.5 rounded bg-blue-105 dark:bg-blue-900/30 text-[#024ad8] dark:text-blue-400 tracking-wider">
											{item.code}
										</span>
										<h3 className="font-bold text-slate-805 dark:text-white text-base mt-2">{item.name}</h3>
									</div>
									<div className="text-left sm:text-right">
										<span className="block text-[10px] text-slate-400 font-bold uppercase">VALOR DE LISTA</span>
										<span className="font-extrabold text-[#024ad8] dark:text-blue-400 text-lg">
											{formatValue(getDisplayPrice(item.price) * item.qty)}
										</span>
										{item.qty > 1 && (
											<span className="block text-[10px] text-slate-400 font-bold mt-1">
												{item.qty} x {formatValue(getDisplayPrice(item.price))} {item.isQuantifiable ? "m" : "u"}
											</span>
										)}
									</div>
								</div>
								
								<div className="border-t border-slate-105 dark:border-zinc-850 pt-3 space-y-2">
									<p className="text-xs text-slate-505 dark:text-slate-400 leading-relaxed">
										{item.desc}
									</p>
									<div className="flex items-center gap-1.5 text-[11px] font-bold text-slate-400">
										<span className="w-1.5 h-1.5 rounded-full bg-slate-300 dark:bg-zinc-650"></span>
										<span>Especificación: {item.capacity}</span>
									</div>
								</div>
							</div>
						))}
					</div>

					{/* Conditions list */}
					<div className={`p-8 rounded-3xl border ${isDarkTheme ? "bg-zinc-900/40 border-zinc-800" : "bg-white border-slate-200 shadow-sm"} space-y-6`}>
						<div className="space-y-2">
							<span className="inline-flex items-center bg-blue-50 dark:bg-blue-900/20 text-[#024ad8] dark:text-blue-400 text-[10px] font-black uppercase tracking-wider px-3.5 py-1.5 rounded-full">
								Condiciones Generales
							</span>
							<h2 className="text-2xl font-black text-slate-805 dark:text-white tracking-tight">
								Súmate al Plan 24 de Alloatti
							</h2>
							<p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed font-semibold">
								Diseñamos esta propuesta comercial exclusiva para permitir la expansión tecnológica de plantas embotelladoras de agua sin descapitalización inmediata.
							</p>
						</div>

						<div className="space-y-5 pt-2">
							{/* Item 1 */}
							<div className="flex items-start gap-4">
								<div className="bg-blue-50 dark:bg-blue-900/20 text-[#024ad8] dark:text-blue-400 p-3 rounded-2xl w-11 h-11 flex items-center justify-center shrink-0">
									<FaCalendarAlt className="text-lg" />
								</div>
								<div className="space-y-1">
									<h4 className="text-sm font-extrabold text-slate-805 dark:text-white">Plazos de Entrega Planificados</h4>
									<p className="text-xs text-slate-500 dark:text-slate-405 leading-relaxed font-semibold">
										Entrega oficial de los equipos programada a partir de abril de 2027 (entrega en fábrica).
									</p>
								</div>
							</div>

							{/* Item 2 */}
							<div className="flex items-start gap-4">
								<div className="bg-blue-50 dark:bg-blue-900/20 text-[#024ad8] dark:text-blue-400 p-3 rounded-2xl w-11 h-11 flex items-center justify-center shrink-0">
									<FaCheckCircle className="text-lg" />
								</div>
								<div className="space-y-1">
									<h4 className="text-sm font-extrabold text-slate-805 dark:text-white">Garantía Oficial de Fábrica</h4>
									<p className="text-xs text-slate-500 dark:text-slate-405 leading-relaxed font-semibold">
										6 meses de garantía completa en equipos nuevos y 3 meses en equipos usados (sobre lo reparado).
									</p>
								</div>
							</div>

							{/* Item 3 */}
							<div className="flex items-start gap-4">
								<div className="bg-blue-50 dark:bg-blue-900/20 text-[#024ad8] dark:text-blue-400 p-3 rounded-2xl w-11 h-11 flex items-center justify-center shrink-0">
									<FaCheckCircle className="text-lg" />
								</div>
								<div className="space-y-1">
									<h4 className="text-sm font-extrabold text-slate-805 dark:text-white">Esquema Tributario Claro</h4>
									<p className="text-xs text-slate-500 dark:text-slate-405 leading-relaxed font-semibold">
										Facturación oficial sujeta al tipo impositivo de IVA del 10,5%.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>

				{/* Simulation sidebar (Right Column) */}
				<div className="lg:col-span-5 space-y-6">
					
					{/* Currency & Tax controllers card */}
					<div className="bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 rounded-3xl shadow-md p-6 space-y-5 no-print text-left">
						<h3 className="text-xs font-black uppercase tracking-wider text-slate-505 dark:text-slate-400">
							Opciones de Visualización
						</h3>
						
						{/* Currency selector */}
						<div className="space-y-2">
							<span className="block text-[10px] font-bold uppercase tracking-wider text-slate-450 dark:text-slate-500">Moneda</span>
							<div className="flex bg-slate-105 dark:bg-zinc-800 p-1 rounded-xl">
								<button 
									onClick={() => toggleCurrency("USD")}
									className={`flex-1 py-2 text-xs font-bold rounded-lg transition-all ${currency === "USD" ? "bg-white dark:bg-zinc-700 text-[#024ad8] dark:text-white shadow-sm" : "text-slate-505 hover:text-slate-805 dark:hover:text-slate-250"}`}>
									USD
								</button>
								<button 
									onClick={() => !apiFailed && toggleCurrency("ARS")}
									disabled={apiFailed}
									className={`flex-1 py-2 text-xs font-bold rounded-lg transition-all ${
										apiFailed 
											? "opacity-45 cursor-not-allowed text-slate-405" 
											: currency === "ARS" 
												? "bg-white dark:bg-zinc-700 text-[#024ad8] dark:text-white shadow-sm" 
												: "text-slate-505 hover:text-slate-805 dark:hover:text-slate-250"
									}`}>
									ARS (Pesos)
								</button>
							</div>
						</div>

						{/* BNA rate show (Only when ARS is selected) */}
						{currency === "ARS" && (
							<div className="space-y-2">
								<span className="block text-[10px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-505">Tipo de cambio BNA</span>
								<div className="bg-slate-50 dark:bg-zinc-850/50 p-3 rounded-xl border border-slate-100 dark:border-zinc-800">
									<div className="flex justify-between items-center text-xs">
										<span className="font-semibold text-slate-500 dark:text-slate-400">Cotización:</span>
										<span className="font-extrabold text-slate-700 dark:text-slate-350">${bnaExchangeRate} ARS</span>
									</div>
									<span className="block text-[9px] text-slate-400 mt-1">
										Dólar oficial del Banco Nación Argentina (Vendedor).
									</span>
								</div>
							</div>
						)}

						{/* IVA Toggle */}
						<div className="space-y-2">
							<span className="block text-[10px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-505">Impuestos</span>
							<button 
								onClick={handleIvaToggle}
								className={`w-full py-2.5 px-4 text-xs font-bold rounded-xl border transition-all flex items-center justify-between ${showIva ? "bg-emerald-50 dark:bg-emerald-950/20 border-emerald-300 dark:border-emerald-800 text-emerald-700 dark:text-emerald-400" : "bg-slate-50 dark:bg-zinc-800 border-slate-200 dark:border-zinc-700 text-slate-605 dark:text-slate-400 hover:bg-slate-105"}`}>
								<span>{showIva ? "IVA Incluido (10.5%)" : "Neto sin IVA"}</span>
								<div className={`w-8 h-4 rounded-full p-0.5 transition-colors ${showIva ? "bg-emerald-500" : "bg-slate-300 dark:bg-zinc-600"}`}>
									<div className={`w-3 h-3 rounded-full bg-white transition-transform transform ${showIva ? "translate-x-4" : "translate-x-0"}`}></div>
								</div>
							</button>
						</div>
					</div>

					<div className={`p-6 md:p-8 rounded-3xl border shadow-xl flex flex-col space-y-6 ${
						isDarkTheme ? "bg-zinc-900 border-zinc-800" : "bg-white border-slate-200"
					}`}>
						<div className="flex items-center gap-2 pb-4 border-b border-slate-100 dark:border-zinc-850">
							<FaCalculator className="text-[#024ad8] text-lg" />
							<h3 className={`text-base font-black uppercase tracking-wider ${isDarkTheme ? "text-white" : "text-slate-800"}`}>
								Simulador de Cuotas
							</h3>
						</div>

						{/* Calculations Breakdown */}
						{validationError ? (
							<div className={`p-6 rounded-2xl border text-center border-dashed ${
								isDarkTheme ? "border-zinc-855 bg-white/[0.01]" : "border-slate-200 bg-slate-50"
							}`}>
								<span className="text-xs text-red-500 font-bold">{validationError}</span>
							</div>
						) : (
							<div className={`p-5 rounded-2xl space-y-4 border text-left ${
								isDarkTheme ? "bg-white/[0.02] border-zinc-800" : "bg-slate-50 border-slate-105"
							}`}>
								<div className="flex justify-between text-xs font-semibold">
									<span className="text-slate-500 dark:text-slate-400">Suma Valor de Lista:</span>
									<span className="text-slate-800 dark:text-slate-205 font-bold">
										{formatValue(showIva ? subtotalDisplay * 1.105 : subtotalDisplay)}
									</span>
								</div>

								<div className="flex justify-between text-xs font-semibold text-emerald-650 dark:text-emerald-450">
									<span>Descuento Especial (5%):</span>
									<span className="font-bold">
										- {formatValue(showIva ? discountDisplay * 1.105 : discountDisplay)}
									</span>
								</div>

								<div className="flex justify-between text-xs font-semibold text-slate-550 dark:text-slate-400">
									<span>IVA (10.5%):</span>
									<span className={`font-bold ${!showIva ? "line-through text-slate-400 dark:text-zinc-650" : ""}`}>
										{showIva ? `+ ${formatValue(ivaDisplay)}` : formatValue(ivaDisplay)}
									</span>
								</div>

								<div className="flex justify-between text-xs font-bold border-t border-dashed border-slate-200 dark:border-zinc-805 pt-3">
									<span className="text-slate-655 dark:text-slate-350">Total Bonificado:</span>
									<span className="text-slate-855 dark:text-slate-100 font-extrabold">{formatValue(finalTotalDisplay)}</span>
								</div>

								<div className="flex flex-col items-center justify-center text-center pt-2">
									<span className="text-[10px] font-black uppercase tracking-widest text-[#024ad8] dark:text-blue-400">
										Financiación Plan 24
									</span>
									<span className="text-3xl font-black text-[#024ad8] dark:text-blue-400 mt-1">
										24x {formatValue(installmentDisplay)}
									</span>
									<span className="text-[10px] text-slate-400 dark:text-slate-505 font-bold mt-1">
										Cuotas mensuales fijas {currency === "ARS" ? "en pesos" : "en dólares"} sin interés
									</span>
								</div>
							</div>
						)}

						{/* CTAs */}
						<div className="flex flex-col gap-3">
							<button 
								onClick={handleWhatsAppShare}
								disabled={!!validationError}
								className={`w-full py-4 text-xs font-extrabold uppercase tracking-widest rounded-xl transition-all flex items-center justify-center gap-2 ${
									validationError
										? "bg-slate-200 dark:bg-zinc-800 text-slate-400 cursor-not-allowed"
										: "bg-[#25D366] hover:bg-[#1ebd59] text-white shadow-lg shadow-emerald-500/10 hover:shadow-emerald-500/25 hover:-translate-y-0.5"
								}`}
							>
								<FaWhatsapp className="text-lg" />
								Consultar Plan por WhatsApp
							</button>

							<button 
								onClick={handleCopyLink}
								disabled={!!validationError}
								className={`w-full py-3 text-xs font-bold uppercase rounded-xl transition-all flex items-center justify-center gap-2 ${
									validationError
										? "bg-slate-150 dark:bg-zinc-850 text-slate-400 cursor-not-allowed border border-transparent"
										: "bg-slate-100 hover:bg-slate-205 dark:bg-zinc-855 dark:hover:bg-zinc-800 text-slate-705 dark:text-slate-200 border border-slate-250 dark:border-zinc-700"
								}`}
							>
								<FaShareAlt />
								Compartir Simulación
							</button>

							<button 
								onClick={handlePrint}
								disabled={!!validationError}
								className="w-full py-3 bg-slate-105 hover:bg-slate-200 dark:bg-zinc-850 dark:hover:bg-zinc-800 text-slate-705 dark:text-slate-200 rounded-xl font-bold text-xs uppercase border border-slate-250 dark:border-zinc-700 transition-all flex items-center justify-center gap-2"
							>
								<FaPrint />
								Imprimir / PDF
							</button>
						</div>
					</div>
				</div>

			</div>

			{/* Sellers login access link at the bottom */}
			{!isAuthorized && (
				<div className="no-print text-center pt-8 border-t border-slate-150 dark:border-zinc-855">
					<button 
						onClick={() => {
							setSearchParams({}, { replace: true });
						}}
						className="text-[10px] font-bold uppercase tracking-widest text-slate-400 hover:text-[#024ad8] dark:hover:text-blue-400 transition-colors">
							Presupuesto Detallado
					</button>
				</div>
			)}
		</div>
	);
}

ClientView.propTypes = {
	selectedItemArray: PropTypes.array.isRequired,
	formatValue: PropTypes.func.isRequired,
	getDisplayPrice: PropTypes.func.isRequired,
	showIva: PropTypes.bool.isRequired,
	handleIvaToggle: PropTypes.func.isRequired,
	currency: PropTypes.string.isRequired,
	toggleCurrency: PropTypes.func.isRequired,
	bnaExchangeRate: PropTypes.number.isRequired,
	apiFailed: PropTypes.bool.isRequired,
	handleWhatsAppShare: PropTypes.func.isRequired,
	handlePrint: PropTypes.func.isRequired,
	handleCopyLink: PropTypes.func.isRequired,
	isAuthorized: PropTypes.bool.isRequired,
	setPreviewAsClient: PropTypes.func.isRequired,
	setSearchParams: PropTypes.func.isRequired,
	isDarkTheme: PropTypes.bool.isRequired,
	validationError: PropTypes.string.isRequired,
	subtotalUSD: PropTypes.number.isRequired
};

export function MaquinasPromociones() {
	const { isDarkTheme } = useTheme();
	const [searchParams, setSearchParams] = useSearchParams();

	// Auth States
	const [isAuthorized, setIsAuthorized] = useState(false);
	const [password, setPassword] = useState("");
	const [loginError, setLoginError] = useState("");
	const [showPassword, setShowPassword] = useState(false);
	const [previewAsClient, setPreviewAsClient] = useState(false);

	// Catalog & selection states
	const [activeTab, setActiveTab] = useState("retornables");
	const [searchTerm, setSearchTerm] = useState("");
	const [showIva, setShowIva] = useState(false);
	const [selectedItems, setSelectedItems] = useState({}); // { itemId: quantity }
	const [currency, setCurrency] = useState("USD");

	// Load BNA exchange rate state and fetch helpers from the custom hook
	const {
		bnaExchangeRate,
		setBnaExchangeRate,
		isManualExchangeRate,
		setIsManualExchangeRate,
		apiLoading,
		apiFailed,
		fetchExchangeRate
	} = useDolarApi();

	// Math and validation calculations
	const selectedItemArray = Object.entries(selectedItems).map(([id, qty]) => {
		const found = ALL_ITEMS.find(i => i.id === id);
		return found ? { ...found, qty } : null;
	}).filter(Boolean);

	const subtotalUSD = selectedItemArray.reduce((acc, item) => acc + (item.price * item.qty), 0);
	const subtotalDisplay = subtotalUSD * (currency === "ARS" ? bnaExchangeRate : 1);
	const discountValue = subtotalDisplay * 0.05;
	const promoPrice = subtotalDisplay - discountValue;
	const ivaValue = promoPrice * 0.105;
	const finalTotal = showIva ? promoPrice * 1.105 : promoPrice;
	const monthlyInstallment = finalTotal / 24;

	const [validationError, setValidationError] = useState("");

	// Trigger error validation on change
	useEffect(() => {
		if (subtotalUSD > 0 && subtotalUSD < 20000) {
			setValidationError("El plan aplica únicamente a equipos o presupuestos superiores a U$S 20.000.");
		} else {
			setValidationError("");
		}
	}, [subtotalUSD]);

	// Sync state back to URL
	const updateURLParams = (newItems, newCur, newTc, newIva, forceManual = isManualExchangeRate) => {
		const params = {};
		
		const itemsList = Object.entries(newItems)
			.filter((entry) => entry[1] > 0)
			.map(([id, qty]) => `${id}:${qty}`)
			.join(",");

		if (itemsList) params.items = itemsList;
		if (newCur !== "USD") params.cur = newCur;
		if (forceManual && newCur === "ARS") params.tc = newTc;
		if (newIva) params.iva = "true";

		setSearchParams(params, { replace: true });
	};

	// Reactively handle API failure
	useEffect(() => {
		if (apiFailed) {
			setCurrency("USD");
			updateURLParams(selectedItems, "USD", bnaExchangeRate, showIva, false);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [apiFailed]);

	// Parse parameters on mount
	useEffect(() => {
		const itemsParam = searchParams.get("items") || searchParams.get("machine");
		const currencyParam = searchParams.get("cur");
		const tcParam = searchParams.get("tc");
		const ivaParam = searchParams.get("iva");

		const parsedItems = {};
		if (itemsParam) {
			itemsParam.split(",").forEach(itemStr => {
				const [id, qty] = itemStr.split(":");
				parsedItems[id] = parseInt(qty || 1, 10);
			});
			setSelectedItems(parsedItems);
		}

		if (currencyParam === "USD" || currencyParam === "ARS") {
			setCurrency(currencyParam);
		}

		if (tcParam && currencyParam === "ARS") {
			const rate = parseFloat(tcParam);
			if (rate > 0) {
				setBnaExchangeRate(rate);
				setIsManualExchangeRate(true);
			}
		}

		if (ivaParam === "true") {
			setShowIva(true);
		} else {
			setShowIva(false);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	// Formats values: dollars prefixed with U$S, pesos prefixed with $
	const formatValue = (val) => {
		const formattedNumber = new Intl.NumberFormat("es-AR", {
			minimumFractionDigits: 0,
			maximumFractionDigits: 2
		}).format(val);
		return currency === "ARS" ? `$ ${formattedNumber}` : `U$S ${formattedNumber}`;
	};

	// Convert USD price to target currency price
	const getDisplayPrice = (usdBasePrice) => {
		let price = usdBasePrice;
		if (currency === "ARS") {
			price = usdBasePrice * bnaExchangeRate;
		}
		return price;
	};

	// WhatsApp sharing details
	const handleWhatsAppShare = () => {
		const productsText = selectedItemArray
			.map(i => `- ${i.name} (${i.qty} x ${formatValue(getDisplayPrice(i.price))})`)
			.join("\n");
		
		const message = `¡Hola Alloatti! Estoy interesado en el Plan Ahora 24 de financiación directa para el siguiente equipamiento:\n\n${productsText}\n\n*Simulación de Plan 24 (${currency}):*\n- Subtotal Lista: ${formatValue(showIva ? subtotalDisplay * 1.105 : subtotalDisplay)}\n- Descuento Especial (5%): -${formatValue(showIva ? discountValue * 1.105 : discountValue)}\n- IVA (10.5%): ${formatValue(ivaValue)}${!showIva ? " (Neto sin IVA)" : ""}\n- *Total Financiado: ${formatValue(finalTotal)}*\n- *Cuota Mensual Fija (24 pagos): 24x ${formatValue(monthlyInstallment)}*`;

		const url = `https://wa.me/5491168641122?text=${encodeURIComponent(message)}`;
		window.open(url, "_blank");
	};

	const handleCopyLink = () => {
		navigator.clipboard.writeText(window.location.href);
		sileo.success({
			title: "¡Enlace copiado!",
			description: "La simulación de plan se copió al portapapeles.",
		});
	};

	const handleSelectItem = (item) => {
		const newSelected = { ...selectedItems };
		if (newSelected[item.id]) {
			delete newSelected[item.id];
		} else {
			newSelected[item.id] = 1;
		}
		setSelectedItems(newSelected);
		updateURLParams(newSelected, currency, bnaExchangeRate, showIva);
	};

	const handleUpdateQty = (itemId, change) => {
		const newSelected = { ...selectedItems };
		const currentQty = newSelected[itemId] || 0;
		const nextQty = currentQty + change;
		
		if (nextQty <= 0) {
			delete newSelected[itemId];
		} else {
			newSelected[itemId] = nextQty;
		}
		setSelectedItems(newSelected);
		updateURLParams(newSelected, currency, bnaExchangeRate, showIva);
	};

	const handleClearQuote = () => {
		setSelectedItems({});
		updateURLParams({}, currency, bnaExchangeRate, showIva);
	};

	const toggleCurrency = (cur) => {
		setCurrency(cur);
		updateURLParams(selectedItems, cur, bnaExchangeRate, showIva);
	};

	const handleExchangeRateChange = (val) => {
		const rate = parseFloat(val) || 0;
		setBnaExchangeRate(rate);
		setIsManualExchangeRate(true);
		updateURLParams(selectedItems, currency, rate, showIva, true);
	};

	const handleResetOfficialRate = () => {
		setIsManualExchangeRate(false);
		fetchExchangeRate(true);
		updateURLParams(selectedItems, currency, bnaExchangeRate, showIva, false);
	};

	const handleIvaToggle = () => {
		const nextIva = !showIva;
		setShowIva(nextIva);
		updateURLParams(selectedItems, currency, bnaExchangeRate, nextIva);
	};

	const handleLogin = (e) => {
		e.preventDefault();
		if (password.toLowerCase().trim() === "alloattisrl3145$") {
			setIsAuthorized(true);
			setLoginError("");
		} else {
			setLoginError("Contraseña incorrecta. Intente nuevamente.");
		}
	};

	const handleLogout = () => {
		setIsAuthorized(false);
		setPreviewAsClient(false);
	};

	const handlePrint = () => {
		window.print();
	};

	// Filtering catalog items by active tab & search keyword
	const getFilteredItems = (categoryList) => {
		if (!searchTerm.trim()) return categoryList;
		return categoryList.filter(item => 
			item.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
			item.code.toLowerCase().includes(searchTerm.toLowerCase()) || 
			item.desc.toLowerCase().includes(searchTerm.toLowerCase())
		);
	};

	const hasItemsInUrl = selectedItemArray.length > 0;

	// View mode routing logic
	const showClientView = !isAuthorized && hasItemsInUrl;
	const showLoginView = !isAuthorized && !hasItemsInUrl;
	const showSellerPreview = isAuthorized && previewAsClient && hasItemsInUrl;

	// Determine View Mode content
	let mainContent;
	if (showLoginView) {
		mainContent = (
			<SellerLogin
				password={password}
				setPassword={setPassword}
				loginError={loginError}
				showPassword={showPassword}
				setShowPassword={setShowPassword}
				handleLogin={handleLogin}
			/>
		);
	} else if (showClientView || showSellerPreview) {
		mainContent = (
			<ClientView
				selectedItemArray={selectedItemArray}
				formatValue={formatValue}
				getDisplayPrice={getDisplayPrice}
				showIva={showIva}
				handleIvaToggle={handleIvaToggle}
				currency={currency}
				toggleCurrency={toggleCurrency}
				bnaExchangeRate={bnaExchangeRate}
				apiFailed={apiFailed}
				handleWhatsAppShare={handleWhatsAppShare}
				handlePrint={handlePrint}
				handleCopyLink={handleCopyLink}
				isAuthorized={isAuthorized}
				setPreviewAsClient={setPreviewAsClient}
				setSearchParams={setSearchParams}
				isDarkTheme={isDarkTheme}
				validationError={validationError}
				subtotalUSD={subtotalUSD}
			/>
		);
	} else {
		mainContent = (
			<div className="w-full max-w-5xl mx-auto my-12 md:px-6">
				{/* Seller general layout header */}
				<header className="hp-page-header no-print flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 text-left mb-8">
					<div>
						<div className="hp-eyebrow hp-eyebrow-blue flex items-center gap-2">
							<FaFileInvoiceDollar className="text-xs" />
							Herramientas Comerciales • Simulador Plan Ahora 24 (Vendedores)
						</div>
						<h1 className="hp-h1">Plan de Promociones</h1>
						<p className="text-sm text-slate-500 dark:text-slate-400 mt-6">
							Confecciona y comparte simulaciones del Plan Ahora 24 con 5% de descuento especial.
						</p>
					</div>
					<button 
						onClick={handleLogout}
						className="self-start sm:self-center px-4 py-2.5 bg-red-50 hover:bg-red-100 dark:bg-red-950/20 dark:hover:bg-red-900/30 text-red-650 dark:text-red-400 rounded-xl font-bold text-xs uppercase tracking-wider flex items-center gap-2 border border-red-200 dark:border-red-900/40 transition-colors"
					>
						<FaSignOutAlt />
						Cerrar Sesión
					</button>
				</header>

				{/* Banner editor view */}
				{hasItemsInUrl && (
					<div className="bg-blue-600 text-white py-3.5 px-5 rounded-2xl text-center font-bold text-xs flex flex-col sm:flex-row items-center justify-between gap-3 shadow-md border border-blue-500 no-print mb-8 animate-hp-fade">
						<span className="flex items-center gap-2">
							<FaFileInvoiceDollar />
							<span>Visualizando simulación compartida. Estás en Modo Vendedor y puedes editarla.</span>
						</span>
						<button 
							onClick={() => setPreviewAsClient(true)}
							className="bg-white text-blue-700 px-4 py-1.5 rounded-xl hover:bg-slate-100 transition-colors font-extrabold text-[10px] uppercase tracking-wider shadow-sm">
							Previsualizar como Cliente
						</button>
					</div>
				)}

				{/* Parameters Controller Card (No Print) */}
				<div className="no-print min-h-[150px] mb-8 p-6 bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 rounded-2xl shadow-sm space-y-6">
					<div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
						
						{/* Currency Toggle */}
						<div className="text-left">
							<label className="block text-xs font-bold uppercase tracking-wider text-slate-505 dark:text-slate-400 mb-2">Moneda base</label>
							<div className="flex bg-slate-105 dark:bg-zinc-800 p-1 rounded-xl">
								<button 
									onClick={() => toggleCurrency("USD")}
									className={`flex-1 py-2 text-xs font-bold rounded-lg transition-all ${currency === "USD" ? "bg-white dark:bg-zinc-700 text-[#024ad8] dark:text-white shadow-sm" : "text-slate-550 hover:text-slate-800 dark:hover:text-slate-205"}`}>
									DÓLARES (USD)
								</button>
								<button 
									onClick={() => !apiFailed && toggleCurrency("ARS")}
									disabled={apiFailed}
									className={`flex-1 py-2 text-xs font-bold rounded-lg transition-all ${
										apiFailed 
											? "opacity-45 cursor-not-allowed text-slate-400 dark:text-zinc-650 bg-slate-200/50 dark:bg-zinc-800/30" 
											: currency === "ARS" 
												? "bg-white dark:bg-zinc-700 text-[#024ad8] dark:text-white shadow-sm" 
												: "text-slate-550 hover:text-slate-800 dark:hover:text-slate-205"
									}`}
									title={apiFailed ? "Servicio de cotización BNA no disponible (API offline)" : ""}
								>
									PESOS (ARS)
								</button>
							</div>
							{apiFailed && (
								<div className="mt-1.5 text-[10px] font-semibold text-red-505 text-left">
									Conversión a ARS desactivada: servicio de cotización offline.
								</div>
							)}
						</div>

						{/* BNA Exchange Input */}
						<div className={currency === "ARS" ? "opacity-100 transition-all duration-300 text-left" : "opacity-40 pointer-events-none transition-all duration-300 text-left"}>
							<div className="flex justify-between items-center mb-2">
								<label className="block text-xs font-bold uppercase tracking-wider text-slate-555 dark:text-slate-400">Tipo de cambio (Dólar BNA)</label>
								
								{currency === "ARS" && !apiLoading && (
									<div className="text-[10px] font-bold">
										{apiFailed ? (
											<span className="text-red-500">API Offline</span>
										) : isManualExchangeRate ? (
											<button 
												type="button"
												onClick={handleResetOfficialRate}
												className="text-[#024ad8] dark:text-blue-400 hover:underline flex items-center gap-1">
												Usar Oficial
											</button>
										) : (
											<button 
												type="button"
												onClick={() => {
													setIsManualExchangeRate(true);
													updateURLParams(selectedItems, currency, bnaExchangeRate, showIva, true);
												}}
												className="text-[#024ad8] dark:text-blue-400 hover:underline flex items-center gap-1">
												Editar manual
											</button>
										)}
									</div>
								)}
							</div>

							<div className="relative">
								<span className="absolute inset-y-0 left-0 pl-3.5 flex items-center text-slate-400 font-semibold">$</span>
								<input 
									type="number" 
									value={bnaExchangeRate} 
									onChange={(e) => handleExchangeRateChange(e.target.value)}
									disabled={!isManualExchangeRate && !apiFailed}
									className={`w-full border rounded-xl py-2 pl-8 pr-4 text-sm font-semibold focus:outline-none focus:border-[#024ad8] ${
										(!isManualExchangeRate && !apiFailed) 
											? "bg-slate-100 dark:bg-zinc-800 text-slate-505 dark:text-zinc-405 border-slate-205 dark:border-zinc-700 cursor-not-allowed" 
											: "bg-white dark:bg-zinc-900 text-slate-805 dark:text-white border-slate-350 dark:border-zinc-700"
									}`}
									placeholder="Cotización BNA venta"
								/>
							</div>
							
							{/* Status message */}
							{currency === "ARS" && (
								<div className="mt-1 text-[10px] font-medium min-h-[15px] text-left">
									{apiLoading ? (
										<span className="text-slate-405 animate-pulse">Obteniendo cotización oficial...</span>
									) : apiFailed ? (
										<span className="text-red-505">Error de conexión. Ingrese el tipo de cambio manual.</span>
									) : !isManualExchangeRate ? (
										<span className="text-emerald-555 flex items-center gap-1">
											<span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping"></span>
											Cotización oficial actualizada
										</span>
									) : (
										<span className="text-amber-505">Modo de edición manual activado.</span>
									)}
								</div>
							)}
						</div>

						{/* IVA Switch */}
						<div className="flex flex-col text-left">
							<label className="block text-xs font-bold uppercase tracking-wider text-slate-555 dark:text-slate-400 mb-2">Impuestos (IVA 10.5%)</label>
							<button 
								onClick={handleIvaToggle}
								className={`w-full py-2.5 px-4 text-xs font-bold rounded-xl border transition-all flex items-center justify-between ${showIva ? "bg-emerald-50 dark:bg-emerald-950/20 border-emerald-300 dark:border-emerald-800 text-emerald-700 dark:text-emerald-400" : "bg-slate-50 dark:bg-zinc-800 border-slate-200 dark:border-zinc-700 text-slate-605 dark:text-slate-400 hover:bg-slate-105"}`}>
								<span>{showIva ? "IVA Incluido (+10.5%)" : "Neto (Sin IVA)"}</span>
								<div className={`w-8 h-4 rounded-full p-0.5 transition-colors ${showIva ? "bg-emerald-500" : "bg-slate-300 dark:bg-zinc-650"}`}>
									<div className={`w-3 h-3 rounded-full bg-white transition-transform transform ${showIva ? "translate-x-4" : "translate-x-0"}`}></div>
								</div>
							</button>
						</div>

					</div>
				</div>

				<div className="flex pricing-layout gap-6 items-start">
					{/* Catalog items area */}
					<div className="flex-1">
						{/* Catalog Tabs & Search */}
						<div className="no-print flex flex-col md:flex-row gap-4 items-center justify-between">
							<div className="flex gap-2 bg-slate-105 dark:bg-zinc-900 p-1.5 rounded-xl border border-slate-200/50 dark:border-zinc-800/80 w-full md:w-auto overflow-x-auto">
								<button 
									onClick={() => setActiveTab("retornables")}
									className={`px-5 py-2.5 text-xs font-bold rounded-lg whitespace-nowrap transition-all ${activeTab === "retornables" ? "bg-white dark:bg-zinc-700 text-[#024ad8] dark:text-white shadow-sm" : "text-slate-505 hover:text-slate-800 dark:hover:text-slate-250"}`}>
									Líneas Retornables
								</button>
								<button 
									onClick={() => setActiveTab("descartables")}
									className={`px-5 py-2.5 text-xs font-bold rounded-lg whitespace-nowrap transition-all ${activeTab === "descartables" ? "bg-white dark:bg-zinc-700 text-[#024ad8] dark:text-white shadow-sm" : "text-slate-500 hover:text-slate-800 dark:hover:text-slate-250"}`}>
									Líneas Descartables
								</button>
								<button 
									onClick={() => setActiveTab("accesorios")}
									className={`px-5 py-2.5 text-xs font-bold rounded-lg whitespace-nowrap transition-all ${activeTab === "accesorios" ? "bg-white dark:bg-zinc-700 text-[#024ad8] dark:text-white shadow-sm" : "text-slate-500 hover:text-slate-800 dark:hover:text-slate-250"}`}>
									Accesorios
								</button>
							</div>

							<div className="relative w-full md:w-64">
								<input 
									type="text" 
									value={searchTerm}
									onChange={(e) => setSearchTerm(e.target.value)}
									placeholder="Buscar equipo..."
									className="w-full bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 rounded-xl py-2.5 pl-10 pr-4 text-xs focus:outline-none focus:border-[#024ad8] dark:text-white"
								/>
								<svg className="absolute left-3.5 top-3.5 w-4 h-4 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
									<path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
								</svg>
							</div>
						</div>

						{/* Items list selection */}
						<div className="mt-6 space-y-4">
							{activeTab === "retornables" && (
								<>
									<div className="grid grid-cols-1 gap-4">
										{getFilteredItems(PRICE_DATABASE.retornables).map(item => {
											const isSelected = !!selectedItems[item.id];
											return (
												<div 
													key={item.id}
													onClick={() => handleSelectItem(item)}
													className={`group cursor-pointer p-5 bg-white dark:bg-zinc-900 border rounded-2xl transition-all shadow-sm flex flex-col md:flex-row justify-between items-start md:items-center gap-4 ${isSelected ? "border-[#024ad8] ring-1 ring-[#024ad8]" : "border-slate-100 dark:border-zinc-800 hover:border-slate-300 dark:hover:border-zinc-700"}`}>
													<div className="flex-1 text-left">
														<div className="flex items-center gap-2.5">
															<span className="text-[10px] font-extrabold uppercase px-2 py-0.5 rounded bg-blue-105 dark:bg-blue-900/30 text-[#024ad8] dark:text-blue-400 tracking-wider">
																{item.code}
															</span>
															<h3 className="font-bold text-slate-805 dark:text-slate-105 text-sm md:text-base">{item.name}</h3>
														</div>
														<p className="text-xs text-slate-505 dark:text-slate-405 mt-1">{item.capacity}</p>
													</div>
													<div className="flex items-center justify-between md:justify-end w-full md:w-auto gap-6 border-t md:border-t-0 pt-3 md:pt-0 border-slate-100 dark:border-zinc-800">
														<div className="text-right text-left">
															<span className="block text-[10px] text-slate-405 font-bold uppercase">VALOR LISTA</span>
															<span className="font-extrabold text-[#024ad8] dark:text-blue-400 text-base md:text-lg">
																{formatValue(getDisplayPrice(item.price))}
															</span>
														</div>
														<div className="no-print">
															{isSelected ? (
																<div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center shadow-md">
																	<svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
																		<path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
																	</svg>
																</div>
															) : (
																<div className="w-8 h-8 rounded-full bg-slate-50 dark:bg-zinc-800 text-slate-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 border border-slate-200 dark:border-zinc-700 flex items-center justify-center transition-colors">
																	<svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
																		<path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
																	</svg>
																</div>
															)}
														</div>
													</div>
												</div>
											);
										})}
									</div>

									<div className="mt-8 mb-4 text-left">
										<h2 className="text-xs font-extrabold tracking-widest text-slate-450 uppercase">Equipamiento Opcional de Línea Nueva</h2>
									</div>

									<div className="grid grid-cols-1 gap-4">
										{getFilteredItems(PRICE_DATABASE.opcionales_retornables).map(item => {
											const isSelected = !!selectedItems[item.id];
											return (
												<div 
													key={item.id}
													onClick={() => handleSelectItem(item)}
													className={`group cursor-pointer p-5 bg-white dark:bg-zinc-900 border rounded-2xl transition-all shadow-sm flex flex-col md:flex-row justify-between items-start md:items-center gap-4 ${isSelected ? "border-[#024ad8] ring-1 ring-[#024ad8]" : "border-slate-100 dark:border-zinc-800 hover:border-slate-300 dark:hover:border-zinc-700"}`}>
													<div className="flex-1 text-left">
														<div className="flex items-center gap-2.5">
															<span className="text-[10px] font-extrabold uppercase px-2 py-0.5 rounded bg-emerald-105 dark:bg-emerald-900/30 text-emerald-750 dark:text-emerald-400 tracking-wider">
																{item.code}
															</span>
															<h3 className="font-bold text-slate-850 dark:text-slate-105 text-sm md:text-base">{item.name}</h3>
														</div>
														<p className="text-xs text-slate-550 dark:text-slate-405 mt-1">{item.capacity}</p>
													</div>
													<div className="flex items-center justify-between md:justify-end w-full md:w-auto gap-6 border-t md:border-t-0 pt-3 md:pt-0 border-slate-100 dark:border-zinc-800">
														<div className="text-right text-left">
															<span className="block text-[10px] text-slate-405 font-bold uppercase">VALOR EXTRA</span>
															<span className="font-extrabold text-emerald-600 dark:text-emerald-400 text-base md:text-lg">
																{formatValue(getDisplayPrice(item.price))}
															</span>
														</div>
														<div className="no-print">
															{isSelected ? (
																<div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center shadow-md">
																	<svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
																		<path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
																	</svg>
																</div>
															) : (
																<div className="w-8 h-8 rounded-full bg-slate-50 dark:bg-zinc-800 text-slate-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 border border-slate-200 dark:border-zinc-700 flex items-center justify-center transition-colors">
																	<svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
																		<path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
																	</svg>
																</div>
															)}
														</div>
													</div>
												</div>
											);
										})}
									</div>
								</>
							)}

							{activeTab === "descartables" && (
								<div className="grid grid-cols-1 gap-4">
									{getFilteredItems(PRICE_DATABASE.descartables).map(item => {
										const isSelected = !!selectedItems[item.id];
										return (
											<div 
												key={item.id}
												onClick={() => handleSelectItem(item)}
												className={`group cursor-pointer p-5 bg-white dark:bg-zinc-900 border rounded-2xl transition-all shadow-sm flex flex-col md:flex-row justify-between items-start md:items-center gap-4 ${isSelected ? "border-[#024ad8] ring-1 ring-[#024ad8]" : "border-slate-105 dark:border-zinc-800 hover:border-slate-300 dark:hover:border-zinc-700"}`}>
												<div className="flex-1 text-left">
													<div className="flex items-center gap-2.5">
														<span className="text-[10px] font-extrabold uppercase px-2 py-0.5 rounded bg-amber-100 dark:bg-amber-900/30 text-amber-705 dark:text-amber-400 tracking-wider">
															{item.code}
														</span>
														<h3 className="font-bold text-slate-805 dark:text-slate-100 text-sm md:text-base">{item.name}</h3>
													</div>
													<p className="text-xs text-slate-505 dark:text-slate-400 mt-1">{item.capacity}</p>
												</div>
												<div className="flex items-center justify-between md:justify-end w-full md:w-auto gap-6 border-t md:border-t-0 pt-3 md:pt-0 border-slate-100 dark:border-zinc-800">
													<div className="text-right text-left">
														<span className="block text-[10px] text-slate-405 font-bold uppercase">VALOR LISTA</span>
														<span className="font-extrabold text-[#024ad8] dark:text-blue-400 text-base md:text-lg">
															{formatValue(getDisplayPrice(item.price))}
														</span>
													</div>
													<div className="no-print">
														{isSelected ? (
															<div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center shadow-md">
																<svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
																	<path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
																</svg>
															</div>
														) : (
															<div className="w-8 h-8 rounded-full bg-slate-50 dark:bg-zinc-800 text-slate-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 border border-slate-200 dark:border-zinc-700 flex items-center justify-center transition-colors">
																<svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
																	<path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
																</svg>
															</div>
														)}
													</div>
												</div>
											</div>
										);
									})}
								</div>
							)}

							{activeTab === "accesorios" && (
								<div className="grid grid-cols-1 gap-4">
									{getFilteredItems(PRICE_DATABASE.accesorios).map(item => {
										const isSelected = !!selectedItems[item.id];
										const qty = selectedItems[item.id] || 0;
										return (
											<div 
												key={item.id}
												onClick={() => !item.isQuantifiable && handleSelectItem(item)}
												className={`group p-5 bg-white dark:bg-zinc-900 border rounded-2xl transition-all shadow-sm flex flex-col md:flex-row justify-between items-start md:items-center gap-4 ${isSelected ? "border-[#024ad8] ring-1 ring-[#024ad8]" : "border-slate-100 dark:border-zinc-800 hover:border-slate-200 dark:hover:border-zinc-800"}`}>
												<div className="flex-1 text-left">
													<div className="flex items-center gap-2.5">
														<span className="text-[10px] font-extrabold uppercase px-2 py-0.5 rounded bg-sky-150 dark:bg-sky-900/30 text-sky-700 dark:text-sky-400 tracking-wider">
															{item.code}
														</span>
														<h3 className="font-bold text-slate-805 dark:text-slate-100 text-sm md:text-base">{item.name}</h3>
													</div>
													<p className="text-xs text-slate-505 dark:text-slate-400 mt-1">{item.capacity}</p>
												</div>
												<div className="flex items-center justify-between md:justify-end w-full md:w-auto gap-6 border-t md:border-t-0 pt-3 md:pt-0 border-slate-105 dark:border-zinc-800">
													<div className="text-right text-left">
														<span className="block text-[10px] text-slate-405 font-bold uppercase">VALOR</span>
														<span className="font-extrabold text-slate-805 dark:text-slate-205 text-base md:text-lg">
															{formatValue(getDisplayPrice(item.price))}
														</span>
													</div>
													
													{item.isQuantifiable ? (
														<div className="flex items-center gap-2 no-print" onClick={(e) => e.stopPropagation()}>
															{qty > 0 ? (
																<div className="flex items-center bg-slate-105 dark:bg-zinc-800 rounded-xl p-1 border border-slate-200 dark:border-zinc-700">
																	<button 
																		onClick={() => handleUpdateQty(item.id, -1)}
																		className="w-7 h-7 rounded-lg bg-white dark:bg-zinc-700 hover:bg-slate-200 text-slate-605 flex items-center justify-center font-bold text-base shadow-sm">
																		-
																	</button>
																	<span className="px-3 text-center text-xs font-extrabold text-slate-805 dark:text-white whitespace-nowrap">{qty} m</span>
																	<button 
																		onClick={() => handleUpdateQty(item.id, 1)}
																		className="w-7 h-7 rounded-lg bg-white dark:bg-zinc-700 hover:bg-slate-200 text-slate-655 flex items-center justify-center font-bold text-base shadow-sm">
																		+
																	</button>
																</div>
															) : (
																<button 
																	onClick={() => handleUpdateQty(item.id, 1)}
																	className="px-4 py-2 text-xs font-bold rounded-xl border border-slate-250 dark:border-zinc-700 bg-slate-50 dark:bg-zinc-800 text-slate-600 hover:text-blue-650 dark:hover:text-blue-400 transition-colors shadow-sm">
																	Añadir Metros
																</button>
															)}
														</div>
													) : (
														<div className="no-print">
															{isSelected ? (
																<div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center shadow-md">
																	<svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
																		<path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
																	</svg>
																</div>
															) : (
																<div className="w-8 h-8 rounded-full bg-slate-50 dark:bg-zinc-800 text-slate-405 group-hover:text-blue-600 dark:group-hover:text-blue-405 border border-slate-200 dark:border-zinc-700 flex items-center justify-center transition-colors">
																	<svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
																		<path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
																	</svg>
																</div>
															)}
														</div>
													)}
												</div>
											</div>
										);
									})}
								</div>
							)}
						</div>
					</div>

					{/* Sidebar simulation panel (Desktop) */}
					<div className="desktop-sidebar w-full xl:w-96 xl:sticky xl:top-24 self-start space-y-6">
						<QuotationCard
							selectedItemArray={selectedItemArray}
							formatValue={formatValue}
							getDisplayPrice={getDisplayPrice}
							showIva={showIva}
							subtotalDisplay={subtotalDisplay}
							discountDisplay={discountValue}
							ivaDisplay={ivaValue}
							totalDisplay={finalTotal}
							installmentDisplay={monthlyInstallment}
							currency={currency}
							bnaExchangeRate={bnaExchangeRate}
							handleWhatsAppShare={handleWhatsAppShare}
							handleCopyLink={handleCopyLink}
							handlePrint={handlePrint}
							handleClearQuote={handleClearQuote}
							handleUpdateQty={handleUpdateQty}
							validationError={validationError}
						/>
					</div>
				</div>

				<PremiumFooter />
			</div>
		);
	}

	return (
		<>
			<SEO 
				title="Simulador Plan Ahora 24 - Vendedores | Alloatti" 
				description="Panel de simulación y presupuesto del Plan Ahora 24 para asesores comerciales."
				url="/maquinas/promociones"
			/>
			
			<style>{`
				.print-only { display: none; }
				@media print {
					body { background: white !important; color: #1a1a1a !important; }
					.interactive-layout { display: none !important; }
					.print-only { display: block !important; }
					.print-only * { color: #1a1a1a !important; background: transparent !important; border-color: #e2e8f0 !important; }
					.print-only .text-[#024ad8] { color: #024ad8 !important; }
					.print-only .text-slate-500 { color: #64748b !important; }
				}
				@media (min-width: 1400px) {
					.pricing-layout { flex-direction: row !important; }
					.desktop-sidebar { display: block !important; }
					.mobile-drawer-trigger { display: none !important; }
				}
				@media (max-width: 1399px) {
					.pricing-layout { flex-direction: column !important; }
					.desktop-sidebar { display: none !important; }
					.mobile-drawer-trigger { display: flex !important; }
				}
			`}</style>

			<div className="interactive-layout">
				<Base />
				<section className="w-full absolute top-0 flex justify-center items-start lg:pl-[290px] xl:pl-[300px] pl-4 pr-16 md:px-8 mb-32 min-h-screen transition-colors duration-500 bg-slate-50 dark:bg-zinc-950/20">
					{mainContent}
				</section>
			</div>

			{/* Floating Mobile/Tablet drawer trigger */}
			{selectedItemArray.length > 0 && !previewAsClient && isAuthorized && (
				<div className="mobile-drawer-trigger fixed bottom-6 left-6 lg:left-[314px] right-6 z-40 no-print flex justify-center">
					<Drawer.Root>
						<Drawer.Trigger asChild>
							<button className="w-full max-w-md bg-[#024ad8] hover:bg-[#0e3191] text-white py-4 px-6 rounded-2xl shadow-xl flex items-center justify-between font-extrabold text-xs uppercase tracking-wider transition-all border border-blue-500/30">
								<span className="flex items-center gap-2">
									<svg className="w-4 h-4 animate-pulse" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
										<path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
									</svg>
									Ver Simulación ({selectedItemArray.length})
								</span>
								<span className="font-black">{formatValue(finalTotal)}</span>
							</button>
						</Drawer.Trigger>
						<Drawer.Portal>
							<Drawer.Overlay className="fixed inset-0 bg-black/60 z-50 animate-hp-fade" />
							<Drawer.Content className="bg-white dark:bg-zinc-900 flex flex-col rounded-t-[32px] max-h-[85vh] fixed bottom-0 left-0 right-0 z-50 focus:outline-none border-t border-slate-200 dark:border-zinc-800">
								<div className="p-4 bg-white dark:bg-zinc-900 rounded-t-[32px] flex flex-col h-full overflow-hidden">
									<div className="mx-auto w-12 h-1.5 rounded-full bg-slate-200 dark:bg-zinc-800 mb-4 flex-shrink-0" />
									<div className="overflow-y-auto flex-1 pb-6">
										<QuotationCard
											selectedItemArray={selectedItemArray}
											formatValue={formatValue}
											getDisplayPrice={getDisplayPrice}
											showIva={showIva}
											subtotalDisplay={subtotalDisplay}
											discountDisplay={discountValue}
											ivaDisplay={ivaValue}
											totalDisplay={finalTotal}
											installmentDisplay={monthlyInstallment}
											currency={currency}
											bnaExchangeRate={bnaExchangeRate}
											handleWhatsAppShare={handleWhatsAppShare}
											handleCopyLink={handleCopyLink}
											handlePrint={handlePrint}
											handleClearQuote={handleClearQuote}
											handleUpdateQty={handleUpdateQty}
											validationError={validationError}
										/>
									</div>
								</div>
							</Drawer.Content>
						</Drawer.Portal>
					</Drawer.Root>
				</div>
			)}

			{/* Print layout representation */}
			<div className="print-only p-8 bg-white max-w-3xl mx-auto text-left">
				<div className="text-center mb-8 border-b pb-4">
					<img src="https://www.alloatti.com/Alloatti-logo-dark.png" alt="Alloatti SRL" className="mx-auto h-12" />
					<h2 className="text-xl font-black tracking-tight mt-4 text-slate-800 uppercase">Simulación de Plan Ahora 24</h2>
					<p className="text-xs text-slate-500 mt-1">Generado el {new Date().toLocaleDateString("es-AR")}</p>
				</div>

				<div className="space-y-6">
					<h3 className="text-sm font-bold text-slate-800 uppercase tracking-wider border-b pb-2">Detalle de Equipos Seleccionados</h3>
					<table className="w-full text-left text-xs border-collapse">
						<thead>
							<tr className="border-b border-slate-200 text-slate-400 font-bold uppercase">
								<th className="py-2 text-left">Modelo</th>
								<th className="py-2 text-left">Detalles</th>
								<th className="py-2 text-center">Cant.</th>
								<th className="py-2 text-right">Valor de Lista</th>
							</tr>
						</thead>
						<tbody className="divide-y divide-slate-100">
							{selectedItemArray.map(item => (
								<tr key={item.id} className="text-slate-705">
									<td className="py-3 font-extrabold text-left">{item.name}</td>
									<td className="py-3 text-slate-500 text-left">{item.capacity}</td>
									<td className="py-3 text-center font-bold">{item.qty}</td>
									<td className="py-3 text-right font-bold">{formatValue(getDisplayPrice(item.price) * item.qty)}</td>
								</tr>
							))}
						</tbody>
					</table>

					<div className="border-t border-slate-200 pt-4 space-y-2.5 max-w-sm ml-auto text-right">
						<div className="flex justify-between text-xs">
							<span className="text-slate-505 font-medium">Subtotal de Lista:</span>
							<span className="font-bold text-slate-805">
								{formatValue(showIva ? subtotalDisplay * 1.105 : subtotalDisplay)}
							</span>
						</div>
						<div className="flex justify-between text-xs text-emerald-600">
							<span className="font-medium">Descuento Especial Promocional (5%):</span>
							<span className="font-bold">
								- {formatValue(showIva ? discountValue * 1.105 : discountValue)}
							</span>
						</div>
						<div className="flex justify-between text-xs">
							<span className="text-slate-500 font-medium">IVA (10.5%):</span>
							<span className={`font-bold text-slate-800 ${!showIva ? "line-through text-slate-450" : ""}`}>
								{formatValue(ivaValue)}
							</span>
						</div>
						<div className="flex justify-between items-center text-sm border-t border-dashed border-slate-200 pt-3">
							<span className="text-slate-800 font-extrabold uppercase text-xs">Total Financiado:</span>
							<span className="font-black text-[#024ad8] text-base">
								{formatValue(finalTotal)}
							</span>
						</div>
						<div className="flex justify-between items-center text-base font-black text-[#024ad8] border-t border-slate-200 pt-3">
							<span>Financiación:</span>
							<span>24 cuotas de {formatValue(monthlyInstallment)}</span>
						</div>
					</div>
				</div>

				<div className="text-center mt-16 text-[10px] text-slate-400 border-t pt-4">
					<p>Alloatti SRL • Plan Ahora 24 • www.alloatti.com • Buenos Aires, Argentina</p>
				</div>
			</div>
		</>
	);
}
