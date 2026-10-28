import { describe, expect, it } from "vitest";
import { site } from "./site";

describe("contenido de zonas", () => {
  it("cada zona tiene contenido completo para el selector y la página", () => {
    for (const zone of site.zones) {
      expect(zone.commonProblems.length, zone.slug).toBeGreaterThanOrEqual(6);
      expect(zone.page.explanation.length, zone.slug).toBeGreaterThanOrEqual(4);
      expect(zone.page.conservativeSteps.length, zone.slug).toBeGreaterThanOrEqual(5);
      expect(zone.page.consultSigns.length, zone.slug).toBeGreaterThanOrEqual(4);
      expect(zone.page.urgentSigns.length, zone.slug).toBeGreaterThanOrEqual(4);
      expect(zone.conservative, zone.slug).toMatch(/radiograf|resonancia/i);
    }
  });

  it("el resumen del selector es breve y completo en las seis zonas", () => {
    const wordCount = (text: string) => text.trim().split(/\s+/).length;
    for (const zone of site.zones) {
      const { summary } = zone;
      expect(summary.problems.length, zone.slug).toBeGreaterThanOrEqual(4);
      expect(summary.problems.length, zone.slug).toBeLessThanOrEqual(5);
      expect(summary.consult.length, zone.slug).toBeLessThanOrEqual(3);
      expect(summary.urgent.length, zone.slug).toBeLessThanOrEqual(3);
      expect(summary.urgent.length, zone.slug).toBeGreaterThanOrEqual(2);
      expect(wordCount(summary.intro), zone.slug).toBeLessThanOrEqual(25);
      for (const problem of summary.problems) {
        expect(wordCount(problem.text), problem.name).toBeLessThanOrEqual(14);
      }
      expect(summary.first.split(/(?<=[.!?])\s+/).length, zone.slug).toBeLessThanOrEqual(2);
      expect(summary.first, zone.slug).toMatch(/solo con indicación médica/);
    }
  });

  it("el resumen empieza las urgencias por lo más crítico", () => {
    const summary = (slug: string) => site.zones.find((zone) => zone.slug === slug)!.summary;
    expect(summary("columna").urgent[0]).toMatch(/orina/);
    expect(summary("hombro").urgent[0]).toMatch(/pecho/);
    expect(summary("hombro").urgent[0]).toMatch(/SAMU/);
    expect(summary("mano-muneca").urgent[0]).toMatch(/pálidos/);
    expect(summary("pie-tobillo").urgent.join(" ")).toMatch(/Pantorrilla/);
  });

  it("las metadescripciones caben en 160 caracteres y no se repiten", () => {
    const descriptions = site.zones.map((zone) => zone.page.metaDescription);
    for (const description of descriptions) {
      expect(description.length).toBeLessThanOrEqual(160);
    }
    expect(new Set(descriptions).size).toBe(descriptions.length);
    const h1s = site.zones.map((zone) => zone.page.h1);
    expect(new Set(h1s).size).toBe(h1s.length);
  });

  it("mantiene la advertencia de medicamentos solo con indicación médica", () => {
    for (const zone of site.zones) {
      expect(zone.page.conservativeSteps.join(" "), zone.slug).toMatch(
        /solo con indicación médica/,
      );
    }
  });

  it("incluye señales de alarma clave por zona", () => {
    const urgent = (slug: string) =>
      site.zones.find((zone) => zone.slug === slug)!.page.urgentSigns.join(" ");
    expect(urgent("columna")).toMatch(/orina/);
    expect(urgent("columna")).toMatch(/silla de montar/);
    expect(urgent("hombro")).toMatch(/pecho/);
    expect(urgent("pie-tobillo")).toMatch(/Pantorrilla/);
    expect(urgent("mano-muneca")).toMatch(/pálidos/);
  });
});

describe("preguntas frecuentes", () => {
  it("tiene las preguntas clave, con ids únicos y respuestas completas", () => {
    const ids = site.faqs.map((faq) => faq.id);
    expect(new Set(ids).size).toBe(ids.length);
    expect(ids).toEqual(
      expect.arrayContaining([
        "cuando-acudir",
        "urgencia",
        "cirugia",
        "estudios",
        "hielo-calor",
        "cuanto-tarda",
        "deporte",
        "infiltracion",
        "diferencias",
        "como-agendar",
        "que-llevar",
        "whatsapp",
        "donde",
      ]),
    );
    for (const faq of site.faqs) {
      expect(faq.question.trim().endsWith("?"), faq.id).toBe(true);
      expect(faq.answer.length, faq.id).toBeGreaterThan(80);
    }
  });

  it("solo menciona datos confirmados de contacto y no inventa horarios", () => {
    const text = site.faqs.map((faq) => faq.answer).join(" ");
    expect(text).toContain("+51 999 658 288");
    expect(text).toContain("Av. Defensores del Morro 2007");
    expect(text).toContain("SAMU (106)");
    expect(text).not.toMatch(/\d{1,2}\s?(am|pm|:\d{2})/i);
  });
});

describe("ubicación", () => {
  it("el distrito solo aparece en los datos de contacto y en la pregunta de dónde queda", () => {
    const { contact, faqs, ...rest } = site;
    const text = JSON.stringify([rest, faqs.filter((faq) => faq.id !== "donde")]);
    expect(text).not.toMatch(/chorrillos/i);
    expect(contact.address.district).toBe("Chorrillos");
  });
});

describe("tono y cumplimiento", () => {
  it("no cita fuentes ni promete resultados ni muestra precios", () => {
    const text = JSON.stringify([site.zones, site.faqs]);
    expect(text).not.toMatch(/https?:|www\./i);
    expect(text).not.toMatch(/según (estudios|la ciencia)|estudios demuestran/i);
    expect(text).not.toMatch(/orthoinfo|mayo clinic|\bnhs\b|medlineplus|cleveland/i);
    expect(text).not.toMatch(/\bcuramos\b|garantiz|100 ?%|S\/\s?\d|promoci/i);
  });
});
