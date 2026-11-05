import careHands from "@/assets/care-hands.jpg";
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

export const WHATSAPP_URL = "https://wa.me/message/4ICX2I4F3MQCP1";

export type Service = { id: string; title: string; text?: string; image: string; alt: string; gallery?: { image: string; alt: string }[] };
export type Specialty = { slug: string; name: string; tagline: string; description: string; ctaLabel: string; image: string; services: Service[] };

export const specialties: Specialty[] = [
  { slug: "akura-touch", name: "Akura Touch", tagline: "Massagens e experiências de relaxamento",
    description: "Um convite para desacelerar e reconectar-se com o seu bem-estar. A Akura Touch reúne experiências sensoriais, massagens e rituais de relaxamento que valorizam o conforto, o toque e a atenção individual.",
    ctaLabel: "Descubra nossas experiências", image: akuraTouchMassage.url, services: [
    { id: "japanese-head-spa", title: siteContent.headSpaTitle, text: siteContent.headSpaText, image: headSpa.url, alt: "Japanese Head Spa AKURA" },
    { id: "massagem-localizada", title: siteContent.massageTitle, text: siteContent.massageText, image: massageCible.url, alt: "Massagem localizada AKURA" },
  ] },
  { slug: "akura-estetica", name: "Akura Estética", tagline: "Estética facial e corporal",
    description: "O cuidado estético como uma experiência de atenção e valorização pessoal. Cada proposta é apresentada com sensibilidade, respeitando as particularidades e necessidades de cada pessoa.",
    ctaLabel: "Conheça nossos cuidados", image: esteticaFacial.url, services: [
    { id: "estetica-facial", title: "Estética facial", image: esteticaFacial.url, alt: "Estética facial AKURA — cuidado delicado do rosto" },
    { id: "estetica-corporal", title: "Estética corporal", image: esteticaCorporal.url, alt: "Estética corporal AKURA — cuidado do corpo" },
  ] },
  { slug: "akura-pmu", name: "Akura PMU", tagline: "Micropigmentação profissional",
    description: "Precisão, delicadeza e conhecimento técnico em uma área dedicada à micropigmentação. A Akura PMU valoriza a individualidade e a apresentação responsável de cada procedimento.",
    ctaLabel: "Conheça a especialidade", image: microblading.url, services: [
    { id: "microblading", title: "Microblading", image: microblading.url, alt: "Microblading AKURA — sobrancelhas em destaque" },
  ] },
  { slug: "akura-podologia-pro", name: "Akura Podologia PRO", tagline: "Conhecimento especializado no cuidado dos pés",
    description: "Uma trajetória construída sobre formação profissional e experiência em Podologia. A Akura Podologia PRO reúne conhecimentos em Podopediatria, Podologia Esportiva, Pé Diabético e Feridas, valorizando a responsabilidade e o cuidado especializado.",
    ctaLabel: "Explore a Podologia PRO", image: podologiaPro.url, services: [
    { id: "podologia", title: "Podologia", image: podologiaAkura.url, alt: "Podologia AKURA — cuidado profissional dos pés" },
  ] },
  { slug: "akura-therapy-ec", name: "Akura Therapy EC", tagline: "Laserterapia e fotobiomodulação",
    description: "Conhecimento e tecnologia reunidos em uma área dedicada à laserterapia e à fotobiomodulação. A Akura Therapy EC apresenta experiências profissionais em diferentes contextos, com aplicações e disponibilidade conforme a localidade.",
    ctaLabel: "Conheça a Therapy EC", image: salaSpa.url, services: [] },
  { slug: "akura-homecare", name: "Akura Homecare", tagline: "Experiências e cuidados em domicílio",
    description: "A proposta de levar atenção, conforto e cuidado até você. A Akura Homecare reúne possibilidades de atendimento domiciliar, respeitando as necessidades individuais e a disponibilidade de cada região.",
    ctaLabel: "Consulte a disponibilidade", image: salaSpa.url, services: [] },
  { slug: "akura-corporate", name: "Akura Corporate", tagline: "Bem-estar para empresas e eventos",
    description: "Experiências de bem-estar pensadas para organizações que valorizam as pessoas. A Akura Corporate desenvolve propostas personalizadas para empresas, hotéis, equipes e eventos, criando momentos especiais de cuidado e acolhimento.",
    ctaLabel: "Solicite uma proposta", image: massagemRelaxante.url, services: [
    { id: "massagem-relaxante", title: "Massagem relaxante", image: massagemRelaxante.url, alt: "Massagem relaxante AKURA Corporate — quick massage em ambiente moderno" },
    { id: "foot-spa", title: "Foot Spa", image: footBath.url, alt: "Foot Spa — banho dos pés com pedras em bacia dourada", gallery: [
      { image: footMassage.url, alt: "Foot Spa — massagem dos pés" },
      { image: footFeet.url, alt: "Foot Spa — cuidado dos pés" },
    ] },
  ] },
  { slug: "huellas-kids-teens", name: "Huellas Kids & Teens", tagline: "Educação, movimento e cuidado desde a infância",
    description: "Um universo dedicado à descoberta, ao aprendizado e ao cuidado preventivo. O Projeto Huellas aproxima crianças e adolescentes de experiências educativas e sensoriais por meio de atividades lúdicas, movimento e autocuidado.",
    ctaLabel: "Descubra o Projeto Huellas", image: kidsCare.url, services: [
    { id: "akura-kids", title: "Akura Kids", image: kidsCare.url, alt: "Akura Kids — atendimento delicado para crianças", gallery: [
      { image: kidsSpace.url, alt: "Espaço Akura Kids — cantinho preparado para as crianças" },
    ] },
  ] },
  { slug: "akura-formations", name: "Akura Formations", tagline: "Conhecimento que se transforma em prática",
    description: "Compartilhar conhecimento é também uma forma de cuidar. A Akura Formations reúne propostas de cursos, oficinas e workshops que conectam experiência profissional, aprendizado e desenvolvimento.",
    ctaLabel: "Conheça nossas formações", image: salaSpa.url, services: [] },
];

export const findSpecialty = (slug: string) => specialties.find((s) => s.slug === slug);
