import { Link } from "react-router-dom";
import email from "../icons/email.png";
import person from "../icons/person.png";

function InputData() {
	return (
		<>
			<form
				id="form"
				className="w-full p-10 shadow-md rounded-lg bg-slate-100  border-l-4 border-blue-400 "
				target="_blank"
				action="https://formsubmit.co/ezequielstom@hotmail.com"
				method="POST">
				{/* input name and lastname */}
				<div>
					<label
						htmlFor="name"
						className="block mb-2 text-md font-medium text-gray-500">
						Nombre y Apellido
					</label>
					<div className="relative mb-6 ">
						<div className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
							<img src={person} alt="" />
						</div>
						<input
							name="name"
							type="text"
							id="name"
							className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 `}
							placeholder="Juan Perez"
							required
						/>
					</div>
				</div>
				{/* input email */}
				<div>
					<label
						htmlFor="email"
						className="block mb-2 text-md font-medium text-gray-500">
						Email
					</label>
					<div className="relative mb-6 ">
						<div className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
							<img src={email} alt="" />
						</div>
						<input
							name="email"
							type="email"
							id="email"
							className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 `}
							placeholder="juan_perez@gmail.com"
							required
						/>
					</div>
				</div>
				<div className="w-full mb-4 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600">
					<div className="px-4 py-2 bg-white rounded-t-lg dark-bg-gray-800">
						<label
							htmlFor="message"
							className=" text-gray-400 sr-only">
							Tu comentario o consulta
						</label>
						<textarea
							name="message"
							id="message"
							rows="4"
							className="w-full px-0 text-sm text-gray-900 border-0 focus:outline-blue-400 "
							placeholder="Escribinos tu consulta..."
							required></textarea>
					</div>
					<div className="flex items-center justify-between px-3 py-2 border-t dark:border-gray-600">
						{/* button */}
						<button
							type="submit"
							className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800">
							Enviar consulta <span>→</span>
						</button>
					</div>
					{/* redirect */}
					<input type="hidden" name="_captcha" value="false" />
					<input
						type="hidden"
						name="_cc"
						value="ezequielstom@gmail.com,ezequielstom@hotmail.com"
					/>
					<input
						type="hidden"
						name="_subject"
						value="Mensaje -> Web Alloatti <-"></input>
				</div>
				<p className="ml-auto text-xs text-gray-500 dark:text-gray-400">
					Rellene el formulario con sus consultas y en breve nos
					pondremos en contacto o escribanos por{" "}
					<Link
						to="https://wa.me/+5491168641122"
						target="_blank"
						className="text-green-500 hover:underline">
						WhatsApp{" "}
						<span className="text-green-500  hover:underline">
							+54 9 11 1234-5678
						</span>
					</Link>
					.
				</p>
			</form>
		</>
	);
}

export default InputData;
