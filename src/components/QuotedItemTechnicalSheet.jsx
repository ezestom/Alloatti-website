import { useState } from "react";
import PropTypes from "prop-types";
import {
	BsSpeedometer2,
	BsClock,
	BsShieldCheck,
	BsArrowsAngleExpand,
	BsPlusCircle,
	BsLightningCharge,
	BsWind,
	BsCpu,
	BsGearWideConnected,
	BsDropletHalf,
	BsFileEarmarkText,
	BsArrowRight,
	BsPlayCircle,
	BsChevronDown,
	BsChevronUp,
} from "react-icons/bs";
import { bidonesRetornables } from "../machines_info/bidonesRetornables";
import { bidonesDescartables } from "../machines_info/bidonesDescartables";
import { accesorios } from "../machines_info/accesorios";
import { getMemoriaTecnica } from "../machines_info/memoriasTecnicas";

// Extraction of machine data from info files
const allRetornables = Object.values(bidonesRetornables).map((arr) => arr[0]);
const allDescartables = Object.values(bidonesDescartables).map((arr) => arr[0]);
const allAccesorios = Object.values(accesorios).map((arr) => arr[0]);

const ACCESSORY_MAP = {
	"sacatapas-manual": "SACATAPAS MANUAL",
	"sacatapas-auto": "SACATAPAS AUTOMÁTICO",
	"carga-automatica": "CARGADOR AUTOMÁTICO",
	jirafa: "JIRAFA ",
	tolva: "TOLVA",
	"lavadora-ext-cepillos": "PRE LAVADORA SOLO EXTERIOR",
	"prelavadora-int": "PRE LAVADORA SOLO INTERIOR",
	"prelavadora-ext-int": "PRE LAVADORA INTERIOR Y EXTERIOR",
	"prelavadora-ext-int-4vias": "PRE LAVADORA INTERIOR Y EXTERIOR",
};

const EXTRA_ACCESSORY_SPECS = {
	"canerias-llenadora": {
		characteristics: "Tuberías y conductos en Acero Inoxidable AISI 304 sanitario",
		description:
			"Actualización y modernización de conductos en acero inoxidable AISI 304 de grado sanitario bajo normas bromatológicas internacionales. Garantiza máxima inocuidad y elimina riesgos de contaminación cruzada.",
	},
	"canerias-lavadora": {
		characteristics: "Cañerías sanitarias de alta resistencia química AISI 304",
		description:
			"Actualización de circuitos de recirculación del sector de lavado. Alta resistencia a soluciones cáusticas y agentes desinfectantes a temperatura industrial.",
	},
	horno: {
		characteristics: "Túnel térmico termocontraíble de paso continuo",
		description:
			"Túnel térmico para el sellado hermético y seguro de precintos termocontraíbles en cuello y pico de los bidones garantizando inviolabilidad del envase para el cliente final.",
	},
	"cinta-inox": {
		characteristics: "Cinta transportadora motorizada 3m en acero inoxidable",
		description:
			"Cinta transportadora motorizada de 3 metros fabricada en acero inoxidable AISI 304 sanitario, con barandas perimetrales regulables y moto-reductor de tracción.",
	},
	"cinta-rodillos": {
		characteristics:
			"Transportador por gravedad de rodillos libres (modular por metro)",
		description:
			"Transportador continuo por gravedad para acumulación y desplazamiento de producto terminado o empaque hacia la zona de carga o paletizado.",
	},
	"dioxido-cloro": {
		characteristics: "Sistema generador y dosificador automático de ClO2",
		description:
			"Equipo de dosificación y generación en línea de Dióxido de Cloro para máxima eficacia bactericida y desinfección integral del circuito de agua.",
	},
	"op-prelavado": {
		characteristics: "Prelavado integral exterior e interior no recirculante",
		description:
			"Etapa previa con inyección de agua directa sin retorno, removiendo suciedad gruesa y evitando sobrecargar las soluciones químicas de la máquina principal.",
	},
	"op-ajuste": {
		characteristics: "Regulación neumática automatizada de altura y tapado",
		description:
			"Sistema automatizado de posicionamiento neumático para alternar con agilidad entre bidones de 10, 12 y 20 litros sin herramientas manuales.",
	},
};

