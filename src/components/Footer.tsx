import { QRCodeSVG } from "qrcode.react";
import { Mail, ScanLine } from "lucide-react";
import AfricanDivider from "./AfricanDivider";

const MAILTO =
  "mailto:kodekeja@gmail.com?subject=Hello%20KodeKeja&body=Hi%20team%2C%0A%0A";

const Footer = () => (
  <footer className="relative pt-10 pb-12 border-t border-border/60">
    <div className="container">
      <AfricanDivider className="mb-10" />

      {/* QR contact card */}
      <div className="mx-auto max-w-3xl mb-12">
        <div className="relative glass gradient-border rounded-2xl p-6 sm:p-8 overflow-hidden">
          <div className="absolute inset-0 pattern-african opacity-[0.06] pointer-events-none" aria-hidden />
          <div className="absolute -top-16 -right-16 h-48 w-48 rounded-full bg-primary/20 blur-3xl pointer-events-none" aria-hidden />

          <div className="relative flex flex-col sm:flex-row items-center gap-6 sm:gap-8">
            <a
              href={MAILTO}
              aria-label="Email KodeKeja"
              className="group relative shrink-0 rounded-xl bg-white p-3 shadow-glow transition-transform duration-300 hover:scale-[1.04]"
            >
              <QRCodeSVG
                value={MAILTO}
                size={132}
                level="M"
                bgColor="#ffffff"
                fgColor="#0a1622"
                marginSize={0}
              />
              <span className="absolute -top-2 -right-2 inline-flex items-center gap-1 rounded-full bg-gradient-primary px-2 py-0.5 text-[9px] font-mono uppercase tracking-widest text-primary-foreground">
                <ScanLine className="h-3 w-3" /> scan
              </span>
            </a>

            <div className="text-center sm:text-left">
              <div className="inline-flex items-center gap-2 mb-2">
                <span className="h-px w-6 bg-gradient-to-r from-transparent to-accent" />
                <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent">
                  Quick Connect
                </span>
              </div>
              <h3 className="font-display text-xl sm:text-2xl font-bold">
                Scan to <span className="text-gradient-primary">message us</span>
              </h3>
              <p className="mt-2 text-sm text-muted-foreground max-w-sm">
                Point your camera at the QR code — it opens your mail app, ready
                to send a message to{" "}
                <span className="text-foreground font-mono">kodekeja@gmail.com</span>.
              </p>
              <a
                href={MAILTO}
                className="mt-4 inline-flex items-center gap-2 rounded-lg glass gradient-border px-4 py-2 text-xs font-mono text-foreground hover:bg-muted/40 transition-colors"
              >
                <Mail className="h-3.5 w-3.5 text-primary" />
                kodekeja@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-gradient-primary text-primary-foreground font-display font-bold">K</span>
          <span className="font-display font-semibold">Kode<span className="text-gradient-primary">Keja</span></span>
        </div>
        <p className="text-xs font-mono text-muted-foreground">
          © {new Date().getFullYear()} KodeKeja. Smart systems, built to last.
        </p>
        <div className="flex gap-5 text-xs text-muted-foreground">
          <a href="#about" className="hover:text-foreground transition-colors">About</a>
          <a href="#projects" className="hover:text-foreground transition-colors">Projects</a>
          <a href="#contact" className="hover:text-foreground transition-colors">Contact</a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
