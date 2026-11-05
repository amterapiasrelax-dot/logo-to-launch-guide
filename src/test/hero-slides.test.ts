import { describe, expect, it } from "vitest";
import { heroSlides, nextSlide } from "@/lib/hero-slides";

describe("Approved procedure carousel", () => {
  it("uses only the identified procedure photos and their owning pages", () => {
    expect(heroSlides.map(({ id, slug }) => [id, slug])).toEqual([
      ["japanese-head-spa", "akura-touch"],
      ["massagem-localizada", "akura-touch"],
      ["microblading", "akura-pmu"],
      ["podologia", "akura-podologia-pro"],
      ["foot-spa", "akura-corporate"],
      ["akura-kids", "huellas-kids-teens"],
    ]);
    expect(heroSlides.every(({ image }) => image.startsWith("/__l5e/assets-v1/"))).toBe(true);
  });
  it("cycles forwards and backwards", () => {
    expect(nextSlide(2, 1, 3)).toBe(0);
    expect(nextSlide(0, -1, 3)).toBe(2);
  });
});