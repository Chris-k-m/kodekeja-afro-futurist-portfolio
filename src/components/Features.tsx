import { Boxes, Code, Palette, Plug, Smartphone, Sparkles, Wrench } from "lucide-react";
import Reveal from "./Reveal";

const offerings = [
  { icon: Palette, label: "Brand & UI Design", body: "Identity systems, product design and interfaces that feel human first." },
  { icon: Code, label: "Web Development", body: "Fast, accessible websites and web apps — from marketing sites to complex platforms." },
  { icon: Smartphone, label: "Mobile Applications", body: "iOS and Android products crafted for the people who'll actually use them daily." },
  { icon: Plug, label: "Integrations & APIs", body: "Payments, messaging, records — connected cleanly to the tools you already trust." },
  { icon: Boxes, label: "Product Strategy", body: "Roadmaps, discovery and sequencing so the right thing gets built at the right time." },
  { icon: Wrench, label: "Care & Maintenance", body: "Long-term partnership — your product cared for after launch, not left on read." },
];

const Features = () => (
  <section id="features" className="relative py-28 sm:py-36 scroll-mt-24 overflow-hidden">
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[520px] w-[520px] rounded-full bg-primary/8 blur-[140px] -z-10" />

    <div className="container">
      <Reveal className="max-w-3xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 rounded-full glass gradient-border px-3.5 py-1.5">
          <Sparkles className="h-3.5 w-3.5 text-accent" />
          <span className="text-[11px] uppercase tracking-[0.28em] text-secondary font-medium">
            What we do
          </span>
        </div>
        <h2 className="mt-5 font-display text-4xl sm:text-5xl md:text-6xl leading-[1.05] tracking-tight">
          A full <span className="text-gradient-primary italic">studio</span>, not just a codebase.
        </h2>
        <p className="mt-5 text-muted-foreground leading-relaxed">
          Six ways we help teams turn a brief into something people love — from the first sketch to the version you ship next year.
        </p>
      </Reveal>

      <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {offerings.map((o, i) => (
          <Reveal key={o.label} delay={i * 90}>
            <div className="group relative h-full rounded-3xl glass gradient-border p-7 sm:p-8 overflow-hidden transition-all duration-500 hover:-translate-y-1.5 hover:shadow-elevate">
              <div className="absolute -top-16 -right-16 h-40 w-40 rounded-full bg-accent/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" aria-hidden />
              <div className="relative">
                <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-primary text-primary-foreground shadow-gold">
                  <o.icon className="h-6 w-6" />
                </div>
                <div className="mt-6 flex items-baseline gap-3">
                  <span className="font-display text-sm text-muted-foreground">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-display text-2xl leading-tight">{o.label}</h3>
                </div>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{o.body}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

export default Features;