function getItemDetail(item) {
	const codeLower = (item.code || "").trim().toLowerCase();

	// 1. Check Retornables
	const ret = allRetornables.find(
		(r) => r.modelo.trim().toLowerCase() === codeLower
	);
	if (ret) {
		return {
			category: "maquina",
			subType: "retornable",
			model: ret.modelo,
			production_max: ret.producción_max,
			washing_time: ret.tiempo_enjuague || ret.tiempo_lavado,
			build: ret.construida,
			size: ret.dimensiones,
			accesories: ret.accesorios,
			description: ret.description,
			memoria: getMemoriaTecnica(ret.modelo),
		};
	}

	// 2. Check Descartables
	let desc = allDescartables.find(
		(d) => d.modelo.trim().toLowerCase() === codeLower
	);
	if (!desc && item.id === "at-600d") {
		desc = allDescartables.find(
			(d) => d.modelo.trim().toLowerCase() === "at-700d"
		);
	}
	if (desc) {
		return {
			category: "maquina",
			subType: "descartable",
			model: desc.modelo,
			production_max: desc.producción_max,
			washing_time: desc.tiempo_enjuague || desc.tiempo_lavado,
			build: desc.construida,
			size: desc.dimensiones,
			accesories: desc.accesorios,
			description: desc.description,
			memoria: getMemoriaTecnica(desc.modelo),
		};
	}

	// 3. Check Accesorios from accesorios.js
	const accName = ACCESSORY_MAP[item.id];
	if (accName) {
		const acc = allAccesorios.find(
			(a) => a.name.trim().toLowerCase() === accName.trim().toLowerCase()
		);
		if (acc) {
			return {
				category: "accesorio",
				model: item.name,
				characteristics: acc.characteristics,
				description: acc.description,
				link: acc.link,
			};
		}
	}

	// 4. Check Extra Peripherals
	if (EXTRA_ACCESSORY_SPECS[item.id]) {
		return {
			category: "accesorio",
			model: item.name,
			characteristics: EXTRA_ACCESSORY_SPECS[item.id].characteristics,
			description: EXTRA_ACCESSORY_SPECS[item.id].description,
		};
	}

	// 5. Fallback for any other peripheral
	return {
		category: "accesorio",
		model: item.name,
		characteristics: item.capacity || "Equipamiento Oficial Alloatti",
		description: item.desc,
	};
}

