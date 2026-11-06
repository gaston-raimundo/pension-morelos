import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ADDRESS, FAQ, FB_URL, GEO, IG_URL, MAP_LINK, PHONE_INTL, SITE_URL } from "@/lib/site";

const manrope = localFont({
  src: "../fonts/Manrope-VariableFont_wght.ttf",
  variable: "--font-manrope",
  weight: "200 800",
  display: "swap",
});

const DESCRIPTION =
  "Pensión para estudiantes a 4 cuadras del Campus UNNE, en Corrientes. Habitaciones compartidas e individuales amobladas, con luz, wifi, agua y cable incluidos.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL + "/"),
  title: {
    default: "Pensión universitaria en Corrientes a 4 cuadras de la UNNE · Pensión Morelos",
    template: "%s · Pensión Universitaria Morelos",
  },
  description: DESCRIPTION,
  alternates: { canonical: "./" },
  applicationName: "Pensión Universitaria Morelos",
  keywords: [
    "pensión universitaria Corrientes", "pensión para estudiantes Corrientes", "alojamiento estudiantes UNNE",
    "pensión cerca de la UNNE", "habitaciones para estudiantes Corrientes", "pensión San Gerónimo Corrientes",
  ],
  formatDetection: { telephone: true },
  openGraph: {
    siteName: "Pensión Universitaria Morelos",
    title: "Pensión Universitaria Morelos · Estudiá cerca. Viví tranquilo.",
    description: DESCRIPTION,
    locale: "es_AR",
    type: "website",
    url: "./",
    images: [{ url: "og-image.jpg", width: 1200, height: 630, alt: "Pensión Universitaria Morelos — a 4 cuadras del Campus UNNE" }],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LodgingBusiness",
  name: "Pensión Universitaria Morelos",
  description: DESCRIPTION,
  url: SITE_URL,
  image: [`${SITE_URL}/og-image.jpg`, `${SITE_URL}/img/habitacion_individual.jpeg`, `${SITE_URL}/img/habitacion_doble.jpeg`, `${SITE_URL}/img/galeria_patio.jpeg`],
  logo: `${SITE_URL}/icon-512.png`,
  hasMap: MAP_LINK,
  areaServed: "Corrientes, Argentina",
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
  sameAs: [IG_URL, FB_URL],
};

const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ.map(([q, a]) => ({ "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a } })),
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es-AR" className={manrope.variable}>
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
        {children}
      </body>
    </html>
  );
}
