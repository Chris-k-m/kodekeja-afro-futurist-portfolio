import { Boxes, Code, Palette, Plug, Smartphone } from "lucide-react";
import Reveal from "./Reveal";

const features = [
  { icon: Code, title: "Custom Web Development", body: "Performant, accessible web platforms tailored to your domain." },
  { icon: Smartphone, title: "Mobile App Development", body: "Native-feeling apps that ship fast and scale cleanly." },
  { icon: Plug, title: "API Integrations", body: "Connect any system — payments, EMRs, messaging, analytics." },
  { icon: Boxes, title: "System Architecture Design", body: "Resilient, observable systems engineered for growth." },
  { icon: Palette, title: "UI / UX Design", body: "Interfaces with clear hierarchy, intent, and craft." },
];

const Features = () => (
  <section id="features" className="relative py-28 sm:py-36 scroll-mt-24">
    <div className="absolute inset-0 pattern-african opacity-40 -z-10" />
    <div className="container">
      <Reveal className="max-w-3xl">
        <p className="font-mono text-xs uppercase tracking-widest text-accent">// Capabilities</p>
        <h2 className="mt-4 font-display text-4xl sm:text-5xl font-bold tracking-tight">
          Everything needed to take an idea to <span className="text-gradient-primary">production.</span>
        </h2>
      </Reveal>

      <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {features.map((f, i) => (
          <Reveal key={f.title} delay={i * 80}>
            <div className="group relative h-full rounded-2xl glass gradient-border p-7 overflow-hidden transition-all duration-500 hover:-translate-y-1">
              <div className="absolute -top-12 -right-12 h-32 w-32 rounded-full bg-primary/15 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="relative">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-primary text-primary-foreground glow-primary">
                  <f.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-6 font-display text-xl font-semibold">{f.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{f.body}</p>
                <div className="mt-6 h-px w-12 bg-gradient-primary group-hover:w-24 transition-all duration-500" />
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

export default Features;
