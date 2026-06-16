import { Base } from "../components/Base";
import { useEffect, useState } from "react";
import { SEO } from "../components/SEO";
import { PremiumFooter } from "../components/PremiumFooter";
import { FaWhatsapp, FaCalculator, FaCheckCircle, FaCalendarAlt, FaFileInvoiceDollar } from "react-icons/fa";
import { useTheme } from "../context/ThemeContext";

const QUALIFIED_MACHINES = [
	{ id: "at-120", name: "Línea AT-120 Automática (Retornables)", price: 49500, capacity: "120 bidones/hora" },
	{ id: "at-180", name: "Línea AT-180 Automática (Retornables)", price: 54300, capacity: "180 bidones/hora" },
	{ id: "at-240", name: "Línea AT-240 Automática (Retornables)", price: 59100, capacity: "240 bidones/hora" },
	{ id: "at-360", name: "Línea AT-360 Automática (Retornables)", price: 75000, capacity: "360 bidones/hora" },
	{ id: "at-480", name: "Línea AT-480 Automática (Retornables)", price: 89100, capacity: "480 bidones/hora" },
	{ id: "at-600", name: "Línea AT-600 Automática (Retornables)", price: 116800, capacity: "600 bidones/hora" },
	{ id: "at-720", name: "Línea AT-720 Automática (Retornables)", price: 127800, capacity: "720 bidones/hora" },
	{ id: "at-840", name: "Línea AT-840 Automática (Retornables)", price: 142200, capacity: "840 bidones/hora" },
	{ id: "at-960", name: "Línea AT-960 Automática (Retornables)", price: 159200, capacity: "960 bidones/hora" },
	{ id: "at-600d", name: "Línea AT-600D Automática (Descartables)", price: 68900, capacity: "500 bidones/hora" },
	{ id: "pl-mix4", name: "Prelavadora Mixta 4 Vías (Accesorios)", price: 55200, capacity: "Alta gama" },
	{ id: "pl-mix", name: "Prelavadora Mixta Ext/Int (Accesorios)", price: 43100, capacity: "Estándar" },
	{ id: "pl-int", name: "Prelavadora Automática de Interior (Accesorios)", price: 27800, capacity: "Interior" }
];

const getMachineBadge = (machine) => {
	if (machine.id.includes("at-")) {
		if (machine.id.includes("d")) {
			return { label: "Descartables", color: "text-amber-600 bg-amber-50 dark:text-amber-400 dark:bg-amber-950/20" };
		}
		return { label: "Retornables", color: "text-blue-600 bg-blue-50 dark:text-blue-400 dark:bg-blue-900/20" };
	}
	return { label: "Prelavadoras", color: "text-violet-600 bg-violet-50 dark:text-violet-400 dark:bg-violet-950/20" };
};

