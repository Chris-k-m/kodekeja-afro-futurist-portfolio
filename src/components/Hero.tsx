import { ArrowRight, Sparkles } from "lucide-react";
import HeroBackground from "./HeroBackground";

const Hero = () => {
  return (
    <section id="top" className="relative min-h-[100svh] flex items-center pt-32 pb-20 overflow-hidden">
      <HeroBackground />

      <div className="container relative">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-mono uppercase tracking-widest text-muted-foreground animate-fade-in">
            <Sparkles className="h-3.5 w-3.5 text-accent" />
            <span>Engineered in Africa · Deployed worldwide</span>
          </div>

          <h1 className="mt-8 font-display font-bold tracking-tight text-5xl sm:text-6xl lg:text-7xl leading-[1.05] animate-fade-in-up">
            Building <span className="text-gradient">Smart Systems</span>
            <br />
            for a <span className="relative inline-block">
              Smarter Future
              <svg className="absolute -bottom-2 left-0 w-full" height="10" viewBox="0 0 300 10" preserveAspectRatio="none" aria-hidden>
                <path d="M2 6 Q 75 1, 150 6 T 298 6" stroke="url(#g)" strokeWidth="2.5" fill="none" strokeLinecap="round" />
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

          <p className="mt-8 max-w-2xl mx-auto text-base sm:text-lg text-muted-foreground leading-relaxed animate-fade-in-up [animation-delay:200ms]">
            KodeKeja is a technology company focused on building scalable, intelligent digital solutions
            across <span className="text-foreground/90">fintech</span>,{" "}
            <span className="text-foreground/90">healthtech</span>, and{" "}
            <span className="text-foreground/90">web platforms</span>.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up [animation-delay:400ms]">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-primary px-7 py-3.5 text-sm font-medium text-primary-foreground glow-primary hover:scale-[1.04] transition-transform duration-300"
            >
              View Projects
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-full glass gradient-border px-7 py-3.5 text-sm font-medium text-foreground hover:bg-muted/40 transition-colors"
            >
              Get In Touch
              <ArrowRight className="h-4 w-4 opacity-60 transition-transform group-hover:translate-x-1" />
            </a>
          </div>

          {/* Stats */}
          <div className="mt-20 grid grid-cols-3 gap-4 sm:gap-8 max-w-2xl mx-auto animate-fade-in-up [animation-delay:600ms]">
            {[
              { k: "10+", v: "Systems shipped" },
              { k: "4", v: "Industries served" },
              { k: "100%", v: "Built to scale" },
            ].map((s) => (
              <div key={s.v} className="glass rounded-2xl p-4 sm:p-5 gradient-border">
                <div className="font-display text-2xl sm:text-3xl font-bold text-gradient-primary">{s.k}</div>
                <div className="mt-1 text-xs sm:text-sm text-muted-foreground">{s.v}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* scroll cue */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden sm:flex flex-col items-center gap-2 text-muted-foreground">
        <span className="text-[10px] font-mono uppercase tracking-widest">Scroll</span>
        <span className="block h-10 w-px bg-gradient-to-b from-primary/60 to-transparent animate-pulse" />
      </div>
    </section>
  );
};

export default Hero;
