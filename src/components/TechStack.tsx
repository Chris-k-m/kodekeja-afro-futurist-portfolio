import Reveal from "./Reveal";

const stack = [
  { name: "C#", group: "Backend" },
  { name: "ASP.NET", group: "Framework" },
  { name: "React", group: "Frontend" },
  { name: "JavaScript", group: "Language" },
  { name: "Python", group: "Language" },
  { name: "MongoDB", group: "Database" },
  { name: "MySQL", group: "Database" },
];

const TechStack = () => (
  <section id="stack" className="relative py-28 sm:py-32 scroll-mt-24">
    <div className="container">
      <Reveal className="text-center max-w-2xl mx-auto">
        <p className="font-mono text-xs uppercase tracking-widest text-primary">// Tech stack</p>
        <h2 className="mt-4 font-display text-4xl sm:text-5xl font-bold tracking-tight">
          Battle-tested <span className="text-gradient-primary">tooling.</span>
        </h2>
        <p className="mt-5 text-muted-foreground">The technologies we reach for to build reliable, maintainable systems.</p>
      </Reveal>

      <Reveal delay={150} className="mt-14">
        <div className="rounded-3xl glass gradient-border p-8 sm:p-10">
          <ul className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-4">
            {stack.map((s, i) => (
              <li
                key={s.name}
                className="group relative flex flex-col items-center justify-center rounded-2xl border border-border bg-background/40 px-3 py-6 text-center hover:border-primary/60 hover:bg-primary/5 transition-all duration-500 hover:-translate-y-1"
                style={{ animationDelay: `${i * 60}ms` }}
              >
                <span className="font-display font-semibold text-base text-foreground group-hover:text-gradient-primary transition-colors">
                  {s.name}
                </span>
                <span className="mt-1 text-[10px] font-mono uppercase tracking-widest text-muted-foreground">
                  {s.group}
                </span>
                <span className="absolute inset-x-6 bottom-3 h-px scale-x-0 origin-left bg-gradient-primary group-hover:scale-x-100 transition-transform duration-500" />
              </li>
            ))}
          </ul>
        </div>
      </Reveal>
    </div>
  </section>
);

export default TechStack;
