import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import {
  ArrowLeft,
  ArrowUpRight,
  Github,
  Globe2,
  CheckCircle2,
  AlertTriangle,
  Sparkles
} from "lucide-react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { projects } from "../../data/projects";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return projects.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({
  params
}: {
  params: Params;
}): Metadata {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) return { title: "Project not found" };
  return {
    title: `${project.name} — Case Study`,
    description: project.shortDescription
  };
}

export default function ProjectDetailPage({
  params
}: {
  params: Params;
}) {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) return notFound();
  const idx = projects.findIndex((p) => p.slug === params.slug);
  const next = projects[(idx + 1) % projects.length];

  return (
    <main className="relative min-h-screen">
      <Navbar />

      <article className="pt-28 pb-10">
        {/* Hero */}
        <header className="mx-auto max-w-6xl px-4">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-1 text-sm text-ink-300 transition-colors hover:text-ink-100"
          >
            <ArrowLeft size={14} /> Back to projects
          </Link>

          <div className="mt-6 flex flex-wrap items-center gap-2">
            {project.tech.slice(0, 5).map((t) => (
              <span
                key={t}
                className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs text-ink-200"
              >
                {t}
              </span>
            ))}
          </div>

          <h1 className="mt-4 font-display text-4xl font-semibold leading-tight sm:text-5xl md:text-6xl">
            <span className="text-gradient">{project.name}</span>
          </h1>
          <p className="mt-4 max-w-2xl text-base text-ink-200/85 md:text-lg">
            {project.shortDescription}
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              <Globe2 size={16} /> Live project
              <ArrowUpRight size={14} />
            </a>
            <a
              href={project.clientRepoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost"
            >
              <Github size={16} /> Client repo
            </a>
          </div>
        </header>

        {/* Cover */}
        <div className="mx-auto mt-10 max-w-5xl px-4">
          <div className="relative overflow-hidden rounded-3xl border border-white/10">
            <div className="absolute -inset-1 -z-10 rounded-[2rem] bg-gradient-to-br from-brand-400/30 via-accent-500/20 to-fuchsia-500/20 blur-2xl" />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={project.image}
              alt={project.name}
              className="aspect-[16/9] w-full object-cover"
            />
          </div>
        </div>

        {/* Body */}
        <div className="mx-auto mt-14 grid max-w-5xl grid-cols-1 gap-8 px-4 lg:grid-cols-3">
          <section className="lg:col-span-2">
            <h2 className="font-display text-2xl font-semibold text-ink-50">
              About this project
            </h2>
            <p className="mt-3 leading-relaxed text-ink-200/85">
              {project.description}
            </p>

            <h3 className="mt-10 font-display text-xl font-semibold text-ink-50">
              Key features
            </h3>
            <ul className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-2">
              {project.features.map((f) => (
                <li
                  key={f}
                  className="flex items-start gap-2 rounded-xl border border-white/10 bg-white/[0.03] p-3 text-sm text-ink-100"
                >
                  <CheckCircle2 size={16} className="mt-0.5 text-brand-300" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>

            <h3 className="mt-10 font-display text-xl font-semibold text-ink-50">
              Challenges faced
            </h3>
            <ul className="mt-3 space-y-2">
              {project.challenges.map((c) => (
                <li
                  key={c}
                  className="flex items-start gap-2 rounded-xl border border-white/10 bg-white/[0.03] p-3 text-sm text-ink-100"
                >
                  <AlertTriangle size={16} className="mt-0.5 text-amber-300" />
                  <span>{c}</span>
                </li>
              ))}
            </ul>

            <h3 className="mt-10 font-display text-xl font-semibold text-ink-50">
              Potential improvements & future plans
            </h3>
            <ul className="mt-3 space-y-2">
              {project.improvements.map((p) => (
                <li
                  key={p}
                  className="flex items-start gap-2 rounded-xl border border-white/10 bg-white/[0.03] p-3 text-sm text-ink-100"
                >
                  <Sparkles size={16} className="mt-0.5 text-accent-400" />
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </section>

          <aside className="space-y-6">
            <div className="glass rounded-2xl p-6">
              <h3 className="font-display text-base font-semibold text-ink-50">
                Tech stack
              </h3>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded-full bg-white/[0.05] px-2.5 py-1 text-[11px] text-ink-100"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="glass rounded-2xl p-6">
              <h3 className="font-display text-base font-semibold text-ink-50">
                Links
              </h3>
              <div className="mt-3 space-y-2 text-sm">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-brand-300 hover:underline"
                >
                  <Globe2 size={14} /> Live demo
                </a>
                <a
                  href={project.clientRepoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-brand-300 hover:underline"
                >
                  <Github size={14} /> Client repository
                </a>
              </div>
            </div>

            <Link
              href={`/projects/${next.slug}`}
              className="group flex items-center justify-between rounded-2xl border border-white/10 bg-gradient-to-br from-brand-400/10 to-accent-500/10 p-5 transition-colors hover:border-white/20"
            >
              <div>
                <div className="text-xs uppercase tracking-wider text-ink-300">
                  Next project
                </div>
                <div className="mt-1 font-display text-base font-semibold text-ink-50">
                  {next.name}
                </div>
              </div>
              <ArrowUpRight
                size={18}
                className="text-brand-300 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </Link>
          </aside>
        </div>
      </article>

      <Footer />
    </main>
  );
}