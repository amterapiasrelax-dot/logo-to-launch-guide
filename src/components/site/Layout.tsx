import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import logo from "@/assets/akura-logo.png.asset.json";
import { useI18n } from "@/lib/i18n";
import { specialties, WHATSAPP_URL } from "@/lib/specialties";
import { WaButton } from "./ui";
import { cn } from "@/lib/utils";

export function Header() {
  const { t } = useI18n();
  const [open, setOpen] = useState(false);
  const [sub, setSub] = useState(false);

  const links = [
    { to: "/", label: t.nav.home },
    { to: "/sobre", label: t.nav.about },
    { to: "/internacional", label: t.nav.intl },
    { to: "/contato", label: t.nav.contact },
  ] as const;
  const linkCls = "akura-nav-link text-sm font-bold tracking-[0.14em] uppercase";
  const mobileLinkCls = "text-sm font-bold tracking-[0.14em] uppercase text-gold/80 transition-colors hover:text-gold";

  return (
    <header className="akura-header fixed inset-x-0 top-0 z-50">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-2.5">
        <Link to="/" aria-label="AKURA" className="shrink-0">
          <img src={logo.url} alt="AKURA" className="h-9 w-auto md:h-10" />
        </Link>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Principal">
          <Link to="/" className={linkCls} activeProps={{ className: "active" }} activeOptions={{ exact: true }}>{links[0].label}</Link>
          <Link to="/sobre" className={linkCls}>{t.nav.about}</Link>
          <div className="group relative" onMouseLeave={() => setSub(false)}>
            <Link to="/especialidades" className={linkCls} onMouseEnter={() => setSub(true)} onFocus={() => setSub(true)}>
              {t.nav.specialties} <span aria-hidden>⌄</span>
            </Link>
            <div
              className={cn(
                "absolute left-1/2 top-full w-[34rem] -translate-x-1/2 pt-5 transition-all duration-500",
                sub ? "visible opacity-100" : "invisible -translate-y-2 opacity-0",
              )}
            >
              <div className="grid grid-cols-2 gap-1 rounded-2xl border border-champagne bg-background p-4 shadow-[var(--shadow-soft)]">
                {specialties.map((s) => (
                  <Link key={s.slug} to="/especialidades/$slug" params={{ slug: s.slug }} onClick={() => setSub(false)} className="rounded-xl px-4 py-3 text-sm font-bold text-gold/80 transition-colors hover:bg-ivory hover:text-gold">
                    {s.name}
                  </Link>
                ))}
                <Link to="/especialidades" onClick={() => setSub(false)} className="col-span-2 mt-2 border-t border-champagne px-4 pt-4 text-xs font-bold tracking-[0.2em] uppercase text-gold">
                  {t.nav.all} →
                </Link>
              </div>
            </div>
          </div>
          <Link to="/internacional" className={linkCls}>{t.nav.intl}</Link>
          <Link to="/contato" className={linkCls}>{t.nav.contact}</Link>
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <WaButton variant="light" className="px-5 py-2 text-xs" />
        </div>

        <button
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-full border border-primary-foreground/60 lg:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
          aria-expanded={open}
        >
          <span className={cn("h-px w-5 bg-primary-foreground transition-transform", open && "translate-y-[3.5px] rotate-45")} />
          <span className={cn("h-px w-5 bg-primary-foreground transition-transform", open && "-translate-y-[3.5px] -rotate-45")} />
        </button>
      </div>

      <div className="country-strip" aria-label={t.countries.join(" · ")}>
        <div className="country-track" aria-hidden="true">
          {[0, 1].map((group) => (
            <div className="country-sequence" key={group}>
              {[0, 1, 2].map((repeat) => t.countries.map((country) => (
                <span className="country-item" key={`${repeat}-${country}`}>
                  {country}<span className="country-separator">✦</span>
                </span>
              )))}
            </div>
          ))}
        </div>
      </div>

      {open && (
        <div className="glass mx-4 mt-3 max-h-[80vh] overflow-y-auto rounded-3xl border border-champagne p-6 lg:hidden">
          <nav className="flex flex-col gap-4" aria-label="Mobile">
            {links.slice(0, 2).map((l) => (
              <Link key={l.to} to={l.to} onClick={() => setOpen(false)} className={linkCls}>{l.label}</Link>
            ))}
            <Link to="/especialidades" onClick={() => setOpen(false)} className={linkCls}>{t.nav.specialties}</Link>
            <div className="ml-3 flex flex-col gap-2 border-l border-champagne pl-4">
              {specialties.map((s) => (
                <Link key={s.slug} to="/especialidades/$slug" params={{ slug: s.slug }} onClick={() => setOpen(false)} className="text-sm text-gold/80">{s.name}</Link>
              ))}
            </div>
            {links.slice(2).map((l) => (
              <Link key={l.to} to={l.to} onClick={() => setOpen(false)} className={linkCls}>{l.label}</Link>
            ))}
            <WaButton className="mt-2" />
          </nav>
        </div>
      )}
    </header>
  );
}

export function Footer() {
  const { t } = useI18n();
  return (
    <footer className="border-t border-champagne bg-ivory px-6 pt-20 pb-10">
      <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-4">
        <div>
          <img src={logo.url} alt="AKURA" className="h-24 w-auto" loading="lazy" />
        </div>
        <div>
          <h3 className="eyebrow mb-5">{t.footerNav}</h3>
          <ul className="space-y-3 text-sm">
            <li><Link to="/" className="hover:underline">{t.nav.home}</Link></li>
            <li><Link to="/sobre" className="hover:underline">{t.nav.about}</Link></li>
            <li><Link to="/especialidades" className="hover:underline">{t.nav.specialties}</Link></li>
            <li><Link to="/internacional" className="hover:underline">{t.nav.intl}</Link></li>
            <li><Link to="/contato" className="hover:underline">{t.nav.contact}</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="eyebrow mb-5">{t.nav.specialties}</h3>
          <ul className="space-y-3 text-sm">
            {specialties.map((s) => (
              <li key={s.slug}><Link to="/especialidades/$slug" params={{ slug: s.slug }} className="hover:underline">{s.name}</Link></li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="eyebrow mb-5">{t.intlEyebrow}</h3>
          <p className="text-sm leading-relaxed">{t.countries.join(" · ")}</p>
          <h3 className="eyebrow mb-4 mt-8">{t.nav.contact}</h3>
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="text-sm font-bold hover:underline">{t.footerContact} →</a>
        </div>
      </div>
      <div className="gold-line mx-auto mt-16 max-w-7xl" />
      <p className="mx-auto mt-6 max-w-7xl text-center text-xs tracking-widest">© {new Date().getFullYear()} AKURA · {t.rights}</p>
    </footer>
  );
}
