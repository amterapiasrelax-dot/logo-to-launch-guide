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
const microblading = "/images/microblading-akura.webp";
const esteticaFacial = "/images/estetica-facial-akura.webp";
const esteticaCorporal = "/images/estetica-corporal-akura.webp";
const massagemRelaxante = "/images/massagem-relaxante-corporate.webp";
const laserterapia = "/images/laserterapia-akura.webp";
const podologyCare = "/images/podologie-pro-soin.webp";

export const WHATSAPP_URL = "https://wa.me/message/4ICX2I4F3MQCP1";

export type Service = { id: string; title: string; text?: string; image?: string; alt: string; gallery?: { image: string; alt: string }[] };
export type Specialty = { slug: string; name: string; tagline: string; description: string; ctaLabel: string; image?: string; services: Service[] };

export const specialties: Specialty[] = [
  { slug: "akura-touch", name: "Akura Touch", tagline: "Massages et expériences de relaxation",
    description: "Une invitation à ralentir et à renouer avec votre bien-être. Akura Touch réunit des expériences sensorielles, des massages et des rituels de relaxation qui privilégient le confort, le toucher et l’attention individuelle.",
    ctaLabel: "Découvrez nos expériences", image: akuraTouchMassage, services: [
    { id: "japanese-head-spa", title: siteContent.headSpaTitle, text: siteContent.headSpaText, image: headSpa, alt: "Japanese Head Spa AKURA" },
    { id: "massagem-localizada", title: siteContent.massageTitle, text: siteContent.massageText, image: massageCible, alt: "Massage ciblé AKURA" },
  ] },
  { slug: "akura-estetica", name: "Akura Esthétique", tagline: "Soins esthétiques du visage et du corps",
    description: "Le soin esthétique comme une expérience d’attention et de valorisation de soi. Chaque proposition est présentée avec sensibilité, dans le respect des particularités et des besoins de chacun.",
    ctaLabel: "Découvrez nos soins", image: esteticaFacial, services: [
    { id: "estetica-facial", title: "Soins du visage", image: esteticaFacial, alt: "Soins du visage AKURA — soin délicat du visage" },
    { id: "estetica-corporal", title: "Soins du corps", image: esteticaCorporal, alt: "Soins du corps AKURA — soin du corps" },
  ] },
  { slug: "akura-pmu", name: "Akura PMU", tagline: "Micropigmentation professionnelle",
    description: "Précision, délicatesse et savoir-faire technique dans un univers dédié à la micropigmentation. Akura PMU valorise l’individualité et la présentation responsable de chaque prestation.",
    ctaLabel: "Découvrez la spécialité", image: microblading, services: [
    { id: "microblading", title: "Microblading", image: microblading, alt: "Microblading AKURA — mise en valeur des sourcils" },
  ] },
  { slug: "akura-podologia-pro", name: "Akura Podologie PRO", tagline: "Une expertise dédiée au soin des pieds",
    description: "Uma trajetória construída sobre formação profissional e experiência em Podologia. A Akura Podologie PRO reúne conhecimentos em Podopediatria, Podologia Esportiva, Pé Diabético e Feridas, valorizando a responsabilidade e o cuidado especializado.",
    ctaLabel: "Explorez la Podologie PRO", image: podologyCare, services: [
    { id: "podologia", title: "Podologie", image: podologyCare, alt: "Podologie AKURA — soin des ongles des pieds avec des mains gantées" },
  ] },
  { slug: "akura-therapy-ec", name: "Akura Therapy EC", tagline: "Thérapie laser et photobiomodulation",
    description: "Le savoir-faire et la technologie réunis dans un univers dédié à la thérapie laser et à la photobiomodulation. Akura Therapy EC présente des expériences professionnelles dans différents contextes, avec des applications et une disponibilité selon la localité.",
    ctaLabel: "Découvrez Therapy EC", image: laserterapia, services: [
    { id: "laserterapia", title: "Thérapie laser", image: laserterapia, alt: "Thérapie laser AKURA Therapy EC — soin au laser du dos" },
  ] },
  { slug: "akura-homecare", name: "Akura Homecare", tagline: "Expériences et soins à domicile",
    description: "Une approche qui vous apporte attention, confort et soins à domicile. Akura Homecare propose des possibilités de soins à domicile, dans le respect des besoins individuels et de la disponibilité dans chaque région.",
    ctaLabel: "Renseignez-vous sur les disponibilités", image: homecare, services: [
    { id: "soins-pieds-domicile", title: "Soins des pieds à domicile", image: homecare, alt: "Akura Homecare — soin professionnel des pieds à domicile" },
  ] },
  { slug: "akura-corporate", name: "Akura Corporate", tagline: "Bien-être pour les entreprises et les événements",
    description: "Des expériences de bien-être pensées pour les organisations qui placent les personnes au cœur de leurs priorités. Akura Corporate développe des propositions personnalisées pour les entreprises, les hôtels, les équipes et les événements, créant des moments privilégiés de soin et de douceur.",
    ctaLabel: "Demandez une proposition", image: massagemRelaxante, services: [
    { id: "massagem-relaxante", title: "Massage relaxant", image: massagemRelaxante, alt: "Massage relaxant AKURA Corporate — massage express dans un cadre moderne" },
    { id: "foot-spa", title: "Foot Spa", image: footBath, alt: "Foot Spa — bain de pieds avec des pierres dans une bassine dorée", gallery: [
      { image: footMassage, alt: "Foot Spa — massage des pieds" },
      { image: footFeet, alt: "Foot Spa — soin des pieds" },
    ] },
  ] },
  { slug: "huellas-kids-teens", name: "Huellas Kids & Teens", tagline: "Éducation, mouvement et soin dès l’enfance",
    description: "Un univers dédié à la découverte, à l’apprentissage et aux soins préventifs. Le Projet Huellas propose aux enfants et aux adolescents des expériences éducatives et sensorielles à travers des activités ludiques, le mouvement et le soin de soi.",
    ctaLabel: "Découvrez le Projet Huellas", image: kidsCare, services: [
    { id: "akura-kids", title: "Akura Kids", image: kidsCare, alt: "Akura Kids — un accompagnement délicat pour les enfants", gallery: [
      { image: kidsSpace, alt: "Espace Akura Kids — un coin aménagé pour les enfants" },
    ] },
  ] },
  { slug: "akura-formations", name: "Akura Formations", tagline: "Des connaissances qui deviennent une pratique",
    description: "Partager les connaissances est aussi une façon de prendre soin. Akura Formations réunit des propositions de cours, d’ateliers et de workshops qui relient expérience professionnelle, apprentissage et développement.",
    ctaLabel: "Découvrez nos formations", image: salaSpa, services: [] },
];

export const findSpecialty = (slug: string) => specialties.find((s) => s.slug === slug);
