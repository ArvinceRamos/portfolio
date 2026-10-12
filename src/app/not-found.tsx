import Link from "next/link";
import { buttonStyles, Container } from "@/components/ui";

export default function NotFound() {
  return (
    <Container className="flex min-h-[60vh] flex-col items-start justify-center py-24">
      <p className="eyebrow">
        <span aria-hidden="true">{"// "}</span>404
      </p>
      <h1 className="mt-4 text-5xl font-semibold tracking-tight text-fg-strong">Page not found.</h1>
      <p className="mt-4 text-muted">That page doesn&apos;t exist — but my work does.</p>
      <Link href="/" className={`${buttonStyles.primary} mt-8`}>
        Back home
      </Link>
    </Container>
  );
}
