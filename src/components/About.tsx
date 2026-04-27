import { Code2, Cpu, Globe2, Layers } from "lucide-react";
import Reveal from "./Reveal";
import AfricanDivider from "./AfricanDivider";

const tech = [
  "ASP.NET", "React", "REST APIs", "MongoDB", "MySQL", "Cloud Hosting",
];

const pillars = [
  { icon: Layers, title: "Full-stack engineering", body: "From data layer to interface — cohesive systems built end-to-end." },
  { icon: Cpu, title: "System design", body: "Architectures that scale gracefully under real-world load." },
  { icon: Code2, title: "Problem solving", body: "Software that solves the actual problem, not just ships features." },
  { icon: Globe2, title: "Africa to the world", body: "Locally rooted product thinking, globally competitive execution." },
];

const About = () => (
  <section id="about" className="relative py-28 sm:py-36 scroll-mt-24">
    <div className="absolute inset-0 pattern-african opacity-50 -z-10" />
    <div className="container">
      <Reveal className="text-center max-w-3xl mx-auto">
        <p className="font-mono text-xs uppercase tracking-widest text-primary">// About KodeKeja</p>
        <h2 className="mt-4 font-display text-4xl sm:text-5xl font-bold tracking-tight">
          A studio engineering <span className="text-gradient-primary">production-grade</span> software.
        </h2>
        <p className="mt-6 text-muted-foreground leading-relaxed">
          We design and build digital systems that businesses depend on — from fintech rails and clinical
          tools to NGO platforms and consumer apps. Our work blends rigorous engineering with thoughtful
          product design to ship things that work reliably, at scale.
        </p>
      </Reveal>

      <AfricanDivider className="my-16" />

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
        {pillars.map((p, i) => (
          <Reveal key={p.title} delay={i * 100}>
            <div className="group relative h-full rounded-2xl glass gradient-border p-6 transition-all duration-500 hover:-translate-y-1 hover:shadow-glow">
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:bg-gradient-primary group-hover:text-primary-foreground transition-all duration-500">
                <p.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 font-display font-semibold text-lg">{p.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{p.body}</p>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal delay={200} className="mt-14">
        <div className="rounded-2xl glass gradient-border p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-secondary">Core toolkit</p>
            <p className="mt-2 text-foreground/80">Production-tested across every project we ship.</p>
          </div>
          <ul className="flex flex-wrap gap-2">
            {tech.map((t) => (
              <li key={t} className="rounded-full border border-border bg-muted/30 px-3.5 py-1.5 text-xs font-mono text-foreground/85 hover:border-primary/60 hover:text-primary transition-colors">
                {t}
              </li>
            ))}
          </ul>
        </div>
      </Reveal>
    </div>
  </section>
);

export default About;
