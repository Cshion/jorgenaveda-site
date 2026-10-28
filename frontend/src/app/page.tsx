import type { Metadata } from "next";
import { JsonLd } from "@/components/site/json-ld";
import { AboutDoctor } from "@/components/sections/about-doctor";
import { CareRoute } from "@/components/sections/care-route";
import { Contact } from "@/components/sections/contact";
import { Faq } from "@/components/sections/faq";
import { Hero } from "@/components/sections/hero";
import { ZonesSection } from "@/components/sections/zones-section";
import { faqJsonLd, physicianJsonLd } from "@/lib/seo";

export const metadata: Metadata = {
  title: { absolute: "Traumatólogo en Lima | Dr. Jorge Naveda" },
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <JsonLd data={physicianJsonLd()} />
      <JsonLd data={faqJsonLd()} />
      <Hero />
      <ZonesSection />
      <CareRoute />
      <AboutDoctor />
      <Faq />
      <Contact />
    </>
  );
}
