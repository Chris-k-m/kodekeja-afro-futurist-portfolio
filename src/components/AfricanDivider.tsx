/** Subtle Adinkra/Kente-inspired SVG divider. */
const AfricanDivider = ({ className = "" }: { className?: string }) => (
  <div className={`flex items-center justify-center gap-3 opacity-40 ${className}`} aria-hidden>
    <span className="h-px w-16 bg-gradient-to-r from-transparent to-primary/60" />
    <svg width="120" height="14" viewBox="0 0 120 14" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M2 7 L10 1 L18 7 L10 13 Z" stroke="hsl(var(--primary))" strokeWidth="1" />
      <path d="M22 7 H38" stroke="hsl(var(--secondary))" strokeWidth="1" />
      <circle cx="46" cy="7" r="3" stroke="hsl(var(--accent))" strokeWidth="1" />
      <path d="M54 1 L60 7 L54 13 M66 1 L60 7 L66 13" stroke="hsl(var(--primary))" strokeWidth="1" />
      <circle cx="74" cy="7" r="3" stroke="hsl(var(--accent))" strokeWidth="1" />
      <path d="M82 7 H98" stroke="hsl(var(--secondary))" strokeWidth="1" />
      <path d="M102 7 L110 1 L118 7 L110 13 Z" stroke="hsl(var(--primary))" strokeWidth="1" />
    </svg>
    <span className="h-px w-16 bg-gradient-to-l from-transparent to-primary/60" />
  </div>
);

export default AfricanDivider;
