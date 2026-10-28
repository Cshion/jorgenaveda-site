import { z } from "zod";

/** Dato que todavía no se conoce. Nunca se muestra en el sitio: se oculta hasta que se complete. */
export const pendingSchema = z.object({
  pending: z.literal(true),
  label: z.string().min(1),
});

export type Pending = z.infer<typeof pendingSchema>;

export const maybe = <T extends z.ZodType>(schema: T) =>
  z.union([schema, pendingSchema]);

export type Maybe<T> = T | Pending;

export const isPending = (value: unknown): value is Pending =>
  typeof value === "object" &&
  value !== null &&
  "pending" in value &&
  (value as { pending: unknown }).pending === true;

export const pending = (label = "Por completar"): Pending => ({
  pending: true,
  label,
});

/** Valor real o null si todavía está pendiente. Úsalo antes de mostrar o publicar un dato. */
export const known = <T>(value: Maybe<T>): T | null => (isPending(value) ? null : value);

export const zoneSlugs = [
  "rodilla",
  "hombro",
  "columna",
  "cadera",
  "mano-muneca",
  "pie-tobillo",
] as const;

export const zoneSlugSchema = z.enum(zoneSlugs);
export type ZoneSlug = z.infer<typeof zoneSlugSchema>;

const nonEmpty = z.string().trim().min(1);
const words = (text: string) => text.trim().split(/\s+/).length;
const maxWords = (limit: number) =>
  nonEmpty.refine((text) => words(text) <= limit, `Máximo ${limit} palabras`);
const sentences = (text: string) => text.split(/(?<=[.!?])\s+/).length;

/** Versión corta de una zona para el panel de la portada. */
export const zoneSummarySchema = z.object({
  intro: maxWords(25),
  problems: z
    .array(z.object({ name: maxWords(6), text: maxWords(14) }))
    .min(4)
    .max(5),
  first: maxWords(40).refine((text) => sentences(text) <= 2, "Máximo 2 frases"),
  consult: z.array(maxWords(16)).min(2).max(3),
  urgent: z.array(maxWords(18)).min(2).max(3),
});

export const zoneSchema = z.object({
  slug: zoneSlugSchema,
  name: nonEmpty,
  /** Forma para frases: "la rodilla", "el hombro". */
  withArticle: nonEmpty,
  intro: nonEmpty,
  commonProblems: z.array(nonEmpty).min(3),
  conservative: nonEmpty,
  whenToConsult: nonEmpty,
  summary: zoneSummarySchema,
  page: z.object({
    metaTitle: nonEmpty,
    metaDescription: nonEmpty.max(170),
    h1: nonEmpty,
    lede: nonEmpty,
    explanation: z.array(nonEmpty).min(1),
    conservativeSteps: z.array(nonEmpty).min(3),
    consultSigns: z.array(nonEmpty).min(2),
    urgentSigns: z.array(nonEmpty).min(3),
  }),
  whatsappMessage: nonEmpty,
});

export type Zone = z.infer<typeof zoneSchema>;

export const faqSchema = z.object({
  id: z.string().regex(/^[a-z0-9-]+$/),
  question: nonEmpty,
  answer: nonEmpty,
});

export const pillarSchema = z.object({
  id: z.string().regex(/^[a-z0-9-]+$/),
  title: nonEmpty,
  /** Verbo en primera persona que lo vuelve un paso de la ruta. */
  verb: nonEmpty,
  description: nonEmpty,
});

export const serviceSchema = z.object({
  title: nonEmpty,
  description: nonEmpty,
});

export const siteSchema = z.object({
  doctor: z.object({
    name: nonEmpty,
    title: nonEmpty,
    specialty: nonEmpty,
    cmp: z.string().regex(/^\d{4,6}$/),
    claim: nonEmpty,
    cta: nonEmpty,
    bio: maybe(nonEmpty),
    education: maybe(z.array(nonEmpty).min(1)),
    rne: maybe(nonEmpty),
    track: maybe(nonEmpty),
  }),
  contact: z.object({
    whatsapp: z.object({
      display: nonEmpty,
      number: z.string().regex(/^\d{11}$/),
    }),
    address: z.object({
      street: nonEmpty,
      district: nonEmpty,
      city: nonEmpty,
      country: z.string().length(2),
    }),
    instagram: z.object({
      handle: nonEmpty,
      url: z.url(),
    }),
    clinicName: maybe(nonEmpty),
    hours: maybe(nonEmpty),
    mapsUrl: maybe(z.url()),
  }),
  services: z.array(serviceSchema).length(4),
  pillars: z.array(pillarSchema).length(3),
  zones: z
    .array(zoneSchema)
    .length(zoneSlugs.length)
    .refine(
      (zones) => new Set(zones.map((zone) => zone.slug)).size === zones.length,
      "Cada zona debe tener un slug único",
    ),
  faqs: z.array(faqSchema).min(5),
  copy: z.object({
    disclaimer: nonEmpty,
    defaultWhatsappMessage: nonEmpty,
  }),
});

export type Site = z.infer<typeof siteSchema>;

/** Rutas de los campos pendientes, por ejemplo "doctor.bio". */
export function collectPending(value: unknown, path = ""): string[] {
  if (isPending(value)) return [path];
  if (Array.isArray(value)) {
    return value.flatMap((item, index) => collectPending(item, `${path}[${index}]`));
  }
  if (typeof value === "object" && value !== null) {
    return Object.entries(value).flatMap(([key, child]) =>
      collectPending(child, path ? `${path}.${key}` : key),
    );
  }
  return [];
}
