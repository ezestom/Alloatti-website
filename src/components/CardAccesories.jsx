import { useState } from "react";
import { OpenEmail } from "./OpenEmail";
import close from "../icons/close.png";
import close2 from "../icons/close2.png";

export function CardAccesories({
	model,
	img,
	onClose,
	production_max,
	washing_time,
	size,
	accesories,
	build,
}) {
	const [isShow, setIsShow] = useState(true);

	const handleClose = () => {
		setIsShow(false);
		onClose();
	};
	return (
		<div>
			{isShow && (
				<div
					id="card"
					className="w-screen h-screen fixed top-0 left-0 backdrop-blur-sm bg-black/30 z-20">
					<aside className="absolute right-0 left-0 m-auto top-0 bottom-0  bg-white border border-gray-200 rounded-lg shadow md:flex-row  sm:max-w-[95vw] lg:max-w-[60%] max-h-[90%] ">
						<img
							className="rounded-b-none max-h-[60%] object-contain w-full rounded-t-lg"
							src={img}
							alt={model}
						/>
						<button
							className="absolute top-0 right-0 bg-white rounded-md rounded-br-none  rounded-tl-none  p-1 hover:bg-gray-200 hover:cursor-pointer"
							onClick={handleClose}>
							<img src={close} alt="close-icon" />
						</button>
						<div className="flex flex-col items-center w-full  p-2 overflow-y-auto  ">
							<div className="overflow-x-auto rounded-lg border border-gray-200 w-full">
								<table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
									<thead className=" flex-auto-row">
										<tr>
											<th className="  p-2 font-bold uppercase underline underline-offset-4 decoration-blue-400 bg-gray-100 text-center text-gray-900">
												Modelo
											</th>
											<th className="  p-2 font-bold uppercase underline underline-offset-4 decoration-blue-400  bg-gray-100 text-center text-gray-900">
												Producción máxima
											</th>
											<th className="  p-2 font-bold uppercase underline underline-offset-4 decoration-blue-400  bg-gray-100 text-center text-gray-900">
												Tiempo de lavado
											</th>
										</tr>
									</thead>
									<tbody className="divide-y divide-gray-200">
										<tr>
											<td className="  p-2 text-center font-semibold  text-gray-500">
												{model}
											</td>
											<td className="  p-2 text-center font-semibold  text-gray-500">
												{production_max}
											</td>
											<td className="  p-2 text-center font-semibold  text-gray-500">
												{washing_time}
											</td>
										</tr>
									</tbody>

									<thead className="ltr:text-left rtl:text-right">
										<tr>
											<th className="  p-2 font-bold uppercase underline underline-offset-4 decoration-blue-400  bg-gray-100 text-center text-gray-900">
												Construida
											</th>
											<th className="  p-2 font-bold uppercase underline underline-offset-4 decoration-blue-400  bg-gray-100 text-center text-gray-900">
												Dimensiones
											</th>
											<th className="  p-2 font-bold uppercase underline underline-offset-4 decoration-blue-400  bg-gray-100 text-center text-gray-900">
												Accesorios
											</th>
										</tr>
									</thead>

									<tbody className="divide-y divide-gray-200">
										<tr>
											<td className="  p-2 text-center font-semibold  text-gray-500">
												{build}
											</td>
											<td className="  p-2 text-center font-semibold  text-gray-500">
												{size}
											</td>
											<td className="  p-2 text-center font-semibold  text-gray-500">
												{accesories}
											</td>
										</tr>
									</tbody>
								</table>
							</div>
							<div className="w-full absolute bottom-0 rounded-lg">
								<OpenEmail
									data={
										[
											{
												modelo: model,
												producción_max: production_max,
											},
										] || []
									}
								/>
								<button
									className="bg-gray-400 hover:bg-gray-500 text-white font-bold py-1 px-4  w-full text-lg rounded-lg rounded-t-none"
									id="close-dialog"
									onClick={handleClose}>
									<span className="flex items-center justify-center gap-1 font-nomal">
										<img src={close2} alt=" close-icon" />{" "}
										Cerrar ventana
									</span>
								</button>
							</div>
						</div>
					</aside>
				</div>
			)}
		</div>
	);
}
