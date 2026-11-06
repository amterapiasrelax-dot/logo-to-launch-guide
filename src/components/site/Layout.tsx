import { Link } from "@tanstack/react-router";
import { Instagram, Mail, MessageCircle, Music2 } from "lucide-react";
import { useState } from "react";
import logoGold from "@/assets/akura-logo-gold.png";
import logoWhite from "@/assets/akura-logo-gold.png";
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
    { to: "/contato", label: t.nav.contact },
  ] as const;
  const linkCls = "akura-nav-link text-xs font-bold tracking-[0.12em] uppercase";
  const mobileLinkCls = "text-xs font-bold tracking-[0.12em] uppercase text-gold/80 transition-colors hover:text-gold";

  return (
    <header className="akura-header fixed inset-x-0 top-0 z-50">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-2.5">
        <Link to="/" aria-label="AKURA" className="shrink-0">
          <img src={logoWhite} alt="AKURA" className="h-9 w-auto md:h-10" />
        </Link>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Navigation principale">
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
                  <Link key={s.slug} to="/" hash={s.slug} onClick={() => setSub(false)} className="rounded-xl px-4 py-3 text-sm font-bold text-gold/80 transition-colors hover:bg-ivory hover:text-gold">
                    {s.name}
                  </Link>
                ))}
                <Link to="/especialidades" onClick={() => setSub(false)} className="col-span-2 mt-2 border-t border-champagne px-4 pt-4 text-xs font-bold tracking-[0.2em] uppercase text-gold">
                  {t.nav.all} →
                </Link>
              </div>
            </div>
          </div>
          <Link to="/contato" className={linkCls}>{t.nav.contact}</Link>
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <WaButton variant="solid" className="px-5 py-2 text-xs" />
        </div>

        <button
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-full border border-gold/60 lg:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
          aria-expanded={open}
        >
          <span className={cn("h-px w-5 bg-gold transition-transform", open && "translate-y-[3.5px] rotate-45")} />
          <span className={cn("h-px w-5 bg-gold transition-transform", open && "-translate-y-[3.5px] -rotate-45")} />
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
        <div className="glass mx-4 mt-2 max-h-[80vh] overflow-y-auto rounded-3xl border border-champagne p-6 lg:hidden">
          <nav className="flex flex-col gap-4" aria-label="Navigation mobile">
            {links.slice(0, 2).map((l) => (
              <Link key={l.to} to={l.to} onClick={() => setOpen(false)} className={mobileLinkCls}>{l.label}</Link>
            ))}
            <Link to="/especialidades" onClick={() => setOpen(false)} className={mobileLinkCls}>{t.nav.specialties}</Link>
            <div className="ml-3 flex flex-col gap-2 border-l border-champagne pl-4">
              {specialties.map((s) => (
                <Link key={s.slug} to="/" hash={s.slug} onClick={() => setOpen(false)} className="text-sm text-gold/80">{s.name}</Link>
              ))}
            </div>
            {links.slice(2).map((l) => (
              <Link key={l.to} to={l.to} onClick={() => setOpen(false)} className={mobileLinkCls}>{l.label}</Link>
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
      <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-3">
        <div>
          <img src={logoGold} alt="AKURA" className="h-24 w-auto" loading="lazy" />
          <p className="mt-6 max-w-xs text-sm leading-relaxed">Bien-être, savoir et soin dans chaque expérience.</p>
          <div className="mt-8 flex h-24 w-24 flex-col items-center justify-center rounded-full border-2 border-gold text-center" aria-label="Certifiée APNB">
            <span className="text-[8px] font-bold uppercase tracking-[0.28em]">Certifiée</span>
            <span className="display mt-1 text-xl font-bold tracking-[0.12em]">APNB</span>
            <span className="mt-1 h-px w-8 bg-gold" aria-hidden />
          </div>
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
          <h3 className="eyebrow mb-5">{t.nav.contact}</h3>
          <ul className="space-y-3 text-sm">
            <li>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 font-bold transition-opacity hover:opacity-70">
                <MessageCircle className="h-4 w-4" aria-hidden /> WhatsApp
              </a>
            </li>
            <li>
              <a href="https://instagram.com/akurawellbeing" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 transition-opacity hover:opacity-70">
                <Instagram className="h-4 w-4" aria-hidden /> @akurawellbeing
              </a>
            </li>
            <li>
              <a href="https://tiktok.com/@akurawellbeing" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 transition-opacity hover:opacity-70">
                <Music2 className="h-4 w-4" aria-hidden /> @akurawellbeing
              </a>
            </li>
            <li>
              <a href="mailto:akurawellbeing@gmail.com" className="inline-flex items-center gap-3 transition-opacity hover:opacity-70">
                <Mail className="h-4 w-4" aria-hidden /> akurawellbeing@gmail.com
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="gold-line mx-auto mt-14 max-w-7xl" />
      <div className="mx-auto mt-6 flex max-w-7xl flex-col items-center justify-between gap-4 text-xs tracking-widest md:flex-row">
        <p>© {new Date().getFullYear()} AKURA · {t.rights}</p>
        <div className="flex items-center gap-6">
          <Link to="/politica-de-privacidade" className="hover:underline">Politique de confidentialité</Link>
          <Link to="/aviso-legal" className="hover:underline">Mentions légales</Link>
        </div>
      </div>
    </footer>
  );
}
