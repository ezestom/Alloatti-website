import { useState, useEffect } from "react";
import { accesorios } from "../machines_info/accesorios";
import { CardAccesories } from "./CardAccesories";
import { useTheme } from "../context/ThemeContext";
import img from "../img/tubos.jpg";
import { FaCompactDisc, FaArrowUp, FaInbox, FaEject, FaTabletAlt, FaShower, FaCog } from "react-icons/fa";
import { useSearchParams } from "react-router-dom";

const slugify = (text) => {
	if (!text) return "";
	return text
		.toString()
		.toLowerCase()
		.trim()
		.normalize("NFD")
		.replace(/[\u0300-\u036f]/g, "")
		.replace(/\s+/g, "-")
		.replace(/[^\w-]+/g, "")
		.replace(/--+/g, "-");
};

export function TableAccesories() {
	const [selectedAccesory, setSelectedAccesory] = useState(null);
	const { isDarkTheme } = useTheme();
	const [searchParams, setSearchParams] = useSearchParams();

	const {
		sectionData1,
		sectionData2,
		sectionData3,
		sectionData4,
		sectionData5,
		sectionData6,
		sectionData7,
		sectionData8,
		sectionData9,
	} = accesorios;

	const sectionDataArray = [
		sectionData1,
		sectionData2,
		sectionData3,
		sectionData4,
		sectionData5,
		sectionData6,
		sectionData7,
		sectionData8,
		sectionData9,
	];

	useEffect(() => {
		const maquinaParam = searchParams.get("maquina") || searchParams.get("id");
		if (maquinaParam) {
			const slugParam = slugify(maquinaParam);
			for (const sectionData of sectionDataArray) {
				const item = sectionData[0];
				if (slugify(item.name) === slugParam) {
					setSelectedAccesory(item);
					document.body.style.overflow = "hidden";
					break;
				}
			}
		}
	}, [searchParams]);

	const handleCardOpen = (accesory) => {
		setSelectedAccesory(accesory);
		document.body.style.overflow = "hidden";

		const params = new URLSearchParams(window.location.search);
		params.set("maquina", slugify(accesory.name));
		setSearchParams(params, { replace: true });
	};

	const handleCardClose = () => {
		setSelectedAccesory(null);
		document.body.style.overflow = "auto";

		const params = new URLSearchParams(window.location.search);
		params.delete("maquina");
		setSearchParams(params, { replace: true });
	};

	const getCategoryName = (name) => {
		const n = name.toUpperCase().trim();
		if (n.includes("TOLVA")) return "Alimentación de Tapas";
		if (n.includes("JIRAFA")) return "Alimentación de Tapas";
		if (n.includes("CARGADOR")) return "Alimentación de Bidones";
		if (n.includes("SACATAPAS MANUAL")) return "Extracción Manual";
		if (n.includes("SACATAPAS AUTOMÁTICO")) return "Extracción Automática";
		if (n.includes("PANTALLA")) return "Telemetría y Control IoT";
		if (n.includes("SOLO EXTERIOR")) return "Saneamiento Exterior";
		if (n.includes("SOLO INTERIOR")) return "Saneamiento Interior";
		if (n.includes("INTERIOR Y EXTERIOR")) return "Saneamiento Dual";
		return "Periférico de Línea";
	};

	const getIcon = (name) => {
		const n = name.toUpperCase().trim();
		if (n.includes("TOLVA")) return <FaCompactDisc />;
		if (n.includes("JIRAFA")) return <FaArrowUp />;
		if (n.includes("CARGADOR")) return <FaInbox />;
		if (n.includes("SACATAPAS")) return <FaEject />;
		if (n.includes("PANTALLA")) return <FaTabletAlt />;
		if (n.includes("PRE LAVADORA")) return <FaShower />;
		return <FaCog />;
	};

	return (
		<div className="my-12">
			<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
				{sectionDataArray.map((sectionData, index) => {
					const item = sectionData[0];
					const category = getCategoryName(item.name);
					const icon = getIcon(item.name);
					return (
						<button
							key={index}
							onClick={() => handleCardOpen(item)}
							className={`w-full text-left group rounded-[16px] border transition-all duration-500 overflow-hidden relative flex flex-col justify-between ${
								isDarkTheme
									? "bg-slate-900/40 border-[#2a2a2a] hover:border-[#024ad8]/40 hover:shadow-[0_8px_32px_rgba(2,74,216,0.12)]"
									: "bg-slate-200 border-[#e8e8e8] hover:border-[#024ad8]/30 hover:shadow-[0_8px_32px_rgba(2,74,216,0.08)]"
							}`}
						>
							{/* Top accent bar */}
							<div className="h-[3px] w-full bg-gradient-to-r from-[#024ad8] via-[#024ad8] to-[#0e3191] opacity-60 group-hover:opacity-100 transition-opacity duration-500"></div>

							<div className="p-6 flex flex-col justify-between flex-grow w-full">
								<div>
									{/* Category badge */}
									<div className="flex items-center gap-2 mb-3">
										<span className={`text-[9px] font-bold uppercase tracking-[0.15em] px-2.5 py-0.5 rounded-full ${
											isDarkTheme
												? "bg-[#024ad8]/15 text-blue-400"
												: "bg-[#024ad8]/8 text-[#024ad8]"
										}`}>
											{category}
										</span>
									</div>

									{/* Name */}
									<h3 className={`text-base font-extrabold tracking-tight mb-2 flex items-center gap-2 group-hover:text-[#024ad8] transition-colors duration-300 ${
										isDarkTheme ? "text-white" : "text-[#1a1a1a]"
									}`}>
										<span className="text-lg flex items-center">{icon}</span>
										{item.name}
									</h3>

									{/* Characteristics */}
									{item.characteristics && item.characteristics !== "-" && (
										<p className={`text-[12px] font-bold mb-4 px-2.5 py-1.5 rounded-lg inline-block ${
											isDarkTheme ? "bg-white/[0.03] text-slate-300" : "bg-slate-50 text-slate-600"
										}`}>
											✨ {item.characteristics}
										</p>
									)}

									{/* Short summary */}
									<p className={`text-xs line-clamp-2 font-semibold leading-relaxed mb-6 ${
										isDarkTheme ? "text-slate-400" : "text-slate-500"
									}`}>
										{item.description}
									</p>
								</div>

								{/* CTA link at bottom */}
								<div className="flex items-center gap-2 mt-auto pt-4 border-t border-dashed border-slate-100 dark:border-zinc-800 w-full justify-between">
									<span className={`text-[10px] font-bold uppercase tracking-wider transition-colors duration-300 ${
										isDarkTheme
											? "text-slate-500 group-hover:text-blue-400"
											: "text-slate-400 group-hover:text-[#024ad8]"
									}`}>
										Ver detalles
									</span>
									<svg
										className={`w-3.5 h-3.5 transition-all duration-300 group-hover:translate-x-1 ${
											isDarkTheme
												? "text-slate-500 group-hover:text-blue-400"
												: "text-slate-400 group-hover:text-[#024ad8]"
										}`}
										viewBox="0 0 24 24"
										fill="none"
										stroke="currentColor"
										strokeWidth="2.5"
										strokeLinecap="round"
										strokeLinejoin="round"
									>
										<path d="M5 12h14" />
										<path d="M12 5l7 7-7 7" />
									</svg>
								</div>
							</div>
						</button>
					);
				})}
			</div>

			{selectedAccesory && (
				<CardAccesories
					model={selectedAccesory.name}
					characteristics={selectedAccesory.characteristics}
					description={selectedAccesory.description}
					link={selectedAccesory.link}
					img={img}
					isOpen={true}
					onClose={handleCardClose}
				/>
			)}
		</div>
	);
}
