import { useEffect, useRef, useState, type ReactNode, type ElementType } from "react";
import { WHATSAPP_URL } from "@/lib/specialties";
import { useI18n } from "@/lib/i18n";
import { cn } from "@/lib/utils";

export function Reveal({
  children,
  className,
  delay = 0,
  as: Tag = "div",
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: ElementType;
}) {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => setVisible(!!e?.isIntersecting), {
      threshold: 0.15,
      rootMargin: "0px 0px -8% 0px",
    });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <Tag
      ref={ref}
      data-visible={visible}
      style={{ transitionDelay: `${delay}ms` }}
      className={cn("reveal", className)}
    >
      {children}
    </Tag>
  );
}

export function WaButton({ variant = "solid", className }: { variant?: "solid" | "outline"; className?: string }) {
  const { t } = useI18n();
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "group inline-flex items-center justify-center gap-3 rounded-full px-7 py-3.5 text-sm font-bold tracking-[0.12em] uppercase transition-all duration-500 ease-[var(--ease-soft)]",
        variant === "solid"
          ? "bg-gold text-primary-foreground shadow-[var(--shadow-soft)] hover:bg-sand hover:-translate-y-0.5"
          : "border border-gold text-gold hover:bg-gold hover:text-primary-foreground",
        className,
      )}
    >
      {t.cta}
      <span aria-hidden className="transition-transform duration-500 group-hover:translate-x-1">→</span>
    </a>
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <div className="flex items-center gap-4">
      <span className="h-px w-10 bg-gold" />
      <span className="eyebrow">{children}</span>
    </div>
  );
}

/** Organic thin-line curve used as an editorial separator */
export function Curve({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 1440 120" preserveAspectRatio="none" aria-hidden className={cn("w-full", className)}>
      <path d="M0,80 C360,10 720,130 1080,50 C1260,15 1380,40 1440,60" fill="none" stroke="var(--gold)" strokeWidth="1" opacity="0.6" />
    </svg>
  );
}

export function SpecIcon({ i }: { i: number }) {
  const paths = [
    "M12 3c3 4 3 8 0 12-3-4-3-8 0-12Zm-7 9c4-1 6 1 7 4-4 1-6-1-7-4Zm14 0c-4-1-6 1-7 4 4 1 6-1 7-4Z",
    "M12 4a6 6 0 1 0 0 12 6 6 0 0 0 0-12Zm0 16v-4",
    "M5 15c3-6 11-6 14 0M8 11c1-2 7-2 8 0",
    "M9 4c-2 4-2 10 1 15m5-15c2 4 2 10-1 15",
    "M4 12h4l2-5 4 10 2-5h4",
    "M4 11 12 4l8 7v9H4v-9Zm6 9v-5h4v5",
    "M5 20V8h6v12m2 0V4h6v16",
    "M8 18a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm8-6a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm-7-6a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z",
    "M3 9l9-5 9 5-9 5-9-5Zm4 3v4c3 2 7 2 10 0v-4",
  ];
  return (
    <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="var(--gold)" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d={paths[i % paths.length]} />
    </svg>
  );
}

export function ContactBlock() {
  const { t } = useI18n();
  return (
    <section className="relative overflow-hidden bg-champagne/50 px-6 py-28 md:py-40">
      <div className="pointer-events-none absolute -left-40 -top-40 h-[30rem] w-[30rem] rounded-full border border-gold/30" />
      <div className="pointer-events-none absolute -bottom-52 -right-24 h-[34rem] w-[34rem] rounded-full border border-gold/30" />
      <Reveal className="relative mx-auto max-w-3xl text-center">
        <div className="flex justify-center"><Eyebrow>{t.nav.contact}</Eyebrow></div>
        <h2 className="display mt-8 text-4xl md:text-6xl">{t.contactTitle}</h2>
        <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed">{t.contactText}</p>
        <div className="mt-10"><WaButton /></div>
      </Reveal>
    </section>
  );
}

export function PageHero({ eyebrow, title, text, image }: { eyebrow: string; title: string; text?: string; image: string }) {
  return (
    <section className="relative px-6 pb-20 pt-36 md:pt-44">
      <div className="mx-auto grid max-w-7xl items-end gap-12 md:grid-cols-[1.1fr_0.9fr]">
        <Reveal>
          <Eyebrow>{eyebrow}</Eyebrow>
          <h1 className="display mt-8 text-5xl md:text-7xl">{title}</h1>
          {text && <p className="mt-8 max-w-xl text-lg leading-relaxed">{text}</p>}
          <div className="mt-10"><WaButton /></div>
        </Reveal>
        <Reveal delay={150} className="overflow-hidden arch shadow-[var(--shadow-soft)]">
          <img src={image} alt="" className="kenburns aspect-[4/5] w-full object-cover" />
        </Reveal>
      </div>
    </section>
  );
}
