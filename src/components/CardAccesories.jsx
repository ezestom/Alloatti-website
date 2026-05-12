import { useState, useEffect } from "react";
import { OpenEmail } from "./OpenEmail";
import closeIcon from "../icons/close.png";
import close2Icon from "../icons/close2.png";
import { FaPlay } from "react-icons/fa";

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
							<div className="hp-eyebrow hp-eyebrow-blue mb-2">Accesorio Industrial</div>
							<h3 id="modal-title" className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
								{model}
							</h3>
						</header>

						{/* Characteristics Grid */}
						<dl className="grid grid-cols-1 gap-y-6 mb-10 border-b border-slate-100 dark:border-slate-800 pb-10">
							<div>
								<dt className="text-[10px] font-bold uppercase tracking-widest text-slate-400 dark:text-slate-500 mb-1">Características Principales</dt>
								<dd className="text-sm font-semibold text-slate-700 dark:text-slate-300 leading-relaxed">{characteristics}</dd>
							</div>
							
							{link && (
								<div className="pt-2">
									<a
										href={link}
										target="_blank"
										rel="noreferrer"
										className="inline-flex items-center gap-2 text-xs font-bold text-[#024ad8] hover:text-[#0e3191] transition-colors group">
										<div className="w-8 h-8 rounded-full bg-blue-50 dark:bg-blue-900/30 flex items-center justify-center group-hover:scale-110 transition-transform">
											<FaPlay className="text-[10px] ml-0.5" />
										</div>
										Ver Video Demostrativo
									</a>
								</div>
							)}
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
									},
								]}
							/>
							<button
								className="hp-btn-outline w-full flex items-center justify-center gap-2 !border-slate-200 dark:!border-slate-800 text-slate-500 hover:text-slate-900"
								onClick={handleClose}>
								<img src={close2Icon} className="w-4 h-4 opacity-50" alt="" />
								Cerrar Ventana
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
