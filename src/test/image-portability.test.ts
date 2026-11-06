import { createHash } from "node:crypto";
import { existsSync, readFileSync, readdirSync } from "node:fs";
import { resolve } from "node:path";
import { describe, expect, it } from "vitest";
import { specialties } from "@/lib/specialties";

const originals = {
  "akura-kids-atendimento.webp": "7d07ef7e9c1c331d6fb9b3819db8355192cffcc54a4753b0104cfa022d044f15",
  "akura-kids-espaco.webp": "c0a721cd078f6fcae55244384c8939a48edda6f5624e1e3390f837cf230394f5",
  "akura-touch-massage.webp": "2d1395643d4df6f6706cdad7f403492f312ca88f0198c5cb4eb0e320183f1c79",
  "espaco-real-akura.png": "3ed4fba9d546b7605d7ff9086470182064b060c2d24ab7746ed9a9bcdc776620",
  "estetica-corporal-akura.webp": "903aeb6937c07632a3a08adc9b6e62ba3242d1c32508558c8764d4b0cc9ee66f",
  "estetica-facial-akura.webp": "15384dcea02032a4083f42f78241282b80583e253e716605dd3989a900eb41dc",
  "foot-spa-banho.webp": "52775f0345178c357f47affcb7af7238d905ec4e25bec5f320444673695aacaa",
  "foot-spa-massagem.webp": "3cbef73e5900a48099f227e63ac3ab76a48b45b3772e0b8ebc97d8c6002308f9",
  "foot-spa-pes.webp": "0bdb23b81a1a7fdfa8cfcb94659ae2fcef53f6116fd8891f2c9f363cb786fc19",
  "head-spa.webp": "ec31a434904ce7eb51bfa9868e73ad500cb65a573dd434b051423576c493e2ac",
  "homecare-soins-pieds.webp": "2459091b3bcc034d1db0b8f86636edfbd9b09d04082b4f7abca56ab02b2e09f6",
  "laserterapia-akura.webp": "6f9c7f61aaf06c7bf548131d2fa9b244704e4fc5057b8731ee3c7072f580b794",
  "massage-cible.webp": "493356b65ff0e30add775351581e2c64f51e143beefd3d7d51df95cc024c3904",
  "massage-corporative-akura.png": "bb61120e150b48fc82e17b17cd2237723911b7964ce30e9c90b7051f1b52da9e",
  "massagem-relaxante-corporate.webp": "a830fee7555395978ed6de3e7ddab913eaa2fec75e5fa3cc0b77434361d3a839",
  "microblading-akura.webp": "6d789e2d3ff5cfbde36f11643848f79180fad51324df2287706c1f5080172e7f",
  "podologie-pro-soin.webp": "baaecfbb5d4258626b9449660a61268750420798585e5b7f0471ba96108411f6",
  "sala-spa-akura.png": "c80ba178a6b99ebc0ffb0916b189175904e8b1b444d8e207bdfc4e00042e6e6c",
};

describe("External-hosting image portability", () => {
  it.each(Object.entries(originals))("preserves the exact original bytes of %s", (name, hash) => {
    const bytes = readFileSync(resolve("public/images", name));
    expect(createHash("sha256").update(bytes).digest("hex")).toBe(hash);
  });

  it("ships every specialty and service photograph as a local file", () => {
    const images = specialties.flatMap((area) => [area.image, ...area.services.flatMap((service) =>
      [service.image, ...(service.gallery?.map((photo) => photo.image) ?? [])])]).filter((image) => image !== undefined);
    expect(images.length).toBeGreaterThan(0);
    for (const image of images) {
      expect(image.startsWith("/images/")).toBe(true);
      expect(existsSync(resolve("public", image.slice(1)))).toBe(true);
    }
  });

  it("keeps runtime source independent of Lovable asset pointers", () => {
    const scan = (directory: string) => {
      for (const entry of readdirSync(directory, { withFileTypes: true })) {
        const path = resolve(directory, entry.name);
        if (entry.isDirectory()) {
          if (!["assets", "test"].includes(entry.name)) scan(path);
        } else if (/\.(tsx?|css)$/.test(entry.name)) {
          const source = readFileSync(path, "utf8");
          expect(source, path).not.toContain(".asset.json");
          expect(source, path).not.toContain("/__l5e/assets-v1/");
        }
      }
    };
    scan(resolve("src"));
  });
});