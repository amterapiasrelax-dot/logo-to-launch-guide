import spaRoom from "@/assets/spa-room.jpg";
import careHands from "@/assets/care-hands.jpg";
import stillLife from "@/assets/still-life.jpg";
import heroSpa from "@/assets/hero-spa.jpg";
import espacoAtendimento from "@/assets/espaco-atendimento.webp.asset.json";

export const WHATSAPP_URL = "https://wa.me/message/4ICX2I4F3MQCP1";

export type Specialty = { slug: string; name: string; image: string };

export const specialties: Specialty[] = [
  { slug: "akura-touch", name: "Akura Touch", image: spaRoom },
  { slug: "akura-estetica", name: "Akura Estética", image: careHands },
  { slug: "akura-pmu", name: "Akura PMU", image: stillLife },
  { slug: "akura-podologia-pro", name: "Akura Podologia PRO", image: heroSpa },
  { slug: "akura-therapy-ec", name: "Akura Therapy EC", image: spaRoom },
  { slug: "akura-homecare", name: "Akura Homecare", image: stillLife },
  { slug: "akura-corporate", name: "Akura Corporate", image: espacoAtendimento.url },
  { slug: "huellas-kids-teens", name: "Huellas Kids & Teens", image: careHands },
  { slug: "akura-formations", name: "Akura Formations", image: stillLife },
];

export const findSpecialty = (slug: string) => specialties.find((s) => s.slug === slug);
