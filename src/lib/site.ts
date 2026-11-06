// Datos del negocio. Fuente de verdad: specs/README.md §2.
// Reglas del dueño: sin precio, descuentos ni promociones; la luz está incluida en el precio; el gas no se menciona.

export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://pensionmorelos.com.ar";

export const PHONE_DISPLAY = "3794 377379";
export const PHONE_INTL = "+54 9 379 437-7379";
export const WA_URL =
  "https://wa.me/5493794377379?text=Hola!%20Quiero%20info%20de%20la%20Pensi%C3%B3n%20Universitaria%20Morelos";
export const IG_HANDLE = "@pu.morelos";
export const IG_URL = "https://www.instagram.com/pu.morelos/";
export const FB_URL = "https://www.facebook.com/profile.php?id=61596325046160";
export const ADDRESS = "Morelos 606 esq. Dupuy";
export const NEIGHBORHOOD = "Barrio San Gerónimo, Corrientes";
export const HOURS = "Lunes a sábado de 9 a 20 h";
export const GEO = { lat: -27.467534, lng: -58.789671 };
export const MAP_EMBED = `https://www.google.com/maps?q=${GEO.lat},${GEO.lng}&z=16&output=embed`;
export const MAP_LINK = `https://www.google.com/maps/search/?api=1&query=${GEO.lat},${GEO.lng}`;

/** Prefija rutas de /public con el basePath (GitHub Pages sin dominio propio). */
export const asset = (path: string) => `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}${path}`;

/** Preguntas frecuentes: se muestran en la página y se publican como FAQPage (datos estructurados). */
export const FAQ: [string, string][] = [
  ["¿Dónde queda la pensión?", "En Morelos 606 esquina Dupuy, barrio San Gerónimo, Corrientes: a 4 cuadras del Campus de la UNNE sobre la Av. Libertad."],
  ["¿La pensión es mixta?", "Sí, es mixta y solo para estudiantes mayores de 18 años. Las habitaciones compartidas se asignan por género, salvo que un grupo pida compartir."],
  ["¿Qué incluye el precio?", "Incluye luz, wifi, agua, cable, ropa de cama, la habitación amoblada y la limpieza de los espacios comunes."],
  ["¿Cuánto cuesta?", "Te pasamos precios y disponibilidad por WhatsApp, según el tipo de habitación que busques."],
  ["¿Cómo y cuándo se paga?", "Por mes adelantado, del 1 al 5 de cada mes, en efectivo o por Mercado Pago."],
  ["¿Cuánto dura el contrato?", "Es por 12 meses y se paga todos los meses, incluidas las vacaciones."],
  ["¿Cuántos baños hay?", "Tres baños, cada uno asignado a una o dos habitaciones."],
  ["¿Hay lavarropas?", "Sí, de uso libre y sin turnos. El patio tiene tendedero."],
  ["¿Qué tengo que traer?", "Toallas, tus artículos de higiene, perchas y tus cosas para estudiar. La ropa de cama, el escritorio y el wifi ya están."],
  ["¿Puedo conocer la casa antes?", "Sí. Coordinamos una visita por WhatsApp; si sos de otra ciudad, también podemos hacer una videollamada."],
];
