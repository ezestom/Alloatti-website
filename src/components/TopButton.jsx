export function TopButton() {
	const logoTurnTop = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	};
	return (
		<button
			onClick={logoTurnTop}
			type="button"
			className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg p-2 text-center inline-flex items-center mr-2 -rotate-90 ">
			<svg
				className="w-5 h-5"
				aria-hidden="true"
				fill="none"
				viewBox="0 0 14 10">
				<path
					stroke="currentColor"
					strokeWidth="1"
					d="M1 5h12m0 0L9 1m4 4L9 9"
				/>
			</svg>
		</button>
	);
}
