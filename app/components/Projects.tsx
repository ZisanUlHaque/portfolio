"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { projects } from "../data/projects";
import SectionHeading from "./SectionHeading";

export default function Projects() {
  return (
    <section id="projects" className="section-pad relative">
      <div className="pointer-events-none absolute inset-x-0 top-1/2 -z-10 h-72 bg-gradient-to-r from-brand-400/10 via-accent-500/10 to-transparent blur-3xl" />
      <div className="mx-auto max-w-7xl px-4">
        <SectionHeading
          align="center"
          eyebrow="Projects"
          title="Featured Work"
          subtitle="Selected projects that showcase my design and development expertise."
        />

        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {projects.slice(0, 3).map((project, i) => (
            <motion.article
              key={project.slug}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group flex h-full flex-col rounded-2xl border border-white/10 bg-white/[0.02] p-6 transition-all hover:border-white/20 hover:bg-white/[0.04]"
            >
              <div className="relative aspect-[16/10] overflow-hidden rounded-lg">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={project.image}
                  alt={project.name}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              <div className="mt-6 flex flex-1 flex-col">
                <h3 className="font-display text-2xl font-semibold text-ink-50">
                  {project.name}
                </h3>
                <p className="mt-3 flex-1 leading-relaxed text-ink-200/80">
                  {project.description}
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-white/10 bg-white/[0.05] px-3 py-1 text-xs text-ink-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <Link
                  href={`/projects/${project.slug}`}
                  className="mt-6 inline-flex items-center gap-2 font-semibold text-brand-400 transition-all hover:gap-3"
                >
                  View Project
                  <ArrowUpRight size={18} />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>

        {projects.length > 3 && (
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-12 text-center"
          >
            <Link
              href="/projects"
              className="inline-flex items-center gap-3 rounded-lg border border-brand-400/50 px-8 py-3 font-semibold text-brand-300 transition-all hover:bg-brand-400/10"
            >
              View All Projects
              <ArrowUpRight size={18} />
            </Link>
          </motion.div>
        )}
      </div>
    </section>
  );
}