import { useState } from "react";
import { createPortal } from "react-dom";
import close from "../../icons/x.svg";
import "./BlurVideo.css";

export function BlurVideo({ urlYoutube, video }) {
	const [isOpen, setIsOpen] = useState(false);

	const openDialog = () => {
		setIsOpen(true);
		document.body.style.overflow = "hidden";
	};
	const closeDialog = () => {
		setIsOpen(false);
		document.body.style.overflow = "auto";
	};

	return (
		<div 
			className="relative overflow-hidden rounded-2xl group cursor-pointer shadow-xl w-full bg-slate-100 dark:bg-zinc-950 transition-all duration-500 border border-slate-200/50 dark:border-slate-800/80"
			onClick={openDialog}
		>
			{/* Looping Preview Video */}
			<video
				className="w-full object-cover aspect-video transition-transform duration-700 ease-out group-hover:scale-[1.03] app-video-scroll"
				src={video}
				loop
				muted
				autoPlay
				playsInline
			/>

			{/* Cinematic Dark/Gradient Overlay */}
			<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent group-hover:from-black/70 group-hover:via-black/20 transition-all duration-500" />

			{/* Interactive Glowing Play Button in Center */}
			<div className="absolute inset-0 flex items-center justify-center">
				<div className="relative flex items-center justify-center">
					{/* Pulsing ring */}
					<div className="absolute -inset-4 rounded-full border border-white/30 animate-pulse-slow group-hover:border-[#024ad8]/40 group-hover:scale-110 transition-all duration-500" />
					
					{/* Play Button Circle */}
					<div className="relative flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-full bg-white/10 dark:bg-black/20 backdrop-blur-md border border-white/30 text-white shadow-[0_8px_32px_rgba(0,0,0,0.3)] group-hover:bg-[#024ad8] group-hover:border-[#024ad8] group-hover:shadow-[0_0_30px_rgba(2,74,216,0.5)] group-hover:scale-110 transition-all duration-500">
						{/* SVG Play Icon */}
						<svg
							className="w-6 h-6 md:w-8 md:h-8 text-white fill-current translate-x-0.5 transition-transform duration-300 group-hover:scale-110"
							viewBox="0 0 24 24"
						>
							<path d="M8 5v14l11-7z" />
						</svg>
					</div>
				</div>
			</div>

			{/* Top Left Tag: Video Demonstration */}
			<div className="absolute top-4 left-4 flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/40 backdrop-blur-md border border-white/10">
				<span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
				<span className="text-[10px] font-bold text-white uppercase tracking-wider">
					En Acción
				</span>
			</div>

			{/* Bottom Controls / UX Guidance Bar */}
			<div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white/90">
				<div className="flex flex-col text-left">
					<span className="text-xs md:text-sm font-extrabold tracking-wide uppercase drop-shadow-md">
						Ver Video Completo
					</span>
					<span className="text-[10px] font-semibold text-white/60 drop-shadow-md">
						Demostración en alta definición
					</span>
				</div>
				
				<div className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-black/40 backdrop-blur-md border border-white/5 text-[9px] font-bold tracking-wider uppercase text-white/80">
					<svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
						<path strokeLinecap="round" strokeLinejoin="round" d="M17.25 9.75L19.5 12m0 0l2.25 2.25M19.5 12l2.25-2.25M19.5 12l-2.25 2.25m-10.5-6L4.5 9H1.5v6h3l4.5 3.75V3.75z" />
					</svg>
					Sin Sonido
				</div>
			</div>

			{/* Lightbox / Video Modal Portal */}
			{isOpen && createPortal(
				<div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 md:p-12 overflow-hidden">
					{/* Backdrop with Glassmorphism */}
					<div 
						className="absolute inset-0 bg-slate-950/90 backdrop-blur-md animate-fade-in"
						onClick={(e) => {
							e.stopPropagation();
							closeDialog();
						}}
					/>
					
					{/* Modal Content */}
					<div 
						className="relative w-full max-w-5xl aspect-video rounded-2xl md:rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.6)] border border-white/10 animate-scale-up z-10"
						onClick={(e) => e.stopPropagation()}
					>
						<iframe
							className="w-full h-full"
							src={urlYoutube}
							title="YouTube video player"
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
							allowFullScreen
						/>
						
						{/* Premium Close Button */}
						<button
							className="absolute top-4 right-4 md:top-6 md:right-6 p-2.5 md:p-3 bg-black/40 hover:bg-black/60 backdrop-blur-xl rounded-full transition-all duration-300 border border-white/20 group"
							onClick={(e) => {
								e.stopPropagation();
								closeDialog();
							}}
						>
							<img
								src={close}
								alt="close button"
								className="w-5 h-5 md:w-6 md:h-6 invert brightness-0 group-hover:rotate-90 transition-transform duration-300"
							/>
						</button>
					</div>
				</div>,
				document.body
			)}
		</div>
	);
}
