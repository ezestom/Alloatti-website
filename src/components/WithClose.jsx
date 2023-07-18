import { useState } from "react";
import { IoLogoWhatsapp } from "react-icons/io5";

export function WithClose() {
	const [showBar, setShowBar] = useState(true);

	return (
		showBar && (
			<div className="flex items-center justify-between gap-4 bg-indigo-400 px-4 py-1 text-white ">
				<p className="text-sm font-medium flex gap-2">
					No dejes pasar esta oportunidad!{" "}
					<a
						href="https://api.whatsapp.com/send?phone=NUMERO_DE_TELEFONO"
						target="_blank"
						rel="noopener noreferrer"
						className="underline flex items-center gap-1">
						Contáctanos por Whatsapp para asesorarte{" "}
						<IoLogoWhatsapp />
					</a>
				</p>

				<button
					aria-label="Dismiss"
					className="shrink-0 rounded-lg bg-black/10 p-1 transition hover:bg-black/20"
					onClick={() => setShowBar(false)}>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="h-5 w-5"
						viewBox="0 0 20 20"
						fill="currentColor">
						<path
							fillRule="evenodd"
							d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
							clipRule="evenodd"
						/>
					</svg>
				</button>
			</div>
		)
	);
}
