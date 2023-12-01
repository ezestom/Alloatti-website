import { useState } from "react";

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
							className=" p-2 max-w-full text-center max-w-400 "
							src={img}
							alt={title}
						/>
						<button
							className="absolute top-0 right-0 bg-white rounded  p-2 hover:bg-gray-100 hover:cursor-pointer"
							onClick={handleClose}>
							✖️
						</button>
						<div className="flex flex-col justify-start  items-center  w-full  p-2 ">
							<h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900  uppercase text-center">
								{title}
							</h5>
							<p className="mb-3 font-semibold text-gray-700 dark:text-gray-400 text">
								{info}
							</p>
							<p className="text-center">
								Lorem ipsum, dolor sit amet consectetur
								adipisicing elit. Minus accusamus nesciunt nihil
								maiores, explicabo porro eos ea, placeat dicta
								iusto aspernatur mollitia officiis inventore
								odio doloribus similique ad distinctio quo!
							</p>
						</div>
					</aside>
				</div>
			)}
		</div>
	);
}
