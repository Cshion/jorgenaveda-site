import { ZoneSelector, type ZoneView } from "@/components/sections/zone-selector";
import { site } from "@/content/site";

export function ZonesSection() {
  const zones: ZoneView[] = site.zones.map((zone) => ({
    slug: zone.slug,
    name: zone.name,
    summary: zone.summary,
    whatsappMessage: zone.whatsappMessage,
  }));

  return (
    <section
      id="zonas"
      aria-labelledby="zonas-titulo"
      className="surface-brand mx-2 rounded-[1.75rem] section-pad sm:mx-4 lg:rounded-[3rem]"
    >
      <div className="wrap">
        <div className="grid gap-4 lg:grid-cols-[1.1fr_1fr] lg:items-end lg:gap-16">
          <h2 id="zonas-titulo" className="text-heading font-extrabold">
            <span id="donde-te-duele" aria-hidden="true" />
            ¿Dónde te duele?
          </h2>
          <p className="max-w-[44ch] text-lead text-brand-soft">
            Elige la zona. Te cuento qué suele pasar, qué se prueba primero y cuándo
            conviene consultar.
          </p>
        </div>
        <div className="mt-8 lg:mt-14">
          <ZoneSelector zones={zones} />
        </div>
      </div>
    </section>
  );
}
