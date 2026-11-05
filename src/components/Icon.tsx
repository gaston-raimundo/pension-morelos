// Íconos de línea de la marca (mismos trazos que marca/icons.js).
const PATHS = {
  wifi: '<path d="M7 20c10-9 24-9 34 0"/><path d="M13 27c6.5-5.5 15.5-5.5 22 0"/><path d="M19 34c3-2.5 7-2.5 10 0"/><circle cx="24" cy="40" r="1.6" fill="currentColor"/>',
  agua: '<path d="M24 6c0 0-12 13.5-12 23a12 12 0 0 0 24 0C36 19.5 24 6 24 6z"/>',
  cama: '<path d="M6 12v28M6 30h36v10M42 30v-6a4 4 0 0 0-4-4H20v10"/><circle cx="13" cy="24" r="3"/>',
  ropa: '<rect x="8" y="12" width="32" height="24" rx="5"/><path d="M8 22h32"/>',
  cocina: '<path d="M10 22h28v11a7 7 0 0 1-7 7H17a7 7 0 0 1-7-7z"/><path d="M6 22h36M18 15v-4M24 15V8M30 15v-4"/>',
  parrilla: '<path d="M9 20h30a15 15 0 0 1-30 0z"/><path d="M17 33l-4 9M31 33l4 9M18 13v3M24 10v6M30 13v3"/>',
  lavarropas: '<rect x="10" y="6" width="28" height="36" rx="3"/><circle cx="24" cy="26" r="8"/><path d="M15 12h6"/>',
  pin: '<path d="M24 43s-13-12-13-23a13 13 0 0 1 26 0c0 11-13 23-13 23z"/><circle cx="24" cy="20" r="5"/>',
  casa: '<path d="M6 24L24 8l18 16"/><path d="M12 19v21h24V19"/><path d="M20 40V29h8v11"/>',
  reglas: '<rect x="10" y="6" width="28" height="36" rx="3"/><path d="M16 18l3 3 6-6M16 30l3 3 6-6M29 19h4M29 31h4"/>',
  chat: '<path d="M8 9h32v23H21l-9 8v-8H8z"/><path d="M16 18h16M16 24h10"/>',
  check: '<path d="M10 25l9 9 19-20"/>',
  luna: '<path d="M34 30A14 14 0 0 1 20 10a15 15 0 1 0 14 20z"/>',
  personas: '<circle cx="17" cy="16" r="6"/><circle cx="33" cy="18" r="5"/><path d="M5 40c0-7 5-12 12-12s12 5 12 12M30 28c7 0 13 4 13 12"/>',
  limpieza: '<path d="M30 6l-8 18M14 26h18l4 16H10z"/><path d="M17 33v9M23 33v9M29 33v9"/>',
  nofumar: '<circle cx="24" cy="24" r="18"/><path d="M11 11l26 26M12 26h14v5H12z"/>',
  instagram: '<rect x="8" y="8" width="32" height="32" rx="9"/><circle cx="24" cy="24" r="7.5"/><circle cx="33.5" cy="14.5" r="1.6" fill="currentColor"/>',
  reloj: '<circle cx="24" cy="24" r="17"/><path d="M24 14v10l7 5"/>',
  bano: '<path d="M8 24h32v4a10 10 0 0 1-10 10H18A10 10 0 0 1 8 28z"/><path d="M12 24V11a4 4 0 0 1 8 0M16 38l-2 4M32 38l2 4"/>',
} as const;

export type IconName = keyof typeof PATHS;

export default function Icon({ name, className = "" }: { name: IconName; className?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      stroke="currentColor"
      strokeWidth={3}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
      dangerouslySetInnerHTML={{ __html: PATHS[name] }}
    />
  );
}
