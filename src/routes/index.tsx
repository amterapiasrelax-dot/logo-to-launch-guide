import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import realSpace from "@/assets/espaco-real-akura.png.asset.json";
import careHands from "@/assets/care-hands.jpg";
import stillLife from "@/assets/still-life.jpg";
import { useI18n } from "@/lib/i18n";
import { specialties } from "@/lib/specialties";
import { ContactBlock, Eyebrow, Reveal, SpecIcon, WaButton } from "@/components/site/ui";
import { ProcedureCarousel } from "@/components/site/ProcedureCarousel";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "AKURA — Estética e bem-estar personalizados" },
      { name: "description", content: "Uma experiência de cuidado que vai além do essencial. Estética e bem-estar com atendimento personalizado." },
      { property: "og:title", content: "AKURA — Estética e bem-estar personalizados" },
      { property: "og:description", content: "Uma experiência de cuidado que vai além do essencial." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function useParallax(factor = 0.15) {
  const [y, setY] = useState(0);
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const on = () => setY(window.scrollY * factor);
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, [factor]);
  return y;
}

function Index() {
  const { t } = useI18n();
  const y = useParallax();

  return (
    <>
      {/* HERO */}
      <section className="akura-introduction">
        <img src={realSpace.url} alt="Espaço de atendimento AKURA" className="akura-introduction-photo" fetchPriority="high" />
        <div className="akura-introduction-content">
          <h1 className="display text-6xl md:text-8xl">AKURA</h1>
          <p className="mt-6 max-w-xl text-2xl font-light leading-snug md:text-3xl">{t.heroTitle}</p>
          <p className="mt-5 max-w-xl text-base leading-relaxed md:text-lg">{t.heroText}</p>
          <WaButton className="mt-8" />
        </div>
      </section>
      <div className="akura-procedures">
        <ProcedureCarousel />
      </div>

      {/* SOBRE */}
      <section className="bg-ivory px-6 py-28 md:py-36">
        <div className="mx-auto grid max-w-7xl items-center gap-16 md:grid-cols-2">
          <Reveal className="relative">
            <div className="overflow-hidden arch">
              <img src={realSpace.url} alt="Espaço real de atendimento AKURA" loading="lazy" width={768} height={1024} style={{ transform: `translateY(${-y * 0.2}px) scale(1.08)` }} className="aspect-[4/5] w-full object-cover" />
            </div>
          </Reveal>
          <Reveal delay={150}>
            <Eyebrow>{t.aboutEyebrow}</Eyebrow>
            <h2 className="display mt-8 text-4xl md:text-6xl">{t.aboutTitle}</h2>
            <div className="gold-line my-10 w-40" />
            <p className="max-w-lg text-lg leading-relaxed">{t.aboutText}</p>
            <Link to="/sobre" className="mt-10 inline-block border-b border-gold pb-1 text-sm font-bold tracking-[0.2em] uppercase">{t.nav.about} →</Link>
          </Reveal>
        </div>
      </section>

      {/* ESPECIALIDADES — editorial, varied proportions */}
      <section className="px-6 py-28 md:py-36">
        <div className="mx-auto max-w-7xl">
          <Reveal className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <div>
              <Eyebrow>{t.specEyebrow}</Eyebrow>
              <h2 className="display mt-8 text-4xl md:text-6xl">{t.specTitle}</h2>
            </div>
            <Link to="/especialidades" className="text-sm font-bold tracking-[0.2em] uppercase">{t.nav.all} →</Link>
          </Reveal>

          <div className="mt-16 grid gap-6 md:grid-cols-6">
            {/* Featured large */}
            <Reveal className="md:col-span-3 md:row-span-2">
              <SpecFeature i={0} tall />
            </Reveal>
            <Reveal delay={100} className="md:col-span-3">
              <SpecFeature i={1} img={careHands} />
            </Reveal>
            {specialties.slice(2, 4).map((s, k) => (
              <Reveal key={s.slug} delay={150 + k * 80} className="md:col-span-3 lg:col-span-3">
                <SpecRow i={k + 2} />
              </Reveal>
            ))}
          </div>

          <div className="mt-6 grid gap-6 md:grid-cols-3">
            {specialties.slice(4).map((s, k) => (
              <Reveal key={s.slug} delay={k * 80} className={k === 2 ? "md:row-span-1" : ""}>
                <SpecRow i={k + 4} soft={k % 2 === 1} />
              </Reveal>
            ))}
            <Reveal delay={400} className="flex items-center justify-center rounded-[2rem] border border-dashed border-sand p-10">
              <WaButton variant="outline" />
            </Reveal>
          </div>
        </div>
      </section>

      {/* PERSONALIZADO */}
      <section className="relative overflow-hidden bg-ivory py-28 md:py-40">
        <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 md:grid-cols-[1.2fr_0.8fr]">
          <Reveal className="relative">
            <img src={careHands} alt="Cuidado personalizado" loading="lazy" width={1200} height={1504} className="aspect-[5/4] w-full rounded-[2rem] rounded-br-[10rem] object-cover" />
          </Reveal>
          <Reveal delay={200} className="md:-ml-24 md:rounded-[2rem] md:bg-background md:p-14 md:shadow-[var(--shadow-soft)]">
            <Eyebrow>{t.persEyebrow}</Eyebrow>
            <h2 className="display mt-8 text-4xl md:text-5xl">{t.persTitle}</h2>
            <p className="mt-8 text-lg leading-relaxed">{t.persText}</p>
          </Reveal>
        </div>
      </section>

      {/* EXPERIÊNCIA */}
      <section className="px-6 py-28 md:py-36">
        <div className="mx-auto max-w-7xl">
          <Reveal className="mx-auto max-w-2xl text-center">
            <div className="flex justify-center"><Eyebrow>{t.expEyebrow}</Eyebrow></div>
            <h2 className="display mt-8 text-4xl md:text-6xl">{t.expTitle}</h2>
          </Reveal>
          <div className="mt-16 grid gap-6 md:grid-cols-12">
            <Reveal className="md:col-span-7"><img src={stillLife} alt="Detalhes AKURA" loading="lazy" className="aspect-[3/2] w-full rounded-[2rem] object-cover transition-transform duration-[1.5s] hover:scale-[1.02]" /></Reveal>
            <Reveal delay={150} className="md:col-span-5 md:mt-24"><img src={realSpace.url} alt="Espaço real de atendimento AKURA" loading="lazy" className="aspect-[4/5] w-full arch object-cover" /></Reveal>
          </div>
        </div>
      </section>

      {/* INTERNACIONAL */}
      <section className="border-y border-champagne px-6 py-24">
        <div className="mx-auto max-w-6xl text-center">
          <div className="flex justify-center"><Eyebrow>{t.intlEyebrow}</Eyebrow></div>
          <p className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-3xl font-light md:text-5xl">
            {t.countries.map((c, i) => (
              <span key={c} className="flex items-center gap-8">
                {c}
                {i < t.countries.length - 1 && <span className="h-8 w-px bg-sand" aria-hidden />}
              </span>
            ))}
          </p>
        </div>
      </section>

      <ContactBlock />
    </>
  );
}

