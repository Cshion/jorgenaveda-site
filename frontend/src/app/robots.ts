import type { MetadataRoute } from "next";
import { isSiteUrlConfigured, siteUrl } from "@/lib/env";

/* Sin dominio definido el sitio no se indexa y no se anuncia un sitemap de localhost. */
export default function robots(): MetadataRoute.Robots {
  if (!isSiteUrlConfigured) {
    return { rules: { userAgent: "*", disallow: "/" } };
  }
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
