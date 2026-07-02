"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Download,
  Github,
  Linkedin,
  Twitter,
  Mail,
} from "lucide-react";
import { profile } from "../data/profile";

const ease = [0.22, 1, 0.36, 1];

export default function Hero() {
  const socialIcons = [
    { Icon: Github, href: profile.socials.github, label: "GitHub" },
    { Icon: Linkedin, href: profile.socials.linkedin, label: "LinkedIn" },
    { Icon: Twitter, href: profile.socials.twitter, label: "Twitter" },
    { Icon: Mail, href: `mailto:${profile.email}`, label: "Email" },
  ];

  return (
    <section
      id="home"
      className="relative isolate flex min-h-screen items-center overflow-hidden px-4 pb-16 pt-24 text-center sm:px-6 lg:px-8 lg:text-left"
    >
      {/* Premium background */}
      <div aria-hidden className="absolute inset-0 -z-30 bg-[#050816]" />
      <div
        aria-hidden
        className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_top,rgba(99,102,241,0.18),transparent_32%),radial-gradient(circle_at_80%_20%,rgba(56,189,248,0.12),transparent_24%),linear-gradient(to_bottom,rgba(255,255,255,0.03),transparent_30%)]"
      />
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:72px_72px] opacity-30 [mask-image:radial-gradient(circle_at_center,black,transparent_78%)]"
      />
      <div
        aria-hidden
        className="absolute left-1/2 top-24 -z-10 h-72 w-72 -translate-x-1/2 rounded-full bg-brand-500/20 blur-3xl"
      />

      <div className="mx-auto grid w-full max-w-7xl items-center gap-14 lg:grid-cols-2">
        {/* Left content */}
        <div className="relative z-10">
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease }}
            className="inline-flex items-center gap-2 ml-4 rounded-full border border-white/10 bg-white/[0.05] px-4 py-2 text-[9px] font-medium uppercase tracking-[0.24em] text-ink-200/80 backdrop-blur-xl"
          >
            <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.9)]" />
            Welcome to my portfolio
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.08, ease }}
            className="mt-6  ml-4 font-display text-4xl font-semibold leading-[0.95] tracking-tight text-white sm:text-4xl lg:text-5xl xl:text-[4rem]"
          >
            <span className="block bg-gradient-to-r from-white via-brand-200 to-brand-400 bg-clip-text text-transparent">
              {profile.name}
            </span>
            <span className="mt-3 text-2xl lg:text-4xl block text-white/65">
              {profile.designation}
            </span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.18, ease }}
            className="mx-auto mt-7 ml-4 max-w-2xl text-base leading-8 text-ink-200/70 sm:text-lg "
          >
            {profile.tagline}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.28, ease }}
            className="mt-10 ml-4 flex flex-col items-center gap-4 sm:flex-row lg:justify-start"
          >
            <motion.a
              href="/resume.pdf"
              download
              whileHover={{ y: -2, scale: 1.01 }}
              whileTap={{ scale: 0.98 }}
              className="group inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 font-semibold text-slate-950 shadow-[0_12px_40px_rgba(255,255,255,0.12)] transition-all"
            >
              <Download size={18} />
              Download Resume
              <span className="transition-transform duration-300 group-hover:translate-x-0.5">
                <ArrowRight size={18} />
              </span>
            </motion.a>

            <motion.a
              href="#contact"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.05] px-5 py-3 font-semibold text-white backdrop-blur-xl transition-all hover:border-white/30 hover:bg-white/[0.08]"
            >
              Get in Touch
              <ArrowRight size={18} />
            </motion.a>
          </motion.div>

          {/* Socials */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.38, ease }}
            className="mt-10 ml-4"
          >
            <p className="mb-4 text-[11px] uppercase tracking-[0.28em] text-ink-300/70">
              Connect
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3 lg:justify-start">
              {socialIcons.map(({ Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  whileHover={{ y: -4 }}
                  whileTap={{ scale: 0.96 }}
                  className="group inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.05] text-ink-200 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] backdrop-blur-xl transition-all hover:border-brand-400/40 hover:bg-brand-500/10 hover:text-white"
                >
                  <Icon
                    size={19}
                    className="transition-transform duration-300 group-hover:scale-110"
                  />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Scroll hint */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-14 ml-4 flex items-center justify-center gap-4 lg:justify-start"
          >
            <span className="text-[11px] uppercase tracking-[0.28em] text-ink-300/60">
              Scroll to explore
            </span>
            <motion.div
              animate={{ x: [0, 8, 0] }}
              transition={{ duration: 1.8, repeat: Infinity }}
              className="h-px w-10 bg-white/20"
            />
          </motion.div>
        </div>

        {/* Profile image (right on md+) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.22, ease }}
          className="relative mx-auto hidden w-full max-w-[360px] md:block"
        >
          {/* Ambient glow */}
          <div className="absolute -left-10 top-10 h-40 w-40 rounded-full bg-brand-500/20 blur-3xl" />
          <div className="absolute -bottom-10 right-0 h-48 w-48 rounded-full bg-cyan-400/10 blur-3xl" />
          <div className="absolute -inset-6 rounded-[2.75rem] border border-white/[0.06]" />

          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="relative"
          >
            <motion.div
              whileHover={{ y: -4, rotate: 0.6, scale: 1.01 }}
              transition={{ type: "spring", stiffness: 160, damping: 18 }}
              className="group relative"
            >
              {/* Premium layered frame */}
              <div className="rounded-[2.6rem] bg-[linear-gradient(135deg,rgba(255,255,255,0.22),rgba(255,255,255,0.05)_30%,rgba(99,102,241,0.20)_65%,rgba(34,211,238,0.16))] p-[1.5px] shadow-[0_30px_80px_rgba(0,0,0,0.45)]">
                <div className="rounded-[2.45rem] bg-[linear-gradient(180deg,rgba(255,255,255,0.10),rgba(255,255,255,0.03))] p-3 backdrop-blur-2xl">
                  <div className="relative overflow-hidden rounded-[1.9rem] border border-white/10 bg-[#0b1120]">
                    <div className="absolute inset-x-0 top-0 z-10 h-24 bg-gradient-to-b from-white/15 via-white/5 to-transparent" />
                    <div className="absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-white/5 to-transparent" />
                    <div className="absolute -left-1/3 top-0 z-10 h-full w-1/2 rotate-12 bg-gradient-to-r from-transparent via-white/10 to-transparent blur-2xl transition-transform duration-700 group-hover:translate-x-12" />

                    <img
                      src={profile.photo}
                      alt={profile.name}
                      className="h-[420px] w-full object-cover scale-[1.02]"
                    />

                    <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.14),transparent_30%),linear-gradient(to_top,rgba(0,0,0,0.28),transparent_38%)]" />
                    <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/10" />
                  </div>
                </div>
              </div>

              {/* Corner accents */}
              <div className="absolute -left-3 -top-3 h-16 w-16 rounded-tl-[1.25rem] border-l border-t border-white/20" />
              <div className="absolute -bottom-3 -right-3 h-16 w-16 rounded-br-[1.25rem] border-b border-r border-brand-300/40" />

              {/* ─── FLOATING BADGES ─── */}

              {/* Badge 1: Years of Experience — top-left */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.5, ease }}
                className="absolute -left-14 top-10 z-20 xl:block hidden"
              ></motion.div>

              {/* Badge 2: Projects Completed — top-right */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.6, ease }}
                className="absolute -right-16 top-28 z-20 xl:block hidden"
              ></motion.div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.7, ease }}
                className="absolute -left-12 bottom-24 z-20 xl:block hidden"
              ></motion.div>

              {/* Badge 4: Tech Stack — bottom-right */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.8, ease }}
                className="absolute -right-20 bottom-10 z-20 xl:block hidden"
              >
                <motion.div
                  animate={{ y: [0, -6, 0] }}
                  transition={{
                    duration: 4.2,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 2,
                  }}
                  className="rounded-2xl border border-white/10 bg-black/40 px-4 py-3 shadow-[0_8px_32px_rgba(0,0,0,0.4)] backdrop-blur-xl"
                >
                  <p className="text-[10px] uppercase tracking-[0.2em] text-white/50">
                    Tech Stack
                  </p>
                  <div className="mt-2 flex -space-x-1">
                    {["⚛️", "⚡", "🚀", "🍃"].map((emoji, i) => (
                      <span
                        key={i}
                        className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-white/[0.08] text-sm"
                      >
                        {emoji}
                      </span>
                    ))}
                    <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-white/[0.08] text-[10px] font-medium text-white/70">
                      +5
                    </span>
                  </div>
                </motion.div>
              </motion.div>

              {/* Badge 5: Designation label — inside top */}
              <div className="absolute left-6 top-6 z-20 rounded-full border border-white/10 bg-black/30 px-4 py-2 backdrop-blur-xl">
                <p className="text-[10px] uppercase tracking-[0.24em] text-white/60">
                  {profile.designation}
                </p>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
