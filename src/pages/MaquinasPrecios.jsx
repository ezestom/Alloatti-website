import { Base } from "../components/Base";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { SEO } from "../components/SEO";
import { useDolarApi } from "../hooks/useDolarApi";
import { Drawer } from "vaul";
import PropTypes from "prop-types";
import { sileo } from "sileo";
import { 
	FaWhatsapp, 
	FaLock, 
	FaEye, 
	FaEyeSlash, 
	FaSignOutAlt, 
	FaPrint, 
	FaFileInvoiceDollar,
	FaShareAlt
} from "react-icons/fa";

const productSchema = {
	"@context": "https://schema.org",
	"@graph": [
		{
			"@type": "Product",
			"name": "Lista de Precios Oficial - Alloatti SRL",
			"image": "https://www.alloatti.com/Alloatti-logo-dark.png",
			"description": "Cotizador y lista de precios oficial para líneas de envasado, lavado, enjuague, llenado y tapado de bidones retornables, descartables y accesorios periféricos de automatización.",
			"brand": { 
				"@type": "Brand", 
				"name": "Alloatti" 
			},
			"manufacturer": { 
				"@type": "Organization", 
				"name": "Alloatti SRL",
				"logo": "https://www.alloatti.com/Alloatti-logo-dark.png",
				"url": "https://www.alloatti.com"
			}
		}
	]
};

const PRICE_DATABASE = {
	retornables: [
		// { id: "at-50", code: "AT-50", name: "AT-50 Semiautomática", desc: "Línea semiautomática, lavado exterior/interior y tapado manual.", capacity: "50 bidones/hora", price: 12500 },
		// { id: "at-50c", code: "AT-50 C", name: "AT-50 C Semiautomática", desc: "Línea semiautomática con lavado de cabina cerrada.", capacity: "50 bidones/hora", price: 16800 },
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

// Helper lists for searching flat items
const ALL_ITEMS = [
	...PRICE_DATABASE.retornables,
	...PRICE_DATABASE.opcionales_retornables,
	...PRICE_DATABASE.descartables,
	...PRICE_DATABASE.accesorios
];

// Reusable Quotation Card Component
function QuotationCard({ 
	selectedItemArray, 
	formatValue, 
	getDisplayPrice, 
	handleUpdateQty, 
	showIva, 
	subtotalDisplay, 
	ivaDisplay, 
	totalDisplay, 
	currency, 
	bnaExchangeRate, 
	handleWhatsAppShare, 
	handleCopyLink, 
	handlePrint, 
	handleClearQuote 
}) {
	return (
		<div className="print-card bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 rounded-3xl shadow-lg p-6 min-w-[300px] space-y-6">
			<div>
				<h2 className="text-lg font-black tracking-tight text-slate-800 dark:text-white flex items-center gap-2">
					Presupuesto Estimado
				</h2>
				<p className="text-xs text-slate-400 mt-1">
					Selecciona máquinas y/o accesorios para formular tu presupuesto estimado.
				</p>
			</div>

			{/* Selected items list */}
			{selectedItemArray.length === 0 ? (
				<div className="py-12 text-center border-2 border-dashed border-slate-100 dark:border-zinc-800/80 rounded-2xl flex flex-col items-center justify-center p-4">
					<svg className="w-8 h-8 text-slate-300 dark:text-zinc-750 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
						<path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
					</svg>
					<span className="text-xs font-semibold text-slate-400 dark:text-slate-500">Ningún equipo seleccionado</span>
				</div>
			) : (
				<div className="divide-y divide-slate-100 dark:divide-zinc-800 max-h-[300px] overflow-y-auto pr-2 scrollbar-thin">
					{selectedItemArray.map(item => (
						<div key={item.id} className="py-3 flex justify-between items-center gap-4 text-xs">
							<div className="flex-1">
								<span className="font-extrabold text-slate-700 dark:text-slate-200 block text-left">
									{item.name} {item.qty > 1 && `(x${item.qty})`}
								</span>
								<span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider block text-left">{item.capacity}</span>
							</div>
							<div className="p-2.5 bg-slate-100 dark:bg-zinc-800 hover:bg-slate-200 dark:hover:bg-zinc-700/80 text-slate-700 dark:text-slate-200 rounded-xl font-bold text-xs uppercase transition-all flex items-center justify-center gap-1.5 border border-slate-200 dark:border-zinc-700">
								<span className="font-bold text-slate-800 dark:text-slate-100">
									{formatValue(getDisplayPrice(item.price) * item.qty)}
								</span>
								<button 
									onClick={() => handleUpdateQty(item.id, -item.qty)}
									className="no-print text-red-500 hover:text-red-700 w-5 h-5 rounded hover:bg-red-50 dark:hover:bg-red-955/20 flex items-center justify-center">
									<svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
										<path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
									</svg>
								</button>
							</div>
						</div>
					))}
				</div>
			)}

			{/* Financial Totals block */}
			<div className="border-t border-slate-100 dark:border-zinc-800 pt-4 space-y-3">
				<div className="flex justify-between text-xs">
					<span className="text-slate-500 dark:text-slate-400 font-medium text-left">Subtotal Neto:</span>
					<span className="font-bold text-slate-800 dark:text-slate-150">
						{formatValue(subtotalDisplay)}
					</span>
				</div>
				
				<div className="flex justify-between text-xs">
					<span className="text-slate-500 dark:text-slate-400 font-medium text-left">IVA (10.5%):</span>
					<span className={`font-bold text-slate-800 dark:text-slate-150 ${!showIva ? "line-through text-slate-400 dark:text-zinc-650" : ""}`}>
						{formatValue(ivaDisplay)}
					</span>
				</div>

				<div className="flex justify-between items-center text-sm border-t border-dashed border-slate-100 dark:border-zinc-800 pt-3">
					<span className="text-slate-800 dark:text-white font-extrabold text-left">Total Estimado:</span>
					<span className="font-black text-[#024ad8] dark:text-blue-400 text-lg">
						{formatValue(totalDisplay)}
					</span>
				</div>

				{currency === "ARS" && (
					<div className="text-[10px] bg-slate-50 dark:bg-zinc-800/50 p-2.5 rounded-xl text-slate-400 dark:text-slate-500 font-semibold text-center border border-slate-100 dark:border-zinc-800/80">
						Tipo de cambio de referencia: 1 USD = {formatValue(bnaExchangeRate)} ARS (Dólar BNA Vendedor)
					</div>
				)}
			</div>

			{/* Quote CTA actions (No Print) */}
			{selectedItemArray.length > 0 && (
				<div className="no-print flex flex-col gap-3 pt-2">
					
					<button 
						onClick={handleWhatsAppShare}
						className="w-full py-3 bg-[#25D366] hover:bg-[#1ebd59] text-white rounded-xl font-extrabold text-xs uppercase tracking-wider shadow-lg shadow-emerald-500/10 transition-all flex items-center justify-center gap-2">
						<FaWhatsapp className="text-2xl" />						
						Enviar por WhatsApp
					</button>

					<div className="grid grid-cols-2 gap-3">
						<button 
							onClick={handleCopyLink}
							className="p-2.5 bg-slate-100 dark:bg-zinc-800 hover:bg-slate-200 dark:hover:bg-zinc-700/80 text-slate-700 dark:text-slate-200 rounded-xl font-bold text-xs uppercase transition-all flex items-center justify-center gap-1.5 border border-slate-200 dark:border-zinc-700">
							Compartir
						</button>
						<button 
							onClick={handlePrint}
							className="p-2.5 bg-slate-100 dark:bg-zinc-800 hover:bg-slate-200 dark:hover:bg-zinc-700/80 text-slate-700 dark:text-slate-200 rounded-xl font-bold text-xs uppercase transition-all flex items-center justify-center gap-1.5 border border-slate-200 dark:border-zinc-700">
							PDF / Imprimir
						</button>
					</div>

					<button 
						onClick={handleClearQuote}
						className="w-full text-center text-xs text-red-500 hover:text-red-700 font-bold hover:underline transition-colors mt-2">
						Limpiar Selección
					</button>

				</div>
			)}
		</div>
	);
}

QuotationCard.propTypes = {
	selectedItemArray: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.string.isRequired,
			code: PropTypes.string.isRequired,
			name: PropTypes.string.isRequired,
			desc: PropTypes.string.isRequired,
			capacity: PropTypes.string.isRequired,
			price: PropTypes.number.isRequired,
			qty: PropTypes.number.isRequired
		})
	).isRequired,
	formatValue: PropTypes.func.isRequired,
	getDisplayPrice: PropTypes.func.isRequired,
	handleUpdateQty: PropTypes.func.isRequired,
	showIva: PropTypes.bool.isRequired,
	subtotalDisplay: PropTypes.number.isRequired,
	ivaDisplay: PropTypes.number.isRequired,
	totalDisplay: PropTypes.number.isRequired,
	currency: PropTypes.string.isRequired,
	bnaExchangeRate: PropTypes.number.isRequired,
	handleWhatsAppShare: PropTypes.func.isRequired,
	handleCopyLink: PropTypes.func.isRequired,
	handlePrint: PropTypes.func.isRequired,
	handleClearQuote: PropTypes.func.isRequired
};

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
					<h2 className="text-xl font-black text-slate-800 dark:text-white tracking-tight">
						Portal de Vendedores
					</h2>
					<p className="text-xs text-slate-500 dark:text-slate-400">
						Ingresa la clave autorizada para visualizar la lista de precios oficial y confeccionar cotizaciones.
					</p>
				</div>

				<form onSubmit={handleLogin} className="space-y-4">
					<div className="space-y-2 text-left">
						<label className="block text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
							Contraseña de Acceso
						</label>
						<div className="relative">
							<span className="absolute inset-y-0 left-0 pl-3.5 flex items-center text-slate-400">
								<FaLock />
							</span>
							<input
								type={showPassword ? "text" : "password"}
								value={password}
								onChange={(e) => setPassword(e.target.value)}
								className="w-full bg-slate-50 dark:bg-zinc-800/50 border border-slate-200 dark:border-zinc-800 rounded-xl py-3 pl-10 pr-10 text-sm font-semibold focus:outline-none focus:border-[#024ad8] focus:ring-1 focus:ring-[#024ad8] dark:text-white"
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

