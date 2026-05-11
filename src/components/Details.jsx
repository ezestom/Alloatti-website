import PropTypes from "prop-types";
import { useEffect } from "react";

export function Details({ question, answer, name }) {
	// La función que garantiza que solo un detalle esté abierto a la vez
	const acordionOpenOnlyOne = () => {
		const detailsElements = document.querySelectorAll(`details[name="${name}"]`);
		detailsElements.forEach(($details) => {
			$details.addEventListener("toggle", (e) => {
				if ($details.open) {
					detailsElements.forEach(($otherDetails) => {
						if ($otherDetails !== $details && $otherDetails.open) {
							$otherDetails.removeAttribute("open");
						}
					});
				}
			});
		});
	};

	useEffect(() => {
		acordionOpenOnlyOne();
	}, [name]);

	return (
		<details
			name={name}
			className="group [&_summary::-webkit-details-marker]:hidden py-4 border-b border-slate-100 dark:border-slate-800 last:border-none">
			<summary className="flex cursor-pointer items-center justify-between gap-1.5 rounded-xl transition-all duration-300 hover:bg-slate-50 dark:hover:bg-slate-800/40 p-4">
				<h2 className="font-semibold text-slate-900 dark:text-slate-200 group-open:text-[#024ad8] dark:group-open:text-blue-400 transition-colors">
					{question}
				</h2>

				<div className="bg-slate-100 dark:bg-slate-800 p-1 rounded-full group-open:bg-blue-50 dark:group-open:bg-blue-900/30 transition-colors">
					<svg
						className="h-4 w-4 shrink-0 transition duration-300 group-open:-rotate-180 text-slate-500 group-open:text-[#024ad8]"
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor">
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="2.5"
							d="M19 9l-7 7-7-7"
						/>
					</svg>
				</div>
			</summary>

			<div className="mt-4 px-6 overflow-hidden transition-all duration-500">
				<p className="leading-relaxed text-slate-600 dark:text-slate-400 text-sm md:text-base border-l-2 border-slate-200 dark:border-slate-700 pl-6 py-2">
					{answer}
				</p>
			</div>
		</details>
	);
}

Details.propTypes = {
	question: PropTypes.string.isRequired,
	answer: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
};
