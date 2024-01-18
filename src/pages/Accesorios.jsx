import { Base } from "../components/Base";
import { useTheme } from "../context/ThemeContext";
import { useEffect, useState } from "react";
import { SkeletonVideo } from "../components/VideoSkeleton";
import { TableAccesories } from "../components/TableAccesories";
import { accesorios } from "../machines_info/accesorios";
import { BlurVideo } from "../components/BlurVideo/BlurVideo";
import pantalla from "../videos/pantalla.mp4";

export function Accesorios() {
	const { isDarkTheme } = useTheme();
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		setIsLoading(true);
		setTimeout(() => {
			setIsLoading(false);
		}, 1000);
	}, []);

	return (
		<>
			<Base />
			<section
				className={`w-full absolute top-12 flex justify-center items-center  ${
					isDarkTheme ? "bg-gray-900" : "bg-gray-50 "
				}`}>
				<article className="lg:w-4/6 lg:ml-[300px] sm:ml-0  mb-20 ">
					<span
						href="#"
						className="bg-blue-100 pl-2 text-blue-800 text-xs font-medium flex items-center  py-0.5 rounded-md dark:bg-gray-700 dark:text-blue-400 mb-2">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="icon icon-tabler icon-tabler-building-factory-2"
							width="24"
							height="24"
							viewBox="0 0 30 30"
							stroke="currentColor"
							fill="none">
							<path stroke="none" d="M0 0h24v24H0z" fill="none" />
							<path d="M3 21h18" />
							<path d="M5 21v-12l5 4v-4l5 4h4" />
							<path d="M19 21v-8l-1.436 -9.574a.5 .5 0 0 0 -.495 -.426h-1.145a.5 .5 0 0 0 -.494 .418l-1.43 8.582" />
							<path d="M9 17h1" />
							<path d="M14 17h1" />
						</svg>
						Máquinas automáticas {">"} Accesorios
					</span>
					<h1 className="text-2xl md:text-5xl flex items-center py-5 my-5 text-dark bg-gray-200 rounded-lg font-extrabold shadow-md ">
						<svg
							className="mx-1"
							width="35"
							height="35"
							viewBox="0 0 24 24">
							<path
								fill="#000000"
								d="M6.27 17.05A2.991 2.991 0 0 1 4 22c-1.66 0-3-1.34-3-3s1.34-3 3-3c.18 0 .36 0 .53.05l3.07-5.36l-1.74-.99l4.09-1.12l1.12 4.09l-1.74-.99l-3.06 5.37M20 16c-1.3 0-2.4.84-2.82 2H11v-2l-3 3l3 3v-2h6.18c.42 1.16 1.52 2 2.82 2c1.66 0 3-1.34 3-3s-1.34-3-3-3m-8-8c.18 0 .36 0 .53-.05l3.07 5.36l-1.74.99l4.09 1.12l1.12-4.09l-1.74.99l-3.06-5.37A2.991 2.991 0 0 0 12 2c-1.66 0-3 1.34-3 3s1.34 3 3 3Z"
							/>
						</svg>
						Accesorios para potenciar tu producción
					</h1>
					<p className=" px-2 text-1xl text-gray-500 md:text-xl my-20 ">
						Nuestros equipos de accesorios están diseñados para
						optimizar y potenciar su línea de producción. Reduzca
						los tiempos de procesamiento y aumente
						significativamente la productividad de su operación
					</p>
					<p className="text-gray-500  border-l-4 border-blue-400 px-2 my-20 mx-1">
						Ofrecemos comodidades en diversas operaciones, como
						retirar las tapas de los bidones antes de lavarlos,
						realizar prelavados para eliminar la suciedad más
						gruesa, organizar las tapas de manera eficiente y
						visualizar el proceso productivo a distancia, entre
						otras funciones.
					</p>
					<aside className="lg:p-10 sm:p-none rounded-lg my-10 bg-gray-100 shadow-lg ">
						{isLoading ? (
							<SkeletonVideo />
						) : (
							<BlurVideo
								video={pantalla}
								urlYoutube="https://www.youtube.com/embed/GdnEMfxbREI?si=S4LEKZBvpEB_jUuC&autoplay=1&mute=0"
							/>
						)}
					</aside>
					<p className="text-gray-500 border-l-4 border-blue-400 px-2 my-20 mx-1">
						En Alloatti, valoramos la retroalimentación de nuestros
						clientes, ya que nos permite conocer las necesidades
						específicas de la industria del agua. Este proceso nos
						impulsa a desarrollar nuevos accesorios que amplían las
						posibilidades de su línea productiva, adaptándonos de
						manera precisa a sus requerimientos
					</p>
					<figure className="my-10">
						<TableAccesories accesories={accesorios} />
					</figure>
				</article>
			</section>
		</>
	);
}
