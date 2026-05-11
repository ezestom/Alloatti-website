import { useState } from "react";
import { createPortal } from "react-dom";
import youtube from "../../img/youtube.png";
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
		<article className="relative">
			<video
				className="rounded-lg app-video w-full object-cover aspect-video"
				src={video}
				loop
				muted
				autoPlay></video>
			<button onClick={openDialog}>
				<img
					src={youtube}
					className="absolute top-0 bottom-0 left-0 right-0 m-auto w-22 youtube"
					alt="logo youtube"
				/>
			</button>
			
			{isOpen && createPortal(
				<div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 md:p-12 overflow-hidden">
					{/* Backdrop with Glassmorphism */}
					<div 
						className="absolute inset-0 bg-slate-900/95 backdrop-blur-md animate-hp-fade"
						onClick={closeDialog}
					></div>
					
					{/* Modal Content */}
					<div className="relative w-full max-w-5xl aspect-video rounded-3xl overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)] border border-white/10 animate-hp-fade z-10">
						<iframe
							className="w-full h-full"
							src={urlYoutube}
							title="YouTube video player"
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
							allowFullScreen></iframe>
						
						{/* Premium Close Button */}
						<button
							className="absolute top-6 right-6 p-3 bg-black/40 hover:bg-black/60 backdrop-blur-xl rounded-full transition-all duration-300 border border-white/20 group"
							onClick={closeDialog}>
							<img
								src={close}
								alt="close button"
								className="w-6 h-6 invert brightness-0 group-hover:rotate-90 transition-transform duration-300"
							/>
						</button>
					</div>
				</div>,
				document.body
			)}
		</article>
	);
}
