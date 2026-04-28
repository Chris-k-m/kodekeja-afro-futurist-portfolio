import { ArrowRight, Terminal as TerminalIcon } from "lucide-react";
import HeroBackground from "./HeroBackground";

const Hero = () => {
  return (
    <section
      id="top"
      className="relative min-h-[100svh] flex items-center pt-32 pb-20 overflow-hidden"
    >
      <HeroBackground />

      <div className="container relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* LEFT — Headline with dev / Kenyan vibe */}
          <div className="text-left animate-fade-in-up">
            {/* dev tag */}
            <div className="inline-flex items-center gap-2 rounded-md glass gradient-border px-3 py-1.5 font-mono text-[11px] uppercase tracking-widest text-secondary">
              <span className="h-1.5 w-1.5 rounded-full bg-secondary animate-pulse" />
              <span className="text-muted-foreground">$</span>
              <span>./kodekeja --origin=nairobi</span>
            </div>

            {/* Kenyan flag accent strip */}
            <div className="mt-5 flex items-center gap-2">
              <span className="h-1 w-8 rounded-full bg-foreground/80" />
              <span className="h-1 w-8 rounded-full bg-destructive" />
              <span className="h-1 w-8 rounded-full bg-secondary" />
              <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground ml-2">
                Made in Kenya · 🇰🇪
              </span>
            </div>

            <h1 className="mt-6 font-display font-bold tracking-tight text-5xl sm:text-6xl lg:text-7xl leading-[1.05]">
              <span className="block font-mono text-sm sm:text-base text-muted-foreground mb-3">
                <span className="text-accent">const</span>{" "}
                <span className="text-primary">mission</span>{" "}
                <span className="text-muted-foreground">=</span>
              </span>
              Building <span className="text-gradient">Smart Systems</span>
              <br />
              for a{" "}
              <span className="relative inline-block">
                Smarter Future
                <svg
                  className="absolute -bottom-2 left-0 w-full"
                  height="10"
                  viewBox="0 0 300 10"
                  preserveAspectRatio="none"
                  aria-hidden
                >
                  <path
                    d="M2 6 Q 75 1, 150 6 T 298 6"
                    stroke="url(#g)"
                    strokeWidth="2.5"
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

            <p className="mt-6 font-mono text-xs text-muted-foreground">
              <span className="text-accent">// </span>
              karibu — welcome to the build floor
            </p>
          </div>

          {/* RIGHT — Terminal-style description + CTAs + stats */}
          <div className="animate-fade-in-up [animation-delay:200ms]">
            <div className="rounded-2xl glass gradient-border overflow-hidden shadow-elevate">
              {/* terminal chrome */}
              <div className="flex items-center gap-2 px-4 py-3 border-b border-border/60 bg-background/40">
                <span className="h-3 w-3 rounded-full bg-destructive/80" />
                <span className="h-3 w-3 rounded-full bg-accent" />
                <span className="h-3 w-3 rounded-full bg-secondary" />
                <span className="ml-3 font-mono text-xs text-muted-foreground flex items-center gap-1.5">
                  <TerminalIcon className="h-3 w-3" />
                  about.kodekeja
                </span>
                <span className="ml-auto font-mono text-[10px] uppercase tracking-wider text-secondary flex items-center gap-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-secondary animate-pulse" />
                  online
                </span>
              </div>

              {/* terminal body */}
              <div className="p-6 sm:p-7 bg-[hsl(222_47%_3%)]/50 font-mono text-sm leading-relaxed">
                <div className="text-muted-foreground">
                  <span className="text-secondary">kodekeja@nairobi</span>
                  <span className="text-foreground/60">:</span>
                  <span className="text-primary">~</span>
                  <span className="text-foreground/60">$</span>{" "}
                  <span className="text-foreground">cat profile.md</span>
                </div>

                <p className="mt-4 text-foreground/85 font-sans text-base leading-relaxed">
                  KodeKeja is a technology company focused on building
                  scalable, intelligent digital solutions across{" "}
                  <span className="text-primary">fintech</span>,{" "}
                  <span className="text-secondary">healthtech</span>, and{" "}
                  <span className="text-accent">web platforms</span>.
                </p>

                <div className="mt-5 text-muted-foreground">
                  <span className="text-secondary">kodekeja@nairobi</span>
                  <span className="text-foreground/60">:</span>
                  <span className="text-primary">~</span>
                  <span className="text-foreground/60">$</span>{" "}
                  <span className="text-foreground">./run --action</span>
                  <span className="ml-1 inline-block h-4 w-2 align-middle bg-primary animate-pulse" />
                </div>

                {/* CTAs */}
                <div className="mt-5 flex flex-col sm:flex-row gap-3">
                  <a
                    href="#projects"
                    className="group inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-primary px-5 py-3 text-sm font-medium text-primary-foreground glow-primary hover:scale-[1.03] transition-transform duration-300"
                  >
                    View Projects
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </a>
                  <a
                    href="#contact"
                    className="group inline-flex items-center justify-center gap-2 rounded-lg glass gradient-border px-5 py-3 text-sm font-medium text-foreground hover:bg-muted/40 transition-colors"
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
