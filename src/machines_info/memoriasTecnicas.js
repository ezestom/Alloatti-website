/**
 * Memorias Técnicas de la maquinaria industrial Alloatti.
 * Por el momento, la memoria de AT-120 actúa como base predeterminada
 * para todos los modelos hasta que se suministren individualmente.
 */

export const memoriasTecnicas = {
	"AT-120": {
		modelo: "AT-120",
		linea: "Línea para procesamiento de bidones retornables",
		capacidad: "120 bidones retornables por hora",
		construccion: "Acero inoxidable AISI 304",
		suministros: {
			potencia: "4 HP",
			aireComprimido: "10 L/min a 5 Kg/cm²",
			control: "Control por PLC con pantalla táctil",
			operacion: "Carga y descarga secuenciada",
		},
		lavadora: {
			nombre: "Lavadora Industrial",
			configuracion: "Dos líneas en paralelo",
			construccion: "Acero inoxidable AISI 304",
			etapas: [
				{
					numero: "1",
					nombre: "Carga Manual",
					detalle: "Ingreso manual de bidones a la línea de lavado.",
					tiempo: "Manual",
				},
				{
					numero: "2 y 3",
					nombre: "Lavado Int. y Ext.",
					detalle: "Dos etapas de lavado simultáneo interior y exterior con picos giratorios.",
					tiempo: "2 min total",
				},
				{
					numero: "5",
					nombre: "Escurrido",
					detalle: "Zona de escurrido dinámico y drenaje de solución.",
					tiempo: "60 seg",
				},
				{
					numero: "6",
					nombre: "Enjuague Int. y Ext.",
					detalle: "Enjuague integral exterior e interior para remoción de agentes.",
					tiempo: "60 seg",
				},
				{
					numero: "7",
					nombre: "Enjuague con Agua de Llenado",
					detalle: "Enjuague interior final con agua tratada de llenado.",
					tiempo: "Prog. desde PLC",
				},
				{
					numero: "8",
					nombre: "Descarga Automática",
					detalle: "Expulsión y transferencia automática hacia la zona de llenado.",
					tiempo: "Automático",
				},
			],
			bombas: [
				{
					etiqueta: "Lavado Interior y Exterior",
					modelo: "PS1 70/30 o similar",
				},
				{
					etiqueta: "Enjuague Interior y Exterior",
					modelo: "PS1 70/30 o similar",
				},
			],
			motoReductores: [
				{
					etiqueta: "Lavado exterior",
					modelo: "Un 030 (relación 1-50)",
				},
				{
					etiqueta: "Cinta de transporte",
					modelo: "Un 040 (relación 1-80)",
				},
			],
			cabinaSeguridad: [
				{ item: "Cortinas", desc: "Levadizas para contención y seguridad" },
				{ item: "Visibilidad", desc: "2 ventanas transparentes removibles para inspección" },
				{ item: "Calentamiento", desc: "Por medio de la bomba de lavado (fuente de generación no incluida)" },
				{ item: "Higiene", desc: "Programa de saneado integral automatizado" },
			],
		},
		llenadora: {
			nombre: "Llenadora y Tapadora",
			construccion: "Acero inoxidable AISI 304",
			dosificacionTapado: [
				{ item: "Pico de llenado", desc: "1 pico de dosificación sanitaria de alta precisión" },
				{ item: "Pistón de tapado", desc: "1 pistón neumático de tapado a presión" },
			],
			bomba: "PS1X 70/30 o similar",
			motoReductores: [
				{
					etiqueta: "Cinta de transporte",
					modelo: "Un 030 (relación 1-50)",
				},
				{
					etiqueta: "Bastidor",
					modelo: "Un 030 (relación 1-07)",
				},
			],
			control: "Control por PLC con pantalla táctil interactiva. Operación de carga y descarga secuenciada.",
		},
	},
	"AT-180": {
		modelo: "AT-180",
		linea: "Línea automática para procesamiento de bidones retornables",
		capacidad: "180 bidones retornables por hora",
		construccion: "Acero inoxidable AISI 304",
		suministros: {
			potencia: "Trifásica industrial",
			aireComprimido: "Línea neumática industrial",
			control: "Control por PLC con pantalla táctil",
			operacion: "Carga y descarga secuenciada",
		},
		lavadora: {
			nombre: "Lavadora Industrial",
			configuracion: "Dos líneas en paralelo",
			construccion: "Acero inoxidable AISI 304",
			etapas: [
				{
					numero: "1",
					nombre: "Carga Manual",
					detalle: "Carga manual de bidones a la línea de lavado.",
					tiempo: "Manual",
				},
				{
					numero: "2 a 4",
					nombre: "Lavado Int. y Ext. (Picos Giratorios)",
					detalle: "Cuatro etapas de lavado simultáneo interior y exterior con picos giratorios.",
					tiempo: "2 min total",
				},
				{
					numero: "5",
					nombre: "Escurrido",
					detalle: "Zona de escurrido y drenaje de solución.",
					tiempo: "40 seg",
				},
				{
					numero: "6 y 7",
					nombre: "Enjuague Int. y Ext.",
					detalle: "Dos etapas de enjuague interior y exterior.",
					tiempo: "80 seg",
				},
				{
					numero: "8",
					nombre: "Enjuague Final (Agua de Llenado)",
					detalle: "Enjuague interior con agua de llenado, tiempo programable desde el PLC.",
					tiempo: "Prog. desde PLC",
				},
				{
					numero: "9",
					nombre: "Descarga Automática",
					detalle: "Expulsión y transferencia automática hacia la zona de llenado.",
					tiempo: "Automático",
				},
			],
			bombas: [
				{
					etiqueta: "Lavado Interior y Exterior",
					modelo: "PS1 70/30 o similar",
				},
				{
					etiqueta: "Enjuague Interior y Exterior",
					modelo: "PS1 70/30 o similar",
				},
			],
			motoReductores: [
				{
					etiqueta: "Lavado exterior",
					modelo: "Un NMRV 030",
				},
				{
					etiqueta: "Cinta de transporte",
					modelo: "Un NMRV 040",
				},
			],
			cabinaSeguridad: [
				{ item: "Cortinas", desc: "Levadizas para contención y seguridad" },
				{ item: "Visibilidad", desc: "2 ventanas transparentes removibles para inspección" },
				{ item: "Calentamiento", desc: "Por medio de la bomba de lavado (fuente de generación no incluida)" },
				{ item: "Higiene", desc: "Programa de saneado integral automatizado" },
			],
		},
		llenadora: {
			nombre: "Llenadora y Tapadora",
			construccion: "Acero inoxidable AISI 304",
			dosificacionTapado: [
				{ item: "Pico de llenado", desc: "1 pico de llenado de precisión sanitaria" },
				{ item: "Pistón de tapado", desc: "1 pistón de tapado neumático a presión" },
				{ item: "Alimentación de tapas", desc: "Tolva centrífuga automática" },
			],
			bomba: "Lowara CEA 120/3/A-V o similar",
			motoReductores: [
				{
					etiqueta: "Cinta de transporte",
					modelo: "NMRV 030",
				},
				{
					etiqueta: "Tolva",
					modelo: "NMRV 030",
				},
			],
			control: "Control por PLC con pantalla táctil interactiva. Operación de carga y descarga secuenciada.",
		},
	},
	"AT-240": {
		modelo: "AT-240",
		linea: "Línea para procesamiento de bidones retornables",
		capacidad: "240 bidones retornables por hora",
		construccion: "Acero inoxidable AISI 304",
		suministros: {
			potencia: "Trifásica industrial",
			aireComprimido: "Línea neumática industrial",
			control: "Control por PLC industrial",
			operacion: "Carga y descarga secuenciada",
		},
		lavadora: {
			nombre: "Lavadora Industrial",
			configuracion: "Dos líneas en paralelo",
			construccion: "Acero inoxidable AISI 304",
			etapas: [
				{
					numero: "1",
					nombre: "Carga de Bidones",
					detalle: "Carga manual (automática disponible sobre pedido).",
					tiempo: "Manual / Auto",
				},
				{
					numero: "2 a 5",
					nombre: "Lavado Int. y Ext. (4 etapas)",
					detalle: "Cuatro etapas de lavado simultáneo int. y ext. con picos de lavado exterior rotativos.",
					tiempo: "120 seg (2 min)",
				},
				{
					numero: "6",
					nombre: "Escurrido",
					detalle: "Zona de escurrido y drenaje de solución.",
					tiempo: "Drenaje",
				},
				{
					numero: "7-8",
					nombre: "Enjuague Int. y Ext. Recirculante",
					detalle: "Dos etapas de enjuague interior y exterior con agua recirculante.",
					tiempo: "2 etapas",
				},
				{
					numero: "9",
					nombre: "Enjuague Final (Agua de Llenado)",
					detalle: "Enjuague final interior con agua de llenado (no recirculante).",
					tiempo: "Prog. desde PLC",
				},
				{
					numero: "10",
					nombre: "Descarga Automática",
					detalle: "Expulsión y transferencia automática hacia la zona de llenado.",
					tiempo: "Automático",
				},
			],
			bombas: [
				{
					etiqueta: "Lavado Interior y Exterior",
					modelo: "Lowara CA 210-4 A/V o similar",
				},
				{
					etiqueta: "Enjuague Interior y Exterior",
					modelo: "Lowara CA 210-3 A/V o similar",
				},
			],
			motoReductores: [
				{
					etiqueta: "Lavado exterior",
					modelo: "Un NMRV 030",
				},
				{
					etiqueta: "Cinta de transporte",
					modelo: "Un NMRV 040",
				},
			],
			cabinaSeguridad: [
				{ item: "Cortinas", desc: "Levadizas para contención y seguridad" },
				{ item: "Visibilidad", desc: "2 ventanas transparentes removibles para inspección" },
				{ item: "Calentamiento", desc: "Preparado para recirculación desde fuente exterior (no incluida)" },
				{ item: "Higiene", desc: "Programa de saneado integral automatizado" },
			],
		},
		llenadora: {
			nombre: "Llenadora y Tapadora",
			construccion: "Acero inoxidable AISI 304",
			dosificacionTapado: [
				{ item: "Picos de llenado", desc: "Sin contacto con el envase, su contenido y agua de rebalse" },
				{ item: "Pistón de tapado", desc: "1 pistón de tapado neumático a presión" },
				{ item: "Alimentación de tapas", desc: "Tolva centrífuga automática" },
			],
			bomba: "Lowara CEA 210/1/A-V o similar",
			motoReductores: [
				{
					etiqueta: "Cinta de transporte",
					modelo: "NMRV 040",
				},
				{
					etiqueta: "Tolva",
					modelo: "NMRV 030",
				},
			],
			control: "Control por PLC industrial. Operación de carga y descarga secuenciada.",
		},
	},
	"AT-360": {
		modelo: "AT-360",
		linea: "Línea para procesamiento de bidones retornables",
		capacidad: "360 bidones retornables por hora (carga automática)",
		construccion: "Acero inoxidable AISI 304",
		suministros: {
			potencia: "8 HP (6 kW)",
			aireComprimido: "55 L/min (a 6 bar)",
			consumoAgua: "8.700 L/h (para 5s de enjuague)",
			control: "Control por PLC industrial",
			operacion: "Carga y descarga secuenciada",
		},
		lavadora: {
			nombre: "Lavadora Industrial",
			configuracion: "Tres líneas en paralelo",
			construccion: "Acero inoxidable AISI 304 (cintas en acero inox)",
			etapas: [
				{
					numero: "1",
					nombre: "Carga Automática",
					detalle: "Carga automatizada sincronizada de bidones.",
					tiempo: "Automático",
				},
				{
					numero: "2 a 5",
					nombre: "Lavado Int. y Ext. (4 etapas)",
					detalle: "Cuatro etapas de lavado simultáneo int. y ext. con picos de lavado exterior rotativos.",
					tiempo: "120 seg (2 min)",
				},
				{
					numero: "6",
					nombre: "Escurrido",
					detalle: "Zona de escurrido dinámico y drenaje de solución.",
					tiempo: "Drenaje",
				},
				{
					numero: "7-8",
					nombre: "Enjuague Int. y Ext. Recirculante",
					detalle: "Dos etapas de enjuague interior y exterior con agua recirculante.",
					tiempo: "2 etapas",
				},
				{
					numero: "9",
					nombre: "Enjuague Final (Agua de Llenado)",
					detalle: "Enjuague final interior con agua de llenado (no recirculante).",
					tiempo: "Prog. desde PLC",
				},
				{
					numero: "10",
					nombre: "Descarga Automática",
					detalle: "Expulsión y transferencia automática hacia la zona de llenado.",
					tiempo: "Automático",
				},
			],
			bombas: [
				{
					etiqueta: "Lavado Interior y Exterior",
					modelo: "Lowara CA 210-4A/V o similar",
				},
				{
					etiqueta: "Enjuague Interior y Exterior",
					modelo: "Lowara CA 210-3A/V o similar",
				},
			],
			motoReductores: [
				{
					etiqueta: "Lavado exterior",
					modelo: "Un NMRV 030",
				},
				{
					etiqueta: "Cinta de transporte",
					modelo: "Un NMRV 040",
				},
			],
			cabinaSeguridad: [
				{ item: "Cortinas", desc: "Levadizas para contención y seguridad" },
				{ item: "Visibilidad", desc: "4 ventanas transparentes removibles para inspección" },
				{ item: "Calentamiento", desc: "Preparado para recirculación desde fuente exterior (no incluida)" },
				{ item: "Estructura y Cintas", desc: "Cintas transportadoras íntegramente en acero inoxidable" },
				{ item: "Higiene", desc: "Programa de saneado integral automatizado" },
			],
		},
		llenadora: {
			nombre: "Llenadora y Tapadora",
			construccion: "Acero inoxidable AISI 304",
			dosificacionTapado: [
				{ item: "Picos de llenado", desc: "3 picos de llenado de precisión sanitaria" },
				{ item: "Pistón de tapado", desc: "1 pistón de tapado neumático a presión" },
				{ item: "Alimentación de tapas", desc: "Tolva centrífuga automática + Jirafa para 500 tapas" },
				{ item: "Materiales cintas", desc: "Cintas de llenadora en acero inox y jirafa en resina acetal" },
			],
			bomba: "Lowara CEA 370/1/A-V o similar",
			motoReductores: [
				{
					etiqueta: "Cinta de transporte",
					modelo: "NMRV 040",
				},
				{
					etiqueta: "Tolva",
					modelo: "NMRV 030",
				},
			],
			control: "Control por PLC industrial. Operación de carga y descarga secuenciada.",
		},
	},
	"AT-480": {
		modelo: "AT-480",
		linea: "Línea para procesamiento de bidones retornables",
		capacidad: "480 bidones retornables por hora",
		construccion: "Acero inoxidable AISI 304",
		suministros: {
			potencia: "Trifásica industrial",
			aireComprimido: "Línea neumática industrial",
			control: "PLC con conectividad a Internet",
			operacion: "Carga y descarga secuenciada",
		},
		lavadora: {
			nombre: "Lavadora Industrial",
			configuracion: "Cuatro líneas en paralelo",
			construccion: "Acero inoxidable AISI 304",
			etapas: [
				{
					numero: "1",
					nombre: "Carga Automática",
					detalle: "Carga automatizada sincronizada de bidones.",
					tiempo: "Automático",
				},
				{
					numero: "2 a 5",
					nombre: "Lavado Int. y Ext. (4 etapas)",
					detalle: "Cuatro etapas de lavado simultáneo int. y ext.",
					tiempo: "120 segundos",
				},
				{
					numero: "6",
					nombre: "Escurrido",
					detalle: "Zona de escurrido y drenaje de solución.",
					tiempo: "Drenaje",
				},
				{
					numero: "7-8",
					nombre: "Enjuague Int. y Ext.",
					detalle: "Dos etapas de enjuague interior y exterior con agua.",
					tiempo: "2 etapas",
				},
				{
					numero: "9",
					nombre: "Enjuague Final (Agua de Llenado)",
					detalle: "Enjuague final interior con agua de llenado.",
					tiempo: "Prog. desde PLC",
				},
				{
					numero: "10",
					nombre: "Descarga Automática",
					detalle: "Expulsión y transferencia automática hacia la zona de llenado.",
					tiempo: "Automático",
				},
			],
			bombas: [
				{
					etiqueta: "Lavado Interior y Exterior",
					modelo: "Lowara CA 210-5 A/V o similar",
				},
				{
					etiqueta: "Enjuague Interior y Exterior",
					modelo: "Lowara CA 210-4 A/V o similar",
				},
			],
			motoReductores: [
				{
					etiqueta: "Lavado exterior",
					modelo: "Un NMRV 030",
				},
				{
					etiqueta: "Cinta de entrada",
					modelo: "Un NMRV 030",
				},
				{
					etiqueta: "Cinta de transporte",
					modelo: "Un NMRV 040",
				},
			],
			cabinaSeguridad: [
				{ item: "Cortinas", desc: "Levadizas para contención y seguridad" },
				{ item: "Visibilidad", desc: "4 ventanas transparentes removibles para inspección" },
				{ item: "Calentamiento", desc: "Recirculación desde fuente exterior o quemador a gas (a definir, no incluidos)" },
				{ item: "Construcción", desc: "Íntegramente en acero inoxidable AISI 304" },
				{ item: "Higiene", desc: "Programa de saneado integral automatizado" },
			],
		},
		llenadora: {
			nombre: "Llenadora y Tapadora",
			construccion: "Acero inoxidable AISI 304",
			dosificacionTapado: [
				{ item: "Picos de llenado", desc: "4 picos de llenado de precisión sanitaria" },
				{ item: "Sistema de tapado", desc: "Tapado continuo de alta velocidad" },
				{ item: "Alimentación de tapas", desc: "Tolva centrífuga + Alimentador con capacidad para 500 tapas" },
			],
			bomba: "Lowara CEA 370/1/A-V o similar",
			motoReductores: [
				{
					etiqueta: "Cinta de transporte",
					modelo: "NMRV 040",
				},
				{
					etiqueta: "Tolva centrífuga",
					modelo: "NMRV 030",
				},
				{
					etiqueta: "Alimentador de tapas",
					modelo: "NMRV 030",
				},
				{
					etiqueta: "Cabezal tapador",
					modelo: "NMRV 030",
				},
			],
			control: "Control por PLC industrial con posibilidad de conexión a Internet para telegestión y diagnóstico remoto.",
		},
	},
	"AT-600": {
		modelo: "AT-600",
		linea: "Línea para procesamiento de bidones retornables",
		capacidad: "600 bidones retornables por hora",
		construccion: "Acero inoxidable AISI 304",
		suministros: {
			potencia: "15 HP (3x380V)",
			aireComprimido: "55 L/min a 6 Kg/cm²",
			control: "PLC Fatec con Pantalla Táctil",
			operacion: "Secuenciada (parámetros según requerimiento)",
		},
		lavadora: {
			nombre: "Lavadora Industrial de Alta Capacidad",
			configuracion: "Cinco líneas en paralelo",
			construccion: "Acero inoxidable AISI 304",
			etapas: [
				{
					numero: "1",
					nombre: "Carga Automática",
					detalle: "Carga automatizada sincronizada de bidones.",
					tiempo: "Automático",
				},
				{
					numero: "2 a 6",
					nombre: "Lavado Int. y Ext. (5 etapas)",
					detalle: "Cinco etapas de lavado con picos giratorios de lavado exterior.",
					tiempo: "2 minutos",
				},
				{
					numero: "7",
					nombre: "Escurrido",
					detalle: "Zona de escurrido dinámico y drenaje de solución.",
					tiempo: "24 seg",
				},
				{
					numero: "8 a 10",
					nombre: "Enjuague Int. y Ext. (3 etapas)",
					detalle: "Tres etapas de enjuague interior y exterior.",
					tiempo: "48 seg",
				},
				{
					numero: "11",
					nombre: "Enjuague Final (Agua de Llenado)",
					detalle: "Enjuague interior con agua de llenado (mín. 10s / máx. 24s).",
					tiempo: "Prog. desde PLC",
				},
				{
					numero: "12",
					nombre: "Descarga Automática",
					detalle: "Expulsión y transferencia automática hacia la zona de llenado.",
					tiempo: "Automático",
				},
			],
			bombas: [
				{
					etiqueta: "Lavado Interior y Exterior",
					modelo: "Ebara 3LM32-125 o similar",
				},
				{
					etiqueta: "Enjuague Interior y Exterior",
					modelo: "Lowara CEA 210/4/A-V o similar",
				},
			],
			motoReductores: [
				{
					etiqueta: "Lavado exterior",
					modelo: "Un NMRV 030",
				},
				{
					etiqueta: "Cinta de transporte",
					modelo: "Un NMRV 040",
				},
				{
					etiqueta: "Cargador",
					modelo: "Un NMRV 030",
				},
			],
			cabinaSeguridad: [
				{ item: "Sistema de filtrado", desc: "Doble filtro con limpieza independiente sin detener la línea" },
				{ item: "Visibilidad", desc: "6 ventanas transparentes removibles para inspección" },
				{ item: "Cortinas", desc: "Levadizas para contención y seguridad" },
				{ item: "Calentamiento", desc: "Bomba de recirculación integrada" },
				{ item: "Construcción", desc: "Estructura y tuberías en acero inoxidable AISI 304" },
			],
		},
		llenadora: {
			nombre: "Llenadora y Tapadora",
			construccion: "Acero inoxidable AISI 304",
			dosificacionTapado: [
				{ item: "Picos de llenado", desc: "Sin contacto con el envase, su contenido y agua de rebalse" },
				{ item: "Alimentación de tapas", desc: "Ordenador de tapas con capacidad para 500 tapas" },
				{ item: "Sistema de tapado", desc: "Cinta de tapado continuo a presión" },
			],
			bomba: "Lowara 370/3/AV",
			motoReductores: [
				{
					etiqueta: "Cinta de transporte",
					modelo: "NMRV 40",
				},
				{
					etiqueta: "Tolva",
					modelo: "NMRV 30",
				},
				{
					etiqueta: "Cinta de tapado",
					modelo: "NMRV 30",
				},
				{
					etiqueta: "Cargador de tapas",
					modelo: "NMRV 30",
				},
			],
			control: "Comando general por PLC Fatec con pantalla táctil interactiva. Parámetros operativos configurables.",
		},
	},
};

/**
 * Retorna la memoria técnica correspondiente al modelo.
 * Retorna el objeto si existe, o null si aún no está cargada para mostrar "Próximamente".
 */
export function getMemoriaTecnica(modelName) {
	if (!modelName) return null;
	const match = Object.keys(memoriasTecnicas).find(
		(key) => key.trim().toLowerCase() === modelName.trim().toLowerCase()
	);
	return match ? memoriasTecnicas[match] : null;
}
