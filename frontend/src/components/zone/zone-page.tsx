import Link from "next/link";
import { ArrowLeft, ArrowRight, TriangleAlert } from "lucide-react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { JsonLd } from "@/components/site/json-ld";
import { Reveal } from "@/components/site/reveal";
import { WhatsAppButton } from "@/components/site/whatsapp-button";
import { ZoneIcon } from "@/components/site/zone-icons";
import type { Zone } from "@/content/schema";
import { site } from "@/content/site";
import { zoneBreadcrumbJsonLd } from "@/lib/seo";

const sectionTitle = "text-title font-bold text-brand-deep";

function Bullets({ items }: { items: string[] }) {
  return (
    <ul className="flex flex-col gap-3">
      {items.map((item) => (
        <li key={item} className="flex gap-3">
          <span aria-hidden="true" className="mt-[0.7em] size-2 shrink-0 rounded-full bg-leaf" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

/** Plantilla única para las seis subpáginas de zona. */
export function ZonePage({ zone }: { zone: Zone }) {
  const { page } = zone;
  const others = site.zones.filter((item) => item.slug !== zone.slug);

  return (
    <article>
      <JsonLd data={zoneBreadcrumbJsonLd(zone)} />

      <header className="bg-paper-deep">
        <div className="wrap grid items-center gap-8 py-8 sm:gap-10 sm:py-14 lg:grid-cols-[minmax(0,1fr)_14rem] lg:gap-16 lg:py-20">
          <div className="flex min-w-0 flex-col items-start">
            <Breadcrumb>
              <BreadcrumbList className="text-base">
                <BreadcrumbItem>
                  <BreadcrumbLink asChild>
                    <Link href="/" className="inline-flex min-h-11 min-w-11 items-center justify-center text-brand underline underline-offset-4">
                      Inicio
                    </Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage className="font-medium">{zone.name}</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>

            <Reveal fade={false} y={14} className="mt-4 sm:mt-6">
              <h1 className="max-w-[24ch] text-heading font-extrabold text-brand-deep">
                {page.h1}
              </h1>
              <p className="mt-4 max-w-[48ch] text-lead text-ink sm:mt-6">{page.lede}</p>
            </Reveal>

            <div className="mt-7 flex w-full flex-col items-start gap-4 sm:mt-8">
              <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-6">
                <WhatsAppButton size="lg" message={zone.whatsappMessage} className="w-full sm:w-auto">
                  {site.doctor.cta}
                </WhatsAppButton>
                <Link
                  href="/#zonas"
                  className="group inline-flex min-h-12 items-center gap-2 font-display text-lg font-semibold text-brand underline decoration-leaf decoration-2 underline-offset-[6px] hover:text-brand-deep"
                >
                  <ArrowLeft
                    className="size-5 shrink-0 transition-transform duration-200 ease-out-quart group-hover:-translate-x-1"
                    aria-hidden="true"
                  />
                  Volver a ¿Dónde te duele?
                </Link>
              </div>
            </div>
          </div>

          <div className="hidden justify-self-center lg:block" aria-hidden="true">
            <div className="grid size-52 place-items-center rounded-full bg-paper">
              <ZoneIcon slug={zone.slug} className="size-24 text-brand" />
            </div>
          </div>
        </div>
      </header>

      <div className="wrap grid gap-12 section-pad lg:grid-cols-[minmax(0,1fr)_21rem] lg:gap-20">
        <div className="flex min-w-0 flex-col gap-10 sm:gap-14">
          <section aria-labelledby="que-pasa">
            <h2 id="que-pasa" className={sectionTitle}>
              Qué pasa en {zone.withArticle}
            </h2>
            <div className="measure mt-4 flex flex-col gap-4">
              {page.explanation.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </section>

          <section aria-labelledby="problemas">
            <h2 id="problemas" className={sectionTitle}>
              Problemas frecuentes
            </h2>
            <div className="measure mt-4">
              <Bullets items={zone.commonProblems} />
            </div>
          </section>

          <section aria-labelledby="conservador">
            <h2 id="conservador" className={sectionTitle}>
              Primero, tratamiento conservador
            </h2>
            <p className="measure mt-4">
              Antes de pensar en cirugía, se revisan opciones que no la requieren. Lo que
              corresponde en tu caso se define en la consulta, después de evaluarte.
            </p>
            <ol className="measure mt-6 flex flex-col gap-4">
              {page.conservativeSteps.map((step, index) => (
                <li key={step} className="flex gap-4">
                  <span
                    aria-hidden="true"
                    className="grid size-8 shrink-0 place-items-center rounded-full bg-brand-soft font-display text-base font-bold text-brand-deep"
                  >
                    {index + 1}
                  </span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>
          </section>

          <section aria-labelledby="cuando-consultar">
            <h2 id="cuando-consultar" className={sectionTitle}>
              Cuándo consultar
            </h2>
            <p className="measure mt-4">Conviene agendar una consulta si notas:</p>
            <div className="measure mt-4">
              <Bullets items={page.consultSigns} />
            </div>

            <div className="measure mt-8 rounded-2xl border-2 border-destructive bg-[oklch(0.97_0.02_27)] p-5 sm:p-6">
              <h3 className="flex items-center gap-3 font-display text-lg font-semibold text-destructive">
                <TriangleAlert className="size-6 shrink-0" aria-hidden="true" />
                Acude a emergencias de inmediato si hay:
              </h3>
              <ul className="mt-4 flex flex-col gap-3">
                {page.urgentSigns.map((sign) => (
                  <li key={sign} className="flex gap-3">
                    <span
                      aria-hidden="true"
                      className="mt-[0.7em] size-2 shrink-0 rounded-full bg-destructive"
                    />
                    <span>{sign}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          <p className="measure text-note text-ink-soft">{site.copy.disclaimer}</p>
        </div>

        <aside className="flex min-w-0 flex-col gap-8 sm:gap-10 lg:sticky lg:top-28 lg:self-start" aria-label="Agenda y otras zonas">
          <div className="surface-brand flex flex-col items-start gap-5 rounded-[1.75rem] p-6 sm:rounded-[2rem] sm:p-8">
            <h2 className="text-title font-bold">¿Quieres que lo revisemos?</h2>
            <p className="text-brand-soft">
              Escríbeme por WhatsApp con tu zona de molestia y acordamos tu consulta.
            </p>
            <WhatsAppButton size="lg" message={zone.whatsappMessage} className="w-full">
              {site.doctor.cta}
            </WhatsAppButton>
          </div>

          <nav aria-labelledby="otras-zonas">
            <h2 id="otras-zonas" className="font-display text-lg font-semibold text-brand-deep">
              Otras zonas
            </h2>
            <ul className="mt-2 flex flex-col">
              {others.map((item) => (
                <li key={item.slug} className="border-b border-line last:border-b-0">
                  <Link
                    href={`/${item.slug}`}
                    className="group flex min-h-12 items-center gap-3 py-2 font-display text-lg font-semibold text-brand hover:text-brand-deep"
                  >
                    <ZoneIcon slug={item.slug} className="size-8 shrink-0" />
                    <span className="flex-1">{item.name}</span>
                    <ArrowRight
                      className="size-5 transition-transform duration-200 ease-out-quart group-hover:translate-x-1"
                      aria-hidden="true"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </aside>
      </div>
    </article>
  );
}
