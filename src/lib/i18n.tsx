export const SITE_LANGUAGE = "pt-BR";

// One Portuguese source; other languages are handled by browser/Google translation.
export const siteContent = {
    nav: { home: "Início", about: "Sobre", specialties: "Especialidades", intl: "Internacional", contact: "Contato", all: "Ver todas as especialidades" },
    cta: "Agende sua experiência",
    heroTitle: "Uma experiência de cuidado que vai além do essencial",
    heroText: "Descubra um universo de estética e bem-estar onde cada detalhe é pensado para proporcionar uma experiência personalizada, acolhedora e exclusiva.",
    aboutEyebrow: "Sobre a AKURA",
    aboutTitle: "Cada experiência começa com o cuidado",
    aboutText: "Na AKURA, acreditamos que o bem-estar está nos detalhes. Nossa proposta reúne diferentes especialidades em uma experiência de atendimento personalizado, com atenção às necessidades de cada pessoa.",
    specEyebrow: "Nossas especialidades",
    specTitle: "Nove universos de cuidado",
    discover: "Descobrir",
    persEyebrow: "Atendimento personalizado",
    persTitle: "Um cuidado pensado para você",
    persText: "Cada pessoa possui suas próprias necessidades e expectativas. Por isso, valorizamos uma experiência de atendimento personalizada, com atenção, escuta e cuidado em cada etapa.",
    expEyebrow: "A Experiência Pura",
    expTitle: "Mais do que um cuidado, uma experiência para sentir",
    expText: "Na AKURA, cada detalhe é pensado para proporcionar momentos de tranquilidade, acolhimento e bem-estar. Um convite para desacelerar, despertar os sentidos e descobrir o prazer de dedicar um momento exclusivamente a você.",
    expSlogan: "AKURA — Porque o verdadeiro luxo está na experiência de sentir.",
    spaceEyebrow: "Nosso Espaço",
    spaceTitle: "Ambientes pensados para o seu bem-estar",
    intlEyebrow: "Presença internacional",
    countries: ["França", "Suíça", "Espanha", "Brasil"],
    contactTitle: "Sua próxima experiência começa aqui",
    contactText: "Conheça nossas especialidades e entre em contato para descobrir a experiência AKURA.",
    specIntro: "Apresentação institucional da especialidade",
    aboutService: "Sobre o serviço",
    servicePending: "Espaço reservado para as informações aprovadas sobre este serviço.",
    headSpaTitle: "Japanese Head Spa",
    headSpaText: "Uma experiência de relaxamento e bem-estar dedicada ao cuidado dos cabelos e do couro cabeludo, dentro do universo Akura Touch.",
    massageTitle: "Massagem localizada",
    massageText: "Um cuidado focado nas áreas que mais precisam de atenção, para aliviar tensões e promover o bem-estar, dentro do universo Akura Touch.",
    others: "Outras especialidades",
    footerNav: "Navegação",
    footerContact: "Contato pelo WhatsApp",
    rights: "Todos os direitos reservados.",
    play: "Reproduzir",
};

export type Dict = typeof siteContent;

export const useI18n = () => ({ t: siteContent });
