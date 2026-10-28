import type { Zone } from "./schema";

/*
 * Texto orientativo y general. No promete resultados ni diagnósticos.
 * Revisar con el Dr. Naveda antes de publicar.
 */
export const zones: Zone[] = [
  {
    slug: "rodilla",
    name: "Rodilla",
    withArticle: "la rodilla",
    intro:
      "La rodilla une el muslo con la pierna y soporta tu peso en cada paso, por eso es una de las articulaciones que más molestias da. El dolor puede venir del cartílago, los meniscos, los ligamentos, los tendones o las bolsas que amortiguan.",
    commonProblems: [
      "Artrosis: desgaste del cartílago que causa dolor al caminar o subir escaleras, rigidez al empezar a moverte y, a veces, hinchazón.",
      "Lesión de menisco: rotura del cartílago que amortigua la rodilla, por una torcedura o por desgaste, con dolor, hinchazón y a veces sensación de traba.",
      "Lesión de ligamento cruzado: suele ocurrir en un giro brusco o un salto, con un chasquido, hinchazón rápida y sensación de que la rodilla falla.",
      "Tendinitis rotuliana: inflamación del tendón bajo la rótula por saltos o carreras, con dolor al saltar, correr o subir escaleras.",
      "Síndrome femoropatelar: dolor alrededor o detrás de la rótula, que molesta al subir escaleras, ponerte en cuclillas o estar sentado mucho rato.",
      "Bursitis: inflamación de las bolsas que amortiguan la rodilla, con hinchazón, calor y dolor sobre la rótula o debajo de ella, sobre todo al arrodillarte.",
    ],
    conservative:
      "Según el diagnóstico, se suele empezar por lo conservador: ajustar la actividad sin dejar de moverte, ejercicios para fortalecer el muslo, fisioterapia, control del peso si hace falta y los medicamentos que indique un médico. En las lesiones de ligamentos o de menisco, el manejo varía según el tipo y la gravedad de la lesión; algunas necesitan evaluación pronta. Si hace falta, se pide una radiografía o una resonancia para aclarar qué tienes.",
    whenToConsult:
      "Si el dolor dura más de unos días, te cuesta caminar o subir escaleras, la rodilla se hincha o se bloquea, o sientes que te falla al apoyar. También si sentiste un chasquido en una caída o un giro y la rodilla se hinchó pronto.",
    summary: {
      intro:
        "La rodilla soporta tu peso en cada paso. El dolor puede venir del cartílago, los meniscos, los ligamentos o los tendones.",
      problems: [
        { name: "Artrosis", text: "desgaste del cartílago; dolor y rigidez al empezar a moverte." },
        { name: "Lesión de menisco", text: "rotura del cartílago amortiguador; dolor, hinchazón y a veces traba." },
        { name: "Ligamento cruzado", text: "tras un giro o un salto; chasquido, hinchazón y sensación de que falla." },
        { name: "Tendinitis rotuliana", text: "inflamación del tendón bajo la rótula; duele al saltar o correr." },
        { name: "Síndrome femoropatelar", text: "dolor alrededor de la rótula al subir escaleras o estar sentado." },
      ],
      first:
        "Según el diagnóstico, se suele empezar por ajustar la actividad, con ejercicios y fisioterapia. Los medicamentos, solo con indicación médica.",
      consult: [
        "Dolor que dura más de unos días o te cuesta caminar y subir escaleras.",
        "Rodilla que se hincha, se bloquea o te falla al apoyar.",
        "Chasquido tras una caída o un giro, con hinchazón pronta.",
      ],
      urgent: [
        "Dolor intenso tras una caída o un golpe, sin poder apoyar el pie.",
        "Deformidad visible de la rodilla o la pierna.",
        "Rodilla roja y caliente con fiebre, o pie frío, pálido o sin sensibilidad.",
      ],
    },
    page: {
      metaTitle: "Dolor de rodilla",
      metaDescription:
        "Dolor de rodilla: causas frecuentes, tratamiento conservador primero y cuándo consultar. Dr. Jorge Naveda, traumatólogo en Lima.",
      h1: "Dolor de rodilla: evaluación y tratamiento conservador",
      lede: "Qué suele causar el dolor de rodilla, qué se revisa primero antes de hablar de cirugía y qué señales piden consultar.",
      explanation: [
        "La rodilla une el hueso del muslo con los de la pierna y está protegida por la rótula. Entre los huesos hay cartílago y meniscos que amortiguan el movimiento, y ligamentos y tendones que le dan estabilidad.",
        "El dolor puede aparecer por un golpe o una torcedura, por el uso repetido (correr, saltar, arrodillarte o subir muchas escaleras) o por el desgaste de los años. El sobrepeso también pesa: aumenta la carga sobre la articulación. Por eso dos personas con dolor de rodilla pueden necesitar cosas distintas.",
        "Para aclarar el diagnóstico, primero te escucho y te examino la rodilla. Si hace falta, se puede pedir una radiografía, que muestra los huesos y el espacio de la articulación, o una ecografía o una resonancia, que muestran mejor los tendones, las bolsas, los meniscos y los ligamentos. No todas las rodillas necesitan estudios.",
        "Para cuidarla: mantén un peso saludable, fortalece muslos y glúteos, calienta antes de hacer deporte, usa calzado que te sostenga y aumenta la actividad poco a poco.",
      ],
      conservativeSteps: [
        "Ajustar la actividad: bajar el impacto (saltos, carreras, cuclillas profundas) sin dejar de moverte del todo, según lo que tu rodilla tolere.",
        "Frío local en los primeros días después de un golpe o una torcedura para bajar la hinchazón; el calor suave puede aliviar la rigidez cuando el dolor es de larga data.",
        "Fisioterapia y ejercicios para fortalecer el muslo y los glúteos, que sostienen la rodilla.",
        "Control del peso cuando corresponde, porque cada kilo extra aumenta la carga sobre la articulación.",
        "Medicamentos para el dolor y la inflamación, solo con indicación médica.",
        "Calzado adecuado y, si hace falta, bastón, rodillera o soportes indicados en la consulta.",
        "Si lo conservador no basta o la lesión lo requiere, te explico las otras opciones, incluida la cirugía, antes de decidir contigo.",
      ],
      consultSigns: [
        "Dolor que dura más de unos días o que va y viene desde hace semanas.",
        "Molestia al caminar, subir escaleras o levantarte de una silla.",
        "Sensación de que la rodilla se traba, cruje con dolor o se afloja.",
        "Hinchazón que no baja.",
        "Dolor después de una torcedura o un giro, con hinchazón en las primeras horas.",
        "Dolor que te despierta de noche o aparece incluso en reposo.",
      ],
      urgentSigns: [
        "Dolor intenso después de una caída o un golpe, con imposibilidad de apoyar el pie.",
        "Deformidad visible de la rodilla o la pierna.",
        "Rodilla roja, caliente y dolorosa, con fiebre.",
        "Pie frío, pálido o sin sensibilidad.",
        "Hinchazón grande que aparece en pocas horas después de una lesión.",
      ],
    },
    whatsappMessage:
      "Hola Dr. Naveda, tengo molestias en la rodilla y quisiera agendar una consulta.",
  },
  {
    slug: "hombro",
    name: "Hombro",
    withArticle: "el hombro",
    intro:
      "El hombro es una de las articulaciones más móviles del cuerpo, y por eso también se lastima con facilidad. Para moverse en todas direcciones depende de los tendones del manguito rotador, de bolsas que amortiguan y de varios huesos y músculos que trabajan juntos.",
    commonProblems: [
      "Lesión del manguito rotador: desgaste o rotura de los tendones que mueven y sostienen el hombro, con dolor al levantar el brazo, debilidad y dolor nocturno.",
      "Tendinitis del hombro: inflamación de un tendón por sobrecarga, con dolor en la parte delantera o lateral al hacer movimientos por encima de la cabeza.",
      "Bursitis y pinzamiento: la bolsa o los tendones se irritan al rozar bajo el hueso del hombro, y duele al levantar el brazo o al dormir sobre ese lado.",
      "Hombro congelado: rigidez que va aumentando, con dolor y pérdida de movimiento; es más frecuente entre los 40 y 60 años y en personas con diabetes.",
      "Luxación e inestabilidad: la cabeza del hueso del brazo se sale de su sitio tras una caída o un golpe, con dolor intenso y deformidad, y puede volver a salirse.",
      "Artrosis acromioclavicular: desgaste de la articulación de la parte alta del hombro, donde se une la clavícula, con dolor al cargar o al cruzar el brazo sobre el pecho.",
      "Dolor que viene del cuello: un nervio irritado en el cuello puede dar dolor en el hombro y el brazo, a veces con hormigueo.",
    ],
    conservative:
      "Muchos dolores de hombro se tratan primero evitando por un tiempo los movimientos que duelen, con ejercicios guiados, fisioterapia y medicamentos indicados por un médico. Si hace falta, se piden una radiografía, una ecografía o una resonancia para aclarar el diagnóstico. En las luxaciones, el manejo varía según el tipo y la gravedad de la lesión; algunas necesitan evaluación pronta.",
    whenToConsult:
      "Si el dolor te despierta de noche, no puedes levantar el brazo, o dura más de una o dos semanas aunque descanses.",
    summary: {
      intro:
        "El hombro es muy móvil y por eso se lastima con facilidad. Depende de tendones, bolsas, huesos y músculos.",
      problems: [
        { name: "Manguito rotador", text: "desgaste o rotura de tendones; dolor al levantar el brazo y de noche." },
        { name: "Tendinitis", text: "inflamación por sobrecarga; duele al mover el brazo por encima de la cabeza." },
        { name: "Bursitis y pinzamiento", text: "irritación al rozar bajo el hueso; duele al levantar el brazo." },
        { name: "Hombro congelado", text: "rigidez que aumenta, con dolor y pérdida de movimiento." },
        { name: "Luxación", text: "el hueso se sale de su sitio tras una caída; puede repetirse." },
      ],
      first:
        "Según el diagnóstico, se suele empezar evitando por un tiempo los movimientos que duelen, con ejercicios y fisioterapia. Los medicamentos, solo con indicación médica.",
      consult: [
        "Dolor que te despierta de noche o dura más de una o dos semanas.",
        "No puedes levantar el brazo o sientes que el hombro se sale.",
        "Pérdida de fuerza u hormigueo que baja por el brazo.",
      ],
      urgent: [
        "Dolor de hombro o brazo con dolor de pecho o falta de aire: llama al SAMU (106).",
        "Deformidad o brazo que no se mueve tras una caída o un golpe.",
        "Hombro rojo, caliente e hinchado con fiebre, o brazo frío y pálido de pronto.",
      ],
    },
    page: {
      metaTitle: "Dolor de hombro",
      metaDescription:
        "Hombro que duele al levantar el brazo o al dormir: causas frecuentes, qué se prueba primero y cuándo consultar. Dr. Jorge Naveda, traumatólogo en Lima.",
      h1: "Dolor de hombro: qué lo causa y cómo se evalúa",
      lede: "Por qué puede doler el hombro, cómo se aborda primero lo conservador cuando corresponde y qué señales piden consulta.",
      explanation: [
        "El hombro permite mover el brazo en casi todas las direcciones. Para lograrlo depende de un grupo de tendones llamado manguito rotador, de bolsas que amortiguan y de una articulación poco profunda que gana movilidad a cambio de estabilidad.",
        "Por eso es frecuente que duela al levantar el brazo, al vestirte o al dormir de lado. Las causas más comunes son la sobrecarga por el trabajo o el deporte con el brazo en alto, el desgaste de los tendones con los años, una caída o un golpe, y la rigidez que aparece tras pasar mucho tiempo sin mover el brazo. La diabetes aumenta el riesgo de hombro congelado.",
        "Para distinguir la causa, te escucho y te examino el movimiento y la fuerza del hombro. Si hace falta, se pide una radiografía, que muestra los huesos y la articulación, y una ecografía o una resonancia, que muestran mejor los tendones y las bolsas. Muchas veces el examen orienta bastante antes de pedir estudios.",
        "Para cuidarlo: evita cargar peso con el brazo en alto de forma repetida, haz pausas, fortalece el hombro y la espalda alta y calienta antes del deporte. Si te duele, no dejes el brazo quieto por mucho tiempo, para que no se ponga rígido.",
      ],
      conservativeSteps: [
        "Evitar por un tiempo los movimientos y las cargas que despiertan el dolor, sin inmovilizar el hombro por completo.",
        "Fisioterapia y ejercicios para recuperar movilidad y fortalecer el hombro y la espalda alta.",
        "Calor o frío local, según lo que te alivie y lo que se indique en la consulta.",
        "Medicamentos para el dolor y la inflamación, solo con indicación médica.",
        "Ajustes en la postura y en cómo cargas o trabajas.",
        "Si lo conservador no basta o la lesión lo requiere, te explico las otras opciones antes de decidir contigo.",
      ],
      consultSigns: [
        "Dolor que te despierta de noche o no te deja dormir de lado.",
        "Dificultad para levantar el brazo, peinarte o alcanzar algo en alto.",
        "Dolor que no mejora tras una o dos semanas de cuidado.",
        "Sensación de que el hombro se sale o se desliza.",
        "Pérdida de fuerza: ya no puedes cargar objetos que antes levantabas sin problema.",
        "Hormigueo que baja por el brazo junto con el dolor de hombro o de cuello.",
      ],
      urgentSigns: [
        "Deformidad del hombro o imposibilidad de mover el brazo después de una caída o un golpe.",
        "Dolor en el hombro o en el brazo izquierdo con dolor u opresión en el pecho, falta de aire o sudor frío: puede ser una emergencia del corazón. Llama al SAMU (106) o acude a emergencias de inmediato.",
        "Hombro rojo, caliente e hinchado, con fiebre.",
        "Hormigueo, pérdida de fuerza o brazo frío y pálido de forma repentina.",
        "Dolor intenso de inicio brusco con hinchazón o moretón después de un golpe.",
      ],
    },
    whatsappMessage:
      "Hola Dr. Naveda, tengo molestias en el hombro y quisiera agendar una consulta.",
  },
  {
    slug: "columna",
    name: "Columna",
    withArticle: "la columna",
    intro:
      "La columna sostiene el cuerpo, te permite agacharte y girar, y protege la médula y los nervios. El dolor en la espalda baja o en el cuello es muy común: muchos casos mejoran con cuidados sencillos, pero conviene evaluarlo si no cede.",
    commonProblems: [
      "Lumbalgia mecánica: dolor en la espalda baja por sobrecarga de músculos y ligamentos, que cambia con el movimiento y suele mejorar en unas semanas.",
      "Contractura muscular: músculos de la espalda o del cuello que se endurecen y duelen, a menudo por una mala postura, un esfuerzo o la tensión del día a día.",
      "Hernia de disco: parte del disco que amortigua entre las vértebras se sale y puede presionar un nervio; da dolor de espalda y a veces hormigueo o debilidad.",
      "Ciática o radiculopatía: dolor que baja por una pierna (o por el brazo, si es desde el cuello) cuando un nervio está irritado o comprimido, a veces con hormigueo.",
      "Cervicalgia: dolor de cuello por tensión muscular, malas posturas (celular, computadora) o desgaste, con rigidez y, a veces, dolor de cabeza.",
      "Estenosis del canal lumbar: estrechamiento por donde pasan los nervios, más común después de los 50 años; da dolor o pesadez en las piernas al caminar, que alivia al sentarte o inclinarte.",
      "Artrosis de la columna: desgaste de los discos y las articulaciones, con rigidez y dolor que pueden aumentar con los años.",
    ],
    conservative:
      "Casi siempre se empieza por mantenerte activo dentro de lo posible, evitar el reposo prolongado, hacer ejercicios y fisioterapia, y usar los medicamentos que indique un médico. Las radiografías o resonancias se piden si hay señales de alarma o si el dolor no mejora después de unas semanas; no todo dolor de espalda las necesita.",
    whenToConsult:
      "Si el dolor dura más de una o dos semanas, empeora, baja hacia la pierna o el brazo, o se acompaña de hormigueo o debilidad.",
    summary: {
      intro:
        "La columna sostiene el cuerpo y protege los nervios. Muchos dolores mejoran con cuidados sencillos; si no ceden, conviene evaluarlos.",
      problems: [
        { name: "Lumbalgia mecánica", text: "sobrecarga de músculos y ligamentos; suele mejorar en unas semanas." },
        { name: "Contractura muscular", text: "músculos endurecidos y dolorosos, a menudo por postura o esfuerzo." },
        { name: "Hernia de disco", text: "el disco presiona un nervio; dolor de espalda y a veces hormigueo." },
        { name: "Ciática o radiculopatía", text: "dolor que baja por la pierna por un nervio irritado o comprimido." },
        { name: "Cervicalgia", text: "dolor de cuello por tensión, postura o desgaste, con rigidez." },
      ],
      first:
        "Casi siempre se empieza por mantenerte activo, con ejercicios y fisioterapia, evitando el reposo prolongado. Los medicamentos, solo con indicación médica.",
      consult: [
        "Dolor que dura más de una o dos semanas o empeora.",
        "Dolor que baja hacia la pierna o el brazo.",
        "Hormigueo, adormecimiento o debilidad.",
      ],
      urgent: [
        "Pérdida de control de la orina o las heces, o adormecimiento entre las piernas.",
        "Dolor, hormigueo o debilidad en las dos piernas a la vez.",
        "Dolor de espalda con dolor de pecho o falta de aire, o dolor intenso tras una caída.",
      ],
    },
    page: {
      metaTitle: "Dolor de columna y espalda",
      metaDescription:
        "Dolor de espalda baja, cuello o ciática: causas frecuentes, cuidados iniciales y señales de alerta. Dr. Jorge Naveda, traumatólogo en Lima.",
      h1: "Dolor de espalda y cuello: qué puede haber detrás y cuándo consultar",
      lede: "Un dolor de espalda o de cuello no siempre tiene una sola causa. Aquí verás qué se revisa primero y qué señales conviene no dejar pasar.",
      explanation: [
        "La columna está formada por vértebras, discos que amortiguan, músculos y ligamentos. Por dentro pasa la médula y salen los nervios que llegan a los brazos y a las piernas.",
        "La mayoría de los dolores de espalda baja son mecánicos: vienen de músculos y ligamentos por un esfuerzo, una mala postura, muchas horas sentado, cargar peso de mala forma o poca actividad física. El sobrepeso y el tabaco también influyen, y con los años los discos y las articulaciones se desgastan. A veces no se encuentra una causa exacta, y eso no significa que sea grave.",
        "El dolor puede irradiarse: uno de espalda baja que baja por la pierna indica que un nervio puede estar irritado, y conviene evaluarlo. Al inicio, la mayoría de los dolores no necesitan radiografía ni resonancia. Se piden si hay señales de alarma, si hubo un golpe fuerte, si el dolor no mejora tras varias semanas o si hay síntomas en brazos o piernas: la resonancia muestra mejor los discos y los nervios, y la radiografía, los huesos.",
        "Para cuidar tu espalda: camina o haz ejercicio con regularidad, fortalece abdomen y espalda, evita pasar horas seguidas sentado, dobla las rodillas al levantar peso y mantén un peso saludable.",
      ],
      conservativeSteps: [
        "Mantenerte en movimiento con caminatas suaves y evitar el reposo prolongado en cama.",
        "Fisioterapia y ejercicios para fortalecer abdomen y espalda y mejorar la flexibilidad.",
        "Calor local para aliviar la contractura, o frío envuelto en un paño si te alivia más; según lo que te funcione.",
        "Medicamentos para el dolor y la inflamación, solo con indicación médica.",
        "Revisar la postura, la silla, el colchón y cómo cargas peso en tu día a día.",
        "Si el dolor no cede, se evalúan otras opciones. La cirugía se considera solo en casos específicos, por ejemplo cuando un nervio sigue comprimido y el manejo conservador no ayudó.",
      ],
      consultSigns: [
        "Dolor que dura más de una o dos semanas.",
        "Dolor que baja por una pierna o un brazo.",
        "Hormigueo o sensación de adormecimiento.",
        "Dolor que te despierta de noche o que empeora con el tiempo.",
        "Dolor que empeora al toser, estornudar o hacer fuerza.",
        "Dolor en la parte alta de la espalda, entre los omóplatos, que no cede.",
        "Pérdida de peso sin explicación junto con el dolor de espalda.",
      ],
      urgentSigns: [
        "Pérdida de control de la orina o de las heces, o dificultad para orinar.",
        "Adormecimiento en la zona entre las piernas (como la que toca una silla de montar) o debilidad que aumenta en las piernas.",
        "Dolor, hormigueo o debilidad en las dos piernas a la vez.",
        "Dolor intenso después de una caída, un accidente o un golpe fuerte.",
        "Dolor de espalda intenso con fiebre o malestar general.",
        "Dolor de espalda con dolor de pecho o falta de aire.",
      ],
    },
    whatsappMessage:
      "Hola Dr. Naveda, tengo molestias en la columna y quisiera agendar una consulta.",
  },
  {
    slug: "cadera",
    name: "Cadera",
    withArticle: "la cadera",
    intro:
      "La cadera une el tronco con las piernas y carga tu peso al caminar, levantarte y subir escaleras. El dolor puede sentirse en la ingle, en el costado, en la nalga o incluso en la rodilla.",
    commonProblems: [
      "Artrosis de cadera: desgaste del cartílago, con dolor en la ingle o el muslo, rigidez al levantarte y dificultad para ponerte los zapatos.",
      "Bursitis trocantérica: inflamación de la bolsa del lado externo de la cadera, con dolor que empeora al acostarte sobre ese lado o al subir escaleras.",
      "Tendinopatía glútea: sobrecarga o desgaste de los tendones de los glúteos, con dolor en el costado de la cadera al caminar, subir escaleras o apoyarte en una sola pierna.",
      "Pinzamiento femoroacetabular: por la forma de los huesos, la cabeza del fémur choca con la cavidad de la cadera, con dolor en la ingle al flexionar, sentarte o ponerte en cuclillas.",
      "Fractura de cadera en adultos mayores: suele ocurrir tras una caída, con dolor intenso en la ingle y dificultad para apoyar; es una urgencia.",
      "Tendinitis o distensión muscular: sobrecarga de los músculos y tendones que rodean la cadera, frecuente en quienes corren o hacen deporte.",
      "Dolor que viene de la espalda baja: un problema de la columna o de un nervio puede sentirse en la nalga, la cadera o el muslo.",
    ],
    conservative:
      "Se suele empezar ajustando la actividad, con ejercicios de fortalecimiento, fisioterapia, control del peso y medicamentos indicados por un médico; en algunos casos, con un bastón. Si hace falta, se pide una radiografía u otro estudio para aclarar el diagnóstico. Una fractura de cadera, en cambio, necesita atención urgente.",
    whenToConsult:
      "Si el dolor dura más de unos días, te cuesta caminar o ponerte los zapatos, o te despierta de noche. También si tuviste una caída y te duele al apoyar.",
    summary: {
      intro:
        "La cadera carga tu peso al caminar. El dolor puede sentirse en la ingle, el costado, la nalga o la rodilla.",
      problems: [
        { name: "Artrosis de cadera", text: "desgaste del cartílago; dolor en la ingle y rigidez al levantarte." },
        { name: "Bursitis trocantérica", text: "inflamación de la bolsa externa; duele al acostarte sobre ese lado." },
        { name: "Tendinopatía glútea", text: "tendones de los glúteos sobrecargados; dolor en el costado al caminar." },
        { name: "Pinzamiento femoroacetabular", text: "los huesos chocan por su forma; dolor en la ingle al flexionar." },
        { name: "Fractura de cadera", text: "tras una caída, sobre todo en adultos mayores; es una urgencia." },
      ],
      first:
        "Según el diagnóstico, se suele empezar ajustando la actividad, con ejercicios y fisioterapia. Los medicamentos, solo con indicación médica.",
      consult: [
        "Dolor que dura más de unos días o te despierta de noche.",
        "Te cuesta caminar o ponerte los zapatos.",
        "Dolor al apoyar después de una caída.",
      ],
      urgent: [
        "Dolor intenso tras una caída o no poder apoyar la pierna.",
        "Pierna acortada o con el pie girado hacia afuera tras una caída.",
        "Fiebre con cadera roja, caliente y dolorosa, o con dolor al moverla.",
      ],
    },
    page: {
      metaTitle: "Dolor de cadera",
      metaDescription:
        "Dolor de cadera o de ingle: causas frecuentes, opciones sin cirugía y señales para consultar pronto. Dr. Jorge Naveda, traumatólogo en Lima.",
      h1: "Dolor de cadera o de ingle: evaluación y primeros pasos",
      lede: "El dolor de cadera puede sentirse en la ingle, el muslo o la rodilla. Te explico qué puede estar detrás y cuándo conviene consultar.",
      explanation: [
        "La cadera es una articulación en forma de bola y cavidad: la cabeza del hueso del muslo encaja en la pelvis y se mueve sobre una capa de cartílago. Alrededor tiene músculos y tendones potentes.",
        "Con los años, el cartílago puede desgastarse y causar dolor y rigidez. En personas más jóvenes o activas, el dolor suele relacionarse con tendones, bolsas o con la forma en que encajan los huesos. A veces el dolor nace en la espalda baja, por eso la evaluación es importante.",
        "Pesan la edad, el sobrepeso, la sobrecarga por deporte o trabajo, el sedentarismo y las caídas. En adultos mayores, los huesos más frágiles (osteoporosis) aumentan el riesgo de fractura tras una caída.",
        "Para aclarar el diagnóstico, se suele pedir una radiografía de la cadera y la pelvis, que muestra el desgaste, la forma de los huesos y las fracturas. Si hace falta, una ecografía o una resonancia ayudan a ver tendones, bolsas y otras estructuras.",
        "Para cuidar tu cadera: mantén un peso saludable, camina y fortalece piernas y glúteos, cuida tu equilibrio y haz tu casa más segura para evitar caídas, con pisos secos, buena luz y sin alfombras sueltas. Si eres adulto mayor, conversa sobre la salud de tus huesos con tu médico.",
      ],
      conservativeSteps: [
        "Ajustar la actividad: evitar lo que más duele y mantener el movimiento que sí toleras.",
        "Fisioterapia y ejercicios para fortalecer los músculos de la cadera y el abdomen.",
        "Control del peso cuando corresponde.",
        "Medicamentos para el dolor y la inflamación, solo con indicación médica.",
        "Ayudas para caminar, como un bastón, si en la consulta se indican.",
        "Frío o calor local, según lo que te alivie.",
        "Medidas para prevenir caídas en casa y al caminar.",
      ],
      consultSigns: [
        "Dolor en la ingle o el costado que dura más de unos días.",
        "Rigidez por las mañanas o dificultad para ponerte calcetines o zapatos.",
        "Cojera o dolor que te despierta de noche.",
        "Dolor en la ingle al flexionar la cadera, al sentarte o al ponerte en cuclillas, o sensación de chasquido o traba.",
        "Caídas repetidas o miedo a caerte al caminar.",
      ],
      urgentSigns: [
        "Dolor intenso tras una caída o incapacidad para apoyar la pierna, sobre todo en adultos mayores.",
        "Pierna acortada o con el pie girado hacia afuera después de una caída.",
        "Cadera roja, caliente y dolorosa, con fiebre.",
        "Fiebre con dolor al mover la cadera.",
      ],
    },
    whatsappMessage:
      "Hola Dr. Naveda, tengo molestias en la cadera y quisiera agendar una consulta.",
  },
  {
    slug: "mano-muneca",
    name: "Mano y muñeca",
    withArticle: "la mano y la muñeca",
    intro:
      "Usamos las manos y las muñecas todo el día, y el trabajo repetitivo, el teléfono o el deporte pueden cargarlas. Las molestias van desde hormigueo hasta dolor al agarrar.",
    commonProblems: [
      "Síndrome del túnel carpiano: un nervio de la muñeca queda comprimido y da hormigueo, adormecimiento y a veces dolor en el pulgar y los dedos índice, medio y anular, sobre todo de noche.",
      "Tenosinovitis de De Quervain: inflamación de los tendones del pulgar, con dolor en el borde de la muñeca del lado del pulgar al agarrar o girar la muñeca.",
      "Dedo en gatillo: un tendón se atora al doblar el dedo y produce chasquido, traba y dolor en la base del dedo, a veces peor por las mañanas.",
      "Fractura de muñeca o de escafoides: suele ocurrir tras una caída con la mano apoyada; el escafoides duele en el hueco bajo el pulgar y a veces se confunde con un esguince.",
      "Artrosis del pulgar: desgaste en la base del pulgar, con dolor al pellizcar, abrir frascos o girar llaves, y a veces un bulto en la base.",
      "Quiste sinovial: bulto blando, casi siempre en el dorso de la muñeca, que puede crecer o achicarse y a veces duele; conviene evaluarlo.",
      "Esguince de muñeca: ligamentos estirados o rotos tras una caída, con dolor e hinchazón; si no mejora, conviene descartar una fractura.",
    ],
    conservative:
      "Muchas molestias se tratan primero con descanso de los movimientos repetitivos, férulas o soportes, ejercicios y medicamentos indicados por un médico. En las fracturas de muñeca o de escafoides, el manejo varía según el tipo y la gravedad de la lesión; algunas necesitan inmovilización y evaluación pronta. Si hace falta, se pide una radiografía u otro estudio para aclarar el diagnóstico.",
    whenToConsult:
      "Si el hormigueo o el dolor duran más de unas semanas, se repiten por las noches o notas menos fuerza para agarrar. También si te duele el hueco bajo el pulgar después de una caída.",
    summary: {
      intro:
        "Usamos las manos todo el día. Las molestias van del hormigueo al dolor al agarrar.",
      problems: [
        { name: "Túnel carpiano", text: "nervio comprimido en la muñeca; hormigueo en los dedos, sobre todo de noche." },
        { name: "Tenosinovitis de De Quervain", text: "inflamación de tendones del pulgar; dolor al agarrar o girar la muñeca." },
        { name: "Dedo en gatillo", text: "el tendón se atora; chasquido y traba al doblar el dedo." },
        { name: "Fractura de muñeca o escafoides", text: "suele darse tras una caída; el escafoides duele bajo el pulgar." },
        { name: "Artrosis del pulgar", text: "desgaste en la base; dolor al pellizcar o abrir frascos." },
      ],
      first:
        "Se suele empezar descansando de los movimientos repetitivos, con férulas o soportes y ejercicios. Los medicamentos, solo con indicación médica.",
      consult: [
        "Hormigueo o dolor por más de unas semanas, sobre todo de noche.",
        "Menos fuerza para agarrar o se te caen objetos.",
        "Dolor en el hueco bajo el pulgar tras una caída.",
      ],
      urgent: [
        "Dedos pálidos, fríos o azulados, o sin sensibilidad.",
        "Deformidad de la muñeca o la mano tras una caída o un golpe.",
        "Mano roja, caliente e hinchada con fiebre, o herida profunda con dedos que no se mueven.",
      ],
    },
    page: {
      metaTitle: "Dolor de mano y muñeca",
      metaDescription:
        "Hormigueo o dolor en la mano y la muñeca: causas frecuentes, cuidados iniciales y cuándo consultar. Dr. Jorge Naveda, traumatólogo en Lima.",
      h1: "Hormigueo y dolor de mano o muñeca: evaluación",
      lede: "Si te hormiguea la mano o te duele la muñeca al trabajar o al agarrar, aquí tienes qué suele causarlo y cuándo conviene consultar.",
      explanation: [
        "La muñeca tiene muchos huesos pequeños, y por ella pasan nervios y tendones que mueven los dedos. La mano combina fuerza y movimientos muy finos, por eso una molestia pequeña se nota en las tareas diarias.",
        "El hormigueo en los dedos suele relacionarse con un nervio comprimido; el dolor al mover el pulgar o la muñeca, con los tendones; y el dolor tras una caída, con una lesión de huesos o ligamentos. La evaluación ayuda a ubicar el origen.",
        "Influyen los movimientos repetitivos o con fuerza (teclado, celular, herramientas, deportes de raqueta), las caídas con la mano apoyada y la edad. Para el túnel carpiano también pesan condiciones como la diabetes, el embarazo o los problemas de tiroides.",
        "Tras una caída se suele pedir una radiografía para descartar una fractura; si el dolor persiste, a veces hace falta otro estudio, porque algunas fracturas del escafoides no se ven al inicio. Para el hormigueo, en ciertos casos se piden estudios de los nervios o una ecografía.",
        "Para cuidarte: alterna tareas, haz pausas, mantén la muñeca recta al escribir, ajusta la altura del teclado y evita apretar con fuerza el mouse o las herramientas.",
      ],
      conservativeSteps: [
        "Descansar de los movimientos repetitivos y alternar tareas cuando puedas.",
        "Férulas o soportes, por ejemplo para dormir, si se indican en la consulta.",
        "Ejercicios y fisioterapia para mejorar movilidad y fuerza.",
        "Frío local después de un golpe o una torcedura para bajar la hinchazón.",
        "Medicamentos para el dolor y la inflamación, solo con indicación médica.",
        "Ajustes de ergonomía: altura del teclado, posición de la muñeca y pausas.",
        "Si sospechas una fractura, inmoviliza la mano sin forzarla y consulta pronto.",
      ],
      consultSigns: [
        "Hormigueo o adormecimiento en los dedos que se repite, sobre todo de noche.",
        "Dolor al agarrar, girar la muñeca o mover el pulgar.",
        "Dedo que se traba al doblarlo.",
        "Pérdida de fuerza: se te caen objetos con frecuencia.",
        "Un bulto en la muñeca o la mano que crece o duele.",
        "Dolor o hinchazón en la muñeca tras una caída que no mejora en 2 o 3 días.",
      ],
      urgentSigns: [
        "Deformidad de la muñeca o la mano después de una caída o un golpe.",
        "Dedos pálidos, fríos o azulados, o sin sensibilidad.",
        "Pérdida repentina de fuerza o de sensibilidad en la mano o los dedos.",
        "Mano roja, caliente e hinchada, con fiebre.",
        "Herida profunda con dedos que ya no se mueven, o hueso expuesto.",
      ],
    },
    whatsappMessage:
      "Hola Dr. Naveda, tengo molestias en la mano o la muñeca y quisiera agendar una consulta.",
  },
  {
    slug: "pie-tobillo",
    name: "Pie y tobillo",
    withArticle: "el pie y el tobillo",
    intro:
      "El pie y el tobillo reciben todo tu peso y se ajustan a cada superficie. Una torcedura, el calzado o el sobreuso pueden provocar dolor desde el talón hasta los dedos.",
    commonProblems: [
      "Esguince de tobillo: ligamentos estirados o rotos por una torcedura, con dolor, hinchazón, moretón y dificultad para apoyar.",
      "Fascitis plantar: inflamación de la banda de tejido bajo el pie, con dolor en el talón, sobre todo en los primeros pasos de la mañana.",
      "Tendinitis de Aquiles: irritación del tendón del talón por sobrecarga, con dolor y rigidez en la parte de atrás del talón, sobre todo al empezar a moverte.",
      "Juanete: bulto doloroso en la base del dedo gordo, que se desvía hacia los demás dedos y roza con el calzado.",
      "Fractura por estrés: pequeña fisura de un hueso del pie o de la pierna por impacto repetido, con dolor que aumenta al caminar o correr y mejora con el reposo.",
      "Artrosis de tobillo: desgaste del cartílago, a menudo tras lesiones antiguas, con dolor, rigidez e hinchazón.",
      "Pie plano o calzado inadecuado: cuando el pie no se apoya bien o el zapato aprieta o no sostiene, pueden aparecer molestias en el arco, la planta o los dedos.",
    ],
    conservative:
      "Casi siempre se empieza descansando la zona, con calzado y plantillas adecuados, ejercicios y estiramientos, y los medicamentos que indique un médico. En una torcedura reciente suelen ayudar la protección, el hielo, la compresión y elevar el pie los primeros días. Si hace falta, se pide una radiografía u otro estudio para aclarar qué tienes.",
    whenToConsult:
      "Si el dolor o la hinchazón duran más de unos días, el tobillo se te vuelve a torcer, o el dolor te limita al caminar o hacer deporte.",
    summary: {
      intro:
        "El pie y el tobillo reciben todo tu peso. Torceduras, calzado o sobreuso pueden causar dolor del talón a los dedos.",
      problems: [
        { name: "Esguince de tobillo", text: "ligamentos estirados por una torcedura; dolor, hinchazón y dificultad para apoyar." },
        { name: "Fascitis plantar", text: "dolor de talón, sobre todo en los primeros pasos de la mañana." },
        { name: "Tendinitis de Aquiles", text: "tendón del talón irritado; dolor y rigidez atrás del talón." },
        { name: "Juanete", text: "bulto doloroso en la base del dedo gordo que roza con el calzado." },
        { name: "Fractura por estrés", text: "fisura por impacto repetido; el dolor aumenta al caminar o correr." },
      ],
      first:
        "Casi siempre se empieza descansando la zona, con calzado adecuado, ejercicios y estiramientos. Los medicamentos, solo con indicación médica.",
      consult: [
        "Dolor o hinchazón que dura más de unos días tras una torcedura.",
        "Tobillo que se tuerce seguido o se siente inestable.",
        "Dolor que te limita al caminar o hacer deporte.",
      ],
      urgent: [
        "Pie frío, pálido o azulado, o deformidad tras una lesión.",
        "No poder apoyar el pie después de una lesión.",
        "Pantorrilla hinchada y dolorosa; con falta de aire o dolor de pecho, llama al SAMU (106).",
      ],
    },
    page: {
      metaTitle: "Dolor de pie y tobillo",
      metaDescription:
        "Torceduras, dolor de talón y otras molestias del pie y el tobillo: causas frecuentes y cuándo consultar. Dr. Jorge Naveda, traumatólogo en Lima.",
      h1: "Dolor de talón, pie o tobillo: evaluación y primeros cuidados",
      lede: "Desde una torcedura hasta el dolor de talón: qué suele causar las molestias del pie y el tobillo y qué se revisa primero.",
      explanation: [
        "El pie tiene muchos huesos, ligamentos y tendones que trabajan juntos para sostenerte, amortiguar y darte impulso. El tobillo conecta el pie con la pierna y es una de las articulaciones que más se tuercen.",
        "Un esguince, un calzado que no te sostiene bien o un aumento brusco de actividad son causas frecuentes. También pesan el sobrepeso, el pie plano o muy arqueado y los tacones altos. Si una torcedura no se evalúa, el tobillo puede quedar inestable, por eso vale la pena revisarla. Si tienes diabetes, cuidar tus pies y tus heridas es aún más importante.",
        "Tras una torcedura, a veces se pide una radiografía para descartar una fractura; depende de dónde te duele y de si puedes apoyar. Si el dolor persiste, una ecografía o una resonancia ayudan a ver ligamentos y tendones.",
        "Para cuidarte: usa calzado de tu talla que te sostenga, calienta y estira antes del deporte, aumenta la actividad poco a poco, fortalece tobillos y pantorrillas y revisa tus pies a diario si tienes diabetes.",
      ],
      conservativeSteps: [
        "Descansar la zona los primeros días y evitar apoyar con fuerza lo que duele.",
        "Hielo local envuelto en un paño y elevar el pie para bajar la hinchazón, según se indique. Evita calor, alcohol y masajes en los primeros dos días de una torcedura.",
        "Vendaje o soporte, y plantillas o calzado adecuados, si se indican en la consulta.",
        "Cuando el dolor lo permita, retomar el movimiento y el apoyo de forma gradual para que la zona no se ponga rígida.",
        "Ejercicios y estiramientos de pantorrilla y planta del pie; fisioterapia cuando haga falta.",
        "Medicamentos para el dolor y la inflamación, solo con indicación médica.",
      ],
      consultSigns: [
        "Dolor en el talón al dar los primeros pasos de la mañana.",
        "Hinchazón o dolor que dura más de unos días después de una torcedura.",
        "Tobillo que se tuerce con frecuencia o se siente inestable.",
        "Dolor al caminar o hacer deporte que no mejora con descanso.",
        "Un bulto doloroso en la base del dedo gordo que te limita al usar zapatos.",
        "Herida en el pie que no sana, sobre todo si tienes diabetes.",
      ],
      urgentSigns: [
        "No poder apoyar el pie después de una lesión.",
        "Deformidad o hinchazón muy intensa tras una torcedura o un golpe.",
        "Pie frío, pálido o azulado.",
        "Pie rojo, caliente y doloroso con fiebre, o una herida con fiebre si tienes diabetes.",
        "Sensación de chasquido o rotura en el talón o tendón de Aquiles con dificultad para ponerte de puntillas.",
        "Pantorrilla hinchada, dolorosa o caliente, sobre todo tras inmovilización, una cirugía o un viaje largo. Si además hay falta de aire o dolor de pecho, llama al SAMU (106).",
      ],
    },
    whatsappMessage:
      "Hola Dr. Naveda, tengo molestias en el pie o el tobillo y quisiera agendar una consulta.",
  },
];
