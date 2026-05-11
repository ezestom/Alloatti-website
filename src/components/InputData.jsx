import { Link } from "react-router-dom";
import email from "../icons/email.png";
import person from "../icons/person.png";

function InputData() {
	const messageAlert = () => {
		let nameValue = document.getElementById("name").value;
		let emailValue = document.getElementById("email").value;
		let messageValue = document.getElementById("message").value;
		let resultElement = document.getElementById("result");

		if (nameValue === "" || emailValue === "" || messageValue === "") {
			resultElement.textContent = "Por favor, complete todos los campos";
			resultElement.style.color = "red";
			resultElement.style.backgroundColor = "rgba(255, 0, 0, 0.1)";
		} else {
			resultElement.textContent = "Mensaje enviado correctamente";
			resultElement.style.color = "green";
			resultElement.style.backgroundColor = "rgba(0, 255, 0, 0.1)";
			setTimeout(() => {
				resultElement.textContent = "";
				resultElement.style.backgroundColor = "transparent";
			}, 5000);
		}
	};
	return (
		<>
			<form
				id="form"
				className="hp-card !p-8 md:!p-12 border-none shadow-2xl transition-all duration-500"
				target="_blank"
				action="https://formsubmit.co/ezequielstom@hotmail.com"
				method="POST">
				<div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
					<div>
						<label
							htmlFor="name"
							className="block mb-3 text-[11px] font-bold uppercase tracking-[0.1em] text-slate-400 dark:text-slate-500">
							Nombre y Apellido
						</label>
						<div className="relative group">
							<div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none transition-opacity group-focus-within:opacity-100 opacity-40">
								<img src={person} className="w-4 dark:invert" alt="" />
							</div>
							<input
								name="name"
								type="text"
								id="name"
								autoComplete="name"
								className="bg-slate-50 dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white text-sm rounded-xl focus:bg-white dark:focus:bg-slate-800 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 block w-full pl-12 p-4 transition-all outline-none placeholder:text-slate-400 dark:placeholder:text-slate-600"
								placeholder="Juan Perez"
								required
							/>
						</div>
					</div>

					<div>
						<label
							htmlFor="email"
							className="block mb-3 text-[11px] font-bold uppercase tracking-[0.1em] text-slate-400 dark:text-slate-500">
							Email Corporativo
						</label>
						<div className="relative group">
							<div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none transition-opacity group-focus-within:opacity-100 opacity-40">
								<img src={email} className="w-4 dark:invert" alt="" />
							</div>
							<input
								name="email"
								type="email"
								id="email"
								autoComplete="email"
								className="bg-slate-50 dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white text-sm rounded-xl focus:bg-white dark:focus:bg-slate-800 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 block w-full pl-12 p-4 transition-all outline-none placeholder:text-slate-400 dark:placeholder:text-slate-600"
								placeholder="juan_perez@empresa.com"
								required
							/>
						</div>
					</div>
				</div>

				<div className="mb-10">
					<label
						htmlFor="message"
						className="block mb-3 text-[11px] font-bold uppercase tracking-[0.1em] text-slate-400 dark:text-slate-500">
						Consulta Técnica
					</label>
					<textarea
						name="message"
						id="message"
						rows="5"
						className="bg-slate-50 dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white text-sm rounded-xl focus:bg-white dark:focus:bg-slate-800 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 block w-full p-4 transition-all outline-none placeholder:text-slate-400 dark:placeholder:text-slate-600 resize-none"
						placeholder="Describinos tu proyecto o necesidad específica..."
						required></textarea>
					<div id="result" className="mt-4 text-sm font-medium p-3 rounded-lg text-center hidden"></div>
				</div>

				<div className="flex flex-col md:flex-row items-center justify-between gap-8 pt-8 border-t border-slate-100 dark:border-slate-800">
					<button
						onClick={messageAlert}
						type="submit"
						className="hp-btn-primary inline-flex items-center gap-2">
						Enviar consulta <span className="ml-2">→</span>
					</button>

					<p className="text-xs text-slate-400 dark:text-slate-500 max-w-xs text-center md:text-right leading-relaxed font-medium">
						O escribinos por{" "}
						<Link
							to="https://wa.me/+5491168641122"
							target="_blank"
							className="text-[#25d366] font-bold hover:underline">
							WhatsApp al +54 9 11 6864-1122
						</Link>
					</p>
				</div>
				<input type="hidden" name="_captcha" value="false" />
				<input type="hidden" name="_cc" value="ezequielstom@gmail.com,ezequielstom@hotmail.com" />
				<input type="hidden" name="_subject" value=" -> ✅ Web Alloatti <-" />
			</form>
		</>
	);
}

export default InputData;
