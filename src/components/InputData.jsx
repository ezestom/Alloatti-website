import { useState } from "react";
import { Link } from "react-router-dom";
import emailjs from "@emailjs/browser";
import emailIcon from "../icons/email.png";
import personIcon from "../icons/person.png";
import { EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, EMAILJS_PUBLIC_KEY } from "../constants/emailjs";

function InputData() {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		message: ""
	});

	const [status, setStatus] = useState({
		submitting: false,
		info: { error: false, msg: null }
	});

	const handleOnChange = (e) => {
		setFormData((prev) => ({
			...prev,
			[e.target.name]: e.target.value
		}));
	};

	const handleOnSubmit = async (e) => {
		e.preventDefault();

		if (!formData.name || !formData.email || !formData.message) {
			setStatus({
				submitting: false,
				info: { error: true, msg: "Por favor, complete todos los campos" }
			});
			return;
		}

		setStatus({
			submitting: true,
			info: { error: false, msg: "Enviando consulta..." }
		});

		try {
			await emailjs.send(
				EMAILJS_SERVICE_ID,
				EMAILJS_TEMPLATE_ID,
				{
					name: formData.name,
					email: formData.email,
					message: formData.message,
				},
				EMAILJS_PUBLIC_KEY
			);

			setStatus({
				submitting: false,
				info: { error: false, msg: "¡Consulta enviada con éxito! Nos contactaremos a la brevedad." }
			});
			setFormData({ name: "", email: "", message: "" });
		} catch (error) {
			console.error("EmailJS Error:", error);
			setStatus({
				submitting: false,
				info: { error: true, msg: "Hubo un error al enviar la consulta. Intente nuevamente." }
			});
		}
	};

	return (
		<>
			<form
				id="form"
				className="hp-card !p-8 md:!p-12 border-none shadow-2xl transition-all duration-500"
				onSubmit={handleOnSubmit}>
				
				<div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
					<div>
						<label
							htmlFor="name"
							className="block mb-3 text-[11px] font-bold uppercase tracking-[0.1em] text-slate-400 dark:text-slate-500">
							Nombre y Apellido
						</label>
						<div className="relative group">
							<div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none transition-opacity group-focus-within:opacity-100 opacity-40">
								<img src={personIcon} className="w-4 dark:invert" alt="Icono de usuario" />
							</div>
							<input
								name="name"
								type="text"
								id="name"
								autoComplete="name"
								value={formData.name}
								onChange={handleOnChange}
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
								<img src={emailIcon} className="w-4 dark:invert" alt="Icono de email" />
							</div>
							<input
								name="email"
								type="email"
								id="email"
								autoComplete="email"
								value={formData.email}
								onChange={handleOnChange}
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
						value={formData.message}
						onChange={handleOnChange}
						className="bg-slate-50 dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white text-sm rounded-xl focus:bg-white dark:focus:bg-slate-800 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 block w-full p-4 transition-all outline-none placeholder:text-slate-400 dark:placeholder:text-slate-600 resize-none"
						placeholder="Describinos tu proyecto o necesidad específica..."
						required></textarea>
					
					{status.info.msg && (
						<div className={`mt-4 text-sm font-medium p-4 rounded-xl text-center animate-hp-fade ${
							status.info.error 
								? "bg-red-50 text-red-600 border border-red-100 dark:bg-red-900/20 dark:border-red-900/30" 
								: "bg-green-50 text-green-600 border border-green-100 dark:bg-green-900/20 dark:border-green-900/30"
						}`}>
							{status.info.msg}
						</div>
					)}
				</div>

				<div className="flex flex-col md:flex-row items-center justify-between gap-8 pt-8 border-t border-slate-100 dark:border-slate-800">
					<button
						disabled={status.submitting}
						type="submit"
						className="hp-btn-primary">
						{status.submitting ? "Enviando..." : "Enviar consulta"} <span className="ml-2">→</span>
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
			</form>
		</>
	);
}

export default InputData;
