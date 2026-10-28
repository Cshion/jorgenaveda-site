import type { MetadataRoute } from "next";
import { site } from "@/content/site";
import { absoluteUrl } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return [
    { url: absoluteUrl("/"), lastModified },
    ...site.zones.map((zone) => ({
      url: absoluteUrl(`/${zone.slug}`),
      lastModified,
    })),
  ];
}
