import { ArrowUpRight, Heart, Smartphone, Sprout, Wine } from "lucide-react";
import Reveal from "./Reveal";
import ProjectCarousel from "./ProjectCarousel";

import gigi1 from "@/assets/projects/gigi-1.jpg";
import gigi2 from "@/assets/projects/gigi-2.jpg";
import gigi3 from "@/assets/projects/gigi-3.jpg";
import blue1 from "@/assets/projects/blue-1.jpg";
import blue2 from "@/assets/projects/blue-2.jpg";
import blue3 from "@/assets/projects/blue-3.jpg";
import sip1 from "@/assets/projects/sip-1.jpg";
import sip2 from "@/assets/projects/sip-2.jpg";
import sip3 from "@/assets/projects/sip-3.jpg";
import hess1 from "@/assets/projects/hess-1.jpg";
import hess2 from "@/assets/projects/hess-2.jpg";
import hess3 from "@/assets/projects/hess-3.jpg";

const projects = [
  {
    name: "Gigi Support",
    tagline: "Therapy made practical for everyday life.",
    description:
      "Virginia (Gigi) Dubois is a Registered Social Service Worker based in Canada, providing compassionate, practical support to individuals, families, and caregivers. We built a calm, accessible platform that surfaces therapeutic tools for everyday life and supports a collaborative care approach with Occupational and Physical Therapists.",
    tags: ["Website", "Healthcare", "Canada"],
    icon: Heart,
    color: "text-primary",
    images: [
      { src: gigi1, alt: "Gigi Support homepage design" },
      { src: gigi2, alt: "Gigi Support about page" },
      { src: gigi3, alt: "Gigi Support contact interface" },
    ],
  },
  {
    name: "Blue",
    tagline: "Care, simplified.",
    description:
      "A patient-centered medical application designed to connect individuals with hospital services seamlessly. Blue simplifies access to healthcare by bridging the gap between patients and providers through a digital-first experience — from finding the right facility to booking the right appointment.",
    tags: ["Mobile App", "HealthTech"],
    icon: Smartphone,
    color: "text-primary",
    images: [
      { src: blue1, alt: "Blue mobile dashboard" },
      { src: blue2, alt: "Blue hospital selection screen" },
      { src: blue3, alt: "Blue appointment booking interface" },
    ],
  },
  {
    name: "SipSmart",
    tagline: "Smart Drinking. Smarter Living.",
    description:
      "A wellness app that helps users track their drinks, stay hydrated, and make safer lifestyle choices. SipSmart is designed around balance — not restriction — empowering people to stay in control while still enjoying life, with insights that nudge healthier habits over time.",
    tags: ["Mobile App", "Lifestyle", "Wellness"],
    icon: Wine,
    color: "text-accent",
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
      "Humane Education Sustainable Solutions (HESS) is an NGO advancing sustainable education systems. The platform supports schools and communities by promoting humane education principles that foster respect for people, animals, and the environment — paired with measurable, transparent impact reporting.",
    tags: ["Website", "NGO", "Sustainability"],
    icon: Sprout,
    color: "text-secondary",
    images: [
      { src: hess1, alt: "HESS homepage" },
      { src: hess2, alt: "HESS education programs page" },
      { src: hess3, alt: "HESS impact section" },
    ],
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

      <div className="mt-14 grid lg:grid-cols-2 gap-6">
        {projects.map((p, i) => (
          <Reveal key={p.name} delay={i * 100}>
            <article className="group relative h-full rounded-3xl glass gradient-border overflow-hidden transition-all duration-500 hover:-translate-y-1.5 hover:shadow-elevate flex flex-col">
              <div className="p-4 sm:p-5 pb-0">
                <ProjectCarousel images={p.images} intervalMs={4000 + i * 500} />
              </div>

              <div className="relative p-6 sm:p-7 flex flex-col flex-1">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className={`inline-flex h-11 w-11 items-center justify-center rounded-xl bg-background/60 ring-1 ring-border ${p.color}`}>
                      <p.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-display text-2xl font-semibold tracking-tight leading-tight">
                        {p.name}
                      </h3>
                      <p className="text-xs font-mono text-primary/80 mt-0.5">{p.tagline}</p>
                    </div>
                  </div>
                  <button
                    type="button"
                    aria-label={`Open ${p.name}`}
                    className="inline-flex h-9 w-9 items-center justify-center rounded-full glass gradient-border text-foreground/70 hover:text-primary hover:rotate-45 transition-all duration-500"
                  >
                    <ArrowUpRight className="h-4 w-4" />
                  </button>
                </div>

                <p className="mt-5 text-sm sm:text-[15px] text-muted-foreground leading-relaxed">
                  {p.description}
                </p>

                <div className="mt-auto pt-6 flex items-center justify-between gap-4">
                  <ul className="flex flex-wrap gap-2">
                    {p.tags.map((t) => (
                      <li key={t} className="rounded-full border border-border bg-background/40 px-3 py-1 text-[11px] font-mono uppercase tracking-wider text-foreground/75">
                        {t}
                      </li>
                    ))}
                  </ul>
                  <button
                    type="button"
                    className="shrink-0 inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-xs font-mono uppercase tracking-wider text-primary border border-primary/40 hover:bg-primary hover:text-primary-foreground transition-all"
                  >
                    View Project
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </button>
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

export default Projects;
