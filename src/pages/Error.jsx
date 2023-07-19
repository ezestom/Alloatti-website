export function Error() {
	function handleClick() {
		window.history.back();
	}
	return (
		<div>
			<div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
				<div className="text-blue-900 text-6xl font-bold">Error</div>
				<div className="text-gray-600 text-xl mt-4">
					Oops! La página que estás buscando no fue encontrada.
				</div>
				{/* Puedes agregar aquí un botón o enlaces para redirigir */}
				<button
					className="inline-flex items-center gap-2 rounded-lg border border-white bg-white px-8 py-3 text-blue-800 shadow-md transition-all hover:bg-blue-900 hover:text-white focus:outline-none focus:ring focus:ring-indigo-600 focus:ring-opacity-50 active:bg-white/90"
					onClick={handleClick}>
					{" "}
					volver atrás
				</button>
			</div>
		</div>
	);
}
