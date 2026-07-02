"use client";

import Link from "next/link";
import {
  Github,
  Linkedin,
  Twitter,
  Mail,
  Heart,
  ArrowUpRight,
} from "lucide-react";
import { profile } from "../data/profile";

const socialLinks = [
  { Icon: Github, href: profile.socials.github, label: "GitHub" },
  { Icon: Linkedin, href: profile.socials.linkedin, label: "LinkedIn" },
  { Icon: Twitter, href: profile.socials.twitter, label: "Twitter" },
  { Icon: Mail, href: `mailto:${profile.email}`, label: "Email" },
];

const footerLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/10 bg-gradient-to-t from-bg-900/80 to-bg-900/40">
      <div className="mx-auto max-w-7xl px-4 py-16">
        {/* Top Section */}
        <div className="mb-12 grid grid-cols-1 gap-12 md:grid-cols-3">
          {/* Brand */}
          <div>
            <Link href="#home" className="inline-flex items-center gap-2 group">
              <span className="relative inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-brand-400 to-accent-500 font-display text-sm font-bold text-bg-900 transition-transform group-hover:scale-110">
                {profile.initials}
              </span>
              <div>
                <div className="font-display text-base font-semibold text-ink-50">
                  {profile.name}
                </div>
                <div className="text-xs text-ink-300">
                  {profile.designation}
                </div>
              </div>
            </Link>
            <p className="mt-4 text-sm text-ink-300 leading-relaxed max-w-xs">
              Crafting premium digital experiences with modern web technologies.
              Let's build something extraordinary together.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-display text-sm font-semibold text-ink-50 uppercase tracking-wider">
              Navigation
            </h3>
            <ul className="mt-4 space-y-2">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="inline-flex items-center gap-1.5 text-sm text-ink-300 transition-colors hover:text-brand-300 group"
                  >
                    {link.label}
                    <ArrowUpRight
                      size={12}
                      className="opacity-0 transition-all group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display text-sm font-semibold text-ink-50 uppercase tracking-wider">
              Get in Touch
            </h3>
            <div className="mt-4 space-y-2">
              <a
                href={`mailto:${profile.email}`}
                className="block text-sm text-ink-300 hover:text-brand-300 transition-colors"
              >
                {profile.email}
              </a>
              <a
                href={`tel:${profile.phone.replace(/\s/g, "")}`}
                className="block text-sm text-ink-300 hover:text-brand-300 transition-colors"
              >
                {profile.phone}
              </a>
              <a
                href={`https://wa.me/${profile.whatsapp.replace(/\D/g, "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-sm text-ink-300 hover:text-brand-300 transition-colors"
              >
                {profile.whatsapp}
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10" />

        {/* Bottom Section */}
        <div className="mt-8 flex flex-col items-center justify-between gap-4 sm:flex-row">
          <div className="text-center sm:text-left">
            <p className="text-sm text-ink-300">
               {profile.name} © {currentYear} {" "}
            </p>
            <p className="mt-1 text-xs text-ink-400">
              Design. Develop. Deliver.
            </p>
            <p className="mt-1 text-xs text-ink-400">
              Powered by Next.js & Tailwind CSS.{" "}
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-2">
            {socialLinks.map(({ Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="group inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-ink-200 transition-all hover:border-brand-400/50 hover:bg-brand-400/10 hover:text-brand-300"
              >
                <Icon
                  size={18}
                  className="transition-transform group-hover:scale-110"
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
