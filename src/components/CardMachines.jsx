import { useState } from "react";
import { OpenEmail } from "./OpenEmail";
import close from "../icons/close.png";
import close2 from "../icons/close2.png";


export function CardMachines({
	model,
	img,
	onClose,
	production_max,
	washing_time,
	size,
	accesories,
	build,
	description,
}) {
	const [isShow, setIsShow] = useState(true);

	const handleClose = () => {
		setIsShow(false);
		document.body.style.overflow = "auto";
		onClose();
	};
	return (
		<div>
			{isShow && (
				<div
					id="card"
					className="w-screen h-screen fixed top-0 left-0 backdrop-blur-sm bg-black/30 z-30">
					<aside className="absolute right-0 left-0 m-auto top-0 bottom-0  bg-white border border-gray-200 rounded-lg shadow md:flex-row  sm:max-w-[95vw] lg:max-w-[60%] max-h-[98vh] p-2">
						<img
							className="max-h-[50%] rounded-md object-cover w-full h-auto"
							src={img}
							alt={model}
						/>
						<button
							className="absolute top-0 right-0 bg-white rounded-md rounded-br-none  rounded-tl-none  p-1 hover:bg-gray-200 hover:cursor-pointer"
							onClick={handleClose}>
							<img src={close} alt="close-icon" />
						</button>
						<div className="flex flex-col items-center w-full overflow-y-auto mt-2 ">
							<div className="overflow-x-auto rounded-lg border border-gray-200 w-full">
								<table className="w-full divide-y-2 divide-gray-200 bg-white text-sm flex flex-col ">
									<article className="flex  divide-y divide-gray-200">
										<p className=" w-full p-1 font-bold uppercase underline underline-offset-4 decoration-blue-400 bg-gray-100 text-center text-gray-900 ">
											Modelo
										</p>
										<p className=" w-full p-1 font-bold uppercase underline underline-offset-4 decoration-blue-400  bg-gray-100 text-center text-gray-900 ">
											Producción máxima
										</p>
										<p className=" w-full p-1 font-bold uppercase underline underline-offset-4 decoration-blue-400  bg-gray-100 text-center text-gray-900 ">
											Tiempo de enjuague
										</p>
									</article>

									<article className="flex  divide-y divide-gray-200">
										<p className=" w-full p-1 text-center font-semibold  text-gray-500">
											{model}
										</p>
										<p className=" w-full p-1 text-center font-semibold  text-gray-500">
											{production_max}
										</p>
										<p className=" w-full p-1 text-center font-semibold  text-gray-500">
											{washing_time}
										</p>
									</article>

									<article className=" flex  divide-y divide-gray-200">
										<p className=" w-full p-1 font-bold uppercase underline underline-offset-4 decoration-blue-400  bg-gray-100 text-center text-gray-900">
											Construida
										</p>
										<p className=" w-full p-1 font-bold uppercase underline underline-offset-4 decoration-blue-400  bg-gray-100 text-center text-gray-900">
											Dimensiones
										</p>
										<p className=" w-full p-1 font-bold uppercase underline underline-offset-4 decoration-blue-400  bg-gray-100 text-center text-gray-900">
											Accesorios
										</p>
									</article>

									<article className=" flex divide-y divide-gray-200">
										<p className=" w-full p-1 text-center font-semibold  text-gray-500">
											{build}
										</p>
										<p className=" w-full p-1 text-center font-semibold  text-gray-500">
											{size}
										</p>
										<p className=" w-full p-1 text-center font-semibold  text-gray-500">
											{accesories}
										</p>
									</article>
								</table>
								<aside className="w-full grid items-center divide-y divide-gray-200 ">
									<article className="w-full  p-1 font-bold uppercase underline underline-offset-4 decoration-blue-400 bg-gray-100  text-center text-gray-900 text-sm border-t ">
										Descripción
									</article>

									<article className="w-full flex justify-center p-2 text-center text-sm  font-semibold text-gray-600 overflow-y-auto ">
										{description}
									</article>
								</aside>
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
