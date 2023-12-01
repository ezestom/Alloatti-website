import { useState } from "react";
import { OpenEmail } from "./OpenEmail";

export function CardAccesories({ title, info, img, onClose }) {
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
					className="w-screen h-screen fixed top-0 left-0 backdrop-blur-sm bg-white/30 z-20">
					<aside className="absolute right-0 left-0 m-auto top-0 bottom-0  bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl max-h-[85%] ">
						<img
							className=" max-w-full text-center max-w-400 rounded-lg rounded-b-none"
							src={img}
							alt={title}
						/>
						<button
							className="absolute top-0 right-0 bg-white rounded-md rounded-br-none  rounded-tl-none  p-2 hover:bg-gray-200 hover:cursor-pointer"
							onClick={handleClose}>
							✖️
						</button>
						<div className="flex flex-col justify-start  items-center  w-full  p-2 ">
							<h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900  bg-gray-100 flex w-full rounded-lg py-4 uppercase justify-center">
								<span className="pr-1">
									{" "}
									<svg
										width="25"
										height="25"
										viewBox="0 0 24 24">
										<path
											fill="#000000"
											d="M6.27 17.05A2.991 2.991 0 0 1 4 22c-1.66 0-3-1.34-3-3s1.34-3 3-3c.18 0 .36 0 .53.05l3.07-5.36l-1.74-.99l4.09-1.12l1.12 4.09l-1.74-.99l-3.06 5.37M20 16c-1.3 0-2.4.84-2.82 2H11v-2l-3 3l3 3v-2h6.18c.42 1.16 1.52 2 2.82 2c1.66 0 3-1.34 3-3s-1.34-3-3-3m-8-8c.18 0 .36 0 .53-.05l3.07 5.36l-1.74.99l4.09 1.12l1.12-4.09l-1.74.99l-3.06-5.37A2.991 2.991 0 0 0 12 2c-1.66 0-3 1.34-3 3s1.34 3 3 3Z"
										/>
									</svg>
								</span>
								{title}
							</h5>
							<p className="mb-3 bg-gray-50 h-full w-full rounded-lg py-2  text-center font-semibold flex justify-center text-gray-700 dark:text-gray-400 text">
								<span className="pr-1">
									<svg
										width="25"
										height="25"
										viewBox="0 0 24 24">
										<path
											fill="#000000"
											d="M12.3 7.29c.2-.18.44-.29.7-.29c.27 0 .5.11.71.29c.19.21.29.45.29.71c0 .27-.1.5-.29.71c-.21.19-.44.29-.71.29c-.26 0-.5-.1-.7-.29c-.19-.21-.3-.44-.3-.71c0-.26.11-.5.3-.71m-2.5 4.68s2.17-1.72 2.96-1.79c.74-.06.59.79.52 1.23l-.01.06c-.14.53-.31 1.17-.48 1.78c-.38 1.39-.75 2.75-.66 3c.1.34.72-.09 1.17-.39c.06-.04.11-.08.16-.11c0 0 .08-.08.16.03c.02.03.04.06.06.08c.09.14.14.19.02.27l-.04.02c-.22.15-1.16.81-1.54 1.05c-.41.27-1.98 1.17-1.74-.58c.21-1.23.49-2.29.71-3.12c.41-1.5.59-2.18-.33-1.59c-.37.22-.59.36-.72.45c-.11.08-.12.08-.19-.05l-.03-.06l-.05-.08c-.07-.1-.07-.11.03-.2M5 3h14a2 2 0 0 1 2 2v14c0 .53-.21 1.04-.59 1.41c-.37.38-.88.59-1.41.59H5c-.53 0-1.04-.21-1.41-.59C3.21 20.04 3 19.53 3 19V5c0-1.11.89-2 2-2m14 16V5H5v14h14Z"
										/>
									</svg>
								</span>
								{info}
							</p>
							<p className="text-center bg-gray-50 h-full w-full rounded-lg p-4 ">
								Aquí falta pasarme Texto sobre la máquina
								seleccionada y que se abra el mail con los datos
								de la máquina seleccionada bla bla .......
							</p>
							<div className="w-full absolute bottom-0 rounded-lg">
								<OpenEmail
									data={
										"aquí debo recuperar la info de cada máquina"
									}
								/>
								<button
									className="bg-gray-400 hover:bg-gray-500 text-white font-bold py-1 px-4  w-full text-lg rounded-lg rounded-t-none"
									id="close-dialog"
									onClick={handleClose}>
									✖️ Cerrar ventana
								</button>
							</div>
						</div>
					</aside>
				</div>
			)}
		</div>
	);
}
