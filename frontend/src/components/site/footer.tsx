import Link from "next/link";
import { Logo } from "@/components/site/logo";
import { site } from "@/content/site";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

export function Footer() {
  const { doctor, contact, zones, copy } = site;
  return (
    <footer className="bg-paper-deep pt-12 pb-[calc(6rem+env(safe-area-inset-bottom))] text-ink sm:pt-16 sm:pb-[calc(6.5rem+env(safe-area-inset-bottom))]">
      <div className="wrap grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.2fr_1fr_1fr] lg:gap-12">
        <div className="flex flex-col items-start gap-4 sm:col-span-2 sm:gap-5 lg:col-span-1">
          <Logo size="lg" />
          <p className="font-display text-lg font-semibold text-brand-deep">
            {doctor.title}, CMP {doctor.cmp}
          </p>
        </div>

        <nav aria-label="Zonas del cuerpo">
          <h3 className="font-display text-lg font-semibold text-brand-deep">Zonas</h3>
          <ul className="mt-3 grid grid-cols-2 gap-x-4 sm:flex sm:flex-col">
            {zones.map((zone) => (
              <li key={zone.slug}>
                <Link
                  href={`/${zone.slug}`}
                  className="inline-flex min-h-11 items-center text-ink underline-offset-4 hover:text-brand hover:underline"
                >
                  {zone.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h3 className="font-display text-lg font-semibold text-brand-deep">Contacto</h3>
          <ul className="mt-3 flex flex-col">
            <li>
              <a
                href={buildWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 items-center text-ink underline-offset-4 hover:text-brand hover:underline"
              >
                WhatsApp {contact.whatsapp.display}
              </a>
            </li>
            <li>
              <a
                href={contact.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 items-center text-ink underline-offset-4 hover:text-brand hover:underline"
              >
                Instagram {contact.instagram.handle}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="wrap mt-10 sm:mt-14">
        <div className="border-t border-line pt-8">
          <p className="measure text-note text-ink-soft">{copy.disclaimer}</p>
          <p className="mt-2 text-note text-ink-soft">
            © {doctor.name}. {doctor.title}, CMP {doctor.cmp}.
          </p>
        </div>
      </div>
    </footer>
  );
}
