const homecare = "/images/homecare-soins-pieds.webp";
const salaSpa = "/images/sala-spa-akura.png";
const headSpa = "/images/head-spa.webp";
const massageCible = "/images/massage-cible.webp";
import { siteContent } from "@/lib/i18n";
const akuraTouchMassage = "/images/akura-touch-massage.webp";
const footBath = "/images/foot-spa-banho.webp";
const footMassage = "/images/foot-spa-massagem.webp";
const footFeet = "/images/foot-spa-pes.webp";
const kidsCare = "/images/akura-kids-atendimento.webp";
const kidsSpace = "/images/akura-kids-espaco.webp";
const esteticaCorporal = "/images/estetica-corporal-akura.webp";
const massageCorporate = "/images/massage-corporative-akura.png";
const laserterapia = "/images/laserterapia-akura.webp";

export const WHATSAPP_URL = "https://wa.me/message/4ICX2I4F3MQCP1";

export type Service = {
  id: string;
  title: string;
  text?: string;
  duration?: string;
  benefits?: string[];
  image?: string;
  alt: string;
  gallery?: { image: string; alt: string }[];
};
export type Specialty = { slug: string; name: string; tagline: string; description: string; ctaLabel: string; image?: string; services: Service[] };

export const specialties: Specialty[] = [
  { slug: "akura-touch", name: "Akura Touch", tagline: "Massages et expériences de relaxation",
    description: "Une invitation à ralentir et à renouer avec votre bien-être. Akura Touch réunit des expériences sensorielles, des massages et des rituels de relaxation qui privilégient le confort, le toucher et l’attention individuelle.",
    ctaLabel: "Découvrez nos expériences", image: akuraTouchMassage, services: [
    { id: "head-face-ritual", title: "Akura Head & Face Ritual", duration: "60 min", image: headSpa, alt: "Akura Head & Face Ritual — rituel de soin de la tête et du visage",
      text: "Un rituel dédié à la tête et au visage, inspiré du Japanese Head Spa, qui associe des gestes doux et enveloppants à une attention particulière portée au cuir chevelu et aux traits du visage.",
      benefits: ["Relâche les tensions de la tête et du visage", "Procure une sensation profonde de calme", "Éveille les sens en douceur"] },
    { id: "touch-relax", title: "Akura Touch Relax", duration: "60 min", image: akuraTouchMassage, alt: "Akura Touch Relax — massage relaxant",
      text: "Un massage relaxant aux mouvements fluides et continus, pensé pour offrir une parenthèse de douceur et de lâcher-prise, dans une atmosphère calme et chaleureuse.",
      benefits: ["Favorise la détente générale", "Aide à relâcher les tensions corporelles", "Invite au lâcher-prise"] },
    { id: "touch-cible", title: "Akura Touch Ciblé", duration: "60 min", image: massageCible, alt: "Akura Touch Ciblé — massage ciblé",
      text: siteContent.massageText,
      benefits: ["Cible les zones qui demandent le plus d’attention", "Soulage les tensions localisées", "Redonne légèreté et confort"] },
    { id: "reflexologie-plantaire", title: "Akura Réflexologie Plantaire", duration: "40 min", alt: "Akura Réflexologie Plantaire — soin des pieds par pressions douces",
      text: "Un soin des pieds par pressions douces et précises, inspiré de la réflexologie plantaire, pour un moment de détente profonde qui part de la voûte plantaire et se diffuse dans tout le corps.",
      benefits: ["Procure une détente profonde", "Stimule les zones réflexes des pieds", "Apporte une sensation d’équilibre"] },
    { id: "head-relax-essentiel", title: "Akura Head Relax Essentiel", duration: "50–60 min", alt: "Akura Head Relax Essentiel — relaxation de la tête",
      text: "L’essentiel de la relaxation de la tête : un soin concentré sur le cuir chevelu, la nuque et les épaules, pour relâcher les tensions accumulées et retrouver une sensation de légèreté.",
      benefits: ["Relâche les tensions de la nuque et des épaules", "Apaise le mental", "Procure une sensation de légèreté"] },
    { id: "head-relax-corps", title: "Akura Head Relax + Corps", duration: "75–90 min", alt: "Akura Head Relax + Corps — relaxation de la tête et du corps",
      text: "La version la plus complète du rituel Head Relax : la relaxation de la tête prolongée par un soin du corps, pour une expérience enveloppante de bien-être global.",
      benefits: ["Combine relaxation de la tête et du corps", "Offre une détente complète et prolongée", "Crée une parenthèse de bien-être global"] },
    { id: "massage-femme-enceinte", title: "Massage Femme Enceinte", duration: "60 min", alt: "Massage Femme Enceinte — massage doux pendant la grossesse",
      text: "Un massage doux et attentif, spécialement adapté à la femme enceinte, avec des positions confortables et des gestes délicats pour accompagner ce moment si particulier.",
      benefits: ["Procure confort et détente pendant la grossesse", "Soulage les sensations de lourdeur", "Offre un moment de douceur à deux"] },
  ] },
  { slug: "akura-estetica", name: "Akura Esthétique", tagline: "Soins esthétiques du corps",
    description: "Le soin esthétique comme une expérience d’attention et de valorisation de soi. Chaque proposition est présentée avec sensibilité, dans le respect des particularités et des besoins de chacun.",
    ctaLabel: "Découvrez nos soins", image: esteticaCorporal, services: [
    { id: "estetica-corporal", title: "Soins du corps", image: esteticaCorporal, alt: "Soins du corps AKURA — soin du corps" },
  ] },
  { slug: "akura-therapy-ec", name: "Akura Therapy EC", tagline: "Thérapie laser et photobiomodulation",
    description: "Le savoir-faire et la technologie réunis dans un univers dédié à la thérapie laser et à la photobiomodulation. Akura Therapy EC présente des expériences professionnelles dans différents contextes, avec des applications et une disponibilité selon la localité.",
    ctaLabel: "Découvrez Therapy EC", image: laserterapia, services: [
    { id: "laserterapia", title: "Thérapie laser", image: laserterapia, alt: "Thérapie laser AKURA Therapy EC — soin au laser du dos" },
  ] },
  { slug: "akura-homecare", name: "Akura Homecare", tagline: "Expériences et soins à domicile",
    description: "Une approche qui vous apporte attention, confort et soins à domicile. Akura Homecare propose des possibilités de soins à domicile, dans le respect des besoins individuels et de la disponibilité dans chaque région.",
    ctaLabel: "Renseignez-vous sur les disponibilités", image: homecare, services: [
    { id: "soin-lumiere-pieds-ongles", title: "Soin Lumière des Pieds et des Ongles", duration: "30 min", image: homecare, alt: "Soin Lumière des Pieds et des Ongles — soin professionnel des pieds",
      text: "Un soin professionnel dédié à la beauté et au confort des pieds et des ongles, réalisé avec délicatesse pour des pieds doux, soignés et lumineux.",
      benefits: ["Embellit les pieds et les ongles", "Apporte douceur et confort", "Offre un moment de soin rien qu’à soi"] },
  ] },
  { slug: "akura-corporate", name: "Akura Corporate", tagline: "Bien-être pour les entreprises et les événements",
    description: "Des expériences de bien-être pensées pour les organisations qui placent les personnes au cœur de leurs priorités. Akura Corporate développe des propositions personnalisées pour les entreprises, les hôtels, les équipes et les événements, créant des moments privilégiés de soin et de douceur.",
    ctaLabel: "Demandez une proposition", image: massageCorporate, services: [
    { id: "massagem-relaxante", title: "Massage relaxant", image: massageCorporate, alt: "Massage relaxant AKURA Corporate — massage du dos en entreprise" },
    { id: "foot-spa", title: "Akura Foot Spa", duration: "60 min", image: footBath, alt: "Akura Foot Spa — bain de pieds avec des pierres dans une bassine dorée",
      text: "Une expérience complète dédiée aux pieds : bain relaxant, soins délicats et massage, pour des pieds reposés et une sensation de légèreté durable.",
      benefits: ["Détend et repose les pieds", "Procure une sensation de légèreté", "Offre une parenthèse de bien-être complète"],
      gallery: [
      { image: footMassage, alt: "Akura Foot Spa — massage des pieds" },
      { image: footFeet, alt: "Akura Foot Spa — soin des pieds" },
    ] },
  ] },
  { slug: "huellas-kids-teens", name: "Huellas Kids & Teens", tagline: "Éducation, mouvement et soin dès l’enfance",
    description: "Un univers dédié à la découverte, à l’apprentissage et aux soins préventifs. Le Projet Huellas propose aux enfants et aux adolescents des expériences éducatives et sensorielles à travers des activités ludiques, le mouvement et le soin de soi.",
    ctaLabel: "Découvrez le Projet Huellas", image: kidsCare, services: [
    { id: "akura-kids", title: "Akura Kids", image: kidsCare, alt: "Akura Kids — un accompagnement délicat pour les enfants", gallery: [
      { image: kidsSpace, alt: "Espace Akura Kids — un coin aménagé pour les enfants" },
    ] },
    { id: "babymassage", title: "Babymassage", duration: "30–40 min", alt: "Babymassage — massage doux pour bébés",
      text: "Un massage tout en douceur pour les bébés, avec des gestes tendres et rassurants qui favorisent le calme, le confort et le lien affectif.",
      benefits: ["Apaise et rassure le bébé", "Favorise le calme et le sommeil", "Renforce le lien affectif"] },
    { id: "massage-enfant-adolescent", title: "Massage Enfant & Adolescent", duration: "30 min", alt: "Massage Enfant & Adolescent — massage adapté aux jeunes",
      text: "Un massage adapté aux enfants et aux adolescents, avec des gestes doux et rassurants, pour les aider à se détendre et à découvrir le bien-être en toute confiance.",
      benefits: ["Aide les jeunes à se détendre", "Favorise le calme et la concentration", "Initie au bien-être en douceur"] },
  ] },
  { slug: "akura-formations", name: "Akura Formations", tagline: "Des connaissances qui deviennent une pratique",
    description: "Partager les connaissances est aussi une façon de prendre soin. Akura Formations réunit des propositions de cours, d’ateliers et de workshops qui relient expérience professionnelle, apprentissage et développement.",
    ctaLabel: "Découvrez nos formations", image: salaSpa, services: [] },
];

export const findSpecialty = (slug: string) => specialties.find((s) => s.slug === slug);

export const allServices = specialties.flatMap((specialty) =>
  specialty.services.map((service) => ({ service, specialty })),
);

export const findService = (id: string) => allServices.find(({ service }) => service.id === id);
