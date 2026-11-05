import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ADDRESS, GEO, IG_URL, PHONE_INTL, SITE_URL } from "@/lib/site";

const manrope = localFont({
  src: "../fonts/Manrope-VariableFont_wght.ttf",
  variable: "--font-manrope",
  weight: "200 800",
  display: "swap",
});

const DESCRIPTION =
  "Pensión universitaria mixta para estudiantes mayores de 18, a 4 cuadras del Campus UNNE en Corrientes. Habitaciones compartidas e individuales, amobladas, con luz, wifi, agua y cable incluidos.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL + "/"),
  title: {
    default: "Pensión Universitaria Morelos · A 4 cuadras del Campus UNNE · Corrientes",
    template: "%s · Pensión Universitaria Morelos",
  },
  description: DESCRIPTION,
  alternates: { canonical: "./" },
  openGraph: {
    siteName: "Pensión Universitaria Morelos",
    title: "Pensión Universitaria Morelos · Estudiá cerca. Viví tranquilo.",
    description: DESCRIPTION,
    locale: "es_AR",
    type: "website",
    images: [{ url: "og-image.png", width: 1080, height: 1080, alt: "Pensión Universitaria Morelos — a 4 cuadras del Campus UNNE" }],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LodgingBusiness",
  name: "Pensión Universitaria Morelos",
  description: DESCRIPTION,
  url: SITE_URL,
  image: `${SITE_URL}/og-image.png`,
  telephone: PHONE_INTL,
  address: {
    "@type": "PostalAddress",
    streetAddress: ADDRESS,
    addressLocality: "Corrientes",
    addressRegion: "Corrientes",
    addressCountry: "AR",
  },
  geo: { "@type": "GeoCoordinates", latitude: GEO.lat, longitude: GEO.lng },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "09:00",
      closes: "20:00",
    },
  ],
  amenityFeature: ["Wifi", "Luz, agua y cable incluidos", "Habitaciones amobladas", "Lavarropas", "Asador", "Limpieza de espacios comunes"].map(
    (name) => ({ "@type": "LocationFeatureSpecification", name, value: true }),
  ),
  sameAs: [IG_URL],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es-AR" className={manrope.variable}>
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        {children}
      </body>
    </html>
  );
}
