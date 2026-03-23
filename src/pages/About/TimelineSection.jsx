import { timeline } from '../../data/experience';

export default function TimelineSection() {
  return (
    <section className="mb-8">
      <div className="mb-8">
        <h2 className="font-headline text-[clamp(2rem,3.8vw,2.4rem)] font-bold tracking-[-0.04em] uppercase">
          SYSTEM_HISTORY_LOG
        </h2>
        <p className="font-headline mt-2 text-[0.62rem] tracking-[0.18em] text-[var(--theme-text-muted)] uppercase">
          CHRONOLOGICAL_EXPERIENCE_RECORDS
        </p>
      </div>

      <div className="relative grid gap-8">
        <div className="pointer-events-none absolute top-0 bottom-0 left-4 w-px bg-[var(--theme-surface-highest)] md:left-1/2 md:-translate-x-1/2"></div>
        {timeline.map((entry, index) => (
          <article
            key={`${entry.date}-${entry.title}`}
            className={`relative flex ${index % 2 === 1 ? 'md:justify-end' : 'md:justify-start'}`}
          >
            <div
              className={`absolute top-6 left-4 z-10 flex h-10 w-10 -translate-x-1/2 items-center justify-center border-2 bg-[var(--theme-bg)] ${entry.accent} md:left-1/2`}
            >
              <span
                className="material-symbols-outlined text-sm text-[var(--theme-primary)]"
                aria-hidden="true"
              >
                {entry.icon}
              </span>
            </div>
            <div className="relative ml-12 w-full overflow-hidden border border-[rgba(73,72,71,0.22)] bg-[var(--theme-surface)] p-6 md:ml-0 md:w-[calc(50%-2.75rem)]">
              <div className="grid-pattern-panel pointer-events-none absolute inset-0 opacity-[0.08]"></div>
              <div className="relative z-10">
                <time className="font-headline text-[0.62rem] tracking-[0.18em] text-[var(--theme-text-muted)] uppercase">
                  {entry.date}
                </time>
                <h3 className="font-headline mt-2 text-xl font-bold tracking-[0.02em] uppercase">
                  {entry.title}
                </h3>
                <p className="font-headline mt-1 mb-4 text-[0.72rem] tracking-[0.12em] text-[var(--theme-text-muted)] uppercase">
                  {entry.org}
                </p>
                <ul className="grid gap-3">
                  {entry.details.map((detail) => (
                    <li
                      key={detail}
                      className="relative pl-4 text-sm text-[var(--theme-text-muted)] before:absolute before:left-0 before:content-['>']"
                    >
                      {detail}
                    </li>
                  ))}
                </ul>
                {entry.credentialUrl && (
                  <p className="mt-4 text-sm">
                    <a
                      href={entry.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-semibold !text-[var(--theme-primary)] hover:!text-[var(--theme-primary)]/80"
                      style={{ lineHeight: 1.2 }}
                    >
                      View credential
                    </a>
                  </p>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
