import { Button } from "@/components/ui/button";

const navItems = [
  { href: "#about", label: "About" },
  { href: "#work", label: "Projects" },
  { href: "#blog", label: "Blog" },
  { href: "#contact", label: "Contact" }
];

export function SiteHeader() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-velvet-edge/80 bg-background/95">
      <div className="mx-auto grid h-14 w-full max-w-6xl grid-cols-[1fr_auto] items-center px-5 md:grid-cols-[220px_1fr_auto] md:px-8">
        <a href="#home" className="font-mono text-xs font-bold text-foreground">
          RM
        </a>
        <nav className="hidden items-center gap-1 justify-self-end md:flex">
          {navItems.map((item) => (
            <Button key={item.href} asChild variant="ghost" size="sm">
              <a href={item.href}>{item.label}</a>
            </Button>
          ))}
        </nav>
        <Button asChild variant="secondary" size="sm" className="justify-self-end md:ml-2">
          <a href="#contact">Resume</a>
        </Button>
      </div>
    </header>
  );
}
