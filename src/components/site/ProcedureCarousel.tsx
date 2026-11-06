import { useEffect, useState, useRef } from "react";
import { Link } from "@tanstack/react-router";
import { heroSlides, nextSlide } from "@/lib/hero-slides";
import { cn } from "@/lib/utils";

export function ProcedureCarousel() {
  const [active, setActive] = useState(0);
  const [previous, setPrevious] = useState<number | null>(null);
  const [ready, setReady] = useState(false);
  const [reduced, setReduced] = useState(false);
  const [focused, setFocused] = useState(false);
  const touchStart = useRef<number | null>(null);
  useEffect(() => {
    let cancelled = false;
    Promise.all(heroSlides.map(({ image }) => {
      const photo = new Image();
      photo.src = image;
      return photo.decode().catch(() => undefined);
    })).then(() => { if (!cancelled) setReady(true); });
    return () => { cancelled = true; };
  }, []);
  const select = (index: number) => {
    if (index === active) return;
    setPrevious(active);
    setActive(index);
  };
  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduced(media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);
  useEffect(() => {
    if (!ready || reduced || focused) return;
    const timer = window.setInterval(() => {
      if (!document.hidden) {
        setPrevious(active);
        setActive(nextSlide(active, 1, heroSlides.length));
      }
    }, 6000);
    return () => window.clearInterval(timer);
  }, [ready, reduced, focused, active]);
  useEffect(() => {
    const timer = window.setTimeout(() => setPrevious(null), reduced ? 0 : 1800);
    return () => window.clearTimeout(timer);
  }, [active, reduced]);
  const move = (direction: number) => select(nextSlide(active, direction, heroSlides.length));
  return (
    <section className="procedure-carousel" aria-label="Soins AKURA" aria-roledescription="carrousel"
      onFocusCapture={() => setFocused(true)}
      onBlurCapture={(e) => { if (!e.currentTarget.contains(e.relatedTarget)) setFocused(false); }}
      onKeyDown={(e) => { if (e.key === "ArrowRight") move(1); if (e.key === "ArrowLeft") move(-1); }}
      onTouchStart={(e) => { touchStart.current = e.touches[0]?.clientX ?? null; }}
      onTouchEnd={(e) => {
        const end = e.changedTouches[0]?.clientX;
        if (touchStart.current !== null && end !== undefined && Math.abs(end - touchStart.current) > 45) move(end < touchStart.current ? 1 : -1);
        touchStart.current = null;
      }}>
      <div className="procedure-stage">
        {heroSlides.map((slide, i) => (
          <Link key={slide.id} to="/especialidades/$slug" params={{ slug: slide.slug }} hash={slide.id}
            className={cn("procedure-slide", previous === i && "is-previous", active === i && "is-active")}
            aria-hidden={active !== i} tabIndex={active === i ? 0 : -1}
            aria-label={`${slide.name} — AKURA`}>
            <img src={slide.image} alt={slide.alt} loading="eager" fetchPriority={i === 0 ? "high" : "auto"} />
            <span className="procedure-name">{slide.name}</span>
          </Link>
        ))}
      </div>
    </section>
  );
}