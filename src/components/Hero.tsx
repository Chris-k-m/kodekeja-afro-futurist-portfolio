import { ArrowRight, Sparkles } from "lucide-react";
import HeroBackground from "./HeroBackground";

const Hero = () => {
  return (
    <section
      id="top"
      className="relative min-h-[100svh] flex items-center pt-32 pb-20 overflow-hidden"
    >
      <HeroBackground />

      <div className="container relative">
        {/* Centered top tag — Engineered in Africa */}
        <div className="flex justify-center mb-10 animate-fade-in">
          <div className="inline-flex items-center gap-2 rounded-full glass gradient-border px-4 py-2 text-xs font-mono uppercase tracking-[0.25em] text-muted-foreground">
            <Sparkles className="h-3.5 w-3.5 text-accent" />
            <span>Engineered in Africa</span>
            <span className="h-1 w-1 rounded-full bg-muted-foreground/60" />
            <span className="text-secondary">Deployed Worldwide</span>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* LEFT — Afro-futuristic headline */}
          <div className="text-left animate-fade-in-up lg:-mt-6 relative">
            {/* Afro-futuristic glyph backdrop */}
            <svg
              className="absolute -top-10 -left-6 w-40 h-40 opacity-[0.12] pointer-events-none"
              viewBox="0 0 100 100"
              fill="none"
              aria-hidden
            >
              <circle cx="50" cy="50" r="48" stroke="hsl(var(--accent))" strokeWidth="0.4" />
              <circle cx="50" cy="50" r="32" stroke="hsl(var(--primary))" strokeWidth="0.4" />
              <path d="M50 2 L50 98 M2 50 L98 50 M15 15 L85 85 M85 15 L15 85" stroke="hsl(var(--secondary))" strokeWidth="0.3" />
              <path d="M50 18 L62 50 L50 82 L38 50 Z" stroke="hsl(var(--accent))" strokeWidth="0.5" />
            </svg>

            <div className="relative inline-flex items-center gap-2 rounded-full glass gradient-border px-3 py-1 font-mono text-[10px] uppercase tracking-[0.2em] text-secondary">
              <span className="h-1.5 w-1.5 rounded-full bg-secondary animate-pulse" />
              <span className="text-muted-foreground">$</span>
              <span>./kodekeja --origin=nairobi</span>
            </div>

            <div className="mt-4 flex items-center gap-2">
              <span className="h-[3px] w-6 rounded-full bg-foreground/80" />
              <span className="h-[3px] w-6 rounded-full bg-destructive" />
              <span className="h-[3px] w-6 rounded-full bg-secondary" />
              <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-muted-foreground ml-2">
                Made in Kenya · 🇰🇪
              </span>
            </div>

            <div className="mt-5 font-mono text-[11px] text-muted-foreground">
              <span className="text-accent">const</span>{" "}
              <span className="text-primary">mission</span>{" "}
              <span className="text-muted-foreground">=</span>
            </div>

            <h1 className="mt-2 font-display font-bold tracking-tight text-3xl sm:text-4xl lg:text-5xl leading-[1.1]">
              Building <span className="text-gradient">Smart Systems</span>
              <br />
              for a{" "}
              <span className="relative inline-block">
                Smarter Future
                <svg
                  className="absolute -bottom-2 left-0 w-full"
                  height="8"
                  viewBox="0 0 300 10"
                  preserveAspectRatio="none"
                  aria-hidden
                >
                  <path
                    d="M2 6 Q 75 1, 150 6 T 298 6"
                    stroke="url(#g)"
                    strokeWidth="2"
                    fill="none"
                    strokeLinecap="round"
                  />
                  <defs>
                    <linearGradient id="g" x1="0" x2="1">
                      <stop offset="0%" stopColor="hsl(var(--primary))" />
                      <stop offset="50%" stopColor="hsl(var(--secondary))" />
                      <stop offset="100%" stopColor="hsl(var(--accent))" />
                    </linearGradient>
                  </defs>
                </svg>
              </span>
            </h1>

            {/* Afro-futuristic accent row */}
            <div className="mt-6 flex items-center gap-3">
              <span className="h-px w-10 bg-gradient-to-r from-transparent via-accent to-transparent" />
              <svg width="14" height="14" viewBox="0 0 14 14" aria-hidden>
                <path d="M7 1 L13 7 L7 13 L1 7 Z" stroke="hsl(var(--accent))" strokeWidth="0.8" fill="none" />
                <circle cx="7" cy="7" r="1.5" fill="hsl(var(--accent))" />
              </svg>
              <p className="font-mono text-[11px] text-muted-foreground">
                <span className="text-accent">// </span>
                karibu — welcome to the build floor
              </p>
            </div>
          </div>

          {/* RIGHT — Modern editorial card with African pattern bg */}
          <div className="animate-fade-in-up [animation-delay:200ms]">
            <div className="relative rounded-3xl glass gradient-border overflow-hidden shadow-elevate p-8 sm:p-10">
              {/* Subtle African pattern background */}
              <div className="absolute inset-0 pattern-african opacity-[0.07] pointer-events-none" aria-hidden />

              {/* Glow orbs */}
              <div className="absolute -top-20 -right-16 h-56 w-56 rounded-full bg-primary/25 blur-3xl pointer-events-none" aria-hidden />
              <div className="absolute -bottom-24 -left-16 h-56 w-56 rounded-full bg-secondary/20 blur-3xl pointer-events-none" aria-hidden />

              {/* Corner Adinkra-inspired marks */}
              <svg className="absolute top-4 right-4 opacity-30" width="42" height="42" viewBox="0 0 42 42" fill="none" aria-hidden>
                <path d="M4 21 L21 4 L38 21 L21 38 Z" stroke="hsl(var(--accent))" strokeWidth="0.8" />
                <circle cx="21" cy="21" r="6" stroke="hsl(var(--primary))" strokeWidth="0.8" />
              </svg>
              <svg className="absolute bottom-4 left-4 opacity-30" width="42" height="42" viewBox="0 0 42 42" fill="none" aria-hidden>
                <path d="M2 21 H40 M21 2 V40" stroke="hsl(var(--secondary))" strokeWidth="0.6" />
                <circle cx="21" cy="21" r="10" stroke="hsl(var(--accent))" strokeWidth="0.6" />
              </svg>

              <div className="relative">
                {/* Eyebrow */}
                <div className="inline-flex items-center gap-2 mb-5">
                  <span className="h-px w-8 bg-gradient-to-r from-transparent to-primary" />
                  <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-primary">
                    Who We Are
                  </span>
                </div>

                {/* Headline */}
                <h2 className="font-display text-3xl sm:text-4xl font-bold leading-tight">
                  <span className="text-gradient-primary">KodeKeja</span>{" "}
                  <span className="text-foreground/90">crafts the systems</span>
                  <br />
                  <span className="text-foreground/60 text-2xl sm:text-3xl">
                    powering tomorrow's Africa.
                  </span>
                </h2>

                {/* Description with strong hierarchy */}
                <p className="mt-6 text-base sm:text-lg text-foreground/80 leading-relaxed">
                  A technology company building{" "}
                  <span className="text-foreground font-semibold">scalable</span>,{" "}
                  <span className="text-foreground font-semibold">intelligent</span>{" "}
                  digital solutions across{" "}
                  <span className="text-primary font-semibold drop-shadow-[0_0_8px_hsl(var(--primary)/0.6)]">
                    fintech
                  </span>
                  ,{" "}
                  <span className="text-secondary font-semibold drop-shadow-[0_0_8px_hsl(var(--secondary)/0.6)]">
                    healthtech
                  </span>
                  , and{" "}
                  <span className="text-accent font-semibold drop-shadow-[0_0_8px_hsl(var(--accent)/0.6)]">
                    web platforms
                  </span>
                  .
                </p>

                {/* Divider */}
                <div className="mt-8 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

                {/* CTAs */}
                <div className="mt-7 flex flex-col sm:flex-row gap-3">
                  <a
                    href="#projects"
                    className="group inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-primary px-6 py-3.5 text-sm font-medium text-primary-foreground glow-primary hover:scale-[1.03] transition-transform duration-300"
                  >
                    View Projects
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </a>
                  <a
                    href="#contact"
                    className="group inline-flex items-center justify-center gap-2 rounded-lg glass gradient-border px-6 py-3.5 text-sm font-medium text-foreground hover:bg-muted/40 transition-colors"
                  >
                    Get In Touch
                    <ArrowRight className="h-4 w-4 opacity-60 transition-transform group-hover:translate-x-1" />
                  </a>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="mt-6 grid grid-cols-3 gap-3 sm:gap-4">
              {[
                { k: "10+", v: "Systems shipped" },
                { k: "4", v: "Industries served" },
                { k: "100%", v: "Built to scale" },
              ].map((s) => (
                <div
                  key={s.v}
                  className="glass rounded-xl p-3 sm:p-4 gradient-border"
                >
                  <div className="font-display text-xl sm:text-2xl font-bold text-gradient-primary">
                    {s.k}
                  </div>
                  <div className="mt-1 text-[11px] sm:text-xs text-muted-foreground">
                    {s.v}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* scroll cue */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden sm:flex flex-col items-center gap-2 text-muted-foreground">
        <span className="text-[10px] font-mono uppercase tracking-widest">
          Scroll
        </span>
        <span className="block h-10 w-px bg-gradient-to-b from-primary/60 to-transparent animate-pulse" />
      </div>
    </section>
  );
};

export default Hero;
