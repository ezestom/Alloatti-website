export function Table({ data }) {
	return (
		<div className="relative overflow-x-auto shadow-md sm:rounded-lg my-2">
			<table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 ">
				<caption className="p-5 text-lg font-semibold text-left rtl:text-right text-gray-900 bg-white dark:text-white dark:bg-gray-800 ">
					La{" "}
					<strong className="underline underline-offset-3 decoration-4 decoration-blue-400 ">
						{data[0].modelo}{" "}
					</strong>{" "}
					es una máquina de producción de{" "}
					<strong className="underline underline-offset-3 decoration-4 decoration-blue-400">
						{data[0].producción_max}
					</strong>
					.
					<p className="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400">
						Características de la {data[0].modelo}, procesos,
						accesorios y construcción.
					</p>
				</caption>
				<thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
					<tr className="text-center">
						{Object.keys(data[0]).map((column, index) => (
							<th key={index} scope="col" className="px-6 py-3">
								{column}
							</th>
						))}
					</tr>
				</thead>
				<tbody>
					{data.map((row, index) => (
						<tr
							key={index}
							className={`bg-white border-b ${
								index % 2 === 0
									? "dark:bg-gray-800 dark:border-gray-700"
									: ""
							}`}>
							{Object.values(row).map((value, colIndex) => (
								<td
									key={colIndex}
									className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
									{value}
								</td>
							))}
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
}
