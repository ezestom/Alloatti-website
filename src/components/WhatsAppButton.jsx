import { FaWhatsapp } from 'react-icons/fa';
import { useLocation } from 'react-router-dom';

const pageMessages = {
  '/': 'Hola Alloatti SRL, estoy interesado en sus máquinas envasadoras.',
  '/maquina-para-bidones-retornables': 'Hola Alloatti SRL, me interesa la línea de máquinas para bidones retornables. ¿Podrían enviarme información?',
  '/maquina-para-bidones-descartables': 'Hola Alloatti SRL, me interesa la línea de máquinas para bidones descartables. ¿Podrían enviarme información?',
  '/accesorios-para-maquinas': 'Hola Alloatti SRL, me interesan los accesorios para máquinas. ¿Podrían enviarme información?',
  '/contacto': 'Hola Alloatti SRL, quisiera consultar por sus servicios y solicitar un presupuesto.',
  '/nosotros': 'Hola Alloatti SRL, me gustaría conocer más sobre la empresa y sus soluciones.',
};

export function WhatsAppButton() {
  const location = useLocation();
  const phoneNumber = "5491168641122"; 
  const message = encodeURIComponent(pageMessages[location.pathname] || pageMessages['/']);
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <div className="relative group">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-[#25d366] text-white w-12 h-12 rounded-full shadow-2xl hover:scale-110 hover:bg-[#128c7e] transition-all duration-300 flex items-center justify-center animate-bounce-subtle"
        aria-label="Contactar por WhatsApp"
      >
        <FaWhatsapp className="text-2xl" />
      </a>
      
      {/* Tooltip */}
      <span className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-white dark:bg-slate-800 text-gray-800 dark:text-white px-3 py-1.5 rounded-xl text-xs font-bold opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-2xl border border-slate-100 dark:border-white/10 whitespace-nowrap pointer-events-none">
        ¿Consultas? Escríbenos
      </span>

      {/* Pulse Effect */}
      <span className="absolute inset-0 rounded-full bg-[#25d366] opacity-20 animate-ping -z-10"></span>
    </div>
  );
}
