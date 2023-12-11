import  { useEffect, useState } from "react";

export function Details({ question, answer, name }) {
	// Utilizamos un estado local para almacenar el estado de apertura del detalle
	const [isOpen, setIsOpen] = useState(false);

	// La función que maneja el cambio de estado de apertura
	const handleToggle = () => {
		setIsOpen(!isOpen);
	};

	// La función que garantiza que solo un detalle esté abierto a la vez
	const acordionOpenOnlyOne = () => {
		document.querySelectorAll("details[name]").forEach(($details) => {
			$details.addEventListener("toggle", (e) => {
				const name = $details.getAttribute("name");

				if (e.newState === "open") {
					document
						.querySelectorAll(`details[name="${name}"][open]`)
						.forEach(($openDetails) => {
							if (!($openDetails === $details)) {
								$openDetails.removeAttribute("open");
							}
						});
				}
			});
		});
	};

	// Efecto de montaje para configurar el listener una vez que el componente está montado
	useEffect(() => {
		acordionOpenOnlyOne();
		return () => {
			// Limpiar el listener cuando el componente se desmonte para evitar posibles fugas de memoria
			document.querySelectorAll("details[name]").forEach(($details) => {
				$details.removeEventListener("toggle", handleToggle);
			});
		};
	}, []);

	return (
		<>
			<details
				name={name}
				className="group [&_summary::-webkit-details-marker]:hidden my-2">
				<summary className="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-gray-50 p-4 text-gray-900">
					<h2 className="font-medium">{question}</h2>

					<svg
						className=" h-5 w-5 shrink-0 transition duration-300 group-open:-rotate-180"
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor">
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="2"
							d="M19 9l-7 7-7-7"
						/>
					</svg>
				</summary>

				<p className="mt-4 px-4 leading-relaxed text-gray-700">
					{answer}
				</p>
			</details>
		</>
	);
}
