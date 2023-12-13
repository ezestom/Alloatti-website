import { Link } from "react-router-dom";

export function MachinesButtonsMobile() {
	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	};
	return (
		<span className="flex justify-around w-full absolute -top-9 left-0  border bg-white shadow-sm">
			<Link
				className="flex items-center px-2 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:relative gap-1 "
				onClick={scrollToTop}
				to="/bidones-retornables">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="1.25em"
					height="1.25em"
					viewBox="0 0 24 24">
					<path
						fill="currentColor"
						d="m7.45 17.45l-1.4-1.4L9.075 13H2v-2h7.075L6.05 7.95l1.4-1.4L12.9 12l-5.45 5.45ZM13 17v-2h9v2h-9Zm0-8V7h9v2h-9Zm3 4v-2h6v2h-6Z"
					/>
				</svg>
				Retornables
			</Link>

			<Link
				className="flex items-center px-2 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:relative gap-1"
				onClick={scrollToTop}
				to="/bidones-descartables">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="1.25em"
					height="1.25em"
					viewBox="0 0 24 24">
					<path
						fill="currentColor"
						d="m7.45 17.45l-1.4-1.4L9.075 13H2v-2h7.075L6.05 7.95l1.4-1.4L12.9 12l-5.45 5.45ZM13 17v-2h9v2h-9Zm0-8V7h9v2h-9Zm3 4v-2h6v2h-6Z"
					/>
				</svg>
				Descartables
			</Link>

			<Link
				className="flex items-center px-2 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:relative gap-1"
				onClick={scrollToTop}
				to="/accesorios">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="1.25em"
					height="1.25em"
					viewBox="0 0 24 24">
					<path
						fill="currentColor"
						d="m7.45 17.45l-1.4-1.4L9.075 13H2v-2h7.075L6.05 7.95l1.4-1.4L12.9 12l-5.45 5.45ZM13 17v-2h9v2h-9Zm0-8V7h9v2h-9Zm3 4v-2h6v2h-6Z"
					/>
				</svg>
				Accesorios
			</Link>
		</span>
	);
}
