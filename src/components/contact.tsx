import { Mail, Clock, FileText } from "lucide-react";
import { profile } from "@/content/profile";
import { ContactForm } from "./contact-form";
import { GitHubIcon, LinkedInIcon, Section, SectionHeading } from "./ui";

export function Contact() {
  const links = [
    { href: `mailto:${profile.email}`, label: profile.email, icon: Mail, external: false },
    { href: profile.github, label: "github.com/ArvinceRamos", icon: GitHubIcon, external: true },
    ...(profile.linkedin
      ? [{ href: profile.linkedin, label: "LinkedIn", icon: LinkedInIcon, external: true }]
      : []),
    { href: profile.resume, label: "Résumé (PDF)", icon: FileText, external: false },
  ];

  return (
    <Section id="contact" aria-labelledby="contact-title" className="border-t border-line/60">
      <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        <div>
          <SectionHeading
            id="contact-title"
            index="06"
            label="Contact"
            title={
              <>
                Have a project or a role in mind? <span className="text-accent">Let&apos;s talk.</span>
              </>
            }
            intro="Tell me what you're building — a new app, a feature, or a full-time position. I'll reply with next steps."
          />
          <ul className="-mt-4 space-y-3">
            {links.map(({ href, label, icon: Icon, external }) => (
              <li key={href}>
                <a
                  href={href}
                  {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
                  className="group inline-flex items-center gap-3 text-fg transition-colors hover:text-accent"
                >
                  <span className="inline-flex size-10 items-center justify-center rounded-xl border border-line bg-surface/60 text-muted transition-colors group-hover:border-accent group-hover:text-accent">
                    <Icon className="size-4" />
                  </span>
                  <span className="underline-offset-4 group-hover:underline">{label}</span>
                </a>
              </li>
            ))}
          </ul>
          <p className="mt-8 flex items-center gap-2 text-sm text-muted">
            <Clock className="size-4 text-accent" aria-hidden="true" /> {profile.replyTime} · Cebu (
            {profile.timezone})
          </p>
        </div>

        <ContactForm />
      </div>
    </Section>
  );
}
