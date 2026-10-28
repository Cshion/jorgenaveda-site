import type { Metadata, Viewport } from "next";
import { Onest, Sora } from "next/font/google";
import { FloatingWhatsApp } from "@/components/site/floating-whatsapp";
import { Footer } from "@/components/site/footer";
import { Header } from "@/components/site/header";
import { site } from "@/content/site";
import { isSiteUrlConfigured, siteUrl } from "@/lib/env";
import "./globals.css";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  display: "swap",
});

const onest = Onest({
  subsets: ["latin"],
  variable: "--font-onest",
  display: "swap",
});

const description =
  "Dr. Jorge Naveda, médico traumatólogo en Lima. Te escucho, te explico qué le pasa a tu cuerpo y empezamos, cuando corresponde, por el tratamiento conservador.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Traumatólogo en Lima | Dr. Jorge Naveda",
    template: "%s | Dr. Jorge Naveda",
  },
  description,
  applicationName: site.doctor.name,
  authors: [{ name: site.doctor.name }],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "es_PE",
    siteName: site.doctor.name,
    title: "Traumatólogo en Lima | Dr. Jorge Naveda",
    description,
    url: "/",
  },
  twitter: {
    card: "summary_large_image",
    title: "Traumatólogo en Lima | Dr. Jorge Naveda",
    description,
  },
  robots: isSiteUrlConfigured
    ? { index: true, follow: true }
    : { index: false, follow: false },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#215da8",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es-PE" className={`${sora.variable} ${onest.variable}`}>
      <head>
        <noscript>
          <style>{"[data-reveal]{opacity:1!important;transform:none!important}"}</style>
        </noscript>
      </head>
      <body className="flex min-h-dvh flex-col">
        <a
          href="#contenido"
          className="sr-only z-[60] rounded-full bg-brand px-6 py-3 font-display font-semibold text-on-brand focus:not-sr-only focus:fixed focus:top-3 focus:left-3"
        >
          Saltar al contenido
        </a>
        <Header />
        <main id="contenido" tabIndex={-1} className="flex-1 outline-none">
          {children}
        </main>
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
