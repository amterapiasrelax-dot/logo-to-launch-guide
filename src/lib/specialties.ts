const homecare = "/images/homecare-soins-pieds.webp";
const headSpa = "/images/head-spa.webp";
const massageCible = "/images/massage-cible.webp";
import { siteContent } from "@/lib/i18n";
const akuraTouchMassage = "/images/akura-touch-massage.webp";
const footBath = "/images/foot-spa-banho.webp";
const footMassage = "/images/foot-spa-massagem.webp";
const footFeet = "/images/foot-spa-pes.webp";
const kidsSpace = "/images/akura-kids-espaco.webp";
const esteticaCorporal = "/images/estetica-corporal-akura.webp";
const massageCorporate = "/images/massage-corporative-akura.png";
const laserterapia = "/images/laserterapia-akura.webp";
const babyMassage = "/images/babymassage-akura.png";

export const WHATSAPP_URL = "https://wa.me/message/4ICX2I4F3MQCP1";

export type Service = {
  id: string;
  title: string;
  category: string;
  text?: string;
  duration?: string;
  benefits?: string[];
  image?: string;
  alt: string;
  gallery?: { image: string; alt: string }[];
  note?: string;
};
export type Specialty = { slug: string; name: string; tagline: string; description: string; ctaLabel: string; image?: string; note?: string; services: Service[] };

