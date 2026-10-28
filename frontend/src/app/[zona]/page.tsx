import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ZonePage } from "@/components/zone/zone-page";
import { getZone, site } from "@/content/site";
import { alt, size } from "../opengraph-image";

type Props = { params: Promise<{ zona: string }> };

/* Solo existen las seis zonas del contenido: cualquier otra ruta responde 404. */
export const dynamicParams = false;

export function generateStaticParams() {
  return site.zones.map((zone) => ({ zona: zone.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { zona } = await params;
  const zone = getZone(zona);
  if (!zone) return {};

  const { metaTitle, metaDescription } = zone.page;
  const images = [{ url: "/opengraph-image", ...size, alt }];
  return {
    title: metaTitle,
    description: metaDescription,
    alternates: { canonical: `/${zone.slug}` },
    openGraph: {
      type: "website",
      locale: "es_PE",
      siteName: site.doctor.name,
      title: `${metaTitle} | Dr. Jorge Naveda`,
      description: metaDescription,
      url: `/${zone.slug}`,
      images,
    },
    twitter: {
      card: "summary_large_image",
      title: `${metaTitle} | Dr. Jorge Naveda`,
      description: metaDescription,
      images: [{ url: "/twitter-image", ...size, alt }],
    },
  };
}

export default async function ZoneRoute({ params }: Props) {
  const { zona } = await params;
  const zone = getZone(zona);
  if (!zone) notFound();

  return <ZonePage zone={zone} />;
}
