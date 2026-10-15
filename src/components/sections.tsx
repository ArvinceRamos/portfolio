import Image from "next/image";
import { Lock } from "lucide-react";
import { otherWork, projects } from "@/content/projects";
import { experience } from "@/content/experience";
import { marqueeRows, skillGroups } from "@/content/skills";
import { aiNote, profile } from "@/content/profile";
import { CrmMock } from "./crm-mock";
import { FadeIn } from "./fade-in";
import { ProjectCard } from "./project-card";
import { Spotlight } from "./spotlight";
import { cn, Section, SectionHeading, Tag } from "./ui";

export function Work() {
  return (
    <Section id="work" aria-labelledby="work-title">
      <SectionHeading
        id="work-title"
        index="01"
        label="Projects"
        title="Three projects I built to learn."
        intro="All three are live. Each one has a write-up with how it works, what was hard, how I used AI and what is still broken."
      />
      <div className="space-y-6">
        {projects.map((p, i) => (
          <FadeIn key={p.slug}>
            <ProjectCard project={p} flip={i % 2 === 1} />
          </FadeIn>
        ))}
      </div>
    </Section>
  );
}

export function OtherWork() {
  return (
    <Section id="other-work" aria-labelledby="other-title" className="border-t border-line/60">
      <SectionHeading
        id="other-title"
        index="02"
        label="Other work"
        title="Work I did for other people."
        intro="A small freelance job and my internship. I can't link the code for either, so here is what I built."
      />
      <div className="grid gap-5 md:grid-cols-2">
        {otherWork.map((w, i) => (
          <FadeIn key={w.title} delay={i * 0.08}>
            <Spotlight className="flex h-full flex-col overflow-hidden rounded-3xl border border-line bg-surface/40">
              <div className="relative z-10 aspect-[16/9] overflow-hidden border-b border-line bg-surface">
                {w.image ? (
                  <Image
                    src={w.image.src}
                    alt={w.image.alt}
                    fill
                    sizes="(min-width: 768px) 560px, 100vw"
                    className="object-cover object-top"
                  />
                ) : (
                  <CrmMock />
                )}
              </div>
              <div className="relative z-10 flex flex-1 flex-col p-6 md:p-7">
                <p className="flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-[11px] tracking-wide text-muted uppercase">
                  <span>{w.period}</span>
                  <span aria-hidden="true" className="text-line-strong">/</span>
                  <span>{w.role}</span>
                  {w.isPrivate ? (
                    <span className="inline-flex items-center gap-1 rounded-full border border-line px-2 py-0.5 normal-case">
                      <Lock className="size-3" aria-hidden="true" /> Private
                    </span>
                  ) : null}
                </p>
                <h3 className="mt-3 text-2xl font-semibold tracking-tight text-fg-strong">{w.title}</h3>
                <p className="mt-1 text-sm text-muted">{w.org}</p>
                <p className="mt-4 leading-relaxed text-fg">{w.summary}</p>
                <ul className="mt-4 space-y-2">
                  {w.points.map((pt) => (
                    <li key={pt} className="flex gap-3 text-sm leading-relaxed text-fg/90">
                      <span className="mt-2.5 h-px w-3 shrink-0 bg-line-strong" aria-hidden="true" />
                      {pt}
                    </li>
                  ))}
                </ul>
                <div className="mt-auto flex flex-wrap gap-1.5 pt-6">
                  {w.tags.map((t) => (
                    <Tag key={t}>{t}</Tag>
                  ))}
                </div>
              </div>
            </Spotlight>
          </FadeIn>
        ))}
      </div>
    </Section>
  );
}

export function AiNote() {
  return (
    <Section id="ai" aria-labelledby="ai-title" className="border-t border-line/60">
      <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <SectionHeading id="ai-title" index="03" label="How I use AI" title="Yes, I use AI. Here's how." />
        <div className="space-y-5 text-lg leading-relaxed text-fg/90 lg:pt-10">
          {aiNote.map((p) => (
            <p key={p.slice(0, 24)}>{p}</p>
          ))}
        </div>
      </div>
    </Section>
  );
}

