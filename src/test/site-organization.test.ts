import { describe, expect, it } from "vitest";
import { SITE_LANGUAGE } from "@/lib/i18n";
import { findSpecialty, specialties } from "@/lib/specialties";

describe("AKURA site organization", () => {
  it("uses French as the original site language", () => {
    expect(SITE_LANGUAGE).toBe("fr-FR");
  });

  it("removes Podologie PRO, Akura PMU and the facial service everywhere", () => {
    expect(findSpecialty("akura-podologia-pro")).toBeUndefined();
    expect(findSpecialty("akura-pmu")).toBeUndefined();
    const ids = specialties.flatMap(({ services }) => services.map(({ id }) => id));
    expect(ids).not.toContain("podologia");
    expect(ids).not.toContain("microblading");
    expect(ids).not.toContain("estetica-facial");
    const images = specialties.flatMap((area) => [area.image, ...area.services.map((service) => service.image)])
      .filter((image) => image !== undefined);
    expect(images.filter((image) => /podologie|microblading|estetica-facial/.test(image))).toEqual([]);
  });

  it("keeps only the body care service in Akura Esthétique", () => {
    const estetica = findSpecialty("akura-estetica");
    expect(estetica?.services.map(({ id }) => id)).toEqual(["estetica-corporal"]);
    expect(estetica?.image).toBe("/images/estetica-corporal-akura.webp");
    expect(estetica?.tagline).toBe("Soins esthétiques du corps");
  });

  it("places the approved home care photo in its owning area", () => {
    const homecare = findSpecialty("akura-homecare");
    expect(homecare?.services.map(({ id }) => id)).toEqual(["soins-pieds-domicile"]);
    expect(homecare?.image).toBe(homecare?.services[0]?.image);
  });

  it("places the approved corporate chair massage photo in Akura Corporate", () => {
    const corporate = findSpecialty("akura-corporate");
    expect(corporate?.image).toBe("/images/massage-corporative-akura.png");
    expect(corporate?.services[0]?.image).toBe(corporate?.image);
  });

  it("preserves the seven individual areas", () => {
    expect(specialties.map(({ slug }) => slug)).toEqual([
      "akura-touch", "akura-estetica", "akura-therapy-ec", "akura-homecare",
      "akura-corporate", "huellas-kids-teens", "akura-formations",
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
