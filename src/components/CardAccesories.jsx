import { useState, useEffect } from "react";
import { OpenEmail } from "./OpenEmail";
import { BsPlayCircle, BsWhatsapp } from "react-icons/bs";
import { IoClose } from "react-icons/io5";
import PropTypes from "prop-types";

export function CardAccesories({
	model,
	img,
	onClose,
	characteristics,
	description,
	link,
}) {
	const [isShow, setIsShow] = useState(true);

	useEffect(() => {
		// Prevent scrolling when modal is open
		document.body.style.overflow = "hidden";
		return () => {
			document.body.style.overflow = "auto";
		};
	}, []);

	const handleClose = () => {
		setIsShow(false);
		onClose();
	};

	if (!isShow) return null;

	const wsNumber = "5491168641122";
	const wsMessage = `¡Hola! Vengo desde el catálogo web de Alloatti y deseo asesoramiento técnico y presupuesto para el accesorio: ${model}.`;
	const wsUrl = `https://wa.me/${wsNumber}?text=${encodeURIComponent(wsMessage)}`;

	return (
		<div
			className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-md animate-hp-fade"
			role="dialog"
			aria-modal="true"
			aria-labelledby="modal-title">
			
			<div className="relative w-full max-w-5xl max-h-[92vh] bg-white dark:bg-slate-900 rounded-3xl shadow-2xl overflow-hidden flex flex-col border border-slate-100 dark:border-slate-800/80">
				
				{/* Close Button */}
				<button
					className="absolute top-4 right-4 z-10 p-2 bg-white/95 dark:bg-slate-800/95 text-slate-800 dark:text-slate-200 hover:text-red-600 dark:hover:text-red-400 hover:bg-red-50 dark:hover:bg-red-950/30 backdrop-blur-sm rounded-full shadow-lg hover:scale-110 active:scale-95 transition-all"
					onClick={handleClose}
					aria-label="Cerrar ventana">
					<IoClose className="w-5 h-5" />
				</button>

				<div className="flex flex-col lg:flex-row h-full overflow-y-auto">
					
					{/* Image Section */}
					<div className="lg:w-1/2 h-64 lg:h-auto relative overflow-hidden min-h-[280px]">
						<img
							className="w-full h-full object-cover"
							src={img}
							alt={model}
						/>
						<div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/30 to-transparent"></div>
						<div className="absolute bottom-6 left-6 right-6 text-white hidden lg:block">
							<span className="inline-flex items-center px-3 py-1 rounded-full text-[9px] font-extrabold tracking-widest uppercase bg-[#024ad8] mb-2 text-white shadow-md">
								Accesorios y Opcionales
							</span>
							<p className="text-[11px] text-slate-200 font-semibold tracking-wide leading-relaxed">
								Aumente la automatización, eficiencia y seguridad de su planta embotelladora.
							</p>
						</div>
					</div>

					{/* Content Section */}
					<div className="lg:w-1/2 p-6 lg:p-8 flex flex-col justify-between overflow-y-auto">
						<div>
							<header className="mb-6">
								<div className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[9px] font-bold tracking-wider uppercase bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400 mb-2">
									Equipamiento Opcional
								</div>
								<h3 id="modal-title" className="text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white">
									{model}
								</h3>
							</header>

							{/* Characteristics Box */}
							<div className="mb-6 p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-100 dark:border-slate-800/60 shadow-sm">
								<h4 className="text-[10px] font-extrabold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-2">
									Características Principales
								</h4>
								<p className="text-xs font-semibold text-slate-750 dark:text-slate-300 leading-relaxed">
									{characteristics}
								</p>
							</div>

							{link && (
								<div className="mb-6">
									<a
										href={link}
										target="_blank"
										rel="noreferrer"
										className="inline-flex items-center gap-3 p-3 rounded-2xl bg-blue-50/50 hover:bg-blue-50 dark:bg-blue-950/20 dark:hover:bg-blue-950/30 text-xs font-bold text-[#024ad8] dark:text-blue-400 transition-colors border border-blue-100 dark:border-blue-900/30 group w-full">
										<div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center group-hover:scale-110 transition-transform text-[#024ad8] dark:text-blue-300 text-sm">
											<BsPlayCircle />
										</div>
										<span>Ver Video de Demostración del Accesorio</span>
									</a>
								</div>
							)}

							{/* Description */}
							<div className="mb-6">
								<h4 className="text-[10px] font-extrabold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-2">
									Descripción Detallada
								</h4>
								<p className="text-xs leading-relaxed text-slate-600 dark:text-slate-400 font-medium">
									{description}
								</p>
							</div>

							{/* Value proposition box */}
							<div className="mb-6 p-4 rounded-2xl bg-gradient-to-br from-blue-50/50 to-indigo-50/30 dark:from-slate-800/30 dark:to-indigo-950/10 border border-blue-100/60 dark:border-slate-800/50 shadow-sm">
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
					</div>
				</div>
			</div>
		</div>
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
