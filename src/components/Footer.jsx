import { Link } from 'react-router';

// Shared footer that keeps the external links and build status visible site-wide.
export default function Footer() {
  return (
    <footer className="mt-24 border-t border-[rgba(73,72,71,0.4)] bg-[var(--theme-surface-low)]">
      <div className="mx-auto grid w-[min(100%-2rem,var(--container-width))] gap-6 py-8 md:grid-cols-[1fr_auto_1fr] md:items-center">
        <div className="grid gap-1 text-center md:text-left">
          <div className="font-headline font-bold text-[var(--theme-primary)]">SHAFIQ_IMTIAZ.SYS</div>
          <div className="font-headline text-[0.65rem] uppercase tracking-[0.18em] text-[var(--theme-outline-variant)]">
            ©2026_SHAFIQ_IMTIAZ // BUILD_ACTIVE
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
          <a
            className="font-headline text-[0.65rem] uppercase tracking-[0.18em] text-[var(--theme-outline-variant)] transition-colors hover:text-[var(--theme-tertiary)]"
            href="https://github.com/shafiqimtiaz"
            target="_blank"
            rel="noreferrer"
          >
            GITHUB
          </a>
          <a
            className="font-headline text-[0.65rem] uppercase tracking-[0.18em] text-[var(--theme-outline-variant)] transition-colors hover:text-[var(--theme-tertiary)]"
            href="https://linkedin.com/in/shafiqimtiaz"
            target="_blank"
            rel="noreferrer"
          >
            LINKEDIN
          </a>
          <a
            className="font-headline text-[0.65rem] uppercase tracking-[0.18em] text-[var(--theme-outline-variant)] transition-colors hover:text-[var(--theme-tertiary)]"
            href="/docs/Shafiq-Imtiaz-Resume.pdf"
            target="_blank"
            rel="noreferrer"
          >
            RESUME
          </a>
          <Link
            className="font-headline text-[0.65rem] uppercase tracking-[0.18em] text-[var(--theme-outline-variant)] transition-colors hover:text-[var(--theme-tertiary)]"
            to="/contact"
          >
            CONTACT
          </Link>
        </div>

        <div className="font-headline text-center text-[0.65rem] uppercase tracking-[0.18em] text-[var(--theme-secondary)] md:text-right">
          STATUS: ACTIVE // LOC: CANADA
        </div>
      </div>
    </footer>
  );
}
