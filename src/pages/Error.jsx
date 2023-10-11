import monkey from "../assets/img/monkey.png";
import { BackButton } from "../components/BackButton";

export function Error({ handleClick }) {
	return (
		<div>
			<div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
				<div className="text-gray-900 text-2xl font-bold pb-5">
					Ops, sucedió algo que no esperabamos...
				</div>
				<img src={monkey} alt="" />
				<div className="text-gray-600 text-xl m-4">
					No encontramos lo que buscabas.
				</div>
				<BackButton handleClick={handleClick} />
			</div>
		</div>
	);
}
