import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Reveal } from "@/components/site/reveal";
import { WhatsAppButton } from "@/components/site/whatsapp-button";
import { site } from "@/content/site";

export function Faq() {
  return (
    <section id="preguntas" aria-labelledby="preguntas-titulo" className="section-pad">
      <div className="wrap grid gap-8 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-20">
        <div className="flex flex-col items-start gap-5 sm:gap-6 lg:sticky lg:top-28 lg:self-start">
          <h2 id="preguntas-titulo" className="text-heading font-extrabold text-brand-deep">
            Preguntas frecuentes
          </h2>
          <p className="max-w-[36ch] text-lead text-ink-soft">
            ¿No ves tu duda? Escríbeme y la resolvemos al coordinar tu consulta.
          </p>
          <WhatsAppButton size="lg" className="w-full sm:w-auto">
            Escribir por WhatsApp
          </WhatsAppButton>
        </div>

        <Reveal>
          <Accordion type="single" collapsible className="border-t border-line">
            {site.faqs.map((faq) => (
              <AccordionItem key={faq.id} value={faq.id} className="border-line">
                <AccordionTrigger>{faq.question}</AccordionTrigger>
                <AccordionContent>
                  <p className="measure text-ink-soft">{faq.answer}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  );
}
