import Link from "next/link";

import { Button } from "@/components/ui/button";
import { CommandPalette } from "@/components/portfolio/command-palette";
import { ThemeToggle } from "@/components/portfolio/theme-toggle";

const navItems = [
  { href: "/#about", label: "About" },
  { href: "/#work", label: "Projects" },
  { href: "/#writing", label: "Recent Writing" },
  { href: "/#contact", label: "Contact" }
];

export function SiteHeader() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-velvet-edge/80 bg-background/95">
      <div className="mx-auto grid h-14 w-full max-w-4xl grid-cols-[1fr_auto_auto_auto] items-center gap-2 px-6 md:grid-cols-[220px_1fr_auto_auto_auto] md:px-12">
        <Link href="/#home" className="font-mono text-xs font-bold text-foreground">
          RM
        </Link>
        <nav className="hidden items-center gap-1 justify-self-end md:flex">
          {navItems.map((item) => (
            <Button key={item.href} asChild variant="ghost" size="sm">
              <Link href={item.href}>{item.label}</Link>
            </Button>
          ))}
        </nav>
        <CommandPalette />
        <ThemeToggle />
        <Button asChild variant="secondary" size="sm" className="justify-self-end">
          <Link href="/#contact">Resume</Link>
        </Button>
      </div>
    </header>
  );
}
