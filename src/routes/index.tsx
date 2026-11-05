import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import heroSpa from "@/assets/hero-spa.jpg";
import spaRoom from "@/assets/spa-room.jpg";
import careHands from "@/assets/care-hands.jpg";
import stillLife from "@/assets/still-life.jpg";
import { useI18n } from "@/lib/i18n";
import { specialties } from "@/lib/specialties";
import { ContactBlock, Curve, Eyebrow, Reveal, SpecIcon, WaButton } from "@/components/site/ui";

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
      <section className="relative min-h-[100svh] overflow-hidden px-4 pt-28 pb-10 md:px-6">
        <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal className="order-2 lg:order-1">
            <Eyebrow>Bienestar · Bien-être · Well-being</Eyebrow>
            <h1 className="display mt-8 text-[2.6rem] sm:text-6xl xl:text-7xl">{t.heroTitle}</h1>
            <p className="mt-8 max-w-lg text-lg leading-relaxed">{t.heroText}</p>
            <div className="mt-10"><WaButton /></div>
          </Reveal>
          <Reveal delay={200} className="order-1 lg:order-2">
            <div className="relative overflow-hidden rounded-[3rem] rounded-tl-[12rem] shadow-[var(--shadow-soft)]">
              <img src={heroSpa} alt="Ambiente AKURA iluminado e acolhedor" width={1920} height={1088} className="kenburns h-[55svh] w-full object-cover lg:h-[78svh]" />
            </div>
            <div className="pointer-events-none absolute -bottom-6 -left-6 hidden h-40 w-40 rounded-full border border-gold/50 lg:block" />
          </Reveal>
        </div>
      </section>

      <Curve className="h-16" />

      {/* SOBRE */}
      <section className="bg-ivory px-6 py-28 md:py-36">
        <div className="mx-auto grid max-w-7xl items-center gap-16 md:grid-cols-2">
          <Reveal className="relative">
            <div className="overflow-hidden arch">
              <img src={spaRoom} alt="Sala de tratamento AKURA" loading="lazy" width={1200} height={1504} style={{ transform: `translateY(${-y * 0.2}px) scale(1.08)` }} className="aspect-[4/5] w-full object-cover" />
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
              <SpecFeature i={0} img={specialties[0].image} tall />
            </Reveal>
            <Reveal delay={100} className="md:col-span-3">
              <SpecFeature i={1} img={careHands} />
            </Reveal>
            {specialties.slice(2, 4).map((s, k) => (
              <Reveal key={s.slug} delay={150 + k * 80} className="md:col-span-3 lg:col-span-3">
                <SpecRow i={k + 2} />
              </Reveal>
            )).reduce<React.ReactNode[]>((a, n) => [...a, n], [])}
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
            <Reveal delay={150} className="md:col-span-5 md:mt-24"><img src={spaRoom} alt="Ambiente AKURA" loading="lazy" className="aspect-[4/5] w-full arch object-cover" /></Reveal>
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

function SpecFeature({ i, img, tall }: { i: number; img: string; tall?: boolean }) {
  const { t } = useI18n();
  const s = specialties[i];
  return (
    <Link to="/especialidades/$slug" params={{ slug: s.slug }} className="group relative block h-full overflow-hidden rounded-[2rem]">
      <img src={img} alt={s.name} loading="lazy" className={`w-full object-cover transition-transform duration-[1.4s] ease-[var(--ease-soft)] group-hover:scale-105 ${tall ? "h-full min-h-[28rem]" : "aspect-[16/10]"}`} />
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
  return (
    <Link
      to="/especialidades/$slug"
      params={{ slug: s.slug }}
      className={`group flex h-full items-center justify-between gap-6 rounded-[2rem] border border-champagne p-8 transition-all duration-700 hover:-translate-y-1 hover:shadow-[var(--shadow-soft)] ${soft ? "bg-champagne/40" : "bg-background"}`}
    >
      <div className="flex items-center gap-5">
        <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-sand transition-colors group-hover:bg-ivory"><SpecIcon i={i} /></span>
        <span className="text-lg font-bold">{s.name}</span>
      </div>
      <span className="text-xs font-bold tracking-[0.2em] uppercase opacity-0 transition-opacity group-hover:opacity-100">{t.discover}</span>
    </Link>
  );
}