function SpecFeature({ i, img, tall }: { i: number; img?: string; tall?: boolean }) {
  const { t } = useI18n();
  const s = specialties[i];
  if (!s) return null;
  return (
    <Link to="/especialidades/$slug" params={{ slug: s.slug }} className="group relative block h-full overflow-hidden rounded-[2rem]">
      <img src={img ?? s.image} alt={s.name} loading="lazy" className={`w-full object-cover transition-transform duration-[1.4s] ease-[var(--ease-soft)] group-hover:scale-105 ${tall ? "h-full min-h-[28rem]" : "aspect-[16/10]"}`} />
      <div className="glass absolute inset-x-4 bottom-4 flex items-center justify-between rounded-2xl px-6 py-5">
        <div className="flex items-center gap-4"><SpecIcon i={i} /><span className="text-xl font-bold">{s.name}</span></div>
        <span className="text-xs font-bold tracking-[0.2em] uppercase">{t.discover} →</span>
      </div>
    </Link>
  );
}

function SpecRow({ i, soft }: { i: number; soft?: boolean }) {
  const { t } = useI18n();
  const s = specialties[i];
  if (!s) return null;
  return (
    <Link
      to="/especialidades/$slug"
      params={{ slug: s.slug }}
      className={`group flex h-full min-w-0 flex-wrap items-center justify-between gap-6 rounded-[2rem] border border-champagne p-8 transition-all duration-700 hover:-translate-y-1 hover:shadow-[var(--shadow-soft)] ${soft ? "bg-champagne/40" : "bg-background"}`}
    >
      <div className="flex min-w-0 items-center gap-5">
        <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-sand transition-colors group-hover:bg-ivory"><SpecIcon i={i} /></span>
        <span className="text-lg font-bold">{s.name}</span>
      </div>
      <span className="text-xs font-bold tracking-[0.2em] uppercase opacity-0 transition-opacity group-hover:opacity-100">{t.discover}</span>
    </Link>
  );
}
