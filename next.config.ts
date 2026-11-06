import type { NextConfig } from "next";

// Con dominio propio (pensionmorelos.com.ar, public/CNAME) el sitio vive en la raíz: BASE_PATH vacío.
// Si alguna vez vuelve a una subcarpeta de github.io, definir BASE_PATH="/pension-morelos" en el build.
const basePath = process.env.BASE_PATH ?? "";

const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
  trailingSlash: true,
  basePath,
  env: { NEXT_PUBLIC_BASE_PATH: basePath },
};

export default nextConfig;
