import { createFileRoute } from "@tanstack/react-router";
import heroSpa from "@/assets/hero-spa.jpg";
import { useI18n } from "@/lib/i18n";
import { ContactBlock, PageHero, Reveal } from "@/components/site/ui";

export const Route = createFileRoute("/internacional")({
  head: () => ({
    meta: [
      { title: "Presença Internacional — AKURA" },
      { name: "description", content: "AKURA: França, Suíça, Espanha e Brasil." },
      { property: "og:title", content: "Presença Internacional — AKURA" },
      { property: "og:description", content: "França · Suíça · Espanha · Brasil" },
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
      <PageHero eyebrow={t.intlEyebrow} title={t.countries.join(" · ")} image={heroSpa} />
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
