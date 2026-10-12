import Image from "next/image";
import { Bot, Code2, Smartphone, Clock, MessageSquare, Globe2 } from "lucide-react";
import { projects } from "@/content/projects";
import { experience } from "@/content/experience";
import { marqueeRows, process, services, skillGroups } from "@/content/skills";
import { profile } from "@/content/profile";
import { FadeIn } from "./fade-in";
import { ProjectCard } from "./project-card";
import { Spotlight } from "./spotlight";
import { cn, Section, SectionHeading } from "./ui";

// Bento layout: wide / narrow, then narrow / wide on large screens.
const workSpans = ["lg:col-span-7", "lg:col-span-5", "lg:col-span-5", "lg:col-span-7"];

export function Work() {
  return (
    <Section id="work" aria-labelledby="work-title">
      <SectionHeading
        id="work-title"
        index="01"
        label="Selected work"
        title="Real products for real users."
        intro="A client app, an internal business tool, an AI assistant and a product I'm building now. Each one has a short case study."
      />
      <div className="grid gap-5 lg:grid-cols-12">
        {projects.map((p, i) => (
          <FadeIn key={p.slug} delay={(i % 2) * 0.08} className={workSpans[i] ?? "lg:col-span-6"}>
            <ProjectCard project={p} />
          </FadeIn>
        ))}
      </div>
    </Section>
  );
}

const serviceIcons = [Code2, Smartphone, Bot];

export function Services() {
  return (
    <Section id="services" aria-labelledby="services-title" className="border-t border-line/60">
      <SectionHeading
        id="services-title"
        index="02"
        label="What I can build for you"
        title={
          <>
            One developer, <span className="text-muted">the whole stack.</span>
          </>
        }
        intro="Front end, back end, mobile and AI — so you don't have to coordinate three freelancers for one product."
      />
      <div className="grid gap-5 md:grid-cols-3">
        {services.map((s, i) => {
          const Icon = serviceIcons[i];
          return (
            <FadeIn key={s.title} delay={i * 0.08}>
              <Spotlight className="h-full rounded-3xl border border-line bg-surface/40 p-7">
                <div className="relative z-10">
                  <span className="inline-flex size-11 items-center justify-center rounded-xl border border-line bg-bg text-accent">
                    <Icon className="size-5" aria-hidden="true" />
                  </span>
                  <h3 className="mt-6 text-xl font-semibold tracking-tight text-fg-strong">{s.title}</h3>
                  <p className="mt-3 leading-relaxed text-muted">{s.body}</p>
                  <ul className="mt-6 space-y-2 border-t border-line pt-5 text-sm">
                    {s.points.map((pt) => (
                      <li key={pt} className="flex items-center gap-2.5 text-fg">
                        <span className="size-1.5 rounded-full bg-accent" aria-hidden="true" />
                        {pt}
                      </li>
                    ))}
                  </ul>
                </div>
              </Spotlight>
            </FadeIn>
          );
        })}
      </div>

      <div id="process" className="mt-24">
        <p className="eyebrow">
          <span aria-hidden="true">{"// "}</span>How I work
        </p>
        <ol className="mt-8 grid gap-px overflow-hidden rounded-3xl border border-line bg-line md:grid-cols-4">
          {process.map((step, i) => (
            <li key={step.title} className="bg-bg p-6 md:p-7">
              <span className="font-mono text-sm text-accent">0{i + 1}</span>
              <h3 className="mt-3 text-lg font-semibold text-fg-strong">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{step.body}</p>
            </li>
          ))}
        </ol>
        <ul className="mt-6 flex flex-wrap gap-x-8 gap-y-3 text-sm text-muted">
          <li className="flex items-center gap-2">
            <Clock className="size-4 text-accent" aria-hidden="true" /> {profile.replyTime}
          </li>
          <li className="flex items-center gap-2">
            <Globe2 className="size-4 text-accent" aria-hidden="true" /> Based in Cebu ({profile.timezone}) ·{" "}
            {profile.hours}
          </li>
          <li className="flex items-center gap-2">
            <MessageSquare className="size-4 text-accent" aria-hidden="true" /> Clear written updates in
            English
          </li>
        </ul>
      </div>
    </Section>
  );
}

export function Experience() {
  return (
    <Section id="experience" aria-labelledby="experience-title" className="border-t border-line/60">
      <SectionHeading
        id="experience-title"
        index="03"
        label="Experience"
        title="Where I've shipped."
      />
      <ol className="relative">
        {experience.map((job, i) => (
          <li key={job.company} className="group grid gap-3 md:grid-cols-[220px_1fr] md:gap-10">
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
          index="04"
          label="Stack"
          title="Tools I use every week."
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
          <SectionHeading id="about-title" index="05" label="About" title="Hi, I'm Arvince." />
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
                <span className="block text-sm text-muted">{profile.timezone} · open to remote</span>
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
