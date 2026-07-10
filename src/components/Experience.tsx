import { Briefcase, Building2, Calendar, Cpu } from "lucide-react";
import Reveal from "./Reveal";

const topSkills = [
  "C#",
  ".NET Framework",
  "ASP.NET AJAX",
  "JavaScript",
  "SQL Server",
];

const otherSkills = [
  "Python",
  "HTML5",
  "CSS",
  "OOP",
  "Crystal Reports",
  "Biometrics",
];

const Experience = () => (
  <section id="experience" className="relative py-28 sm:py-32 scroll-mt-24">
    <div className="absolute inset-0 pattern-african opacity-30 -z-10" />
    <div className="container max-w-6xl">
      <Reveal className="text-center max-w-2xl mx-auto">
        <p className="text-[11px] uppercase tracking-[0.3em] text-secondary font-medium">Experience</p>
        <h2 className="mt-4 font-display text-4xl sm:text-5xl md:text-6xl leading-[1.05] tracking-tight">
          Shaped in the <span className="text-gradient-primary italic">real world.</span>
        </h2>
        <p className="mt-5 text-muted-foreground">
          Years spent inside production systems used by real people — that's where our craft was tempered.
        </p>
      </Reveal>

      <Reveal delay={120} className="mt-14">
        <div className="relative rounded-3xl glass gradient-border p-6 sm:p-10 shadow-elevate overflow-hidden">
          {/* Glow accent */}
          <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-primary/15 blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-secondary/15 blur-3xl pointer-events-none" />

          <div className="relative grid lg:grid-cols-[1fr_1.2fr] gap-8 lg:gap-12">
            {/* Left — role identity */}
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-border bg-background/40 px-3 py-1 font-mono text-[11px] uppercase tracking-widest text-secondary">
                <span className="h-1.5 w-1.5 rounded-full bg-secondary animate-pulse" />
                Past role
              </div>

              <h3 className="mt-5 font-display text-3xl sm:text-4xl font-bold tracking-tight">
                Full-Stack Developer
              </h3>

              <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-muted-foreground">
                <span className="inline-flex items-center gap-2">
                  <Building2 className="h-4 w-4 text-primary" />
                  <span className="text-foreground/90 font-medium">Craft Silicon</span>
                </span>
                <span className="inline-flex items-center gap-2">
                  <Briefcase className="h-4 w-4 text-accent" />
                  Fintech · Banking Systems
                </span>
              </div>

              <p className="mt-6 text-foreground/80 leading-relaxed">
                Engineered and maintained enterprise-grade financial software — building
                reporting tools, biometric integrations, and core banking modules used
                by institutions across emerging markets.
              </p>

              <div className="mt-8 inline-flex items-center gap-3 rounded-xl border border-border bg-background/40 px-4 py-3">
                <Cpu className="h-4 w-4 text-primary" />
                <div className="font-mono text-xs">
                  <span className="text-muted-foreground">status: </span>
                  <span className="text-secondary">production_shipped</span>
                </div>
              </div>
            </div>

            {/* Right — skills */}
            <div>
              <p className="font-mono text-xs uppercase tracking-widest text-accent">
                Top 5 skills
              </p>
              <ul className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
                {topSkills.map((skill, i) => (
                  <li
                    key={skill}
                    className="group relative flex items-center gap-3 rounded-xl border border-border bg-background/40 px-4 py-3 hover:border-primary/60 hover:bg-primary/5 transition-all duration-500"
                  >
                    <span className="font-mono text-[11px] text-muted-foreground w-6">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="font-display font-semibold text-foreground group-hover:text-primary transition-colors">
                      {skill}
                    </span>
                    <span className="ml-auto h-1.5 w-1.5 rounded-full bg-primary/60 group-hover:bg-primary group-hover:shadow-glow transition" />
                  </li>
                ))}
              </ul>

              <p className="mt-8 font-mono text-xs uppercase tracking-widest text-secondary">
                Also worked with
              </p>
              <ul className="mt-3 flex flex-wrap gap-2">
                {otherSkills.map((s) => (
                  <li
                    key={s}
                    className="rounded-full border border-border bg-muted/30 px-3 py-1.5 text-xs font-mono text-foreground/85 hover:border-secondary/60 hover:text-secondary transition-colors"
                  >
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Reveal>

      {/* Currently building */}
      <Reveal delay={200} className="mt-10">
        <div className="relative rounded-2xl glass gradient-border p-6 sm:p-8 overflow-hidden">
          <div className="absolute inset-0 pattern-grid opacity-30 pointer-events-none" />
          <div className="relative flex flex-col sm:flex-row sm:items-center gap-5">
            <div className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/10 px-3 py-1 font-mono text-[11px] uppercase tracking-widest text-accent w-fit">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-accent opacity-75 animate-ping" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
              </span>
              Currently building
            </div>
            <div className="flex-1">
              <h4 className="font-display text-xl sm:text-2xl font-semibold">
                <span className="text-gradient-primary">SMC Trading Bot</span>
              </h4>
              <p className="mt-1 text-sm text-muted-foreground">
                A Smart Money Concepts–driven algorithmic trading system — automated
                market structure analysis, liquidity sweeps, and order block execution.
              </p>
            </div>
            <div className="hidden sm:flex font-mono text-[11px] text-muted-foreground">
              <Calendar className="h-3.5 w-3.5 mr-1.5 text-primary" /> in progress
            </div>
          </div>
        </div>
      </Reveal>
    </div>
  </section>
);

export default Experience;
