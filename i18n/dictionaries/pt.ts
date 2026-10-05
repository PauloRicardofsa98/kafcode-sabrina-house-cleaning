import type { Dictionary } from "../types";

/**
 * Português (pt-BR).
 * Tradução fiel ao inglês, não literal: o tom é o mesmo, a construção é brasileira.
 */
const pt: Dictionary = {
  meta: {
    home: {
      title: "Limpeza residencial em Contra Costa e no East Bay",
      description:
        "Limpeza recorrente, pesada e de mudança em Contra Costa, no East Bay e em São Francisco. Preço fechado e sempre a mesma profissional. Peça um orçamento grátis por SMS.",
    },
    services: {
      title: "Serviços de limpeza",
      description:
        "Manutenção recorrente, limpeza pesada, mudança e pós-obra para casas e apartamentos da Bay Area. Orçamento grátis por SMS.",
    },
    areas: {
      title: "Regiões atendidas",
      description:
        "Limpeza residencial em Concord, Walnut Creek, Danville, Lafayette, Orinda, Oakland, Berkeley, San Francisco, Vallejo e por toda Contra Costa. Mande seu ZIP code por SMS.",
    },
    about: {
      title: "Sobre a Sabrina",
      description:
        "Um negócio pequeno e caprichoso de limpeza residencial em Contra Costa e no East Bay. Conheça quem realmente vai limpar a sua casa.",
    },
    faq: {
      title: "Perguntas frequentes",
      description:
        "Agendamento, preço, produtos, acesso à casa e regiões atendidas. O que mais nos perguntam sobre limpeza na Bay Area.",
    },
    quote: {
      title: "Orçamento grátis",
      description:
        "Conte como é a sua casa e devolvemos um preço fechado por SMS, normalmente em menos de uma hora. Sem visita técnica, sem compromisso.",
    },
    privacy: {
      title: "Política de privacidade",
      description: "Como a Sabrina Cleaning Service trata as informações que você compartilha.",
    },
    terms: {
      title: "Termos de serviço",
      description: "As condições que valem para os serviços contratados com a Sabrina Cleaning Service.",
    },
  },

  nav: {
    home: "Início",
    services: "Serviços",
    areas: "Regiões",
    about: "Sobre",
    faq: "Dúvidas",
    quote: "Pedir orçamento",
    openMenu: "Abrir menu",
    closeMenu: "Fechar menu",
    skipToContent: "Ir para o conteúdo",
    languageLabel: "Trocar idioma",
    primaryLabel: "Navegação principal",
    footerLabel: "Navegação do rodapé",
  },

  cta: {
    text: "Peça um orçamento por SMS",
    textShort: "Mandar SMS",
    textBar: "Orçamento por SMS",
    call: "Ligar para nós",
    callShort: "Ligar",
    quote: "Pedir orçamento grátis",
    quoteShort: "Orçamento",
    learnMore: "Saiba mais",
    viewAll: "Ver tudo",
    smsBody: "Oi, Sabrina! Queria um orçamento de limpeza. Meu ZIP code é ",
  },

  hero: {
    eyebrow: "Atendemos toda a Bay Area",
    titleLead: "Uma casa que parece",
    titleAccent: "recém-entregue",
    titleTail: "toda semana.",
    subtitle:
      "Limpeza recorrente, pesada e de mudança feita por uma equipe pequena, que chega na hora e lembra do jeito que você gosta. Mande seu ZIP code por SMS e receba um preço fechado, normalmente em menos de uma hora.",
    imageAlt:
      "Sala iluminada de uma casa em São Francisco depois da limpeza profissional, com superfícies livres e almofadas alinhadas",
    badges: {
      estimate: "Orçamento grátis",
      availability: "Vagas na mesma semana",
      supplies: "Produtos inclusos",
    },
    stats: {
      rating: "de avaliação média",
      homes: "casas limpas",
      years: "anos na Bay Area",
    },
  },

  about: {
    eyebrow: "Sobre",
    title: "Um negócio pequeno, por escolha",
    lead: "A Sabrina Cleaning Service é tocada pela própria dona. Isso não é uma limitação de que a gente se desculpa. É justamente o que mantém o trabalho consistente.",
    intro: {
      one: "Quando você contrata uma empresa grande, na prática você está contratando um despachante. Aparece quem estiver livre naquela manhã, seguindo um checklist genérico, e talvez nunca mais volte. Quando você contrata a gente, você está contratando a pessoa que vai estar na sua cozinha.",
      two: "É esse o modelo inteiro. Mantemos a lista de clientes pequena o bastante para que a mesma pessoa volte às mesmas casas semana após semana e as aprenda de verdade: qual prateleira não se mexe, qual cachorro late para o aspirador, qual banheiro sempre precisa de dez minutos a mais.",
    },
    howTitle: "Como trabalhamos",
    how: {
      quote: {
        title: "Orçamento antes de começar",
        body: "Você recebe um preço fechado por SMS, com base no que contou sobre a casa. Se a casa for bem diferente do descrito, avisamos antes de começar, nunca depois.",
      },
      supplies: {
        title: "Levamos tudo",
        body: "Produtos, panos, aspirador. De baixa toxicidade e sem perfume por padrão, por causa das crianças, dos pets e de quem reage a produto perfumado.",
      },
      report: {
        title: "Contamos o que encontramos",
        body: "Ralo lento, vazamento começando embaixo da pia, mofo atrás do batente da janela. Você recebe um SMS sobre isso. Descobrir cedo vale mais que a limpeza em si.",
      },
    },
    storyTitle: "Nas palavras da Sabrina",
    photoAlt: "Sabrina, dona da Sabrina Cleaning Service, em uma casa da Bay Area",
    areaTitle: "Onde atendemos",
    areaBody: "Por toda a Bay Area, de Orinda e Lafayette passando por Concord e Walnut Creek até Pittsburg, mais Oakland, Berkeley, São Francisco e ao norte Benicia e Vallejo.",
    ctaTitle: "Quer saber se combina com você?",
    ctaBody: "Mande seu ZIP code por SMS e uma frase sobre a sua casa. Se não formos a escolha certa, a gente fala.",
  },

  trust: {
    licensedAndInsured: "Licenciada e segurada",
    backgroundChecked: "Antecedentes verificados",
    supplies: "Produtos inclusos",
  },

  services: {
    eyebrow: "O que fazemos",
    title: "Limpeza pensada para o jeito que você vive",
    subtitle:
      "Quatro serviços, com preço fechado combinado antes de começar. A maioria dos clientes começa com uma limpeza pesada e depois passa para as visitas recorrentes.",
    items: {
      "recurring-cleaning": {
        name: "Limpeza recorrente",
        blurb:
          "Semanal, quinzenal ou mensal, sempre com a mesma pessoa, que aprende o que importa na sua casa.",
      },
      "deep-cleaning": {
        name: "Limpeza pesada",
        blurb:
          "O recomeço completo. Rodapés, rejunte, dentro do forno e da geladeira e tudo o que a faxina de rotina pula.",
      },
      "move-in-move-out": {
        name: "Mudança (entrada e saída)",
        blurb:
          "Limpeza detalhada com a casa vazia, para você receber o depósito de volta, ou começar o primeiro dia numa casa de verdade limpa.",
      },
      "post-construction": {
        name: "Pós-obra",
        blurb:
          "A poeira fina da reforma removida do jeito certo, dos dutos e luminárias até o último passe no chão.",
      },
    },
    allServices: "Ver todos os serviços",
    startingNote: "Na dúvida sobre qual escolher? Mande um SMS que a gente diz com sinceridade.",
  },

  how: {
    eyebrow: "Como funciona",
    title: "Três passos, sem ficar se desencontrando no telefone",
    subtitle: "Do primeiro SMS até a data marcada, quase sempre em menos de dez minutos.",
    steps: {
      one: {
        title: "Mande um SMS",
        body: "Envie seu ZIP code e mais ou menos o tamanho da casa. É de verdade tudo o que precisamos para dar o preço.",
      },
      two: {
        title: "Receba o preço e escolha o dia",
        body: "Respondemos com um valor fechado e os horários livres da semana. Você confirma o que encaixa.",
      },
      three: {
        title: "Chegue numa casa limpa",
        body: "Chegamos na hora, com nossos próprios produtos, e limpamos a casa cômodo por cômodo.",
      },
    },
  },

  why: {
    eyebrow: "Por que a Sabrina",
    title: "A diferença está em quem aparece na sua porta",
    subtitle:
      "Empresa grande manda quem estiver livre naquele dia. A gente não trabalha assim, e é por isso que cliente nosso fica anos.",
    items: {
      sameCleaner: {
        title: "A mesma profissional, sempre",
        body: "Nada de equipe rodando. Cliente recorrente fica com a mesma pessoa, que já sabe qual prateleira não se mexe.",
      },
      flatPrice: {
        title: "Preço fechado, combinado antes",
        body: "O valor que mandamos por SMS é o valor que você paga. Sem cobrar por hora, sem extra na porta.",
      },
      safeProducts: {
        title: "Seguro para crianças e pets",
        body: "Produtos de baixa toxicidade e sem perfume por padrão. Conte sobre alergias ou uma marca preferida que a gente adapta.",
      },
      onTime: {
        title: "Na hora, ou você fica sabendo antes",
        body: "Se a 101 travar, você recebe um SMS antes do atraso, não um pedido de desculpa depois.",
      },
      details: {
        title: "Os detalhes que ninguém pede",
        body: "Rodapé, espelho de interruptor, a base da torneira, o trilho do box. É aí que se decide se a casa está limpa.",
      },
    },
  },

  areas: {
    eyebrow: "Onde atendemos",
    title: "Por toda a Bay Area",
    subtitle:
      "De Orinda e Lafayette passando por Concord e Walnut Creek, até Pittsburg e o Delta, cruzando a ponte para Oakland, Berkeley e São Francisco, e ao norte até Benicia e Vallejo.",
    note: "Não sabe se sua rua entra? Mande o ZIP code por SMS que respondemos na hora.",
    viewCity: "Limpeza residencial em",
    allAreas: "Ver todas as regiões",
    countyLabel: "Condado",
  },

  testimonials: {
    eyebrow: "Clientes",
    title: "O que dizem por aí",
    subtitle: "Avaliações de casas por toda a Bay Area.",
  },

  feedback: {
    eyebrow: "Avaliação",
    title: "Como foi a sua experiência?",
    subtitle:
      "Se você já utilizou nossos serviços de limpeza, queremos muito saber como foi a sua experiência.",

    cardTitle: "Conte como foi",
    cardBody:
      "Sua avaliação nos ajuda a melhorar o serviço e também ajuda outros clientes a conhecer melhor o nosso trabalho.",
    trigger: "Deixar uma avaliação",
    note: "Sua avaliação será revisada antes de ser publicada no site.",

    modal: {
      title: "Deixe sua avaliação",
      close: "Fechar",
    },

    form: {
      name: "Nome",
      city: "Cidade",
      rating: "Avaliação",
      comment: "Seu feedback",
      submit: "Enviar avaliação",
      sending: "Enviando...",
      ratingLabel: "de 5 estrelas",

      validationError:
        "Preencha todos os campos e selecione uma avaliação.",
      submitError:
        "Não foi possível enviar sua avaliação. Tente novamente.",

      successTitle: "Obrigado pela sua avaliação!",
      successBody:
        "Sua avaliação foi enviada com sucesso.",
    },
  },

  pricing: {
    eyebrow: "Preços",
    title: "Orçamento grátis, preço fechado",
    subtitle:
      "Uma tabela de preços já estaria errada para a sua casa no momento em que você a lesse, porque tamanho, estado e frequência mudam tudo. Por isso orçamos direito, por SMS, em poucos minutos.",
    points: {
      flat: "Um preço fechado por visita, combinado antes de começar",
      recurring: "Visita recorrente sai mais barata que limpeza avulsa",
      cancel: "Sem multa de cancelamento com 24 horas de aviso",
      supplies: "Produtos, equipamento e deslocamento inclusos",
    },
    cta: "Pedir meu orçamento grátis",
    note: "Sem visita técnica. Sem compromisso.",
  },

  faq: {
    eyebrow: "Dúvidas",
    title: "Tudo o que perguntam antes de fechar",
    subtitle: "Ficou alguma dúvida? Mande um SMS. Você recebe resposta de gente, não script.",
    more: "Ver todas as perguntas",
    items: {
      booking: {
        q: "Como faço para agendar?",
        a: "Mande um SMS com seu ZIP code e mais ou menos o tamanho da casa. Respondemos com um preço fechado e os dias livres. Confirmou o dia, está agendado, sem criar conta e sem pagar sinal.",
      },
      price: {
        q: "Quanto custa uma limpeza?",
        a: "Depende do tamanho e do estado da casa e de quantas vezes vamos. A primeira limpeza pesada custa mais que as visitas recorrentes que vêm depois. Passamos o preço fechado por SMS antes de agendar qualquer coisa, e ele não muda depois.",
      },
      areas: {
        q: "Quais regiões vocês atendem?",
        a: "Toda a Bay Area. Concord, Walnut Creek, Clayton Valley, Pacheco, Martinez, Lafayette, Orinda, Moraga, Alamo, Danville, San Ramon, Bay Point e Pittsburg, mais Oakland, Berkeley e São Francisco, e ao norte Benicia e Vallejo. Se a sua cidade não estiver nessa lista, mande mensagem mesmo assim: muitas vezes dá para encaixar.",
      },
      home: {
        q: "Preciso estar em casa durante a limpeza?",
        a: "Não. A maioria dos nossos clientes recorrentes está trabalhando. Você pode deixar chave, código de lockbox ou as instruções do prédio, e mandamos SMS quando chegamos e quando terminamos.",
      },
      supplies: {
        q: "Vocês levam os próprios produtos?",
        a: "Sim. Produtos, panos e aspirador, tudo incluso no preço. Usamos produtos de baixa toxicidade e sem perfume por padrão. Se preferir que usemos os seus, sem problema: é só deixar separado.",
      },
      frequency: {
        q: "Com que frequência devo agendar?",
        a: "Quinzenal atende bem a maioria das casas e é o melhor custo por limpeza. Semanal faz sentido com pets, crianças pequenas ou casa muito movimentada. Mensal funciona para lugares menores ou que já ficam organizados entre as visitas.",
      },
      pets: {
        q: "Os produtos são seguros para pets e crianças?",
        a: "São. Usamos produtos de baixa toxicidade e sem perfume como padrão, justamente por causa de pets e crianças pequenas. Conte sobre alergias ou sensibilidades antes da primeira visita que ajustamos o que levamos.",
      },
      access: {
        q: "E se eu precisar remarcar?",
        a: "É só mandar mensagem. Com 24 horas de aviso não há custo nenhum. Preferimos muito mais mudar a data do que limpar a casa numa hora ruim.",
      },
    },
  },

  finalCta: {
    title: "Vamos colocar a sua casa na agenda",
    body: "Mande seu ZIP code por SMS e devolvemos um preço fechado, normalmente em menos de uma hora e sempre de graça.",
    imageAlt:
      "Mascote ilustrada da Sabrina Cleaning Service: uma profissional sorridente de uniforme preto e branco segurando um espanador",
  },

  share: {
    eyebrow: "Compartilhe",
    title: "Aponte a câmera e abra o site",
    qrAlt: "QR code que abre o site da Sabrina Cleaning Service",
    share: "Compartilhar",
    copy: "Copiar link",
    copied: "Link copiado",
  },

  quoteForm: {
    eyebrow: "Orçamento grátis",
    title: "Conte como é a sua casa",
    subtitle:
      "Preencha aqui que transformamos tudo numa mensagem de texto para você. Nada vai para servidor nenhum; seu celular abre com a mensagem já escrita.",
    fields: {
      name: "Seu nome",
      phone: "Telefone",
      email: "E-mail (opcional)",
      zip: "ZIP code",
      service: "Qual serviço?",
      frequency: "Com que frequência?",
      bedrooms: "Quartos",
      bathrooms: "Banheiros",
      notes: "Algo que devemos saber?",
      notesPlaceholder: "Pets, alergias, estacionamento, cômodos a pular, dias preferidos…",
    },
    frequencies: {
      weekly: "Semanal",
      biweekly: "Quinzenal",
      monthly: "Mensal",
      once: "Uma vez só",
      unsure: "Ainda não sei",
    },
    select: "Selecione uma opção",
    submit: "Abrir minha mensagem",
    required: "Obrigatório",
    zipPattern: "Digite um ZIP code de 5 dígitos, por exemplo 94080",
    ready: {
      title: "Sua mensagem está pronta",
      body: "Seu aplicativo de mensagens deve ter aberto. Se não abriu, o que acontece no computador, copie a mensagem abaixo e mande do jeito que preferir.",
      copy: "Copiar mensagem",
      copied: "Copiado",
      orCall: "Ou ligue",
      orEmail: "Ou envie um e-mail",
      restart: "Começar de novo",
    },
    smsLabels: {
      intro: "Oi, Sabrina! Queria um orçamento de limpeza.",
      name: "Nome",
      phone: "Telefone",
      email: "E-mail",
      zip: "ZIP",
      service: "Serviço",
      frequency: "Frequência",
      size: "Casa",
      bedrooms: "quartos",
      bathrooms: "banheiros",
      notes: "Observações",
    },
  },

  footer: {
    blurb:
      "Limpeza residencial por toda a Bay Area. Recorrente, pesada, mudança e pós-obra.",
    servicesTitle: "Serviços",
    companyTitle: "Empresa",
    contactTitle: "Contato",
    hoursTitle: "Horário",
    hoursValue: "Segunda a sábado, 8h – 18h",
    followTitle: "Redes",
    rights: "Todos os direitos reservados.",
    privacy: "Privacidade",
    terms: "Termos",
    languageTitle: "Idioma",
  },

  mobileBar: {
    label: "Contato rápido",
  },

  breadcrumbs: {
    home: "Início",
    label: "Trilha de navegação",
  },

  notFound: {
    title: "Esta página não existe",
    body: "O link pode estar antigo, ou a página pode existir só em inglês. Tente a página inicial, ou mande um SMS, que é mais rápido.",
    cta: "Voltar ao início",
  },

  legal: {
    updated: "Última atualização",
    privacy: {
      intro:
        "Esta política é curta porque há muito pouco a explicar: este site não roda banco de dados e não guarda nada do que você digita nele.",
      sections: {
        form: {
          title: "O formulário de orçamento",
          body: "O formulário deste site nunca envia suas respostas para um servidor. Ele monta uma mensagem de texto e entrega essa mensagem ao seu celular, exatamente como se você mesmo tivesse digitado. Nada fica guardado aqui e nada é enviado até você apertar enviar no seu próprio aplicativo.",
        },
        contact: {
          title: "Quando você entra em contato",
          body: "Se você mandar SMS, ligar ou escrever por e-mail, guardamos sua mensagem e seus dados de contato enquanto estivermos trabalhando juntos, para agendar as visitas e orçar direito. Não vendemos nem compartilhamos isso com ninguém.",
        },
        analytics: {
          title: "Análise de tráfego e cookies",
          body: "Este site não usa cookie de publicidade nem rastreamento entre sites. Se um dia adicionarmos uma métrica básica de tráfego que respeite privacidade, esta página vai dizer.",
        },
        rights: {
          title: "Suas escolhas",
          body: "Você pode nos pedir a qualquer momento para apagar os dados de contato que temos. Mande um SMS ou e-mail que confirmamos quando estiver feito.",
        },
      },
    },
    terms: {
      intro:
        "Estas condições valem para os serviços de limpeza contratados conosco. Estão escritas de forma simples de propósito.",
      sections: {
        quotes: {
          title: "Orçamentos e preços",
          body: "O orçamento é um preço fechado por visita, baseado no que você contou sobre a casa. Se a casa for bem diferente do descrito, avisamos antes de começar e combinamos um novo valor com você. Nunca ajustamos o preço depois do serviço feito.",
        },
        scheduling: {
          title: "Agendamento e cancelamento",
          body: "Você pode remarcar ou cancelar sem custo com pelo menos 24 horas de aviso. Se não conseguirmos entrar na casa no horário combinado e não conseguirmos falar com você, a visita pode ser cobrada.",
        },
        liability: {
          title: "Danos e objetos de valor",
          body: "Cuidamos de verdade da sua casa. Se algo for danificado durante a visita, avise na hora que resolvemos. Guarde dinheiro, joias e itens insubstituíveis antes de chegarmos.",
        },
        payment: {
          title: "Pagamento",
          body: "O pagamento é feito no dia da visita, salvo se combinarmos outra coisa por escrito.",
        },
      },
    },
  },
};

export default pt;
