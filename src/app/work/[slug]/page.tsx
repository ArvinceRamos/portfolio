import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, ArrowUpRight, Lock } from "lucide-react";
import { getProject, projects } from "@/content/projects";
import { CrmMock } from "@/components/crm-mock";
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
    description: project.summary,
    alternates: { canonical: `/work/${project.slug}` },
    openGraph: { title: project.title, description: project.summary, url: `/work/${project.slug}` },
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
    { label: "Client", value: project.client },
    { label: "Timeline", value: project.period },
    { label: "Type", value: project.category },
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
            <ArrowLeft className="size-4" aria-hidden="true" /> All work
          </Link>
          <p className="eyebrow mt-10 animate-fade-up">
            <span aria-hidden="true">{"// "}</span>Case study · {project.year}
          </p>
          <h1 className="mt-4 max-w-4xl animate-fade-up text-[clamp(2.5rem,6vw,4.5rem)] leading-[1.02] font-semibold tracking-[-0.045em] text-fg-strong [animation-delay:80ms]">
            {project.title}
          </h1>
          <p className="mt-5 max-w-2xl animate-fade-up text-lg leading-relaxed text-muted [animation-delay:160ms]">
            {project.summary}
          </p>

          <div className="mt-8 flex animate-fade-up flex-wrap gap-3 [animation-delay:220ms]">
            {project.links.live ? (
              <a href={project.links.live} target="_blank" rel="noreferrer" className={buttonStyles.primary}>
                View live <ArrowUpRight className="size-4" aria-hidden="true" />
              </a>
            ) : null}
            {project.links.code ? (
              <a href={project.links.code} target="_blank" rel="noreferrer" className={buttonStyles.secondary}>
                <GitHubIcon className="size-4" /> View code
              </a>
            ) : null}
            {project.isPrivate ? (
              <span className="inline-flex h-11 items-center gap-2 rounded-full border border-line px-5 text-sm text-muted">
                <Lock className="size-4" aria-hidden="true" /> Internal tool — code and data are private
              </span>
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
            {project.image ? (
              <Image
                src={project.image.src}
                alt={project.image.alt}
                fill
                priority
                sizes="(min-width: 1152px) 1104px, 100vw"
                className="object-cover object-top"
              />
            ) : (
              <CrmMock />
            )}
          </div>
        </FadeIn>

        <div className="mt-20 grid gap-16 lg:grid-cols-[1fr_280px]">
          <div className="max-w-2xl space-y-16">
            <CaseSection index="01" title="The problem">
              <p className="text-lg leading-relaxed text-fg/90">{cs.problem}</p>
            </CaseSection>
            <CaseSection index="02" title="What I built">
              <BulletList items={cs.built} />
            </CaseSection>
            <CaseSection index="03" title="Key decisions">
              <BulletList items={cs.decisions} />
            </CaseSection>
            <CaseSection index="04" title="Results">
              <BulletList items={cs.results} accent />
            </CaseSection>
          </div>

          <aside className="lg:sticky lg:top-24 lg:self-start">
            <h2 className="eyebrow text-muted">Stack</h2>
            <div className="mt-4 flex flex-wrap gap-1.5">
              {project.tags.map((t) => (
                <Tag key={t}>{t}</Tag>
              ))}
            </div>
            <div className="mt-10 rounded-2xl border border-line bg-surface/40 p-5">
              <p className="font-medium text-fg-strong">Need something similar?</p>
              <p className="mt-1.5 text-sm text-muted">I build web, mobile and AI features end to end.</p>
              <Link href="/#contact" className={`${buttonStyles.primary} mt-5 h-10 w-full`}>
                Start a project
              </Link>
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

function BulletList({ items, accent }: { items: string[]; accent?: boolean }) {
  return (
    <ul className="space-y-3.5">
      {items.map((item) => (
        <li key={item} className="flex gap-3 leading-relaxed text-fg/90">
          <span
            aria-hidden="true"
            className={accent ? "mt-[3px] text-accent" : "mt-2.5 h-px w-3 shrink-0 bg-line-strong"}
          >
            {accent ? "✓" : null}
          </span>
          {item}
        </li>
      ))}
    </ul>
  );
}