export const specialties: Specialty[] = [
  { slug: "akura-touch", name: "Akura Touch", tagline: "Massages et expériences de relaxation",
    description: "Une invitation à ralentir et à renouer avec votre bien-être. Akura Touch réunit des expériences sensorielles, des massages et des rituels de relaxation qui privilégient le confort, le toucher et l’attention individuelle.",
    ctaLabel: "Découvrez nos expériences", image: akuraTouchMassage, services: [
    { id: "foot-spa", title: "Akura Foot Spa", category: "Foot Spa", duration: "60 min", image: footBath, alt: "Akura Foot Spa — bain de pieds avec des pierres dans une bassine dorée",
      text: "Une expérience complète dédiée aux pieds : bain relaxant, soins délicats et massage, pour des pieds reposés et une sensation de légèreté durable.",
      benefits: ["Détend et repose les pieds", "Procure une sensation de légèreté", "Offre une parenthèse de bien-être complète"],
      gallery: [
      { image: footMassage, alt: "Akura Foot Spa — massage des pieds" },
      { image: footFeet, alt: "Akura Foot Spa — soin des pieds" },
    ] },
    { id: "reflexologie-plantaire", title: "Akura Réflexologie Plantaire", category: "Réflexologie Plantaire", duration: "40 min", alt: "Akura Réflexologie Plantaire — soin des pieds par pressions douces",
      text: "Un soin des pieds par pressions douces et précises, inspiré de la réflexologie plantaire, pour un moment de détente profonde qui part de la voûte plantaire et se diffuse dans tout le corps.",
      benefits: ["Procure une détente profonde", "Stimule les zones réflexes des pieds", "Apporte une sensation d’équilibre"] },
    { id: "touch-relax", title: "Akura Touch Relax", category: "Massages du corps", duration: "60 min", image: akuraTouchMassage, alt: "Akura Touch Relax — massage relaxant",
      text: "Un massage relaxant aux mouvements fluides et continus, pensé pour offrir une parenthèse de douceur et de lâcher-prise, dans une atmosphère calme et chaleureuse.",
      benefits: ["Favorise la détente générale", "Aide à relâcher les tensions corporelles", "Invite au lâcher-prise"] },
    { id: "touch-cible", title: "Akura Touch Ciblé", category: "Massages du corps", duration: "60 min", image: massageCible, alt: "Akura Touch Ciblé — massage ciblé",
      text: siteContent.massageText,
      benefits: ["Cible les zones qui demandent le plus d’attention", "Soulage les tensions localisées", "Redonne légèreté et confort"] },
    { id: "head-relax-essentiel", title: "Akura Head Relax Essentiel", category: "Head Spa", duration: "60 min", alt: "Akura Head Relax Essentiel — relaxation de la tête",
      text: "L’essentiel de la relaxation de la tête : un soin concentré sur le cuir chevelu, la nuque et les épaules, pour relâcher les tensions accumulées et retrouver une sensation de légèreté.",
      benefits: ["Relâche les tensions de la nuque et des épaules", "Apaise le mental", "Procure une sensation de légèreté"] },
    { id: "head-relax-corps", title: "Akura Head Relax + Corps", category: "Head Spa", duration: "90 min", alt: "Akura Head Relax + Corps — relaxation de la tête et du corps",
      text: "La version la plus complète du rituel Head Relax : la relaxation de la tête prolongée par un soin du corps, pour une expérience enveloppante de bien-être global.",
      benefits: ["Combine relaxation de la tête et du corps", "Offre une détente complète et prolongée", "Crée une parenthèse de bien-être global"] },
    { id: "head-face-ritual", title: "Akura Head & Face Ritual", category: "Head Spa", duration: "60 min", image: headSpa, alt: "Akura Head & Face Ritual — rituel de soin de la tête et du visage",
      text: "Un rituel dédié à la tête et au visage, inspiré du Japanese Head Spa, qui associe des gestes doux et enveloppants à une attention particulière portée au cuir chevelu et aux traits du visage.",
      benefits: ["Relâche les tensions de la tête et du visage", "Procure une sensation profonde de calme", "Éveille les sens en douceur"] },
    { id: "soin-lumiere-pieds-ongles", title: "Soin Lumière des Pieds et des Ongles", category: "Cuidados dos pés", duration: "30 min", image: homecare, alt: "Soin Lumière des Pieds et des Ongles — soin professionnel des pieds",
      text: "Un soin professionnel dédié à la beauté et au confort des pieds et des ongles, réalisé avec délicatesse pour des pieds doux, soignés et lumineux.",
      benefits: ["Embellit les pieds et les ongles", "Apporte douceur et confort", "Offre un moment de soin rien qu’à soi"] },
    { id: "massage-femme-enceinte", title: "Massage Femme Enceinte", category: "Massagens para gestantes", duration: "60 min", alt: "Massage Femme Enceinte — massage doux pendant la grossesse",
      text: "Un massage doux et attentif, spécialement adapté à la femme enceinte, avec des positions confortables et des gestes délicats pour accompagner ce moment si particulier.",
      benefits: ["Procure confort et détente pendant la grossesse", "Soulage les sensations de lourdeur", "Offre un moment de douceur à deux"] },
  ] },
  { slug: "akura-podologia-pro", name: "Akura Podologia PRO", tagline: "Soins podologiques professionnels",
    description: "Une spécialité dédiée à la santé et au soin professionnel des pieds. Akura Podologia PRO présente des domaines d’expertise podologique, proposés selon l’habilitation et les conditions applicables dans chaque pays.",
    ctaLabel: "Renseignez-vous", note: "Les prestations professionnelles sont proposées selon l’habilitation et les conditions applicables dans chaque pays.", services: [
    { id: "podopediatria", title: "Podopédiatrie", category: "Podopédiatrie", alt: "Podopédiatrie — soins podologiques pour enfants",
      text: "Des soins podologiques dédiés aux enfants, avec une attention particulière portée au développement et au confort des petits pieds." },
    { id: "podologia-esportiva", title: "Podologie du sport", category: "Podologie du sport", alt: "Podologie du sport — soins liés aux activités sportives",
      text: "Des soins professionnels liés aux activités sportives, pour accompagner les pieds sollicités par la pratique du sport." },
    { id: "pe-diabetico", title: "Pied diabétique", category: "Pied diabétique", alt: "Pied diabétique — spécialité professionnelle",
      text: "Une spécialité professionnelle dédiée à l’attention et au suivi des pieds des personnes diabétiques." },
    { id: "feridas", title: "Plaies", category: "Plaies", alt: "Plaies — domaine professionnel",
      text: "Un domaine professionnel dédié à l’attention portée aux plaies des pieds, présenté à titre informatif." },
  ] },
  { slug: "huellas-kids-teens", name: "Akura Kids & Teens — Projet Huellas", tagline: "Soin et découverte dès l’enfance",
    description: "Un univers dédié à la découverte, à l’apprentissage et aux soins préventifs. Le Projet Huellas propose aux enfants et aux adolescents des expériences éducatives et sensorielles à travers des activités ludiques, le mouvement et le soin de soi.",
    ctaLabel: "Découvrez le Projet Huellas", services: [
    { id: "babymassage", title: "Babymassage", category: "Massages enfants", duration: "30–40 min", image: babyMassage, alt: "Babymassage — massage doux du dos d’un bébé sur une serviette crème",
      text: "Un massage tout en douceur pour les bébés, avec des gestes tendres et rassurants qui favorisent le calme, le confort et le lien affectif.",
      benefits: ["Apaise et rassure le bébé", "Favorise le calme et le sommeil", "Renforce le lien affectif"] },
    { id: "massage-enfant-adolescent", title: "Massage Enfant & Adolescent", category: "Massages enfants", duration: "30 min", alt: "Massage Enfant & Adolescent — massage adapté aux jeunes",
      text: "Un massage adapté aux enfants et aux adolescents, avec des gestes doux et rassurants, pour les aider à se détendre et à découvrir le bien-être en toute confiance.",
      benefits: ["Aide les jeunes à se détendre", "Favorise le calme et la concentration", "Initie au bien-être en douceur"] },
    { id: "pezinhos-felizes", title: "Pezinhos Felizes", category: "Spa magique des pieds", alt: "Pezinhos Felizes — spa des pieds pour enfants",
      text: "Un spa des pieds ludique et délicat, pensé pour que les enfants découvrent le soin de soi en s’amusant. Durée à confirmer." },
    { id: "podopediatria-kids", title: "Podopédiatrie", category: "Podopédiatrie", alt: "Podopédiatrie — soins podologiques pour enfants",
      text: "Des soins podologiques dédiés aux enfants, avec douceur et attention. Durée à confirmer." },
    { id: "akura-kids", title: "Akura Kids", category: "Massages enfants", alt: "Akura Kids — un accompagnement délicat pour les enfants", gallery: [
      { image: kidsSpace, alt: "Espace Akura Kids — un coin aménagé pour les enfants" },
    ] },
  ] },
  { slug: "akura-homecare", name: "Akura Homecare", tagline: "Expériences et soins à domicile",
    description: "Une approche qui vous apporte attention, confort et soins à domicile. Akura Homecare propose des possibilités de soins à domicile, dans le respect des besoins individuels et de la disponibilité dans chaque région.",
    ctaLabel: "Renseignez-vous sur les disponibilités", image: homecare, services: [
    { id: "experiencias-domicilio", title: "Expériences à domicile", category: "Expériences à domicile", alt: "Expériences à domicile — soins à domicile",
      text: "Des expériences et des soins à domicile, selon la modalité et la disponibilité dans chaque région." },
  ] },
  { slug: "akura-corporate", name: "Akura Corporate", tagline: "Bien-être pour les entreprises et les événements",
    description: "Des expériences de bien-être pensées pour les organisations qui placent les personnes au cœur de leurs priorités. Akura Corporate développe des propositions personnalisées pour les entreprises, les hôtels, les équipes et les événements, créant des moments privilégiés de soin et de douceur.",
    ctaLabel: "Demandez une proposition", image: massageCorporate, services: [
    { id: "empresas-equipes", title: "Entreprises et équipes", category: "Entreprises et équipes", image: massageCorporate, alt: "Bien-être en entreprise — massage en milieu professionnel",
      text: "Des expériences de bien-être pour les entreprises et leurs équipes, adaptées au rythme de chaque organisation." },
    { id: "hoteis-hospedes", title: "Hôtels et hôtes", category: "Hôtels et hôtes", alt: "Bien-être pour hôtels et hôtes",
      text: "Des expériences de bien-être pensées pour les hôtels et leurs hôtes, avec la délicatesse AKURA." },
    { id: "eventos-encontros", title: "Événements et rencontres", category: "Événements et rencontres", alt: "Bien-être pour événements",
      text: "Des expériences pour des événements spéciaux, qui apportent une touche de soin et d’attention à chaque rencontre." },
    { id: "programas-personalizados", title: "Programmes personnalisés", category: "Programmes personnalisés", alt: "Programmes personnalisés de bien-être",
      text: "Des propositions ponctuelles ou récurrentes, composées sur mesure selon les besoins de chaque organisation." },
  ] },
  { slug: "akura-therapy-ec", name: "Akura Therapy EC", tagline: "Thérapie laser et photobiomodulation",
    description: "Le savoir-faire et la technologie réunis dans un univers dédié à la thérapie laser et à la photobiomodulation. Akura Therapy EC présente des expériences professionnelles dans différents contextes, avec des applications et une disponibilité selon la localité.",
    ctaLabel: "Découvrez Therapy EC", image: laserterapia, note: "Présentation à titre informatif, sans promesse de résultats cliniques.", services: [
    { id: "laserterapia", title: "Laserthérapie", category: "Laserthérapie", image: laserterapia, alt: "Laserthérapie AKURA Therapy EC — soin au laser du dos",
      text: "Une présentation professionnelle de la thérapie laser et de ses domaines d’application." },
    { id: "fotobiomodulacao", title: "Photobiomodulation", category: "Photobiomodulation", alt: "Photobiomodulation — technologie de soin",
      text: "Une présentation de la technologie de photobiomodulation et de son cadre d’utilisation professionnelle." },
    { id: "aplicacoes-podologia", title: "Applications en podologie", category: "Applications en podologie", alt: "Applications en podologie — expérience professionnelle",
      text: "Une expérience professionnelle d’application de la thérapie laser dans le domaine podologique." },
    { id: "aplicacoes-estetica", title: "Applications en esthétique", category: "Applications en esthétique", alt: "Applications en esthétique — expérience professionnelle",
      text: "Une expérience professionnelle d’application de la thérapie laser dans le domaine esthétique." },
    { id: "ilib", title: "ILIB", category: "ILIB", alt: "ILIB — présentation institutionnelle",
      text: "Une présentation institutionnelle de l’ILIB dans le contexte brésilien." },
  ] },
  { slug: "akura-pmu", name: "Akura PMU", tagline: "Maquillage permanent artistique",
    description: "Un parcours artistique dédié au maquillage permanent. Akura PMU présente les protocoles qui font partie de l’histoire professionnelle de la marque, partagés à titre de présentation.",
    ctaLabel: "Découvrez Akura PMU", note: "Les protocoles sont présentés comme partie du parcours professionnel ; les réservations seront activées après confirmation.", services: [
    { id: "brows-master", title: "Brows Master", category: "Sourcils", alt: "Brows Master — maquillage permanent des sourcils",
      text: "Un protocole dédié à la beauté et à l’harmonie des sourcils." },
    { id: "lips-design", title: "Lips Design", category: "Lèvres", alt: "Lips Design — maquillage permanent des lèvres",
      text: "Un protocole dédié à la délicatesse et à la définition des lèvres." },
    { id: "eyes-line", title: "Eyes Line", category: "Yeux", alt: "Eyes Line — maquillage permanent des yeux",
      text: "Un protocole dédié au regard, avec précision et sensibilité." },
    { id: "areola-rebirth", title: "Areola Rebirth", category: "Reconstruction et camouflage", alt: "Areola Rebirth — reconstruction aréolaire",
      text: "Un protocole de reconstruction et de restauration, réalisé avec respect et humanité." },
    { id: "camouflage-derma", title: "Camouflage Derma", category: "Reconstruction et camouflage", alt: "Camouflage Derma — camouflage cutané",
      text: "Un protocole de camouflage cutané, pensé pour harmoniser et adoucir." },
    { id: "scalp-balance", title: "Scalp Balance", category: "Cuir chevelu", alt: "Scalp Balance — maquillage permanent du cuir chevelu",
      text: "Un protocole dédié au cuir chevelu, avec une approche délicate et minutieuse." },
    { id: "color-neutralizer", title: "Color Neutralizer", category: "Correction et neutralisation de couleur", alt: "Color Neutralizer — correction de couleur",
      text: "Un protocole de correction et de neutralisation de couleur, fondé sur l’expérience artistique." },
    { id: "artistic-fusion", title: "Artistic Fusion", category: "Protocoles artistiques", alt: "Artistic Fusion — protocoles artistiques",
      text: "Des protocoles artistiques qui réunissent technique, sensibilité et créativité." },
  ] },
  { slug: "akura-estetica", name: "Akura Esthétique", tagline: "Soins esthétiques du visage et du corps",
    description: "Le soin esthétique comme une expérience d’attention et de valorisation de soi. Chaque proposition est présentée avec sensibilité, dans le respect des particularités et des besoins de chacun.",
    ctaLabel: "Découvrez nos soins", image: esteticaCorporal, services: [
    { id: "estetica-facial", title: "Esthétique du visage", category: "Esthétique du visage", alt: "Esthétique du visage — soins du visage",
      text: "Des soins du visage, avec des traitements spécifiques à confirmer." },
    { id: "estetica-corporal", title: "Esthétique du corps", category: "Esthétique du corps", image: esteticaCorporal, alt: "Esthétique du corps — soins du corps",
      text: "Des soins du corps, avec des traitements spécifiques à confirmer." },
    { id: "cuidados-individualizados", title: "Soins esthétiques individualisés", category: "Soins esthétiques individualisés", alt: "Soins esthétiques individualisés",
      text: "Des modalités personnalisées, composées selon les besoins de chacun, à confirmer." },
  ] },
  { slug: "akura-formations", name: "Formations AKURA", tagline: "Des connaissances qui deviennent une pratique",
    description: "Partager les connaissances est aussi une façon de prendre soin. Formations AKURA réunit des propositions de cours, d’ateliers et de workshops qui relient expérience professionnelle, apprentissage et développement.",
    ctaLabel: "Découvrez nos formations", note: "Les dates, inscriptions et certifications seront annoncées après confirmation.", services: [
    { id: "cursos", title: "Cours", category: "Cours", alt: "Cours — formations professionnelles",
      text: "Des formations professionnelles fondées sur l’expérience et la pratique." },
    { id: "workshops", title: "Workshops en présentiel", category: "Workshops en présentiel", alt: "Workshops en présentiel — activités pratiques",
      text: "Des activités pratiques en présentiel, pour apprendre en faisant." },
    { id: "oficinas", title: "Ateliers", category: "Ateliers", alt: "Ateliers — activités d’apprentissage",
      text: "Des ateliers d’apprentissage, dans une atmosphère d’échange et de découverte." },
    { id: "modulos-teoricos", title: "Modules théoriques", category: "Modules théoriques", alt: "Modules théoriques — contenus formatifs",
      text: "Des contenus formatifs pour consolider les bases théoriques." },
    { id: "formacoes-hibridas", title: "Formations hybrides", category: "Formations hybrides", alt: "Formations hybrides — présentiel et en ligne",
      text: "Des activités qui combinent moments en présentiel et apprentissage en ligne." },
    { id: "aprendizagem-profissional", title: "Apprentissage professionnel", category: "Apprentissage professionnel", alt: "Apprentissage professionnel — développement professionnel",
      text: "Un accompagnement dédié au développement professionnel continu." },
  ] },
];

export const findSpecialty = (slug: string) => specialties.find((s) => s.slug === slug);

export const allServices = specialties.flatMap((specialty) =>
  specialty.services.map((service) => ({ service, specialty })),
);

export const findService = (id: string) => allServices.find(({ service }) => service.id === id);

export const serviceCategories = (s: Specialty) => {
  const order: string[] = [];
  for (const service of s.services) if (!order.includes(service.category)) order.push(service.category);
  return order.map((category) => ({ category, services: s.services.filter((x) => x.category === category) }));
};
