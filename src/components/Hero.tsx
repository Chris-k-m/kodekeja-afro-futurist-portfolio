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

        <div className="flex justify-center">
          {/* Modern editorial card with African pattern bg */}
          <div className="animate-fade-in-up [animation-delay:200ms] w-full max-w-3xl">
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
