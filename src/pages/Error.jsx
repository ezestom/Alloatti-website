import bidon from "../img/bidon404.png";
import { BackButton } from "../components/BackButton";

export function Error(handleClick) {
	return (
		<div>
			<div className=" flex flex-col items-center justify-center min-h-screen bg-gray-100">
				<div className="text-gray-600 text-2xl pb-5 text-center">
					<strong> Upsss</strong>, esta ruta no existe...!
				</div>
				<img
					src={bidon}
					alt="bidon de agua perdido"
					className="max-w-[300px]"
				/>
				<div className="text-gray-600 text-xl m-4">
					<strong>Click </strong> para volver a la página de Inicio.
				</div>
				<BackButton handleClick={handleClick} />
			</div>
		</div>
	);
}
