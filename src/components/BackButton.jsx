export function BackButton() {
	function handleClick() {
		window.history.back();
	}
	return (
		<button
			className="nline-flex justify-center items-center py-2.5 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300"
			onClick={handleClick}>
			{" <-"}
			Volver atrás
		</button>
	);
}
