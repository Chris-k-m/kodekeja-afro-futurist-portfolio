import { ArrowUpRight, Sparkles, Sprout, Wine } from "lucide-react";
import Reveal from "./Reveal";
import ProjectCarousel from "./ProjectCarousel";

import sip1 from "@/assets/projects/sipsmart-home.jpg.asset.json";
import sip2 from "@/assets/projects/sipsmart-hydration.jpg.asset.json";
import sip3 from "@/assets/projects/sipsmart-rides.jpg.asset.json";
import sip4 from "@/assets/projects/sipsmart-buddy.jpg.asset.json";
import sip5 from "@/assets/projects/sipsmart-vibemap.jpg.asset.json";
import hess1 from "@/assets/projects/hess-1.jpg";
import hess2 from "@/assets/projects/hess-2.jpg";
import hess3 from "@/assets/projects/hess-3.jpg";

const projects = [
  {
    name: "SipSmart",
    tagline: "Smart drinking. Smarter living.",
    description:
      "A wellness companion that helps people track their drinks, stay hydrated and make kinder choices for themselves — balance without restriction, insight without judgement.",
    tags: ["Mobile App", "Wellness", "Lifestyle"],
    icon: Wine,
    accent: "from-primary/25 to-accent/25",
    images: [
      { src: sip1, alt: "SipSmart tracking dashboard" },
      { src: sip2, alt: "SipSmart hydration reminders UI" },
      { src: sip3, alt: "SipSmart analytics screen" },
    ],
  },
  {
    name: "HESS",
    tagline: "Humane education for a sustainable world.",
    description:
      "A platform for Humane Education Sustainable Solutions — supporting schools and communities with programmes that grow respect for people, animals and the land they share.",
    tags: ["Website", "NGO", "Sustainability"],
    icon: Sprout,
    accent: "from-secondary/25 to-primary/25",
    images: [
      { src: hess1, alt: "HESS homepage" },
      { src: hess2, alt: "HESS education programs page" },
      { src: hess3, alt: "HESS impact section" },
    ],
  },
];

const Projects = () => (
  <section id="projects" className="relative py-28 sm:py-36 scroll-mt-24 overflow-hidden">
    <div className="absolute inset-0 pattern-mud-cloth opacity-40 -z-10" />
    <div className="container">
      <Reveal className="max-w-3xl">
        <div className="inline-flex items-center gap-2 rounded-full glass gradient-border px-3.5 py-1.5">
          <Sparkles className="h-3.5 w-3.5 text-accent" />
          <span className="text-[11px] uppercase tracking-[0.28em] text-secondary font-medium">
            Selected work
          </span>
        </div>
        <h2 className="mt-5 font-display text-4xl sm:text-5xl md:text-6xl leading-[1.05] tracking-tight">
          Stories we've helped <span className="text-gradient-primary italic">bring to life.</span>
        </h2>
        <p className="mt-5 text-muted-foreground max-w-2xl leading-relaxed">
          Every product here started with a real conversation — a founder, a family, a community — and grew into something people actually use.
        </p>
      </Reveal>

      {/* Bento grid */}
      <div className="mt-14 grid gap-6 md:grid-cols-6">
        {projects.map((p, i) => (
          <Reveal
            key={p.name}
            delay={i * 120}
            className={i === 0 ? "md:col-span-4" : "md:col-span-2"}
          >
            <article className="group relative h-full rounded-[28px] glass gradient-border overflow-hidden transition-all duration-500 hover:-translate-y-1.5 hover:shadow-elevate flex flex-col">
              <div className={`absolute inset-0 bg-gradient-to-br ${p.accent} opacity-40 pointer-events-none`} aria-hidden />

              <div className="relative p-4 sm:p-5 pb-0">
                <ProjectCarousel images={p.images} intervalMs={4200 + i * 500} />
              </div>

              <div className="relative p-6 sm:p-8 flex flex-col flex-1">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-primary text-primary-foreground shadow-gold">
                      <p.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-display text-2xl sm:text-3xl tracking-tight leading-tight">
                        {p.name}
                      </h3>
                      <p className="text-xs italic text-secondary mt-1">{p.tagline}</p>
                    </div>
                  </div>
                  <button
                    type="button"
                    aria-label={`Open ${p.name}`}
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-background/70 border border-border text-foreground/70 hover:text-primary hover:border-primary/60 hover:rotate-45 transition-all duration-500"
                  >
                    <ArrowUpRight className="h-4 w-4" />
                  </button>
                </div>

                <p className="mt-5 text-sm sm:text-[15px] text-muted-foreground leading-relaxed">
                  {p.description}
                </p>

                <div className="mt-auto pt-6 flex items-center justify-between gap-4 flex-wrap">
                  <ul className="flex flex-wrap gap-2">
                    {p.tags.map((t) => (
                      <li key={t} className="rounded-full border border-border bg-background/60 px-3 py-1 text-[11px] uppercase tracking-wider text-foreground/70">
                        {t}
                      </li>
                    ))}
                  </ul>
                  <button
                    type="button"
                    className="shrink-0 inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-xs uppercase tracking-wider text-primary border border-primary/40 hover:bg-primary hover:text-primary-foreground transition-all"
                  >
                    View project
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </button>
                </div>
              </div>
            </article>
          </Reveal>
        ))}

        {/* Bento CTA tile */}
        <Reveal delay={280} className="md:col-span-6">
          <div className="relative rounded-[28px] overflow-hidden bg-gradient-primary text-primary-foreground p-8 sm:p-12 flex flex-col sm:flex-row sm:items-center gap-6 shadow-elevate">
            <div className="absolute inset-0 pattern-african opacity-20 mix-blend-overlay pointer-events-none" aria-hidden />
            <div className="relative flex-1">
              <p className="text-[11px] uppercase tracking-[0.3em] opacity-80">Your idea, next</p>
              <h3 className="mt-3 font-display text-3xl sm:text-4xl leading-tight">
                Have a story worth building?
              </h3>
              <p className="mt-3 max-w-xl opacity-90">
                We take small teams and big ideas from sketch to shipped — with warmth, craft and the kind of care that lasts.
              </p>
            </div>
            <a
              href="#contact"
              className="relative inline-flex items-center gap-2 rounded-full bg-background/95 text-foreground px-6 py-3.5 font-medium hover:scale-[1.03] transition-transform"
            >
              Start a conversation
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </Reveal>
      </div>
    </div>
  </section>
);

export default Projects;
