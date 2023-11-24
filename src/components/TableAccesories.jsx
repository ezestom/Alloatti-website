import { accesorios } from "../machines_info/accesorios";

export function TableAccesories() {
	const {
		sectionData1,
		sectionData2,
		sectionData3,
		sectionData4,
		sectionData5,
		sectionData6,
		sectionData7,
		sectionData8,
		sectionData9,
	} = accesorios;
	const sectionDataArray = [
		sectionData1,
		sectionData2,
		sectionData3,
		sectionData4,
		sectionData5,
		sectionData6,
		sectionData7,
		sectionData8,
		sectionData9,
	];

	return (
		<div className="overflow-x-auto overflow-auto my-20 px-1">
			<table className="w-full border-2 borde bg-white text-sm">
				<thead className="ltr:text-left rtl:text-right bg-blue-100">
					<tr>
						<th className="whitespace-nowrap px-4 py-4 font-bold uppercase  text-gray-900">
							Nombre
						</th>
						<th className="whitespace-nowrap px-4 py-2 font-bold uppercase  text-gray-900">
							Características
						</th>
						<th className="whitespace-nowrap px-4 py-2 font-bold uppercase  text-gray-900">
							Más Info
						</th>
					</tr>
				</thead>
				<tbody className="divide-y divide-gray-300 ltr:text-left rtl:text-right">
					{sectionDataArray.map((sectionData, index) => {
						return (
							<tr key={index}>
								<td className="flex-wrap px-1 py-2 bg-slate-50 text-gray-700">
									<strong className="text-md flex items-center justify-center">
										{sectionData[0].name}
									</strong>
								</td>
								<td className="flex-nowrap bg-gray-100 px-1 py-2 text-gray-700 text-center">
									{sectionData[0].carateristicas}
								</td>

								<td className="flex-nowrap px-4 py-2 text-center bg-gray-200">
									<a
										href="#"
										className="inline-block rounded bg-indigo-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700">
										Ver más
									</a>
								</td>
							</tr>
						);
					})}
				</tbody>
			</table>
		</div>
	);
}
