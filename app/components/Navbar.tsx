"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X, FileDown, Github, Linkedin } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { profile } from "../data/profile";
import { cn } from "../lib/utils";

const navItems = [
  { href: "#projects", label: "Featured Work" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Stack" },
  { href: "#contact", label: "Contact" }
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("#home");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      const offsets = navItems.map((n) => {
        const el = document.querySelector(n.href) as HTMLElement | null;
        if (!el) return { id: n.href, top: Number.POSITIVE_INFINITY };
        return { id: n.href, top: Math.abs(el.getBoundingClientRect().top - 100) };
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
        scrolled
          ? "bg-[#faf9f6]/90 backdrop-blur-md border-b border-zinc-200/80 py-3 shadow-sm"
          : "bg-transparent py-5"
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Brand: Engineering Mark */}
        <Link href="#home" className="flex items-center gap-3 group">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#09090b] font-mono text-xs font-bold text-white shadow-sm transition-transform duration-200 group-hover:scale-105">
            &lt;Z/&gt;
          </span>
          <div className="flex flex-col">
            <span className="font-display text-sm font-extrabold tracking-tight text-[#09090b]">
              {profile.name}
            </span>
            <span className="hidden sm:inline-flex items-center gap-1.5 text-[10px] font-medium text-emerald-600">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
              Available for hire
            </span>
          </div>
        </Link>

        {/* Desktop Nav Items */}
        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-blue-600",
                active === item.href
                  ? "font-bold text-[#09090b]"
                  : "text-zinc-600"
              )}
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Right Actions: Socials + Resume */}
        <div className="hidden items-center gap-4 md:flex">
          <a
            href={profile.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="text-zinc-500 transition-colors hover:text-[#09090b]"
          >
            <Github size={19} />
          </a>
          <a
            href={profile.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="text-zinc-500 transition-colors hover:text-blue-600"
          >
            <Linkedin size={19} />
          </a>
          <a
            href="/resume.pdf"
            download
            className="inline-flex items-center gap-2 rounded-full bg-[#09090b] px-4 py-2 text-xs font-semibold text-white transition-all hover:bg-zinc-800 hover:shadow-md"
          >
            <FileDown size={14} />
            Resume
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button
          aria-label="Toggle navigation"
          className="rounded-lg p-2 text-[#09090b] md:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="mobile"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="border-b border-zinc-200 bg-[#faf9f6] px-4 py-4 md:hidden"
          >
            <ul className="flex flex-col gap-3">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-lg px-3 py-2 text-base font-semibold text-[#09090b] hover:bg-zinc-100"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
              <li className="pt-2">
                <a
                  href="/resume.pdf"
                  download
                  onClick={() => setOpen(false)}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#09090b] py-3 text-sm font-semibold text-white"
                >
                  <FileDown size={16} />
                  Download Resume
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
