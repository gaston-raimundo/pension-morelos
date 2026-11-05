import type { NextConfig } from "next";

// Mientras el sitio viva en gaston-raimundo.github.io/pension-morelos, el build de CI
// define BASE_PATH="/pension-morelos". Con dominio propio se deja vacío (y se agrega public/CNAME).
const basePath = process.env.BASE_PATH ?? "";

const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
  trailingSlash: true,
  basePath,
  env: { NEXT_PUBLIC_BASE_PATH: basePath },
};

export default nextConfig;
