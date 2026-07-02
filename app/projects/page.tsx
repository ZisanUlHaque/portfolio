import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { projects } from "../data/projects";

export default function ProjectsPage() {
  return (
    <main className="relative min-h-screen">
      <Navbar />

      <section className="pt-28 pb-10">
        <div className="mx-auto max-w-7xl px-4">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-sm text-ink-300 transition-colors hover:text-ink-100"
          >
            <ArrowLeft size={14} /> Back to home
          </Link>

          <div className="mt-8">
            <h1 className="font-display text-4xl font-semibold text-ink-50 sm:text-5xl">
              All Projects
            </h1>
            <p className="mt-3 max-w-2xl text-base text-ink-200/80">
              A curated collection of recent work spanning product design, frontend development, and full-stack experiences.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-3">
            {projects.map((project) => (
              <article
                key={project.slug}
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
                  <h2 className="font-display text-2xl font-semibold text-ink-50">
                    {project.name}
                  </h2>
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
              </article>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
