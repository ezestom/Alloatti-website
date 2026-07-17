import { useState, useEffect } from "react";
import { accesorios } from "../machines_info/accesorios";
import { CardAccesories } from "./CardAccesories";
import { useTheme } from "../context/ThemeContext";
import defaultImg from "../img/machine_5_ps.jpg";
import paletizadoraImg from "../img/accesories/paletizadora_op.jpg";
import prelavadoraAutoImg from "../img/accesories/prelavadora_auto_op.jpg";
import sacatapasManualImg from "../img/accesories/sacatapas_manual_op.jpg"
import cargadorAutoImg from "../img/accesories/cargador_auto_op.jpg"
import prelavadoraExtIntImg from "../img/accesories/prelavadora_ext_int_op.jpg"
import prelavadoraExtImg from "../img/accesories/prelavadora_ext_op.jpg"
import jirafaImg from "../img/accesories/jirafa_op.jpg";
import tolvaImg from "../img/accesories/tolva_op.jpg";
import sacatapasAutoImg from "../img/accesories/sacatapas_auto_op.jpg"
import appImg from "../img/accesories/app_op.jpg";
import { FaCompactDisc, FaArrowUp, FaInbox, FaEject, FaTabletAlt, FaShower, FaCog, FaBoxes } from "react-icons/fa";
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
		sectionData10,
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
		sectionData10,
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
		if (n.includes("PANTALLA")) return "Conectividad y Telemetría";
		if (n.includes("SOLO EXTERIOR")) return "Saneamiento Exterior";
		if (n.includes("SOLO INTERIOR")) return "Saneamiento Interior";
		if (n.includes("INTERIOR Y EXTERIOR")) return "Saneamiento Dual";
		if (n.includes("PALETIZADOR")) return "Fin de Línea";
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
		if (n.includes("PALETIZADOR")) return <FaBoxes />;
		return <FaCog />;
	};

	const getAccessoryImage = (name) => {
		const n = name.toUpperCase().trim();
		if (n.includes("PALETIZADOR")) return paletizadoraImg;
		if (n.includes("SOLO INTERIOR")) return prelavadoraAutoImg;
		if (n.includes("PANTALLA") || n.includes("APP")) return appImg;
		if (n.includes("SACATAPAS MANUAL")) return sacatapasManualImg;
		if (n.includes("CARGADOR")) return cargadorAutoImg;
		if (n.includes("INTERIOR Y EXTERIOR")) return prelavadoraExtIntImg;
		if (n.includes("SOLO EXTERIOR")) return prelavadoraExtImg;
		if (n.includes("JIRAFA")) return jirafaImg;
		if (n.includes("TOLVA")) return tolvaImg;
		if (n.includes("SACATAPAS AUTOMÁTICO")) return sacatapasAutoImg;
		return defaultImg;
	};

	return (
		<div className="my-12">
			<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 px-2">
				{sectionDataArray.map((sectionData, index) => {
					const item = sectionData[0];
					const category = getCategoryName(item.name);
					const icon = getIcon(item.name);
					const itemImg = getAccessoryImage(item.name);

					return (
						<button
							key={index}
							onClick={() => handleCardOpen(item)}
							className={`w-full text-left group rounded-3xl border transition-all duration-500 overflow-hidden relative flex flex-col h-full shadow-sm hover:-translate-y-1 ${
								isDarkTheme
									? "bg-slate-900/60 border-slate-800 hover:border-[#024ad8]/50 hover:shadow-[0_12px_40px_rgba(2,74,216,0.15)]"
									: "bg-white border-slate-200/80 hover:border-[#024ad8]/30 hover:shadow-[0_12px_40px_rgba(2,74,216,0.1)]"
							}`}
						>
							{/* Top Image Section */}
							<div className="w-full h-52 md:h-80 relative overflow-hidden bg-slate-100 dark:bg-slate-800">
								<img 
									src={itemImg} 
									alt={item.name}
									className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
								/>
								{/* Gradient overlay for better text contrast */}
								<div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/10 to-slate-900/30 opacity-80 group-hover:opacity-90 transition-opacity duration-500"></div>
								
								{/* Category badge floating on top-left */}
								<div className="absolute top-4 left-4 z-10">
									<span className={`inline-flex items-center gap-1.5 text-[9px] font-extrabold uppercase tracking-widest px-3 py-1.5 rounded-full backdrop-blur-md border shadow-sm transition-colors duration-300 ${
										isDarkTheme
											? "bg-black/50 border-white/10 text-white group-hover:bg-[#024ad8]/80 group-hover:border-[#024ad8]"
											: "bg-white/95 border-slate-200/50 text-[#024ad8] group-hover:bg-[#024ad8] group-hover:text-white"
									}`}>
										<span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse"></span>
										{category}
									</span>
								</div>
								
								{/* Quick icon floating on top-right */}
								<div className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full bg-black/40 backdrop-blur-md flex items-center justify-center text-white border border-white/20 shadow-sm">
									{icon}
								</div>
								
								{/* Characteristics tag overlay on bottom-left of image */}
								{item.characteristics && item.characteristics !== "-" && (
									<div className="absolute bottom-4 left-4 right-4 z-10">
										<p className="text-[11px] font-bold text-white/90 drop-shadow-md line-clamp-1">
											✨ {item.characteristics}
										</p>
									</div>
								)}
							</div>

							{/* Content Section */}
							<div className="p-2 md:p-4 flex flex-col flex-grow w-full z-10 bg-inherit relative">
								
								{/* Name */}
								<h3 className={`text-xl font-extrabold tracking-tight mb-3 transition-colors duration-300 group-hover:text-[#024ad8] ${
									isDarkTheme ? "text-white" : "text-slate-900"
								}`}>
									{item.name}
								</h3>

								{/* Short summary */}
								<p className={`text-sm line-clamp-3 font-medium leading-relaxed mb-6 ${
									isDarkTheme ? "text-slate-400" : "text-slate-500"
								}`}>
									{item.description}
								</p>

								{/* Enhanced CTA Button at bottom */}
								<div className="mt-auto pt-2">
									<div className={`flex items-center justify-center w-full gap-2 px-5 py-3.5 rounded-2xl font-bold text-sm tracking-wide transition-all duration-300 border ${
										isDarkTheme
											? "bg-slate-800/50 border-slate-700 text-white group-hover:bg-[#024ad8] group-hover:border-[#024ad8] group-hover:shadow-[0_0_20px_rgba(2,74,216,0.3)]"
											: "bg-slate-50 border-slate-200/80 text-slate-700 group-hover:bg-[#024ad8] group-hover:border-[#024ad8] group-hover:text-white group-hover:shadow-[0_8px_20px_rgba(2,74,216,0.25)]"
									}`}>
										<span>Ver información detallada</span>
										<svg
											className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
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
					img={getAccessoryImage(selectedAccesory.name)}
					isOpen={true}
					onClose={handleCardClose}
				/>
			)}
		</div>
	);
}
