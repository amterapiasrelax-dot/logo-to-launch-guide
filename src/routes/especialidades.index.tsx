import { createFileRoute, Link } from "@tanstack/react-router";
import careHands from "@/assets/care-hands.jpg";
import { useI18n } from "@/lib/i18n";
import { specialties } from "@/lib/specialties";
import { ContactBlock, PageHero, Reveal, SpecIcon } from "@/components/site/ui";

export const Route = createFileRoute("/especialidades/")({
  head: () => ({
    meta: [
      { title: "Spécialités — AKURA" },
      { name: "description", content: "Découvrez les neuf spécialités AKURA d’esthétique et de bien-être." },
      { property: "og:title", content: "Spécialités — AKURA" },
      { property: "og:description", content: "Neuf univers de soins AKURA." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Especialidades,
});

function Especialidades() {
  const { t } = useI18n();
  return (
    <>
      <PageHero eyebrow={t.specEyebrow} title={t.specTitle} image={careHands} />
      <section className="px-6 pb-28">
        <div className="mx-auto max-w-7xl divide-y divide-champagne border-y border-champagne">
          {specialties.map((s, i) => (
            <Reveal key={s.slug} delay={i * 40}>
              <Link to="/especialidades/$slug" params={{ slug: s.slug }} className="group grid items-center gap-6 py-8 md:grid-cols-[4rem_1fr_10rem_auto]">
                <span className="text-sm font-bold tracking-widest text-sand">{String(i + 1).padStart(2, "0")}</span>
                <span className="flex items-center gap-5 text-2xl font-light md:text-4xl"><SpecIcon i={i} />{s.name}</span>
                <img src={s.image} alt="" loading="lazy" className="hidden h-20 w-40 rounded-full object-cover opacity-0 transition-all duration-700 group-hover:opacity-100 md:block" />
                <span className="text-xs font-bold tracking-[0.2em] uppercase">{t.discover} →</span>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
      <ContactBlock />
    </>
  );
}
