import { useEffect, useRef, useState } from "react";
import Reveal from "./Reveal";

type Line = {
  prompt?: string;
  command?: string;
  output?: string;
  outputClass?: string;
};

const lines: Line[] = [
  { prompt: "kodekeja@system:~$", command: "whoami" },
  { output: "We are a technology company building scalable, real-world systems.", outputClass: "text-foreground/85" },
  { prompt: "kodekeja@system:~$", command: "capabilities" },
  { output: "Full-stack development | API integrations | System architecture | UI/UX", outputClass: "text-secondary" },
  { prompt: "kodekeja@system:~$", command: "tech_stack" },
  { output: "ASP.NET | React | MongoDB | MySQL | Python", outputClass: "text-accent" },
  { prompt: "kodekeja@system:~$", command: "mission" },
  { output: "Engineer reliable systems. Solve real problems. Ship at scale.", outputClass: "text-foreground/85" },
];

// Flatten into typed segments for sequential typing
type Segment = { text: string; className: string; newlineAfter?: boolean };

const buildSegments = (): Segment[] => {
  const segs: Segment[] = [];
  lines.forEach((l) => {
    if (l.prompt) {
      segs.push({ text: l.prompt + " ", className: "text-secondary" });
      segs.push({ text: (l.command ?? "") + "\n", className: "text-primary" });
    } else if (l.output) {
      segs.push({ text: "> " + l.output + "\n\n", className: l.outputClass ?? "text-foreground/85" });
    }
  });
  return segs;
};

const SEGMENTS = buildSegments();
const TOTAL_CHARS = SEGMENTS.reduce((n, s) => n + s.text.length, 0);
const SPEED_MS = 18;

const Terminal = () => {
  const [count, setCount] = useState(0);
  const [done, setDone] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const startedRef = useRef(false);

  // Start typing on first scroll-into-view
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting && !startedRef.current) {
            startedRef.current = true;
            const id = setInterval(() => {
              setCount((c) => {
                if (c >= TOTAL_CHARS) {
                  clearInterval(id);
                  setDone(true);
                  return c;
                }
                return c + 1;
              });
            }, SPEED_MS);
          }
        });
      },
      { threshold: 0.25 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const skip = () => {
    setCount(TOTAL_CHARS);
    setDone(true);
  };

  // Build rendered output up to `count` characters
  let remaining = count;
  const rendered: JSX.Element[] = [];
  SEGMENTS.forEach((seg, i) => {
    if (remaining <= 0) return;
    const slice = seg.text.slice(0, remaining);
    remaining -= slice.length;
    rendered.push(
      <span key={i} className={seg.className}>
        {slice}
      </span>,
    );
  });

  return (
    <section id="about" className="relative py-28 sm:py-36 scroll-mt-24">
      <div className="absolute inset-0 pattern-african opacity-40 -z-10" />
      <div className="container max-w-5xl">
        <Reveal className="text-center max-w-3xl mx-auto">
          <p className="font-mono text-xs uppercase tracking-widest text-primary">// About KodeKeja</p>
          <h2 className="mt-4 font-display text-4xl sm:text-5xl font-bold tracking-tight">
            Boot up the <span className="text-gradient-primary">system.</span>
          </h2>
          <p className="mt-5 text-muted-foreground leading-relaxed">
            A peek at who we are — straight from the command line.
          </p>
        </Reveal>

        <Reveal delay={120} className="mt-12">
          <div
            ref={containerRef}
            onClick={() => !done && skip()}
            className="group relative rounded-2xl glass gradient-border overflow-hidden shadow-elevate cursor-text select-text"
            role="region"
            aria-label="Terminal"
          >
            {/* Window chrome */}
            <div className="flex items-center gap-2 px-4 py-3 border-b border-border/60 bg-background/40">
              <span className="h-3 w-3 rounded-full bg-destructive/80" />
              <span className="h-3 w-3 rounded-full bg-accent" />
              <span className="h-3 w-3 rounded-full bg-secondary" />
              <span className="ml-3 font-mono text-xs text-muted-foreground">
                kodekeja — zsh — 80×24
              </span>
              {!done && (
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    skip();
                  }}
                  className="ml-auto font-mono text-[11px] uppercase tracking-wider text-muted-foreground hover:text-primary transition-colors"
                >
                  skip ▸
                </button>
              )}
            </div>

            {/* Terminal body */}
            <pre className="m-0 p-6 sm:p-8 font-mono text-sm sm:text-[15px] leading-relaxed whitespace-pre-wrap break-words min-h-[320px] sm:min-h-[360px] bg-[hsl(222_47%_3%)]/60">
              {rendered}
              <span
                className={`inline-block w-2 h-4 align-[-2px] ml-0.5 bg-primary ${
                  done ? "animate-pulse" : ""
                }`}
                style={{ animation: done ? undefined : "pulse-glow 1s steps(2) infinite" }}
              />
            </pre>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Terminal;
