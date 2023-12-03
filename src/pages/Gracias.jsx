import logo from "../../src/img/alloatti-logo-light.png";

export function Gracias() {
	return (
		<section className="w-screen h-screen bg-gray-50 flex justify-center items-center flex-col">
			{/* I need create a page to thanks the message */}
			<article className="flex justify-between flex-col items-center max-w-[500px] h-[235px] bg-blue-100 rounded-lg shadow-md py-10 px-5">
				<h1 className="text-center text-3xl text-gray-900 font-bold underline underline-offset-4 decoration-3 decoration-blue-400">
					Gracias por contactarnos!
				</h1>

				<p className="text-md  text-gray-900 font-semibold ">
					En breve nos pondremos en contacto con usted.
				</p>

				<div className="flex justify-center w-full">
					<img
						className="max-w-[185px]"
						src={logo}
						alt="logo-alloatti"
					/>
				</div>
			</article>
		</section>
	);
}
