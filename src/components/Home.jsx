import { WithClose } from "./WithClose";
import img1 from "../assets/img/gallon-water.jpg";
import img2 from "../assets/img/ninos.png";
import img3 from "../assets/img/mujer-bidon.png";

export function Home() {
	const info = [
		{
			title: "Título 1",
			description: "Descripción 1",
		},
		{
			title: "Título 2",
			description: "Descripción 2",
			img: img2,
		},
		{
			title: "Título 3",
			description: "Descripción 3",
		},
		{
			title: "Título 4",
			description: "Descripción 4",
			img: img3,
		},
		{
			title: "Título 5",
			description: "Descripción 5",
			img: img1,
		},
		{
			title: "Título 6",
			description: "Descripción 6",
			img: img2,
		},
		{
			title: "Título 7",
			description: "Descripción 7",
		},
	];

	const isBackgroundInfo = (info) => {
		if (info.img) {
			return {
				backgroundImage: `url(${info.img})`,
				backgroundSize: "contain",
				backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
			};
		}
	};
	return (
		<>
			<WithClose />
			<section className="w-full absolute top-20  flex justify-center items-center">
				<article className="w-3/5 ml-[320px]">
					<div className="grid auto-rows-[192px] grid-cols-3 gap-5 ">
						{info.map((info, i) => (
							<div
								key={i}
								style={isBackgroundInfo(info)}
								className={`row-span-1 rounded-xl border-2 border-slate-400/10 bg-neutral-100 p-4 dark:bg-neutral-900 ${
									i === 3 || i === 6 ? "col-span-2" : ""
								}`}>
								<h3>{info.title}</h3>
								<p>{info.description}</p>
							</div>
						))}
					</div>
				</article>
			</section>
		</>
	);
}
