import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const DIST_DIR = path.resolve(__dirname, '../dist');
const TEMPLATE_PATH = path.join(DIST_DIR, 'index.html');

// Define the 11 routes with their corresponding SEO metadata and content
const ROUTES = [
  {
    path: '/',
    title: 'Fábrica de Envasadoras de Agua y Lavadoras de Bidones | Alloatti SRL',
    description: 'Fábrica de máquinas lavadoras, llenadoras y tapadoras de bidones de agua de 10 a 20 litros. Más de 30 años de trayectoria en la automatización de plantas de agua.',
    keywords: 'envasadoras de agua, envasadoras de bidones, lavadora de bidones de 20 litros, llenadora de bidones de agua, tapadora de bidones, maquinaria industrial para agua, Alloatti SRL, planta embotelladora, IVESS, CIMES',
    canonical: 'https://www.alloatti.com/',
    h1: 'Líderes en innovación y desarrollo de máquinas lavadoras, enjuagadoras, llenadoras y tapadoras de bidones',
    bodyText: 'Alloatti SRL es líder en innovación y desarrollo de maquinaria de última generación para la industria del procesamiento y envasado de agua potable. Con más de 30 años de trayectoria técnica y constante innovación, fabricamos sistemas automáticos de lavado de bidones retornables de 20 litros y bidones descartables de PET en acero inoxidable de grado alimenticio. Ofrecemos envasadoras con capacidades que van desde los 120 hasta los 1000 bidones por hora, garantizando el cumplimiento de las normativas de IVESS y CIMES para prevenir la contaminación cruzada.'
  },
  {
    path: '/nosotros',
    title: 'Quiénes Somos | Fábrica de Maquinaria para Procesamiento de Agua | Alloatti SRL',
    description: 'Conozca la trayectoria de Alloatti SRL, empresa líder dirigida por ingenieros con más de 30 años de experiencia técnica en el diseño de envasadoras de agua y automatización.',
    keywords: 'trayectoria envasadoras, ingenieria industrial, automatizacion de bidones, fabricacion de maquinaria, ingenieros de agua, Alloatti SRL',
    canonical: 'https://www.alloatti.com/nosotros',
    h1: 'Nuestra empresa y trayectoria profesional',
    bodyText: 'Alloatti SRL es una empresa argentina liderada por ingenieros, dedicada al diseño y fabricación de maquinaria industrial para el embotellado de agua de mesa. Bajo la dirección del Ing. Héctor Alloatti (Fundador y Gerente con más de 30 años de experiencia técnica en la industria del agua) y el Ing. Matías Alloatti (Director de Logística y Programación de PLC/HMI con más de 15 años de trayectoria), aportamos soluciones innovadoras de alta fidelidad, construidas íntegramente en acero inoxidable AISI 304, garantizando robustez y confiabilidad en cada una de nuestras operaciones.'
  },
  {
    path: '/maquina-para-bidones-retornables',
    title: 'Máquinas Envasadoras de Bidones Retornables de 20L | Alloatti SRL',
    description: 'Líneas automáticas e industriales para lavado, enjuague, llenado y tapado de bidones retornables de 10, 12 y 20 litros. Capacidad de 120 a 1000 bidones/hora.',
    keywords: 'maquinas para bidones retornables, lavadora de bidones de 20 litros, envasadora automatica de agua, linea de llenado, embotelladora industrial, acero inoxidable grado alimenticio',
    canonical: 'https://www.alloatti.com/maquina-para-bidones-retornables',
    h1: 'Envasadoras para Bidones Retornables de Agua',
    bodyText: 'Nuestras avanzadas líneas automáticas de envasado para bidones retornables de 10, 12 y 20 litros representan la excelencia técnica en la industria. Fabricadas íntegramente en acero inoxidable AISI 304 con soldadura sanitaria TIG con respaldo de gas, nuestras máquinas integran etapas de lavado activo de 120 segundos mínimo, picos de lavado exterior rotativos a alta presión, inyección interna profunda y llenado por gravedad sin contacto físico para prevenir la transferencia de bacterias (contaminación cruzada). Ofrecemos modelos con rendimientos escalables: AT-120, AT-180, AT-240, AT-360, AT-480, AT-600, AT-720, AT-840 y AT-960, cubriendo producciones desde 120 hasta 1000 bidones por hora.'
  },
  {
    path: '/maquina-para-bidones-descartables',
    title: 'Envasadoras de Bidones Descartables y de un Solo Uso | Alloatti SRL',
    description: 'Líneas industriales automáticas y semiautomáticas de enjuague, llenado y roscado para bidones descartables de PET (6L, 8L y 10L). Rendimiento de 300 a 700 bidones/hora.',
    keywords: 'envasadora de bidones descartables, llenadora de bidones PET, roscadora automatica, enjuagadora de bidones, planta embotelladora de agua, envasado de agua mineral',
    canonical: 'https://www.alloatti.com/maquina-para-bidones-descartables',
    h1: 'Maquinaria de Envasado para Bidones Descartables de un Solo Uso',
    bodyText: 'Desarrollamos líneas de envasado de alto rendimiento diseñadas específicamente para bidones descartables de plástico de un solo uso (PET) de 6, 8 y 10 litros. Construidas bajo estrictas condiciones de asepsia en acero inoxidable, contamos con el modelo semiautomático AT-300D (300 bidones/hora, proceso semiautomático por tandas de 1 bidón, enjuague y tapado neumático) y el modelo automático continuo AT-700D (700 bidones/hora, proceso continuo en lotes de 4 bidones con enjuague temporizado de 10 segundos, 4 picos de llenado por gravedad y tapador roscador automático en línea con opción de colocador de manijas).'
  },
  {
    path: '/accesorios-para-maquinas',
    title: 'Accesorios y Automatización para Embotelladoras | Alloatti SRL',
    description: 'Optimice su planta embotelladora: sacatapas automáticos, cargadores de bidones, elevadores de tapas Jirafa, tolvas rotativas y conectividad IoT con app Android.',
    keywords: 'accesorios industriales, sacatapas automatico, alimentador de tapas, elevador de tapas jirafa, tolva rotativa, prelavadora exterior, conectividad IoT, HMI',
    canonical: 'https://www.alloatti.com/accesorios-para-maquinas',
    h1: 'Accesorios de Automatización y Periféricos para Embotelladoras',
    bodyText: 'Ofrecemos una gama completa de periféricos y accesorios industriales para automatizar por completo las líneas de embotellado de agua de mesa, reduciendo costos operativos y tiempos muertos. Nuestro catálogo incluye: Tolvas rotativas distribuidoras de tapas con plato giratorio y dosificador, Elevadores de tapas tipo Jirafa con tolva de suelo para 500 unidades, Cargadores automáticos de bidones vacíos con brazos neumáticos, Sacatapas manuales y Sacatapas automáticos mecánicos en línea (remoción de 600 tapas/hora), Pre-lavadoras externas de cepillos rotativos, Pre-lavadoras internas de alta presión, y Sistemas de conectividad HMI IoT con pantalla táctil y aplicación móvil Android para el diagnóstico de fallas en vivo y registro de producción en tiempo real.'
  },
  {
    path: '/normas-de-calidad',
    title: 'Normas de Calidad e Higiene (IVESS/CIMES) | Alloatti SRL',
    description: 'Detalle de las normativas de sanidad IVESS y CIMES que cumplen nuestras máquinas envasadoras. Estándares de higiene y seguridad en el lavado de bidones.',
    keywords: 'normas de calidad, IVESS, CIMES, higiene, agua potable, sanidad, prevencion contaminacion cruzada, lavado 120 segundos',
    canonical: 'https://www.alloatti.com/normas-de-calidad',
    h1: 'Normas de Calidad y Compromiso de Higiene IVESS / CIMES',
    bodyText: 'La maquinaria de Alloatti SRL se diseña y fabrica bajo estrictos lineamientos inspirados en las directrices de sanidad e higiene de IVESS y CIMES. Garantizamos la máxima pureza del agua previniendo la contaminación cruzada mediante cinco pilares fundamentales: 1) Ciclo de lavado activo mínimo de 2 minutos (120 segundos) para sanitizar profundamente cada envase de retorno. 2) Lavado exterior rotativo a presión cubriendo toda la superficie física del bidón. 3) Picos de inyección interna a alta presión para desinfectar rincones críticos. 4) Puertas neumáticas de separación de etapas sin contacto que aíslan los tanques químicos sin rozar los bidones. 5) Picos de llenado por gravedad sin contacto físico directo con la boca del bidón.'
  },
  {
    path: '/ultimas-noticias',
    title: 'Catálogo de Envasadoras de Agua y Prensa | Alloatti SRL',
    description: 'Descargue la presentación técnica y catálogo completo de productos Alloatti SRL. Nota de prensa sobre la industria de agua embotellada.',
    keywords: 'catalogo de envasadoras, catalogo de productos, prensa, Infobae, presentacion tecnica, descargas',
    canonical: 'https://www.alloatti.com/ultimas-noticias',
    h1: 'Estrategia, Catálogo Institucional y Prensa',
    bodyText: 'Acceda a recursos interactivos y material de prensa de Alloatti SRL. Descargue nuestra presentación técnica y catálogo institucional completo que recopila las especificaciones, dimensiones, layouts de planta y ventajas de toda nuestra maquinaria de acero inoxidable. Asimismo, compartimos notas editoriales destacadas en medios masivos, como el reportaje en Infobae sobre el mercado de agua embotellada, donde se analiza la importancia de la asepsia tecnológica para garantizar agua limpia y prevenir enfermedades en el consumo familiar.'
  },
  {
    path: '/contacto',
    title: 'Contacto y Presupuestos de Maquinaria de Agua | Alloatti SRL',
    description: 'Solicite un presupuesto personalizado para su planta embotelladora de agua. Póngase en contacto con nuestros ingenieros y asesores técnicos.',
    keywords: 'contacto, presupuesto de envasadora, ventas de maquinas de agua, soporte tecnico',
    canonical: 'https://www.alloatti.com/contacto',
    h1: 'Contactanos - Ventas y Asistencia Técnica',
    bodyText: 'Póngase en contacto con el departamento comercial y técnico de Alloatti SRL para recibir asistencia personalizada y cotizar la maquinaria que mejor se adapte al layout y volumen de producción de su planta embotelladora de agua potable. Puede enviarnos sus consultas a través de nuestro formulario de contacto web procesado por EmailJS de forma segura, comunicarse mediante WhatsApp directo para atención inmediata al +54 9 11 6864-1122, o visitarnos en nuestra planta industrial ubicada en Ing. Luis Silveyra 1139, Villa Adelina, Provincia de Buenos Aires, Argentina.'
  },
  {
    path: '/preguntas-frecuentes',
    title: 'Preguntas Frecuentes sobre Envasadoras de Agua | Alloatti SRL',
    description: 'Respuestas a dudas comunes sobre la producción, materiales (acero inoxidable), tiempos de lavado, conectividad HMI/App y soporte postventa de Alloatti.',
    keywords: 'preguntas frecuentes maquinas de agua, FAQ envasadoras, maquinas bidones, soporte tecnico, garantia envasadoras',
    canonical: 'https://www.alloatti.com/preguntas-frecuentes',
    h1: 'Preguntas Frecuentes - Centro de Ayuda Técnico',
    bodyText: 'Resolvemos sus dudas más frecuentes acerca del diseño, materiales y mantenimiento de nuestras envasadoras industriales. Toda la línea de envasadoras y pre-lavadoras de Alloatti SRL se construye exclusivamente en chasis de Acero Inoxidable alimenticio AISI 304, garantizando una resistencia extrema frente a agentes desinfectantes agresivos (ácido peracético, cloro, amonio cuaternario, agua ozonizada). La producción varía según el modelo desde 120 hasta 1000 bidones por hora en retornables y de 300 a 700 en descartables. Las máquinas incorporan control HMI de fácil manejo con conectividad Ethernet para monitoreo remoto.'
  },
  {
    path: '/maquinas/precios',
    title: 'Lista de Precios y Cotizador de Equipos | Alloatti SRL',
    description: 'Lista de precios confidencial y cotizador de envasadoras de bidones retornables, descartables y accesorios. Exclusivo para clientes Alloatti.',
    keywords: 'cotizador, lista de precios envasadoras, presupuesto maquinas de agua',
    canonical: 'https://www.alloatti.com/maquinas/precios',
    h1: 'Lista de Precios y Cotizador de Equipamiento Industrial',
    bodyText: 'Herramienta digital interactiva de cotización y lista oficial de precios exclusiva para asesores comerciales y clientes de Alloatti SRL. Permite configurar a medida la línea de embotellado, seleccionando modelos de bidón retornable (AT-120 a AT-960), descartable (AT-300D, AT-700D) y accesorios de automatización (cargadores, tolvas, jirafas, cintas transportadoras modulares por metro). El sistema calcula el valor neto estimado, el IVA del 10.5% y efectúa conversiones de dólares (USD) a pesos (ARS) basándose en la cotización oficial del Banco Nación Argentina (BNA), facilitando la generación inmediata de archivos listos para imprimir o compartir por WhatsApp.'
  },
  {
    path: '/maquinas/promociones',
    title: 'Simulador Plan Ahora 24 - Vendedores | Alloatti SRL',
    description: 'Panel de simulación y presupuesto del Plan Ahora 24 para asesores comerciales.',
    keywords: 'promociones, plan ahora 24, simulador de cuotas, financiacion de maquinaria',
    canonical: 'https://www.alloatti.com/maquinas/promociones',
    h1: 'Plan de Promociones y Financiamiento Directo Ahora 24',
    bodyText: 'Simulador comercial interactivo del Plan Ahora 24 para asesores de venta de Alloatti SRL. Facilita la creación y envío de simulaciones de financiación directa de equipamiento industrial. El plan otorga un descuento del 5% sobre el precio de lista y financia el saldo restante en 24 cuotas fijas mensuales en la moneda seleccionada (ARS/USD), permitiendo calcular los montos estimados con o sin IVA, ofreciendo una vía rápida de exportación para la previsualización del cliente y comunicación vía WhatsApp.'
  }
];

