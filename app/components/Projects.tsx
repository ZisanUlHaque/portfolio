"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Github, Globe2, Lock, ShieldCheck, Sparkles } from "lucide-react";
import { projects } from "../data/projects";
import SectionHeading from "./SectionHeading";

// Extract clean domain from URL
function getCleanUrl(url: string): string {
  try {
    const parsed = new URL(url);
    return parsed.hostname;
  } catch {
    return "platform.app";
  }
}

// Custom badge for each flagship project
function getProjectBadge(slug: string): { label: string; bg: string; text: string } {
  switch (slug) {
    case "freshstock-ai":
      return { label: "Production Client", bg: "bg-emerald-50 border-emerald-200", text: "text-emerald-700" };
    case "pub-gradpath":
      return { label: "Hackathon 🥈 Runner-Up", bg: "bg-amber-50 border-amber-200", text: "text-amber-700" };
    case "haqex":
      return { label: "Logistics Platform", bg: "bg-blue-50 border-blue-200", text: "text-blue-700" };
    case "rentnest":
      return { label: "Full-Stack SaaS", bg: "bg-indigo-50 border-indigo-200", text: "text-indigo-700" };
    default:
      return { label: "Featured Work", bg: "bg-zinc-100 border-zinc-200", text: "text-zinc-700" };
  }
}

