import { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FaTimes, FaVolumeMute, FaVolumeUp } from "react-icons/fa";
import welcomeVideo from "../videos/video_welcome_alloatti_2.mp4";

const STORAGE_KEY = "alloatti_welcome_video_seen";

export function WelcomeVideoModal() {
	const [isOpen, setIsOpen] = useState(() => {
		if (typeof window === "undefined") return false;
		try {
			return localStorage.getItem(STORAGE_KEY) !== "true";
		} catch (error) {
			console.warn("No se pudo acceder a localStorage:", error);
			return false;
		}
	});
	const [isMuted, setIsMuted] = useState(true);
	const videoRef = useRef(null);
	const progressBarRef = useRef(null);

	// Lock body scroll while the video is open
	useEffect(() => {
		if (isOpen) {
			const previousOverflow = document.body.style.overflow;
			document.body.style.overflow = "hidden";
			return () => {
				document.body.style.overflow = previousOverflow || "auto";
			};
		}
	}, [isOpen]);

	// Auto-play when open
	useEffect(() => {
		if (isOpen && videoRef.current) {
			const playPromise = videoRef.current.play();
			if (playPromise !== undefined) {
				playPromise.catch(() => {
					// Autoplay fallback (ensure muted)
					if (videoRef.current) {
						videoRef.current.muted = true;
						setIsMuted(true);
						videoRef.current.play().catch(() => {});
					}
				});
			}
		}
	}, [isOpen]);

	// Smooth 60fps progress bar animation via requestAnimationFrame
	useEffect(() => {
		if (!isOpen) return;

		let animationFrameId;

		const loop = () => {
			const video = videoRef.current;
			const bar = progressBarRef.current;

			if (video && bar && video.duration > 0) {
				const ratio = Math.min(Math.max(video.currentTime / video.duration, 0), 1);
				bar.style.transform = `scaleX(${ratio})`;
			}

			if (video && !video.ended) {
				animationFrameId = requestAnimationFrame(loop);
			}
		};

		animationFrameId = requestAnimationFrame(loop);

		return () => {
			if (animationFrameId) {
				cancelAnimationFrame(animationFrameId);
			}
		};
	}, [isOpen]);

	const handleClose = () => {
		setIsOpen(false);
		try {
			localStorage.setItem(STORAGE_KEY, "true");
		} catch (error) {
			console.warn("No se pudo guardar en localStorage:", error);
		}
	};

	const toggleMute = (e) => {
		e.stopPropagation();
		if (videoRef.current) {
			const newMuted = !videoRef.current.muted;
			videoRef.current.muted = newMuted;
			setIsMuted(newMuted);
		}
	};

	if (typeof document === "undefined") return null;

	return createPortal(
		<AnimatePresence initial={false}>
			{isOpen && (
				<motion.div
					key="welcome-video-backdrop"
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ 
						opacity: 0,
						transition: { duration: 0.45, ease: "easeInOut" }
					}}
					className="fixed inset-0 z-[99999] flex items-center justify-center p-4 sm:p-6 md:p-8 bg-black/75 backdrop-blur-xl overflow-hidden"
					onClick={handleClose}
				>
					{/* Modal card - keeps natural size without maximizing */}
					<motion.div
						key="welcome-video-card"
						initial={{ opacity: 0, scale: 0.92, y: 20 }}
						animate={{ 
							opacity: 1, 
							scale: 1, 
							y: 0,
							transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] } 
						}}
						exit={{ 
							opacity: 0, 
							scale: 0.94, 
							y: 15,
							transition: { duration: 0.35, ease: [0.16, 1, 0.3, 1] } 
						}}
						onClick={(e) => e.stopPropagation()}
						className="relative w-full max-w-xl md:max-w-2xl lg:max-w-3xl rounded-2xl md:rounded-3xl overflow-hidden bg-zinc-950 border border-white/20 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.85)] flex flex-col group select-none"
					>
						{/* Top bar with Controls */}
						<div className="absolute top-3 left-3 right-3 sm:top-4 sm:left-4 sm:right-4 z-20 flex items-center justify-between pointer-events-none">
							{/* Welcome Badge */}
							<div className="pointer-events-auto flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/50 backdrop-blur-md border border-white/10 text-white shadow-md">
								<span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
								<span className="text-[11px] font-semibold tracking-wider uppercase text-white/90">
									Bienvenido a Alloatti
								</span>
							</div>

							{/* Actions: Sound & Skip Button */}
							<div className="pointer-events-auto flex items-center gap-2">
								<button
									type="button"
									onClick={toggleMute}
									aria-label={isMuted ? "Activar sonido" : "Silenciar"}
									className="p-2 sm:px-3 sm:py-1.5 rounded-full bg-black/50 hover:bg-black/70 backdrop-blur-md border border-white/15 text-white/90 hover:text-white transition-all duration-200 flex items-center gap-1.5 text-xs font-medium shadow-md"
								>
									{isMuted ? (
										<>
											<FaVolumeMute className="text-sm text-red-400" />
											<span className="hidden sm:inline text-[11px]">Activar Audio</span>
										</>
									) : (
										<>
											<FaVolumeUp className="text-sm text-blue-400" />
											<span className="hidden sm:inline text-[11px]">Silenciar</span>
										</>
									)}
								</button>

								<button
									type="button"
									onClick={handleClose}
									aria-label="Cerrar video"
									className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/50 hover:bg-red-500/80 backdrop-blur-md border border-white/15 hover:border-red-400 text-white/90 hover:text-white transition-all duration-200 text-xs font-medium shadow-md group/close"
								>
									<span>Omitir</span>
									<FaTimes className="text-xs group-hover/close:rotate-90 transition-transform duration-200" />
								</button>
							</div>
						</div>

						{/* Video element - maintaining natural size and contained */}
						<div className="relative w-full aspect-video flex items-center justify-center bg-black">
							<video
								ref={videoRef}
								src={welcomeVideo}
								autoPlay
								playsInline
								muted={isMuted}
								onEnded={handleClose}
								className="w-full h-full object-contain"
							/>
						</div>

						{/* Bottom progress bar - 100% fluid, continuous GPU-accelerated motion */}
						<div className="w-full h-1 bg-white/10 relative overflow-hidden">
							<div
								ref={progressBarRef}
								className="h-full w-full bg-gradient-to-r from-blue-500 to-cyan-400 origin-left will-change-transform"
								style={{ transform: "scaleX(0)" }}
							/>
						</div>
					</motion.div>
				</motion.div>
			)}
		</AnimatePresence>,
		document.body
	);
}
