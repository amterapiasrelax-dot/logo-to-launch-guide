import { createFileRoute } from "@tanstack/react-router";
const realSpace = "/images/espaco-real-akura.png";
const salaSpa = "/images/sala-spa-akura.png";
import { useI18n } from "@/lib/i18n";
import { ContactBlock, Eyebrow, PageHero, Reveal } from "@/components/site/ui";

export const Route = createFileRoute("/sobre")({
  staticData: { sitemap: true },
  head: () => ({
    meta: [
      { title: "À propos d’AKURA — Philosophie et accompagnement personnalisé" },
      { name: "description", content: "Découvrez l’identité et la philosophie de soin d’AKURA." },
      { property: "og:title", content: "À propos d’AKURA" },
      { property: "og:description", content: "Identité, philosophie et accompagnement personnalisé." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Sobre,
});

function Sobre() {
  const { t } = useI18n();
  return (
    <>
      <PageHero eyebrow={t.aboutEyebrow} title={t.aboutTitle} text={t.aboutText} image={realSpace} />
      <section className="bg-ivory px-6 py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-16 md:grid-cols-2">
          <Reveal>
            <Eyebrow>{t.persEyebrow}</Eyebrow>
            <h2 className="display mt-8 text-4xl md:text-5xl">{t.persTitle}</h2>
            <p className="mt-8 text-lg leading-relaxed">{t.persText}</p>
          </Reveal>
          <Reveal delay={150}><img src={salaSpa} alt="Salle de spa AKURA" loading="lazy" className="aspect-[3/2] w-full rounded-[2rem] rounded-tr-[8rem] object-cover object-center" /></Reveal>
        </div>
      </section>
      <ContactBlock />
    </>
  );
}
