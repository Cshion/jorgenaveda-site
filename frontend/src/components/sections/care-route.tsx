import { Reveal } from "@/components/site/reveal";
import { site } from "@/content/site";
import { cn } from "@/lib/utils";

const stagger = ["", "md:mt-14", "md:mt-28"];

export function CareRoute() {
  const { pillars, services } = site;
  return (
    <section id="ruta" aria-labelledby="ruta-titulo" className="section-pad">
      <div className="wrap">
        <div className="max-w-3xl">
          <h2 id="ruta-titulo" className="text-heading font-extrabold text-brand-deep">
            Ruta de atención
          </h2>
          <p className="mt-4 max-w-[46ch] text-lead text-ink-soft">
            Tres pasos, sin prisa y sin palabras difíciles.
          </p>
        </div>

        <ol className="relative mt-10 grid gap-10 sm:mt-14 md:grid-cols-3 md:gap-8 lg:gap-10">
          {pillars.map((pillar, index) => (
            <li key={pillar.id} className={cn(stagger[index])}>
              <Reveal delay={index * 0.08}>
                <span
                  aria-hidden="true"
                  className="block font-display text-[4rem] leading-[0.85] font-extrabold text-brand-soft sm:text-[5.5rem]"
                >
                  {index + 1}
                </span>
                <h3 className="mt-3 text-[clamp(1.5rem,1.2rem+1.2vw,2.25rem)] leading-[1.1] font-bold text-brand">{pillar.verb}</h3>
                <p className="mt-2 font-display text-base font-semibold text-leaf-text">
                  {pillar.title}
                </p>
                <p className="mt-3 max-w-[34ch] text-ink-soft">{pillar.description}</p>
              </Reveal>
            </li>
          ))}
        </ol>

        <div className="mt-16 grid gap-6 sm:mt-24 sm:gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,2fr)] lg:gap-16">
          <h3 className="text-title font-bold text-brand-deep">En qué puedo ayudarte</h3>
          <dl className="grid gap-x-12 gap-y-0 sm:grid-cols-2">
            {services.map((service) => (
              <div key={service.title} className="border-t border-line py-5 sm:py-6">
                <dt className="font-display text-lg font-semibold text-brand">{service.title}</dt>
                <dd className="mt-2 max-w-[40ch] text-ink-soft">{service.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
