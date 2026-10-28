import { pending, siteSchema, type Site, type Zone, type ZoneSlug } from "./schema";
import { DEFAULT_WHATSAPP_MESSAGE, WHATSAPP_NUMBER } from "@/lib/whatsapp";
import { zones } from "./zones";

/*
 * Única fuente de contenido del sitio. Se valida con zod al cargar el módulo.
 * Los datos desconocidos usan pending(): el sitio no los muestra hasta que se reemplacen por el valor real.
 * Revisar con el Dr. Naveda antes de publicar: servicios, pilares y preguntas frecuentes.
 */
export const site: Site = siteSchema.parse({
  doctor: {
    name: "Dr. Jorge Naveda",
    title: "Médico Traumatólogo",
    specialty: "Traumatología y Ortopedia",
    cmp: "89809",
    claim: "Tu bienestar es mi prioridad",
    cta: "Agenda tu consulta",
    bio: pending("Biografía por completar"),
    education: pending("Formación por completar"),
    rne: pending("RNE por completar"),
    track: pending("Trayectoria e instituciones por completar"),
  },
  contact: {
    whatsapp: { display: "+51 999 658 288", number: WHATSAPP_NUMBER },
    address: {
      street: "Av. Defensores del Morro 2007",
      district: "Chorrillos",
      city: "Lima",
      country: "PE",
    },
    instagram: {
      handle: "@dr.jorgenaveda",
      url: "https://www.instagram.com/dr.jorgenaveda/",
    },
    clinicName: pending("Nombre del consultorio por completar"),
    hours: pending("Horarios por completar"),
    mapsUrl: pending("Enlace de Google Maps por completar"),
  },
  services: [
    {
      title: "Evaluación y seguimiento",
      description:
        "Escucho tu caso con calma, te examino y acordamos cómo seguir, con controles cuando hagan falta.",
    },
    {
      title: "Problemas ortopédicos",
      description:
        "Dolor y lesiones de huesos, articulaciones, músculos y tendones, desde la columna hasta el pie.",
    },
    {
      title: "Tratamientos conservadores",
      description:
        "Opciones que no requieren cirugía. Te oriento sobre cuáles pueden servir en tu caso, según lo que encuentre en la consulta.",
    },
    {
      title: "Procedimientos ambulatorios",
      description:
        "Procedimientos que no requieren hospitalización. Si tu caso lo necesita, te explico en la consulta cuáles son y qué implican.",
    },
  ],
  pillars: [
    {
      id: "atencion-personalizada",
      title: "Atención personalizada",
      verb: "Escucho",
      description:
        "Empiezo por escucharte: cómo empezó tu dolor, qué lo empeora y qué te limita en tu día a día.",
    },
    {
      id: "diagnostico-claro",
      title: "Diagnóstico claro",
      verb: "Diagnostico",
      description:
        "Reviso tu caso y te explico con palabras simples qué tienes, qué significa y qué opciones hay.",
    },
    {
      id: "tratamiento-especializado",
      title: "Tratamiento especializado",
      verb: "Trato",
      description:
        "Te oriento sobre el tratamiento y lo defino contigo. Primero lo conservador cuando corresponde; si hace falta algo más, te lo explico antes.",
    },
  ],
  zones,
  faqs: [
    {
      id: "cuando-acudir",
      question: "¿Cuándo debo acudir a un traumatólogo?",
      answer:
        "Cuando un dolor de huesos, articulaciones, músculos o tendones dura más de unos días, te limita en tu día a día, vuelve con frecuencia o te despierta de noche. También después de una caída o un golpe fuerte, o si notas hormigueo o pérdida de fuerza. Si hay deformidad, no puedes apoyar o mover la zona, o hay fiebre con enrojecimiento, no esperes: acude a emergencias o llama al SAMU (106).",
    },
    {
      id: "urgencia",
      question: "¿Cuándo es una urgencia?",
      answer:
        "Si hay dolor intenso tras una caída o un accidente, deformidad, o no puedes apoyar ni mover la zona. También si un brazo o una pierna están fríos, pálidos o sin sensibilidad, si hay fiebre con una zona roja, caliente e hinchada, o si el dolor de espalda llega con pérdida de control de la orina o las heces. Dolor en el hombro o el brazo con dolor de pecho o falta de aire puede ser del corazón. En cualquiera de estos casos llama al SAMU (106) o ve a la emergencia más cercana, sin esperar respuesta por WhatsApp.",
    },
    {
      id: "cirugia",
      question: "¿Siempre se necesita cirugía?",
      answer:
        "No. La mayoría de los problemas de huesos y articulaciones se empieza a tratar sin cirugía: ejercicios, fisioterapia, ajustes en la actividad, control del peso y medicamentos indicados por un médico. La cirugía se considera cuando eso no basta o en ciertas lesiones, por ejemplo algunas fracturas o roturas de tendones y ligamentos. La decisión se toma contigo después de evaluarte y explicarte tus opciones.",
    },
    {
      id: "estudios",
      question: "¿Necesito radiografía o resonancia?",
      answer:
        "No siempre. Muchas molestias se orientan con tu historia y el examen físico, y los estudios se piden si hace falta para aclarar el diagnóstico. La radiografía muestra los huesos, la ecografía muestra tendones y bolsas, y la resonancia muestra meniscos, ligamentos, discos y nervios. En un dolor de espalda común, por ejemplo, suelen no ser necesarios al inicio.",
    },
    {
      id: "hielo-calor",
      question: "¿Hielo o calor para el dolor?",
      answer:
        "Hielo para lo reciente: un golpe, una torcedura o hinchazón en los primeros días. Calor suave para la rigidez y las contracturas. Usa cualquiera de los dos envuelto en un paño, unos 20 minutos cada vez, nunca directo sobre la piel y sin dormirte con él. No uses calor sobre una zona hinchada o recién lesionada, y consulta antes si tienes diabetes o poca sensibilidad en la piel.",
    },
    {
      id: "cuanto-tarda",
      question: "¿Cuánto tarda en mejorar un esguince o un dolor lumbar?",
      answer:
        "Depende de cada persona y de la gravedad, así que son solo rangos generales. Un esguince leve suele sentirse mejor en un par de semanas, pero uno grave puede tardar meses, y conviene esperar varias semanas antes de volver al deporte intenso. Un dolor lumbar común suele mejorar en unas semanas con actividad suave. Si pasa de unas 4 a 6 semanas, empeora o te limita mucho, conviene evaluarlo.",
    },
    {
      id: "deporte",
      question: "¿Puedo seguir haciendo deporte con dolor?",
      answer:
        "Si es una molestia leve que baja en un rato, suele ser posible mantenerte activo con menos intensidad e impacto; el reposo total casi nunca es lo mejor. Detente si el dolor es fuerte o de inicio brusco, si hay hinchazón, si la zona se traba o te falla, o si duele aunque descanses. Si es una lesión nueva, es mejor que te evalúen antes de volver al deporte, para no empeorarla.",
    },
    {
      id: "infiltracion",
      question: "¿Qué es una infiltración o un procedimiento ambulatorio?",
      answer:
        "Un procedimiento ambulatorio es el que no requiere hospitalización. Una infiltración es uno de ellos: se inyecta un medicamento, por ejemplo un corticoide con anestésico local, dentro de una articulación o cerca de un tendón para bajar la inflamación y el dolor. Su efecto puede ser temporal, tiene riesgos y no sirve para todos los casos. Si fuera una opción para ti, se decide después de evaluarte y te explico qué implica.",
    },
    {
      id: "diferencias",
      question: "¿Qué diferencia hay entre traumatólogo, ortopedista y fisiatra o fisioterapeuta?",
      answer:
        "En Perú la especialidad médica se llama Traumatología y Ortopedia, así que traumatólogo y ortopedista suelen ser el mismo médico: trata huesos, articulaciones, músculos, tendones y ligamentos, con o sin cirugía. El fisiatra es un médico de Medicina Física y Rehabilitación, enfocado en recuperar la función. El fisioterapeuta no es médico: guía tus ejercicios y terapias físicas, normalmente según un plan indicado. Muchas veces trabajan en conjunto.",
    },
    {
      id: "como-agendar",
      question: "¿Cómo agendo mi consulta?",
      answer:
        "Por WhatsApp, al +51 999 658 288. Usa el botón «Agenda tu consulta»: si entras desde una zona, el mensaje sale con tu zona; lo revisas y lo envías. La fecha y la hora se coordinan por ahí. La consulta es en Av. Defensores del Morro 2007.",
    },
    {
      id: "que-llevar",
      question: "¿Qué debo llevar a la consulta?",
      answer:
        "Tu DNI, si lo tienes a mano, y tus estudios anteriores si los tienes: radiografías, resonancias, ecografías e informes. Lleva también la lista de medicinas que tomas y tus alergias. Usa ropa cómoda que permita ver y mover la zona. Anota cuándo empezó el dolor, qué lo empeora, qué lo alivia y si hubo un golpe o una caída.",
    },
    {
      id: "whatsapp",
      question: "¿Atienden por WhatsApp?",
      answer:
        "El contacto y la agenda son por WhatsApp. No es una consulta médica por chat: el diagnóstico y el tratamiento se definen en la consulta, después de examinarte. Si es una urgencia, no esperes respuesta por chat: llama al SAMU (106) o ve a la emergencia más cercana.",
    },
    {
      id: "donde",
      question: "¿Dónde queda el consultorio?",
      answer:
        "En Av. Defensores del Morro 2007, Chorrillos, Lima. Los horarios y la fecha de tu cita se coordinan por WhatsApp.",
    },
  ],
  copy: {
    disclaimer:
      "La información de este sitio es orientativa y no reemplaza una consulta médica.",
    defaultWhatsappMessage: DEFAULT_WHATSAPP_MESSAGE,
  },
});

export const zoneBySlug = new Map<ZoneSlug, Zone>(
  site.zones.map((zone) => [zone.slug, zone]),
);

export function getZone(slug: string): Zone | undefined {
  return zoneBySlug.get(slug as ZoneSlug);
}
