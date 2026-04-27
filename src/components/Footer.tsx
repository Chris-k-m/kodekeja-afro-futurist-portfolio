import AfricanDivider from "./AfricanDivider";

const Footer = () => (
  <footer className="relative pt-10 pb-12 border-t border-border/60">
    <div className="container">
      <AfricanDivider className="mb-10" />
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
