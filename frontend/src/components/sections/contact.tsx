import { ExternalLink } from "lucide-react";
import { WhatsAppButton } from "@/components/site/whatsapp-button";
import { known } from "@/content/schema";
import { site } from "@/content/site";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

const row = "grid min-w-0 gap-1 border-t border-brand-deep py-4 sm:grid-cols-[9rem_1fr] sm:items-baseline sm:gap-6 sm:py-5";
const label = "font-display text-base font-semibold text-brand-soft";
const link =
  "inline-flex min-h-11 items-center gap-2 underline decoration-leaf decoration-2 underline-offset-[6px] hover:text-brand-soft";

export function Contact() {
  const { contact, doctor } = site;
  const clinicName = known(contact.clinicName);
  const hours = known(contact.hours);
  const mapsUrl = known(contact.mapsUrl);

  return (
    <section
      id="contacto"
      aria-labelledby="contacto-titulo"
      className="surface-brand section-pad mx-2 mt-2 rounded-t-[1.75rem] sm:mx-4 lg:rounded-t-[3rem]"
    >
      <div className="wrap grid gap-10 lg:grid-cols-[minmax(0,6fr)_minmax(0,6fr)] lg:gap-20">
        <div className="flex flex-col items-start gap-5 sm:gap-6">
          <h2 id="contacto-titulo" className="text-heading font-extrabold">
            {doctor.cta}
          </h2>
          <p className="max-w-[40ch] text-lead text-brand-soft">
            La agenda se coordina por WhatsApp. Escríbeme con la zona que te molesta y
            acordamos fecha y hora.
          </p>
          <WhatsAppButton size="lg" className="w-full sm:w-auto">
            {doctor.cta}
          </WhatsAppButton>
        </div>

        <dl className="flex flex-col border-b border-brand-deep">
          <div className={row}>
            <dt className={label}>Dirección</dt>
            <dd>
              {contact.address.street}, {contact.address.district}, {contact.address.city}
            </dd>
          </div>
          <div className={row}>
            <dt className={label}>WhatsApp</dt>
            <dd>
              <a href={buildWhatsAppUrl()} target="_blank" rel="noopener noreferrer" className={link}>
                {contact.whatsapp.display}
                <span className="sr-only"> (abre WhatsApp en otra pestaña)</span>
              </a>
            </dd>
          </div>
          <div className={row}>
            <dt className={label}>Instagram</dt>
            <dd>
              <a href={contact.instagram.url} target="_blank" rel="noopener noreferrer" className={link}>
                {contact.instagram.handle}
                <span className="sr-only"> (abre Instagram en otra pestaña)</span>
              </a>
            </dd>
          </div>
          {clinicName ? (
            <div className={row}>
              <dt className={label}>Consultorio</dt>
              <dd>{clinicName}</dd>
            </div>
          ) : null}
          {hours ? (
            <div className={row}>
              <dt className={label}>Horarios</dt>
              <dd>{hours}</dd>
            </div>
          ) : null}
          {mapsUrl ? (
            <div className={row}>
              <dt className={label}>Mapa</dt>
              <dd>
                <a href={mapsUrl} target="_blank" rel="noopener noreferrer" className={link}>
                  Ver en Google Maps
                  <ExternalLink className="size-4" aria-hidden="true" />
                  <span className="sr-only"> (abre en otra pestaña)</span>
                </a>
              </dd>
            </div>
          ) : null}
        </dl>
      </div>
    </section>
  );
}
