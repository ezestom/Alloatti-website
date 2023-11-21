import logoLigth from "../img/Alloatti-logo-light.png";

export function LogoMobile() {
	return (
		<div className="logoMobile flex items-center justify-center w-full my-2 sm:block  md:hidden">
			<img
				className=" px-20 py-2 rounded-lg shadow-sm border border-gray-50"
				src={logoLigth}
				alt="logo Alloatti"
			/>
		</div>
	);
}
