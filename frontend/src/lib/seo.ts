import type {
  BreadcrumbList,
  FAQPage,
  Physician,
  WithContext,
} from "schema-dts";
import { site } from "@/content/site";
import type { Zone } from "@/content/schema";
import { siteUrl } from "@/lib/env";

const { doctor, contact } = site;

export const absoluteUrl = (path = "/") => `${siteUrl}${path === "/" ? "" : path}`;

/* Solo datos confirmados: sin horarios, coordenadas ni rango de precios. */
export function physicianJsonLd(): WithContext<Physician> {
  return {
    "@context": "https://schema.org",
    "@type": "Physician",
    "@id": `${siteUrl}/#physician`,
    name: doctor.name,
    description: `${doctor.title}, ${doctor.specialty}, en ${contact.address.city}.`,
    url: siteUrl,
    image: `${siteUrl}/images/doctor-naveda.webp`,
    medicalSpecialty: "https://schema.org/Musculoskeletal",
    knowsAbout: doctor.specialty,
    identifier: {
      "@type": "PropertyValue",
      propertyID: "CMP",
      name: "Colegio Médico del Perú (CMP)",
      value: doctor.cmp,
    },
    telephone: `+${contact.whatsapp.number}`,
    address: {
      "@type": "PostalAddress",
      streetAddress: contact.address.street,
      addressLocality: contact.address.district,
      addressRegion: contact.address.city,
      addressCountry: contact.address.country,
    },
    sameAs: [contact.instagram.url],
  };
}

export function faqJsonLd(): WithContext<FAQPage> {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: site.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };
}

export function zoneBreadcrumbJsonLd(zone: Zone): WithContext<BreadcrumbList> {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Inicio",
        item: absoluteUrl("/"),
      },
      {
        "@type": "ListItem",
        position: 2,
        name: zone.name,
        item: absoluteUrl(`/${zone.slug}`),
      },
    ],
  };
}
