import { ArrowRight } from "lucide-react";
import { profile } from "@/content/profile";
import { buttonStyles, Container, GitHubIcon, LinkedInIcon } from "./ui";

export function Footer() {
  return (
    <footer className="relative isolate overflow-hidden border-t border-line/60 pt-20 pb-10">
      <div
        aria-hidden="true"
        className="absolute -bottom-48 left-1/2 -z-10 h-[420px] w-[900px] max-w-[140vw] -translate-x-1/2 rounded-full opacity-50 blur-3xl"
        style={{ background: "radial-gradient(closest-side, rgb(1 193 106 / 0.18), transparent)" }}
      />
      <Container>
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <p className="max-w-3xl text-[clamp(2.25rem,6vw,4.5rem)] leading-[1] font-semibold tracking-[-0.045em] text-fg-strong">
            Have a role I might fit? <span className="text-accent">Send me an email.</span>
          </p>
          <a href={`mailto:${profile.email}`} className={buttonStyles.primary}>
            {profile.email} <ArrowRight className="size-4" aria-hidden="true" />
          </a>
        </div>

        <div className="mt-16 flex flex-col-reverse items-start justify-between gap-6 border-t border-line pt-8 text-sm text-muted sm:flex-row sm:items-center">
          <p>
            © {new Date().getFullYear()} {profile.name} · Built with Next.js, deployed on Vercel
          </p>
          <div className="flex items-center gap-5">
            <a href={`mailto:${profile.email}`} className="hover:text-fg-strong">
              Email
            </a>
            <a href={profile.resume} className="hover:text-fg-strong">
              Résumé
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="hover:text-fg-strong"
            >
              <GitHubIcon className="size-4" />
            </a>
            {profile.linkedin ? (
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="hover:text-fg-strong"
              >
                <LinkedInIcon className="size-4" />
              </a>
            ) : null}
          </div>
        </div>
      </Container>
    </footer>
  );
}
