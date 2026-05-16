export const WHATSAPP_PHONE = "5491168641122";

export const PAGE_MESSAGES = {
  '/': 'Hola Alloatti SRL, estoy interesado en sus máquinas envasadoras.',
  '/maquina-para-bidones-retornables': 'Hola Alloatti SRL, me interesa la línea de máquinas para bidones retornables. ¿Podrían enviarme información?',
  '/maquina-para-bidones-descartables': 'Hola Alloatti SRL, me interesa la línea de máquinas para bidones descartables. ¿Podrían enviarme información?',
  '/accesorios-para-maquinas': 'Hola Alloatti SRL, me interesan los accesorios para máquinas. ¿Podrían enviarme información?',
  '/contacto': 'Hola Alloatti SRL, quisiera consultar por sus servicios y solicitar un presupuesto.',
  '/nosotros': 'Hola Alloatti SRL, me gustaría conocer más sobre la empresa y sus soluciones.',
};

export const getWhatsAppUrl = (pathname) => {
  const message = encodeURIComponent(PAGE_MESSAGES[pathname] || PAGE_MESSAGES['/']);
  return `https://wa.me/${WHATSAPP_PHONE}?text=${message}`;
};
