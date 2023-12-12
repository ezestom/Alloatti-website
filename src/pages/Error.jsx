import worker from "../img/trabajador2.jpg";
import { BackButton } from "../components/BackButton";

export function Error(handleClick) {
	return (
		<div>
			<div className=" flex flex-col items-center  justify-center min-h-screen bg-gray-100">
				<div className="text-gray-600 text-3xl pb-5 text-center  ">
					<strong> Upsss</strong>, esta ruta no existe...!
				</div>
				<img
					src={worker}
					alt="bidon de agua perdido"
					className="max-w-[400px] rounded-lg "
				/>
				<div className="text-gray-600 text-2xl m-4">
					<strong>Click </strong> para volver al Inicio.
				</div>
				<BackButton handleClick={handleClick} />
			</div>
		</div>
	);
}
