import machine from "../img/gallon-water.jpg";
import { CardMachines } from "./CardMachines";
import { useState } from "react";

export function Table({ data }) {
	const [selectedBidones, setSelectedBidones] = useState(null);

	const handleOpen = (bidones) => {
		setSelectedBidones(bidones);
		document.body.style.overflow = "hidden";
	};

	const dataSinUltimaColumna = data.map((row) => {
		const copiaRow = { ...row };
		const ultimaClave = Object.keys(copiaRow).pop();
		delete copiaRow[ultimaClave];
		return copiaRow;
	});

	return (
		<div className=" overflow-x-auto  rounded-lg my-10 border-2 border-gray-200  ">
			<table className="w-full text-sm text-left rtl:text-right text-gray-500 overflow-x-auto relative ">
				<caption
					onClick={() => handleOpen(data[0])}
					id="open-dialog"
					className="p-5 text-lg font-semibold text-left rtl:text-right text-gray-900 bg-white hover:bg-blue-200 cursor-pointer  ">
					La{" "}
					<strong className="underline underline-offset-3 decoration-4 decoration-blue-400 ">
						{data[0]?.modelo}{" "}
					</strong>{" "}
					es una máquina de producción de{" "}
					<strong className="underline underline-offset-3 decoration-4 decoration-blue-400">
						{data[0]?.producción_max}
					</strong>
					<p className="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400">
						Características de la {data[0]?.modelo}, procesos,
						accesorios y construcción.
					</p>
					<svg
						className="absolute top-0 right-0 border-1 bg-blue-50 rounded-md p-1"
						width="40"
						height="40"
						viewBox="0 0 24 24">
						<path
							fill="#303030"
							d="M5 21q-.825 0-1.413-.588T3 19V5q0-.825.588-1.413T5 3h6q.425 0 .713.288T12 4q0 .425-.288.713T11 5H5v14h14v-6q0-.425.288-.713T20 12q.425 0 .713.288T21 13v6q0 .825-.588 1.413T19 21H5ZM19 6.4L10.4 15q-.275.275-.7.275T9 15q-.275-.275-.275-.7T9 13.6L17.6 5H15q-.425 0-.713-.288T14 4q0-.425.288-.713T15 3h6v6q0 .425-.288.713T20 10q-.425 0-.713-.288T19 9V6.4Z"
						/>
					</svg>
				</caption>
				<thead className="text-xs text-gray-900 uppercase bg-gray-50 ">
					<tr className="">
						{Object.keys(data[0]).map((column, index) => (
							<th
								key={index}
								scope="col"
								className={`px-1 py-3 text-center ${
									index === Object.keys(data[0]).length - 1
										? "hidden"
										: "" // Oculta la última columna
								}`}>
								{column}
							</th>
						))}
					</tr>
				</thead>
				<tbody>
					{data.map((row, index) => (
						<tr key={index} className="bg-gray-100 border-b">
							{Object.values(row).map((value, colIndex) => (
								<td
									key={colIndex}
									className={`px-2 text-center py-4 text-blue-900 font-bold whitespace-nowrap bg-blue-50 ${
										colIndex === Object.keys(row).length - 1
											? "hidden"
											: "" // Oculta la última columna
									}`}>
									{value}
								</td>
							))}
						</tr>
					))}
				</tbody>
			</table>

			{selectedBidones && (
				<div>
					<CardMachines
						img={machine}
						model={selectedBidones.modelo}
						production_max={selectedBidones.producción_max}
						washing_time={selectedBidones.tiempo_lavado}
						build={selectedBidones.construida}
						size={selectedBidones.dimensiones}
						accesories={selectedBidones.accesorios}
						description={selectedBidones.description}
						isOpen={true}
						onClose={() => setSelectedBidones(null)}
					/>
				</div>
			)}
		</div>
	);
}
