import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useI18n } from "@/lib/i18n";
import { allServices, findService, WHATSAPP_URL } from "@/lib/specialties";
import { ContactBlock, Eyebrow, Parallax, Reveal } from "@/components/site/ui";

export const Route = createFileRoute("/prestations/$id")({
  staticData: { sitemap: true },
  loader: ({ params }) => {
    const found = findService(params.id);
    if (!found) throw notFound();
    return { title: found.service.title };
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.title} — AKURA` },
          { name: "description", content: `${loaderData.title}: une prestation AKURA de bien-être et de relaxation.` },
          { property: "og:title", content: `${loaderData.title} — AKURA` },
          { property: "og:description", content: `Découvrez ${loaderData.title}, une prestation AKURA.` },
          { property: "og:type", content: "website" },
          { name: "twitter:card", content: "summary_large_image" },
        ]
      : [{ title: "Prestation — AKURA" }, { name: "robots", content: "noindex" }],
  }),
  component: Prestation,
});

function Prestation() {
  const { id } = Route.useParams();
  const { t } = useI18n();
  const found = findService(id);
  if (!found) throw notFound();
  const { service, specialty } = found;
  const others = allServices.filter(({ service: o }) => o.id !== service.id);
  return (
    <>
      <section className="px-6 pb-20 pt-36 md:pt-44">
        <div className={`mx-auto grid max-w-7xl items-center gap-12 ${service.image ? "md:grid-cols-2" : ""}`}>
          <Reveal className={service.image ? "" : "mx-auto max-w-3xl text-center"}>
            <div className={service.image ? "" : "flex justify-center"}><Eyebrow>{specialty.name}</Eyebrow></div>
            <h1 className="display mt-8 text-4xl md:text-6xl">{service.title}</h1>
            {service.duration && (
              <p className="mt-8 inline-flex items-center gap-2 rounded-full border border-champagne px-5 py-2 text-sm font-bold tracking-[0.14em] uppercase">
                {t.durationLabel} · {service.duration}
              </p>
            )}
            <div className="gold-line my-8 w-40" />
            {service.text && <p className="max-w-xl text-lg leading-relaxed">{service.text}</p>}
            {service.benefits && service.benefits.length > 0 && (
              <div className="mt-10">
                <h2 className="eyebrow">{t.benefitsLabel}</h2>
                <ul className="mt-5 space-y-3">
                  {service.benefits.map((benefit) => (
                    <li key={benefit} className="flex items-start gap-3 text-base leading-relaxed">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" aria-hidden />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            )}
            <div className={`mt-10 flex flex-wrap items-center gap-4 ${service.image ? "" : "justify-center"}`}>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="akura-btn group inline-flex items-center gap-3 px-7 py-3.5 text-sm font-bold tracking-[0.16em] uppercase">
                {t.reserve}
                <span aria-hidden className="transition-transform duration-500 group-hover:translate-x-1">→</span>
              </a>
              <Link to="/prestations" className="border-b border-gold pb-1 text-sm font-bold tracking-[0.2em] uppercase">
                {t.allPrestations}
              </Link>
            </div>
          </Reveal>
          {service.image && (
            <Reveal delay={150} direction="right" className="overflow-hidden rounded-[2rem] shadow-[var(--shadow-soft)]">
              <Parallax speed={0.05}>
                <img src={service.image} alt={service.alt} loading="lazy" className="aspect-[4/3] w-full scale-105 object-cover object-center" />
              </Parallax>
            </Reveal>
          )}
        </div>
        {service.gallery && (
          <div className={`mx-auto mt-10 grid gap-6 ${service.gallery?.length === 1 ? "max-w-3xl" : "max-w-7xl md:grid-cols-2"}`}>
            {service.gallery.map((photo, g) => (
              <Reveal key={photo.image} direction={g % 2 === 0 ? "glow" : "up"} delay={g * 120}>
                <img src={photo.image} alt={photo.alt} loading="lazy" className="aspect-[4/3] w-full rounded-[2rem] object-cover object-center shadow-[var(--shadow-soft)]" />
              </Reveal>
            ))}
          </div>
        )}
      </section>

      <section className="px-6 py-16">
        <div className="mx-auto max-w-7xl">
          <Eyebrow>{t.prestationsEyebrow}</Eyebrow>
          <div className="mt-10 flex flex-wrap gap-3">
            {others.map(({ service: o }) => (
              <Link key={o.id} to="/prestations/$id" params={{ id: o.id }} className="rounded-full border border-champagne px-5 py-3 text-sm font-bold transition-colors hover:bg-champagne/50">
                {o.title}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <ContactBlock />
    </>
  );
}
