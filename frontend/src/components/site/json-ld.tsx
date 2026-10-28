import type { Thing, WithContext } from "schema-dts";

/** Serializa JSON-LD escapando "<" para que ningún texto cierre el script. */
export function JsonLd({ data }: { data: WithContext<Thing> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}
