/* eslint-disable @next/next/no-img-element -- static export: las imágenes se sirven tal cual desde /public */
import type { Metadata } from "next";
import Link from "next/link";
import { WA_URL, asset } from "@/lib/site";

export const metadata: Metadata = { title: "Página no encontrada", robots: { index: false } };

export default function NotFound() {
  return (
    <main className="mx-auto flex min-h-screen max-w-xl flex-col items-start justify-center gap-6 px-5">
      <img src={asset("/img/logo_horizontal_positivo.svg")} alt="Pensión Universitaria Morelos" width={200} height={40} className="h-10 w-auto" />
      <h1 className="text-4xl font-extrabold">Esta página no existe.</h1>
      <p className="text-muted">Puede que el enlace esté mal escrito o que la página se haya movido.</p>
      <div className="flex flex-wrap gap-4">
        <Link href="/" className="rounded-full bg-ink px-6 py-3 font-bold text-paper hover:bg-blue">Ir al inicio</Link>
        <a href={WA_URL} target="_blank" rel="noopener noreferrer" className="rounded-full border border-line px-6 py-3 font-bold hover:bg-white">
          Escribinos por WhatsApp
        </a>
      </div>
    </main>
  );
}
