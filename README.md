# Web — Pensión Universitaria Morelos

Sitio de una sola página. Next.js 16 + Tailwind 4, exportado como sitio estático y publicado en GitHub Pages.
Especificación: `../specs/fase-09-web.md`.

## Desarrollo
```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # genera out/
```

## Dónde se edita
| Qué | Archivo |
|---|---|
| Teléfono, WhatsApp, Instagram, dirección, horario, mapa | `src/lib/site.ts` |
| Textos y secciones | `src/app/page.tsx` |
| Título, descripción y datos para Google | `src/app/layout.tsx` |
| Colores y tipografía | `src/app/globals.css` |
| Fotos de la galería | `public/img/` (mismo nombre de archivo, o cambiar la lista `GALERIA` en `page.tsx`) |

Reglas de contenido: sin precio, descuentos ni promociones; la luz está incluida; el gas no se menciona; solo mayores de 18.

## Publicar (GitHub Pages)
1. Crear el repo público `gaston-raimundo/pension-morelos` y subir el contenido de esta carpeta `web/` como raíz del repo.
2. Cada push a `main` compila y publica con `.github/workflows/deploy.yml`.
3. En GitHub → Settings → Pages: origen = rama `gh-pages`.
4. URL: `https://gaston-raimundo.github.io/pension-morelos/`

## Dominio propio (cuando se registre)
1. Crear `public/CNAME` con el dominio (ej. `www.pensionmorelos.com.ar`).
2. En `deploy.yml`, borrar `BASE_PATH` y cambiar `NEXT_PUBLIC_SITE_URL` por el dominio.
3. En el DNS del dominio: registro CNAME `www` → `gaston-raimundo.github.io`.
