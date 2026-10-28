import { z } from "zod";

/*
 * Dominio definitivo pendiente. Mientras NEXT_PUBLIC_SITE_URL no esté definida se usa localhost
 * y el sitio se publica como no indexable (ver robots.ts y layout.tsx).
 */
const DEFAULT_SITE_URL = "http://localhost:3000";

const siteUrlSchema = z
  .url()
  .transform((value) => value.replace(/\/+$/, ""));

export function resolveSiteUrl(raw: string | undefined) {
  const value = raw?.trim();
  return {
    siteUrl: siteUrlSchema.parse(value || DEFAULT_SITE_URL),
    isSiteUrlConfigured: Boolean(value),
  };
}

/* Se lee con la forma literal process.env.NEXT_PUBLIC_* para que Next la reemplace en el build. */
export const { siteUrl, isSiteUrlConfigured } = resolveSiteUrl(
  process.env.NEXT_PUBLIC_SITE_URL,
);
