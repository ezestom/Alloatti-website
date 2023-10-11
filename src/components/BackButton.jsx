export function BackButton() {
	function handleClick() {
		window.history.back();
	}
	return (
		<button
			className="inline-flex items-center gap-2 rounded-lg  bg-white px-8 py-2 text-gray-800 shadow-md transition-all hover:bg-gray-900 hover:text-white focus:outline-none focus:ring focus:ring-indigo-600 focus:ring-opacity-50 active:	bg-gray-100/90"
			onClick={handleClick}>
			{" "}
			volver atrás
		</button>
	);
}
