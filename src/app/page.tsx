/* eslint-disable @next/next/no-img-element -- static export con basePath: las imágenes se sirven tal cual desde /public */
import Icon, { type IconName } from "@/components/Icon";
import WhatsAppButton, { WhatsAppGlyph } from "@/components/WhatsAppButton";
import {
  ADDRESS, EMAIL, FAQ, HOURS, IG_HANDLE, IG_URL, MAP_EMBED, MAP_LINK, NEIGHBORHOOD, PHONE_DISPLAY, WA_URL, asset,
} from "@/lib/site";

/** Medidas reales de las fotos (WebP generadas a 1200 px de ancho) para que la página no "salte" al cargar. */
const FOTOS = {
  habitacion_individual: [1200, 1486],
  habitacion_doble: [1200, 900],
  galeria_patio: [1199, 1600],
} as const;

function Foto({ name, alt, className, sizes, priority = false }: {
  name: keyof typeof FOTOS; alt: string; className: string; sizes: string; priority?: boolean;
}) {
  const [width, height] = FOTOS[name];
  return (
    <picture>
      <source type="image/webp" sizes={sizes}
        srcSet={`${asset(`/img/${name}-640.webp`)} 640w, ${asset(`/img/${name}.webp`)} 1200w`} />
      <img src={asset(`/img/${name}.jpeg`)} alt={alt} width={width} height={height} className={className}
        loading={priority ? "eager" : "lazy"} decoding="async" fetchPriority={priority ? "high" : "auto"} />
    </picture>
  );
}

const NAV = [
  ["Habitaciones", "#habitaciones"],
  ["Qué incluye", "#incluye"],
  ["La casa", "#casa"],
  ["Ubicación", "#ubicacion"],
  ["Cómo reservar", "#reservar"],
  ["Preguntas", "#preguntas"],
] as const;

const INCLUYE: [IconName, string, string][] = [
  ["wifi", "Wifi", "incluido"],
  ["agua", "Luz, agua y cable", "incluidos"],
  ["cama", "Habitación amoblada", "cama, placard, mesa de estudio y silla"],
  ["ropa", "Ropa de cama", "sábanas, colcha y almohada"],
  ["cocina", "Cocina-comedor", "equipada, con heladeras y TV"],
  ["lavarropas", "Lavarropas", "de uso libre"],
  ["parrilla", "Patio y asador", "patio interno con tendedero y galería"],
  ["limpieza", "Limpieza de comunes", "servicio 2 o 3 veces por semana"],
];

const REGLAS: [IconName, string, string][] = [
  ["luna", "Silencio de 23 a 7 h", "de domingo a jueves · de 0 a 8 h los fines de semana"],
  ["personas", "Visitas hasta las 22 h", "en los espacios comunes; nadie de afuera se queda a dormir"],
  ["limpieza", "Cada uno ordena lo suyo", "su habitación y lo que usa en la cocina y el baño"],
  ["nofumar", "No se fuma adentro", "solo en el patio · no se permiten fiestas ni mascotas"],
];

const GALERIA = [
  ["habitacion_individual", "Habitación individual de la pensión con escritorio y luz natural"],
  ["habitacion_doble", "Habitación compartida de dos camas en la pensión universitaria"],
  ["galeria_patio", "Galería con lavadero y patio de la pensión"],
] as const;

function WaLink({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <a href={WA_URL} target="_blank" rel="noopener noreferrer"
      className={`inline-flex items-center gap-2.5 rounded-full bg-ink px-6 py-3.5 font-bold text-paper transition-colors hover:bg-blue ${className}`}>
      <WhatsAppGlyph className="h-5 w-5 text-sand" />
      {children}
    </a>
  );
}

function SectionTitle({ eyebrow, children }: { eyebrow: string; children: React.ReactNode }) {
  return (
    <div className="mb-10">
      <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue">{eyebrow}</p>
      <h2 className="mt-2 text-3xl font-extrabold leading-tight sm:text-4xl">{children}</h2>
    </div>
  );
}

