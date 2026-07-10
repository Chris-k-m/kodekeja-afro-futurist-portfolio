import { Compass, HandHeart, Leaf, Sparkles } from "lucide-react";
import Reveal from "./Reveal";
import AfricanDivider from "./AfricanDivider";

const values = [
  {
    icon: HandHeart,
    title: "People before pixels",
    body: "We start with the humans on the other side of the screen — their frustrations, their hopes, their everyday reality.",
  },
  {
    icon: Compass,
    title: "Rooted, not stuck",
    body: "Rooted in African craft and story. Not stuck in one aesthetic — we pull from tradition and the future in equal measure.",
  },
  {
    icon: Sparkles,
    title: "Craft you can feel",
    body: "The polish is in the details you don't notice — the soft transition, the honest copy, the button that never fails.",
  },
  {
    icon: Leaf,
    title: "Built to last",
    body: "Software that ages gracefully. Systems that grow with you instead of collapsing under their own weight.",
  },
];

const About = () => (
  <section id="about" className="relative py-28 sm:py-36 scroll-mt-24 overflow-hidden">
    <div className="absolute inset-0 pattern-african opacity-50 -z-10" />
    <div className="absolute -top-40 -right-20 h-96 w-96 rounded-full bg-accent/20 blur-[120px] -z-10" aria-hidden />
    <div className="absolute -bottom-40 -left-20 h-96 w-96 rounded-full bg-secondary/15 blur-[120px] -z-10" aria-hidden />

    <div className="container">
      <div className="grid lg:grid-cols-[1fr_1.1fr] gap-12 lg:gap-20 items-start">
        <Reveal>
          <p className="text-[11px] uppercase tracking-[0.3em] text-secondary font-medium">Our story</p>
          <h2 className="mt-4 font-display text-4xl sm:text-5xl md:text-6xl leading-[1.05] tracking-tight">
            A studio where <span className="text-gradient-primary italic">craft</span> and <span className="text-gradient-primary italic">code</span> share the same room.
          </h2>
          <p className="mt-6 text-lg text-foreground/80 leading-relaxed">
            KodeKeja is a design and engineering studio based in Nairobi, working with founders, non-profits and clinicians who care deeply about the people they serve.
          </p>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            We believe great software feels like a good conversation — warm, clear, unhurried. So we build with the same values that shape our part of the world: patience, community, and a stubborn love for things done properly.
          </p>

          <AfricanDivider className="my-10" />

          <div className="grid grid-cols-3 gap-4">
            {[
              { k: "10+", v: "Products shipped" },
              { k: "4", v: "Industries served" },
              { k: "100%", v: "Made with care" },
            ].map((s) => (
              <div key={s.v} className="rounded-2xl bg-background/70 border border-border p-4">
                <div className="font-display text-3xl text-gradient-primary">{s.k}</div>
                <div className="mt-1 text-xs text-muted-foreground">{s.v}</div>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={150}>
          <div className="grid sm:grid-cols-2 gap-4 sm:gap-5">
            {values.map((v, i) => (
              <div
                key={v.title}
                className={`group relative rounded-3xl glass gradient-border p-6 sm:p-7 transition-all duration-500 hover:-translate-y-1 hover:shadow-elevate ${
                  i % 2 === 1 ? "sm:mt-10" : ""
                }`}
              >
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-primary text-primary-foreground shadow-gold">
                  <v.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 font-display text-2xl leading-tight">{v.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{v.body}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </div>
  </section>
);

export default About;