export default function Projects() {
  // Top 4 flagship projects
  const featured = projects.slice(0, 4);
  // Remaining projects
  const otherProjects = projects.slice(4);

  return (
    <>
      {/* ─── PRIMARY FEATURED WORK (Top Tier Grid) ─── */}
      <section id="projects" className="section-pad relative border-b border-zinc-200/80 bg-[#faf9f6]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Selected Engineering Work"
            title="Featured Projects &amp; Client Deployments"
            subtitle="Production systems, hackathon-winning architectures, and fintech platforms built with scalability and clean code at their core."
          />

          <div className="mt-16 grid grid-cols-1 gap-10 lg:grid-cols-2">
            {featured.map((project, index) => {
              const badge = getProjectBadge(project.slug);
              const cleanUrl = getCleanUrl(project.liveUrl || project.clientRepoUrl);

              return (
                <motion.article
                  key={project.slug}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.55, delay: index * 0.1 }}
                  className="flex h-full flex-col justify-between rounded-3xl border border-zinc-200/90 bg-white p-6 shadow-sm transition-all duration-300 hover:border-zinc-400 hover:shadow-lg sm:p-8"
                >
                  <div>
                    {/* Modern Secure Viewport Window */}
                    <div className="overflow-hidden rounded-2xl border border-zinc-800 bg-[#09090b] shadow-md">
                      
                      {/* Window Top Bar with SSL Lock and Domain */}
                      <div className="flex items-center justify-between border-b border-zinc-800/80 bg-[#18181b] px-4 py-2.5">
                        <div className="flex items-center gap-2">
                          <span className="h-2.5 w-2.5 rounded-full bg-zinc-600" />
                          <span className="h-2.5 w-2.5 rounded-full bg-zinc-600" />
                          <span className="h-2.5 w-2.5 rounded-full bg-zinc-600" />
                        </div>

                        <div className="flex items-center gap-1.5 rounded-md bg-[#09090b] px-3 py-1 font-mono text-[11px] text-zinc-400">
                          <Lock size={11} className="text-emerald-400" />
                          <span>https://{cleanUrl}</span>
                        </div>

                        <span className="text-[10px] font-mono text-zinc-500">v1.0</span>
                      </div>

                      {/* Project Image Frame */}
                      <div className="relative aspect-[16/10] w-full overflow-hidden bg-zinc-950">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={project.image}
                          alt={project.name}
                          className="h-full w-full object-cover transition-transform duration-500 hover:scale-[1.03]"
                        />
                      </div>
                    </div>

                    {/* Metadata & Tag */}
                    <div className="mt-6 flex flex-wrap items-center justify-between gap-3">
                      <span className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-bold ${badge.bg} ${badge.text}`}>
                        <ShieldCheck size={13} />
                        {badge.label}
                      </span>

                      <div className="flex items-center gap-2">
                        {project.liveUrl && (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 text-xs font-bold text-blue-600 hover:text-blue-700"
                          >
                            <Globe2 size={13} />
                            Live
                            <ArrowUpRight size={12} />
                          </a>
                        )}
                        {project.clientRepoUrl && project.clientRepoUrl !== project.liveUrl && (
                          <a
                            href={project.clientRepoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 text-xs font-bold text-zinc-600 hover:text-[#09090b]"
                          >
                            <Github size={13} />
                            Repo
                          </a>
                        )}
                      </div>
                    </div>

                    {/* Title & Description */}
                    <h3 className="mt-3 font-display text-2xl font-black text-[#09090b] sm:text-2xl">
                      {project.name}
                    </h3>

                    <p className="mt-2.5 text-sm leading-relaxed text-zinc-600 line-clamp-3">
                      {project.shortDescription || project.description}
                    </p>
                  </div>

                  {/* Tech stack & Case study link */}
                  <div className="mt-6 border-t border-zinc-100 pt-5">
                    <div className="flex flex-wrap gap-1.5">
                      {project.tech.slice(0, 6).map((tech) => (
                        <span
                          key={tech}
                          className="rounded-full border border-zinc-200 bg-zinc-50 px-2.5 py-1 text-[11px] font-semibold text-zinc-700"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="mt-5 flex items-center justify-between">
                      <Link
                        href={`/projects/${project.slug}`}
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-[#09090b] transition-colors hover:text-blue-600"
                      >
                        Read Engineering Case Study
                        <ArrowUpRight size={14} />
                      </Link>

                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-xs font-semibold text-zinc-500 hover:text-zinc-900"
                        >
                          Open site <ArrowUpRight size={12} />
                        </a>
                      )}
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── OTHER NOTABLE PROJECTS (Dark High-Contrast Showcase) ─── */}
      {otherProjects.length > 0 && (
        <section id="other-projects" className="dark-section section-pad relative">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeading
              dark
              eyebrow="Additional Architecture"
              title="Other Full-Stack Systems &amp; Experiments"
              subtitle="Specialized applications covering real-time Socket.IO, logistics and parcel dispatch, and community health."
            />

            <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {otherProjects.map((project, i) => (
                <motion.article
                  key={project.slug}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="dark-card flex flex-col justify-between rounded-2xl p-6 transition-all hover:border-zinc-700"
                >
                  <div>
                    <div className="relative aspect-[16/10] overflow-hidden rounded-xl border border-zinc-800 bg-zinc-950">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={project.image}
                        alt={project.name}
                        className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                      />
                    </div>

                    <h3 className="mt-5 font-display text-lg font-bold text-white">
                      {project.name}
                    </h3>
                    <p className="mt-2 text-xs leading-relaxed text-zinc-400 line-clamp-3">
                      {project.shortDescription || project.description}
                    </p>
                  </div>

                  <div className="mt-5">
                    <div className="flex flex-wrap gap-1.5">
                      {project.tech.slice(0, 4).map((tech) => (
                        <span
                          key={tech}
                          className="rounded-full border border-zinc-800 bg-zinc-900 px-2 py-0.5 text-[10px] text-zinc-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="mt-5 flex items-center justify-between border-t border-zinc-800/80 pt-4">
                      <Link
                        href={`/projects/${project.slug}`}
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-400 hover:text-blue-300"
                      >
                        Case Study <ArrowUpRight size={13} />
                      </Link>

                      <div className="flex items-center gap-3">
                        {project.clientRepoUrl && (
                          <a
                            href={project.clientRepoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Repository"
                            className="text-zinc-400 hover:text-white"
                          >
                            <Github size={15} />
                          </a>
                        )}
                        {project.liveUrl && (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Live Demo"
                            className="text-zinc-400 hover:text-white"
                          >
                            <Globe2 size={15} />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>

            <div className="mt-12 text-center">
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 rounded-full border border-zinc-700 bg-zinc-900 px-7 py-3 text-sm font-semibold text-white transition-all hover:border-zinc-500 hover:bg-zinc-800"
              >
                View Complete Projects Archive ({projects.length})
                <ArrowUpRight size={16} />
              </Link>
            </div>
          </div>
        </section>
      )}
    </>
  );
}
