import { Link } from 'react-router';
import { historyCards } from '../../data/projects';

export default function HistorySection() {
  const headline = 'font-headline';

  return (
    <section className="relative overflow-hidden py-4">
      <div className="grid-pattern-panel pointer-events-none absolute inset-0 opacity-[0.08]"></div>
      <div className="relative z-10 flex flex-col gap-4 border-b border-[rgba(73,72,71,0.25)] pb-6 md:flex-row md:items-end md:justify-between">
        <div>
          <h2
            className={`${headline} text-[clamp(2rem,3.8vw,2.6rem)] font-bold tracking-[-0.05em] uppercase`}
          >
            Deployment_History
          </h2>
          <p className="font-headline mt-2 text-[0.7rem] tracking-[0.14em] text-[var(--theme-text-muted)] uppercase">
            Selected impact from Flexspring and academic leadership
          </p>
        </div>
        <Link
          className="font-headline text-[0.72rem] tracking-[0.18em] text-[var(--theme-secondary)] uppercase transition-colors hover:text-[var(--theme-primary)]"
          to="/projects"
        >
          View_All_Logs
        </Link>
      </div>

      <div className="relative z-10 mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {historyCards.map((card) => {
          const isSplit = card.type === 'split';
          const colSpan = isSplit ? 'md:col-span-2 xl:col-span-2' : '';
          const icon = card.icon || 'monitoring';
          const accent =
            card.accent || 'border-[var(--theme-secondary)] text-[var(--theme-secondary)]';

          return (
            <Link
              to="/projects"
              key={card.title}
              className={`group relative block overflow-hidden border-l-4 bg-[var(--theme-surface)] transition-all duration-200 hover:-translate-y-0.5 ${colSpan}`}
            >
              <div className="grid-pattern-panel pointer-events-none absolute inset-0 opacity-[0.08]"></div>
              <article className="relative z-10 flex min-h-[18rem] flex-col justify-between gap-6 p-8">
                <span
                  className={`material-symbols-outlined text-4xl ${accent} text-[var(--theme-primary)]`}
                  aria-hidden="true"
                >
                  {icon}
                </span>
                <div>
                  <span
                    className={`font-headline text-[0.62rem] tracking-[0.18em] uppercase ${accent}`}
                  >
                    {card.label}
                  </span>
                  <h3 className="font-headline mt-3 text-2xl font-bold tracking-[-0.05em] text-[var(--theme-text)] uppercase">
                    {card.title}
                  </h3>
                  <p className="mt-3 text-sm text-[var(--theme-text-muted)]">{card.description}</p>
                  {card.tags ? (
                    <div className="mt-5 flex flex-wrap gap-3">
                      {card.tags.map((tag) => (
                        <span
                          key={tag}
                          className="font-headline text-[0.62rem] tracking-[0.08em] text-[var(--theme-outline-variant)] uppercase"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  ) : null}
                </div>
              </article>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
