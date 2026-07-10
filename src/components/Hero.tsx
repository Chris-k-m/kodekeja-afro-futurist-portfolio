import { ArrowRight, Sparkles } from "lucide-react";
import { useState } from "react";
import HeroBackground from "./HeroBackground";
import RubiksCube from "./RubiksCube";

const SOLUTIONS = [
  { label: "Brand & Design", desc: "Identity, product & interfaces" },
  { label: "Web Platforms", desc: "Sites & apps that feel effortless" },
  { label: "Mobile Apps", desc: "Products people open every day" },
  { label: "Fintech", desc: "Payments, lending & wallets" },
  { label: "HealthTech", desc: "Records, telehealth & care ops" },
  { label: "AI & Automation", desc: "Smart tools, quietly working" },
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
          <div className="inline-flex items-center gap-2 rounded-full glass gradient-border px-4 py-2 text-[11px] uppercase tracking-[0.28em] text-secondary">
            <Sparkles className="h-3.5 w-3.5 text-accent" />
            <span>Made in Africa</span>
            <span className="h-1 w-1 rounded-full bg-muted-foreground/60" />
            <span className="text-primary">Loved worldwide</span>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          {/* LEFT — Editorial copy */}
          <div className="animate-fade-in-up">
            <div className="inline-flex items-center gap-2 mb-5">
              <span className="h-px w-8 bg-gradient-to-r from-transparent to-primary" />
              <span className="text-[11px] uppercase tracking-[0.3em] text-primary font-medium">
                A studio, not a factory
              </span>
            </div>

            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl leading-[1.02] tracking-tight">
              We build <span className="text-gradient-primary italic">soulful</span> software,
              <br />
              <span className="text-foreground/80">rooted in African craft.</span>
            </h1>

            <p className="mt-7 text-lg text-foreground/80 leading-relaxed max-w-xl">
              KodeKeja is a small, senior team of designers and engineers helping
              founders, clinicians and communities turn caring ideas into products
              that quietly change lives.
            </p>

            <div className="mt-8 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

            <div className="mt-7 flex flex-col sm:flex-row gap-3">
              <a
                href="#projects"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-primary px-7 py-4 text-sm font-medium text-primary-foreground shadow-gold hover:scale-[1.03] transition-transform duration-300"
              >
                See our work
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="#contact"
                className="group inline-flex items-center justify-center gap-2 rounded-full glass gradient-border px-7 py-4 text-sm font-medium text-foreground hover:bg-muted/40 transition-colors"
              >
                Say hello
                <ArrowRight className="h-4 w-4 opacity-60 transition-transform group-hover:translate-x-1" />
              </a>
            </div>

            <div className="mt-8 grid grid-cols-3 gap-3 sm:gap-4">
              {[
                { k: "10+", v: "Products shipped" },
                { k: "4", v: "Industries served" },
                { k: "100%", v: "Made with care" },
              ].map((s) => (
                <div key={s.v} className="glass rounded-2xl p-3 sm:p-4 gradient-border">
                  <div className="font-display text-2xl sm:text-3xl text-gradient-primary">
                    {s.k}
                  </div>
                  <div className="mt-1 text-[11px] sm:text-xs text-muted-foreground">
                    {s.v}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT — 3D cube with pulsing solutions */}
          <div className="animate-fade-in-up [animation-delay:200ms] relative">
            <div className="relative aspect-square w-full max-w-[560px] mx-auto">
              <div className="absolute inset-8 rounded-full bg-accent/25 blur-3xl pointer-events-none" aria-hidden />
              <div className="absolute inset-12 rounded-full bg-primary/20 blur-3xl pointer-events-none" aria-hidden />

              <svg
                className="absolute inset-0 w-full h-full opacity-40 pointer-events-none animate-[spin_40s_linear_infinite]"
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

              <div
                key={solutionIdx}
                className="absolute left-1/2 -translate-x-1/2 bottom-2 sm:bottom-4 text-center pointer-events-none animate-fade-in"
              >
                <div className="text-[10px] uppercase tracking-[0.4em] text-muted-foreground mb-1">
                  what we do — {String(solutionIdx + 1).padStart(2, "0")}
                </div>
                <div
                  className="font-display text-3xl sm:text-4xl text-gradient-primary"
                  style={{ textShadow: `0 0 30px hsl(var(--accent) / 0.4)` }}
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
        <span className="text-[10px] uppercase tracking-widest">Scroll</span>
        <span className="block h-10 w-px bg-gradient-to-b from-primary/60 to-transparent animate-pulse" />
      </div>
    </section>
  );
};

export default Hero;
