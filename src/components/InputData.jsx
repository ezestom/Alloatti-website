import { Link } from "react-router-dom";

function InputField({ label, id, iconPath, placeholder }) {
	return (
		<div>
			<label
				htmlFor={id}
				className="block mb-2 text-md font-medium text-gray-500">
				{label}
			</label>
			<div className="relative mb-6 ">
				<div className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
					<svg
						className="w-4 h-4 text-gray-500 "
						aria-hidden="true"
						xmlns="http://www.w3.org/2000/svg"
						fill="currentColor"
						viewBox="0 0 20 16">
						<path d={iconPath} />
					</svg>
				</div>
				<input
					type="text"
					id={id}
					className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 `}
					placeholder={placeholder}
				/>
			</div>
		</div>
	);
}

function TextArea() {
	return (
		<>
			<form>
				<div className="w-full mb-4 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600">
					<div className="px-4 py-2 bg-white rounded-t-lg dark-bg-gray-800">
						<label
							htmlFor="comment"
							className=" text-black sr-only ">
							Your comment
						</label>
						<textarea
							id="comment"
							rows="4"
							className="w-full px-0 text-sm text-gray-900 border-0 focus:outline-blue-400 "
							placeholder="Escribinos tu consulta..."
							required></textarea>
					</div>
					<div className="flex items-center justify-between px-3 py-2 border-t dark:border-gray-600">
						<button
							type="submit"
							className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800">
							Enviar consulta <span>→</span>
						</button>
					</div>
				</div>
			</form>
			<p className="ml-auto text-xs text-gray-500 dark:text-gray-400">
				Rellene el formulario con sus consultas y en breve nos pondremos
				en contacto o escribanos por {" "}
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
		</>
	);
}

function InputData() {
	return (
		<div className="my-20 px-1">
			<InputField
				label=" Email"
				id="input-group-1"
				iconPath="M10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z"
				placeholder="juan_perez@gmail.com"
			/>

			<InputField
				label="Nombre y apellido"
				id="website-admin"
				iconPath="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z"
				placeholder="Juan Perez"
			/>
			<TextArea />
		</div>
	);
}

export default InputData;
