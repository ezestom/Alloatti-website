import { useState } from "react";
import youtube from "../../img/youtube.png";
import close from "../../icons/x.svg";
import "./BlurVideo.css";

export function BlurVideo({ urlYoutube, video }) {
	const [isOpen, setIsOpen] = useState(false);

	const openDialog = () => {
		setIsOpen(true);
		// stop scroll
		document.body.style.overflow = "hidden";
	};
	const closeDialog = () => {
		setIsOpen(false);
		// enable scroll
		document.body.style.overflow = "auto";
	};

	return (
		<article className=" relative">
			<video
				className="rounded-lg app-video w-full  object-cover aspect-video "
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
			{isOpen && (
				<dialog open className="z-30 w-screen h-screen m-auto  fixed">
					<iframe
						className="m-auto  w-[50%] aspect-video rounded-lg shadow-2xl"
						src={urlYoutube}
						title="YouTube video player"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
						allowFullScreen></iframe>

					<button
						className="fixed top-5 right-5 bg-red z-40"
						onClick={closeDialog}>
						<img
							src={close}
							alt="close button"
							className="close-button"
						/>
					</button>
				</dialog>
			)}
		</article>
	);
}
