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
  Sparkles,
  Lock
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
    title: `${project.name} — Architecture Case Study`,
    description: project.shortDescription
  };
}

function getDomainFromUrl(url: string): string {
  try {
    const parsed = new URL(url);
    return parsed.hostname;
  } catch {
    return "platform.app";
  }
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
  const domain = getDomainFromUrl(project.liveUrl || project.clientRepoUrl);

  return (
    <main className="relative min-h-screen bg-[#faf9f6]">
      <Navbar />

      <article className="pt-32 pb-20">
        {/* Header */}
        <header className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-sm font-semibold text-zinc-600 transition-colors hover:text-[#09090b]"
          >
            <ArrowLeft size={16} /> Back to projects
          </Link>

          <div className="mt-6 flex flex-wrap items-center gap-2">
            {project.tech.slice(0, 6).map((t) => (
              <span
                key={t}
                className="rounded-full border border-zinc-200 bg-white px-3 py-1 text-xs font-semibold text-zinc-700"
              >
                {t}
              </span>
            ))}
          </div>

          <h1 className="mt-4 font-display text-4xl font-black leading-tight text-[#09090b] sm:text-5xl md:text-6xl">
            {project.name}
          </h1>

          <p className="mt-4 max-w-3xl text-base leading-relaxed text-zinc-600 md:text-lg">
            {project.shortDescription}
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-[#09090b] px-6 py-3 text-sm font-bold text-white transition-all hover:bg-zinc-800"
              >
                <Globe2 size={16} /> Live Deployment
                <ArrowUpRight size={15} />
              </a>
            )}

            {project.clientRepoUrl && project.clientRepoUrl !== project.liveUrl && (
              <a
                href={project.clientRepoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-zinc-300 bg-white px-6 py-3 text-sm font-bold text-[#09090b] transition-all hover:border-[#09090b]"
              >
                <Github size={16} /> Source Code
              </a>
            )}
          </div>
        </header>

        {/* Browser Mockup Cover */}
        <div className="mx-auto mt-12 max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="overflow-hidden rounded-3xl border border-zinc-800 bg-[#09090b] shadow-2xl">
            <div className="flex items-center justify-between border-b border-zinc-800/80 bg-[#18181b] px-4 py-3">
              <div className="flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-zinc-600" />
                <span className="h-3 w-3 rounded-full bg-zinc-600" />
                <span className="h-3 w-3 rounded-full bg-zinc-600" />
              </div>
              <div className="flex items-center gap-1.5 font-mono text-xs text-zinc-400">
                <Lock size={12} className="text-emerald-400" />
                <span>https://{domain}</span>
              </div>
              <span className="text-xs font-mono text-zinc-500">PROD</span>
            </div>

            <div className="relative aspect-[16/9] w-full bg-zinc-950">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={project.image}
                alt={project.name}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Body Content */}
        <div className="mx-auto mt-14 grid max-w-6xl grid-cols-1 gap-10 px-4 sm:px-6 lg:grid-cols-3 lg:px-8">
          <section className="lg:col-span-2">
            <div className="rounded-3xl border border-zinc-200 bg-white p-8 shadow-sm sm:p-10">
              <h2 className="font-display text-2xl font-bold text-[#09090b]">
                Architecture &amp; Implementation
              </h2>
              <p className="mt-4 text-base leading-relaxed text-zinc-600">
                {project.description}
              </p>

              <h3 className="mt-10 font-display text-xl font-bold text-[#09090b]">
                Key Engineering Features
              </h3>
              <ul className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {project.features.map((f) => (
                  <li
                    key={f}
                    className="flex items-start gap-2.5 rounded-2xl border border-zinc-200 bg-zinc-50 p-4 text-sm text-[#09090b]"
                  >
                    <CheckCircle2 size={17} className="mt-0.5 shrink-0 text-blue-600" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              <h3 className="mt-10 font-display text-xl font-bold text-[#09090b]">
                Technical Challenges &amp; Solutions
              </h3>
              <ul className="mt-4 space-y-3">
                {project.challenges.map((c) => (
                  <li
                    key={c}
                    className="flex items-start gap-2.5 rounded-2xl border border-zinc-200 bg-zinc-50 p-4 text-sm text-[#09090b]"
                  >
                    <AlertTriangle size={17} className="mt-0.5 shrink-0 text-amber-600" />
                    <span>{c}</span>
                  </li>
                ))}
              </ul>

              <h3 className="mt-10 font-display text-xl font-bold text-[#09090b]">
                Future Optimizations
              </h3>
              <ul className="mt-4 space-y-3">
                {project.improvements.map((p) => (
                  <li
                    key={p}
                    className="flex items-start gap-2.5 rounded-2xl border border-zinc-200 bg-zinc-50 p-4 text-sm text-[#09090b]"
                  >
                    <Sparkles size={17} className="mt-0.5 shrink-0 text-blue-600" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* Sidebar */}
          <aside className="space-y-6">
            <div className="rounded-3xl border border-zinc-200 bg-white p-7 shadow-sm">
              <h3 className="font-display text-base font-bold text-[#09090b]">
                Technologies &amp; Libraries
              </h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1 text-xs font-semibold text-zinc-700"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-zinc-200 bg-white p-7 shadow-sm">
              <h3 className="font-display text-base font-bold text-[#09090b]">
                Deployment Links
              </h3>
              <div className="mt-4 space-y-2.5 text-sm">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 font-semibold text-blue-600 hover:underline"
                  >
                    <Globe2 size={16} /> Open Production URL
                  </a>
                )}
                {project.clientRepoUrl && project.clientRepoUrl !== project.liveUrl && (
                  <a
                    href={project.clientRepoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 font-semibold text-[#09090b] hover:underline"
                  >
                    <Github size={16} /> Open GitHub Repository
                  </a>
                )}
              </div>
            </div>

            <Link
              href={`/projects/${next.slug}`}
              className="group block rounded-3xl border border-zinc-200 bg-white p-7 shadow-sm transition-all hover:border-[#09090b]"
            >
              <div className="font-mono text-[10px] font-bold uppercase tracking-widest text-zinc-400">
                Next Project Case Study
              </div>
              <div className="mt-2 font-display text-lg font-bold text-[#09090b] group-hover:text-blue-600">
                {next.name}
              </div>
              <div className="mt-3 inline-flex items-center gap-1.5 text-xs font-bold text-blue-600">
                Read Case Study <ArrowUpRight size={14} />
              </div>
            </Link>
          </aside>
        </div>
      </article>

      <Footer />
    </main>
  );
}
