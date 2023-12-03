import { useState } from "react";
import { OpenEmail } from "./OpenEmail";
import tuerca from "../icons/tuerca.png";
import close from "../icons/close.png";
import close2 from "../icons/close2.png";

export function CardAccesories({ title, info, img, onClose, description }) {
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
					<aside className="absolute right-0 left-0 m-auto top-0 bottom-0  bg-white border border-gray-200 rounded-lg shadow md:flex-row max-w-[50%] max-h-[90%] ">
						<img
							className="rounded-b-none max-h-[250px] object-cover w-full rounded-t-lg"
							src={img}
							alt={title}
						/>
						<button
							className="absolute top-0 right-0 bg-white rounded-md rounded-br-none  rounded-tl-none  p-1 hover:bg-gray-200 hover:cursor-pointer"
							onClick={handleClose}>
							<img src={close} alt="close-icon" />
						</button>
						<div className="flex flex-col justify-start  items-center  w-full  p-2 overflow-y-auto  ">
							<h5 className="mb-1 text-2xl font-bold tracking-tight text-gray-900  bg-gray-100 flex w-full rounded-lg py-2 uppercase justify-center items-center">
								<span className="pr-2">
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
							<p className="mb-1 bg-gray-50 h-full w-full rounded-lg py-2  text-center font-semibold flex  justify-center text-gray-700 dark:text-gray-400 text-xl">
								<span className="gap-2 flex items-center justify-center">
									<img src={tuerca} alt="icon-tuerca" />
									{info}
								</span>
							</p>
							<p className="text-center bg-gray-50 h-full w-full rounded-lg p-4 ">
								{description}
								{"⚠️ En proceso de desarrollo... ⚠️"}
							</p>
							<div className="w-full absolute bottom-0 rounded-lg">
								<OpenEmail
									data={
										[
											{
												modelo: title,
												producción_max: info,
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
