# Sitio del Dr. Jorge Naveda

Sitio informativo (Next.js 16, React 19, TypeScript, Tailwind 4, shadcn/ui) del traumatólogo
Dr. Jorge Naveda, Lima. Todo se genera de forma estática; la única acción es escribir
por WhatsApp. Producto y tono: ver `../PRODUCT.md`.

## Comandos

```bash
npm ci
npm run dev         # desarrollo en http://localhost:3000
npm run lint
npm run typecheck   # tsc --noEmit
npm run test        # vitest run
npm run build
npm run start -- --hostname 127.0.0.1 --port 3107   # requiere build previo
```

Requiere Node.js 20.9 o posterior (probado con Node 24). El build descarga Sora y Onest desde
Google Fonts, por lo que necesita red la primera vez.

## Variable de entorno

| Variable | Por defecto | Uso |
| --- | --- | --- |
| `NEXT_PUBLIC_SITE_URL` | sin definir (usa `http://localhost:3000` internamente) | URL base para canónicas, sitemap, robots, Open Graph y JSON-LD. |

El dominio definitivo está pendiente. **Mientras `NEXT_PUBLIC_SITE_URL` no esté definida, el sitio no es
indexable**: `robots.txt` responde `Disallow: /` sin línea de sitemap y el HTML lleva
`<meta name="robots" content="noindex, nofollow">`. Al definirla (por ejemplo
`NEXT_PUBLIC_SITE_URL=https://dominio.com npm run build`) se permite indexar y robots, sitemap, canónicas,
Open Graph y JSON-LD usan ese dominio. Es una variable de build: cambiarla exige reconstruir. La
lógica está centralizada en `src/lib/env.ts` (`siteUrl`, `isSiteUrlConfigured`) y se valida con zod.

## Estructura

```
src/
  app/                  layout, home, [zona] (6 subpáginas), sitemap, robots, imágenes OG e iconos
  components/
    sections/           hero, selector de zonas, ruta de atención, sobre el doctor, FAQ, contacto
    site/               header, footer, logo, WhatsApp (botón, flotante), JSON-LD
    zone/               plantilla única de las subpáginas
    ui/                 componentes shadcn (button, accordion, tabs, sheet, breadcrumb)
  content/              schema.ts (zod), site.ts (contenido), zones.ts (textos por zona)
  lib/                  whatsapp.ts (buildWhatsAppUrl), env.ts, seo.ts (JSON-LD), utils.ts
public/
  brand/simbolo-rodilla.svg   símbolo vectorizado desde el PNG del logo
  images/doctor-naveda.webp   foto sin el texto incrustado
```

## Dónde editar el contenido

Todo el texto vive en `src/content/site.ts` y `src/content/zones.ts` y se valida con
`src/content/schema.ts` al cargar el módulo (si falta algo, el build falla).

- Número y mensaje por defecto de WhatsApp: `src/lib/whatsapp.ts` (única fuente de la URL `wa.me`).
- Mensaje contextual de cada zona: campo `whatsappMessage` en `zones.ts`.
- Nueva zona: añadir su slug en `schema.ts` (`zoneSlugs`), su entrada en `zones.ts` y un icono en
  `components/site/zone-icons.tsx`.
- Colores y tipografía: tokens OKLCH en `src/app/globals.css`.

## Datos pendientes

Los datos que aún no se conocen están en `site.ts` como `pending("...")`. **El sitio no los muestra**:
las secciones omiten esas filas hasta que se reemplace `pending(...)` por el valor real (helper
`known()` en `schema.ts`; el JSON-LD tampoco los incluye). Al completarlos aparecen solos:

- `doctor.bio`, `doctor.education`, `doctor.rne`, `doctor.track` (biografía, formación, RNE, trayectoria):
  se muestran en "Sobre el doctor" (`components/sections/about-doctor.tsx`).
- `contact.clinicName`, `contact.hours`, `contact.mapsUrl` (consultorio, horarios, enlace de Google Maps):
  se muestran en "Contacto" (`components/sections/contact.tsx`).
- Dominio (`NEXT_PUBLIC_SITE_URL`).

El test `src/content/schema.test.ts` lista los campos pendientes y fallará cuando se completen:
actualiza esa lista al hacerlo. Si necesitas publicar alguno en el JSON-LD, añádelo en `src/lib/seo.ts`
usando `known()`.

## Resumen del selector de la portada

Cada zona tiene un campo `summary` en `zones.ts` (intro, 4 a 5 problemas con nombre y explicación corta,
primer tratamiento, hasta 3 motivos de consulta y hasta 3 urgencias). El esquema en `schema.ts` limita
la longitud. El detalle completo vive en `page` y se muestra en las subpáginas.

## Límites de los recursos gráficos

- El símbolo de la rodilla se vectorizó a partir del PNG del logo: reemplazarlo por el SVG original.
- La foto del doctor venía con el claim incrustado; se retocó para quitarlo. Reemplazarla por el
  original sin texto.
- La imagen Open Graph usa la fuente por defecto de `next/og`, no Sora.

## Decisiones técnicas

- `next.config.ts` ya no activa `cacheComponents`: el sitio es 100 % estático y así
  `dynamicParams = false` devuelve un 404 real para rutas que no son zonas.
- `src/lib/utils.ts` usa el paquete `cn` que instala la CLI de shadcn (reemplazo de clsx + tailwind-merge).
- No se usa TanStack Form: no hay formularios.
