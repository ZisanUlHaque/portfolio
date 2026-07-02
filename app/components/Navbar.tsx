"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { profile } from "../data/profile";
import { cn } from "../lib/utils";

const navItems = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" }
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("#home");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
      const offsets = navItems.map((n) => {
        const el = document.querySelector(n.href) as HTMLElement | null;
        if (!el) return { id: n.href, top: Number.POSITIVE_INFINITY };
        return { id: n.href, top: Math.abs(el.getBoundingClientRect().top - 120) };
      });
      offsets.sort((a, b) => a.top - b.top);
      if (offsets[0]) setActive(offsets[0].id);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled ? "py-2" : "py-4"
      )}
    >
      <div className="mx-auto max-w-7xl px-4">
        <nav
          className={cn(
            "flex items-center justify-between rounded-2xl px-4 py-3 transition-all duration-300",
            scrolled ? "glass-strong shadow-soft" : "glass"
          )}
        >
          <Link href="#home" className="flex items-center gap-3">
            <span className="relative inline-flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-brand-400 to-accent-500 font-display text-sm font-bold text-bg-900">
              {profile.initials}
              <span className="absolute -inset-1 -z-10 rounded-2xl bg-gradient-to-br from-brand-400/40 to-accent-500/40 blur-md" />
            </span>
          </Link>

          <ul className="hidden items-center gap-1 md:flex">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className={cn(
                    "rounded-full px-3 py-1.5 text-sm transition-all",
                    active === item.href
                      ? "bg-white/10 text-white shadow-glow"
                      : "text-ink-200 hover:bg-white/5 hover:text-white"
                  )}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <a
            href="#contact"
            className="btn-primary hidden md:inline-flex"
          >
            Hire me
          </a>

          <button
            aria-label="Toggle navigation"
            className="rounded-lg p-2 text-ink-100 md:hidden"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </nav>

        <AnimatePresence>
          {open && (
            <motion.div
              key="mobile"
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              className="glass mt-2 rounded-2xl p-3 md:hidden"
            >
              <ul className="flex flex-col">
                {navItems.map((item) => (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className={cn(
                        "block rounded-xl px-3 py-2 text-sm transition-colors",
                        active === item.href
                          ? "bg-white/10 text-white"
                          : "text-ink-200 hover:bg-white/5 hover:text-white"
                      )}
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
                <li className="mt-2">
                  <a href="#contact" onClick={() => setOpen(false)} className="btn-primary w-full justify-center">
                    Hire me
                  </a>
                </li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}