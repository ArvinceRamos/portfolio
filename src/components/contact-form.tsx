"use client";

import { useState } from "react";
import { ArrowRight, CheckCircle2, Loader2 } from "lucide-react";
import { profile } from "@/content/profile";
import { projectTypes } from "@/lib/project-types";
import { buttonStyles, cn } from "./ui";

type Status =
  | { state: "idle" }
  | { state: "sending" }
  | { state: "sent" }
  | { state: "error"; message: string };

const field =
  "mt-2 block w-full rounded-xl border border-line-strong bg-bg px-4 py-3 text-fg placeholder:text-muted/70 transition-colors focus:border-accent focus:outline-none focus-visible:outline-none focus:ring-2 focus:ring-accent/40";
const labelCls = "text-sm font-medium text-fg";

export function ContactForm() {
  const [status, setStatus] = useState<Status>({ state: "idle" });

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));
    setStatus({ state: "sending" });
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const body = (await res.json().catch(() => ({}))) as { error?: string };
      if (!res.ok) throw new Error(body.error ?? "Something went wrong.");
      form.reset();
      setStatus({ state: "sent" });
    } catch (err) {
      setStatus({
        state: "error",
        message: err instanceof Error ? err.message : "Something went wrong.",
      });
    }
  }

  if (status.state === "sent") {
    return (
      <div
        role="status"
        className="flex flex-col items-start justify-center rounded-3xl border border-line bg-surface/40 p-8 md:p-10"
      >
        <CheckCircle2 className="size-10 text-accent" aria-hidden="true" />
        <h3 className="mt-5 text-2xl font-semibold tracking-tight text-fg-strong">Message sent.</h3>
        <p className="mt-2 text-muted">
          Thanks for writing. I&apos;ll reply as soon as I can.
        </p>
        <button
          type="button"
          onClick={() => setStatus({ state: "idle" })}
          className={cn(buttonStyles.secondary, "mt-8")}
        >
          Send another
        </button>
      </div>
    );
  }

  const sending = status.state === "sending";

  return (
    <form
      onSubmit={onSubmit}
      className="relative rounded-3xl border border-line bg-surface/40 p-6 md:p-8"
      aria-describedby="form-status"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className={labelCls}>
            Name
          </label>
          <input
            id="name"
            name="name"
            required
            minLength={2}
            maxLength={80}
            autoComplete="name"
            className={field}
            placeholder="Your name"
          />
        </div>
        <div>
          <label htmlFor="email" className={labelCls}>
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            maxLength={200}
            autoComplete="email"
            className={field}
            placeholder="you@company.com"
          />
        </div>
      </div>

      <div className="mt-5">
        <label htmlFor="type" className={labelCls}>
          What&apos;s this about?
        </label>
        <select id="type" name="type" required defaultValue={projectTypes[0]} className={field}>
          {projectTypes.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>
      </div>

      <div className="mt-5">
        <label htmlFor="message" className={labelCls}>
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          minLength={10}
          maxLength={4000}
          rows={5}
          className={cn(field, "resize-y")}
          placeholder="Write your message here"
        />
      </div>

      {/* Honeypot: hidden from people, often filled by bots */}
      <div aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
        <label htmlFor="company">Company</label>
        <input id="company" name="company" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="mt-7 flex flex-wrap items-center gap-4">
        <button type="submit" disabled={sending} className={cn(buttonStyles.primary, "disabled:opacity-70")}>
          {sending ? (
            <>
              <Loader2 className="size-4 animate-spin" aria-hidden="true" /> Sending…
            </>
          ) : (
            <>
              Send message <ArrowRight className="size-4" aria-hidden="true" />
            </>
          )}
        </button>
        <p id="form-status" role="status" aria-live="polite" className="text-sm">
          {status.state === "error" ? (
            <span className="text-red-300">
              {status.message} You can also email me at{" "}
              <a href={`mailto:${profile.email}`} className="text-accent underline underline-offset-4">
                {profile.email}
              </a>
              .
            </span>
          ) : null}
        </p>
      </div>
    </form>
  );
}
