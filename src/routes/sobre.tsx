import { createFileRoute } from "@tanstack/react-router";
import realSpace from "@/assets/espaco-real-akura.png.asset.json";
import salaSpa from "@/assets/sala-spa-akura.png.asset.json";
import { useI18n } from "@/lib/i18n";
import { ContactBlock, Eyebrow, PageHero, Reveal } from "@/components/site/ui";

export const Route = createFileRoute("/sobre")({
  head: () => ({
    meta: [
      { title: "Sobre a AKURA — Filosofia e atendimento personalizado" },
      { name: "description", content: "Conheça a identidade e a filosofia de cuidado da AKURA." },
      { property: "og:title", content: "Sobre a AKURA" },
      { property: "og:description", content: "Identidade, filosofia e atendimento personalizado." },
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
      <PageHero eyebrow={t.aboutEyebrow} title={t.aboutTitle} text={t.aboutText} image={realSpace.url} />
      <section className="bg-ivory px-6 py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-16 md:grid-cols-2">
          <Reveal>
            <Eyebrow>{t.persEyebrow}</Eyebrow>
            <h2 className="display mt-8 text-4xl md:text-5xl">{t.persTitle}</h2>
            <p className="mt-8 text-lg leading-relaxed">{t.persText}</p>
          </Reveal>
          <Reveal delay={150}><img src={salaSpa.url} alt="Sala de spa AKURA" loading="lazy" className="aspect-[3/2] w-full rounded-[2rem] rounded-tr-[8rem] object-cover" /></Reveal>
        </div>
      </section>
      <ContactBlock />
    </>
  );
}
