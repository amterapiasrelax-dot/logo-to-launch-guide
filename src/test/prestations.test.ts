import { describe, expect, it } from "vitest";
import { allServices, findService } from "@/lib/specialties";

describe("Prestations catalog", () => {
  it("lists the official services with their exact durations", () => {
    const durations = Object.fromEntries(allServices.map(({ service }) => [service.id, service.duration]));
    expect(durations["head-face-ritual"]).toBe("60 min");
    expect(durations["foot-spa"]).toBe("60 min");
    expect(durations["reflexologie-plantaire"]).toBe("40 min");
    expect(durations["touch-relax"]).toBe("60 min");
    expect(durations["touch-cible"]).toBe("60 min");
    expect(durations["head-relax-essentiel"]).toBe("50–60 min");
    expect(durations["head-relax-corps"]).toBe("75–90 min");
    expect(durations["soin-lumiere-pieds-ongles"]).toBe("30 min");
    expect(durations["massage-femme-enceinte"]).toBe("60 min");
    expect(durations["babymassage"]).toBe("30–40 min");
    expect(durations["massage-enfant-adolescent"]).toBe("30 min");
  });

  it("gives every catalog service a French description and wellness benefits", () => {
    for (const id of ["head-face-ritual", "foot-spa", "reflexologie-plantaire", "touch-relax", "touch-cible",
      "head-relax-essentiel", "head-relax-corps", "soin-lumiere-pieds-ongles", "massage-femme-enceinte",
      "babymassage", "massage-enfant-adolescent"]) {
      const found = findService(id);
      expect(found, id).toBeDefined();
      expect(found?.service.text, id).toBeTruthy();
      expect(found?.service.benefits?.length, id).toBeGreaterThan(0);
    }
  });

  it("never shows prices anywhere in the service data", () => {
    const text = JSON.stringify(allServices);
    expect(text).not.toMatch(/€|\b(EUR|prix|tarif|tarifs)\b/i);
  });

  it("keeps service ids unique across specialties", () => {
    const ids = allServices.map(({ service }) => service.id);
    expect(new Set(ids).size).toBe(ids.length);
  });
});
