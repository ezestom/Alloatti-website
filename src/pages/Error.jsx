export function Error() {
	function handleClick() {
		window.history.back();
	}
	return (
		<div>
			<div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
				<div className="text-gray-900 text-6xl font-bold">404</div>
				<div className="text-gray-600 text-xl m-4">
					Página no encontrada
				</div>
				{/* Puedes agregar aquí un botón o enlaces para redirigir */}
				<button
					className="inline-flex items-center gap-2 rounded-lg  bg-white px-8 py-2 text-gray-800 shadow-md transition-all hover:bg-gray-900 hover:text-white focus:outline-none focus:ring focus:ring-indigo-600 focus:ring-opacity-50 active:	bg-gray-100/90"
					onClick={handleClick}>
					{" "}
					volver atrás
				</button>
			</div>
		</div>
	);
}
