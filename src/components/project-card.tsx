import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import type { Project } from "@/content/projects";
import { Spotlight } from "./spotlight";
import { cn, GitHubIcon, Tag } from "./ui";

export function ProjectCard({ project, flip = false }: { project: Project; flip?: boolean }) {
  return (
    <Spotlight className="overflow-hidden rounded-3xl border border-line bg-surface/40 transition-colors duration-300 hover:border-line-strong">
      <div className={cn("relative z-10 grid lg:grid-cols-[1.15fr_1fr]", flip && "lg:grid-cols-[1fr_1.15fr]")}>
        <div
          className={cn(
            "flex items-center border-b border-line bg-[radial-gradient(circle_at_30%_20%,rgb(1_193_106/0.08),transparent_60%)] p-4 sm:p-6 lg:border-b-0 lg:p-8",
            flip ? "lg:order-2 lg:border-l" : "lg:border-r",
          )}
        >
          <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl border border-line bg-surface shadow-2xl shadow-black/40">
            <Image
              src={project.image.src}
              alt={project.image.alt}
              fill
              sizes="(min-width: 1024px) 560px, 100vw"
              className="object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.02]"
            />
          </div>
        </div>

        <div className="flex flex-col p-6 md:p-8">
          <p className="flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-[11px] tracking-wide text-muted uppercase">
            <span>{project.period}</span>
            <span aria-hidden="true" className="text-line-strong">/</span>
            <span>{project.kind}</span>
          </p>

          <h3 className="mt-3 text-3xl font-semibold tracking-tight text-fg-strong">
            <Link
              href={`/work/${project.slug}`}
              className="after:absolute after:inset-0 after:content-[''] focus-visible:outline-none"
            >
              {project.title}
            </Link>
          </h3>
          <p className="mt-1 inline-flex items-center gap-2 text-sm text-muted">
            <span className="size-1.5 rounded-full bg-accent" aria-hidden="true" />
            {project.status}
          </p>

          <p className="mt-4 leading-relaxed text-fg">{project.tagline}</p>

          <ul className="mt-5 space-y-1.5 font-mono text-[13px] text-fg/90">
            {project.highlights.map((h) => (
              <li key={h} className="flex gap-2">
                <span className="text-accent" aria-hidden="true">→</span>
                {h}
              </li>
            ))}
          </ul>

          <div className="mt-5 flex flex-wrap gap-1.5">
            {project.tags.map((t) => (
              <Tag key={t}>{t}</Tag>
            ))}
          </div>

          <div className="mt-auto flex flex-wrap items-center gap-x-5 gap-y-2 pt-7 text-sm">
            <span className="inline-flex items-center gap-1 font-medium text-accent">
              Read the write-up <ArrowRight className="size-4" aria-hidden="true" />
            </span>
            {project.links.live ? (
              <a
                href={project.links.live}
                target="_blank"
                rel="noreferrer"
                className="relative z-20 inline-flex items-center gap-1 text-muted hover:text-fg-strong"
              >
                Live site <ArrowUpRight className="size-3.5" aria-hidden="true" />
              </a>
            ) : null}
            {project.links.code ? (
              <a
                href={project.links.code}
                target="_blank"
                rel="noreferrer"
                className="relative z-20 inline-flex items-center gap-1.5 text-muted hover:text-fg-strong"
              >
                <GitHubIcon className="size-3.5" /> Code
              </a>
            ) : null}
          </div>
        </div>
      </div>
    </Spotlight>
  );
}
