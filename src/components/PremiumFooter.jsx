import { useNavigate } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { BsYoutube } from "react-icons/bs";

export function PremiumFooter() {
	const navigate = useNavigate();
	const { isDarkTheme } = useTheme();

	const handleContactEmailClick = () => {
		window.location.href = "mailto:ezequielstom@gmail.com,info@alloatti.com";
	};

	return (
		<footer className="border-t border-slate-200 dark:border-slate-800 pt-16 pb-12 w-full text-slate-500 dark:text-slate-400 mt-20">
			<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-12 mb-12">
				<div className="flex flex-col gap-4">
					<h3 className={`text-base font-bold uppercase tracking-wider ${isDarkTheme ? "text-white" : "text-[#1a1a1a]"}`}>
						Alloatti S.R.L.
					</h3>
					<p className="text-xs leading-relaxed max-w-xs">
						Liderando el mercado de maquinaria industrial desde 1994. Innovación constante para un mundo que nunca se detiene.
					</p>
				</div>

				<div className="flex flex-col gap-3">
					<h4 className={`text-xs font-bold uppercase tracking-wider ${isDarkTheme ? "text-slate-300" : "text-[#1a1a1a]"}`}>
						Compañía
					</h4>
					<ul className="space-y-2 text-xs">
						<li>
							<button onClick={() => navigate("/nosotros")} className="hover:text-[#024ad8] transition-colors text-left">
								Nosotros
							</button>
						</li>
						<li>
							<button onClick={() => navigate("/ultimas-noticias")} className="hover:text-[#024ad8] transition-colors text-left">
								Noticias
							</button>
						</li>
						<li>
							<button onClick={() => navigate("/normas-de-calidad")} className="hover:text-[#024ad8] transition-colors text-left">
								Normas
							</button>
						</li>
						<li>
							<button onClick={() => navigate("/preguntas-frecuentes")} className="hover:text-[#024ad8] transition-colors text-left">
								FAQ
							</button>
						</li>
					</ul>
				</div>

				<div className="flex flex-col gap-3">
					<h4 className={`text-xs font-bold uppercase tracking-wider ${isDarkTheme ? "text-slate-300" : "text-[#1a1a1a]"}`}>
						Soporte
					</h4>
					<ul className="space-y-2 text-xs">
						<li>
							<button onClick={() => navigate("/contacto")} className="hover:text-[#024ad8] transition-colors text-left">
								Mensaje
							</button>
						</li>
						<li>
							<a href="https://wa.me/5491168641122" target="_blank" rel="noreferrer" className="hover:text-[#024ad8] transition-colors">
								Whatsapp
							</a>
						</li>
						<li>
							<button onClick={handleContactEmailClick} className="hover:text-[#024ad8] transition-colors text-left">
								Email
							</button>
						</li>
					</ul>
				</div>

				<div className="flex flex-col gap-3">
					<h4 className={`text-xs font-bold uppercase tracking-wider ${isDarkTheme ? "text-slate-300" : "text-[#1a1a1a]"}`}>
						Productos
					</h4>
					<ul className="space-y-2 text-xs">
						<li>
							<button onClick={() => navigate("/maquina-para-bidones-retornables")} className="hover:text-[#024ad8] transition-colors text-left">
								Línea Retornable
							</button>
						</li>
						<li>
							<button onClick={() => navigate("/maquina-para-bidones-descartables")} className="hover:text-[#024ad8] transition-colors text-left">
								Línea Descartable
							</button>
						</li>
						<li>
							<button onClick={() => navigate("/accesorios-para-maquinas")} className="hover:text-[#024ad8] transition-colors text-left">
								Accesorios
							</button>
						</li>
					</ul>
				</div>
			</div>

			<div className="border-t border-slate-100 dark:border-slate-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] md:text-xs">
				<span>&copy; {new Date().getFullYear()} Alloatti SRL. All rights reserved.</span>
				
				<div className="flex items-center gap-4">
					<a href="https://www.instagram.com/maquinaria.alloatti/" target="_blank" rel="noreferrer" className="hover:text-[#024ad8] transition-colors">
						<FaInstagram size={16} />
					</a>
					<a href="https://www.linkedin.com/company/alloatti/" target="_blank" rel="noreferrer" className="hover:text-[#024ad8] transition-colors">
						<FaLinkedin size={16} />
					</a>
					<a href="https://www.youtube.com/@AlloattiSRL" target="_blank" rel="noreferrer" className="hover:text-[#024ad8] transition-colors">
						<BsYoutube size={16} />
					</a>
				</div>

				<span>Villa Adelina, Buenos Aires - Argentina</span>
			</div>
		</footer>
	);
}
