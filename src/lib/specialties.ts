import homecare from "@/assets/homecare-soins-pieds.webp.asset.json";
import salaSpa from "@/assets/sala-spa-akura.png.asset.json";
import headSpa from "@/assets/head-spa.webp.asset.json";
import massageCible from "@/assets/massage-cible.webp.asset.json";
import { siteContent } from "@/lib/i18n";
import akuraTouchMassage from "@/assets/akura-touch-massage.webp.asset.json";
import podologiaPro from "@/assets/podologia-pro.webp.asset.json";
import podologiaAkura from "@/assets/podologia-akura.webp.asset.json";
import footBath from "@/assets/foot-spa-banho.webp.asset.json";
import footMassage from "@/assets/foot-spa-massagem.webp.asset.json";
import footFeet from "@/assets/foot-spa-pes.webp.asset.json";
import kidsCare from "@/assets/akura-kids-atendimento.webp.asset.json";
import kidsSpace from "@/assets/akura-kids-espaco.webp.asset.json";
import microblading from "@/assets/microblading-akura.webp.asset.json";
import esteticaFacial from "@/assets/estetica-facial-akura.webp.asset.json";
import esteticaCorporal from "@/assets/estetica-corporal-akura.webp.asset.json";
import massagemRelaxante from "@/assets/massagem-relaxante-corporate.webp.asset.json";
import laserterapia from "@/assets/laserterapia-akura.webp.asset.json";

export const WHATSAPP_URL = "https://wa.me/message/4ICX2I4F3MQCP1";

export type Service = { id: string; title: string; text?: string; image: string; alt: string; gallery?: { image: string; alt: string }[] };
export type Specialty = { slug: string; name: string; tagline: string; description: string; ctaLabel: string; image: string; services: Service[] };

