import realSpace from "@/assets/espaco-real-akura.png.asset.json";
import careHands from "@/assets/care-hands.jpg";
import stillLife from "@/assets/still-life.jpg";
import headSpa from "@/assets/head-spa.webp.asset.json";
import massageCible from "@/assets/massage-cible.webp.asset.json";
import { siteContent } from "@/lib/i18n";
import akuraTouchMassage from "@/assets/akura-touch-massage.webp.asset.json";
import podologiaPro from "@/assets/podologia-pro.webp.asset.json";
import footBath from "@/assets/foot-spa-banho.webp.asset.json";
import footMassage from "@/assets/foot-spa-massagem.webp.asset.json";
import footFeet from "@/assets/foot-spa-pes.webp.asset.json";

export const WHATSAPP_URL = "https://wa.me/message/4ICX2I4F3MQCP1";

export type Service = { id: string; title: string; text?: string; image: string; alt: string; gallery?: { image: string; alt: string }[] };
export type Specialty = { slug: string; name: string; image: string; services: Service[] };

export const specialties: Specialty[] = [
  { slug: "akura-touch", name: "Akura Touch", image: akuraTouchMassage.url, services: [
    { id: "japanese-head-spa", title: siteContent.headSpaTitle, text: siteContent.headSpaText, image: headSpa.url, alt: "Japanese Head Spa AKURA" },
    { id: "massagem-localizada", title: siteContent.massageTitle, text: siteContent.massageText, image: massageCible.url, alt: "Massagem localizada AKURA" },
  ] },
  { slug: "akura-estetica", name: "Akura Estética", image: careHands, services: [] },
  { slug: "akura-pmu", name: "Akura PMU", image: stillLife, services: [] },
  { slug: "akura-podologia-pro", name: "Akura Podologia PRO", image: podologiaPro.url, services: [] },
  { slug: "akura-therapy-ec", name: "Akura Therapy EC", image: realSpace.url, services: [] },
  { slug: "akura-homecare", name: "Akura Homecare", image: stillLife, services: [] },
  { slug: "akura-corporate", name: "Akura Corporate", image: realSpace.url, services: [
    { id: "foot-spa", title: "Foot Spa", image: footBath.url, alt: "Foot Spa — banho dos pés com pedras em bacia dourada", gallery: [
      { image: footMassage.url, alt: "Foot Spa — massagem dos pés" },
      { image: footFeet.url, alt: "Foot Spa — cuidado dos pés" },
    ] },
  ] },
  { slug: "huellas-kids-teens", name: "Huellas Kids & Teens", image: careHands, services: [] },
  { slug: "akura-formations", name: "Akura Formations", image: stillLife, services: [] },
];

export const findSpecialty = (slug: string) => specialties.find((s) => s.slug === slug);