export function Experience() {
  return (
    <Section id="experience" aria-labelledby="experience-title" className="border-t border-line/60">
      <SectionHeading id="experience-title" index="04" label="Experience" title="Where I've worked." />
      <ol className="relative">
        {experience.map((job, i) => (
          <li key={job.company} className="grid gap-3 md:grid-cols-[220px_1fr] md:gap-10">
            <p className="pt-1 font-mono text-xs tracking-wide text-muted uppercase md:text-right">
              {job.period}
            </p>
            <FadeIn delay={0.05}>
              <div
                className={cn(
                  "relative border-l border-line pb-12 pl-7",
                  i === experience.length - 1 && "pb-0",
                )}
              >
                <span
                  aria-hidden="true"
                  className={cn(
                    "absolute top-1.5 -left-[5px] size-[9px] rounded-full border-2 border-bg",
                    i === 0 ? "bg-accent" : "bg-line-strong",
                  )}
                />
                <h3 className="text-xl font-semibold tracking-tight text-fg-strong">{job.role}</h3>
                <p className="mt-1 text-sm text-accent">
                  {job.company} <span className="text-muted">· {job.place}</span>
                </p>
                <ul className="mt-4 space-y-2.5">
                  {job.points.map((pt) => (
                    <li key={pt} className="flex gap-3 leading-relaxed text-fg/90">
                      <span className="mt-2.5 h-px w-3 shrink-0 bg-line-strong" aria-hidden="true" />
                      {pt}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          </li>
        ))}
      </ol>
    </Section>
  );
}

export function Stack() {
  return (
    <section id="stack" aria-labelledby="stack-title" className="border-t border-line/60 py-24 md:py-32">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        <SectionHeading
          id="stack-title"
          index="05"
          label="Stack"
          title="What I've used in these projects."
          intro="Not a list of everything I've heard of. Each of these is in at least one of the projects above."
        />
      </div>

      <div className="space-y-3 mask-fade-x" aria-hidden="true">
        {marqueeRows.map((row, r) => (
          <div key={r} className="group flex overflow-hidden">
            <div
              className={cn(
                "flex shrink-0 gap-3 pr-3 group-hover:[animation-play-state:paused]",
                r % 2 ? "animate-marquee-reverse" : "animate-marquee",
              )}
            >
              {/* Two identical halves (each wider than the screen) so the -50% loop is seamless */}
              {[...row, ...row, ...row, ...row].map((item, i) => (
                <span
                  key={i}
                  className="rounded-full border border-line bg-surface/50 px-5 py-2.5 font-mono text-sm whitespace-nowrap text-fg"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mx-auto mt-16 grid w-full max-w-6xl gap-x-10 gap-y-8 px-4 sm:grid-cols-2 sm:px-6 lg:grid-cols-3">
        {skillGroups.map((g) => (
          <div key={g.label}>
            <h3 className="eyebrow text-muted">{g.label}</h3>
            <p className="mt-3 leading-relaxed text-fg">{g.items.join(" · ")}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export function About() {
  return (
    <Section id="about" aria-labelledby="about-title" className="border-t border-line/60">
      <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <FadeIn>
          <div className="relative mx-auto aspect-square w-full max-w-xs overflow-hidden rounded-3xl border border-line lg:mx-0">
            <Image
              src="/images/arvince.webp"
              alt="Arvince Ramos"
              fill
              sizes="320px"
              className="object-cover object-top"
            />
          </div>
        </FadeIn>
        <div>
          <SectionHeading id="about-title" index="06" label="About" title="Hi, I'm Arvince." />
          <div className="-mt-4 space-y-5 text-lg leading-relaxed text-fg/90">
            {profile.bio.map((p) => (
              <p key={p.slice(0, 20)}>{p}</p>
            ))}
          </div>
          <dl className="mt-10 grid gap-6 border-t border-line pt-8 sm:grid-cols-3">
            <div>
              <dt className="eyebrow text-muted">Education</dt>
              <dd className="mt-2 text-fg">
                {profile.education.degree}
                <span className="block text-sm text-muted">
                  {profile.education.school} · {profile.education.year}
                </span>
              </dd>
            </div>
            <div>
              <dt className="eyebrow text-muted">Based in</dt>
              <dd className="mt-2 text-fg">
                {profile.location}
                <span className="block text-sm text-muted">Open to remote or on-site in Cebu</span>
              </dd>
            </div>
            <div>
              <dt className="eyebrow text-muted">Languages</dt>
              <dd className="mt-2 text-fg">{profile.languages.join(", ")}</dd>
            </div>
          </dl>
        </div>
      </div>
    </Section>
  );
}