export function QuotedItemTechnicalSheet({ item }) {
	const [isOpen, setIsOpen] = useState(true);
	const [activeTab, setActiveTab] = useState("general"); // "general" | "memoria"

	const detail = getItemDetail(item);
	const isMachine = detail.category === "maquina";
	const memoria = isMachine ? detail.memoria : null;

	return (
		<div className="mt-4 pt-4 border-t border-slate-100 dark:border-zinc-800 text-left">
			{/* Accordion header */}
			<button
				type="button"
				onClick={() => setIsOpen(!isOpen)}
				className="w-full flex items-center justify-between py-2 px-3 rounded-xl bg-slate-50 hover:bg-slate-100 dark:bg-zinc-800/60 dark:hover:bg-zinc-800 transition-colors border border-slate-200/60 dark:border-zinc-700/60 group">
				<div className="flex items-center gap-2">
					<div className="p-1.5 rounded-lg bg-blue-100 dark:bg-blue-900/40 text-[#024ad8] dark:text-blue-400 text-xs">
						<BsFileEarmarkText />
					</div>
					<span className="text-xs font-bold text-slate-800 dark:text-slate-200 tracking-tight">
						{isMachine ? "Ficha Técnica y Memoria de Ingeniería" : "Ficha Técnica y Características"}
					</span>
					<span className="text-[10px] px-2 py-0.5 rounded-full font-bold bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 border border-blue-200/40 hidden sm:inline">
						{isMachine ? (memoria ? "Memoria Detallada" : "Especificaciones Oficiales") : "Accesorio Oficial"}
					</span>
				</div>
				<div className="flex items-center gap-1.5 text-xs text-slate-400 group-hover:text-slate-600 dark:group-hover:text-slate-200 font-semibold">
					<span className="text-[11px] hidden sm:inline">
						{isOpen ? "Ocultar detalles" : "Ver especificaciones"}
					</span>
					{isOpen ? <BsChevronUp /> : <BsChevronDown />}
				</div>
			</button>

			{/* Collapsible Content */}
			{isOpen && (
				<div className="mt-4 space-y-4 animate-hp-fade">
					{/* MACHINE CONTENT */}
					{isMachine ? (
						<>
							{/* Navigation Tabs */}
							<div className="flex items-center gap-1.5 p-1 bg-slate-100 dark:bg-zinc-800 rounded-2xl border border-slate-200/60 dark:border-zinc-700/60">
								<button
									type="button"
									onClick={() => setActiveTab("general")}
									className={`flex-1 flex items-center justify-center gap-2 py-2 px-3 rounded-xl text-xs font-bold transition-all ${
										activeTab === "general"
											? "bg-white dark:bg-zinc-900 text-blue-600 dark:text-blue-400 shadow-sm"
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
											? "bg-white dark:bg-zinc-900 text-blue-600 dark:text-blue-400 shadow-sm"
											: "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
									}`}>
									<BsGearWideConnected className="text-sm shrink-0" />
									<span>Memoria Técnica</span>
									<span
										className={`text-[9px] px-1.5 py-0.5 rounded-full font-extrabold uppercase tracking-wider text-white ${
											memoria ? "bg-blue-600" : "bg-amber-600"
										}`}>
										{memoria ? "Detallada" : "Próximamente"}
									</span>
								</button>
							</div>

							{/* TAB 1: FICHA GENERAL */}
							{activeTab === "general" && (
								<div className="space-y-4">
									{/* Specs Grid */}
									<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5">
										<div className="flex items-center gap-3 p-3 rounded-2xl bg-slate-50 dark:bg-zinc-800/40 border border-slate-100 dark:border-zinc-800">
											<div className="p-2.5 rounded-xl bg-blue-50 dark:bg-blue-950/50 text-blue-600 dark:text-blue-400 text-base shrink-0">
												<BsSpeedometer2 />
											</div>
											<div>
												<h5 className="text-[9px] font-extrabold uppercase tracking-wider text-slate-400 dark:text-slate-500">
													Producción Máxima
												</h5>
												<p className="text-xs font-bold text-slate-800 dark:text-slate-200 leading-tight">
													{detail.production_max || "N/D"}
												</p>
											</div>
										</div>

										<div className="flex items-center gap-3 p-3 rounded-2xl bg-slate-50 dark:bg-zinc-800/40 border border-slate-100 dark:border-zinc-800">
											<div className="p-2.5 rounded-xl bg-blue-50 dark:bg-blue-950/50 text-blue-600 dark:text-blue-400 text-base shrink-0">
												<BsClock />
											</div>
											<div>
												<h5 className="text-[9px] font-extrabold uppercase tracking-wider text-slate-400 dark:text-slate-500">
													Tiempo de Lavado
												</h5>
												<p className="text-xs font-bold text-slate-800 dark:text-slate-200 leading-tight">
													{detail.washing_time || "N/D"}
												</p>
											</div>
										</div>

										<div className="flex items-center gap-3 p-3 rounded-2xl bg-slate-50 dark:bg-zinc-800/40 border border-slate-100 dark:border-zinc-800">
											<div className="p-2.5 rounded-xl bg-blue-50 dark:bg-blue-950/50 text-blue-600 dark:text-blue-400 text-base shrink-0">
												<BsShieldCheck />
											</div>
											<div>
												<h5 className="text-[9px] font-extrabold uppercase tracking-wider text-slate-400 dark:text-slate-500">
													Construcción
												</h5>
												<p className="text-xs font-bold text-slate-800 dark:text-slate-200 leading-tight">
													{detail.build || "Acero Inoxidable AISI 304"}
												</p>
											</div>
										</div>

										<div className="flex items-center gap-3 p-3 rounded-2xl bg-slate-50 dark:bg-zinc-800/40 border border-slate-100 dark:border-zinc-800">
											<div className="p-2.5 rounded-xl bg-blue-50 dark:bg-blue-950/50 text-blue-600 dark:text-blue-400 text-base shrink-0">
												<BsArrowsAngleExpand />
											</div>
											<div>
												<h5 className="text-[9px] font-extrabold uppercase tracking-wider text-slate-400 dark:text-slate-500">
													Dimensiones
												</h5>
												<p className="text-xs font-bold text-slate-800 dark:text-slate-200 leading-tight">
													{detail.size || "A convenir"}
												</p>
											</div>
										</div>

										{detail.accesories && (
											<div className="col-span-1 sm:col-span-2 lg:col-span-4 flex items-center gap-3 p-3 rounded-2xl bg-slate-50 dark:bg-zinc-800/40 border border-slate-100 dark:border-zinc-800">
												<div className="p-2.5 rounded-xl bg-blue-50 dark:bg-blue-950/50 text-blue-600 dark:text-blue-400 text-base shrink-0">
													<BsPlusCircle />
												</div>
												<div>
													<h5 className="text-[9px] font-extrabold uppercase tracking-wider text-slate-400 dark:text-slate-500">
														Accesorios Incluidos / Opcionales
													</h5>
													<p className="text-xs font-semibold text-slate-700 dark:text-slate-300 leading-normal">
														{detail.accesories}
													</p>
												</div>
											</div>
										)}
									</div>

									{/* Banner to switch to Memoria */}
									{memoria && (
										<button
											type="button"
											onClick={() => setActiveTab("memoria")}
											className="w-full p-3 rounded-2xl bg-gradient-to-r from-blue-50/80 to-indigo-50/60 dark:from-blue-950/30 dark:to-zinc-800/60 border border-blue-200/60 dark:border-blue-900/40 flex items-center justify-between text-left group hover:border-blue-400 dark:hover:border-blue-500 transition-all shadow-sm">
											<div className="flex items-center gap-3">
												<div className="p-2 rounded-xl bg-blue-600 text-white text-sm shadow-md group-hover:scale-110 transition-transform">
													<BsGearWideConnected />
												</div>
												<div>
													<p className="text-xs font-bold text-slate-900 dark:text-white">
														Ver Memoria Técnica de Ingeniería
													</p>
													<p className="text-[10px] text-slate-500 dark:text-slate-400">
														Detalles de bombas, etapas de lavado, PLC, presiones y moto-reductores
													</p>
												</div>
											</div>
											<BsArrowRight className="text-blue-600 dark:text-blue-400 text-sm group-hover:translate-x-1 transition-transform mr-1" />
										</button>
									)}

									{/* Detailed Technical Description */}
									{detail.description && (
										<div className="p-4 rounded-2xl bg-slate-50/80 dark:bg-zinc-800/30 border border-slate-100 dark:border-zinc-800/70">
											<h4 className="text-[10px] font-extrabold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-2">
												Descripción Técnica Detallada
											</h4>
											<p className="text-xs leading-relaxed text-slate-600 dark:text-slate-400 font-medium">
												{detail.description}
											</p>
										</div>
									)}

									{/* Compromiso de Calidad Alloatti */}
									<div className="p-4 rounded-2xl bg-gradient-to-br from-blue-50/50 to-indigo-50/30 dark:from-zinc-800/30 dark:to-indigo-950/10 border border-blue-100/60 dark:border-zinc-800/60 shadow-sm">
										<h4 className="text-[10px] font-extrabold text-[#024ad8] dark:text-blue-400 uppercase tracking-wider mb-2.5 flex items-center gap-2">
											<span className="w-1.5 h-1.5 rounded-full bg-[#024ad8] dark:bg-blue-400 animate-pulse" />
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

							{/* TAB 2: MEMORIA TÉCNICA */}
							{activeTab === "memoria" && (
								memoria ? (
									<div className="space-y-4">
										{/* Consumos & Suministros */}
										<div>
											<h4 className="text-[10px] font-extrabold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-2 flex items-center gap-1.5">
												<span>Consumos & Suministros Requeridos</span>
											</h4>
											<div className={`grid grid-cols-2 ${memoria.suministros.consumoAgua ? "sm:grid-cols-3 lg:grid-cols-5" : "sm:grid-cols-4"} gap-2`}>
												<div className="p-3 rounded-2xl bg-slate-50 dark:bg-zinc-800/40 border border-slate-100 dark:border-zinc-800">
													<div className="text-amber-500 text-sm mb-1">
														<BsLightningCharge />
													</div>
													<span className="text-[9px] font-extrabold uppercase text-slate-400 dark:text-slate-500 block">
														Consumo Eléctrico
													</span>
													<p className="text-xs font-extrabold text-slate-900 dark:text-slate-100">
														{memoria.suministros.potencia}
													</p>
												</div>

												<div className="p-3 rounded-2xl bg-slate-50 dark:bg-zinc-800/40 border border-slate-100 dark:border-zinc-800">
													<div className="text-cyan-500 text-sm mb-1">
														<BsWind />
													</div>
													<span className="text-[9px] font-extrabold uppercase text-slate-400 dark:text-slate-500 block">
														Aire Comprimido
													</span>
													<p className="text-xs font-extrabold text-slate-900 dark:text-slate-100">
														{memoria.suministros.aireComprimido}
													</p>
												</div>

												{memoria.suministros.consumoAgua && (
													<div className="p-3 rounded-2xl bg-slate-50 dark:bg-zinc-800/40 border border-slate-100 dark:border-zinc-800">
														<div className="text-blue-500 text-sm mb-1">
															<BsDropletHalf />
														</div>
														<span className="text-[9px] font-extrabold uppercase text-slate-400 dark:text-slate-500 block">
															Consumo de Agua
														</span>
														<p className="text-xs font-extrabold text-slate-900 dark:text-slate-100">
															{memoria.suministros.consumoAgua}
														</p>
													</div>
												)}

												<div className="p-3 rounded-2xl bg-slate-50 dark:bg-zinc-800/40 border border-slate-100 dark:border-zinc-800">
													<div className="text-blue-500 text-sm mb-1">
														<BsCpu />
													</div>
													<span className="text-[9px] font-extrabold uppercase text-slate-400 dark:text-slate-500 block">
														Sistema Control
													</span>
													<p className="text-xs font-extrabold text-slate-900 dark:text-slate-100">
														{memoria.suministros.control}
													</p>
												</div>

												<div className="p-3 rounded-2xl bg-slate-50 dark:bg-zinc-800/40 border border-slate-100 dark:border-zinc-800">
													<div className="text-emerald-500 text-sm mb-1">
														<BsGearWideConnected />
													</div>
													<span className="text-[9px] font-extrabold uppercase text-slate-400 dark:text-slate-500 block">
														Operación
													</span>
													<p className="text-xs font-extrabold text-slate-900 dark:text-slate-100">
														{memoria.suministros.operacion}
													</p>
												</div>
											</div>
										</div>

										{/* Módulo Lavadora */}
										<div className="p-4 rounded-2xl bg-slate-50/70 dark:bg-zinc-800/40 border border-slate-200/70 dark:border-zinc-800">
											<div className="flex items-center justify-between mb-3 border-b border-slate-200/60 dark:border-zinc-700/60 pb-2">
												<div className="flex items-center gap-2">
													<div className="p-1.5 rounded-lg bg-blue-100 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 text-xs">
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
															className="flex items-center justify-between gap-2 p-2 rounded-xl bg-white dark:bg-zinc-900/60 border border-slate-100 dark:border-zinc-800/70">
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
															<span className="text-[9px] font-bold px-2 py-0.5 rounded-lg bg-slate-100 dark:bg-zinc-800 text-slate-600 dark:text-slate-300 shrink-0">
																{etapa.tiempo}
															</span>
														</div>
													))}
												</div>
											</div>

											{/* Bombas y Moto-reductores Lavadora */}
											<div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
												<div className="p-3 rounded-xl bg-white dark:bg-zinc-900/60 border border-slate-100 dark:border-zinc-800/70">
													<h6 className="text-[9px] font-extrabold uppercase text-slate-400 dark:text-slate-500 mb-1.5 flex items-center gap-1">
														<BsDropletHalf className="text-blue-500" /> Bombas Sanitarias
													</h6>
													{memoria.lavadora.bombas.map((b, i) => (
														<div
															key={i}
															className="text-[10px] text-slate-700 dark:text-slate-300 py-0.5 flex justify-between border-b border-slate-50 dark:border-zinc-800/40 last:border-0">
															<span className="text-slate-500 dark:text-slate-400">
																{b.etiqueta}:
															</span>
															<span className="font-bold text-slate-900 dark:text-white">
																{b.modelo}
															</span>
														</div>
													))}
												</div>

												<div className="p-3 rounded-xl bg-white dark:bg-zinc-900/60 border border-slate-100 dark:border-zinc-800/70">
													<h6 className="text-[9px] font-extrabold uppercase text-slate-400 dark:text-slate-500 mb-1.5 flex items-center gap-1">
														<BsGearWideConnected className="text-indigo-500" /> Moto-reductores
													</h6>
													{memoria.lavadora.motoReductores.map((m, i) => (
														<div
															key={i}
															className="text-[10px] text-slate-700 dark:text-slate-300 py-0.5 flex justify-between border-b border-slate-50 dark:border-zinc-800/40 last:border-0">
															<span className="text-slate-500 dark:text-slate-400">
																{m.etiqueta}:
															</span>
															<span className="font-bold text-slate-900 dark:text-white">
																{m.modelo}
															</span>
														</div>
													))}
												</div>
											</div>
										</div>

										{/* Módulo Llenadora y Tapadora (si está en la memoria) */}
										{memoria.llenadoraTapadora && (
											<div className="p-4 rounded-2xl bg-slate-50/70 dark:bg-zinc-800/40 border border-slate-200/70 dark:border-zinc-800">
												<div className="flex items-center justify-between mb-3 border-b border-slate-200/60 dark:border-zinc-700/60 pb-2">
													<div className="flex items-center gap-2">
														<div className="p-1.5 rounded-lg bg-emerald-100 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 text-xs">
															<BsShieldCheck />
														</div>
														<div>
															<h4 className="text-xs font-extrabold text-slate-900 dark:text-white uppercase tracking-wide">
																Módulo Llenadora y Tapadora
															</h4>
															<p className="text-[10px] font-medium text-slate-500 dark:text-slate-400">
																Llenado sin contacto y cerrado continuo
															</p>
														</div>
													</div>
													<span className="text-[9px] px-2 py-0.5 rounded-full font-bold bg-emerald-50 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 border border-emerald-200/40">
														AISI 304
													</span>
												</div>

												<div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
													<div className="p-3 rounded-xl bg-white dark:bg-zinc-900/60 border border-slate-100 dark:border-zinc-800/70">
														<h6 className="text-[9px] font-extrabold uppercase text-slate-400 dark:text-slate-500 mb-1.5">
															Detalles de Ingeniería
														</h6>
														{memoria.llenadoraTapadora.items &&
															memoria.llenadoraTapadora.items.map((it, i) => (
																<div
																	key={i}
																	className="text-[10px] text-slate-700 dark:text-slate-300 py-0.5 border-b border-slate-50 dark:border-zinc-800/40 last:border-0">
																	<span className="font-bold text-slate-900 dark:text-white block">
																		{it.item}
																	</span>
																	<span className="text-slate-500 dark:text-slate-400">
																		{it.desc}
																	</span>
																</div>
															))}
													</div>

													<div className="p-3 rounded-xl bg-white dark:bg-zinc-900/60 border border-slate-100 dark:border-zinc-800/70">
														<h6 className="text-[9px] font-extrabold uppercase text-slate-400 dark:text-slate-500 mb-1.5 flex items-center gap-1">
															<BsGearWideConnected className="text-indigo-500" /> Moto-reductores y Control
														</h6>
														{memoria.llenadoraTapadora.motoReductores &&
															memoria.llenadoraTapadora.motoReductores.map((m, i) => (
																<div
																	key={i}
																	className="text-[10px] text-slate-700 dark:text-slate-300 py-0.5 flex justify-between border-b border-slate-50 dark:border-zinc-800/40 last:border-0">
																	<span className="text-slate-500 dark:text-slate-400">
																		{m.etiqueta}:
																	</span>
																	<span className="font-bold text-slate-900 dark:text-white">
																		{m.modelo}
																	</span>
																</div>
															))}
														{memoria.llenadoraTapadora.control && (
															<p className="text-[10px] text-slate-500 dark:text-slate-400 mt-2 pt-2 border-t border-slate-100 dark:border-zinc-800">
																{memoria.llenadoraTapadora.control}
															</p>
														)}
													</div>
												</div>
											</div>
										)}
									</div>
								) : (
									<div className="p-6 rounded-2xl bg-amber-50/60 dark:bg-amber-950/20 border border-amber-200/60 dark:border-amber-900/40 text-center space-y-2">
										<p className="text-xs font-bold text-amber-800 dark:text-amber-300">
											Memoria técnica en proceso de homologación digital para este modelo.
										</p>
										<p className="text-[11px] text-slate-600 dark:text-slate-400">
											Fabricación 100% en Acero Inoxidable AISI 304 bajo estándares IVESS y CIMES. Puedes solicitar la memoria técnica en PDF a tu asesor comercial.
										</p>
									</div>
								)
							)}
						</>
					) : (
						/* ACCESSORY CONTENT - sin memorias ya que no tienen */
						<div className="space-y-4">
							{/* Características Principales */}
							<div className="p-4 rounded-2xl bg-slate-50 dark:bg-zinc-800/40 border border-slate-100 dark:border-zinc-800 shadow-sm">
								<h4 className="text-[10px] font-extrabold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-1.5">
									Características Principales
								</h4>
								<p className="text-xs font-semibold text-slate-800 dark:text-slate-200 leading-relaxed">
									{detail.characteristics}
								</p>
							</div>

							{/* Video Link si existe */}
							{detail.link && (
								<div>
									<a
										href={detail.link}
										target="_blank"
										rel="noreferrer"
										className="inline-flex items-center gap-3 p-3 rounded-2xl bg-blue-50/60 hover:bg-blue-50 dark:bg-blue-950/30 dark:hover:bg-blue-950/50 text-xs font-bold text-[#024ad8] dark:text-blue-400 transition-colors border border-blue-100 dark:border-blue-900/40 group w-full">
										<div className="w-7 h-7 rounded-full bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center group-hover:scale-110 transition-transform text-[#024ad8] dark:text-blue-300 text-sm">
											<BsPlayCircle />
										</div>
										<span>Ver Video de Demostración del Accesorio</span>
									</a>
								</div>
							)}

							{/* Descripción Detallada */}
							{detail.description && (
								<div className="p-4 rounded-2xl bg-slate-50/80 dark:bg-zinc-800/30 border border-slate-100 dark:border-zinc-800/70">
									<h4 className="text-[10px] font-extrabold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-1.5">
										Descripción Detallada
									</h4>
									<p className="text-xs leading-relaxed text-slate-600 dark:text-slate-400 font-medium">
										{detail.description}
									</p>
								</div>
							)}

							{/* Garantía y Compatibilidad Alloatti */}
							<div className="p-4 rounded-2xl bg-gradient-to-br from-blue-50/50 to-indigo-50/30 dark:from-zinc-800/30 dark:to-indigo-950/10 border border-blue-100/60 dark:border-zinc-800/60 shadow-sm">
								<h4 className="text-[10px] font-extrabold text-[#024ad8] dark:text-blue-400 uppercase tracking-wider mb-2.5 flex items-center gap-2">
									<span className="w-1.5 h-1.5 rounded-full bg-[#024ad8] dark:bg-blue-400 animate-pulse" />
									Garantía y Compatibilidad Alloatti
								</h4>
								<ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[10px] text-slate-600 dark:text-slate-400 font-medium">
									<li className="flex items-start gap-1.5">
										<span className="text-emerald-500 font-extrabold shrink-0">✓</span>
										<span><strong>Integración Total:</strong> Compatible con líneas automáticas y semiautomáticas.</span>
									</li>
									<li className="flex items-start gap-1.5">
										<span className="text-emerald-500 font-extrabold shrink-0">✓</span>
										<span><strong>Construcción Sanitaria:</strong> Diseñado bajo normas bromatológicas estrictas.</span>
									</li>
									<li className="flex items-start gap-1.5">
										<span className="text-emerald-500 font-extrabold shrink-0">✓</span>
										<span><strong>Soporte Técnico:</strong> Repuestos y asesoría técnica oficial.</span>
									</li>
									<li className="flex items-start gap-1.5">
										<span className="text-emerald-500 font-extrabold shrink-0">✓</span>
										<span><strong>Durabilidad:</strong> Diseñado para trabajo continuo en plantas embotelladoras.</span>
									</li>
								</ul>
							</div>
						</div>
					)}
				</div>
			)}
		</div>
	);
}

QuotedItemTechnicalSheet.propTypes = {
	item: PropTypes.shape({
		id: PropTypes.string.isRequired,
		code: PropTypes.string,
		name: PropTypes.string.isRequired,
		desc: PropTypes.string,
		capacity: PropTypes.string,
		price: PropTypes.number.isRequired,
		qty: PropTypes.number,
		isQuantifiable: PropTypes.bool,
	}).isRequired,
};
