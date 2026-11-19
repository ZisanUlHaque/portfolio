import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Github, Globe2, Lock } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { projects } from "../data/projects";

function getDomainFromUrl(url: string): string {
  try {
    const parsed = new URL(url);
    return parsed.hostname;
  } catch {
    return "platform.app";
  }
}

export default function ProjectsPage() {
  return (
    <main className="relative min-h-screen bg-[#faf9f6]">
      <Navbar />

      <section className="pt-32 pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-sm font-semibold text-zinc-600 transition-colors hover:text-[#09090b]"
          >
            <ArrowLeft size={16} /> Back to home
          </Link>

          <div className="mt-8 border-b border-zinc-200 pb-10">
            <span className="font-mono text-xs font-bold uppercase tracking-wider text-blue-600">
              ● Engineering Portfolio
            </span>
            <h1 className="mt-3 font-display text-4xl font-black text-[#09090b] sm:text-5xl md:text-6xl">
              All Projects &amp; Deployments
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-zinc-600 sm:text-lg">
              A comprehensive showcase of client productions, hackathon-winning applications, full-stack SaaS platforms, and distributed systems.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => {
              const domain = getDomainFromUrl(project.liveUrl || project.clientRepoUrl);
              return (
                <article
                  key={project.slug}
                  className="flex h-full flex-col justify-between rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm transition-all hover:border-[#09090b] hover:shadow-md"
                >
                  <div>
                    {/* Viewport Window */}
                    <div className="overflow-hidden rounded-xl border border-zinc-800 bg-[#09090b]">
                      <div className="flex items-center justify-between border-b border-zinc-800/80 bg-[#18181b] px-3 py-2">
                        <div className="flex items-center gap-1.5">
                          <span className="h-2 w-2 rounded-full bg-zinc-600" />
                          <span className="h-2 w-2 rounded-full bg-zinc-600" />
                          <span className="h-2 w-2 rounded-full bg-zinc-600" />
                        </div>
                        <div className="flex items-center gap-1 text-[10px] font-mono text-zinc-400 truncate">
                          <Lock size={9} className="text-emerald-400" />
                          <span>{domain}</span>
                        </div>
                      </div>
                      <div className="relative aspect-[16/10] overflow-hidden bg-zinc-950">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={project.image}
                          alt={project.name}
                          className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                        />
                      </div>
                    </div>

                    <h2 className="mt-6 font-display text-xl font-bold text-[#09090b]">
                      {project.name}
                    </h2>
                    <p className="mt-2.5 text-sm leading-relaxed text-zinc-600 line-clamp-3">
                      {project.shortDescription || project.description}
                    </p>
                  </div>

                  <div className="mt-6">
                    <div className="flex flex-wrap gap-1.5">
                      {project.tech.slice(0, 5).map((tech) => (
                        <span
                          key={tech}
                          className="rounded-full border border-zinc-200 bg-zinc-50 px-2.5 py-0.5 text-[11px] font-medium text-zinc-700"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="mt-5 flex items-center justify-between border-t border-zinc-100 pt-4">
                      <Link
                        href={`/projects/${project.slug}`}
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 transition-colors hover:text-blue-700"
                      >
                        Case Study <ArrowUpRight size={14} />
                      </Link>

                      <div className="flex items-center gap-3">
                        {project.clientRepoUrl && project.clientRepoUrl !== project.liveUrl && (
                          <a
                            href={project.clientRepoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Repository"
                            className="text-zinc-500 transition-colors hover:text-[#09090b]"
                          >
                            <Github size={16} />
                          </a>
                        )}
                        {project.liveUrl && (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Live Demo"
                            className="text-zinc-500 transition-colors hover:text-[#09090b]"
                          >
                            <Globe2 size={16} />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
