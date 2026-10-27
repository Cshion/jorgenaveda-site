# Frontend

Starter oficial de [Next.js](https://nextjs.org), generado con
`create-next-app@latest`: TypeScript, App Router, Tailwind CSS, ESLint y npm.

## Requisitos

- Node.js **20.9.0 o posterior**, según Next.js 16.4.3. Se recomienda Node.js 24 LTS;
  validado con Node.js 24.21.0 y npm 11.19.0.
- Next.js **16.4.3**, React y React DOM **19.3.0**. Conservar `package-lock.json`.

## Desarrollo

Desde la raíz del proyecto:

```bash
cd frontend
npm ci
npm run dev
```

Abrir [http://localhost:3000](http://localhost:3000). La página inicial está en
`src/app/page.tsx`, el layout en `src/app/layout.tsx` y los estilos en
`src/app/globals.css`. El alias `@/*` apunta a `src/*`.

## Validación y producción local

Ejecutar dentro de `frontend/`:

```bash
npm run lint
npm run build
npm run start
```

`start` requiere un build previo y sirve la aplicación en el puerto 3000.
Para usar otro puerto: `npm run start -- --hostname 127.0.0.1 --port 3107`.
Detener el servidor con `Ctrl+C`.

Se conserva la página del starter y sus fuentes Geist mediante `next/font/google`;
el primer build necesita acceso a Google Fonts. No hay backend, despliegue ni
herramientas de pruebas adicionales.

Documentación: [Next.js](https://nextjs.org/docs) y
[App Router](https://nextjs.org/docs/app).
