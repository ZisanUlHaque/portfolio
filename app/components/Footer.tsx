"use client";

import Link from "next/link";
import {
  Github,
  Linkedin,
  Twitter,
  Mail,
  Download,
} from "lucide-react";
import { profile } from "../data/profile";

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "Featured Work", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "Tech Stack", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-zinc-800 bg-[#09090b] py-14 text-zinc-400">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12 lg:gap-12">
          
          {/* Brand & Summary */}
          <div className="md:col-span-5 lg:col-span-5">
            <Link href="#home" className="inline-flex items-center gap-3 group">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-white font-mono text-xs font-bold text-[#09090b] transition-transform group-hover:scale-105">
                &lt;Z/&gt;
              </span>
              <span className="font-display text-base font-bold tracking-tight text-white">
                {profile.name}
              </span>
            </Link>

            <p className="mt-4 max-w-sm text-sm leading-relaxed text-zinc-400">
              Full-Stack Software Engineer building scalable systems, Next.js web applications, and resilient backend microservices.
            </p>

            <div className="mt-6 flex items-center gap-4">
              <a
                href={profile.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="text-zinc-400 transition-colors hover:text-white"
              >
                <Github size={18} />
              </a>
              <a
                href={profile.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-zinc-400 transition-colors hover:text-blue-400"
              >
                <Linkedin size={18} />
              </a>
              <a
                href={profile.socials.twitter}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                className="text-zinc-400 transition-colors hover:text-white"
              >
                <Twitter size={18} />
              </a>
              <a
                href={`mailto:${profile.email}`}
                aria-label="Email"
                className="text-zinc-400 transition-colors hover:text-white"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-4 lg:col-span-4">
            <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-white">
              Navigation
            </h3>
            <ul className="mt-4 grid grid-cols-2 gap-2.5 text-sm">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="transition-colors hover:text-blue-400"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Download Resume */}
          <div className="md:col-span-3 lg:col-span-3">
            <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-white">
              Direct Access
            </h3>
            <p className="mt-4 text-xs leading-relaxed text-zinc-400">
              Location: {profile.location}
            </p>
            <p className="mt-1 text-xs text-zinc-400">
              Email: <a href={`mailto:${profile.email}`} className="text-zinc-200 hover:text-white">{profile.email}</a>
            </p>

            <div className="mt-6">
              <a
                href="/resume.pdf"
                download
                className="inline-flex items-center gap-2 rounded-full border border-zinc-700 bg-zinc-900 px-5 py-2.5 text-xs font-bold text-white transition-all hover:border-zinc-500 hover:bg-zinc-800"
              >
                <Download size={14} />
                Download Resume
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 border-t border-zinc-800/80 pt-8 text-center text-xs text-zinc-500 sm:flex sm:items-center sm:justify-between">
          <p>© {currentYear} {profile.name}. All rights reserved.</p>
          <p className="mt-2 sm:mt-0">
            Engineered with Next.js, React, TypeScript, and Tailwind CSS.
          </p>
        </div>
      </div>
    </footer>
  );
}
