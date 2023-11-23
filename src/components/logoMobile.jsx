import logoLigth from "../img/Alloatti-logo-light.png";


 function LogoMobile() {
	return (
		<div className=" flex items-center justify-center w-full my-2 sm:block  md:hidden">
			<img
				className=" px-20 py-2 rounded-lg shadow-sm border border-gray-50 max-w-xs"
				src={logoLigth}
				alt="logo Alloatti"
			/>
		</div>
	);
}

export default LogoMobile;