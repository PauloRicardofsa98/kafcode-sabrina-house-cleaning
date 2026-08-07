import type { Dictionary } from "../types";

/**
 * Español (variante latina / EE. UU.).
 * Tratamiento de "tú", que es el habitual del mercado hispano en California.
 */
const es: Dictionary = {
  meta: {
    home: {
      title: "Limpieza de casas en Contra Costa y el East Bay",
      description:
        "Limpieza recurrente, profunda y de mudanza en Contra Costa, el East Bay y San Francisco. Precio cerrado y siempre la misma persona. Escríbenos por SMS para un presupuesto gratis.",
    },
    services: {
      title: "Servicios de limpieza",
      description:
        "Mantenimiento recurrente, limpieza profunda, mudanza y post-obra para casas del Área de la Bahía. Presupuesto gratis por mensaje de texto.",
    },
    areas: {
      title: "Zonas que atendemos",
      description:
        "Limpieza de casas en Concord, Walnut Creek, Danville, Lafayette, Orinda, Oakland, Berkeley, San Francisco, Vallejo, Napa y todo Contra Costa. Mándanos tu código postal por SMS.",
    },
    about: {
      title: "Sobre Sabrina",
      description:
        "Un negocio pequeño y cuidadoso de limpieza en Contra Costa y el East Bay. Conoce a quien de verdad va a limpiar tu casa.",
    },
    faq: {
      title: "Preguntas frecuentes",
      description:
        "Reservas, precios, productos, acceso a la casa, zonas cubiertas y la garantía de repetir la limpieza. Lo que más nos preguntan en el Área de la Bahía.",
    },
    quote: {
      title: "Presupuesto gratis",
      description:
        "Cuéntanos cómo es tu casa y te mandamos un precio cerrado por mensaje de texto, normalmente en menos de una hora. Sin visita previa, sin compromiso.",
    },
    privacy: {
      title: "Política de privacidad",
      description: "Cómo Sabrina Cleaning Service trata la información que compartes con nosotros.",
    },
    terms: {
      title: "Términos del servicio",
      description: "Las condiciones que aplican a los servicios contratados con Sabrina Cleaning Service.",
    },
  },

  nav: {
    home: "Inicio",
    services: "Servicios",
    areas: "Zonas",
    about: "Nosotros",
    faq: "Preguntas",
    quote: "Pedir presupuesto",
    openMenu: "Abrir menú",
    closeMenu: "Cerrar menú",
    skipToContent: "Ir al contenido",
    languageLabel: "Cambiar idioma",
    primaryLabel: "Navegación principal",
    footerLabel: "Navegación del pie de página",
  },

  cta: {
    text: "Pide tu presupuesto por SMS",
    textShort: "Escríbenos",
    textBar: "Presupuesto por SMS",
    call: "Llámanos",
    callShort: "Llamar",
    quote: "Pedir presupuesto gratis",
    quoteShort: "Presupuesto",
    learnMore: "Ver más",
    viewAll: "Ver todo",
    smsBody: "¡Hola, Sabrina! Quisiera un presupuesto de limpieza. Mi código postal es ",
  },

  hero: {
    eyebrow: "Contra Costa y el East Bay",
    titleLead: "Una casa que se siente",
    titleAccent: "como nueva",
    titleTail: "cada semana.",
    subtitle:
      "Limpieza recurrente, profunda y de mudanza a cargo de un equipo pequeño que llega puntual y recuerda cómo te gustan las cosas. Mándanos tu código postal por SMS y recibe un precio cerrado, normalmente en menos de una hora.",
    imageAlt:
      "Sala iluminada de una casa en San Francisco después de una limpieza profesional, con superficies despejadas y cojines ordenados",
    badges: {
      estimate: "Presupuesto gratis",
      availability: "Citas la misma semana",
      supplies: "Productos incluidos",
    },
    stats: {
      rating: "de valoración media",
      homes: "casas limpiadas",
      years: "años en el Área de la Bahía",
    },
  },

  about: {
    eyebrow: "Nosotros",
    title: "Un negocio pequeño, a propósito",
    lead: "Sabrina Cleaning Service la lleva su propia dueña. No es una limitación por la que pidamos disculpas: es justo lo que mantiene el trabajo parejo.",
    intro: {
      one: "Cuando contratas a una empresa grande, en la práctica contratas a un despachador. Llega quien esté libre esa mañana, trabaja con una lista genérica y quizá no vuelva nunca. Cuando nos contratas a nosotros, contratas a la persona que va a estar parada en tu cocina.",
      two: "Ese es todo el modelo. Mantenemos la lista de clientes lo bastante corta para que la misma persona vuelva a las mismas casas semana tras semana y las aprenda de verdad: qué estante no se toca, qué perro le ladra a la aspiradora, qué baño siempre necesita diez minutos más.",
    },
    howTitle: "Cómo trabajamos",
    how: {
      quote: {
        title: "Cotizamos antes de empezar",
        body: "Recibes un precio cerrado por mensaje, según lo que nos cuentes de la casa. Si la casa resulta muy distinta de lo descrito, te avisamos antes de empezar, nunca después.",
      },
      supplies: {
        title: "Llevamos todo",
        body: "Productos, paños, aspiradora. De baja toxicidad y sin perfume por defecto, por los niños, las mascotas y quienes reaccionan a los limpiadores perfumados.",
      },
      report: {
        title: "Te contamos lo que encontramos",
        body: "Un desagüe lento, una fuga que empieza bajo el fregadero, moho detrás del marco de una ventana. Te llega un mensaje. Descubrirlo a tiempo vale más que la limpieza misma.",
      },
      redo: {
        title: "Volvemos si quedó mal",
        body: "Señala lo que sea dentro de las 24 horas siguientes a la visita y regresamos a rehacerlo sin costo. Sin formularios y sin discusión: nos sale más barato que perder a un cliente.",
      },
    },
    storyTitle: "En palabras de Sabrina",
    photoAlt: "Sabrina, dueña de Sabrina Cleaning Service, en una casa del Área de la Bahía",
    areaTitle: "Dónde trabajamos",
    areaBody: "Por todo Contra Costa y el East Bay, desde Orinda y Lafayette pasando por Concord y Walnut Creek hasta Pittsburg, más Oakland, Berkeley, San Francisco y al norte Benicia, Vallejo y Napa.",
    ctaTitle: "¿Quieres saber si encajamos?",
    ctaBody: "Mándanos tu código postal por SMS y una frase sobre tu casa. Si no somos la opción correcta, te lo decimos.",
  },

  trust: {
    licensedAndInsured: "Con licencia y seguro",
    backgroundChecked: "Antecedentes verificados",
    supplies: "Productos incluidos",
    guarantee: "Garantía de repetir en 24 h",
  },

  services: {
    eyebrow: "Qué hacemos",
    title: "Limpieza pensada para cómo vives de verdad",
    subtitle:
      "Cuatro servicios, con precio cerrado acordado antes de empezar. La mayoría empieza con una limpieza profunda y después pasa a las visitas recurrentes.",
    items: {
      "recurring-cleaning": {
        name: "Limpieza recurrente",
        blurb:
          "Semanal, quincenal o mensual, siempre con la misma persona, que aprende lo que importa en tu casa.",
      },
      "deep-cleaning": {
        name: "Limpieza profunda",
        blurb:
          "El reinicio completo. Zócalos, lechada, dentro del horno y del refrigerador, y todo lo que la limpieza de rutina se salta.",
      },
      "move-in-move-out": {
        name: "Mudanza (entrada y salida)",
        blurb:
          "Limpieza al detalle con la casa vacía, para recuperar el depósito, o estrenar tu casa realmente limpia el primer día.",
      },
      "post-construction": {
        name: "Post-obra",
        blurb:
          "El polvo fino de la remodelación retirado como se debe, desde ductos y lámparas hasta la última pasada al piso.",
      },
    },
    allServices: "Ver todos los servicios",
    startingNote: "¿No sabes cuál necesitas? Escríbenos y te lo decimos con honestidad.",
  },

  how: {
    eyebrow: "Cómo funciona",
    title: "Tres pasos, sin perseguirnos por teléfono",
    subtitle: "Del primer mensaje a la fecha reservada, casi siempre en menos de diez minutos.",
    steps: {
      one: {
        title: "Escríbenos por SMS",
        body: "Manda tu código postal y más o menos el tamaño de la casa. De verdad es todo lo que necesitamos para darte un precio.",
      },
      two: {
        title: "Recibe el precio y elige el día",
        body: "Respondemos con un precio cerrado y los huecos que tenemos esa semana. Tú confirmas el que te sirva.",
      },
      three: {
        title: "Llega a una casa limpia",
        body: "Llegamos puntuales y con nuestros propios productos. ¿Algo no quedó bien? Avísanos en 24 horas y volvemos.",
      },
    },
  },

  why: {
    eyebrow: "Por qué Sabrina",
    title: "La diferencia está en quién toca tu puerta",
    subtitle:
      "Las empresas grandes mandan a quien esté libre ese día. Nosotros no trabajamos así, y por eso los clientes se quedan años.",
    items: {
      sameCleaner: {
        title: "La misma persona en cada visita",
        body: "Nada de equipos rotativos. Los clientes recurrentes se quedan con la misma persona, que ya sabe qué estante no se toca.",
      },
      flatPrice: {
        title: "Precio cerrado, acordado antes",
        body: "El precio que te mandamos por mensaje es el que pagas. Sin cobrar por hora, sin extras en la puerta.",
      },
      safeProducts: {
        title: "Seguro con niños y mascotas",
        body: "Productos de baja toxicidad y sin perfume por defecto. Cuéntanos de alergias o de una marca preferida y nos adaptamos.",
      },
      onTime: {
        title: "Puntuales, o te avisamos antes",
        body: "Si la 101 se pone en contra, recibes un mensaje antes del retraso, no una disculpa después.",
      },
      details: {
        title: "Los detalles que nadie pide",
        body: "Zócalos, placas de interruptor, la base del grifo, el riel de la mampara. Ahí se decide si una casa está limpia.",
      },
      guarantee: {
        title: "Garantía de repetir en 24 horas",
        body: "Señala cualquier cosa que no te haya gustado dentro de un día tras la visita y volvemos a hacerla, sin costo.",
      },
    },
  },

  areas: {
    eyebrow: "Dónde limpiamos",
    title: "Contra Costa, el East Bay y hasta Napa",
    subtitle:
      "Desde Orinda y Lafayette pasando por Concord y Walnut Creek, hasta Pittsburg y el Delta, cruzando el puente a Oakland, Berkeley y San Francisco, y al norte hasta Benicia, Vallejo y Napa.",
    note: "¿No sabes si llegamos a tu calle? Mándanos tu código postal por SMS y te respondemos enseguida.",
    viewCity: "Limpieza de casas en",
    allAreas: "Ver todas las zonas",
    countyLabel: "Condado",
  },

  testimonials: {
    eyebrow: "Clientes",
    title: "Lo que dicen",
    subtitle: "Opiniones de casas en Contra Costa y el East Bay.",
    empty: {
      title: "Estamos reuniendo las opiniones",
      body: "En vez de publicar testimonios inventados, dejamos este espacio vacío hasta que lo llenen clientes reales. Si quieres hablar con alguien de tu barrio a quien ya limpiamos, solo pídelo y te ponemos en contacto.",
      cta: "Pedir una referencia",
      smsBody:
        "¡Hola, Sabrina! ¿Podrías ponerme en contacto con algún cliente cerca de mí antes de reservar? Mi código postal es ",
    },
  },

  pricing: {
    eyebrow: "Precios",
    title: "Presupuesto gratis, precio cerrado",
    subtitle:
      "Una tabla de precios ya estaría equivocada para tu casa en el momento de leerla, porque el tamaño, el estado y la frecuencia lo cambian todo. Por eso te cotizamos bien, por mensaje, en pocos minutos.",
    points: {
      flat: "Un precio cerrado por visita, acordado antes de empezar",
      recurring: "La visita recurrente sale más barata que una limpieza suelta",
      cancel: "Sin cargo por cancelar avisando con 24 horas",
      supplies: "Productos, equipo y desplazamiento incluidos",
    },
    cta: "Pedir mi presupuesto gratis",
    note: "Sin visita previa. Sin compromiso.",
  },

  faq: {
    eyebrow: "Preguntas",
    title: "Todo lo que se pregunta antes de reservar",
    subtitle: "¿Te queda alguna duda? Escríbenos. Recibes una respuesta real, no un guion.",
    more: "Ver todas las preguntas",
    items: {
      booking: {
        q: "¿Cómo reservo una limpieza?",
        a: "Mándanos un mensaje con tu código postal y más o menos el tamaño de la casa. Respondemos con un precio cerrado y los días libres. Cuando confirmas el día, ya está reservado, sin crear cuenta y sin pagar depósito.",
      },
      price: {
        q: "¿Cuánto cuesta una limpieza?",
        a: "Depende del tamaño y del estado de la casa y de cada cuánto vamos. La primera limpieza profunda cuesta más que las visitas recurrentes que vienen después. Te damos el precio cerrado por mensaje antes de reservar nada, y ese precio no cambia luego.",
      },
      areas: {
        q: "¿Qué zonas cubren?",
        a: "Contra Costa y el East Bay. Concord, Walnut Creek, Clayton Valley, Pacheco, Martinez, Lafayette, Orinda, Moraga, Alamo, Danville, San Ramon, Bay Point y Pittsburg, más Oakland, Berkeley y San Francisco, y al norte Benicia, Vallejo y Napa. Si estás justo fuera de ahí, escríbenos igual: muchas veces lo podemos acomodar.",
      },
      home: {
        q: "¿Necesito estar en casa durante la limpieza?",
        a: "No. La mayoría de nuestros clientes recurrentes está trabajando. Puedes dejar una llave, el código de un lockbox o las instrucciones del edificio, y te avisamos por mensaje cuando llegamos y cuando terminamos.",
      },
      supplies: {
        q: "¿Traen sus propios productos?",
        a: "Sí. Productos, paños y aspiradora, todo incluido en el precio. Usamos productos de baja toxicidad y sin perfume por defecto. Si prefieres que usemos los tuyos, no hay problema: solo déjalos a la vista.",
      },
      frequency: {
        q: "¿Cada cuánto conviene reservar?",
        a: "Quincenal le funciona a la mayoría y es la mejor relación precio-limpieza. Semanal tiene sentido con mascotas, niños pequeños o una casa muy movida. Mensual sirve para espacios más chicos o casas que se mantienen ordenadas entre visitas.",
      },
      pets: {
        q: "¿Los productos son seguros para mascotas y niños?",
        a: "Sí. Usamos productos de baja toxicidad y sin perfume como estándar, justamente por las mascotas y los niños pequeños. Cuéntanos de alergias o sensibilidades antes de la primera visita y ajustamos lo que llevamos.",
      },
      guarantee: {
        q: "¿Y si algo no me gusta?",
        a: "Escríbenos dentro de las 24 horas siguientes a la visita y señala qué quedó mal. Volvemos y lo hacemos de nuevo sin costo. Sin formularios, sin discusión.",
      },
      access: {
        q: "¿Y si necesito cambiar la fecha?",
        a: "Solo escríbenos. Avisando con 24 horas no hay ningún cargo. Preferimos mover una visita que limpiar tu casa en un mal momento.",
      },
    },
  },

  finalCta: {
    title: "Pongamos tu casa en el calendario",
    body: "Mándanos tu código postal por SMS y te devolvemos un precio cerrado, normalmente en menos de una hora y siempre gratis.",
    imageAlt:
      "Mascota ilustrada de Sabrina Cleaning Service: una profesional sonriente con uniforme blanco y negro sosteniendo un plumero",
  },

  quoteForm: {
    eyebrow: "Presupuesto gratis",
    title: "Cuéntanos cómo es tu casa",
    subtitle:
      "Rellena esto y lo convertimos en un mensaje de texto para ti. No se envía nada a ningún servidor; tu teléfono se abre con el mensaje ya escrito.",
    fields: {
      name: "Tu nombre",
      phone: "Teléfono",
      email: "Correo (opcional)",
      zip: "Código postal",
      service: "¿Qué servicio?",
      frequency: "¿Cada cuánto?",
      bedrooms: "Recámaras",
      bathrooms: "Baños",
      notes: "¿Algo que debamos saber?",
      notesPlaceholder: "Mascotas, alergias, estacionamiento, áreas a saltar, días preferidos…",
    },
    frequencies: {
      weekly: "Semanal",
      biweekly: "Quincenal",
      monthly: "Mensual",
      once: "Una sola vez",
      unsure: "Todavía no sé",
    },
    select: "Elige una opción",
    submit: "Abrir mi mensaje",
    required: "Obligatorio",
    zipPattern: "Escribe un código postal de 5 dígitos, por ejemplo 94080",
    ready: {
      title: "Tu mensaje está listo",
      body: "Tu aplicación de mensajes debería haberse abierto. Si no lo hizo, algo que pasa en computadora, copia el mensaje de abajo y mándanoslo como prefieras.",
      copy: "Copiar mensaje",
      copied: "Copiado",
      orCall: "O llama",
      orEmail: "O escribe un correo",
      restart: "Empezar de nuevo",
    },
    smsLabels: {
      intro: "¡Hola, Sabrina! Quisiera un presupuesto de limpieza.",
      name: "Nombre",
      phone: "Teléfono",
      email: "Correo",
      zip: "Código postal",
      service: "Servicio",
      frequency: "Frecuencia",
      size: "Casa",
      bedrooms: "recámaras",
      bathrooms: "baños",
      notes: "Notas",
    },
  },

  footer: {
    blurb:
      "Limpieza de casas en Contra Costa, el East Bay, San Francisco y Napa. Recurrente, profunda, mudanza y post-obra.",
    servicesTitle: "Servicios",
    companyTitle: "Empresa",
    contactTitle: "Contacto",
    hoursTitle: "Horario",
    hoursValue: "De lunes a sábado, 8:00 – 18:00",
    followTitle: "Redes",
    rights: "Todos los derechos reservados.",
    privacy: "Privacidad",
    terms: "Términos",
    languageTitle: "Idioma",
  },

  mobileBar: {
    label: "Contacto rápido",
  },

  breadcrumbs: {
    home: "Inicio",
    label: "Ruta de navegación",
  },

  notFound: {
    title: "Esta página no existe",
    body: "El enlace puede estar viejo, o la página puede existir solo en inglés. Prueba con la página de inicio, o mejor escríbenos, que es más rápido.",
    cta: "Volver al inicio",
  },

  legal: {
    updated: "Última actualización",
    privacy: {
      intro:
        "Esta política es corta porque hay muy poco que explicar: este sitio no tiene base de datos y no guarda nada de lo que escribes en él.",
      sections: {
        form: {
          title: "El formulario de presupuesto",
          body: "El formulario de este sitio nunca envía tus respuestas a un servidor. Las arma en un mensaje de texto y le entrega ese mensaje a tu teléfono, exactamente como si lo hubieras escrito tú. Aquí no se guarda nada, y nada se envía hasta que tú aprietas enviar en tu propia aplicación.",
        },
        contact: {
          title: "Cuando nos contactas",
          body: "Si nos escribes, llamas o mandas un correo, guardamos tu mensaje y tus datos de contacto mientras trabajemos juntos, para agendar las visitas y cotizarte bien. No los vendemos ni los compartimos con nadie.",
        },
        analytics: {
          title: "Analítica y cookies",
          body: "Este sitio no usa cookies de publicidad ni rastreo entre sitios. Si algún día añadimos una analítica de tráfico básica y respetuosa con la privacidad, esta página lo dirá.",
        },
        rights: {
          title: "Tus opciones",
          body: "Puedes pedirnos en cualquier momento que borremos los datos de contacto que tenemos de ti. Escríbenos por mensaje o correo y te confirmamos cuando esté hecho.",
        },
      },
    },
    terms: {
      intro:
        "Estas condiciones aplican a los servicios de limpieza contratados con nosotros. Están escritas en lenguaje claro a propósito.",
      sections: {
        quotes: {
          title: "Presupuestos y precios",
          body: "El presupuesto es un precio cerrado por visita, basado en lo que nos cuentas de tu casa. Si la casa resulta ser muy distinta de lo descrito, te avisamos antes de empezar y acordamos un precio nuevo contigo. Nunca ajustamos el precio después del servicio.",
        },
        scheduling: {
          title: "Reservas y cancelaciones",
          body: "Puedes cambiar la fecha o cancelar sin costo avisando con al menos 24 horas. Si no podemos entrar a la casa a la hora acordada y no logramos comunicarnos contigo, la visita puede cobrarse.",
        },
        guarantee: {
          title: "Garantía de repetir",
          body: "Si no quedaste conforme con parte de la limpieza, avísanos dentro de las 24 horas siguientes a la visita y volvemos a hacer esa área sin costo. La garantía cubre repetir la limpieza; no es una política de reembolso.",
        },
        liability: {
          title: "Daños y objetos de valor",
          body: "Cuidamos tu casa de verdad. Si algo se daña durante una visita, dínoslo enseguida y lo resolvemos. Por favor guarda el dinero, las joyas y los objetos irreemplazables antes de que lleguemos.",
        },
        payment: {
          title: "Pago",
          body: "El pago se hace el día de la visita, salvo que acordemos otra cosa por escrito.",
        },
      },
    },
  },
};

export default es;
