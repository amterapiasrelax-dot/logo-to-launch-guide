import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export type Lang = "pt" | "fr" | "es" | "en";
export const langs: Lang[] = ["pt", "fr", "es", "en"];

const dict = {
  pt: {
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
    expEyebrow: "Experiência AKURA",
    expTitle: "Luz, calma e atenção em cada detalhe",
    intlEyebrow: "Presença internacional",
    countries: ["França", "Suíça", "Espanha", "Brasil"],
    contactTitle: "Sua próxima experiência começa aqui",
    contactText: "Conheça nossas especialidades e entre em contato para descobrir a experiência AKURA.",
    specIntro: "Apresentação institucional da especialidade",
    specPlaceholder: "Texto provisório — aguardando aprovação. Esta especialidade integra a experiência AKURA de atendimento personalizado, com atenção às necessidades de cada pessoa.",
    aboutService: "Sobre o serviço",
    servicePending: "Espaço reservado para as informações aprovadas sobre este serviço.",
    others: "Outras especialidades",
    footerNav: "Navegação",
    footerContact: "Contato pelo WhatsApp",
    rights: "Todos os direitos reservados.",
    play: "Reproduzir",
  },
  fr: {
    nav: { home: "Accueil", about: "À propos", specialties: "Spécialités", intl: "International", contact: "Contact", all: "Voir toutes les spécialités" },
    cta: "Réservez votre expérience",
    heroTitle: "Une expérience de soin qui va au-delà de l'essentiel",
    heroText: "Découvrez un univers d'esthétique et de bien-être où chaque détail est pensé pour offrir une expérience personnalisée, chaleureuse et exclusive.",
    aboutEyebrow: "À propos d'AKURA",
    aboutTitle: "Chaque expérience commence par le soin",
    aboutText: "Chez AKURA, nous croyons que le bien-être réside dans les détails. Notre approche réunit différentes spécialités dans une expérience d'accompagnement personnalisé, attentive aux besoins de chacun.",
    specEyebrow: "Nos spécialités",
    specTitle: "Neuf univers de soin",
    discover: "Découvrir",
    persEyebrow: "Accompagnement personnalisé",
    persTitle: "Un soin pensé pour vous",
    persText: "Chaque personne a ses propres besoins et attentes. C'est pourquoi nous privilégions un accompagnement personnalisé, avec attention, écoute et soin à chaque étape.",
    expEyebrow: "L'expérience AKURA",
    expTitle: "Lumière, calme et attention à chaque détail",
    intlEyebrow: "Présence internationale",
    countries: ["France", "Suisse", "Espagne", "Brésil"],
    contactTitle: "Votre prochaine expérience commence ici",
    contactText: "Découvrez nos spécialités et contactez-nous pour vivre l'expérience AKURA.",
    specIntro: "Présentation institutionnelle de la spécialité",
    specPlaceholder: "Texte provisoire — en attente de validation. Cette spécialité fait partie de l'expérience AKURA d'accompagnement personnalisé, attentive aux besoins de chacun.",
    aboutService: "À propos du service",
    servicePending: "Espace réservé aux informations validées sur ce service.",
    others: "Autres spécialités",
    footerNav: "Navigation",
    footerContact: "Contact via WhatsApp",
    rights: "Tous droits réservés.",
    play: "Lire",
  },
  es: {
    nav: { home: "Inicio", about: "Sobre", specialties: "Especialidades", intl: "Internacional", contact: "Contacto", all: "Ver todas las especialidades" },
    cta: "Reserva tu experiencia",
    heroTitle: "Una experiencia de cuidado que va más allá de lo esencial",
    heroText: "Descubre un universo de estética y bienestar donde cada detalle está pensado para ofrecer una experiencia personalizada, acogedora y exclusiva.",
    aboutEyebrow: "Sobre AKURA",
    aboutTitle: "Cada experiencia comienza con el cuidado",
    aboutText: "En AKURA creemos que el bienestar está en los detalles. Nuestra propuesta reúne diferentes especialidades en una experiencia de atención personalizada, atenta a las necesidades de cada persona.",
    specEyebrow: "Nuestras especialidades",
    specTitle: "Nueve universos de cuidado",
    discover: "Descubrir",
    persEyebrow: "Atención personalizada",
    persTitle: "Un cuidado pensado para ti",
    persText: "Cada persona tiene sus propias necesidades y expectativas. Por eso valoramos una atención personalizada, con atención, escucha y cuidado en cada etapa.",
    expEyebrow: "Experiencia AKURA",
    expTitle: "Luz, calma y atención en cada detalle",
    intlEyebrow: "Presencia internacional",
    countries: ["Francia", "Suiza", "España", "Brasil"],
    contactTitle: "Tu próxima experiencia comienza aquí",
    contactText: "Conoce nuestras especialidades y contáctanos para descubrir la experiencia AKURA.",
    specIntro: "Presentación institucional de la especialidad",
    specPlaceholder: "Texto provisional — pendiente de aprobación. Esta especialidad forma parte de la experiencia AKURA de atención personalizada, atenta a las necesidades de cada persona.",
    aboutService: "Sobre el servicio",
    servicePending: "Espacio reservado para la información aprobada sobre este servicio.",
    others: "Otras especialidades",
    footerNav: "Navegación",
    footerContact: "Contacto por WhatsApp",
    rights: "Todos los derechos reservados.",
    play: "Reproducir",
  },
  en: {
    nav: { home: "Home", about: "About", specialties: "Specialties", intl: "International", contact: "Contact", all: "See all specialties" },
    cta: "Book your experience",
    heroTitle: "A care experience that goes beyond the essential",
    heroText: "Discover a world of aesthetics and well-being where every detail is designed to offer a personalized, welcoming and exclusive experience.",
    aboutEyebrow: "About AKURA",
    aboutTitle: "Every experience begins with care",
    aboutText: "At AKURA, we believe well-being lives in the details. We bring different specialties together in a personalized care experience, attentive to each person's needs.",
    specEyebrow: "Our specialties",
    specTitle: "Nine worlds of care",
    discover: "Discover",
    persEyebrow: "Personalized care",
    persTitle: "Care designed for you",
    persText: "Every person has their own needs and expectations. That is why we value a personalized experience, with attention, listening and care at every step.",
    expEyebrow: "The AKURA experience",
    expTitle: "Light, calm and attention in every detail",
    intlEyebrow: "International presence",
    countries: ["France", "Switzerland", "Spain", "Brazil"],
    contactTitle: "Your next experience begins here",
    contactText: "Explore our specialties and get in touch to discover the AKURA experience.",
    specIntro: "Institutional presentation of the specialty",
    specPlaceholder: "Provisional text — pending approval. This specialty is part of the AKURA personalized care experience, attentive to each person's needs.",
    aboutService: "About the service",
    servicePending: "Space reserved for the approved information about this service.",
    others: "Other specialties",
    footerNav: "Navigation",
    footerContact: "Contact on WhatsApp",
    rights: "All rights reserved.",
    play: "Play",
  },
};

export type Dict = (typeof dict)["pt"];

const Ctx = createContext<{ lang: Lang; setLang: (l: Lang) => void; t: Dict }>({
  lang: "pt",
  setLang: () => {},
  t: dict.pt,
});

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("pt");
  useEffect(() => {
    const saved = localStorage.getItem("akura-lang") as Lang | null;
    if (saved && langs.includes(saved)) setLangState(saved);
  }, []);
  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);
  const setLang = (l: Lang) => {
    setLangState(l);
    localStorage.setItem("akura-lang", l);
  };
  return <Ctx.Provider value={{ lang, setLang, t: dict[lang] }}>{children}</Ctx.Provider>;
}

export const useI18n = () => useContext(Ctx);
