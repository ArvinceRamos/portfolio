import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { getProject, projects } from "@/content/projects";
import { profile } from "@/content/profile";
import { FadeIn } from "@/components/fade-in";
import { buttonStyles, Container, GitHubIcon, Tag } from "@/components/ui";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return {
    title: project.title,
    description: project.tagline,
    alternates: { canonical: `/work/${project.slug}` },
    openGraph: { title: project.title, description: project.tagline, url: `/work/${project.slug}` },
  };
}

export default async function CaseStudy({ params }: Props) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const index = projects.findIndex((p) => p.slug === project.slug);
  const next = projects[(index + 1) % projects.length];
  const { caseStudy: cs } = project;

  const meta = [
    { label: "Role", value: project.role },
    { label: "Type", value: project.kind },
    { label: "When", value: project.period },
    { label: "Status", value: project.status },
  ];

  return (
    <article className="pb-24">
      <header className="relative isolate overflow-hidden pt-10 pb-14 md:pt-16">
        <div aria-hidden="true" className="absolute inset-0 -z-10 bg-grid mask-fade-x" />
        <Container>
          <Link
            href="/#work"
            className="inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-fg-strong"
          >
            <ArrowLeft className="size-4" aria-hidden="true" /> All projects
          </Link>
          <p className="eyebrow mt-10 animate-fade-up">
            <span aria-hidden="true">{"// "}</span>Project write-up
          </p>
          <h1 className="mt-4 max-w-4xl animate-fade-up text-[clamp(2.5rem,6vw,4.5rem)] leading-[1.02] font-semibold tracking-[-0.045em] text-fg-strong [animation-delay:80ms]">
            {project.title}
          </h1>
          <p className="mt-5 max-w-2xl animate-fade-up text-lg leading-relaxed text-muted [animation-delay:160ms]">
            {project.tagline}
          </p>

          <div className="mt-8 flex animate-fade-up flex-wrap gap-3 [animation-delay:220ms]">
            {project.links.live ? (
              <a href={project.links.live} target="_blank" rel="noreferrer" className={buttonStyles.primary}>
                Open the live site <ArrowUpRight className="size-4" aria-hidden="true" />
              </a>
            ) : null}
            {project.links.code ? (
              <a href={project.links.code} target="_blank" rel="noreferrer" className={buttonStyles.secondary}>
                <GitHubIcon className="size-4" /> Read the code
              </a>
            ) : null}
          </div>

          <dl className="mt-12 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line bg-line lg:grid-cols-4">
            {meta.map((m) => (
              <div key={m.label} className="bg-bg p-5">
                <dt className="font-mono text-[11px] tracking-[0.14em] text-muted uppercase">{m.label}</dt>
                <dd className="mt-2 text-sm text-fg">{m.value}</dd>
              </div>
            ))}
          </dl>
        </Container>
      </header>

      <Container>
        <FadeIn>
          <div className="relative aspect-[16/9] overflow-hidden rounded-3xl border border-line bg-surface">
            <Image
              src={project.image.src}
              alt={project.image.alt}
              fill
              priority
              sizes="(min-width: 1152px) 1104px, 100vw"
              className="object-cover object-top"
            />
          </div>
        </FadeIn>

        <div className="mt-20 grid gap-16 lg:grid-cols-[1fr_280px]">
          <div className="max-w-2xl space-y-16">
            <CaseSection index="01" title="Why I built it">
              <p className="text-lg leading-relaxed text-fg/90">{cs.why}</p>
            </CaseSection>

            <CaseSection index="02" title="What it does">
              <BulletList items={cs.what} />
            </CaseSection>

            <CaseSection index="03" title="How it works">
              <BulletList items={cs.how} />
            </CaseSection>

            <CaseSection index="04" title="The hard parts">
              <div className="space-y-8">
                {cs.hard.map((h) => (
                  <div key={h.title}>
                    <h3 className="text-lg font-semibold text-fg-strong">{h.title}</h3>
                    <p className="mt-2 leading-relaxed text-fg/90">{h.body}</p>
                  </div>
                ))}
              </div>
            </CaseSection>

            <CaseSection index="05" title="How I used AI">
              <p className="leading-relaxed text-fg/90">{cs.ai}</p>
              <p className="mt-3 text-sm text-muted">
                More on this in{" "}
                <Link href="/#ai" className="text-accent underline underline-offset-4">
                  how I use AI
                </Link>
                .
              </p>
            </CaseSection>

            <CaseSection index="06" title="Known issues">
              <p className="mb-5 leading-relaxed text-muted">
                What&apos;s still broken or missing. I&apos;d rather you hear it from me.
              </p>
              <ul className="space-y-3.5">
                {cs.issues.map((item) => (
                  <li key={item} className="flex gap-3 leading-relaxed text-fg/90">
                    <span aria-hidden="true" className="mt-0.5 shrink-0 font-mono text-sm whitespace-nowrap text-line-strong">
                      [ ]
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </CaseSection>
          </div>

          <aside className="lg:sticky lg:top-24 lg:self-start">
            <h2 className="eyebrow text-muted">Built with</h2>
            <div className="mt-4 flex flex-wrap gap-1.5">
              {project.tags.map((t) => (
                <Tag key={t}>{t}</Tag>
              ))}
            </div>
            <div className="mt-10 rounded-2xl border border-line bg-surface/40 p-5">
              <p className="font-medium text-fg-strong">Questions about this project?</p>
              <p className="mt-1.5 text-sm text-muted">
                Happy to walk through any part of the code.
              </p>
              <a href={`mailto:${profile.email}`} className={`${buttonStyles.primary} mt-5 h-10 w-full`}>
                Email me
              </a>
            </div>
          </aside>
        </div>

        <Link
          href={`/work/${next.slug}`}
          className="group mt-24 flex items-center justify-between gap-6 rounded-3xl border border-line p-6 transition-colors hover:border-accent md:p-8"
        >
          <span>
            <span className="eyebrow text-muted">Next project</span>
            <span className="mt-2 block text-2xl font-semibold tracking-tight text-fg-strong md:text-3xl">
              {next.title}
            </span>
          </span>
          <ArrowRight
            className="size-6 shrink-0 text-muted transition-transform group-hover:translate-x-1 group-hover:text-accent"
            aria-hidden="true"
          />
        </Link>
      </Container>
    </article>
  );
}

function CaseSection({ index, title, children }: { index: string; title: string; children: React.ReactNode }) {
  return (
    <FadeIn>
      <section>
        <p className="font-mono text-sm text-accent">{index}</p>
        <h2 className="mt-2 text-2xl font-semibold tracking-tight text-fg-strong md:text-3xl">{title}</h2>
        <div className="mt-5">{children}</div>
      </section>
    </FadeIn>
  );
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-3.5">
      {items.map((item) => (
        <li key={item} className="flex gap-3 leading-relaxed text-fg/90">
          <span aria-hidden="true" className="mt-2.5 h-px w-3 shrink-0 bg-line-strong" />
          {item}
        </li>
      ))}
    </ul>
  );
}
