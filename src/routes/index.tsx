import { createFileRoute, Link } from "@tanstack/react-router";
import realSpace from "@/assets/espaco-real-akura.png.asset.json";
import careHands from "@/assets/care-hands.jpg";
import salaSpa from "@/assets/sala-spa-akura.png.asset.json";
import { useI18n } from "@/lib/i18n";
import { specialties } from "@/lib/specialties";
import { ContactBlock, Eyebrow, Parallax, Reveal, WaButton } from "@/components/site/ui";
import { ProcedureCarousel } from "@/components/site/ProcedureCarousel";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "AKURA — Esthétique et bien-être personnalisés" },
      { name: "description", content: "Une expérience de soin qui va au-delà de l’essentiel. Esthétique et bien-être avec un accompagnement personnalisé." },
      { property: "og:title", content: "AKURA — Esthétique et bien-être personnalisés" },
      { property: "og:description", content: "Une expérience de soin qui va au-delà de l’essentiel." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  const { t } = useI18n();

  return (
    <>
      {/* HERO */}
      <section className="akura-introduction">
        <img src={realSpace.url} alt="Espace de soins AKURA" className="akura-introduction-photo" fetchPriority="high" />
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
      <section className="bg-ivory px-6 py-16 md:py-24">
        <div className="mx-auto max-w-7xl">
          <Reveal delay={150} direction="fade">
            <Eyebrow>{t.aboutEyebrow}</Eyebrow>
            <h2 className="display mt-8 text-4xl md:text-6xl">{t.aboutTitle}</h2>
            <div className="gold-line my-8 w-40" />
            <p className="max-w-lg text-lg leading-relaxed">{t.aboutText}</p>
            <Link to="/sobre" className="mt-10 inline-block border-b border-gold pb-1 text-sm font-bold tracking-[0.2em] uppercase">{t.nav.about} →</Link>
          </Reveal>
        </div>
      </section>

      {/* ESPECIALIDADES — todas as nove áreas em seções completas */}
      <section className="px-6 py-16 md:py-24">
        <div className="mx-auto max-w-7xl">
          <Reveal direction="fade" className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <div>
              <Eyebrow>{t.specEyebrow}</Eyebrow>
              <h2 className="display mt-8 text-4xl md:text-6xl">{t.specTitle}</h2>
            </div>
            <Link to="/especialidades" className="text-sm font-bold tracking-[0.2em] uppercase">{t.nav.all} →</Link>
          </Reveal>
        </div>
      </section>

      {specialties.map((s, k) => {
        const flip = k % 2 === 1;
        const photo = s.services[0]?.image;
        const text = (
          <>
            <Eyebrow>{`${String(k + 1).padStart(2, "0")} — ${t.specEyebrow}`}</Eyebrow>
            <h3 className="display mt-8 text-4xl md:text-5xl">{s.name}</h3>
            <p className="mt-4 text-xl font-light leading-snug">{s.tagline}</p>
            <div className={`gold-line my-8 w-40 ${photo ? "" : "mx-auto"}`} />
            <p className="max-w-lg text-lg leading-relaxed">{s.description}</p>
            {s.services.length > 0 && (
              <ul className={`mt-8 flex flex-wrap gap-3 ${photo ? "" : "justify-center"}`}>
                {s.services.map((x) => (
                  <li key={x.id}>
                    <Link to="/especialidades/$slug" params={{ slug: s.slug }} hash={x.id} className="inline-block rounded-full border border-champagne px-4 py-2 text-sm font-bold transition-colors hover:bg-champagne/50">
                      {x.title}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
            <div className="mt-10">
              <Link to="/especialidades/$slug" params={{ slug: s.slug }} className="group inline-flex items-center gap-3 rounded-full border border-gold px-7 py-3.5 text-sm font-bold tracking-[0.12em] uppercase transition-all duration-500 ease-[var(--ease-soft)] hover:bg-gold hover:text-primary-foreground">
                {s.ctaLabel}
                <span aria-hidden className="transition-transform duration-500 group-hover:translate-x-1">→</span>
              </Link>
            </div>
          </>
        );
        return (
          <section key={s.slug} id={s.slug} className={`scroll-mt-32 px-6 py-14 md:py-20 ${flip ? "bg-ivory" : ""}`}>
            {photo ? (
              <div className={`mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-2 ${flip ? "md:[&>*:first-child]:order-2" : ""}`}>
                <Reveal direction={flip ? "right" : "left"} className="overflow-hidden rounded-[2rem] shadow-[var(--shadow-soft)]">
                  <Parallax speed={0.05}>
                    <img src={photo} alt={s.name} loading="lazy" className="aspect-[4/3] w-full scale-110 object-cover" />
                  </Parallax>
                </Reveal>
                <Reveal delay={150} direction={flip ? "left" : "right"}>{text}</Reveal>
              </div>
            ) : (
              <Reveal direction="fade" className="mx-auto flex max-w-2xl flex-col items-center text-center">{text}</Reveal>
            )}
          </section>
        );
      })}

      {/* PERSONALIZADO */}
      <section className="relative overflow-hidden bg-ivory py-16 md:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 md:grid-cols-[1.2fr_0.8fr]">
          <Reveal direction="left" className="relative overflow-hidden rounded-[2rem] rounded-br-[10rem]">
            <Parallax speed={0.06}>
              <img src={careHands} alt="Soin personnalisé" loading="lazy" width={1200} height={1504} className="aspect-[5/4] w-full scale-110 object-cover" />
            </Parallax>
          </Reveal>
          <Reveal delay={200} direction="right" className="md:-ml-24 md:rounded-[2rem] md:bg-background md:p-14 md:shadow-[var(--shadow-soft)]">
            <Eyebrow>{t.persEyebrow}</Eyebrow>
            <h2 className="display mt-8 text-4xl md:text-5xl">{t.persTitle}</h2>
            <p className="mt-8 text-lg leading-relaxed">{t.persText}</p>
          </Reveal>
        </div>
      </section>

      {/* EXPERIÊNCIA */}
      <section className="px-6 py-16 md:py-24">
        <div className="mx-auto max-w-7xl">
          <Reveal direction="fade" className="mx-auto max-w-2xl text-center">
            <div className="flex justify-center"><Eyebrow>{t.expEyebrow}</Eyebrow></div>
            <h2 className="display mt-8 text-4xl md:text-6xl">{t.expTitle}</h2>
            <p className="mt-8 text-lg leading-relaxed">{t.expText}</p>
            <p className="display mt-10 text-2xl md:text-3xl">{t.expSlogan}</p>
            <div className="mt-10"><WaButton /></div>
          </Reveal>
        </div>
      </section>

      {/* INTERNACIONAL */}
      <section className="border-y border-champagne px-6 py-14">
        <Reveal direction="fade" className="mx-auto max-w-6xl text-center">
          <div className="flex justify-center"><Eyebrow>{t.intlEyebrow}</Eyebrow></div>
          <p className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-3xl font-light md:text-5xl">
            {t.countries.map((c, i) => (
              <span key={c} className="flex items-center gap-8">
                {c}
                {i < t.countries.length - 1 && <span className="h-8 w-px bg-sand" aria-hidden />}
              </span>
            ))}
          </p>
        </Reveal>
      </section>

      {/* NOSSO ESPAÇO */}
      <section className="px-6 py-16 md:py-24">
        <div className="mx-auto max-w-7xl">
          <Reveal direction="fade" className="mx-auto max-w-2xl text-center">
            <div className="flex justify-center"><Eyebrow>{t.spaceEyebrow}</Eyebrow></div>
            <h2 className="display mt-8 text-4xl md:text-6xl">{t.spaceTitle}</h2>
          </Reveal>
          <div className="mt-10 grid gap-6 md:grid-cols-12">
            <Reveal direction="glow" className="overflow-hidden rounded-[2rem] md:col-span-7"><Parallax speed={0.05}><img src={salaSpa.url} alt="Salle de spa AKURA" loading="lazy" className="aspect-[3/2] w-full scale-110 object-cover transition-transform duration-[1.5s] hover:scale-[1.14]" /></Parallax></Reveal>
            <Reveal delay={150} direction="right" className="overflow-hidden arch md:col-span-5 md:mt-24"><Parallax speed={0.09}><img src={realSpace.url} alt="Espace de soins AKURA" loading="lazy" className="aspect-[4/5] w-full scale-110 object-cover" /></Parallax></Reveal>
          </div>
        </div>
      </section>

      <ContactBlock />
    </>
  );
}