export const specialties: Specialty[] = [
  { slug: "akura-touch", name: "Akura Touch", tagline: "Massages et expériences de relaxation",
    description: "Une invitation à ralentir et à renouer avec votre bien-être. Akura Touch réunit des expériences sensorielles, des massages et des rituels de relaxation qui privilégient le confort, le toucher et l’attention individuelle.",
    ctaLabel: "Découvrez nos expériences", image: akuraTouchMassage.url, services: [
    { id: "japanese-head-spa", title: siteContent.headSpaTitle, text: siteContent.headSpaText, image: headSpa.url, alt: "Japanese Head Spa AKURA" },
    { id: "massagem-localizada", title: siteContent.massageTitle, text: siteContent.massageText, image: massageCible.url, alt: "Massage ciblé AKURA" },
  ] },
  { slug: "akura-estetica", name: "Akura Esthétique", tagline: "Soins esthétiques du visage et du corps",
    description: "Le soin esthétique comme une expérience d’attention et de valorisation de soi. Chaque proposition est présentée avec sensibilité, dans le respect des particularités et des besoins de chacun.",
    ctaLabel: "Découvrez nos soins", image: esteticaFacial.url, services: [
    { id: "estetica-facial", title: "Soins du visage", image: esteticaFacial.url, alt: "Soins du visage AKURA — soin délicat du visage" },
    { id: "estetica-corporal", title: "Soins du corps", image: esteticaCorporal.url, alt: "Soins du corps AKURA — soin du corps" },
  ] },
  { slug: "akura-pmu", name: "Akura PMU", tagline: "Micropigmentation professionnelle",
    description: "Précision, délicatesse et savoir-faire technique dans un univers dédié à la micropigmentation. Akura PMU valorise l’individualité et la présentation responsable de chaque prestation.",
    ctaLabel: "Découvrez la spécialité", image: microblading.url, services: [
    { id: "microblading", title: "Microblading", image: microblading.url, alt: "Microblading AKURA — mise en valeur des sourcils" },
  ] },
  { slug: "akura-podologia-pro", name: "Akura Podologie PRO", tagline: "Une expertise dédiée au soin des pieds",
    description: "Uma trajetória construída sobre formação profissional e experiência em Podologia. A Akura Podologie PRO reúne conhecimentos em Podopediatria, Podologia Esportiva, Pé Diabético e Feridas, valorizando a responsabilidade e o cuidado especializado.",
    ctaLabel: "Explorez la Podologie PRO", image: podologiaPro.url, services: [
    { id: "podologia", title: "Podologie", image: podologiaAkura.url, alt: "Podologie AKURA — soin professionnel des pieds" },
  ] },
  { slug: "akura-therapy-ec", name: "Akura Therapy EC", tagline: "Thérapie laser et photobiomodulation",
    description: "Le savoir-faire et la technologie réunis dans un univers dédié à la thérapie laser et à la photobiomodulation. Akura Therapy EC présente des expériences professionnelles dans différents contextes, avec des applications et une disponibilité selon la localité.",
    ctaLabel: "Découvrez Therapy EC", image: laserterapia.url, services: [
    { id: "laserterapia", title: "Thérapie laser", image: laserterapia.url, alt: "Thérapie laser AKURA Therapy EC — soin au laser du dos" },
  ] },
  { slug: "akura-homecare", name: "Akura Homecare", tagline: "Expériences et soins à domicile",
    description: "Une approche qui vous apporte attention, confort et soins à domicile. Akura Homecare propose des possibilités de soins à domicile, dans le respect des besoins individuels et de la disponibilité dans chaque région.",
    ctaLabel: "Renseignez-vous sur les disponibilités", image: homecare.url, services: [
    { id: "soins-pieds-domicile", title: "Soins des pieds à domicile", image: homecare.url, alt: "Akura Homecare — soin professionnel des pieds à domicile" },
  ] },
  { slug: "akura-corporate", name: "Akura Corporate", tagline: "Bien-être pour les entreprises et les événements",
    description: "Des expériences de bien-être pensées pour les organisations qui placent les personnes au cœur de leurs priorités. Akura Corporate développe des propositions personnalisées pour les entreprises, les hôtels, les équipes et les événements, créant des moments privilégiés de soin et de douceur.",
    ctaLabel: "Demandez une proposition", image: massagemRelaxante.url, services: [
    { id: "massagem-relaxante", title: "Massage relaxant", image: massagemRelaxante.url, alt: "Massage relaxant AKURA Corporate — massage express dans un cadre moderne" },
    { id: "foot-spa", title: "Foot Spa", image: footBath.url, alt: "Foot Spa — bain de pieds avec des pierres dans une bassine dorée", gallery: [
      { image: footMassage.url, alt: "Foot Spa — massage des pieds" },
      { image: footFeet.url, alt: "Foot Spa — soin des pieds" },
    ] },
  ] },
  { slug: "huellas-kids-teens", name: "Huellas Kids & Teens", tagline: "Éducation, mouvement et soin dès l’enfance",
    description: "Un univers dédié à la découverte, à l’apprentissage et aux soins préventifs. Le Projet Huellas propose aux enfants et aux adolescents des expériences éducatives et sensorielles à travers des activités ludiques, le mouvement et le soin de soi.",
    ctaLabel: "Découvrez le Projet Huellas", image: kidsCare.url, services: [
    { id: "akura-kids", title: "Akura Kids", image: kidsCare.url, alt: "Akura Kids — un accompagnement délicat pour les enfants", gallery: [
      { image: kidsSpace.url, alt: "Espace Akura Kids — un coin aménagé pour les enfants" },
    ] },
  ] },
  { slug: "akura-formations", name: "Akura Formations", tagline: "Des connaissances qui deviennent une pratique",
    description: "Partager les connaissances est aussi une façon de prendre soin. Akura Formations réunit des propositions de cours, d’ateliers et de workshops qui relient expérience professionnelle, apprentissage et développement.",
    ctaLabel: "Découvrez nos formations", image: salaSpa.url, services: [] },
];

export const findSpecialty = (slug: string) => specialties.find((s) => s.slug === slug);
