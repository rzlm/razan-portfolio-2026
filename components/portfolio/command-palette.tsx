"use client";

import { Command } from "lucide-react";
import { useEffect, useMemo, useState } from "react";

import { toggleTheme } from "@/components/portfolio/theme-toggle";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type PaletteCommand = {
  name: string;
  hint: string;
  group: "navigate" | "connect" | "fun";
  run: () => string | void;
};

const EMAIL = "hello@example.com";

function scrollTo(id: string) {
  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  } else {
    // On an article page the section lives on the homepage.
    window.location.href = `/#${id}`;
  }
}

const commands: PaletteCommand[] = [
  { name: "home", hint: "Back to the top", group: "navigate", run: () => scrollTo("home") },
  { name: "about", hint: "Who I am", group: "navigate", run: () => scrollTo("about") },
  { name: "experience", hint: "Where I've worked", group: "navigate", run: () => scrollTo("experience") },
  { name: "projects", hint: "Selected work", group: "navigate", run: () => scrollTo("work") },
  { name: "writing", hint: "Recent posts", group: "navigate", run: () => scrollTo("writing") },
  { name: "skills", hint: "The stack", group: "navigate", run: () => scrollTo("skills") },
  { name: "email razan", hint: EMAIL, group: "connect", run: () => void (window.location.href = `mailto:${EMAIL}`) },
  { name: "github", hint: "Open GitHub", group: "connect", run: () => void window.open("https://github.com/", "_blank", "noreferrer") },
  { name: "linkedin", hint: "Open LinkedIn", group: "connect", run: () => void window.open("https://www.linkedin.com/", "_blank", "noreferrer") },
  { name: "theme", hint: "Toggle light / dark", group: "fun", run: () => void toggleTheme() },
  {
    name: "coffee",
    hint: "Refuel the developer",
    group: "fun",
    run: () => "☕ brewing... done. productivity +20%, sleep -1h."
  },
  {
    name: "hire",
    hint: "The best command",
    group: "fun",
    run: () => `✓ great choice. type "email razan" or write to ${EMAIL}`
  },
  {
    name: "sudo make me a sandwich",
    hint: "Classic",
    group: "fun",
    run: () => "permission granted. 🥪 (this incident will be reported)"
  },
  {
    name: "velvet",
    hint: "???",
    group: "fun",
    run: () => {
      document.documentElement.classList.add("velvet-party");
      window.setTimeout(() => document.documentElement.classList.remove("velvet-party"), 3000);
      return "✨ velvet mode fully initialized.";
    }
  }
];

const groupLabels: Record<PaletteCommand["group"], string> = {
  navigate: "Navigate",
  connect: "Connect",
  fun: "Extras"
};

export function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [active, setActive] = useState(0);
  const [output, setOutput] = useState<string | null>(null);

  // Reset on every open/close so the palette always starts fresh.
  function resetPalette() {
    setQuery("");
    setActive(0);
    setOutput(null);
  }

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    return q ? commands.filter((c) => c.name.includes(q) || c.hint.toLowerCase().includes(q)) : commands;
  }, [query]);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      const target = event.target as HTMLElement;
      const typing = target.isContentEditable || ["INPUT", "TEXTAREA"].includes(target.tagName);

      if ((event.key === "k" && (event.metaKey || event.ctrlKey)) || (event.key === "/" && !typing)) {
        event.preventDefault();
        resetPalette();
        setOpen((value) => !value);
      }
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  function execute(command: PaletteCommand | undefined) {
    if (!command) {
      setOutput(`command not found: ${query}. try "help"... just kidding, pick one below.`);
      return;
    }

    const message = command.run();
    if (message) {
      setOutput(message);
      setQuery("");
    } else {
      setOpen(false);
    }
  }

  function onInputKeyDown(event: React.KeyboardEvent<HTMLInputElement>) {
    if (event.key === "ArrowDown") {
      event.preventDefault();
      setActive((i) => (i + 1) % Math.max(results.length, 1));
    } else if (event.key === "ArrowUp") {
      event.preventDefault();
      setActive((i) => (i - 1 + results.length) % Math.max(results.length, 1));
    } else if (event.key === "Enter") {
      event.preventDefault();
      execute(results[active]);
    } else if (event.key === "Escape") {
      setOpen(false);
    }
  }

  return (
    <>
      <Button
        type="button"
        variant="secondary"
        size="sm"
        aria-label="Open command palette"
        title="Command palette (⌘K)"
        onClick={() => {
          resetPalette();
          setOpen(true);
        }}
        className="gap-1 font-mono text-xs"
      >
        <Command className="h-3.5 w-3.5" />K
      </Button>

      {open && (
        <div
          className="fixed inset-0 z-[60] flex items-start justify-center bg-background/70 px-4 pt-[15vh] backdrop-blur-sm"
          onMouseDown={() => setOpen(false)}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-label="Command palette"
            className="w-full max-w-lg animate-fade-up border border-velvet-edge bg-velvet-panel shadow-2xl"
            onMouseDown={(event) => event.stopPropagation()}
          >
            <div className="flex items-center gap-2 border-b border-velvet-edge px-4">
              <span className="font-mono text-sm text-primary">&gt;</span>
              <input
                autoFocus
                value={query}
                onChange={(event) => {
                  setQuery(event.target.value);
                  setActive(0);
                }}
                onKeyDown={onInputKeyDown}
                placeholder="type a command..."
                aria-label="Command"
                aria-controls="command-results"
                aria-activedescendant={results[active] ? `command-${active}` : undefined}
                className="h-12 w-full bg-transparent font-mono text-sm text-foreground outline-none placeholder:text-muted-foreground"
              />
              <kbd className="font-mono text-[10px] text-muted-foreground">esc</kbd>
            </div>

            {output && (
              <p className="border-b border-velvet-edge bg-velvet-low px-4 py-3 font-mono text-xs text-secondary">
                {output}
              </p>
            )}

            <ul id="command-results" role="listbox" className="max-h-80 overflow-y-auto py-2">
              {results.length === 0 && (
                <li className="px-4 py-3 font-mono text-xs text-muted-foreground">
                  no matches. press enter anyway, I dare you.
                </li>
              )}
              {results.map((command, index) => {
                const showGroup = index === 0 || results[index - 1].group !== command.group;
                return (
                  <li key={command.name} role="presentation">
                    {showGroup && (
                      <p className="px-4 pb-1 pt-3 font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
                        {groupLabels[command.group]}
                      </p>
                    )}
                    <button
                      id={`command-${index}`}
                      type="button"
                      role="option"
                      aria-selected={index === active}
                      onMouseEnter={() => setActive(index)}
                      onClick={() => execute(command)}
                      className={cn(
                        "flex w-full items-center justify-between gap-4 px-4 py-2 text-left font-mono text-sm",
                        index === active ? "bg-primary/15 text-primary" : "text-foreground/80"
                      )}
                    >
                      <span>{command.name}</span>
                      <span className="truncate text-xs text-muted-foreground">{command.hint}</span>
                    </button>
                  </li>
                );
              })}
            </ul>

            <div className="flex gap-4 border-t border-velvet-edge px-4 py-2 font-mono text-[10px] text-muted-foreground">
              <span>↑↓ navigate</span>
              <span>↵ run</span>
              <span>/ or ⌘K toggle</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
