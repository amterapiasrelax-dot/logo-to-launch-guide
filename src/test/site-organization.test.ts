import { describe, expect, it } from "vitest";
import { SITE_LANGUAGE } from "@/lib/i18n";
import { findSpecialty, specialties } from "@/lib/specialties";

describe("AKURA site organization", () => {
  it("uses Portuguese as the original language for automatic translation", () => {
    expect(SITE_LANGUAGE).toBe("pt-BR");
  });

  it("preserves the nine individual areas", () => {
    expect(specialties.map(({ slug }) => slug)).toEqual([
      "akura-touch", "akura-estetica", "akura-pmu", "akura-podologia-pro",
      "akura-therapy-ec", "akura-homecare", "akura-corporate",
      "huellas-kids-teens", "akura-formations",
    ]);
  });

  it("keeps Japanese Head Spa and localized massage in Akura Touch", () => {
    expect(findSpecialty("akura-touch")?.services.map(({ id }) => id)).toEqual([
      "japanese-head-spa", "massagem-localizada",
    ]);
    expect(specialties.filter(({ slug }) => slug !== "akura-touch")
      .flatMap(({ services }) => services.map(({ id }) => id))
      .filter((id) => ["japanese-head-spa", "massagem-localizada"].includes(id))).toEqual([]);
  });
});