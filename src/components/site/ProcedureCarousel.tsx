import { useEffect, useState, useRef } from "react";
import { Link } from "@tanstack/react-router";
import { ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { heroSlides, nextSlide } from "@/lib/hero-slides";
import { cn } from "@/lib/utils";

export function ProcedureCarousel() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [reduced, setReduced] = useState(false);
  const [focused, setFocused] = useState(false);
  const touchStart = useRef<number | null>(null);
  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduced(media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);
  useEffect(() => {
    if (paused || reduced || focused) return;
    const timer = window.setInterval(() => {
      if (!document.hidden) setActive((i) => nextSlide(i, 1, heroSlides.length));
    }, 6000);
    return () => window.clearInterval(timer);
  }, [paused, reduced, focused, active]);
  const move = (direction: number) => setActive((i) => nextSlide(i, direction, heroSlides.length));
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
            className={cn("procedure-slide", active === i && "is-active")}
            aria-hidden={active !== i} tabIndex={active === i ? 0 : -1}
            aria-label={`${slide.name} — AKURA`}>
            <img src={slide.image} alt={slide.alt} loading={i === 0 ? "eager" : "lazy"} fetchPriority={i === 0 ? "high" : "auto"} />
            <span className="procedure-name">{slide.name}</span>
          </Link>
        ))}
      </div>
      <div className="flex h-16 items-center justify-between px-5 md:px-10">
        <span className="text-xs font-light tracking-normal" aria-hidden="true">AKURA</span>
        <div className="flex items-center gap-2">
          {heroSlides.map((slide, i) => <Button key={slide.id} variant="ghost" size="icon" className="h-9 w-9 rounded-full" aria-label={`Afficher ${slide.name}`.replace("Afficher", "Mostrar")} aria-pressed={active === i} onClick={() => setActive(i)}>
            <span className={cn("h-1.5 w-1.5 rounded-full bg-gold transition-opacity", active === i ? "opacity-100" : "opacity-30")} />
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