// Client specific view
function ClientView({
	selectedItemArray,
	formatValue,
	getDisplayPrice,
	currency,
	toggleCurrency,
	showIva,
	handleIvaToggle,
	bnaExchangeRate,
	handleWhatsAppShare,
	handlePrint,
	handleCopyLink,
	apiFailed,
	isAuthorized,
	setPreviewAsClient,
	setSearchParams
}) {
	const totalUSD = selectedItemArray.reduce((acc, item) => acc + (item.price * item.qty), 0);
	const subtotalDisplay = totalUSD * (currency === "ARS" ? bnaExchangeRate : 1);
	const ivaDisplay = subtotalDisplay * 0.105;
	const finalTotalDisplay = showIva ? subtotalDisplay * 1.105 : subtotalDisplay;

	return (
		<div className="w-full max-w-5xl my-10 flex flex-col gap-6 pb-16">
			{/* Preview Banner for Sellers */}
			{isAuthorized && (
				<div className="bg-amber-500 text-white py-3.5 px-5 rounded-2xl text-center font-bold text-xs flex flex-col sm:flex-row items-center justify-between gap-3 shadow-md border border-amber-400 no-print">
					<span className="flex items-center gap-2">
						<FaLock />
						<span><strong>Vista Previa del Cliente:</strong> Estás previsualizando la cotización tal como la recibirá el cliente.</span>
					</span>
					<button 
						onClick={() => setPreviewAsClient(false)}
						className="bg-white text-amber-700 px-4 py-1.5 rounded-xl hover:bg-slate-100 transition-colors font-extrabold text-[10px] uppercase tracking-wider shadow-sm">
						Volver al Editor de Precios
					</button>
				</div>
			)}

			{/* Client view header */}
			<header className="hp-page-header no-print text-left">
				<div className="hp-eyebrow hp-eyebrow-blue flex items-center gap-2">
					<FaFileInvoiceDollar className="text-xs" />
					Presupuesto Personalizado • Alloatti SRL
				</div>
				<h1 className="hp-h1">Tu Cotización de Equipamiento</h1>
				<p className="text-sm text-slate-500 dark:text-slate-400 mt-6">
					Detalle de los equipos y accesorios periféricos seleccionados por tu asesor comercial para tu planta.
				</p>
			</header>

			{/* Main Grid: Details on left, Totals on right */}
			<div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
				
				{/* Quoted Items List (Left Column) */}
				<div className="lg:col-span-2 space-y-4">
					{selectedItemArray.map(item => (
						<div 
							key={item.id}
							className="p-6 bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 rounded-3xl shadow-sm space-y-4 text-left">
							<div className="flex flex-col sm:flex-row justify-between items-start gap-3">
								<div>
									<span className="text-[10px] font-extrabold uppercase px-2 py-0.5 rounded bg-blue-100 dark:bg-blue-900/30 text-[#024ad8] dark:text-blue-400 tracking-wider">
										{item.code}
									</span>
									<h3 className="font-bold text-slate-800 dark:text-white text-base mt-2">{item.name}</h3>
								</div>
								<div className="text-left sm:text-right">
									<span className="block text-[10px] text-slate-400 font-bold uppercase">SUBTOTAL</span>
									<span className="font-extrabold text-[#024ad8] dark:text-blue-400 text-lg sm:text-xl">
										{formatValue(getDisplayPrice(item.price) * item.qty)}
									</span>
									{item.qty > 1 && (
										<span className="block text-[10px] text-slate-400 font-bold mt-1">
											{item.qty} x {formatValue(getDisplayPrice(item.price))} {item.isQuantifiable ? "m" : "u"}
										</span>
									)}
								</div>
							</div>
							
							<div className="border-t border-slate-100 dark:border-zinc-850 pt-3 space-y-2">
								<p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
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

				{/* Sidebar totals card (Right Column) */}
				<div className="space-y-6">
					
					{/* Currency & Tax controllers card */}
					<div className="bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 rounded-3xl shadow-md p-6 space-y-5 no-print text-left">
						<h3 className="text-xs font-black uppercase tracking-wider text-slate-500 dark:text-slate-400">
							Opciones de Visualización
						</h3>
						
						{/* Currency selector */}
						<div className="space-y-2">
							<span className="block text-[10px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">Moneda</span>
							<div className="flex bg-slate-100 dark:bg-zinc-800 p-1 rounded-xl">
								<button 
									onClick={() => toggleCurrency("USD")}
									className={`flex-1 py-2 text-xs font-bold rounded-lg transition-all ${currency === "USD" ? "bg-white dark:bg-zinc-700 text-[#024ad8] dark:text-white shadow-sm" : "text-slate-500 hover:text-slate-800 dark:hover:text-slate-250"}`}>
									USD
								</button>
								<button 
									onClick={() => !apiFailed && toggleCurrency("ARS")}
									disabled={apiFailed}
									className={`flex-1 py-2 text-xs font-bold rounded-lg transition-all ${
										apiFailed 
											? "opacity-45 cursor-not-allowed text-slate-400" 
											: currency === "ARS" 
												? "bg-white dark:bg-zinc-700 text-[#024ad8] dark:text-white shadow-sm" 
												: "text-slate-500 hover:text-slate-800 dark:hover:text-slate-250"
									}`}>
									ARS (Pesos)
								</button>
							</div>
						</div>

						{/* BNA rate show (Only when ARS is selected) */}
						{currency === "ARS" && (
							<div className="space-y-2">
								<span className="block text-[10px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">Tipo de cambio BNA</span>
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
							<span className="block text-[10px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">Impuestos</span>
							<button 
								onClick={handleIvaToggle}
								className={`w-full py-2.5 px-4 text-xs font-bold rounded-xl border transition-all flex items-center justify-between ${showIva ? "bg-emerald-50 dark:bg-emerald-950/20 border-emerald-300 dark:border-emerald-800 text-emerald-700 dark:text-emerald-400" : "bg-slate-50 dark:bg-zinc-800 border-slate-200 dark:border-zinc-700 text-slate-600 dark:text-slate-400 hover:bg-slate-100"}`}>
								<span>{showIva ? "IVA Incluido (10.5%)" : "Neto sin IVA"}</span>
								<div className={`w-8 h-4 rounded-full p-0.5 transition-colors ${showIva ? "bg-emerald-500" : "bg-slate-300 dark:bg-zinc-600"}`}>
									<div className={`w-3 h-3 rounded-full bg-white transition-transform transform ${showIva ? "translate-x-4" : "translate-x-0"}`}></div>
								</div>
							</button>
						</div>
					</div>

					{/* Totals & actions card */}
					<div className="bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 rounded-3xl shadow-lg p-6 space-y-6 text-left">
						<div>
							<h3 className="text-base font-black text-slate-800 dark:text-white tracking-tight">
								Resumen de Inversión
							</h3>
							<p className="text-[10px] text-slate-400 mt-0.5">
								Presupuesto estimado sujeto a variaciones impositivas y de flete.
							</p>
						</div>

						{/* Price breakdown */}
						<div className="border-t border-slate-100 dark:border-zinc-800 pt-4 space-y-3">
							<div className="flex justify-between text-xs">
								<span className="text-slate-500 dark:text-slate-400 font-medium">Subtotal Neto:</span>
								<span className="font-bold text-slate-800 dark:text-slate-150">
									{formatValue(subtotalDisplay)}
								</span>
							</div>
							
							<div className="flex justify-between text-xs">
								<span className="text-slate-500 dark:text-slate-400 font-medium">IVA (10.5%):</span>
								<span className={`font-bold text-slate-800 dark:text-slate-150 ${!showIva ? "line-through text-slate-400 dark:text-zinc-650" : ""}`}>
									{formatValue(ivaDisplay)}
								</span>
							</div>

							<div className="flex justify-between items-center text-sm border-t border-dashed border-slate-100 dark:border-zinc-800 pt-3">
								<span className="text-slate-850 dark:text-white font-extrabold uppercase text-xs tracking-wider">Total Estimado:</span>
								<span className="font-black text-[#024ad8] dark:text-blue-400 text-xl">
									{formatValue(finalTotalDisplay)}
								</span>
							</div>
						</div>

						{/* CTAs */}
						<div className="no-print flex flex-col gap-3">
							<button 
								onClick={handleWhatsAppShare}
								className="w-full py-3.5 bg-[#25D366] hover:bg-[#1ebd59] text-white rounded-xl font-extrabold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/10 hover:shadow-emerald-500/25">
								<FaWhatsapp className="text-lg animate-bounce" />
								Contactar Asesor Comercial
							</button>

							<button 
								onClick={handleCopyLink}
								className="w-full py-3 bg-slate-100 dark:bg-zinc-800 hover:bg-slate-200 dark:hover:bg-zinc-700 text-slate-700 dark:text-slate-250 rounded-xl font-bold text-xs uppercase transition-all flex items-center justify-center gap-1.5 border border-slate-200 dark:border-zinc-700">
								<FaShareAlt />
								Compartir Cotización
							</button>

							<button 
								onClick={handlePrint}
								className="w-full py-3 bg-slate-100 dark:bg-zinc-800 hover:bg-slate-200 dark:hover:bg-zinc-700 text-slate-700 dark:text-slate-200 rounded-xl font-bold text-xs uppercase transition-all flex items-center justify-center gap-1.5 border border-slate-200 dark:border-zinc-700">
								<FaPrint />
								Descargar Presupuesto / PDF
							</button>
						</div>
					</div>

				</div>

			</div>

			{/* Sellers login access link at the bottom */}
			{!isAuthorized && (
				<div className="no-print text-center pt-8 border-t border-slate-150 dark:border-zinc-850">
					<button 
						onClick={() => {
							// Clear search params to trigger password prompt
							setSearchParams({}, { replace: true });
						}}
						className="text-[10px] font-bold uppercase tracking-widest text-slate-400 hover:text-[#024ad8] dark:hover:text-blue-400 transition-colors">
					</button>
				</div>
			)}
		</div>
	);
}

ClientView.propTypes = {
	selectedItemArray: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.string.isRequired,
			code: PropTypes.string.isRequired,
			name: PropTypes.string.isRequired,
			desc: PropTypes.string.isRequired,
			capacity: PropTypes.string.isRequired,
			price: PropTypes.number.isRequired,
			qty: PropTypes.number.isRequired,
			isQuantifiable: PropTypes.bool
		})
	).isRequired,
	formatValue: PropTypes.func.isRequired,
	getDisplayPrice: PropTypes.func.isRequired,
	currency: PropTypes.string.isRequired,
	toggleCurrency: PropTypes.func.isRequired,
	showIva: PropTypes.bool.isRequired,
	handleIvaToggle: PropTypes.func.isRequired,
	bnaExchangeRate: PropTypes.number.isRequired,
	handleWhatsAppShare: PropTypes.func.isRequired,
	handlePrint: PropTypes.func.isRequired,
	handleCopyLink: PropTypes.func.isRequired,
	apiFailed: PropTypes.bool.isRequired,
	isAuthorized: PropTypes.bool.isRequired,
	setPreviewAsClient: PropTypes.func.isRequired,
	setSearchParams: PropTypes.func.isRequired
};

export function MaquinasPrecios() {
	const [searchParams, setSearchParams] = useSearchParams();

	// Auth States
	const [isAuthorized, setIsAuthorized] = useState(false);
	const [password, setPassword] = useState("");
	const [loginError, setLoginError] = useState("");
	const [showPassword, setShowPassword] = useState(false);
	const [previewAsClient, setPreviewAsClient] = useState(false);

	// App States
	const [activeTab, setActiveTab] = useState("retornables");
	const [currency, setCurrency] = useState("USD");
	const [showIva, setShowIva] = useState(false);
	const [selectedItems, setSelectedItems] = useState({}); // { itemId: quantity }
	const [searchTerm, setSearchTerm] = useState("");

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

	// Sync state changes back to URL to keep it copy-pasteable
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

	// Parse initial URL parameters once on mount
	useEffect(() => {
		const itemsParam = searchParams.get("items"); // format: id1:qty,id2:qty
		const currencyParam = searchParams.get("cur");
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

		if (ivaParam === "true") {
			setShowIva(true);
		} else if (ivaParam === "false") {
			setShowIva(false);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	// Handlers
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

	// Auth Handlers
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

	// Math Helpers
	const getDisplayPrice = (usdBasePrice) => {
		let price = usdBasePrice;
		if (currency === "ARS") {
			price = usdBasePrice * bnaExchangeRate;
		}
		if (showIva) {
			price = price * 1.105; // +10.5% IVA
		}
		return price;
	};

	const formatValue = (value) => {
		const formattedNumber = new Intl.NumberFormat("es-AR", {
			minimumFractionDigits: 0,
			maximumFractionDigits: 2
		}).format(value);
		return `$${formattedNumber}`;
	};

	// Calculations for Custom Quote Drawer
	const selectedItemArray = Object.entries(selectedItems).map(([id, qty]) => {
		const found = ALL_ITEMS.find(i => i.id === id);
		return found ? { ...found, qty } : null;
	}).filter(Boolean);

	const subtotalUSD = selectedItemArray.reduce((acc, item) => acc + (item.price * item.qty), 0);
	const subtotalDisplay = subtotalUSD * (currency === "ARS" ? bnaExchangeRate : 1);
	const ivaDisplay = subtotalDisplay * 0.105;
	const totalDisplay = showIva ? subtotalDisplay * 1.105 : subtotalDisplay;

	// Actions
	const handleCopyLink = () => {
		navigator.clipboard.writeText(window.location.href);
		sileo.success({
			title: "¡Enlace copiado!",
			description: "La cotización se copió al portapapeles.",
		});
	};

	const handlePrint = () => {
		window.print();
	};

	const handleWhatsAppShare = () => {
		const productsText = selectedItemArray
			.map(i => `- ${i.name} (${i.qty} x ${formatValue(getDisplayPrice(i.price))})`)
			.join("\n");
		
		const details = `Hola Alloatti, me interesa cotizar los siguientes equipos:\n\n${productsText}\n\n*Resumen Estimado (${currency}):*\n- Subtotal Neto: ${formatValue(subtotalDisplay)}\n- IVA (10.5%): ${formatValue(ivaDisplay)}${!showIva ? " (No incluido)" : ""}\n- *Total Estimado: ${formatValue(totalDisplay)}*`;
		
		const url = `https://wa.me/5491168641122?text=${encodeURIComponent(details)}`;
		window.open(url, "_blank");
	};

	// Filtering items in active category
	const getFilteredItems = (categoryList) => {
		if (!searchTerm.trim()) return categoryList;
		return categoryList.filter(item => 
			item.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
			item.code.toLowerCase().includes(searchTerm.toLowerCase()) || 
			item.desc.toLowerCase().includes(searchTerm.toLowerCase())
		);
	};

	const hasItemsInUrl = selectedItemArray.length > 0;

	// Determine View Mode
	let mainContent;
	if (!isAuthorized) {
		if (hasItemsInUrl) {
			mainContent = (
				<ClientView
					selectedItemArray={selectedItemArray}
					formatValue={formatValue}
					getDisplayPrice={getDisplayPrice}
					currency={currency}
					toggleCurrency={toggleCurrency}
					showIva={showIva}
					handleIvaToggle={handleIvaToggle}
					bnaExchangeRate={bnaExchangeRate}
					handleWhatsAppShare={handleWhatsAppShare}
					handlePrint={handlePrint}
					handleCopyLink={handleCopyLink}
					apiFailed={apiFailed}
					isAuthorized={isAuthorized}
					setPreviewAsClient={setPreviewAsClient}
					setSearchParams={setSearchParams}
				/>
			);
		} else {
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
		}
	} else {
		if (previewAsClient && hasItemsInUrl) {
			mainContent = (
				<ClientView
					selectedItemArray={selectedItemArray}
					formatValue={formatValue}
					getDisplayPrice={getDisplayPrice}
					currency={currency}
					toggleCurrency={toggleCurrency}
					showIva={showIva}
					handleIvaToggle={handleIvaToggle}
					bnaExchangeRate={bnaExchangeRate}
					handleWhatsAppShare={handleWhatsAppShare}
					handlePrint={handlePrint}
					handleCopyLink={handleCopyLink}
					apiFailed={apiFailed}
					isAuthorized={isAuthorized}
					setPreviewAsClient={setPreviewAsClient}
					setSearchParams={setSearchParams}
				/>
			);
		} else {
			mainContent = (
				<div className="w-full max-w-5xl my-10 flex flex-col gap-4 pb-16">
					
					{/* Banner warning about shared quote preview */}
					{hasItemsInUrl && (
						<div className="bg-blue-600 text-white py-3.5 px-5 rounded-2xl text-center font-bold text-xs flex flex-col sm:flex-row items-center justify-between gap-3 shadow-md border border-blue-500 no-print animate-hp-fade">
							<span className="flex items-center gap-2">
								<FaFileInvoiceDollar />
								<span>Visualizando presupuesto compartido. Estás en Modo Vendedor y puedes editarlo.</span>
							</span>
							<button 
								onClick={() => setPreviewAsClient(true)}
								className="bg-white text-blue-700 px-4 py-1.5 rounded-xl hover:bg-slate-105 transition-colors font-extrabold text-[10px] uppercase tracking-wider shadow-sm">
								Previsualizar como Cliente
							</button>
						</div>
					)}

					<div className="flex pricing-layout gap-4">
						{/* Main pricing Area */}
						<div className="flex-1">
						
						{/* Header UI */}
						<header className="hp-page-header no-print flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 text-left">
							<div>
								<div className="hp-eyebrow hp-eyebrow-blue flex items-center gap-2">
									<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
										<path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
									</svg>
									Herramientas Comerciales • Tarifas Oficiales (Vendedores)
								</div>
								<h1 className="hp-h1">Lista de Precios y Cotizador</h1>
								<p className="text-sm text-slate-500 dark:text-slate-400 mt-2 py-2">
									Precios expresados en Dólares (USD) o convertibles a pesos según cotización BNA venta del día.
								</p>
							</div>
							<button 
								onClick={handleLogout}
								className="self-start sm:self-center px-4 py-2.5 bg-red-50 hover:bg-red-100 dark:bg-red-950/20 dark:hover:bg-red-900/30 text-red-650 dark:text-red-400 rounded-xl font-bold text-xs uppercase tracking-wider flex items-center gap-2 border border-red-200 dark:border-red-900/40 transition-colors">
								<FaSignOutAlt />
								Cerrar Sesión
							</button>
						</header>

						{/* Parameters Controller Card (No Print) */}
						<div className="no-print min-h-[150px] mt-8 p-6 bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 rounded-2xl shadow-sm space-y-6">
							<div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
								
								{/* Currency Toggle */}
								<div className="text-left">
									<label className="block text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">Moneda base</label>
									<div className="flex bg-slate-100 dark:bg-zinc-800 p-1 rounded-xl">
										<button 
											onClick={() => toggleCurrency("USD")}
											className={`flex-1 py-2 text-xs font-bold rounded-lg transition-all ${currency === "USD" ? "bg-white dark:bg-zinc-700 text-[#024ad8] dark:text-white shadow-sm" : "text-slate-505 hover:text-slate-800 dark:hover:text-slate-200"}`}>
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
														: "text-slate-505 hover:text-slate-800 dark:hover:text-slate-200"
											}`}
											title={apiFailed ? "Servicio de cotización BNA no disponible (API offline)" : ""}
										>
											PESOS (ARS)
										</button>
									</div>
									{apiFailed && (
										<div className="mt-1.5 text-[10px] font-semibold text-red-500 text-left">
											Conversión a ARS desactivada: servicio de cotización offline.
										</div>
									)}
								</div>

								{/* BNA Exchange Input */}
								<div className={currency === "ARS" ? "opacity-100 transition-all duration-300 text-left" : "opacity-40 pointer-events-none transition-all duration-300 text-left"}>
									<div className="flex justify-between items-center mb-2">
										<label className="block text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">Tipo de cambio (Dólar BNA)</label>
										
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
													? "bg-slate-100 dark:bg-zinc-800 text-slate-505 dark:text-zinc-400 border-slate-200 dark:border-zinc-700 cursor-not-allowed" 
													: "bg-white dark:bg-zinc-900 text-slate-800 dark:text-white border-slate-350 dark:border-zinc-700"
											}`}
											placeholder="Cotización BNA venta"
										/>
									</div>
									
									{/* Status message */}
									{currency === "ARS" && (
										<div className="mt-1 text-[10px] font-medium min-h-[15px] text-left">
											{apiLoading ? (
												<span className="text-slate-400 animate-pulse">Obteniendo cotización oficial...</span>
											) : apiFailed ? (
												<span className="text-red-505">Error de conexión. Ingrese el tipo de cambio manual.</span>
											) : !isManualExchangeRate ? (
												<span className="text-emerald-555 flex items-center gap-1">
													<span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping"></span>
													Cotización oficial actualizada (dolarapi.com)
												</span>
											) : (
												<span className="text-amber-505">Modo de edición manual activado.</span>
											)}
										</div>
									)}
								</div>

								{/* IVA Switch */}
								<div className="flex flex-col text-left">
									<label className="block text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">Impuestos (IVA 10.5%)</label>
									<button 
										onClick={handleIvaToggle}
										className={`w-full py-2.5 px-4 text-xs font-bold rounded-xl border transition-all flex items-center justify-between ${showIva ? "bg-emerald-50 dark:bg-emerald-950/20 border-emerald-300 dark:border-emerald-800 text-emerald-700 dark:text-emerald-400" : "bg-slate-550 dark:bg-zinc-800 border-slate-200 dark:border-zinc-700 text-slate-605 dark:text-slate-400 hover:bg-slate-100"}`}>
										<span>{showIva ? "IVA Incluido (+10.5%)" : "Neto (Sin IVA)"}</span>
										<div className={`w-8 h-4 rounded-full p-0.5 transition-colors ${showIva ? "bg-emerald-500" : "bg-slate-300 dark:bg-zinc-600"}`}>
											<div className={`w-3 h-3 rounded-full bg-white transition-transform transform ${showIva ? "translate-x-4" : "translate-x-0"}`}></div>
										</div>
									</button>
								</div>

							</div>
						</div>

						{/* Categories Tabs & Search (No Print) */}
						<div className="no-print mt-8 flex flex-col md:flex-row gap-4 items-center justify-between">
							{/* Tab links */}
							<div className="flex gap-2 bg-slate-100 dark:bg-zinc-900 p-1.5 rounded-xl border border-slate-200/50 dark:border-zinc-800/80 w-full md:w-auto overflow-x-auto">
								<button 
									onClick={() => setActiveTab("retornables")}
									className={`px-5 py-2.5 text-xs font-bold rounded-lg whitespace-nowrap transition-all ${activeTab === "retornables" ? "bg-white dark:bg-zinc-700 text-[#024ad8] dark:text-white shadow-sm" : "text-slate-500 hover:text-slate-800 dark:hover:text-slate-200"}`}>
									Bidones Retornables
								</button>
								<button 
									onClick={() => setActiveTab("descartables")}
									className={`px-5 py-2.5 text-xs font-bold rounded-lg whitespace-nowrap transition-all ${activeTab === "descartables" ? "bg-white dark:bg-zinc-700 text-[#024ad8] dark:text-white shadow-sm" : "text-slate-500 hover:text-slate-800 dark:hover:text-slate-200"}`}>
									Bidones Descartables
								</button>
								<button 
									onClick={() => setActiveTab("accesorios")}
									className={`px-5 py-2.5 text-xs font-bold rounded-lg whitespace-nowrap transition-all ${activeTab === "accesorios" ? "bg-white dark:bg-zinc-700 text-[#024ad8] dark:text-white shadow-sm" : "text-slate-500 hover:text-slate-800 dark:hover:text-slate-200"}`}>
									Accesorios
								</button>
							</div>

							{/* Search filter */}
							<div className="relative w-full md:w-72">
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

						{/* Items Grid List */}
						<div className="mt-6 space-y-4">
							
							{/* Tab 1: Retornables */}
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
													<div className="flex-1">
														<div className="flex items-center gap-2.5">
															<span className="text-[10px] font-extrabold uppercase px-2 py-0.5 rounded bg-blue-100 dark:bg-blue-900/30 text-[#024ad8] dark:text-blue-400 tracking-wider">
																{item.code}
															</span>
															<h3 className="font-bold text-slate-800 dark:text-slate-100 text-sm md:text-base">{item.name}</h3>
														</div>
														<p className="text-xs text-slate-500 dark:text-slate-400 mt-1 text-left">{item.capacity}</p>
													</div>
													<div className="flex items-center justify-between md:justify-end w-full md:w-auto gap-6 border-t md:border-t-0 pt-3 md:pt-0 border-slate-100 dark:border-zinc-800">
														<div className="text-right text-left">
															<span className="block text-[10px] text-slate-400 font-bold uppercase">PRECIO BASE</span>
															<span className="font-extrabold text-[#024ad8] dark:text-blue-400 text-base md:text-lg">
																{formatValue(getDisplayPrice(item.price))}
															</span>
														</div>
														<div className="no-print">
															{isSelected ? (
																<div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center shadow-md shadow-blue-500/20">
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

									{/* Opcionales subheader */}
									<div className="mt-8 mb-4">
										<h2 className="text-xs font-extrabold tracking-widest text-slate-400 uppercase text-left">Equipamiento Opcional de Línea Nueva</h2>
									</div>

									<div className="grid grid-cols-1 gap-4">
										{getFilteredItems(PRICE_DATABASE.opcionales_retornables).map(item => {
											const isSelected = !!selectedItems[item.id];
											return (
												<div 
													key={item.id}
													onClick={() => handleSelectItem(item)}
													className={`group cursor-pointer p-5 bg-white dark:bg-zinc-900 border rounded-2xl transition-all shadow-sm flex flex-col md:flex-row justify-between items-start md:items-center gap-4 ${isSelected ? "border-[#024ad8] ring-1 ring-[#024ad8]" : "border-slate-100 dark:border-zinc-800 hover:border-slate-300 dark:hover:border-zinc-700"}`}>
													<div className="flex-1">
														<div className="flex items-center gap-2.5">
															<span className="text-[10px] font-extrabold uppercase px-2 py-0.5 rounded bg-violet-100 dark:bg-violet-900/30 text-violet-700 dark:text-violet-400 tracking-wider">
																{item.code}
															</span>
															<h3 className="font-bold text-slate-800 dark:text-slate-100 text-sm md:text-base">{item.name}</h3>
														</div>
														<p className="text-xs text-slate-500 dark:text-slate-400 mt-1 text-left">{item.capacity}</p>
													</div>
													<div className="flex items-center justify-between md:justify-end w-full md:w-auto gap-6 border-t md:border-t-0 pt-3 md:pt-0 border-slate-100 dark:border-zinc-800">
														<div className="text-right text-left">
															<span className="block text-[10px] text-slate-400 font-bold uppercase">PRECIO EXTRA</span>
															<span className="font-extrabold text-violet-600 dark:text-violet-400 text-base md:text-lg">
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

							{/* Tab 2: Descartables */}
							{activeTab === "descartables" && (
								<div className="grid grid-cols-1 gap-4">
									{getFilteredItems(PRICE_DATABASE.descartables).map(item => {
										const isSelected = !!selectedItems[item.id];
										return (
											<div 
												key={item.id}
												onClick={() => handleSelectItem(item)}
												className={`group cursor-pointer p-5 bg-white dark:bg-zinc-900 border rounded-2xl transition-all shadow-sm flex flex-col md:flex-row justify-between items-start md:items-center gap-4 ${isSelected ? "border-[#024ad8] ring-1 ring-[#024ad8]" : "border-slate-100 dark:border-zinc-800 hover:border-slate-300 dark:hover:border-zinc-700"}`}>
												<div className="flex-1">
													<div className="flex items-center gap-2.5">
														<span className="text-[10px] font-extrabold uppercase px-2 py-0.5 rounded bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400 tracking-wider">
															{item.code}
														</span>
														<h3 className="font-bold text-slate-800 dark:text-slate-100 text-sm md:text-base">{item.name}</h3>
													</div>
													<p className="text-xs text-slate-500 dark:text-slate-400 mt-1 text-left">{item.capacity}</p>
												</div>
												<div className="flex items-center justify-between md:justify-end w-full md:w-auto gap-6 border-t md:border-t-0 pt-3 md:pt-0 border-slate-100 dark:border-zinc-800">
													<div className="text-right text-left">
														<span className="block text-[10px] text-slate-400 font-bold uppercase">PRECIO BASE</span>
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

							{/* Tab 3: Accesorios */}
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
														<span className="text-[10px] font-extrabold uppercase px-2 py-0.5 rounded bg-sky-100 dark:bg-sky-900/30 text-sky-700 dark:text-sky-400 tracking-wider">
															{item.code}
														</span>
														<h3 className="font-bold text-slate-800 dark:text-slate-100 text-sm md:text-base">{item.name}</h3>
													</div>
													<p className="text-xs text-slate-500 dark:text-slate-400 mt-1 text-left">{item.capacity}</p>
												</div>
												<div className="flex items-center justify-between md:justify-end w-full md:w-auto gap-6 border-t md:border-t-0 pt-3 md:pt-0 border-slate-100 dark:border-zinc-800">
													<div className="text-right text-left">
														<span className="block text-[10px] text-slate-400 font-bold uppercase">PRECIO</span>
														<span className="font-extrabold text-slate-800 dark:text-slate-200 text-base md:text-lg">
															{formatValue(getDisplayPrice(item.price))}
														</span>
													</div>
													
													{/* If isQuantifiable (Cinta de rodillos por metro), show counter */}
													{item.isQuantifiable ? (
														<div className="flex items-center gap-2 no-print" onClick={(e) => e.stopPropagation()}>
															{qty > 0 ? (
																<div className="flex items-center bg-slate-100 dark:bg-zinc-800 rounded-xl p-1 border border-slate-200 dark:border-zinc-700">
																	<button 
																		onClick={() => handleUpdateQty(item.id, -1)}
																		className="w-7 h-7 rounded-lg bg-white dark:bg-zinc-700 hover:bg-slate-200 text-slate-605 flex items-center justify-center font-bold text-base shadow-sm">
																		-
																	</button>
																	<span className="px-3 text-center text-xs font-extrabold text-slate-800 dark:text-white whitespace-nowrap">{qty} m</span>
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
																<div className="w-8 h-8 rounded-full bg-slate-50 dark:bg-zinc-800 text-slate-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 border border-slate-200 dark:border-zinc-700 flex items-center justify-center transition-colors">
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

					{/* Sidebar Quotation Estimate Card (Desktop only) */}
					<div className="desktop-sidebar w-full xl:w-96 xl:sticky xl:top-24 self-start space-y-6">
						<QuotationCard
							selectedItemArray={selectedItemArray}
							formatValue={formatValue}
							getDisplayPrice={getDisplayPrice}
							handleUpdateQty={handleUpdateQty}
							showIva={showIva}
							subtotalDisplay={subtotalDisplay}
							ivaDisplay={ivaDisplay}
							totalDisplay={totalDisplay}
							currency={currency}
							bnaExchangeRate={bnaExchangeRate}
							handleWhatsAppShare={handleWhatsAppShare}
							handleCopyLink={handleCopyLink}
							handlePrint={handlePrint}
							handleClearQuote={handleClearQuote}
						/>
					</div>
				</div>
			</div>
			);
		}
	}

	return (
		<>
			<SEO 
				title="Lista de Precios y Cotizador de Equipos" 
				description="Lista de precios confidencial y cotizador de envasadoras de bidones retornables, descartables y accesorios. Exclusivo para clientes Alloatti."
				url="/maquinas/precios"
				jsonLd={productSchema}
			/>
			{/* Custom styles for printing cotización */}
			<style>{`
				.print-only {
					display: none;
				}
				@media print {
					body {
						background: white !important;
						color: #1a1a1a !important;
					}
					.interactive-layout {
						display: none !important;
					}
					.print-only {
						display: block !important;
					}
					.print-only * {
						color: #1a1a1a !important;
						background: transparent !important;
						border-color: #e2e8f0 !important;
					}
					.print-only .text-primary-blue {
						color: #024ad8 !important;
					}
					.print-only .text-slate-500 {
						color: #64748b !important;
					}
				}
				@media (min-width: 1024px) {
					.pricing-content {
						margin-left: 300px;
					}
				}
				@media (min-width: 1400px) {
					.pricing-layout {
						flex-direction: row !important;
					}
					.desktop-sidebar {
						display: block !important;
					}
					.mobile-drawer-trigger {
						display: none !important;
					}
				}
				@media (max-width: 1399px) {
					.pricing-layout {
						flex-direction: column !important;
					}
					.desktop-sidebar {
						display: none !important;
					}
					.mobile-drawer-trigger {
						display: flex !important;
					}
				}
			`}</style>

			<div className="interactive-layout">
				<Base />
				<section className="w-full absolute top-0 flex justify-center items-start lg:pl-[290px] xl:pl-[300px] px-4 md:px-8 mb-32 min-h-screen transition-colors duration-500 bg-slate-50 dark:bg-zinc-950/20">
				
				{/* Toast notification handled via sileo.success */}

				{mainContent}

				{/* <PremiumFooter /> */}
				</section>
			</div>

			{/* Floating Bottom Bar & Bottom Drawer for Mobile/Tablet (< 1400px) */}
			{selectedItemArray.length > 0 && !previewAsClient && isAuthorized && (
				<div className="mobile-drawer-trigger fixed bottom-6 left-6 right-6 z-40 no-print justify-center">
					<Drawer.Root>
						<Drawer.Trigger asChild>
							<button className="w-full max-w-md bg-[#024ad8] hover:bg-[#0e3191] text-white py-4 px-6 rounded-2xl shadow-xl flex items-center justify-between font-extrabold text-xs uppercase tracking-wider transition-all border border-blue-500/30">
								<span className="flex items-center gap-2">
									<svg className="w-4 h-4 animate-pulse" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
										<path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
									</svg>
									Ver Presupuesto ({selectedItemArray.length})
								</span>
								<span className="font-black">{formatValue(totalDisplay)}</span>
							</button>
						</Drawer.Trigger>
						<Drawer.Portal>
							<Drawer.Overlay className="fixed inset-0 bg-black/60 z-50" />
							<Drawer.Content className="bg-white dark:bg-zinc-900 flex flex-col rounded-t-[32px] max-h-[85vh] fixed bottom-0 left-0 right-0 z-50 focus:outline-none border-t border-slate-200 dark:border-zinc-800">
								<div className="p-4 bg-white dark:bg-zinc-900 rounded-t-[32px] flex flex-col h-full overflow-hidden">
									<div className="mx-auto w-12 h-1.5 rounded-full bg-slate-200 dark:bg-zinc-800 mb-4 flex-shrink-0" />
									<div className="overflow-y-auto flex-1 pb-6">
										<QuotationCard
											selectedItemArray={selectedItemArray}
											formatValue={formatValue}
											getDisplayPrice={getDisplayPrice}
											handleUpdateQty={handleUpdateQty}
											showIva={showIva}
											subtotalDisplay={subtotalDisplay}
											ivaDisplay={ivaDisplay}
											totalDisplay={totalDisplay}
											currency={currency}
											bnaExchangeRate={bnaExchangeRate}
											handleWhatsAppShare={handleWhatsAppShare}
											handleCopyLink={handleCopyLink}
											handlePrint={handlePrint}
											handleClearQuote={handleClearQuote}
										/>
									</div>
								</div>
							</Drawer.Content>
						</Drawer.Portal>
					</Drawer.Root>
				</div>
			)}

			{/* Print-Only Layout */}
			<div className="print-only p-8 bg-white max-w-3xl mx-auto">
				<div className="print-header-logo text-center mb-8">
					<img src="https://www.alloatti.com/Alloatti-logo-dark.png" alt="Alloatti SRL" className="mx-auto" style={{ maxWidth: "180px", height: "auto" }} />
					<h2 className="text-xl font-black tracking-tight mt-4 text-slate-800">COTIZACIÓN DE MAQUINARIA INDUSTRIAL</h2>
					<h3 className="text-xs font-bold text-slate-800">Presupuesto no válido como factura</h3>
					<p className="text-xs text-slate-500 mt-1">Generado el {new Date().toLocaleDateString("es-AR")}</p>
				</div>
				
				<div className="border border-slate-200 rounded-2xl p-6 bg-white space-y-6">
					<h3 className="text-sm font-bold text-slate-800 uppercase tracking-wider border-b pb-2">Resumen</h3>
					
					{/* Table of selected items */}
					<table className="w-full text-left text-xs border-collapse">
						<thead>
							<tr className="border-b border-slate-200 text-slate-400 font-bold uppercase">
								<th className="py-2 text-left">Equipo / Accesorio</th>
								<th className="py-2 text-center">Capacidad</th>
								<th className="py-2 text-center">Cant.</th>
								<th className="py-2 text-right">Precio Unit.</th>
								<th className="py-2 text-right">Subtotal</th>
							</tr>
						</thead>
						<tbody className="divide-y divide-slate-100">
							{selectedItemArray.length === 0 ? (
								<tr>
									<td colSpan="5" className="py-4 text-center text-slate-400">No hay equipos seleccionados.</td>
								</tr>
							) : (
								selectedItemArray.map(item => (
									<tr key={item.id} className="text-slate-700">
										<td className="py-3 font-extrabold text-left">{item.name}</td>
										<td className="py-3 text-center text-slate-500">{item.capacity}</td>
										<td className="py-3 text-center font-bold">{item.qty}</td>
										<td className="py-3 text-right">{formatValue(getDisplayPrice(item.price))}</td>
										<td className="py-3 text-right font-bold">{formatValue(getDisplayPrice(item.price) * item.qty)}</td>
									</tr>
								))
							)}
						</tbody>
					</table>

					<div className="border-t border-slate-200 pt-4 space-y-2.5 max-w-sm ml-auto">
						<div className="flex justify-between text-xs">
							<span className="text-slate-500 font-medium">Subtotal Neto:</span>
							<span className="font-bold text-slate-800">
								{formatValue(subtotalDisplay)}
							</span>
						</div>
						<div className="flex justify-between text-xs">
							<span className="text-slate-500 font-medium">IVA (10.5%):</span>
							<span className={`font-bold text-slate-800 ${!showIva ? "line-through text-slate-400" : ""}`}>
								{formatValue(ivaDisplay)}
							</span>
						</div>
						<div className="flex justify-between items-center text-sm border-t border-dashed border-slate-200 pt-3">
							<span className="text-slate-800 font-extrabold">Total Estimado:</span>
							<span className="font-black text-primary-blue text-base">
								{formatValue(totalDisplay)}
							</span>
						</div>
						{currency === "ARS" && (
							<div className="text-[10px] bg-slate-50 p-2.5 rounded-xl text-slate-500 font-semibold text-center border border-slate-100 mt-2">
								Tipo de cambio de referencia: 1 USD = {formatValue(bnaExchangeRate)} ARS (Dólar BNA Vendedor)
							</div>
						)}
					</div>
				</div>
				
				<div className="text-center mt-12 text-[10px] text-slate-400">
					<p>Alloatti SRL • www.alloatti.com • Buenos Aires, Argentina</p>
				</div>
			</div>
		</>
	);
}
