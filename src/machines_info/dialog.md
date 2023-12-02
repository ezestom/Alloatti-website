			<dialog
				id="dialog"
				className="z-50 w-full h-full sm:max-w-[100%]  md:max-w-[85vw] max-h-[85vh] m-auto rounded-lg shadow-lg">
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
							<OpenEmail data={data}
							/>
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