export function MaquinasPromociones() {
	const { isDarkTheme } = useTheme();

	// Calculator states
	const [selectedMachineId, setSelectedMachineId] = useState("");
	const [customPrice, setCustomPrice] = useState("");
	const [isCustomMode, setIsCustomMode] = useState(false);
	const [isDropdownOpen, setIsDropdownOpen] = useState(false);
	const [showIva, setShowIva] = useState(false);

	const selectedMachine = QUALIFIED_MACHINES.find(m => m.id === selectedMachineId);

	// Calculated values
	const [listPrice, setListPrice] = useState(0);
	const [discountValue, setDiscountValue] = useState(0);
	const [promoPrice, setPromoPrice] = useState(0);
	const [monthlyInstallment, setMonthlyInstallment] = useState(0);
	const [validationError, setValidationError] = useState("");

	useEffect(() => {
		let price = 0;
		if (isCustomMode) {
			price = parseFloat(customPrice) || 0;
			if (price > 0 && price < 20000) {
				setValidationError("El plan aplica únicamente a equipos o presupuestos superiores a U$S 20.000.");
			} else {
				setValidationError("");
			}
		} else {
			const machine = QUALIFIED_MACHINES.find(m => m.id === selectedMachineId);
			price = machine ? machine.price : 0;
			setValidationError("");
		}

		setListPrice(price);
		const discount = price * 0.05;
		const finalVal = price - discount;
		setDiscountValue(discount);
		setPromoPrice(finalVal);
		setMonthlyInstallment(price > 0 ? finalVal / 24 : 0);
	}, [selectedMachineId, customPrice, isCustomMode]);

	// Display values incorporating IVA if toggled
	const displayedListPrice = showIva ? listPrice * 1.105 : listPrice;
	const displayedDiscountValue = showIva ? discountValue * 1.105 : discountValue;
	const displayedPromoPrice = showIva ? promoPrice * 1.105 : promoPrice;
	const displayedMonthlyInstallment = showIva ? monthlyInstallment * 1.105 : monthlyInstallment;

	const formatUSD = (val) => {
		return new Intl.NumberFormat("en-US", {
			style: "currency",
			currency: "USD",
			minimumFractionDigits: 0,
			maximumFractionDigits: 2
		}).format(val);
	};

	const handleWhatsAppContact = () => {
		let message = "";
		if (isCustomMode) {
			message = `Hola Alloatti, estoy interesado en el Plan 24 para un equipamiento personalizado con un presupuesto estimado de ${formatUSD(displayedListPrice)}${showIva ? " (IVA incluido 10.5%)" : " (Neto sin IVA)"}. Quisiera consultar los detalles técnicos y de financiación.`;
		} else {
			const machine = QUALIFIED_MACHINES.find(m => m.id === selectedMachineId);
			message = `Hola Alloatti, me interesa el Plan 24 de financiación para la ${machine.name} (Precio de lista: ${formatUSD(displayedListPrice)}${showIva ? " IVA incluido 10.5%" : " Neto sin IVA"}). Quisiera recibir asesoramiento sobre este equipo y cómo ingresar al plan de cuotas.`;
		}

		const url = `https://wa.me/5493415033878?text=${encodeURIComponent(message)}`;
		window.open(url, "_blank");
	};

	return (
		<>
			<SEO 
				title="Plan Ahora 24 | Financiación Exclusiva de Maquinaria" 
				description="Financiación directa de fábrica: 24 cuotas fijas en dólares con 5% de descuento sobre precio de lista para envasadoras y equipos de agua Alloatti."
				url="/maquinas/promociones"
			/>
			<Base />
			
			<div className="w-full min-h-screen transition-colors duration-500 bg-slate-50 dark:bg-zinc-950/20 absolute top-0 lg:pl-[280px] xl:pl-[300px] px-4 md:px-8 pb-32">
				<div className="w-full max-w-5xl mx-auto my-12 md:px-6">
					
					{/* Flyer Hero Banner Container */}
					<div className={`relative rounded-3xl p-8 md:p-16 border overflow-hidden shadow-2xl transition-all duration-500 mb-12 flex flex-col items-center justify-center text-center ${
						isDarkTheme 
							? "border-[#2a2a2a] bg-zinc-900/60" 
							: "border-slate-200 bg-white"
					}`}>
						{/* Background aesthetics */}
						<div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-blue-500/5 blur-3xl pointer-events-none"></div>
						<div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-blue-600/5 blur-3xl pointer-events-none"></div>

						<div className="relative z-10 max-w-2xl mx-auto space-y-6">
							<div className="inline-block bg-[#024ad8] text-white text-xs md:text-sm font-black tracking-[0.25em] px-6 py-2.5 rounded-md uppercase">
								AHORA 24
							</div>

							<h1 className="text-4xl md:text-6xl font-black tracking-tight text-slate-800 dark:text-white uppercase leading-none">
								24 Cuotas <br/>
								<span className="text-[#024ad8]">Fijas</span>
							</h1>

							<p className="text-sm md:text-base font-extrabold uppercase tracking-widest text-slate-500 dark:text-slate-400">
								En cualquier equipo superior a <span className="text-slate-800 dark:text-white underline decoration-2 decoration-[#024ad8]">U$S 20.000</span>
							</p>

							<div className="inline-flex items-center justify-center border-2 border-[#024ad8] rounded-xl px-6 py-4 bg-[#024ad8]/5">
								<span className="text-sm md:text-base font-black uppercase tracking-wider text-[#024ad8] dark:text-blue-400">
									💥 Con 5% de Descuento sobre Valor de Lista 💥
								</span>
							</div>

							<div className="pt-2">
								<span className="text-[10px] font-bold tracking-widest uppercase text-slate-400">ALLOATTI SRL • LÍDER EN INNOVACIÓN</span>
							</div>
						</div>
					</div>

					{/* Campaign highlights grid */}
					<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
						
						{/* Direct Financing */}
						<div className={`p-6 rounded-2xl border transition-all duration-500 ${
							isDarkTheme ? "bg-zinc-900/40 border-zinc-800" : "bg-white border-slate-100 shadow-sm"
						}`}>
							<div className="w-12 h-12 rounded-xl bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-[#024ad8] dark:text-blue-400 text-xl mb-4">
								<FaFileInvoiceDollar />
							</div>
							<h3 className={`text-base font-extrabold mb-2 ${isDarkTheme ? "text-white" : "text-slate-800"}`}>
								Financiación en Cuotas Fijas
							</h3>
							<p className={`text-xs leading-relaxed font-semibold ${isDarkTheme ? "text-slate-450" : "text-slate-500"}`}>
								Aboná tu equipo en 24 cuotas fijas directas en dólares (Valor total ÷ 24). Sin intermediarios financieros ni tasas bancarias complejas.
							</p>
						</div>

						{/* Discount */}
						<div className={`p-6 rounded-2xl border transition-all duration-500 ${
							isDarkTheme ? "bg-zinc-900/40 border-zinc-800" : "bg-white border-slate-100 shadow-sm"
						}`}>
							<div className="w-12 h-12 rounded-xl bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center text-emerald-600 dark:text-emerald-400 text-xl mb-4">
								<span>🏷️</span>
							</div>
							<h3 className={`text-base font-extrabold mb-2 ${isDarkTheme ? "text-white" : "text-slate-800"}`}>
								5% de Descuento Especial
							</h3>
							<p className={`text-xs leading-relaxed font-semibold ${isDarkTheme ? "text-slate-450" : "text-slate-500"}`}>
								Obtené una bonificación directa del 5% sobre el valor oficial de lista de la maquinaria como beneficio por suscripción a la promoción.
							</p>
						</div>

						{/* Equipment Condition */}
						<div className={`p-6 rounded-2xl border transition-all duration-500 ${
							isDarkTheme ? "bg-zinc-900/40 border-zinc-800" : "bg-white border-slate-100 shadow-sm"
						}`}>
							<div className="w-12 h-12 rounded-xl bg-violet-100 dark:bg-violet-900/30 flex items-center justify-center text-violet-600 dark:text-violet-400 text-xl mb-4">
								<span>⚙️</span>
							</div>
							<h3 className={`text-base font-extrabold mb-2 ${isDarkTheme ? "text-white" : "text-slate-800"}`}>
								Equipos Nuevos y Usados
							</h3>
							<p className={`text-xs leading-relaxed font-semibold ${isDarkTheme ? "text-slate-450" : "text-slate-500"}`}>
								Aplicable a maquinarias nuevas y usadas seleccionadas. Las unidades usadas son entregadas reacondicionadas a nuevo, totalmente revisadas y probadas.
							</p>
						</div>

					</div>

					{/* Campaign Terms and Interactive Calculator Section */}
					<div className="grid grid-cols-1 xl:grid-cols-12 gap-8 items-start mb-16">
						
						{/* Campaign specifications */}
						<div className="lg:col-span-7 space-y-6">
							<div>
								<span className="text-[#024ad8] dark:text-blue-400 text-[10px] font-black uppercase tracking-[0.2em] px-4 py-1.5 rounded-full bg-blue-100 dark:bg-blue-900/20 inline-block mb-3">
									Condiciones Generales
								</span>
								<h2 className={`text-2xl md:text-3xl font-bold tracking-tight mb-4 ${isDarkTheme ? "text-white" : "text-slate-800"}`}>
									Súmate al Plan 24 de Alloatti
								</h2>
								<p className={`text-sm leading-relaxed font-semibold ${isDarkTheme ? "text-slate-400" : "text-slate-500"}`}>
									Diseñamos esta propuesta comercial exclusiva para permitir la expansión tecnológica de plantas embotelladoras de agua sin descapitalización inmediata.
								</p>
							</div>

							<ul className="space-y-4">
								{[
									{ title: "Plazos de Entrega Planificados", desc: "Entrega oficial de los equipos programada a partir de abril de 2027 (entrega en fábrica).", icon: <FaCalendarAlt /> },
									{ title: "Garantía Oficial de Fábrica", desc: "6 meses de garantía completa en equipos nuevos y 3 meses en equipos usados (sobre lo reparado).", icon: <FaCheckCircle /> },
									{ title: "Esquema Tributario Claro", desc: "Facturación oficial sujeta al tipo impositivo de IVA del 10,5%.", icon: <FaCheckCircle /> }
								].map((item, idx) => (
									<li key={idx} className="flex gap-4 items-start">
										<div className="flex-shrink-0 w-8 h-8 rounded-lg bg-blue-50 dark:bg-blue-900/10 flex items-center justify-center text-[#024ad8] dark:text-blue-400 text-sm mt-1">
											{item.icon}
										</div>
										<div>
											<h4 className={`text-sm font-extrabold ${isDarkTheme ? "text-white" : "text-slate-800"}`}>{item.title}</h4>
											<p className={`text-xs font-semibold mt-1 leading-relaxed ${isDarkTheme ? "text-slate-450" : "text-slate-550"}`}>{item.desc}</p>
										</div>
									</li>
								))}
							</ul>
						</div>

						{/* Installment Calculator */}
						<div className="lg:col-span-5">
							<div className={`p-6 md:p-8 rounded-3xl border shadow-xl flex flex-col space-y-6 ${
								isDarkTheme ? "bg-zinc-900 border-zinc-800" : "bg-white border-slate-200"
							}`}>
								<div className="flex items-center gap-2 pb-4 border-b border-slate-100 dark:border-zinc-850">
									<FaCalculator className="text-[#024ad8] text-lg" />
									<h3 className={`text-base font-black uppercase tracking-wider ${isDarkTheme ? "text-white" : "text-slate-800"}`}>
										Simulador del Plan
									</h3>
								</div>

								{/* Select / Input Mode Toggle */}
								<div className="flex bg-slate-100 dark:bg-zinc-800 p-1 rounded-xl">
									<button 
										onClick={() => setIsCustomMode(false)}
										className={`flex-1 py-2 text-xs font-bold rounded-lg transition-all ${!isCustomMode ? "bg-white dark:bg-zinc-700 text-[#024ad8] dark:text-white shadow-sm" : "text-slate-500"}`}>
										Elegir Máquina
									</button>
									<button 
										onClick={() => setIsCustomMode(true)}
										className={`flex-1 py-2 text-xs font-bold rounded-lg transition-all ${isCustomMode ? "bg-white dark:bg-zinc-700 text-[#024ad8] dark:text-white shadow-sm" : "text-slate-500"}`}>
										Otro Presupuesto
									</button>
								</div>

								{isCustomMode ? (
									// Custom Input
									<div className="space-y-2">
										<label className="block text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">Valor de Lista (USD)</label>
										<div className="relative">
											<span className="absolute inset-y-0 left-0 pl-3.5 flex items-center text-slate-400 font-bold">U$S</span>
											<input 
												type="number" 
												value={customPrice} 
												onChange={(e) => setCustomPrice(e.target.value)}
												className={`w-full border rounded-xl py-3 pl-12 pr-4 text-sm font-semibold focus:outline-none focus:border-[#024ad8] bg-transparent ${
													isDarkTheme ? "border-zinc-700 text-white" : "border-slate-300 text-slate-800"
												}`}
												placeholder="Ej: 35000"
											/>
										</div>
										{validationError && (
											<p className="text-[10px] font-bold text-red-500 mt-1">{validationError}</p>
										)}
									</div>
								) : (
									// Machine Selector
									<div className="space-y-2 relative">
										<label className="block text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
											Seleccionar Modelo Calificado
										</label>
										
										{/* Custom Select Trigger */}
										<button
											type="button"
											onClick={() => setIsDropdownOpen(!isDropdownOpen)}
											className={`w-full border rounded-xl py-3 px-4 text-xs font-semibold focus:outline-none focus:border-[#024ad8] flex items-center justify-between transition-all duration-300 relative z-40 ${
												isDarkTheme 
													? "border-zinc-700 text-white bg-zinc-900/80 hover:bg-zinc-800/80" 
													: "border-slate-300 text-slate-800 bg-white hover:bg-slate-50"
											}`}
										>
											<div className="flex flex-col items-start text-left">
												{selectedMachine ? (
													<>
														<span className="font-extrabold">{selectedMachine.name}</span>
														<span className="text-[10px] text-slate-400 dark:text-slate-500 font-bold mt-0.5">
															Capacidad: {selectedMachine.capacity} • Lista: {formatUSD(showIva ? selectedMachine.price * 1.105 : selectedMachine.price)}
														</span>
													</>
												) : (
													<>
														<span className="font-extrabold text-slate-400 dark:text-slate-500">Seleccionar máquina...</span>
														<span className="text-[10px] text-slate-400 dark:text-slate-500 font-bold mt-0.5">
															Desplegar menú para ver opciones
														</span>
													</>
												)}
											</div>
											<svg
												className={`w-4 h-4 text-slate-400 transition-transform duration-300 ${isDropdownOpen ? "rotate-180" : ""}`}
												fill="none"
												viewBox="0 0 24 24"
												stroke="currentColor"
												strokeWidth="2.5"
											>
												<path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
											</svg>
										</button>

										{/* Click outside overlay */}
										{isDropdownOpen && (
											<div 
												className="fixed inset-0 z-30" 
												onClick={() => setIsDropdownOpen(false)}
											/>
										)}

										{/* Custom Dropdown Menu */}
										{isDropdownOpen && (
											<div className={`absolute top-full left-0 right-0 mt-2 rounded-2xl border shadow-2xl z-40 max-h-72 overflow-y-auto scrollbar-thin transition-all duration-300 animate-hp-fade ${
												isDarkTheme 
													? "bg-zinc-900 border-zinc-800 text-white" 
													: "bg-white border-slate-150 text-slate-700"
											}`}>
												<div className="p-1.5 space-y-1">
													{QUALIFIED_MACHINES.map((m) => {
														const isSelected = m.id === selectedMachineId;
														const badge = getMachineBadge(m);
														return (
															<button
																key={m.id}
																type="button"
																onClick={() => {
																	setSelectedMachineId(m.id);
																	setIsDropdownOpen(false);
																}}
																className={`w-full text-left rounded-xl px-4 py-3 flex items-center justify-between text-xs transition-colors ${
																	isSelected
																		? "bg-[#024ad8] text-white"
																		: isDarkTheme
																			? "hover:bg-zinc-800/80 text-zinc-350"
																			: "hover:bg-slate-50 text-slate-700"
																}`}
															>
																<div className="flex flex-col items-start gap-1">
																	<div className="flex items-center gap-2">
																		<span className="font-extrabold">{m.name}</span>
																		<span className={`text-[9px] font-bold px-2 py-0.5 rounded-full ${
																			isSelected 
																				? "bg-white/20 text-white" 
																				: badge.color
																		}`}>
																			{badge.label}
																		</span>
																	</div>
																	<span className={`text-[10px] ${isSelected ? "text-blue-100" : "text-slate-400 dark:text-slate-500"}`}>
																		Rendimiento: {m.capacity}
																	</span>
																</div>
																<span className={`font-black text-xs ${isSelected ? "text-white" : "text-[#024ad8] dark:text-blue-400"}`}>
																	{formatUSD(showIva ? m.price * 1.105 : m.price)}
																</span>
															</button>
														);
													})}
												</div>
											</div>
										)}
									</div>
								)}

								{/* IVA Switch */}
								<div className="flex flex-col">
									<label className="block text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-2">Impuestos (IVA 10.5%)</label>
									<button 
										onClick={() => setShowIva(!showIva)}
										className={`w-full py-2.5 px-4 text-xs font-bold rounded-xl border transition-all flex items-center justify-between ${showIva ? "bg-emerald-50 dark:bg-emerald-950/20 border-emerald-300 dark:border-emerald-800 text-emerald-700 dark:text-emerald-400" : "bg-slate-50 dark:bg-zinc-800 border-slate-200 dark:border-zinc-700 text-slate-600 dark:text-slate-400 hover:bg-slate-100"}`}>
										<span>{showIva ? "IVA Incluido (+10.5%)" : "Neto (Sin IVA)"}</span>
										<div className={`w-8 h-4 rounded-full p-0.5 transition-colors ${showIva ? "bg-emerald-500" : "bg-slate-300 dark:bg-zinc-600"}`}>
											<div className={`w-3 h-3 rounded-full bg-white transition-transform transform ${showIva ? "translate-x-4" : "translate-x-0"}`}></div>
										</div>
									</button>
								</div>

								{/* Calculated Breakdown Card */}
								{listPrice >= 20000 && !validationError ? (
									<div className={`p-5 rounded-2xl space-y-4 border ${
										isDarkTheme ? "bg-white/[0.02] border-zinc-800" : "bg-slate-50 border-slate-100"
									}`}>
										<div className="flex justify-between text-xs font-semibold">
											<span className="text-slate-500 dark:text-slate-400">Precio de Lista:</span>
											<span className="text-slate-800 dark:text-slate-200">{formatUSD(displayedListPrice)}</span>
										</div>

										<div className="flex justify-between text-xs font-semibold text-emerald-600 dark:text-emerald-400">
											<span>Descuento Promocional (5%):</span>
											<span>- {formatUSD(displayedDiscountValue)}</span>
										</div>

										<div className="flex justify-between text-xs font-semibold text-slate-500 dark:text-slate-400">
											<span>IVA (10.5%):</span>
											<span>{showIva ? `+ ${formatUSD(promoPrice * 0.105)}` : "No incluido"}</span>
										</div>

										<div className="flex justify-between text-xs font-bold border-t border-dashed border-slate-200 dark:border-zinc-800 pt-3">
											<span className="text-slate-600 dark:text-slate-350">Precio Final Promocional:</span>
											<span className="text-slate-800 dark:text-slate-200">{formatUSD(displayedPromoPrice)}</span>
										</div>

										<div className="flex flex-col items-center justify-center text-center pt-2">
											<span className="text-[10px] font-black uppercase tracking-widest text-[#024ad8] dark:text-blue-400">
												Financiación Directa
											</span>
											<span className="text-3xl font-black text-[#024ad8] dark:text-blue-400 mt-1">
												24x {formatUSD(displayedMonthlyInstallment)}
											</span>
											<span className="text-[10px] text-slate-400 dark:text-slate-500 font-bold mt-1">
												Cuotas fijas en dólares sin interés
											</span>
										</div>
									</div>
								) : (
									<div className={`p-8 rounded-2xl border text-center border-dashed ${
										isDarkTheme ? "border-zinc-800 bg-white/[0.01]" : "border-slate-200 bg-slate-50"
									}`}>
										<span className="text-xs text-slate-400 dark:text-slate-500 font-bold">
											{validationError ? "Monto no válido para la promoción" : "Seleccione una máquina o ingrese un monto para simular la financiación"}
										</span>
									</div>
								)}

								{/* Submit / WhatsApp share */}
								<button 
									onClick={handleWhatsAppContact}
									disabled={listPrice < 20000 || !!validationError}
									className={`w-full py-4 text-xs font-extrabold uppercase tracking-widest rounded-xl transition-all flex items-center justify-center gap-2 ${
										listPrice < 20000 || !!validationError
											? "bg-slate-200 dark:bg-zinc-800 text-slate-400 cursor-not-allowed"
											: "bg-[#25D366] hover:bg-[#1ebd59] text-white shadow-lg shadow-emerald-500/10 hover:shadow-emerald-500/25 hover:-translate-y-0.5"
									}`}
								>
									<FaWhatsapp className="text-lg" />
									Consultar por WhatsApp
								</button>
							</div>
						</div>

					</div>

					<PremiumFooter />
				</div>
			</div>
		</>
	);
}
