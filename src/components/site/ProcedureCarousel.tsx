import { useEffect, useState, useRef } from "react";
import { Link } from "@tanstack/react-router";
import { ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { heroSlides, nextSlide } from "@/lib/hero-slides";
import { cn } from "@/lib/utils";

export function ProcedureCarousel() {
  const [active, setActive] = useState(0);
  const [previous, setPrevious] = useState<number | null>(null);
  const [ready, setReady] = useState(false);
  const [paused, setPaused] = useState(false);
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
    if (!ready || paused || reduced || focused) return;
    const timer = window.setInterval(() => {
      if (!document.hidden) {
        setPrevious(active);
        setActive(nextSlide(active, 1, heroSlides.length));
      }
    }, 6000);
    return () => window.clearInterval(timer);
  }, [ready, paused, reduced, focused, active]);
  useEffect(() => {
    const timer = window.setTimeout(() => setPrevious(null), reduced ? 0 : 1800);
    return () => window.clearTimeout(timer);
  }, [active, reduced]);
  const move = (direction: number) => select(nextSlide(active, direction, heroSlides.length));
  return (
    <section className="procedure-carousel" aria-label="Procedimentos AKURA" aria-roledescription="carrossel"
      onFocusCapture={() => setFocused(true)}
      onBlurCapture={(e) => { if (!e.currentTarget.contains(e.relatedTarget)) setFocused(false); }}
      onKeyDown={(e) => { if (e.key === "ArrowRight") move(1); if (e.key === "ArrowLeft") move(-1); }}
      onTouchStart={(e) => { touchStart.current = e.touches[0]?.clientX ?? null; }}
      onTouchEnd={(e) => {
        const end = e.changedTouches[0]?.clientX;
        if (touchStart.current !== null && end !== undefined && Math.abs(end - touchStart.current) > 45) move(end < touchStart.current ? 1 : -1);
        touchStart.current = null;
      }}>
      <h1 className="sr-only">AKURA — Estética e bem-estar</h1>
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
      <div className="procedure-controls">
        <div className="flex items-center">
          {heroSlides.map((slide, i) => <Button key={slide.id} variant="ghost" size="icon" className="h-8 w-8 rounded-full" aria-label={`Mostrar ${slide.name}`} aria-pressed={active === i} onClick={() => select(i)}>
            <span className={cn("h-1 w-1 rounded-full bg-photo-label transition-opacity", active === i ? "opacity-100" : "opacity-40")} />
          </Button>)}
        </div>
        <div className="flex items-center gap-1">
          <Button variant="ghost" size="icon" title="Foto anterior" aria-label="Foto anterior" onClick={() => move(-1)}><ChevronLeft /></Button>
          {!reduced && <Button variant="ghost" size="icon" title={paused ? "Retomar carrossel" : "Pausar carrossel"} aria-label={paused ? "Retomar carrossel" : "Pausar carrossel"} onClick={() => setPaused(!paused)}>{paused ? <Play /> : <Pause />}</Button>}
          <Button variant="ghost" size="icon" title="Próxima foto" aria-label="Próxima foto" onClick={() => move(1)}><ChevronRight /></Button>
        </div>
      </div>
    </section>
  );
}