import { useState } from "react";
import machine from "../img/gallon-water.jpg";
import { OpenEmail } from "./OpenEmail";

export function Table({ data }) {
	const [selectedMachine, setSelectedMachine] = useState({});

	const openDialog = (id) => {
		// Aquí debes asegurarte de que el ID que obtienes es el correcto.
		console.log("Clicked Machine ID:", id);

		// Utilizamos find para obtener la máquina correspondiente al ID.
		const selectedMachineData = Object.values(data)
			.flat()
			.find((machine) => machine.id === id);

		// Aquí deberías ver la información de la máquina clickeada.
		console.log("Selected Machine Data:", selectedMachineData);
		console.log("Selected Machine Data:", selectedMachineData?.modelo);

		// Si la máquina existe, la guardamos en el estado.
		if (selectedMachineData) {
			setSelectedMachine(selectedMachineData);
			console.log("Selected Machine:", selectedMachine);

			// Mostramos el diálogo.
			const dialog = document.getElementById("dialog");
			dialog.showModal({ mode: "modal" });
		}
	};
	const closeDialog = () => {
		setSelectedMachine(null);
		const dialog = document.getElementById("dialog");
		dialog.close();
	};

	return (
		<div className=" overflow-x-auto shadow-md rounded-lg my-10 border-2 border-blue-400 table-container">
			<table className="w-full text-sm text-left rtl:text-right text-gray-500 overflow-x-auto relative ">
				<caption
					onClick={() => openDialog(data[0]?.id)}
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
						className="absolute top-5 right-5  bg-blue-50 rounded-lg p-2"
						width="50"
						height="50"
						viewBox="0 0 24 24">
						<path
							fill="#303030"
							d="M5 21q-.825 0-1.413-.588T3 19V5q0-.825.588-1.413T5 3h6q.425 0 .713.288T12 4q0 .425-.288.713T11 5H5v14h14v-6q0-.425.288-.713T20 12q.425 0 .713.288T21 13v6q0 .825-.588 1.413T19 21H5ZM19 6.4L10.4 15q-.275.275-.7.275T9 15q-.275-.275-.275-.7T9 13.6L17.6 5H15q-.425 0-.713-.288T14 4q0-.425.288-.713T15 3h6v6q0 .425-.288.713T20 10q-.425 0-.713-.288T19 9V6.4Z"
						/>
					</svg>
				</caption>
				<thead className="text-xs text-blue-700 uppercase bg-gray-50 ">
					<tr className="">
						{Object.keys(data[0]).map((column, index) => (
							<th
								key={index}
								scope="col"
								className="px-1 py-3 text-center">
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
									className="px-2 text-center py-4  text-blue-900 font-bold whitespace-nowrap bg-blue-50 ">
									{value}
								</td>
							))}
						</tr>
					))}
				</tbody>
			</table>

			{/* Dialog */}

			<dialog
				id="dialog"
				className="z-50 w-full h-full sm:max-w-[100%]  md:max-w-[85vw] max-h-[85vh] m-auto rounded-lg shadow-lg border-4  border-blue-400 ">
				<div className="flex flex-col justify-center items-center ">
					<div
						id="open-dialog"
						className="p-5 text-lg font-semibold text-left rtl:text-right text-gray-900 bg-white w-full relative ">
						La{" "}
						<strong className="underline underline-offset-3 decoration-4 decoration-blue-400 ">
							{selectedMachine?.modelo
								? selectedMachine?.modelo
								: "En revisión"}{" "}
						</strong>{" "}
						es una máquina de producción de{" "}
						<strong className="underline underline-offset-3 decoration-4 decoration-blue-400">
							{selectedMachine?.producción_max
								? selectedMachine?.producción_max
								: "En revisión"}
						</strong>
						<p className="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400">
							Características de la{" "}
							{selectedMachine?.modelo
								? selectedMachine?.modelo
								: "En revisión"}
							, procesos, accesorios y construcción.
						</p>
						<span
							className="absolute right-3 top-3 text-2xl hover:cursor-pointer  hover:bg-gray-200 p-1 rounded-lg"
							onClick={closeDialog}>
							✖️
						</span>
					</div>
					<thead className="text-xs uppercase  bg-gray-50 dark:text-gray-400 w-full ">
						<tr className="border-b w-full flex justify-between text-center px-1 bg-gray-50 ">
							{Object.keys(data[0]).map((column, index) => (
								<th
									key={index}
									scope="col"
									className="py-5 w-24 font-medium text-gray-900 overflow-x-auto w-full ">
									{column}
								</th>
							))}
						</tr>
					</thead>
					<div className="w-full">
						{data.map((row, index) => (
							<tr
								key={index}
								className=" border-b w-full flex justify-between text-center px-1 bg-blue-50">
								{Object.values(row).map((value, colIndex) => (
									<td
										key={colIndex}
										className="py-5 w-24 font-medium text-gray-900 overflow-x-auto w-full">
										{value}
									</td>
								))}
							</tr>
						))}
					</div>
					<picture className="w-full h-full flex flex-col justify-center items-center   ">
						<img
							src={machine}
							alt="máquina envasadora "
							className="object-cover h-full w-full"
						/>
						<div className="h-full  w-full sticky bottom-0">
							<OpenEmail data={data} />
							<button
								className="bg-gray-400 hover:bg-gray-500 text-white font-bold py-1 px-4  w-full text-lg"
								id="close-dialog"
								onClick={closeDialog}>
								✖️ Cerrar ventana
							</button>
						</div>
					</picture>
				</div>
			</dialog>
		</div>
	);
}
