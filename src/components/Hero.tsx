import { ArrowRight, Sparkles } from "lucide-react";
import { useState } from "react";
import HeroBackground from "./HeroBackground";
import RubiksCube from "./RubiksCube";

const SOLUTIONS = [
  { label: "Fintech", desc: "Payments, lending & wallets", color: "text-primary", glow: "hsl(198 100% 65% / 0.7)" },
  { label: "HealthTech", desc: "Records, telehealth & ops", color: "text-secondary", glow: "hsl(152 75% 60% / 0.7)" },
  { label: "AI Systems", desc: "Smart agents & ML pipelines", color: "text-accent", glow: "hsl(290 90% 70% / 0.7)" },
  { label: "Automation", desc: "Workflow & ops engines", color: "text-primary", glow: "hsl(198 100% 65% / 0.7)" },
  { label: "Smart Platforms", desc: "Adaptive digital products", color: "text-secondary", glow: "hsl(42 90% 65% / 0.7)" },
  { label: "Web Infrastructure", desc: "Scalable cloud-native systems", color: "text-accent", glow: "hsl(290 90% 70% / 0.7)" },
];

const Hero = () => {
  const [solutionIdx, setSolutionIdx] = useState(0);
  const solution = SOLUTIONS[solutionIdx];

  return (
    <section
      id="top"
      className="relative min-h-[100svh] flex items-center pt-32 pb-20 overflow-hidden"
    >
      <HeroBackground />

      <div className="container relative">
        <div className="flex justify-center mb-10 animate-fade-in">
          <div className="inline-flex items-center gap-2 rounded-full glass gradient-border px-4 py-2 text-xs font-mono uppercase tracking-[0.25em] text-muted-foreground">
            <Sparkles className="h-3.5 w-3.5 text-accent" />
            <span>Engineered in Africa</span>
            <span className="h-1 w-1 rounded-full bg-muted-foreground/60" />
            <span className="text-secondary">Deployed Worldwide</span>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          {/* LEFT — Editorial copy */}
          <div className="animate-fade-in-up">
            <div className="inline-flex items-center gap-2 mb-5">
              <span className="h-px w-8 bg-gradient-to-r from-transparent to-primary" />
              <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-primary">
                Who We Are
              </span>
            </div>

            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
              <span className="text-gradient-primary">KodeKeja</span>{" "}
              <span className="text-foreground/90">crafts the systems</span>
              <br />
              <span className="text-foreground/60 text-2xl sm:text-3xl">
                powering tomorrow's Africa.
              </span>
            </h2>

            <p className="mt-6 text-base sm:text-lg text-foreground/80 leading-relaxed">
              A technology company building{" "}
              <span className="text-foreground font-semibold">scalable</span>,{" "}
              <span className="text-foreground font-semibold">intelligent</span>{" "}
              digital solutions across{" "}
              <span className="text-primary font-semibold">fintech</span>,{" "}
              <span className="text-secondary font-semibold">healthtech</span>, and{" "}
              <span className="text-accent font-semibold">web platforms</span>.
            </p>

            <div className="mt-8 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

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

            <div className="mt-8 grid grid-cols-3 gap-3 sm:gap-4">
              {[
                { k: "10+", v: "Systems shipped" },
                { k: "4", v: "Industries served" },
                { k: "100%", v: "Built to scale" },
              ].map((s) => (
                <div key={s.v} className="glass rounded-xl p-3 sm:p-4 gradient-border">
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

          {/* RIGHT — 3D Rubik's cube with pulsing solutions */}
          <div className="animate-fade-in-up [animation-delay:200ms] relative">
            <div className="relative aspect-square w-full max-w-[560px] mx-auto">
              {/* Glow backdrop */}
              <div className="absolute inset-8 rounded-full bg-primary/20 blur-3xl pointer-events-none" aria-hidden />
              <div className="absolute inset-12 rounded-full bg-secondary/15 blur-3xl pointer-events-none" aria-hidden />

              {/* Orbit ring */}
              <svg
                className="absolute inset-0 w-full h-full opacity-30 pointer-events-none animate-[spin_40s_linear_infinite]"
                viewBox="0 0 200 200"
                aria-hidden
              >
                <circle cx="100" cy="100" r="92" stroke="hsl(var(--primary))" strokeWidth="0.4" fill="none" strokeDasharray="2 4" />
                <circle cx="100" cy="100" r="78" stroke="hsl(var(--accent))" strokeWidth="0.3" fill="none" />
              </svg>

              <div className="absolute inset-0">
                <RubiksCube
                  onPulse={() =>
                    setSolutionIdx((i) => (i + 1) % SOLUTIONS.length)
                  }
                />
              </div>

              {/* Solution overlay — synced to pulse */}
              <div
                key={solutionIdx}
                className="absolute left-1/2 -translate-x-1/2 bottom-2 sm:bottom-4 text-center pointer-events-none animate-fade-in"
              >
                <div className="font-mono text-[10px] uppercase tracking-[0.4em] text-muted-foreground mb-1">
                  // solution.{String(solutionIdx + 1).padStart(2, "0")}
                </div>
                <div
                  className={`font-display text-2xl sm:text-3xl font-bold ${solution.color}`}
                  style={{ textShadow: `0 0 24px ${solution.glow}` }}
                >
                  {solution.label}
                </div>
                <div className="mt-1 text-xs sm:text-sm text-foreground/70">
                  {solution.desc}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden sm:flex flex-col items-center gap-2 text-muted-foreground">
        <span className="text-[10px] font-mono uppercase tracking-widest">Scroll</span>
        <span className="block h-10 w-px bg-gradient-to-b from-primary/60 to-transparent animate-pulse" />
      </div>
    </section>
  );
};

export default Hero;
