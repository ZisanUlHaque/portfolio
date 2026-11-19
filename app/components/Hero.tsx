"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Download, Mail, Github, Linkedin, Sparkles, CheckCircle2 } from "lucide-react";
import { profile } from "../data/profile";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden border-b border-zinc-200/80 pt-32 pb-16 sm:pt-36 sm:pb-24 lg:pt-40 lg:pb-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-8">
          
          {/* Left Column: Bio & Highlights */}
          <div className="lg:col-span-7 xl:col-span-8">
            
            {/* Distinctive Status Tag */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50/80 px-4 py-1.5 text-xs font-semibold text-blue-700 shadow-sm"
            >
              <Sparkles size={14} className="text-blue-600" />
              <span>Full-Stack Engineer &amp; System Architect</span>
              <span className="text-blue-300">•</span>
              <span className="text-emerald-700 font-bold">Open to Work 2026</span>
            </motion.div>

            {/* Powerful Original Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mt-6 font-display text-4xl font-black leading-[1.08] tracking-tight text-[#09090b] sm:text-5xl md:text-6xl lg:text-[4.2rem]"
            >
              Building resilient web architectures &amp; scalable products.
            </motion.h1>

            {/* Subheading with strong engineering focus */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-6 max-w-2xl text-base leading-relaxed text-zinc-600 sm:text-lg"
            >
              I&apos;m <strong className="text-[#09090b] font-semibold">{profile.name}</strong>, a computer science engineer bridging high-performance backend systems with clean, accessible React &amp; Next.js interfaces. From production client platforms to hackathon-winning architectures.
            </motion.p>

            {/* Primary Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-8 flex flex-wrap items-center gap-4"
            >
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-full bg-[#09090b] px-7 py-3.5 text-sm font-bold text-white shadow-sm transition-all hover:bg-zinc-800 hover:shadow-md"
              >
                Explore Projects
                <ArrowUpRight size={17} />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full border border-zinc-300 bg-white/80 px-7 py-3.5 text-sm font-bold text-[#09090b] backdrop-blur-sm transition-all hover:border-[#09090b] hover:bg-white"
              >
                <Mail size={16} />
                Get in Touch
              </a>
            </motion.div>

            {/* Secondary Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-8 flex flex-wrap items-center gap-6 text-sm font-semibold text-zinc-600"
            >
              <a
                href="/resume.pdf"
                download
                className="inline-flex items-center gap-1.5 transition-colors hover:text-[#09090b]"
              >
                <Download size={15} />
                Download resume (PDF)
              </a>
              <span className="text-zinc-300">•</span>
              <a
                href={profile.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 transition-colors hover:text-[#09090b]"
              >
                <Github size={15} />
                GitHub
              </a>
              <span className="text-zinc-300">•</span>
              <a
                href={profile.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 transition-colors hover:text-blue-600"
              >
                <Linkedin size={15} />
                LinkedIn
              </a>
            </motion.div>
          </div>

          {/* Right Column: Custom Developer Portrait Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative mx-auto w-full max-w-sm lg:col-span-5 xl:col-span-4"
          >
            {/* The Framed Portrait */}
            <div className="relative rounded-3xl border border-zinc-200 bg-white p-2.5 shadow-xl transition-all duration-300 hover:shadow-2xl">
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-zinc-100">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={profile.photo}
                  alt={profile.name}
                  className="h-full w-full object-cover"
                />

                {/* Status Pill Badge */}
                <div className="absolute top-4 left-4 flex items-center gap-1.5 rounded-full bg-[#09090b]/90 px-3.5 py-1 text-[11px] font-bold text-white shadow-md backdrop-blur-md">
                  <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                  Full-Stack Software Engineer
                </div>
              </div>

              {/* Floating Verified Client Badge */}
              <div className="mt-3 rounded-2xl border border-zinc-200 bg-[#faf9f6] p-4">
                <div className="flex items-center gap-1.5 text-xs font-bold text-blue-700">
                  <CheckCircle2 size={15} className="text-blue-600" />
                  <span>Client &amp; Award-Winning Work</span>
                </div>
                <p className="mt-1 text-xs font-medium text-zinc-600 leading-snug">
                  FreshStock AI (Client) • PUB GradPath (Hackathon 🥈) • HAQEX
                </p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
