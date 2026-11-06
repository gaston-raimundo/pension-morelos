import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Pensión Universitaria Morelos",
    short_name: "Pensión Morelos",
    description: "Pensión para estudiantes a 4 cuadras del Campus UNNE, en Corrientes.",
    start_url: "/",
    display: "browser",
    background_color: "#F6F2EA",
    theme_color: "#1F2D3D",
    lang: "es-AR",
    icons: [
      { src: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { src: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
  };
}
