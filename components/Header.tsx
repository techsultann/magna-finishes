"use client";

import { useState } from "react";
import Image from "next/image";

const NAV_LINKS = [
  { href: "#services", label: "Services" },
  { href: "#results", label: "Results" },
  { href: "#reviews", label: "Reviews" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-charcoal/10 bg-primer shadow-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3 sm:px-8">
        <a href="#top" className="flex items-center gap-3">
          <Image
            src="/logo.jpg"
            alt="Magna Finishes Global Limited logo"
            width={44}
            height={44}
            className="h-11 w-11 rounded-full object-cover"
            priority
          />
          <span className="font-display text-sm leading-tight tracking-tight text-navy sm:text-base">
            MAGNA FINISHES
            <span className="block text-[10px] font-body font-semibold tracking-[0.2em] text-signal-red">
              GLOBAL LIMITED
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <a key={link.href}
              href={link.href}
              className="text-sm font-medium text-charcoal/70 transition-colors hover:text-signal-red"
            >
              {link.label}
            </a>
          ))}
          <a href="#contact"
            className="rounded-full bg-signal-red px-5 py-2 text-sm font-semibold text-primer transition-transform hover:-translate-y-0.5 hover:bg-signal-red/90"
          >
            Get a quote
          </a>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-md border border-charcoal/15 md:hidden"
        >
          <span
            className={`h-0.5 w-5 bg-charcoal transition-transform ${open ? "translate-y-2 rotate-45" : ""}`}
          />
          <span className={`h-0.5 w-5 bg-charcoal transition-opacity ${open ? "opacity-0" : ""}`} />
          <span
            className={`h-0.5 w-5 bg-charcoal transition-transform ${open ? "-translate-y-2 -rotate-45" : ""}`}
          />
        </button>
      </div>

      {open && (
        <nav id="mobile-nav" className="flex flex-col gap-1 border-t border-charcoal/10 px-5 pb-5 pt-2 md:hidden">
          {NAV_LINKS.map((link) => (
            <a key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="rounded-md px-2 py-3 text-sm font-medium text-charcoal/80 hover:bg-charcoal/5"
            >
              {link.label}
            </a>
          ))}
          <a href="#contact"
            onClick={() => setOpen(false)}
            className="mt-1 rounded-full bg-signal-red px-5 py-3 text-center text-sm font-semibold text-primer"
          >
            Get a quote
          </a>
        </nav>
      )}
    </header>
  );
}