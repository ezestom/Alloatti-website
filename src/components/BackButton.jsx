export function BackButton() {
	function handleClick() {
		window.history.back();
	}
	return (
		<button
			className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg p-2 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 rotate-180"
			onClick={handleClick}>
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
