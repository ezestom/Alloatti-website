import logoLigth from "../img/Alloatti-logo-light.png";

export function LogoCelular() {
	return (
		<div className="flex items-center justify-center w-full my-4 sm:block  md:hidden ">
			<img
				className="px-24 py-2 rounded-lg shadow-sm border bg-gray-100 border-gray-50 "
				src={logoLigth}
				alt="logo Alloatti"
			/>
		</div>
	);
}
