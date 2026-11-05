export const SITE_LANGUAGE = "fr-FR";

// One French source; other languages are handled by browser/Google translation.
export const siteContent = {
    nav: { home: "Accueil", about: "À propos", specialties: "Spécialités", intl: "International", contact: "Contact", all: "Voir toutes les spécialités" },
    cta: "Réservez votre expérience",
    heroTitle: "Une expérience de soin qui va au-delà de l’essentiel",
    heroText: "Découvrez un univers d’esthétique et de bien-être où chaque détail est pensé pour vous offrir une expérience personnalisée, chaleureuse et exclusive.",
    aboutEyebrow: "À propos d’AKURA",
    aboutTitle: "Chaque expérience commence par le soin",
    aboutText: "Chez AKURA, nous croyons que le bien-être réside dans les détails. Notre approche réunit différentes spécialités dans une expérience de soins personnalisés, attentive aux besoins de chaque personne.",
    specEyebrow: "Nos spécialités",
    specTitle: "Neuf univers de soins",
    discover: "Découvrir",
    persEyebrow: "Accompagnement personnalisé",
    persTitle: "Un soin pensé pour vous",
    persText: "Chaque personne a ses propres besoins et attentes. C’est pourquoi nous privilégions une expérience personnalisée, avec attention, écoute et soin à chaque étape.",
    expEyebrow: "L’Expérience Pure",
    expTitle: "Plus qu’un soin, une expérience à ressentir",
    expText: "Chez AKURA, chaque détail est pensé pour vous offrir des moments de calme, de douceur et de bien-être. Une invitation à ralentir, à éveiller les sens et à découvrir le plaisir de vous consacrer un moment rien qu’à vous.",
    expSlogan: "AKURA — Parce que le véritable luxe réside dans l’expérience de ressentir.",
    spaceEyebrow: "Notre Espace",
    spaceTitle: "Des espaces pensés pour votre bien-être",
    intlEyebrow: "Présence internationale",
    countries: ["France", "Suisse", "Espagne", "Brésil"],
    contactTitle: "Votre prochaine expérience commence ici",
    contactText: "Découvrez nos spécialités et contactez-nous pour vivre l’expérience AKURA.",
    specIntro: "Présentation institutionnelle de la spécialité",
    aboutService: "À propos du service",
    servicePending: "Espace réservé aux informations approuvées concernant ce service.",
    headSpaTitle: "Japanese Head Spa",
    headSpaText: "Une expérience de relaxation et de bien-être dédiée au soin des cheveux et du cuir chevelu, au sein de l’univers Akura Touch.",
    massageTitle: "Massage ciblé",
    massageText: "Un soin ciblant les zones qui nécessitent le plus d’attention, pour soulager les tensions et favoriser le bien-être, au sein de l’univers Akura Touch.",
    others: "Autres spécialités",
    footerNav: "Navigation",
    footerContact: "Contact par WhatsApp",
    rights: "Tous droits réservés.",
    play: "Lire",
};

export type Dict = typeof siteContent;

export const useI18n = () => ({ t: siteContent });
