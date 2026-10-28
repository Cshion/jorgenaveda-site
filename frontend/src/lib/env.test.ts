import { afterEach, describe, expect, it, vi } from "vitest";
import { resolveSiteUrl } from "./env";

describe("resolveSiteUrl", () => {
  it("sin variable usa localhost y no cuenta como configurada", () => {
    expect(resolveSiteUrl(undefined)).toEqual({
      siteUrl: "http://localhost:3000",
      isSiteUrlConfigured: false,
    });
    expect(resolveSiteUrl("  ").isSiteUrlConfigured).toBe(false);
  });

  it("con variable la usa sin barra final y cuenta como configurada", () => {
    expect(resolveSiteUrl("https://example.com/")).toEqual({
      siteUrl: "https://example.com",
      isSiteUrlConfigured: true,
    });
  });
});

describe("robots", () => {
  afterEach(() => {
    vi.unstubAllEnvs();
    vi.resetModules();
  });

  async function loadRobots(siteUrl: string) {
    vi.resetModules();
    vi.stubEnv("NEXT_PUBLIC_SITE_URL", siteUrl);
    return (await import("../app/robots")).default();
  }

  it("sin dominio bloquea todo y no anuncia sitemap", async () => {
    const result = await loadRobots("");
    expect(result.rules).toEqual({ userAgent: "*", disallow: "/" });
    expect(result.sitemap).toBeUndefined();
  });

  it("con dominio permite indexar y anuncia el sitemap de ese dominio", async () => {
    const result = await loadRobots("https://example.com");
    expect(result.rules).toEqual({ userAgent: "*", allow: "/" });
    expect(result.sitemap).toBe("https://example.com/sitemap.xml");
  });
});
