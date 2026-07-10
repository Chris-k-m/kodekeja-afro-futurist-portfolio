import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { href: "#about", label: "Studio" },
  { href: "#projects", label: "Work" },
  { href: "#features", label: "Services" },
  { href: "#experience", label: "Experience" },
  { href: "#stack", label: "Tools" },
  { href: "#contact", label: "Contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <div className="container">
        <nav
          className={`flex items-center justify-between rounded-2xl px-4 sm:px-6 py-3 transition-all duration-500 ${
            scrolled ? "glass shadow-elevate" : ""
          }`}
        >
          <a href="#top" className="flex items-center gap-2.5 group">
            <span className="relative inline-flex h-10 w-10 items-center justify-center rounded-[10px] bg-[hsl(var(--background))] overflow-hidden">
              {/* mechatronic frame */}
              <span className="absolute inset-0 rounded-[10px] bg-gradient-primary opacity-90" />
              <span className="absolute inset-[2px] rounded-[8px] bg-[hsl(var(--background))]" />

              {/* circuit traces */}
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 40 40" fill="none" aria-hidden>
                {/* corner bolts */}
                <circle cx="5" cy="5" r="0.9" fill="hsl(var(--accent))" />
                <circle cx="35" cy="5" r="0.9" fill="hsl(var(--accent))" />
                <circle cx="5" cy="35" r="0.9" fill="hsl(var(--accent))" />
                <circle cx="35" cy="35" r="0.9" fill="hsl(var(--accent))" />
                {/* circuit lines */}
                <path d="M2 20 H6 M34 20 H38 M20 2 V6 M20 34 V38" stroke="hsl(var(--primary))" strokeWidth="0.6" />
                <path d="M2 12 H5 V8 M38 12 H35 V8 M2 28 H5 V32 M38 28 H35 V32" stroke="hsl(var(--secondary))" strokeWidth="0.5" fill="none" />
                {/* tribal accent marks top/bottom */}
                <path d="M16 6 L20 4 L24 6 M16 34 L20 36 L24 34" stroke="hsl(var(--accent))" strokeWidth="0.4" />

                {/* LEFT K — mechanical */}
                <g stroke="url(#kgrad)" strokeWidth="2" strokeLinecap="square" fill="none">
                  <path d="M11 11 V29" />
                  <path d="M11 20 L17 11" />
                  <path d="M11 20 L17 29" />
                </g>
                {/* RIGHT K — mirrored */}
                <g stroke="url(#kgrad2)" strokeWidth="2" strokeLinecap="square" fill="none">
                  <path d="M29 11 V29" />
                  <path d="M29 20 L23 11" />
                  <path d="M29 20 L23 29" />
                </g>

                {/* central afro diamond — shared joint */}
                <path d="M20 15 L22 20 L20 25 L18 20 Z" stroke="hsl(var(--accent))" strokeWidth="0.5" fill="hsl(var(--accent) / 0.15)" />
                <circle cx="20" cy="20" r="0.7" fill="hsl(var(--accent))" />

                {/* joint nodes */}
                <circle cx="11" cy="20" r="1.2" fill="hsl(var(--accent))" />
                <circle cx="29" cy="20" r="1.2" fill="hsl(var(--accent))" />
                <circle cx="11" cy="11" r="0.8" fill="hsl(var(--secondary))" />
                <circle cx="11" cy="29" r="0.8" fill="hsl(var(--secondary))" />
                <circle cx="29" cy="11" r="0.8" fill="hsl(var(--primary))" />
                <circle cx="29" cy="29" r="0.8" fill="hsl(var(--primary))" />
                <circle cx="17" cy="11" r="0.6" fill="hsl(var(--primary))" />
                <circle cx="17" cy="29" r="0.6" fill="hsl(var(--primary))" />
                <circle cx="23" cy="11" r="0.6" fill="hsl(var(--secondary))" />
                <circle cx="23" cy="29" r="0.6" fill="hsl(var(--secondary))" />

                <defs>
                  <linearGradient id="kgrad" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="hsl(var(--primary))" />
                    <stop offset="55%" stopColor="hsl(var(--accent))" />
                    <stop offset="100%" stopColor="hsl(var(--secondary))" />
                  </linearGradient>
                  <linearGradient id="kgrad2" x1="1" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="hsl(var(--secondary))" />
                    <stop offset="55%" stopColor="hsl(var(--accent))" />
                    <stop offset="100%" stopColor="hsl(var(--primary))" />
                  </linearGradient>
                </defs>
              </svg>

              <span className="absolute inset-0 rounded-[10px] ring-1 ring-primary/30 group-hover:ring-accent/70 transition" />
              <span className="absolute -inset-1 rounded-[12px] bg-primary/20 blur-md opacity-0 group-hover:opacity-100 transition" />
            </span>
            <span className="font-display font-semibold tracking-tight text-xl leading-none">
              Kode<span className="text-gradient-primary italic">Keja</span>
              <span className="block text-[9px] uppercase tracking-[0.35em] text-muted-foreground mt-1">
                Nairobi · Studio
              </span>
            </span>
          </a>

          <ul className="hidden md:flex items-center gap-1">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="relative px-4 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors group"
                >
                  {l.label}
                  <span className="absolute left-4 right-4 -bottom-0.5 h-px scale-x-0 origin-left bg-gradient-primary transition-transform duration-500 group-hover:scale-x-100" />
                </a>
              </li>
            ))}
          </ul>

          <a
            href="#contact"
            className="hidden md:inline-flex items-center gap-2 rounded-full px-5 py-2 text-sm font-medium text-primary-foreground bg-gradient-primary hover:scale-[1.03] transition-transform duration-300 glow-primary"
          >
            Start a project
          </a>

          <button
            className="md:hidden rounded-lg p-2 text-foreground hover:bg-muted/50"
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </nav>

        {open && (
          <div className="md:hidden mt-2 glass rounded-2xl p-4 animate-fade-in">
            <ul className="flex flex-col gap-1">
              {links.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="block px-3 py-2.5 rounded-lg text-sm text-muted-foreground hover:text-foreground hover:bg-muted/40"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#contact"
                  onClick={() => setOpen(false)}
                  className="mt-1 block text-center rounded-lg px-3 py-2.5 text-sm font-medium text-primary-foreground bg-gradient-primary"
                >
                  Start a project
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