export default function Home() {
  return (
    <>
      {/* ── Barra ── */}
      <header className="fixed inset-x-0 top-0 z-40 border-b border-line bg-paper/95 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
          <a href="#inicio" aria-label="Pensión Universitaria Morelos, inicio">
            <img src={asset("/img/logo_horizontal_positivo.svg")} alt="Pensión Universitaria Morelos" width={180} height={36} className="h-9 w-auto" />
          </a>
          <nav className="hidden gap-6 text-sm font-semibold text-muted lg:flex">
            {NAV.map(([label, href]) => (
              <a key={href} href={href} className="hover:text-ink">{label}</a>
            ))}
          </nav>
          <a href={WA_URL} target="_blank" rel="noopener noreferrer"
            className="rounded-full bg-ink px-4 py-2 text-sm font-bold text-paper hover:bg-blue">
            WhatsApp
          </a>
        </div>
      </header>

      <main>
        {/* ── Inicio ── */}
        <section id="inicio" className="mx-auto grid max-w-6xl items-center gap-10 px-5 pb-16 pt-28 md:grid-cols-2 md:pt-32">
          <div>
            <p className="inline-block rounded-full bg-ink px-4 py-1.5 text-sm font-bold text-paper">
              A <span className="text-sand">4 cuadras</span> del Campus UNNE
            </p>
            <h1 className="mt-6">
              <span className="block text-base font-bold uppercase tracking-[0.14em] text-blue sm:text-lg">
                Pensión universitaria en Corrientes
              </span>
              <span className="mt-3 block text-5xl font-extrabold leading-[1.02] sm:text-6xl">
                Estudiá cerca.<br /><span className="text-blue">Viví tranquilo.</span>
              </span>
            </h1>
            <p className="mt-6 max-w-lg text-lg text-muted">
              Pensión mixta para estudiantes de la UNNE, en el barrio San Gerónimo: habitaciones compartidas e
              individuales, amobladas, con luz, wifi, agua y cable incluidos.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <WaLink>Consultá disponibilidad</WaLink>
              <a href="#habitaciones" className="font-bold text-blue underline-offset-4 hover:underline">Ver habitaciones</a>
            </div>
          </div>
          <Foto name="habitacion_individual" priority sizes="(min-width: 768px) 50vw, 100vw" alt="Habitación individual de la pensión universitaria, con escritorio, cama y ventana"
            className="aspect-[4/3] w-full rounded-3xl object-cover shadow-sm" />
        </section>

        {/* ── Habitaciones ── */}
        <section id="habitaciones" className="bg-white py-20">
          <div className="mx-auto max-w-6xl px-5">
            <SectionTitle eyebrow="Habitaciones">Compartidas o individuales</SectionTitle>
            <div className="grid gap-6 md:grid-cols-2">
              {[
                { t: "Habitación compartida", s: "de 2 o 3 camas", d: "Alquilás tu cama en una habitación compartida, ideal para venir con amigos o conocer gente nueva. Se asignan por género, salvo que un grupo pida compartir." },
                { t: "Habitación individual", s: "una sola cama, solo para vos", d: "La habitación es solo tuya, con una cama: más espacio y privacidad, con los mismos espacios comunes." },
              ].map((h) => (
                <article key={h.t} className="rounded-3xl border border-line bg-paper p-8">
                  <Icon name="cama" className="h-10 w-10 text-blue" />
                  <h3 className="mt-5 text-2xl font-extrabold">{h.t}</h3>
                  <p className="text-sm font-bold uppercase tracking-wider text-blue">{h.s}</p>
                  <p className="mt-4 text-muted">{h.d}</p>
                </article>
              ))}
            </div>
            <p className="mt-6 text-muted">
              Cada habitación tiene cama de 1 plaza con colchón y ropa de cama, placard, mesa de estudio, sillas,
              lavatorio con espejo, ventilador y estufa eléctrica.
            </p>
          </div>
        </section>

        {/* ── Qué incluye ── */}
        <section id="incluye" className="py-20">
          <div className="mx-auto max-w-6xl px-5">
            <SectionTitle eyebrow="Qué incluye tu plaza">Llegás y <span className="text-blue">ya está todo.</span></SectionTitle>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {INCLUYE.map(([icon, t, s]) => (
                <div key={t} className="flex items-center gap-4 rounded-2xl border border-line bg-white p-5">
                  <span className="flex h-14 w-14 flex-none items-center justify-center rounded-full bg-paper">
                    <Icon name={icon} className="h-8 w-8" />
                  </span>
                  <div>
                    <p className="font-extrabold leading-tight">{t}</p>
                    <p className="text-sm text-muted">{s}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── La casa ── */}
        <section id="casa" className="bg-white py-20">
          <div className="mx-auto max-w-6xl px-5">
            <SectionTitle eyebrow="La casa">Cinco habitaciones, tres baños y patio</SectionTitle>
            <div className="grid gap-4 md:grid-cols-3">
              {GALERIA.map(([src, alt]) => (
                <Foto key={src} name={src} alt={alt} sizes="(min-width: 768px) 33vw, 100vw" className="aspect-[4/3] w-full rounded-2xl object-cover" />
              ))}
            </div>
            <ul className="mt-8 grid gap-3 text-muted sm:grid-cols-2">
              {[
                "Comedor con cocina, dos heladeras y TV",
                "Tres baños, asignados por habitación",
                "Patio interno con tendedero",
                "Galería con lavadero y asador",
              ].map((x) => (
                <li key={x} className="flex items-center gap-3"><Icon name="check" className="h-5 w-5 flex-none text-sand" />{x}</li>
              ))}
            </ul>
          </div>
        </section>

        {/* ── Ubicación ── */}
        <section id="ubicacion" className="py-20">
          <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 md:grid-cols-2">
            <div>
              <SectionTitle eyebrow="Ubicación">A 4 cuadras del <span className="text-blue">Campus UNNE</span></SectionTitle>
              <p className="flex items-start gap-3 text-lg">
                <Icon name="pin" className="mt-1 h-6 w-6 flex-none text-blue" />
                <span><b>{ADDRESS}</b><br /><span className="text-muted">{NEIGHBORHOOD}</span></span>
              </p>
              <p className="mt-4 text-muted">Vas caminando a cursar y volvés a almorzar a casa.</p>
              <p className="mt-4 text-muted">
                Una pensión para estudiantes en el barrio San Gerónimo de Corrientes, a 4 cuadras del Campus de la UNNE
                sobre la Av. Libertad. Si venís del interior o de otra provincia a estudiar en Corrientes, llegás a una
                habitación lista, con los servicios incluidos y la facultad a pocos minutos a pie.
              </p>
              <a href={MAP_LINK} target="_blank" rel="noopener noreferrer" className="mt-6 inline-block font-bold text-blue underline-offset-4 hover:underline">
                Abrir en Google Maps
              </a>
            </div>
            <iframe
              src={MAP_EMBED}
              title="Mapa: Pensión Universitaria Morelos, Morelos 606, Corrientes"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-80 w-full rounded-3xl border border-line md:h-96"
            />
          </div>
        </section>

        {/* ── Convivencia ── */}
        <section id="convivencia" className="bg-ink py-20 text-paper">
          <div className="mx-auto max-w-6xl px-5">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-sand">Convivencia</p>
            <h2 className="mt-2 text-3xl font-extrabold sm:text-4xl">Reglas claras, <span className="text-sand">casa tranquila.</span></h2>
            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              {REGLAS.map(([icon, t, s]) => (
                <div key={t} className="flex gap-4">
                  <span className="flex h-14 w-14 flex-none items-center justify-center rounded-full border border-paper/25 text-sand">
                    <Icon name={icon} className="h-7 w-7" />
                  </span>
                  <div>
                    <p className="text-lg font-extrabold">{t}</p>
                    <p className="text-paper/70">{s}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Cómo reservar ── */}
        <section id="reservar" className="py-20">
          <div className="mx-auto max-w-6xl px-5">
            <SectionTitle eyebrow="Cómo reservar">Tres pasos y te mudás</SectionTitle>
            <ol className="grid gap-6 md:grid-cols-3">
              {[
                ["Consultá", "Escribinos por WhatsApp: te pasamos precios, disponibilidad y coordinamos una visita (o videollamada)."],
                ["Reservá", "Con una seña de medio mes, que se descuenta del primer mes. Necesitamos tu DNI (mayor de 18), constancia de alumno regular y un contacto de emergencia."],
                ["Mudate", "Firmamos el contrato por 12 meses y el reglamento, abonás el primer mes y el depósito, y te damos las llaves."],
              ].map(([t, d], i) => (
                <li key={t} className="rounded-3xl border border-line bg-white p-7">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-sand font-extrabold text-ink">{i + 1}</span>
                  <h3 className="mt-4 text-xl font-extrabold">{t}</h3>
                  <p className="mt-2 text-muted">{d}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* ── Preguntas frecuentes ── */}
        <section id="preguntas" className="bg-white py-20">
          <div className="mx-auto max-w-3xl px-5">
            <SectionTitle eyebrow="Preguntas frecuentes">Lo que más nos preguntan</SectionTitle>
            <div className="divide-y divide-line border-y border-line">
              {FAQ.map(([q, a]) => (
                <details key={q} className="group py-5">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-lg font-bold">
                    {q}
                    <span className="text-2xl text-sand transition-transform group-open:rotate-45">+</span>
                  </summary>
                  <p className="mt-3 text-muted">{a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* ── Contacto ── */}
        <section id="contacto" className="py-20">
          <div className="mx-auto max-w-6xl px-5">
            <div className="grid items-center gap-10 rounded-3xl bg-ink p-8 text-paper md:grid-cols-[1fr_auto] md:p-12">
              <div>
                <h2 className="text-3xl font-extrabold sm:text-4xl">¿Te quedan dudas?<br /><span className="text-sand">Escribinos.</span></h2>
                <p className="mt-4 text-paper/75">Te respondemos por WhatsApp · {HOURS}.</p>
                <div className="mt-8 flex flex-wrap gap-4">
                  <a href={WA_URL} target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center gap-2.5 rounded-full bg-sand px-6 py-3.5 font-bold text-ink hover:bg-paper">
                    <WhatsAppGlyph className="h-5 w-5" /> {PHONE_DISPLAY}
                  </a>
                  <a href={IG_URL} target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center gap-2.5 rounded-full border border-paper/30 px-6 py-3.5 font-bold hover:bg-paper/10">
                    <Icon name="instagram" className="h-5 w-5 text-sand" /> {IG_HANDLE}
                  </a>
                </div>
              </div>
              <div className="hidden rounded-2xl bg-white p-3 md:block">
                <img src={asset("/img/qr_whatsapp.svg")} alt="Código QR para escribir por WhatsApp" width={144} height={144} loading="lazy" className="h-36 w-36" />
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-line py-10">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 text-sm text-muted md:flex-row md:items-center md:justify-between">
          <img src={asset("/img/logo_horizontal_positivo.svg")} alt="Pensión Universitaria Morelos" width={200} height={40} loading="lazy" className="h-10 w-auto self-start" />
          <div className="space-y-1">
            <p className="flex items-center gap-2"><Icon name="pin" className="h-4 w-4" />{ADDRESS} · {NEIGHBORHOOD}</p>
            <p className="flex items-center gap-2"><Icon name="reloj" className="h-4 w-4" />{HOURS}</p>
            <p className="flex items-center gap-2"><Icon name="chat" className="h-4 w-4" />WhatsApp {PHONE_DISPLAY} · Instagram {IG_HANDLE}</p>
            <p className="flex items-center gap-2"><Icon name="chat" className="h-4 w-4" /><a href={`mailto:${EMAIL}`} className="hover:text-ink">{EMAIL}</a></p>
          </div>
        </div>
      </footer>

      <WhatsAppButton />
    </>
  );
}
