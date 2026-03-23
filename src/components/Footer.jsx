import { Link } from 'react-router';
import { footerLinks } from '../data/links';

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-[rgba(73,72,71,0.4)] bg-[var(--theme-surface-low)]">
      <div className="mx-auto grid w-[min(100%-2rem,var(--container-width))] gap-6 py-8 md:grid-cols-[1fr_auto_1fr] md:items-center">
        <div className="grid gap-1 text-center md:text-left">
          <div className="font-headline text-[0.65rem] tracking-[0.18em] text-[var(--theme-outline-variant)] uppercase">
            ©2026_SHAFIQ_IMTIAZ // BUILD_ACTIVE
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
          {footerLinks.map((link) =>
            link.href ? (
              <a
                key={link.label}
                className="font-headline text-[0.65rem] tracking-[0.18em] text-[var(--theme-outline-variant)] uppercase transition-colors hover:text-[var(--theme-tertiary)]"
                href={link.href}
                target="_blank"
                rel="noreferrer"
              >
                {link.label}
              </a>
            ) : (
              <Link
                key={link.label}
                className="font-headline text-[0.65rem] tracking-[0.18em] text-[var(--theme-outline-variant)] uppercase transition-colors hover:text-[var(--theme-tertiary)]"
                to={link.to}
              >
                {link.label}
              </Link>
            )
          )}
        </div>

        <div className="font-headline text-center text-[0.65rem] tracking-[0.18em] text-[var(--theme-secondary)] uppercase md:text-right">
          STATUS: ACTIVE // LOC: CANADA
        </div>
      </div>
    </footer>
  );
}
