import { useState, useEffect, useCallback } from "react";
import PropTypes from "prop-types";
import { OpenEmail } from "./OpenEmail";
import {
	BsSpeedometer2,
	BsClock,
	BsShieldCheck,
	BsArrowsAngleExpand,
	BsPlusCircle,
	BsWhatsapp,
	BsLightningCharge,
	BsWind,
	BsCpu,
	BsGearWideConnected,
	BsDropletHalf,
	BsFileEarmarkText,
	BsArrowRight,
	BsCheck2,
} from "react-icons/bs";
import { IoClose } from "react-icons/io5";
import { getMemoriaTecnica } from "../machines_info/memoriasTecnicas";

export function CardMachines({
	model,
	img,
	onClose,
	production_max,
	washing_time,
	size,
	accesories,
	build,
	description,
}) {
	const [isShow, setIsShow] = useState(true);
	const [activeTab, setActiveTab] = useState("general"); // "general" | "memoria"

	const handleClose = useCallback(() => {
		setIsShow(false);
		onClose();
	}, [onClose]);

	useEffect(() => {
		// Prevent scrolling when modal is open
		document.body.style.overflow = "hidden";

		const handleKeyDown = (e) => {
			if (e.key === "Escape") {
				handleClose();
			}
		};

		window.addEventListener("keydown", handleKeyDown);

		return () => {
			document.body.style.overflow = "auto";
			window.removeEventListener("keydown", handleKeyDown);
		};
	}, [handleClose]);

	if (!isShow) return null;

	const memoria = getMemoriaTecnica(model);

	const wsNumber = "5491168641122";
	const wsMessage = `¡Hola! Vengo desde el catálogo web de Alloatti y deseo asesoramiento técnico y presupuesto para el modelo de máquina: ${model}${activeTab === "memoria" ? " (consultando memoria técnica detallada)" : ""}.`;
	const wsUrl = `https://wa.me/${wsNumber}?text=${encodeURIComponent(wsMessage)}`;

	return (
		<div
			className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/75 backdrop-blur-md animate-hp-fade"
			role="dialog"
			aria-modal="true"
			aria-labelledby="modal-title">
			
			<div className="relative w-full h-[94vh] bg-white dark:bg-slate-900 rounded-3xl shadow-2xl overflow-hidden flex flex-col border border-slate-100 dark:border-slate-800/80">
				
				{/* Close Button */}
				<button
					className="absolute top-3.5 right-3.5 z-20 p-2 bg-white/95 dark:bg-slate-800/95 text-slate-800 dark:text-slate-200 hover:text-red-600 dark:hover:text-red-400 hover:bg-red-50 dark:hover:bg-red-950/30 backdrop-blur-sm rounded-full shadow-lg hover:scale-110 active:scale-95 transition-all"
					onClick={handleClose}
					aria-label="Cerrar ventana">
					<IoClose className="w-5 h-5" />
				</button>

				<div className="flex flex-col lg:flex-row-reverse h-full overflow-hidden">
					
					{/* Left Column: Image Section */}
					<div className="lg:w-1/2 h-52 sm:h-64 lg:h-auto relative overflow-hidden min-h-[220px] lg:min-h-[420px] shrink-0 bg-slate-950 flex flex-col justify-end">
						<img
							className="w-full h-full object-cover absolute inset-0 opacity-90 transition-transform duration-700 hover:scale-105"
							src={img}
							alt={model}
						/>
						<div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent"></div>
						
						{/* Badges on image */}
						<div className="relative z-10 p-5 text-white">
							<div className="flex flex-wrap items-center gap-1.5 mb-2">
								<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[9px] font-extrabold tracking-widest uppercase bg-blue-600 text-white shadow-md">
									Línea Premium Industrial
								</span>
								<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[9px] font-bold tracking-wide uppercase bg-slate-800/80 backdrop-blur-sm text-blue-300 border border-blue-500/30">
									AISI 304
								</span>
							</div>
							<p className="text-[11px] text-slate-200 font-semibold tracking-wide leading-relaxed drop-shadow-sm hidden sm:block">
								Fabricación directa bajo estrictas normativas nacionales e internacionales de higiene y durabilidad.
							</p>

							{/* Quick Tech Highlights for Desktop */}
							<div className="hidden lg:grid grid-cols-2 gap-2 mt-4 pt-3 border-t border-white/10 text-[10px]">
								<div className="bg-white/10 backdrop-blur-md rounded-xl p-2.5 border border-white/10">
									<span className="text-blue-300 font-bold block text-[9px] uppercase">Control Industrial</span>
									<span className="font-semibold text-slate-100">{memoria?.suministros?.control ? "PLC + Pantalla Táctil" : "Automatizado"}</span>
								</div>
								<div className="bg-white/10 backdrop-blur-md rounded-xl p-2.5 border border-white/10">
									<span className="text-blue-300 font-bold block text-[9px] uppercase">Potencia Requerida</span>
									<span className="font-semibold text-slate-100">{memoria?.suministros?.potencia || "Industrial"}</span>
								</div>
							</div>
						</div>
					</div>

					{/* Right Column: Interactive Content Section */}
					<div className="lg:w-1/2 p-5 sm:p-7 flex flex-col justify-between overflow-y-auto">
						<div>
							{/* Header */}
							<header className="mb-4 pr-10">
								<div className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[9px] font-bold tracking-wider uppercase bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400 mb-1.5">
									Catálogo Oficial Alloatti
								</div>
								<div className="flex items-baseline gap-3">
									<h3 id="modal-title" className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white">
										{model}
									</h3>
									<span className="text-xs font-semibold text-slate-500 dark:text-slate-400">
										{production_max || memoria?.capacidad || ""}
									</span>
								</div>
							</header>

							{/* Navigation Tabs */}
							<div className="flex items-center gap-1.5 p-1 bg-slate-100 dark:bg-slate-800/80 rounded-2xl mb-5 border border-slate-200/60 dark:border-slate-700/60">
								<button
									type="button"
									onClick={() => setActiveTab("general")}
									className={`flex-1 flex items-center justify-center gap-2 py-2 px-3 rounded-xl text-xs font-bold transition-all ${
										activeTab === "general"
											? "bg-white dark:bg-slate-900 text-blue-600 dark:text-blue-400 shadow-sm"
											: "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
									}`}>
									<BsFileEarmarkText className="text-sm shrink-0" />
									<span>Ficha General</span>
								</button>
								<button
									type="button"
									onClick={() => setActiveTab("memoria")}
									className={`flex-1 flex items-center justify-center gap-2 py-2 px-3 rounded-xl text-xs font-bold transition-all relative ${
										activeTab === "memoria"
											? "bg-white dark:bg-slate-900 text-blue-600 dark:text-blue-400 shadow-sm"
											: "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
									}`}>
									<BsGearWideConnected className="text-sm shrink-0" />
									<span>Memoria Técnica</span>
									<span className={`text-[9px] px-1.5 py-0.2 rounded-full font-extrabold uppercase tracking-wider text-white ${
										memoria ? "bg-blue-600" : "bg-amber-600"
									}`}>
										{memoria ? "Detallada" : "Próximamente"}
									</span>
								</button>
							</div>

							{/* TAB 1: FICHA GENERAL (INFORMACIÓN ORIGINAL INTACTA) */}
							{activeTab === "general" && (
								<div className="animate-hp-fade">
									{/* Specs Grid */}
									<div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-5">
										<div className="flex items-center gap-3 p-3 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-100 dark:border-slate-800/60">
											<div className="p-2.5 rounded-xl bg-blue-50 dark:bg-blue-950/50 text-blue-600 dark:text-blue-400 text-lg shrink-0">
												<BsSpeedometer2 />
											</div>
											<div>
												<h5 className="text-[9px] font-extrabold uppercase tracking-wider text-slate-400 dark:text-slate-500">Producción Máxima</h5>
												<p className="text-xs font-bold text-slate-800 dark:text-slate-200 leading-tight">{production_max || "N/D"}</p>
											</div>
										</div>

										<div className="flex items-center gap-3 p-3 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-100 dark:border-slate-800/60">
											<div className="p-2.5 rounded-xl bg-blue-50 dark:bg-blue-950/50 text-blue-600 dark:text-blue-400 text-lg shrink-0">
												<BsClock />
											</div>
											<div>
												<h5 className="text-[9px] font-extrabold uppercase tracking-wider text-slate-400 dark:text-slate-500">Tiempo de Lavado</h5>
												<p className="text-xs font-bold text-slate-800 dark:text-slate-200 leading-tight">{washing_time || "N/D"}</p>
											</div>
										</div>

										<div className="flex items-center gap-3 p-3 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-100 dark:border-slate-800/60">
											<div className="p-2.5 rounded-xl bg-blue-50 dark:bg-blue-950/50 text-blue-600 dark:text-blue-400 text-lg shrink-0">
												<BsShieldCheck />
											</div>
											<div>
												<h5 className="text-[9px] font-extrabold uppercase tracking-wider text-slate-400 dark:text-slate-500">Construcción</h5>
												<p className="text-xs font-bold text-slate-800 dark:text-slate-200 leading-tight">{build || "Acero Inoxidable"}</p>
											</div>
										</div>

										<div className="flex items-center gap-3 p-3 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-100 dark:border-slate-800/60">
											<div className="p-2.5 rounded-xl bg-blue-50 dark:bg-blue-950/50 text-blue-600 dark:text-blue-400 text-lg shrink-0">
												<BsArrowsAngleExpand />
											</div>
											<div>
												<h5 className="text-[9px] font-extrabold uppercase tracking-wider text-slate-400 dark:text-slate-500">Dimensiones</h5>
												<p className="text-xs font-bold text-slate-800 dark:text-slate-200 leading-tight">{size || "A convenir"}</p>
											</div>
										</div>

										{accesories && (
											<div className="col-span-1 sm:col-span-2 flex items-center gap-3 p-3 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-100 dark:border-slate-800/60">
												<div className="p-2.5 rounded-xl bg-blue-50 dark:bg-blue-950/50 text-blue-600 dark:text-blue-400 text-lg shrink-0">
													<BsPlusCircle />
												</div>
												<div>
													<h5 className="text-[9px] font-extrabold uppercase tracking-wider text-slate-400 dark:text-slate-500">Accesorios Incluidos / Opcionales</h5>
													<p className="text-xs font-semibold text-slate-700 dark:text-slate-300 leading-normal">{accesories}</p>
												</div>
											</div>
										)}
									</div>

									{/* Switch Tab Banner */}
									<button
										type="button"
										onClick={() => setActiveTab("memoria")}
										className="w-full mb-5 p-3 rounded-2xl bg-gradient-to-r from-blue-50/80 to-indigo-50/60 dark:from-blue-950/30 dark:to-slate-800/60 border border-blue-200/60 dark:border-blue-900/40 flex items-center justify-between text-left group hover:border-blue-400 dark:hover:border-blue-500 transition-all shadow-sm">
										<div className="flex items-center gap-3">
											<div className="p-2 rounded-xl bg-blue-600 text-white text-base shadow-md group-hover:scale-110 transition-transform">
												<BsGearWideConnected />
											</div>
											<div>
												<p className="text-xs font-bold text-slate-900 dark:text-white">Ver Memoria Técnica de Ingeniería</p>
												<p className="text-[10px] text-slate-500 dark:text-slate-400">Detalles de bombas, etapas de lavado, PLC, presiones y moto-reductores</p>
											</div>
										</div>
										<BsArrowRight className="text-blue-600 dark:text-blue-400 text-sm group-hover:translate-x-1 transition-transform mr-1" />
									</button>

									{/* Description */}
									<div className="mb-5">
										<h4 className="text-[10px] font-extrabold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-2">
											Descripción Técnica
										</h4>
										<p className="text-xs leading-relaxed text-slate-600 dark:text-slate-400 font-medium">
											{description}
										</p>
									</div>

									{/* Value proposition box */}
									<div className="mb-5 p-4 rounded-2xl bg-gradient-to-br from-blue-50/50 to-indigo-50/30 dark:from-slate-800/30 dark:to-indigo-950/10 border border-blue-100/60 dark:border-slate-800/50 shadow-sm">
										<h4 className="text-[10px] font-extrabold text-[#024ad8] dark:text-blue-400 uppercase tracking-wider mb-2.5 flex items-center gap-2">
											<span className="w-1.5 h-1.5 rounded-full bg-[#024ad8] dark:bg-blue-400 animate-pulse"></span>
											Compromiso de Calidad Alloatti
										</h4>
										<ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[10px] text-slate-600 dark:text-slate-400 font-medium">
											<li className="flex items-start gap-1.5">
												<span className="text-emerald-500 font-extrabold shrink-0">✓</span>
												<span><strong>Garantía de Fábrica:</strong> 6 meses de garantía en equipos nuevos.</span>
											</li>
											<li className="flex items-start gap-1.5">
												<span className="text-emerald-500 font-extrabold shrink-0">✓</span>
												<span><strong>Llenado sin contacto:</strong> Evita cualquier riesgo de contaminación.</span>
											</li>
											<li className="flex items-start gap-1.5">
												<span className="text-emerald-500 font-extrabold shrink-0">✓</span>
												<span><strong>Acero:</strong> Estructura y tuberías sanitarias de alta durabilidad.</span>
											</li>
											<li className="flex items-start gap-1.5">
												<span className="text-emerald-500 font-extrabold shrink-0">✓</span>
												<span><strong>Garantía en Usados:</strong> 3 meses de respaldo (sobre lo reparado).</span>
											</li>
										</ul>
									</div>
								</div>
							)}

							{/* TAB 2: MEMORIA TÉCNICA DETALLADA O PRÓXIMAMENTE */}
							{activeTab === "memoria" && (
								memoria ? (
									<div className="space-y-5 animate-hp-fade">
										{/* Suministros y Consumos Grid */}
										<div>
											<h4 className="text-[10px] font-extrabold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-2.5 flex items-center gap-1.5">
												<span>Consumos & Suministros Requeridos</span>
											</h4>
											<div className={`grid grid-cols-2 ${memoria.suministros.consumoAgua ? "sm:grid-cols-3 lg:grid-cols-5" : "sm:grid-cols-4"} gap-2.5`}>
												<div className="p-3 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-100 dark:border-slate-800/60">
													<div className="text-amber-500 text-base mb-1">
														<BsLightningCharge />
													</div>
													<span className="text-[9px] font-extrabold uppercase text-slate-400 dark:text-slate-500 block">Consumo Eléctrico</span>
													<p className="text-xs font-extrabold text-slate-900 dark:text-slate-100">{memoria.suministros.potencia}</p>
												</div>

												<div className="p-3 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-100 dark:border-slate-800/60">
													<div className="text-cyan-500 text-base mb-1">
														<BsWind />
													</div>
													<span className="text-[9px] font-extrabold uppercase text-slate-400 dark:text-slate-500 block">Aire Comprimido</span>
													<p className="text-xs font-extrabold text-slate-900 dark:text-slate-100">{memoria.suministros.aireComprimido}</p>
												</div>

												{memoria.suministros.consumoAgua && (
													<div className="p-3 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-100 dark:border-slate-800/60">
														<div className="text-blue-500 text-base mb-1">
															<BsDropletHalf />
														</div>
														<span className="text-[9px] font-extrabold uppercase text-slate-400 dark:text-slate-500 block">Consumo de Agua</span>
														<p className="text-xs font-extrabold text-slate-900 dark:text-slate-100">{memoria.suministros.consumoAgua}</p>
													</div>
												)}

												<div className="p-3 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-100 dark:border-slate-800/60">
													<div className="text-blue-500 text-base mb-1">
														<BsCpu />
													</div>
													<span className="text-[9px] font-extrabold uppercase text-slate-400 dark:text-slate-500 block">Sistema Control</span>
													<p className="text-xs font-extrabold text-slate-900 dark:text-slate-100">{memoria.suministros.control}</p>
												</div>

												<div className="p-3 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-100 dark:border-slate-800/60">
													<div className="text-emerald-500 text-base mb-1">
														<BsGearWideConnected />
													</div>
													<span className="text-[9px] font-extrabold uppercase text-slate-400 dark:text-slate-500 block">Operación</span>
													<p className="text-xs font-extrabold text-slate-900 dark:text-slate-100">{memoria.suministros.operacion}</p>
												</div>
											</div>
										</div>

										{/* Módulo Lavadora */}
										<div className="p-4 rounded-2xl bg-slate-50/70 dark:bg-slate-800/40 border border-slate-200/70 dark:border-slate-800">
											<div className="flex items-center justify-between mb-3 border-b border-slate-200/60 dark:border-slate-700/60 pb-2">
												<div className="flex items-center gap-2">
													<div className="p-1.5 rounded-lg bg-blue-100 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 text-sm">
														<BsDropletHalf />
													</div>
													<div>
														<h4 className="text-xs font-extrabold text-slate-900 dark:text-white uppercase tracking-wide">
															{memoria.lavadora.nombre}
														</h4>
														<p className="text-[10px] font-medium text-slate-500 dark:text-slate-400">
															Configuración: {memoria.lavadora.configuracion}
														</p>
													</div>
												</div>
												<span className="text-[9px] px-2 py-0.5 rounded-full font-bold bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 border border-blue-200/40">
													AISI 304
												</span>
											</div>

											{/* Etapas de Lavado Stepper */}
											<div className="mb-4">
												<h5 className="text-[10px] font-extrabold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-2">
													Ciclo de Etapas Automatizadas
												</h5>
												<div className="space-y-1.5">
													{memoria.lavadora.etapas.map((etapa, idx) => (
														<div
															key={idx}
															className="flex items-center justify-between gap-2 p-2 rounded-xl bg-white dark:bg-slate-900/60 border border-slate-100 dark:border-slate-800/70">
															<div className="flex items-center gap-2.5 min-w-0">
																<span className="flex items-center justify-center min-w-[28px] h-7 px-1.5 rounded-full bg-blue-50 dark:bg-blue-950 text-blue-600 dark:text-blue-400 text-[10px] font-extrabold shrink-0 border border-blue-200/40 dark:border-blue-800/40 whitespace-nowrap leading-none text-center">
																	{etapa.numero}
																</span>
																<div className="min-w-0">
																	<p className="text-[11px] font-bold text-slate-800 dark:text-slate-200 truncate">
																		{etapa.nombre}
																	</p>
																	<p className="text-[10px] text-slate-500 dark:text-slate-400 leading-tight truncate">
																		{etapa.detalle}
																	</p>
																</div>
															</div>
															<span className="text-[9px] font-bold px-2 py-0.5 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 shrink-0">
																{etapa.tiempo}
															</span>
														</div>
													))}
												</div>
											</div>

											{/* Bombas y Moto-reductores Lavadora */}
											<div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
												<div className="p-3 rounded-xl bg-white dark:bg-slate-900/60 border border-slate-100 dark:border-slate-800/70">
													<h6 className="text-[9px] font-extrabold uppercase text-slate-400 dark:text-slate-500 mb-1.5 flex items-center gap-1">
														<BsDropletHalf className="text-blue-500" /> Bombas Sanitarias
													</h6>
													{memoria.lavadora.bombas.map((b, i) => (
														<div key={i} className="text-[10px] text-slate-700 dark:text-slate-300 py-0.5 flex justify-between border-b border-slate-50 dark:border-slate-800/40 last:border-0">
															<span className="text-slate-500 dark:text-slate-400">{b.etiqueta}:</span>
															<span className="font-bold text-slate-900 dark:text-white">{b.modelo}</span>
														</div>
													))}
												</div>

												<div className="p-3 rounded-xl bg-white dark:bg-slate-900/60 border border-slate-100 dark:border-slate-800/70">
													<h6 className="text-[9px] font-extrabold uppercase text-slate-400 dark:text-slate-500 mb-1.5 flex items-center gap-1">
														<BsGearWideConnected className="text-indigo-500" /> Moto-reductores
													</h6>
													{memoria.lavadora.motoReductores.map((m, i) => (
														<div key={i} className="text-[10px] text-slate-700 dark:text-slate-300 py-0.5 flex justify-between border-b border-slate-50 dark:border-slate-800/40 last:border-0">
															<span className="text-slate-500 dark:text-slate-400">{m.etiqueta}:</span>
															<span className="font-bold text-slate-900 dark:text-white">{m.modelo}</span>
														</div>
													))}
												</div>
											</div>

											{/* Cabina & Visibilidad */}
											<div className="mt-2.5 pt-2.5 border-t border-slate-200/50 dark:border-slate-800 grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-[10px] text-slate-600 dark:text-slate-400">
												{memoria.lavadora.cabinaSeguridad.map((c, i) => (
													<div key={i} className="flex items-start gap-1.5">
														<BsCheck2 className="text-emerald-500 text-xs shrink-0 mt-0.5 font-bold" />
														<span><strong>{c.item}:</strong> {c.desc}</span>
													</div>
												))}
											</div>
										</div>

										{/* Módulo Llenadora y Tapadora */}
										<div className="p-4 rounded-2xl bg-slate-50/70 dark:bg-slate-800/40 border border-slate-200/70 dark:border-slate-800">
											<div className="flex items-center justify-between mb-3 border-b border-slate-200/60 dark:border-slate-700/60 pb-2">
												<div className="flex items-center gap-2">
													<div className="p-1.5 rounded-lg bg-emerald-100 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 text-sm">
														<BsShieldCheck />
													</div>
													<div>
														<h4 className="text-xs font-extrabold text-slate-900 dark:text-white uppercase tracking-wide">
															{memoria.llenadora.nombre}
														</h4>
														<p className="text-[10px] font-medium text-slate-500 dark:text-slate-400">
															Dosificación y Tapado a Presión
														</p>
													</div>
												</div>
												<span className="text-[9px] px-2 py-0.5 rounded-full font-bold bg-emerald-50 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 border border-emerald-200/40">
													AISI 304
												</span>
											</div>

											<div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-2.5">
												<div className="p-3 rounded-xl bg-white dark:bg-slate-900/60 border border-slate-100 dark:border-slate-800/70">
													<h6 className="text-[9px] font-extrabold uppercase text-slate-400 dark:text-slate-500 mb-1.5">
														Picos & Tapado
													</h6>
													<div className="space-y-1 text-[10px]">
														{memoria.llenadora.dosificacionTapado.map((d, i) => (
															<div key={i} className="flex items-start gap-1.5 text-slate-700 dark:text-slate-300">
																<span className="text-emerald-500 font-bold">✓</span>
																<span><strong>{d.item}:</strong> {d.desc}</span>
															</div>
														))}
														<div className="flex items-start gap-1.5 text-slate-700 dark:text-slate-300 pt-1 border-t border-slate-50 dark:border-slate-800">
															<span className="text-emerald-500 font-bold">✓</span>
															<span><strong>Bomba de llenado:</strong> {memoria.llenadora.bomba}</span>
														</div>
													</div>
												</div>

												<div className="p-3 rounded-xl bg-white dark:bg-slate-900/60 border border-slate-100 dark:border-slate-800/70">
													<h6 className="text-[9px] font-extrabold uppercase text-slate-400 dark:text-slate-500 mb-1.5 flex items-center gap-1">
														<BsGearWideConnected className="text-indigo-500" /> Moto-reductores
													</h6>
													{memoria.llenadora.motoReductores.map((m, i) => (
														<div key={i} className="text-[10px] text-slate-700 dark:text-slate-300 py-0.5 flex justify-between border-b border-slate-50 dark:border-slate-800/40 last:border-0">
															<span className="text-slate-500 dark:text-slate-400">{m.etiqueta}:</span>
															<span className="font-bold text-slate-900 dark:text-white">{m.modelo}</span>
														</div>
													))}
													<div className="mt-2 pt-1 border-t border-slate-50 dark:border-slate-800 text-[10px] text-slate-500 dark:text-slate-400">
														Bastidor reforzado en acero sanitario.
													</div>
												</div>
											</div>

											<div className="p-2.5 rounded-xl bg-blue-50/60 dark:bg-blue-950/30 border border-blue-100/60 dark:border-blue-900/40 text-[10px] text-blue-900 dark:text-blue-300 flex items-center gap-2">
												<BsCpu className="text-base text-blue-600 dark:text-blue-400 shrink-0" />
												<span className="font-semibold">{memoria.llenadora.control}</span>
											</div>
										</div>
									</div>
								) : (
									/* Estado Próximamente si la máquina aún no tiene memoria cargada */
									<div className="p-8 sm:p-10 rounded-3xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200/80 dark:border-slate-800 text-center flex flex-col items-center justify-center space-y-4 my-auto animate-hp-fade">
										<div className="p-4 rounded-2xl bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 text-3xl shadow-sm">
											<BsGearWideConnected />
										</div>
										<div>
											<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[9px] font-extrabold tracking-wider uppercase bg-amber-100 dark:bg-amber-950/50 text-amber-700 dark:text-amber-400 mb-2">
												Próximamente disponible
											</span>
											<h4 className="text-base font-bold text-slate-900 dark:text-white">
												Memoria Técnica en Proceso de Carga
											</h4>
											<p className="text-xs text-slate-500 dark:text-slate-400 max-w-md mx-auto mt-1 leading-relaxed">
												Estamos completando la ficha de ingeniería detallada para el modelo <strong>{model}</strong>. Si necesitás la memoria técnica completa, cálculo de consumos o plano dimensional antes de su publicación, solicitala directamente a nuestro departamento técnico.
											</p>
										</div>
										<a
											href={`https://wa.me/5491168641122?text=${encodeURIComponent(`¡Hola! Quisiera solicitar la memoria técnica y planos del modelo ${model}.`)}`}
											target="_blank"
											rel="noopener noreferrer"
											className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold shadow-md shadow-blue-500/20 active:scale-95 transition-all">
											<BsWhatsapp className="text-sm" />
											Solicitar Ficha Técnica por WhatsApp
										</a>
									</div>
								)
							)}
						</div>

						{/* Double CTA Footer */}
						<div className="pt-4 mt-4 border-t border-slate-100 dark:border-slate-800 flex flex-col gap-2.5">
							<a
								href={wsUrl}
								target="_blank"
								rel="noopener noreferrer"
								className="w-full flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#22c35e] text-white font-bold py-3.5 px-5 rounded-2xl shadow-lg shadow-green-500/10 hover:shadow-green-500/20 active:scale-[0.98] transition-all text-xs lg:text-sm tracking-wide">
								<BsWhatsapp className="text-lg" />
								{activeTab === "memoria" ? "Consultar Memoria Técnica por WhatsApp" : "Asesoría por WhatsApp"}
							</a>
							<OpenEmail
								data={[
									{
										modelo: model,
										producción_max: production_max,
									},
								]}
								className="w-full flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 dark:bg-white dark:hover:bg-slate-100 text-white dark:text-slate-900 font-bold py-3.5 px-5 rounded-2xl shadow-lg shadow-slate-950/10 hover:shadow-slate-950/20 active:scale-[0.98] transition-all text-xs lg:text-sm tracking-wide border border-transparent dark:border-slate-200"
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

CardMachines.propTypes = {
	model: PropTypes.string.isRequired,
	img: PropTypes.string.isRequired,
	onClose: PropTypes.func.isRequired,
	production_max: PropTypes.string,
	washing_time: PropTypes.string,
	size: PropTypes.string,
	accesories: PropTypes.string,
	build: PropTypes.string,
	description: PropTypes.string,
};