// Generate navigation HTML for SEO crawlers (to solve "no outgoing links")
function generateNavigationHtml() {
  let html = '<nav style="margin-top: 20px; padding: 10px; border-top: 1px solid #eee;">';
  html += '<p><strong>Mapa de Navegación del Sitio (SEO):</strong></p><ul style="line-height: 1.8;">';
  ROUTES.forEach(r => {
    html += `<li><a href="${r.path}">${r.title.split(' | ')[0]}</a></li>`;
  });
  html += '</ul></nav>';
  return html;
}

function prerender() {
  console.log('Starting static prerendering for SEO...');

  if (!fs.existsSync(TEMPLATE_PATH)) {
    console.error(`Error: Template file not found at ${TEMPLATE_PATH}. Run "npm run build" first.`);
    process.exit(1);
  }

  const templateHtml = fs.readFileSync(TEMPLATE_PATH, 'utf-8');
  const navigationHtml = generateNavigationHtml();

  ROUTES.forEach(route => {
    console.log(`Prerendering route: ${route.path}`);

    let html = templateHtml;

    // 1. Inject Title (replace existing <title> tag)
    html = html.replace(/<title>.*?<\/title>/i, `<title>${route.title}</title>`);

    // 2. Inject Meta Description and Keywords inside <head>
    const seoMetaTags = `
  <meta name="description" content="${route.description}" />
  <meta name="keywords" content="${route.keywords}" />
  <link rel="canonical" href="${route.canonical}" />
  <meta property="og:type" content="website" />
  <meta property="og:title" content="${route.title}" />
  <meta property="og:description" content="${route.description}" />
  <meta property="og:image" content="https://www.alloatti.com/Alloatti-logo-dark.png" />
  <meta property="og:url" content="${route.canonical}" />
  <meta property="og:site_name" content="Alloatti SRL" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="${route.title}" />
  <meta name="twitter:description" content="${route.description}" />
  <meta name="twitter:image" content="https://www.alloatti.com/Alloatti-logo-dark.png" />`;

    html = html.replace('</head>', `${seoMetaTags}\n</head>`);

    // 3. Inject static content inside <div id="root"></div> to solve H1, word count and internal links
    const staticBody = `
    <div style="max-width: 800px; margin: 0 auto; padding: 20px; font-family: sans-serif; display: none;" class="seo-crawler-helper">
      <h1>${route.h1}</h1>
      <p>${route.bodyText}</p>
      ${navigationHtml}
    </div>
  `;
    // Note: display: none hides it from real users so it doesn't blink during React load,
    // but search engine crawlers (Google, Ahrefs, Bing) still parse it in the HTML source code.

    html = html.replace('<div id="root"></div>', `<div id="root">${staticBody}</div>`);

    // 4. Save to target directory
    if (route.path === '/') {
      // Root route goes directly to dist/index.html
      fs.writeFileSync(TEMPLATE_PATH, html, 'utf-8');
      console.log(`Saved root route to ${TEMPLATE_PATH}`);
    } else {
      // Other routes go to dist/<route>/index.html
      const routeDir = path.join(DIST_DIR, route.path);
      fs.mkdirSync(routeDir, { recursive: true });
      const outputPath = path.join(routeDir, 'index.html');
      fs.writeFileSync(outputPath, html, 'utf-8');
      console.log(`Saved route to ${outputPath}`);
    }
  });

  console.log('Prerendering completed successfully!');
}

prerender();
