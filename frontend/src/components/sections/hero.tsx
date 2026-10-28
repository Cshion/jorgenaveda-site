import Image from "next/image";
import { Button } from "@/components/ui/button";
import { BrandCurves } from "@/components/site/brand-curves";
import { Reveal } from "@/components/site/reveal";
import { WhatsAppButton } from "@/components/site/whatsapp-button";
import { site } from "@/content/site";

export function Hero() {
  const { doctor } = site;
  return (
    <section aria-labelledby="inicio-titulo" className="relative overflow-hidden">
      <div className="wrap relative grid items-center gap-10 py-8 sm:gap-12 sm:py-14 lg:grid-cols-[minmax(0,1.12fr)_minmax(0,0.88fr)] lg:gap-10 lg:py-(--hero-pad-y)">
        <div className="flex min-w-0 flex-col items-start">
          <Reveal fade={false} y={14}>
            <p className="font-display text-base font-semibold text-brand sm:text-lg">
              {doctor.title}
            </p>
            <h1
              id="inicio-titulo"
              className="hero-title mt-3 font-extrabold tracking-[-0.02em] text-brand-deep sm:mt-4"
            >
              Tu bienestar es mi <span className="text-leaf-text">prioridad</span>
            </h1>
          </Reveal>

          <Reveal fade={false} y={14} delay={0.08} className="hero-lede mt-5 sm:mt-7">
            <p className="max-w-[42ch] text-lead text-ink">
              Soy el Dr. Jorge Naveda, traumatólogo. Te escucho, te
              explico qué le pasa a tu cuerpo y, cuando corresponde, empezamos por
              el tratamiento conservador.
            </p>
          </Reveal>

          <Reveal fade={false} y={14} delay={0.16} className="hero-actions mt-7 flex w-full flex-col gap-5 sm:mt-9">
            <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <WhatsAppButton size="lg" className="w-full sm:w-auto">
                {doctor.cta}
              </WhatsAppButton>
              <Button asChild variant="outline" size="lg" className="w-full sm:w-auto">
                <a href="#zonas">¿Dónde te duele?</a>
              </Button>
            </div>
            <p className="text-note font-medium text-ink-soft">
              {doctor.title}, CMP {doctor.cmp}.
            </p>
          </Reveal>
        </div>

        <Reveal
          fade={false}
          y={22}
          delay={0.12}
          className="mx-auto w-full max-w-[18rem] sm:max-w-md lg:max-w-(--hero-photo-w)"
        >
          <div className="relative mr-3 mb-3 sm:mr-6 sm:mb-6">
            <BrandCurves className="absolute top-1/2 -left-[19%] w-[135%] max-w-none -translate-y-1/2" />
            <div
              aria-hidden="true"
              className="absolute inset-0 translate-x-3 translate-y-3 rounded-t-[50%_32%] rounded-b-[2rem] bg-brand sm:translate-x-6 sm:translate-y-6"
            />
            <div className="relative aspect-[4/5] overflow-hidden rounded-t-[50%_32%] rounded-b-[2rem] bg-brand-soft ring-1 ring-line">
              <Image
                src="/images/doctor-naveda.webp"
                alt="El Dr. Jorge Naveda, traumatólogo, sonriendo con los brazos cruzados y bata blanca."
                fill
                priority
                sizes="(min-width: 1024px) 38vw, (min-width: 640px) 448px, 288px"
                className="object-cover object-top"
              />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
