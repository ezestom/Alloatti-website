import { useEffect } from "react";
import { motion } from "framer-motion";
import { OpenEmail } from "./OpenEmail";
import { BsPlayCircle, BsWhatsapp } from "react-icons/bs";
import { IoClose } from "react-icons/io5";
import PropTypes from "prop-types";
import { slugify } from "../utils/slugify";

/**
 * Extracts and converts different YouTube link formats (watch, share, shorts)
 * into a safe embed URL for the iframe player.
 */
function getYouTubeEmbedUrl(url) {
	if (!url) return null;
	try {
		// Handle youtu.be/VIDEO_ID
		if (url.includes("youtu.be/")) {
			const idWithQuery = url.split("youtu.be/")[1];
			const [id, query] = idWithQuery.split("?");
			const params = new URLSearchParams(query || "");
			const time = params.get("t");
			return `https://www.youtube-nocookie.com/embed/${id}${time ? `?start=${parseInt(time, 10)}` : ""}`;
		}
		// Handle youtube.com/shorts/VIDEO_ID
		if (url.includes("/shorts/")) {
			const idWithQuery = url.split("/shorts/")[1];
			const [id] = idWithQuery.split("?");
			return `https://www.youtube-nocookie.com/embed/${id}`;
		}
		// Handle youtube.com/watch?v=VIDEO_ID
		if (url.includes("watch?v=") || url.includes("watch/?v=")) {
			const parsed = new URL(url);
			const id = parsed.searchParams.get("v");
			const time = parsed.searchParams.get("t");
			if (id) {
				return `https://www.youtube-nocookie.com/embed/${id}${time ? `?start=${parseInt(time, 10)}` : ""}`;
			}
		}
		// Fallback regex for standard 11-char YouTube ID
		const match = url.match(/(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))([\w-]{11})/);
		if (match && match[1]) {
			return `https://www.youtube-nocookie.com/embed/${match[1]}`;
		}
	} catch (e) {
		console.warn("No se pudo procesar la URL de YouTube:", url, e);
	}
	return null;
}

