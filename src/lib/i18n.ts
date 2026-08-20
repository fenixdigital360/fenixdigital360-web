export type Lang = "es" | "pt";

export const dict = {
  es: {
    meta: {
      title: "FenixDigital360 | Agencia de Automatizacion e IA para empresas",
      description:
        "FenixDigital360 hace que la IA trabaje por tu empresa: Agentes de IA (FenixChat, FenixSDR), automatizaciones, trafico pago, diseno web y consultoria Go-To-Market.",
    },
    nav: {
      servicios: "Servicios",
      agentesIa: "Agentes IA",
      metodo: "Metodo",
      portafolio: "Portafolio",
      hablemos: "Hablemos",
      langSwitch: "PT-BR",
      langSwitchHref: "/pt",
    },
    hero: {
      tag: "Agencia de automatizacion & IA",
      titleA: "Hacemos que la",
      titleGradient: "IA trabaje",
      titleB: "por tu negocio",
      description:
        "Automatizaciones, agentes de IA, trafico pago y presencia digital, integrados en una sola estrategia. De la idea al sistema funcionando.",
      cta: "Agendar una llamada",
      ctaNote: "Una",
      ctaNoteStrong: "conversacion rapida",
      ctaNoteEnd: "para entender tu operacion y donde encaja la IA.",
    },
    problem: {
      eyebrow: "El problema de siempre",
      titleA: "Tu equipo hace a mano lo que",
      titleFade: "la IA ya puede hacer",
      description:
        "Respuestas repetidas, reportes armados manualmente, seguimiento que se pierde entre chats. El tiempo de tu equipo vale demasiado para gastarlo en tareas que un sistema bien construido resuelve solo.",
      cta: "Entender como funciona",
      panelTitle: "Panel de operacion",
      panelLive: "En vivo",
      tasks: [
        { label: "Responder leads en WhatsApp", status: "Automatizado" },
        { label: "Calificar y agendar reuniones", status: "Automatizado" },
        { label: "Reportes de campanas", status: "Automatizado" },
        { label: "Seguimiento post-venta", status: "Pendiente" },
      ],
    },
    services: {
      eyebrow: "Es asi como resolvemos",
      titleA: "Un solo equipo para",
      titleFade: "toda tu estrategia digital",
      description:
        "De la campana que trae al lead al agente que lo atiende. Seis frentes, una sola estrategia conectada.",
      verMas: "Ver mas",
      items: [
        {
          title: "Media Buying / Trafico Pago",
          description:
            "Campanas en Meta Ads y Google Ads con foco en costo por resultado, no en vanity metrics.",
          tags: ["Meta Ads", "Google Ads"],
        },
        {
          title: "Automatizaciones",
          description:
            "Flujos que conectan tus herramientas y eliminan trabajo manual repetitivo, corriendo 24/7.",
          tags: ["n8n", "Integraciones"],
        },
        {
          title: "Agentes IA",
          description:
            "Agentes que atienden, califican y venden por WhatsApp. Nuestros productos estelares: FenixChat y FenixSDR.",
          tags: ["FenixChat", "FenixSDR"],
          href: "#agentes-ia",
        },
        {
          title: "Diseno de Paginas Web",
          description:
            "Landing pages y sitios corporativos rapidos, responsivos y pensados para convertir.",
          tags: ["Next.js", "Landing pages"],
        },
        {
          title: "Marketing Digital",
          description:
            "Estrategia de contenido y presencia digital que sostiene la adquisicion pagada en el tiempo.",
          tags: ["Contenido", "Estrategia"],
        },
        {
          title: "Consultoria Go-To-Market",
          description:
            "Definimos como tu producto llega al mercado: posicionamiento, canales y plan de lanzamiento.",
          tags: ["Estrategia", "Escalamiento"],
        },
      ],
    },
    agents: {
      eyebrow: "Nuestros productos estelares",
      titleA: "Agentes de IA que",
      titleGradient: "venden y atienden",
      titleB: "por vos",
      description:
        "No son chatbots de respuestas fijas. Son agentes entrenados con tu operacion, conectados a tu CRM y a tus canales, corriendo las 24 horas.",
      infra:
        "Infraestructura propia: tus datos y tus conversaciones no viven en un SaaS de terceros.",
      cta: "Conocer FenixChat y FenixSDR",
      products: [
        {
          name: "FenixChat",
          description:
            "Agente conversacional que atiende WhatsApp 24/7: responde, agenda y hace seguimiento sin perder ni un lead.",
        },
        {
          name: "FenixSDR",
          description:
            "Agente de prospeccion B2B: identifica, contacta y califica leads para llenar tu pipeline en piloto automatico.",
        },
      ],
    },
    stack: {
      text: "Tecnologia que usamos para construir",
      textStrong: "crecimiento con IA",
    },
    differentiators: {
      eyebrow: "Diferenciales",
      titleA: "Por que elegir",
      titleFade: "a FenixDigital360",
      items: [
        {
          title: "Infraestructura propia",
          description:
            "Tus agentes y tus datos corren en infraestructura tuya, no en un SaaS compartido que puede subir precios o cambiar limites sin avisar.",
        },
        {
          title: "Precio sin sorpresas",
          description:
            "Nada de tarifas que escalan con mensajes procesados o usuarios activos. Sabes exactamente que estas pagando cada mes.",
        },
        {
          title: "Un equipo, no una cadena de agencias",
          description:
            "Estrategia, trafico, automatizacion y desarrollo bajo un mismo techo. Sin telefono descompuesto entre proveedores.",
        },
      ],
    },
    method: {
      eyebrow: "Transformacion paso a paso",
      titleA: "Los",
      titleGradient: "4 pasos",
      titleB: "del Metodo FenixDigital360",
      steps: [
        {
          number: "01",
          title: "Diagnostico",
          description:
            "Entendemos tu operacion, tu embudo y donde se esta perdiendo tiempo o ventas.",
        },
        {
          number: "02",
          title: "Estrategia",
          description:
            "Definimos que automatizar, que agente construir y donde invertir en trafico.",
        },
        {
          number: "03",
          title: "Implementacion",
          description:
            "Construimos y conectamos: agentes de IA, automatizaciones, landing y campanas.",
        },
        {
          number: "04",
          title: "Escalamiento",
          description:
            "Medimos, ajustamos y escalamos lo que funciona. Nada se queda en piloto.",
        },
      ],
    },
    faq: {
      eyebrow: "Preguntas frecuentes",
      titleA: "Antes de",
      titleFade: "empezar a trabajar juntos",
      items: [
        {
          question: "¿Quién es FenixDigital360?",
          answer:
            "Somos un equipo de automatizacion, IA y marketing digital. No vendemos herramientas sueltas: disenamos e implementamos el sistema completo, desde el trafico que trae al lead hasta el agente que lo atiende y lo convierte.",
        },
        {
          question: "¿Qué hace exactamente un agente como FenixChat o FenixSDR?",
          answer:
            "Atienden y califican conversaciones en WhatsApp u otros canales, con acceso a tu informacion real de negocio. Agendan reuniones, responden preguntas frecuentes y escalan a un humano cuando hace falta, sin perder contexto.",
        },
        {
          question: "¿Cuánto tarda en implementarse un proyecto?",
          answer:
            "Depende del alcance. Un agente de IA o una automatizacion puntual suele estar listo en pocas semanas; una estrategia completa (trafico + automatizacion + web) se planifica por fases para ver resultados tempranos.",
        },
        {
          question: "¿Necesito tener herramientas o infraestructura ya montada?",
          answer:
            "No. Podemos montar todo desde cero, incluyendo infraestructura propia (VPS) para que los datos y las conversaciones de tu negocio no dependan de un tercero.",
        },
      ],
    },
    cta: {
      titleA: "Haz que",
      titleGradient: "la IA trabaje",
      titleB: "por tu negocio",
      description:
        "Agenda una conversacion rapida y te decimos, sin vueltas, donde conviene empezar.",
      button: "Escribinos por WhatsApp",
      whatsappMessage: "Hola! Quiero agendar una llamada con FenixDigital360.",
    },
    footer: {
      description:
        "Agencia de automatizacion, IA y marketing digital. Hacemos que la tecnologia trabaje por tu negocio.",
      navegacion: "Navegacion",
      servicios: "Servicios",
      contacto: "Contacto",
      portafolioLink: "Portafolio de proyectos",
      rights: "Todos los derechos reservados.",
      privacidad: "Politica de Privacidad",
      terminos: "Terminos de Uso",
    },
    whatsappFloat: {
      label: "Hablar con FenixChat",
      message: "Hola! Quiero saber mas sobre los servicios de FenixDigital360.",
    },
  },
  pt: {
    meta: {
      title: "FenixDigital360 | Agencia de Automacao e IA para empresas",
      description:
        "A FenixDigital360 faz a IA trabalhar pela sua empresa: Agentes de IA (FenixChat, FenixSDR), automacoes, trafego pago, design de sites e consultoria Go-To-Market.",
    },
    nav: {
      servicios: "Servicos",
      agentesIa: "Agentes IA",
      metodo: "Metodo",
      portafolio: "Portfolio",
      hablemos: "Vamos falar",
      langSwitch: "ES",
      langSwitchHref: "/",
    },
    hero: {
      tag: "Agencia de automacao & IA",
      titleA: "Fazemos a",
      titleGradient: "IA trabalhar",
      titleB: "pelo seu negocio",
      description:
        "Automacoes, agentes de IA, trafego pago e presenca digital, integrados em uma unica estrategia. Da ideia ao sistema funcionando.",
      cta: "Agendar uma chamada",
      ctaNote: "Uma",
      ctaNoteStrong: "conversa rapida",
      ctaNoteEnd: "para entender sua operacao e onde a IA se encaixa.",
    },
    problem: {
      eyebrow: "O problema de sempre",
      titleA: "Seu time faz na mao o que",
      titleFade: "a IA ja pode fazer",
      description:
        "Respostas repetidas, relatorios montados manualmente, follow-up que se perde entre conversas. O tempo do seu time vale demais para gastar em tarefas que um sistema bem construido resolve sozinho.",
      cta: "Entenda como funciona",
      panelTitle: "Painel de operacao",
      panelLive: "Ao vivo",
      tasks: [
        { label: "Responder leads no WhatsApp", status: "Automatizado" },
        { label: "Qualificar e agendar reunioes", status: "Automatizado" },
        { label: "Relatorios de campanhas", status: "Automatizado" },
        { label: "Follow-up pos-venda", status: "Pendente" },
      ],
    },
    services: {
      eyebrow: "É assim que resolvemos",
      titleA: "Um so time para",
      titleFade: "toda a sua estrategia digital",
      description:
        "Da campanha que traz o lead ao agente que atende. Seis frentes, uma unica estrategia conectada.",
      verMas: "Saiba mais",
      items: [
        {
          title: "Midia Paga / Trafego Pago",
          description:
            "Campanhas em Meta Ads e Google Ads com foco em custo por resultado, nao em vanity metrics.",
          tags: ["Meta Ads", "Google Ads"],
        },
        {
          title: "Automacoes",
          description:
            "Fluxos que conectam suas ferramentas e eliminam trabalho manual repetitivo, rodando 24/7.",
          tags: ["n8n", "Integracoes"],
        },
        {
          title: "Agentes IA",
          description:
            "Agentes que atendem, qualificam e vendem pelo WhatsApp. Nossos produtos estrela: FenixChat e FenixSDR.",
          tags: ["FenixChat", "FenixSDR"],
          href: "#agentes-ia",
        },
        {
          title: "Design de Sites",
          description:
            "Landing pages e sites institucionais rapidos, responsivos e pensados para converter.",
          tags: ["Next.js", "Landing pages"],
        },
        {
          title: "Marketing Digital",
          description:
            "Estrategia de conteudo e presenca digital que sustenta a aquisicao paga ao longo do tempo.",
          tags: ["Conteudo", "Estrategia"],
        },
        {
          title: "Consultoria Go-To-Market",
          description:
            "Definimos como seu produto chega ao mercado: posicionamento, canais e plano de lancamento.",
          tags: ["Estrategia", "Escala"],
        },
      ],
    },
    agents: {
      eyebrow: "Nossos produtos estrela",
      titleA: "Agentes de IA que",
      titleGradient: "vendem e atendem",
      titleB: "por voce",
      description:
        "Nao sao chatbots de respostas fixas. Sao agentes treinados com sua operacao, conectados ao seu CRM e aos seus canais, rodando 24 horas.",
      infra:
        "Infraestrutura propria: seus dados e suas conversas nao vivem em um SaaS de terceiros.",
      cta: "Conhecer FenixChat e FenixSDR",
      products: [
        {
          name: "FenixChat",
          description:
            "Agente conversacional que atende WhatsApp 24/7: responde, agenda e faz follow-up sem perder nenhum lead.",
        },
        {
          name: "FenixSDR",
          description:
            "Agente de prospeccao B2B: identifica, contata e qualifica leads para encher seu pipeline no piloto automatico.",
        },
      ],
    },
    stack: {
      text: "Tecnologia que usamos para construir",
      textStrong: "crescimento com IA",
    },
    differentiators: {
      eyebrow: "Diferenciais",
      titleA: "Por que escolher",
      titleFade: "a FenixDigital360",
      items: [
        {
          title: "Infraestrutura propria",
          description:
            "Seus agentes e seus dados rodam em infraestrutura sua, nao em um SaaS compartilhado que pode subir precos ou mudar limites sem avisar.",
        },
        {
          title: "Preco sem surpresas",
          description:
            "Nada de tarifas que escalam com mensagens processadas ou usuarios ativos. Voce sabe exatamente o que esta pagando todo mes.",
        },
        {
          title: "Um time, nao uma corrente de agencias",
          description:
            "Estrategia, trafego, automacao e desenvolvimento sob o mesmo teto. Sem telefone sem fio entre fornecedores.",
        },
      ],
    },
    method: {
      eyebrow: "Transformacao passo a passo",
      titleA: "Os",
      titleGradient: "4 passos",
      titleB: "do Metodo FenixDigital360",
      steps: [
        {
          number: "01",
          title: "Diagnostico",
          description:
            "Entendemos sua operacao, seu funil e onde esta se perdendo tempo ou vendas.",
        },
        {
          number: "02",
          title: "Estrategia",
          description:
            "Definimos o que automatizar, qual agente construir e onde investir em trafego.",
        },
        {
          number: "03",
          title: "Implementacao",
          description:
            "Construimos e conectamos: agentes de IA, automacoes, landing page e campanhas.",
        },
        {
          number: "04",
          title: "Escala",
          description:
            "Medimos, ajustamos e escalamos o que funciona. Nada fica no piloto.",
        },
      ],
    },
    faq: {
      eyebrow: "Perguntas frequentes",
      titleA: "Antes de",
      titleFade: "comecar a trabalhar juntos",
      items: [
        {
          question: "Quem e a FenixDigital360?",
          answer:
            "Somos um time de automacao, IA e marketing digital. Nao vendemos ferramentas soltas: desenhamos e implementamos o sistema completo, do trafego que traz o lead ao agente que atende e converte.",
        },
        {
          question: "O que exatamente um agente como FenixChat ou FenixSDR faz?",
          answer:
            "Atendem e qualificam conversas no WhatsApp ou outros canais, com acesso as informacoes reais do seu negocio. Agendam reunioes, respondem perguntas frequentes e escalam para um humano quando necessario, sem perder contexto.",
        },
        {
          question: "Quanto tempo leva para implementar um projeto?",
          answer:
            "Depende do escopo. Um agente de IA ou uma automacao pontual costuma ficar pronto em poucas semanas; uma estrategia completa (trafego + automacao + site) e planejada por fases para ver resultados cedo.",
        },
        {
          question: "Preciso ter ferramentas ou infraestrutura ja montada?",
          answer:
            "Nao. Podemos montar tudo do zero, incluindo infraestrutura propria (VPS) para que os dados e as conversas do seu negocio nao dependam de terceiros.",
        },
      ],
    },
    cta: {
      titleA: "Faca",
      titleGradient: "a IA trabalhar",
      titleB: "pelo seu negocio",
      description:
        "Agende uma conversa rapida e falamos, sem enrolacao, por onde vale a pena comecar.",
      button: "Fale conosco no WhatsApp",
      whatsappMessage: "Ola! Quero agendar uma chamada com a FenixDigital360.",
    },
    footer: {
      description:
        "Agencia de automacao, IA e marketing digital. Fazemos a tecnologia trabalhar pelo seu negocio.",
      navegacion: "Navegacao",
      servicios: "Servicos",
      contacto: "Contato",
      portafolioLink: "Portfolio de projetos",
      rights: "Todos os direitos reservados.",
      privacidad: "Politica de Privacidade",
      terminos: "Termos de Uso",
    },
    whatsappFloat: {
      label: "Falar com FenixChat",
      message: "Ola! Quero saber mais sobre os servicos da FenixDigital360.",
    },
  },
} as const;

export function t(lang: Lang) {
  return dict[lang];
}
