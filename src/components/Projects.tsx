import { ArrowUpRight, Heart, Smartphone, Sprout, Wine } from "lucide-react";
import Reveal from "./Reveal";

const projects = [
  {
    name: "Gigi Support",
    tagline: "Therapy made practical for everyday life.",
    description:
      "Virginia (Gigi) Dubois is a Registered Social Service Worker based in Canada, providing compassionate and practical support to individuals, families, and caregivers. The platform focuses on making therapeutic tools accessible for everyday life, with a collaborative care approach alongside Occupational and Physical Therapists.",
    tags: ["Website", "Healthcare", "Canada"],
    icon: Heart,
    accent: "from-primary/30 to-secondary/20",
    color: "text-primary",
  },
  {
    name: "Blue",
    tagline: "Care, simplified.",
    description:
      "A patient-centered medical application designed to connect individuals with hospital services seamlessly. Blue simplifies access to healthcare by bridging the gap between patients and providers through a digital-first experience.",
    tags: ["Mobile App", "HealthTech"],
    icon: Smartphone,
    accent: "from-primary/40 to-primary/10",
    color: "text-primary",
  },
  {
    name: "SipSmart",
    tagline: "Smart Drinking. Smarter Living.",
    description:
      "A wellness app that helps users track their drinks, stay hydrated, and make safer lifestyle choices. Focused on balance rather than restriction, SipSmart empowers users to stay in control while enjoying life.",
    tags: ["Mobile App", "Lifestyle", "Wellness"],
    icon: Wine,
    accent: "from-accent/30 to-secondary/20",
    color: "text-accent",
  },
  {
    name: "HESS",
    tagline: "Humane education for a sustainable world.",
    description:
      "Humane Education Sustainable Solutions (HESS) is an NGO advancing sustainable education systems. The platform supports schools and communities by promoting humane education principles that foster respect for people, animals, and the environment.",
    tags: ["Website", "NGO", "Sustainability"],
    icon: Sprout,
    accent: "from-secondary/40 to-primary/10",
    color: "text-secondary",
  },
];

const Projects = () => (
  <section id="projects" className="relative py-28 sm:py-36 scroll-mt-24">
    <div className="container">
      <Reveal className="max-w-3xl">
        <p className="font-mono text-xs uppercase tracking-widest text-secondary">// Selected work</p>
        <h2 className="mt-4 font-display text-4xl sm:text-5xl font-bold tracking-tight">
          Projects we've shipped <span className="text-gradient-primary">into the wild.</span>
        </h2>
        <p className="mt-5 text-muted-foreground max-w-2xl leading-relaxed">
          Real systems serving real users — across healthcare, wellness, NGOs, and more.
        </p>
      </Reveal>

      <div className="mt-14 grid md:grid-cols-2 gap-6">
        {projects.map((p, i) => (
          <Reveal key={p.name} delay={i * 100}>
            <article className="group relative h-full rounded-3xl glass gradient-border overflow-hidden transition-all duration-500 hover:-translate-y-1.5 hover:shadow-elevate">
              {/* gradient wash */}
              <div className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${p.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />
              {/* pattern */}
              <div className="absolute inset-0 pattern-grid opacity-20" aria-hidden />

              <div className="relative p-7 sm:p-8 flex flex-col h-full">
                <div className="flex items-start justify-between gap-4">
                  <div className={`inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-background/60 ring-1 ring-border ${p.color} group-hover:scale-110 transition-transform duration-500`}>
                    <p.icon className="h-5 w-5" />
                  </div>
                  <button
                    type="button"
                    aria-label={`Open ${p.name}`}
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full glass gradient-border text-foreground/70 hover:text-primary hover:rotate-45 transition-all duration-500"
                  >
                    <ArrowUpRight className="h-4 w-4" />
                  </button>
                </div>

                <div className="mt-6">
                  <h3 className="font-display text-2xl sm:text-3xl font-semibold tracking-tight">
                    {p.name}
                  </h3>
                  <p className="mt-1 text-sm font-mono text-primary/80">{p.tagline}</p>
                </div>

                <p className="mt-5 text-sm sm:text-[15px] text-muted-foreground leading-relaxed">
                  {p.description}
                </p>

                <ul className="mt-6 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <li key={t} className="rounded-full border border-border bg-background/40 px-3 py-1 text-[11px] font-mono uppercase tracking-wider text-foreground/75">
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

export default Projects;
