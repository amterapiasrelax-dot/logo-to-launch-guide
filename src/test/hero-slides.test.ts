import { describe, expect, it } from "vitest";
import { heroSlides, nextSlide } from "@/lib/hero-slides";

describe("Approved procedure carousel", () => {
  it("uses only the identified procedure photos and their owning pages", () => {
    expect(heroSlides.map(({ id, slug }) => [id, slug])).toEqual([
      ["head-face-ritual", "akura-touch"],
      ["touch-relax", "akura-touch"],
      ["touch-cible", "akura-touch"],
      ["estetica-corporal", "akura-estetica"],
      ["laserterapia", "akura-therapy-ec"],
      ["soin-lumiere-pieds-ongles", "akura-homecare"],
      ["massagem-relaxante", "akura-corporate"],
      ["foot-spa", "akura-corporate"],
      ["akura-kids", "huellas-kids-teens"],
      ["babymassage", "huellas-kids-teens"],
    ]);
    expect(heroSlides.every(({ image }) => image.startsWith("/images/"))).toBe(true);
  });
  it("cycles forwards and backwards", () => {
    expect(nextSlide(2, 1, 3)).toBe(0);
    expect(nextSlide(0, -1, 3)).toBe(2);
  });
});
