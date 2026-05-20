import { useState } from "react";
import { Github, Linkedin, Mail, Phone, Send, Twitter } from "lucide-react";
import { toast } from "sonner";
import Reveal from "./Reveal";

const Contact = () => {
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      (e.target as HTMLFormElement).reset();
      toast.success("Message sent — we'll be in touch shortly.");
    }, 800);
  };

  return (
    <section id="contact" className="relative py-28 sm:py-36 scroll-mt-24">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          <Reveal>
            <p className="font-mono text-xs uppercase tracking-widest text-secondary">// Contact</p>
            <h2 className="mt-4 font-display text-4xl sm:text-5xl font-bold tracking-tight">
              Let's build something <span className="text-gradient-primary">that lasts.</span>
            </h2>
            <p className="mt-5 text-muted-foreground leading-relaxed max-w-md">
              Whether it's a new product, a system rebuild, or a critical integration —
              tell us what you're working on.
            </p>

            <a
              href="mailto:kodekeja@gmail.com"
              className="mt-8 inline-flex items-center gap-3 rounded-2xl glass gradient-border px-5 py-4 hover:bg-muted/40 transition-colors group"
            >
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-primary text-primary-foreground">
                <Mail className="h-4 w-4" />
              </span>
              <span>
                <span className="block text-[10px] font-mono uppercase tracking-widest text-muted-foreground">Email us</span>
                <span className="block font-display font-semibold group-hover:text-primary transition-colors">kodekeja@gmail.com</span>
              </span>
            </a>

            <a
              href="tel:+254788834934"
              className="mt-4 inline-flex items-center gap-3 rounded-2xl glass gradient-border px-5 py-4 hover:bg-muted/40 transition-colors group"
            >
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-primary text-primary-foreground">
                <Phone className="h-4 w-4" />
              </span>
              <span>
                <span className="block text-[10px] font-mono uppercase tracking-widest text-muted-foreground">Call us</span>
                <span className="block font-display font-semibold group-hover:text-primary transition-colors">+254 788 834 934</span>
              </span>
            </a>

            <div className="mt-10">
              <p className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground">Follow</p>
              <div className="mt-3 flex gap-3">
                {[
                  { icon: Github, label: "GitHub", href: "#" },
                  { icon: Linkedin, label: "LinkedIn", href: "#" },
                  { icon: Twitter, label: "Twitter", href: "#" },
                ].map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    aria-label={s.label}
                    className="inline-flex h-11 w-11 items-center justify-center rounded-full glass gradient-border text-foreground/80 hover:text-primary hover:-translate-y-1 transition-all duration-500"
                  >
                    <s.icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={150}>
            <form
              onSubmit={onSubmit}
              className="rounded-3xl glass gradient-border p-7 sm:p-9 space-y-5"
            >
              <div>
                <label htmlFor="name" className="block text-[11px] font-mono uppercase tracking-widest text-muted-foreground mb-2">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  required
                  placeholder="Your name"
                  className="w-full rounded-xl bg-background/40 border border-border px-4 py-3 text-sm placeholder:text-muted-foreground/60 focus:outline-none focus:border-primary/70 focus:ring-2 focus:ring-primary/20 transition"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-[11px] font-mono uppercase tracking-widest text-muted-foreground mb-2">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="you@company.com"
                  className="w-full rounded-xl bg-background/40 border border-border px-4 py-3 text-sm placeholder:text-muted-foreground/60 focus:outline-none focus:border-primary/70 focus:ring-2 focus:ring-primary/20 transition"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-[11px] font-mono uppercase tracking-widest text-muted-foreground mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  placeholder="Tell us about the project..."
                  className="w-full rounded-xl bg-background/40 border border-border px-4 py-3 text-sm placeholder:text-muted-foreground/60 focus:outline-none focus:border-primary/70 focus:ring-2 focus:ring-primary/20 transition resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={submitting}
                className="group w-full inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-primary px-6 py-3.5 text-sm font-medium text-primary-foreground glow-primary hover:scale-[1.02] active:scale-[0.99] transition-transform duration-300 disabled:opacity-70"
              >
                {submitting ? "Sending..." : "Send message"}
                <Send className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-0.5" />
              </button>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default Contact;
