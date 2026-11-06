import { createFileRoute } from "@tanstack/react-router";
const realSpace = "/images/espaco-real-akura.png";
import { useI18n } from "@/lib/i18n";
import { ContactBlock, PageHero, Reveal } from "@/components/site/ui";

export const Route = createFileRoute("/internacional")({
  staticData: { sitemap: true },
  head: () => ({
    meta: [
      { title: "Présence internationale — AKURA" },
      { name: "description", content: "AKURA : France, Suisse, Espagne et Brésil." },
      { property: "og:title", content: "Présence internationale — AKURA" },
      { property: "og:description", content: "France · Suisse · Espagne · Brésil" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Intl,
});

function Intl() {
  const { t } = useI18n();
  return (
    <>
      <PageHero eyebrow={t.intlEyebrow} title={t.countries.join(" · ")} image={realSpace} />
      <section className="px-6 pb-28">
        <div className="mx-auto grid max-w-7xl border-y border-champagne sm:grid-cols-2 lg:grid-cols-4">
          {t.countries.map((c, i) => (
            <Reveal key={c} delay={i * 100} className="border-champagne px-6 py-16 text-center sm:border-l first:border-l-0">
              <span className="text-sm font-bold tracking-widest text-sand">{String(i + 1).padStart(2, "0")}</span>
              <p className="mt-4 text-4xl font-light">{c}</p>
            </Reveal>
          ))}
        </div>
      </section>
      <ContactBlock />
    </>
  );
}
