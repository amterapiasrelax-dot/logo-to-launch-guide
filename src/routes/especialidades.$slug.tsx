import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import salaSpa from "@/assets/sala-spa-akura.png.asset.json";
import { useI18n } from "@/lib/i18n";
import { findSpecialty, specialties } from "@/lib/specialties";
import { ContactBlock, Eyebrow, PageHero, Parallax, Reveal, SpecIcon, WaButton } from "@/components/site/ui";

export const Route = createFileRoute("/especialidades/$slug")({
  loader: ({ params }) => {
    const s = findSpecialty(params.slug);
    if (!s) throw notFound();
    return { name: s.name };
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.name} — AKURA` },
          { name: "description", content: `${loaderData.name}: uma especialidade AKURA de atendimento personalizado.` },
          { property: "og:title", content: `${loaderData.name} — AKURA` },
          { property: "og:description", content: `Conheça ${loaderData.name}, especialidade AKURA.` },
          { property: "og:type", content: "website" },
          { name: "twitter:card", content: "summary_large_image" },
        ]
      : [{ title: "Especialidade — AKURA" }, { name: "robots", content: "noindex" }],
  }),
  component: Specialty,
});

function Specialty() {
  const { slug } = Route.useParams();
  const { t } = useI18n();
  const s = findSpecialty(slug);
  if (!s) throw notFound();
  const idx = specialties.indexOf(s);
  const flip = idx % 2 === 1;
  return (
    <>
      <PageHero eyebrow={t.specIntro} title={s.name} text={t.specPlaceholder} image={s.image} />
      {s.services.length === 0 && <section className="bg-ivory px-6 py-28">
        <div className={`mx-auto grid max-w-7xl items-center gap-16 md:grid-cols-2 ${flip ? "md:[&>*:first-child]:order-2" : ""}`}>
          <Reveal direction={flip ? "right" : "left"} className="overflow-hidden rounded-[2rem] rounded-bl-[8rem]"><Parallax speed={0.06}><img src={salaSpa.url} alt="Sala de spa AKURA" loading="lazy" className="aspect-[4/3] w-full scale-110 object-cover" /></Parallax></Reveal>
          <Reveal delay={150} direction={flip ? "left" : "right"}>
            <Eyebrow>{t.aboutService}</Eyebrow>
            <h2 className="display mt-8 text-4xl md:text-5xl">{s.name}</h2>
            <p className="mt-8 rounded-2xl border border-dashed border-sand p-6 text-lg leading-relaxed">{t.servicePending}</p>
            <div className="mt-10"><WaButton /></div>
          </Reveal>
        </div>
      </section>}
      {s.services.map((x, k) => (
          <section key={x.id} id={x.id} className="px-6 py-24">
            <div className={`mx-auto grid max-w-7xl items-center gap-16 md:grid-cols-2 ${(flip ? k % 2 === 0 : k % 2 === 1) ? "md:[&>*:first-child]:order-2" : ""}`}>
              <Reveal direction={(flip ? k % 2 === 0 : k % 2 === 1) ? "right" : "left"} className="overflow-hidden rounded-[2rem] rounded-bl-[8rem] shadow-[var(--shadow-soft)]">
                <Parallax speed={0.06}>
                  <img src={x.image} alt={x.alt} loading="lazy" className={`${x.gallery ? "aspect-video" : "aspect-[4/5]"} w-full scale-110 object-cover`} />
                </Parallax>
              </Reveal>
              <Reveal delay={150} direction={(flip ? k % 2 === 0 : k % 2 === 1) ? "left" : "right"}>
                <Eyebrow>{s.name}</Eyebrow>
                <h2 className="display mt-8 text-4xl md:text-5xl">{x.title}</h2>
                <div className="gold-line my-10 w-40" />
                {x.text && <p className="max-w-lg text-lg leading-relaxed">{x.text}</p>}
                <div className="mt-10"><WaButton /></div>
              </Reveal>
            </div>
            {x.gallery && <div className="mx-auto mt-10 grid max-w-7xl gap-6 md:grid-cols-2">
              {x.gallery.map((photo, g) => <Reveal key={photo.image} direction={g % 2 === 0 ? "glow" : "up"} delay={g * 120}>
                <img src={photo.image} alt={photo.alt} loading="lazy" className="aspect-[4/3] w-full rounded-[2rem] object-cover shadow-[var(--shadow-soft)]" />
              </Reveal>)}
            </div>}
          </section>
        ))}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <Eyebrow>{t.others}</Eyebrow>
          <div className="mt-10 flex flex-wrap gap-3">
            {specialties.filter((o) => o.slug !== slug).map((o) => (
              <Link key={o.slug} to="/especialidades/$slug" params={{ slug: o.slug }} className="flex items-center gap-3 rounded-full border border-champagne px-5 py-3 text-sm font-bold transition-colors hover:bg-champagne/50">
                <SpecIcon i={specialties.indexOf(o)} />{o.name}
              </Link>
            ))}
          </div>
        </div>
      </section>
      <ContactBlock />
    </>
  );
}