export function CardAccesories({
	model,
	img,
	onClose,
	characteristics,
	description,
	link,
}) {
	useEffect(() => {
		// Prevent scrolling when modal is open
		document.body.style.overflow = "hidden";
		const handleKeyDown = (e) => {
			if (e.key === "Escape") {
				onClose();
			}
		};
		window.addEventListener("keydown", handleKeyDown);
		return () => {
			document.body.style.overflow = "auto";
			window.removeEventListener("keydown", handleKeyDown);
		};
	}, [onClose]);

	const wsNumber = "5491168641122";
	const wsMessage = `¡Hola! Vengo desde el catálogo web de Alloatti y deseo asesoramiento técnico y presupuesto para el accesorio: ${model}.`;
	const wsUrl = `https://wa.me/${wsNumber}?text=${encodeURIComponent(wsMessage)}`;

	const embedUrl = getYouTubeEmbedUrl(link);
	const accessorySlug = slugify(model);

	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			transition={{ duration: 0.25 }}
			onClick={(e) => {
				if (e.target === e.currentTarget) onClose();
			}}
			className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/75 backdrop-blur-md"
			role="dialog"
			aria-modal="true"
			aria-labelledby="modal-title">
			
			<motion.div
				initial={{ opacity: 0, scale: 0.96 }}
				animate={{ opacity: 1, scale: 1 }}
				exit={{ opacity: 0, scale: 0.96 }}
				transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
				className="relative w-full h-[94vh] bg-white dark:bg-slate-900 rounded-3xl shadow-2xl overflow-hidden flex flex-col border border-slate-100 dark:border-slate-800/80">
				
				{/* Close Button */}
				<button
					className="absolute top-3.5 right-3.5 z-20 p-2 bg-white/95 dark:bg-slate-800/95 text-slate-800 dark:text-slate-200 hover:text-red-600 dark:hover:text-red-400 hover:bg-red-50 dark:hover:bg-red-950/30 backdrop-blur-sm rounded-full shadow-lg hover:scale-110 active:scale-95 transition-all"
					onClick={onClose}
					aria-label="Cerrar ventana">
					<IoClose className="w-5 h-5" />
				</button>

				<div className="flex flex-col lg:flex-row-reverse h-full overflow-hidden">
					
					{/* Left Column: Image Section */}
					<div className="lg:w-1/2 h-56 sm:h-72 lg:h-auto relative overflow-hidden min-h-[240px] lg:min-h-[420px] shrink-0 bg-slate-950 flex flex-col justify-end">
						<motion.img
							layoutId={`accessory-image-${accessorySlug}`}
							transition={{ type: "spring", stiffness: 300, damping: 30 }}
							className="w-full h-full object-cover absolute inset-0 opacity-90"
							src={img}
							alt={model}
						/>
						<div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent pointer-events-none"></div>
						
						{/* Badges on image */}
						<motion.div 
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ delay: 0.15, duration: 0.25 }}
							className="relative z-10 p-5 sm:p-6 text-white pointer-events-none">
							<div className="flex flex-wrap items-center gap-1.5 mb-2">
								<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[9px] font-extrabold tracking-widest uppercase bg-blue-600 text-white shadow-md">
									Accesorios y Opcionales
								</span>
								<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[9px] font-bold tracking-wide uppercase bg-slate-800/80 backdrop-blur-sm text-blue-300 border border-blue-500/30">
									Acero Sanitario
								</span>
							</div>
							<p className="text-[11px] text-slate-200 font-semibold tracking-wide leading-relaxed drop-shadow-sm hidden sm:block">
								Aumente la automatización, eficiencia y seguridad de su planta embotelladora.
							</p>
						</motion.div>
					</div>

					{/* Right Column: Content Section */}
					<motion.div 
						initial={{ opacity: 0, y: 12 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.08, duration: 0.28 }}
						className="lg:w-1/2 p-5 sm:p-7 flex flex-col justify-between overflow-y-auto">
						<div>
							<header className="mb-4 pr-10">
								<div className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[9px] font-bold tracking-wider uppercase bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400 mb-1.5">
									Equipamiento Opcional
								</div>
								<h3 id="modal-title" className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white">
									{model}
								</h3>
							</header>

							{/* Characteristics Box */}
							<div className="mb-5 p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-100 dark:border-slate-800/60 shadow-sm">
								<h4 className="text-[10px] font-extrabold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-1.5">
									Características Principales
								</h4>
								<p className="text-xs font-semibold text-slate-700 dark:text-slate-300 leading-relaxed">
									{characteristics}
								</p>
							</div>

							{/* Video Embed Section */}
							{embedUrl && (
								<div className="mb-5">
									<h4 className="text-[10px] font-extrabold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-2 flex items-center gap-1.5">
										<BsPlayCircle className="text-blue-600 dark:text-blue-400 text-xs" />
										Video Demostrativo del Accesorio
									</h4>
									<div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-md border border-slate-200 dark:border-slate-800 bg-black">
										<iframe
											className="w-full h-full"
											src={embedUrl}
											title={`Video demostrativo de ${model}`}
											allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
											allowFullScreen
											loading="lazy"
										/>
									</div>
								</div>
							)}

							{/* Description */}
							<div className="mb-5">
								<h4 className="text-[10px] font-extrabold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-2">
									Descripción Detallada
								</h4>
								<p className="text-xs leading-relaxed text-slate-600 dark:text-slate-400 font-medium">
									{description}
								</p>
							</div>

							{/* Value proposition box */}
							<div className="mb-5 p-4 rounded-2xl bg-gradient-to-br from-blue-50/50 to-indigo-50/30 dark:from-slate-800/30 dark:to-indigo-950/10 border border-blue-100/60 dark:border-slate-800/50 shadow-sm">
								<h4 className="text-[10px] font-extrabold text-[#024ad8] dark:text-blue-400 uppercase tracking-wider mb-2.5 flex items-center gap-2">
									<span className="w-1.5 h-1.5 rounded-full bg-[#024ad8] dark:bg-blue-400 animate-pulse"></span>
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
										<span><strong>Instalación Directa:</strong> Asistencia directa en planta o soporte online.</span>
									</li>
								</ul>
							</div>
						</div>

						{/* Double CTA */}
						<div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex flex-col gap-3">
							<a
								href={wsUrl}
								target="_blank"
								rel="noopener noreferrer"
								className="w-full flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#22c35e] text-white font-bold py-3.5 px-5 rounded-2xl shadow-lg shadow-green-500/10 hover:shadow-green-500/20 active:scale-[0.98] transition-all text-xs lg:text-sm tracking-wide">
								<BsWhatsapp className="text-lg" />
								Asesoría por WhatsApp
							</a>
							<OpenEmail
								data={[
									{
										modelo: model,
									},
								]}
								className="w-full flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 dark:bg-white dark:hover:bg-slate-100 text-white dark:text-slate-900 font-bold py-3.5 px-5 rounded-2xl shadow-lg shadow-slate-950/10 hover:shadow-slate-950/20 active:scale-[0.98] transition-all text-xs lg:text-sm tracking-wide border border-transparent dark:border-slate-200"
							/>
						</div>
					</motion.div>
				</div>
			</motion.div>
		</motion.div>
	);
}

CardAccesories.propTypes = {
	model: PropTypes.string.isRequired,
	img: PropTypes.string.isRequired,
	onClose: PropTypes.func.isRequired,
	characteristics: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired,
	link: PropTypes.string,
};

