import { describe, expect, it } from "vitest";
import {
  DEFAULT_WHATSAPP_MESSAGE,
  WHATSAPP_NUMBER,
  buildWhatsAppUrl,
} from "./whatsapp";

describe("buildWhatsAppUrl", () => {
  it("apunta al número del doctor en wa.me", () => {
    const url = new URL(buildWhatsAppUrl());
    expect(url.origin).toBe("https://wa.me");
    expect(url.pathname).toBe(`/${WHATSAPP_NUMBER}`);
    expect(WHATSAPP_NUMBER).toBe("51999658288");
  });

  it("usa el mensaje por defecto cuando no hay mensaje o está vacío", () => {
    expect(new URL(buildWhatsAppUrl()).searchParams.get("text")).toBe(
      DEFAULT_WHATSAPP_MESSAGE,
    );
    expect(new URL(buildWhatsAppUrl("   ")).searchParams.get("text")).toBe(
      DEFAULT_WHATSAPP_MESSAGE,
    );
  });

  it("codifica tildes, espacios y signos sin perder el texto", () => {
    const message = "Hola Dr. Naveda, tengo molestias en la rodilla & el tobillo. ¿Atienden?";
    const url = buildWhatsAppUrl(message);
    expect(url).toContain(encodeURIComponent(message));
    expect(url).not.toMatch(/\s/);
    expect(new URL(url).searchParams.get("text")).toBe(message);
  });
});
