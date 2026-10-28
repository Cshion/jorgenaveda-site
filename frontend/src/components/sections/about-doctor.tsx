import Image from "next/image";
import { Reveal } from "@/components/site/reveal";
import { known } from "@/content/schema";
import { site } from "@/content/site";

const row = "grid gap-1 border-t border-line py-4 sm:grid-cols-[9rem_1fr] sm:gap-6";
const label = "font-display text-base font-semibold text-brand";

export function AboutDoctor() {
  const { doctor, pillars } = site;
  const bio = known(doctor.bio);
  const education = known(doctor.education);
  const rne = known(doctor.rne);
  const track = known(doctor.track);

  return (
    <section
      id="doctor"
      aria-labelledby="doctor-titulo"
      className="section-pad bg-paper-deep"
    >
      <div className="wrap grid gap-10 sm:gap-14 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:items-center lg:gap-20">
        <Reveal>
          <h2 id="doctor-titulo" className="text-heading font-extrabold text-brand-deep">
            Sobre el doctor
          </h2>
          <p className="mt-6 max-w-[40ch] text-lead text-ink">
            Mi prioridad es tu bienestar. Empiezo escuchándote, te explico con claridad
            qué encuentro y, cuando corresponde, el primer paso es el tratamiento
            conservador.
          </p>
          {bio ? <p className="measure mt-4 text-ink">{bio}</p> : null}
        </Reveal>

        <Reveal delay={0.08}>
          <div className="rounded-[1.75rem] bg-paper p-6 sm:rounded-[2rem] sm:p-10">
            <div className="flex items-center gap-5 sm:gap-8">
              <Image
                src="/brand/simbolo-rodilla.svg"
                alt=""
                width={160}
                height={285}
                unoptimized
                className="h-24 w-auto shrink-0 sm:h-36"
              />
              <div className="flex min-w-0 flex-col items-start gap-1.5">
                <p className="font-display text-title font-bold text-brand-deep">{doctor.name}</p>
                <p className="text-lead text-ink">{doctor.title}</p>
                <p className="text-ink-soft">{doctor.specialty}</p>
                <p className="mt-2 inline-flex rounded-full bg-brand-soft px-4 py-1.5 font-display text-base font-semibold text-brand-deep">
                  CMP {doctor.cmp}
                </p>
              </div>
            </div>

            <div className="mt-8 border-t border-line pt-6">
              <h3 className="font-display text-lg font-semibold text-brand">Mi forma de trabajar</h3>
              <ul className="mt-4 grid gap-3 sm:grid-cols-3 sm:gap-6">
                {pillars.map((pillar) => (
                  <li key={pillar.id} className="flex gap-3 font-display font-semibold text-brand-deep">
                    <span
                      aria-hidden="true"
                      className="mt-[0.6em] size-2 shrink-0 rounded-full bg-leaf"
                    />
                    {pillar.title}
                  </li>
                ))}
              </ul>
            </div>

            {rne || education || track ? (
              <dl className="mt-6 flex flex-col border-b border-line">
                {rne ? (
                  <div className={row}>
                    <dt className={label}>Registro RNE</dt>
                    <dd>{rne}</dd>
                  </div>
                ) : null}
                {education ? (
                  <div className={row}>
                    <dt className={label}>Formación</dt>
                    <dd>
                      <ul className="flex flex-col gap-1">
                        {education.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </dd>
                  </div>
                ) : null}
                {track ? (
                  <div className={row}>
                    <dt className={label}>Trayectoria</dt>
                    <dd>{track}</dd>
                  </div>
                ) : null}
              </dl>
            ) : null}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
