import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { OpenEmail } from "./OpenEmail";
import closeIcon from "../icons/close.png";

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

	return (
		<div
			className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-md animate-hp-fade"
			role="dialog"
			aria-modal="true"
			aria-labelledby="modal-title">
			
			<div className="relative w-full max-w-4xl max-h-[90vh] bg-white dark:bg-slate-900 rounded-3xl shadow-2xl overflow-hidden flex flex-col">
				
				{/* Close Button */}
				<button
					className="absolute top-4 right-4 z-10 p-2 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-full shadow-lg hover:scale-110 transition-transform"
					onClick={handleClose}
					aria-label="Cerrar ventana">
					<img src={closeIcon} className="w-4 h-4" alt="Cerrar" />
				</button>

				<div className="flex flex-col lg:flex-row h-full overflow-y-auto">
					
					{/* Image Section */}
					<div className="lg:w-1/2 h-64 lg:h-auto relative">
						<img
							className="w-full h-full object-cover"
							src={img}
							alt={model}
						/>
						<div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent lg:hidden"></div>
					</div>

					{/* Content Section */}
					<div className="lg:w-1/2 p-8 lg:p-10 flex flex-col">
						<header className="mb-8">
							<div className="hp-eyebrow hp-eyebrow-blue mb-2">Especificaciones Técnicas</div>
							<h3 id="modal-title" className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
								{model}
							</h3>
						</header>

						{/* Specs Grid */}
						<dl className="grid grid-cols-2 gap-x-4 gap-y-4 mb-10 border-b border-slate-100 dark:border-slate-800 pb-10">
							<div>
								<dt className="text-[10px] font-bold uppercase tracking-widest text-slate-400 dark:text-slate-500 mb-1">Producción Máxima</dt>
								<dd className="text-sm font-semibold text-slate-700 dark:text-slate-300">{production_max}</dd>
							</div>
							<div>
								<dt className="text-[10px] font-bold uppercase tracking-widest text-slate-400 dark:text-slate-500 mb-1">Tiempo de Lavado</dt>
								<dd className="text-sm font-semibold text-slate-700 dark:text-slate-300">{washing_time}</dd>
							</div>
							<div>
								<dt className="text-[10px] font-bold uppercase tracking-widest text-slate-400 dark:text-slate-500 mb-1">Construcción</dt>
								<dd className="text-sm font-semibold text-slate-700 dark:text-slate-300">{build}</dd>
							</div>
							<div>
								<dt className="text-[10px] font-bold uppercase tracking-widest text-slate-400 dark:text-slate-500 mb-1">Dimensiones</dt>
								<dd className="text-sm font-semibold text-slate-700 dark:text-slate-300">{size}</dd>
							</div>
							<div className="col-span-2">
								<dt className="text-[10px] font-bold uppercase tracking-widest text-slate-400 dark:text-slate-500 mb-1">Accesorios</dt>
								<dd className="text-sm font-semibold text-slate-700 dark:text-slate-300">{accesories}</dd>
							</div>
						</dl>

						<div className="mb-10">
							<h4 className="text-[10px] font-bold uppercase tracking-widest text-slate-400 dark:text-slate-500 mb-3">Descripción</h4>
							<p className="text-sm leading-relaxed text-slate-600 dark:text-slate-400 font-medium">
								{description}
							</p>
						</div>

						{/* Footer Actions */}
						<div className="mt-auto flex flex-col gap-3">
							<OpenEmail
								data={[
									{
										modelo: model,
										producción_max: production_max,
									},
								]}
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
