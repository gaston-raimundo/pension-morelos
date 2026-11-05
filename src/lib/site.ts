// Datos del negocio. Fuente de verdad: specs/README.md §2.
// Reglas del dueño: sin precio, descuentos ni promociones; solo se menciona la luz como gasto aparte.

export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://gaston-raimundo.github.io/pension-morelos";

export const PHONE_DISPLAY = "3794 377379";
export const PHONE_INTL = "+54 9 379 437-7379";
export const WA_URL =
  "https://wa.me/5493794377379?text=Hola!%20Quiero%20info%20de%20la%20Pensi%C3%B3n%20Universitaria%20Morelos";
export const IG_HANDLE = "@pu.morelos";
export const IG_URL = "https://www.instagram.com/pu.morelos/";
export const ADDRESS = "Morelos 606 esq. Dupuy";
export const NEIGHBORHOOD = "Barrio San Gerónimo, Corrientes";
export const HOURS = "Lunes a sábado de 9 a 20 h";
export const GEO = { lat: -27.467534, lng: -58.789671 };
export const MAP_EMBED = `https://www.google.com/maps?q=${GEO.lat},${GEO.lng}&z=16&output=embed`;
export const MAP_LINK = `https://www.google.com/maps/search/?api=1&query=${GEO.lat},${GEO.lng}`;

/** Prefija rutas de /public con el basePath (GitHub Pages sin dominio propio). */
export const asset = (path: string) => `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}${path}`;
