import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <section className="wrap section-pad flex flex-col items-start gap-6">
      <h1 className="text-heading font-extrabold text-brand-deep">No encontramos esta página</h1>
      <p className="measure text-lead text-ink-soft">
        Puede que el enlace haya cambiado. Vuelve al inicio y elige la zona que te molesta.
      </p>
      <Button asChild size="lg">
        <Link href="/#zonas">Ir a ¿Dónde te duele?</Link>
      </Button>
    </section>
  );
}
