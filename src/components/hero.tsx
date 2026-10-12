import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Download } from "lucide-react";
import { profile, stats } from "@/content/profile";
import { buttonStyles, Container, GitHubIcon } from "./ui";

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden pt-12 pb-20 md:pt-20 md:pb-28">
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-grid mask-fade-x" />
      <div
        aria-hidden="true"
        className="absolute -top-40 left-1/2 -z-10 h-[520px] w-[820px] max-w-[120vw] -translate-x-1/2 rounded-full opacity-60 blur-3xl"
        style={{ background: "radial-gradient(closest-side, rgb(1 193 106 / 0.22), transparent)" }}
      />

      <Container className="grid items-center gap-14 lg:grid-cols-[1.25fr_0.75fr]">
        <div>
          <p className="inline-flex animate-fade-up items-center gap-2.5 rounded-full border border-line bg-surface/60 py-1.5 pr-3.5 pl-3 font-mono text-[11px] tracking-wide text-fg">
            <span className="size-2 animate-pulse-dot rounded-full bg-accent" aria-hidden="true" />
            {profile.availability}
            <span className="hidden text-muted sm:inline">· Cebu, PH ({profile.timezone})</span>
          </p>

          <h1 className="mt-7 animate-fade-up text-[clamp(2.6rem,6.4vw,5rem)] leading-[1.02] font-semibold tracking-[-0.045em] text-fg-strong [animation-delay:80ms]">
            I build web &amp; mobile apps <span className="text-muted">end to end</span> —{" "}
            <span className="text-accent">with AI built in.</span>
          </h1>

          <p className="mt-6 max-w-xl animate-fade-up text-lg leading-relaxed text-muted [animation-delay:160ms]">
            I&apos;m {profile.name}, a full stack developer in Cebu, Philippines. I ship React and
            Next.js web apps, React Native mobile apps and Node.js backends on Firebase or Supabase —
            plus LLM features that stay cheap to run.
          </p>

          <div className="mt-9 flex animate-fade-up flex-wrap items-center gap-3 [animation-delay:240ms]">
            <Link href="/#contact" className={buttonStyles.primary}>
              Start a project <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
            <a href={profile.resume} download className={buttonStyles.secondary}>
              <Download className="size-4" aria-hidden="true" /> Download résumé
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="ml-1 inline-flex size-11 items-center justify-center rounded-full text-muted transition-colors hover:text-fg-strong"
              aria-label="GitHub profile"
            >
              <GitHubIcon className="size-5" />
            </a>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-sm animate-fade-up [animation-delay:200ms] lg:mx-0 lg:ml-auto">
          <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-line bg-surface">
            <Image
              src="/images/arvince.webp"
              alt="Portrait of Arvince Ramos"
              fill
              priority
              sizes="(min-width: 1024px) 384px, 90vw"
              className="object-cover grayscale-[15%]"
            />
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-gradient-to-t from-bg/70 via-transparent to-transparent"
            />
          </div>
          <TerminalCard />
        </div>
      </Container>

      <Container>
        <dl className="mt-20 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line bg-line md:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="flex flex-col-reverse bg-bg px-5 py-6 md:px-6">
              <dt className="mt-2 font-mono text-[11px] tracking-[0.14em] text-muted uppercase">
                {s.label}
              </dt>
              <dd className="text-3xl font-semibold tracking-tight text-fg-strong">{s.value}</dd>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  );
}

function TerminalCard() {
  return (
    <div className="absolute -bottom-8 -left-4 w-[88%] rounded-2xl border border-line bg-bg/90 p-4 font-mono text-[12px] leading-relaxed shadow-2xl shadow-black/40 backdrop-blur-md sm:-left-10">
      <div className="mb-3 flex items-center gap-1.5" aria-hidden="true">
        <span className="size-2.5 rounded-full bg-line-strong/60" />
        <span className="size-2.5 rounded-full bg-line-strong/60" />
        <span className="size-2.5 rounded-full bg-accent/80" />
        <span className="ml-2 text-[11px] text-muted">~/arvince</span>
      </div>
      <p>
        <span className="text-accent">$</span> whoami
      </p>
      <p className="text-muted">full stack developer · cebu, ph</p>
      <p className="mt-1.5">
        <span className="text-accent">$</span> status
      </p>
      <p className="text-muted">
        open to remote roles + freelance
        <span className="ml-0.5 inline-block animate-blink text-accent" aria-hidden="true">
          ▍
        </span>
      </p>
    </div>
  );
}
