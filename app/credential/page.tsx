import Link from "next/link";
import { ArrowLeft, ExternalLink, Award, Calendar, Building2 } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { certifications } from "../data/certifications";

export default function CredentialPage() {
  return (
    <main className="relative min-h-screen">
      <Navbar />

      <section className="pt-28">
        <div className="mx-auto max-w-7xl px-4 py-5">
          <Link
            href="/#certifications"
            className="inline-flex items-center gap-2 text-sm text-ink-300 transition-colors hover:text-ink-100"
          >
            <ArrowLeft size={14} /> Back to home
          </Link>

          <div className="mt-8">
            <h1 className="font-display text-4xl font-semibold text-ink-50 sm:text-5xl">
              All Credentials
            </h1>
            <p className="mt-3 max-w-2xl text-base text-ink-200/80">
              A complete list of the certifications and professional credentials I&apos;ve earned.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-3">
            {certifications.map((cert) => (
              <article
                key={cert.title}
                className="group flex h-full flex-col rounded-2xl border border-white/10 bg-white/[0.02] p-6 transition-all hover:border-white/20 hover:bg-white/[0.04]"
              >
                <div className="flex items-start justify-between">

                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand-500/10">
                    <Award size={18} className="text-brand-400" />
                  </div>
                </div>

                <div className="mt-6 flex flex-1 flex-col">
                  <h2 className="font-display text-xl font-semibold text-ink-50">
                    {cert.title}
                  </h2>

                  <div className="mt-3 flex flex-col gap-2 text-sm text-ink-200/70">
                    <div className="flex items-center gap-2">
                      <Building2 size={14} className="flex-shrink-0 text-ink-200/40" />
                      <span>{cert.issuer}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar size={14} className="flex-shrink-0 text-ink-200/40" />
                      <span>{cert.date}</span>
                    </div>
                  </div>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {cert.skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-full border border-white/10 bg-white/[0.05] px-3 py-1 text-xs text-ink-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  <a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-flex items-center gap-2 font-semibold text-brand-400 transition-all hover:gap-3"
                  >
                    View Credential
                    <ExternalLink size={16} />
                  </a>
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
