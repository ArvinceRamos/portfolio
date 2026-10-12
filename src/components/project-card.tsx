import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Lock } from "lucide-react";
import type { Project } from "@/content/projects";
import { Spotlight } from "./spotlight";
import { CrmMock } from "./crm-mock";
import { cn, GitHubIcon, Tag } from "./ui";

export function ProjectCard({ project, className }: { project: Project; className?: string }) {
  return (
    <Spotlight
      className={cn(
        "flex h-full flex-col overflow-hidden rounded-3xl border border-line bg-surface/40 transition-colors duration-300 hover:border-line-strong",
        className,
      )}
    >
      <div className="relative z-10 aspect-[16/10] overflow-hidden border-b border-line bg-surface">
        {project.image ? (
          <Image
            src={project.image.src}
            alt={project.image.alt}
            fill
            sizes="(min-width: 1024px) 640px, 100vw"
            className="object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.03]"
          />
        ) : (
          <CrmMock />
        )}
      </div>

      <div className="relative z-10 flex flex-1 flex-col p-6 md:p-7">
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-[11px] tracking-wide text-muted uppercase">
          <span>{project.year}</span>
          <span aria-hidden="true" className="text-line-strong">/</span>
          <span>{project.category}</span>
          {project.isPrivate ? (
            <span className="inline-flex items-center gap-1 rounded-full border border-line px-2 py-0.5 normal-case">
              <Lock className="size-3" aria-hidden="true" /> Internal tool · private
            </span>
          ) : null}
        </div>

        <h3 className="mt-3 text-2xl font-semibold tracking-tight text-fg-strong">
          <Link
            href={`/work/${project.slug}`}
            className="after:absolute after:inset-0 after:content-[''] focus-visible:outline-none"
          >
            {project.title}
          </Link>
        </h3>
        <p className="mt-1 text-sm text-muted">{project.client}</p>

        <p className="mt-4 leading-relaxed text-fg">{project.summary}</p>
        <p className="mt-3 flex gap-2 text-sm leading-relaxed text-fg">
          <span className="text-accent" aria-hidden="true">→</span>
          <span>{project.outcome}</span>
        </p>

        <div className="mt-5 flex flex-wrap gap-1.5">
          {project.tags.slice(0, 6).map((t) => (
            <Tag key={t}>{t}</Tag>
          ))}
        </div>

        <div className="mt-auto flex flex-wrap items-center gap-x-5 gap-y-2 pt-6 text-sm">
          <span className="inline-flex items-center gap-1 font-medium text-accent">
            Read case study <ArrowUpRight className="size-4" aria-hidden="true" />
          </span>
          {project.links.live ? (
            <a
              href={project.links.live}
              target="_blank"
              rel="noreferrer"
              className="relative z-20 inline-flex items-center gap-1 text-muted hover:text-fg-strong"
            >
              Live <ArrowUpRight className="size-3.5" aria-hidden="true" />
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
    </Spotlight>
  );
}
