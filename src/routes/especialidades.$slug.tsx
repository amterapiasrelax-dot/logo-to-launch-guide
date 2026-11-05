import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import stillLife from "@/assets/still-life.jpg";
import headSpa from "@/assets/head-spa.webp.asset.json";
import massageCible from "@/assets/massage-cible.webp.asset.json";
import { useI18n } from "@/lib/i18n";
import { findSpecialty, specialties } from "@/lib/specialties";
import { ContactBlock, Eyebrow, PageHero, Reveal, SpecIcon, WaButton } from "@/components/site/ui";

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
  const s = findSpecialty(slug)!;
  const idx = specialties.indexOf(s);
  const flip = idx % 2 === 1;
  return (
    <>
      <PageHero eyebrow={t.specIntro} title={s.name} text={t.specPlaceholder} image={s.image} />
      <section className="bg-ivory px-6 py-28">
        <div className={`mx-auto grid max-w-7xl items-center gap-16 md:grid-cols-2 ${flip ? "md:[&>*:first-child]:order-2" : ""}`}>
          <Reveal><img src={stillLife} alt="" loading="lazy" className="aspect-[4/3] w-full rounded-[2rem] rounded-bl-[8rem] object-cover" /></Reveal>
          <Reveal delay={150}>
            <Eyebrow>{t.aboutService}</Eyebrow>
            <h2 className="display mt-8 text-4xl md:text-5xl">{s.name}</h2>
            <p className="mt-8 rounded-2xl border border-dashed border-sand p-6 text-lg leading-relaxed">{t.servicePending}</p>
            <div className="mt-10"><WaButton /></div>
          </Reveal>
        </div>
      </section>
      {slug === "akura-touch" &&
        (
          [
            { img: headSpa, alt: "Japanese Head Spa AKURA", eyebrow: "Akura Touch", title: t.headSpaTitle, text: t.headSpaText, rev: false },
            { img: massageCible, alt: "Massage ciblé AKURA", eyebrow: "Akura Touch", title: t.massageTitle, text: t.massageText, rev: true },
          ]
        ).map((x, k) => (
          <section key={k} className="px-6 py-24">
            <div className={`mx-auto grid max-w-7xl items-center gap-16 md:grid-cols-2 ${(flip ? !x.rev : x.rev) ? "md:[&>*:first-child]:order-2" : ""}`}>
              <Reveal>
                <img src={x.img.url} alt={x.alt} loading="lazy" className="aspect-[4/5] w-full rounded-[2rem] rounded-bl-[8rem] object-cover shadow-[var(--shadow-soft)]" />
              </Reveal>
              <Reveal delay={150}>
                <Eyebrow>{x.eyebrow}</Eyebrow>
                <h2 className="display mt-8 text-4xl md:text-5xl">{x.title}</h2>
                <div className="gold-line my-10 w-40" />
                <p className="max-w-lg text-lg leading-relaxed">{x.text}</p>
                <div className="mt-10"><WaButton /></div>
              </Reveal>
            </div>
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
