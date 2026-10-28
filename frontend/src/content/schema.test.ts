import { readdirSync, readFileSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";
import { faqJsonLd, physicianJsonLd } from "@/lib/seo";
import { collectPending, known, pending, siteSchema, zoneSlugs } from "./schema";
import { site } from "./site";

describe("contenido del sitio", () => {
  it("cumple el esquema zod", () => {
    expect(siteSchema.safeParse(site).success).toBe(true);
  });

  it("tiene las seis zonas, cada una con mensaje de WhatsApp propio", () => {
    expect(site.zones.map((zone) => zone.slug)).toEqual([...zoneSlugs]);
    const messages = new Set(site.zones.map((zone) => zone.whatsappMessage));
    expect(messages.size).toBe(zoneSlugs.length);
  });

  it("mantiene como pendientes los datos que no se conocen", () => {
    expect(collectPending(site).sort()).toEqual(
      [
        "contact.clinicName",
        "contact.hours",
        "contact.mapsUrl",
        "doctor.bio",
        "doctor.education",
        "doctor.rne",
        "doctor.track",
      ].sort(),
    );
  });

  it("known() oculta los pendientes y devuelve los datos reales", () => {
    expect(known(site.doctor.bio)).toBeNull();
    expect(known(site.contact.mapsUrl)).toBeNull();
    expect(known(pending())).toBeNull();
    expect(known("Hospital X")).toBe("Hospital X");
    expect(known(["a"])).toEqual(["a"]);
  });

  it("el JSON-LD no incluye datos pendientes", () => {
    const text = JSON.stringify([physicianJsonLd(), faqJsonLd()]);
    expect(text).not.toMatch(/pending|completar/i);
  });

  it("ya no existe el aviso de privacidad de WhatsApp", () => {
    const text = JSON.stringify(site);
    expect(text).not.toMatch(/Usaré tu número|dato de salud|\(Meta\)/);
    expect(site.copy).not.toHaveProperty("whatsappNote");
  });

  it("ningún componente muestra marcadores de dato pendiente", () => {
    const dir = join(process.cwd(), "src", "components");
    const files = readdirSync(dir, { recursive: true, encoding: "utf8" }).filter((file) =>
      /\.tsx?$/.test(file),
    );
    expect(files.length).toBeGreaterThan(0);
    for (const file of files) {
      const source = readFileSync(join(dir, file), "utf8");
      expect(source, file).not.toMatch(/por completar|WhatsAppNote|data-pending/i);
      expect(source, file).not.toMatch(/\bPending\b/);
    }
  });

  it("rechaza datos inválidos", () => {
    const broken = { ...site, doctor: { ...site.doctor, cmp: "abc" } };
    expect(siteSchema.safeParse(broken).success).toBe(false);
  });

  it("no usa rayas largas ni dobles guiones en los textos", () => {
    const text = JSON.stringify(site);
    expect(text).not.toContain("\u2014");
    expect(text).not.toContain("--");
  });
});
