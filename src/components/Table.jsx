import machine from "../img/wallpaper_machine2.jpg";
import { CardMachines } from "./CardMachines";
import { useState, useEffect } from "react";
import { useTheme } from "../context/ThemeContext";
import PropTypes from "prop-types";
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

export function Table({ data }) {
	const [selectedBidones, setSelectedBidones] = useState(null);
	const { isDarkTheme } = useTheme();
	const [searchParams, setSearchParams] = useSearchParams();

	const machineData = data[0];
	const visibleKeys = Object.keys(machineData).filter(
		(key) => key !== "description"
	);

	useEffect(() => {
		const maquinaParam = searchParams.get("maquina") || searchParams.get("id");
		if (maquinaParam) {
			const slugParam = slugify(maquinaParam);
			const slugModel = slugify(machineData.modelo);
			if (slugParam === slugModel) {
				setSelectedBidones(machineData);
				document.body.style.overflow = "hidden";
			}
		}
	}, [searchParams, machineData]);

	const handleOpen = (bidones) => {
		setSelectedBidones(bidones);
		document.body.style.overflow = "hidden";

		const params = new URLSearchParams(window.location.search);
		params.set("maquina", slugify(bidones.modelo));
		setSearchParams(params, { replace: true });
	};

	const handleClose = () => {
		setSelectedBidones(null);
		document.body.style.overflow = "auto";

		const params = new URLSearchParams(window.location.search);
		params.delete("maquina");
		setSearchParams(params, { replace: true });
	};

	// Key specs to highlight in the card header
	const keySpecs = [
		{ label: "Producción", value: machineData.producción_max, icon: "⚡" },
		{ label: "Tiempo", value: machineData.tiempo_lavado || machineData.tiempo_enjuague, icon: "⏱" },
		{ label: "Construcción", value: machineData.construida, icon: "🔧" },
	].filter(spec => spec.value);

	return (
		<div className="mb-6">
			{/* Premium Machine Card Button */}
			<button
				onClick={() => handleOpen(machineData)}
				className={`w-full text-left group rounded-[16px] border transition-all duration-500 overflow-hidden relative ${
					isDarkTheme
						? "bg-[#1e1e1e] border-[#2a2a2a] hover:border-[#024ad8]/40 hover:shadow-[0_8px_32px_rgba(2,74,216,0.12)]"
						: "bg-white border-[#e8e8e8] hover:border-[#024ad8]/30 hover:shadow-[0_8px_32px_rgba(2,74,216,0.08)]"
				}`}
			>
				{/* Top accent bar */}
				<div className="h-[3px] w-full bg-gradient-to-r from-[#024ad8] via-[#024ad8] to-[#0e3191] opacity-60 group-hover:opacity-100 transition-opacity duration-500"></div>

				{/* Card Content */}
				<div className="p-6 md:p-8">
					{/* Header Row: Model + Open Icon */}
					<div className="flex items-start justify-between gap-4 mb-6">
						<div className="flex-1">
							<div className="flex items-center gap-3 mb-2">
								<span className={`text-xs font-bold uppercase tracking-[0.15em] px-3 py-1 rounded-full ${
									isDarkTheme
										? "bg-[#024ad8]/15 text-blue-400"
										: "bg-[#024ad8]/8 text-[#024ad8]"
								}`}>
									{machineData.modelo}
								</span>
							</div>
							<h3 className={`text-xl md:text-2xl font-bold tracking-tight leading-tight ${
								isDarkTheme ? "text-white" : "text-[#1a1a1a]"
							}`}>
								Máquina de producción de{" "}
								<span className="text-[#024ad8]">{machineData.producción_max}</span>
							</h3>
						</div>

						{/* Open indicator */}
						<div className={`flex-shrink-0 w-10 h-10 rounded-[10px] flex items-center justify-center transition-all duration-300 group-hover:scale-110 ${
							isDarkTheme
								? "bg-[#024ad8]/15 group-hover:bg-[#024ad8]/25"
								: "bg-[#024ad8]/8 group-hover:bg-[#024ad8]/15"
						}`}>
							<svg
								className="w-4 h-4 text-[#024ad8] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								strokeWidth="2.5"
								strokeLinecap="round"
								strokeLinejoin="round"
							>
								<path d="M7 17L17 7" />
								<path d="M7 7h10v10" />
							</svg>
						</div>
					</div>

					{/* Key Specs Grid */}
					<div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
						{keySpecs.map((spec, idx) => (
							<div
								key={idx}
								className={`flex items-center gap-3 px-4 py-3 rounded-[12px] transition-colors duration-300 ${
									isDarkTheme
										? "bg-white/[0.03]"
										: "bg-slate-50"
								}`}
							>
								<span className="text-lg">{spec.icon}</span>
								<div>
									<p className={`text-[10px] font-bold uppercase tracking-[0.12em] ${
										isDarkTheme ? "text-slate-500" : "text-slate-400"
									}`}>
										{spec.label}
									</p>
									<p className={`text-sm font-semibold ${
										isDarkTheme ? "text-slate-200" : "text-slate-700"
									}`}>
										{spec.value}
									</p>
								</div>
							</div>
						))}
					</div>

					{/* Detail Specs Row */}
					<div className={`flex flex-wrap gap-x-6 gap-y-2 pt-5 border-t ${
						isDarkTheme ? "border-[#2a2a2a]" : "border-[#e8e8e8]"
					}`}>
						{visibleKeys.map((key, idx) => {
							if (["modelo", "producción_max", "tiempo_lavado", "tiempo_enjuague", "construida"].includes(key)) return null;
							return (
								<div key={idx} className="flex items-center gap-2">
									<span className={`text-[10px] font-bold uppercase tracking-wider ${
										isDarkTheme ? "text-slate-500" : "text-slate-400"
									}`}>
										{key.replace(/_/g, " ")}:
									</span>
									<span className={`text-sm font-medium ${
										isDarkTheme ? "text-slate-300" : "text-slate-600"
									}`}>
										{machineData[key]}
									</span>
								</div>
							);
						})}
					</div>

					{/* CTA hint */}
					<div className="flex items-center gap-2 mt-5">
						<span className={`text-xs font-semibold uppercase tracking-wider transition-colors duration-300 ${
							isDarkTheme
								? "text-slate-500 group-hover:text-blue-400"
								: "text-slate-400 group-hover:text-[#024ad8]"
						}`}>
							Ver especificaciones completas
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

			{/* Modal - unchanged */}
			{selectedBidones && (
				<div>
					<CardMachines
						img={machine}
						model={selectedBidones.modelo}
						production_max={selectedBidones.producción_max}
						washing_time={selectedBidones.tiempo_enjuague || selectedBidones.tiempo_lavado}
						build={selectedBidones.construida}
						size={selectedBidones.dimensiones}
						accesories={selectedBidones.accesorios}
						description={selectedBidones.description}
						isOpen={true}
						onClose={handleClose}
					/>
				</div>
			)}
		</div>
	);
}

Table.propTypes = {
	data: PropTypes.arrayOf(PropTypes.object).isRequired,
};
