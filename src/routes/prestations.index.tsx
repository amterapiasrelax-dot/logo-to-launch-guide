import { createFileRoute, Link } from "@tanstack/react-router";
import { useI18n } from "@/lib/i18n";
import { allServices } from "@/lib/specialties";
import { ContactBlock, Eyebrow, Reveal, WaButton } from "@/components/site/ui";

export const Route = createFileRoute("/prestations/")({
  staticData: { sitemap: true },
  head: () => ({
    meta: [
      { title: "Nos Prestations — AKURA" },
      { name: "description", content: "Découvrez le catalogue des prestations AKURA : massages, rituels de relaxation et soins de bien-être, avec leurs bienfaits et leur durée." },
      { property: "og:title", content: "Nos Prestations — AKURA" },
      { property: "og:description", content: "Un catalogue de soins délicats : massages, rituels et expériences de bien-être AKURA." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Prestations,
});

function Prestations() {
  const { t } = useI18n();
  return (
    <>
      <section className="px-6 pb-10 pt-36 md:pt-44">
        <Reveal direction="fade" className="mx-auto max-w-3xl text-center">
          <div className="flex justify-center"><Eyebrow>{t.prestationsEyebrow}</Eyebrow></div>
          <h1 className="display mt-8 text-5xl md:text-7xl">{t.prestationsTitle}</h1>
          <p className="mx-auto mt-8 max-w-xl text-lg leading-relaxed">{t.prestationsText}</p>
        </Reveal>
      </section>

      <section className="px-6 pb-24">
        <div className="mx-auto grid max-w-7xl gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {allServices.map(({ service, specialty }, k) => (
            <Reveal key={service.id} delay={(k % 3) * 120} className="flex flex-col overflow-hidden rounded-[2rem] border border-champagne bg-background shadow-[var(--shadow-soft)]">
              {service.image && (
                <Link to="/prestations/$id" params={{ id: service.id }} className="block overflow-hidden">
                  <img src={service.image} alt={service.alt} loading="lazy" className="aspect-[4/3] w-full object-cover object-center transition-transform duration-[1.5s] hover:scale-105" />
                </Link>
              )}
              <div className="flex flex-1 flex-col p-8">
                <p className="eyebrow">{specialty.name}</p>
                <h2 className="display mt-4 text-2xl leading-snug">{service.title}</h2>
                {service.duration && (
                  <p className="mt-4 inline-flex w-fit items-center gap-2 rounded-full border border-champagne px-4 py-1.5 text-xs font-bold tracking-[0.14em] uppercase">
                    {t.durationLabel} · {service.duration}
                  </p>
                )}
                {service.text && <p className="mt-5 text-sm leading-relaxed">{service.text}</p>}
                <div className="mt-auto flex flex-col gap-3 pt-8">
                  <Link to="/prestations/$id" params={{ id: service.id }} className="akura-btn inline-flex items-center justify-center gap-3 px-6 py-3 text-xs font-bold tracking-[0.16em] uppercase">
                    {t.discover}
                  </Link>
                  <WaButton className="px-6 py-3 text-xs" />
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <ContactBlock />
    </>
  );
}
