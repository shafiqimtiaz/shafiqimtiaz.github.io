import { publicRepositories } from '../../data/projects';
import { Button } from '../../components/ui';

export default function PublicRepositoriesSection() {
  return (
    <section className="mt-24 pb-8">
      <div className="flex flex-col gap-5 border-b border-[rgba(73,72,71,0.28)] pb-6 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <p className="font-headline text-[0.72rem] tracking-[0.18em] text-[var(--theme-tertiary)] uppercase">
            Open_Source / Github_Repositories
          </p>
          <h2 className="font-headline mt-3 text-[clamp(2.2rem,4vw,3rem)] font-bold tracking-[-0.05em] text-[var(--theme-text)] uppercase">
            Public_Repository_Log
          </h2>
        </div>
      </div>

      <div className="mt-8 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
        {publicRepositories.map((repo, index) => (
          <article
            key={repo.title}
            className="group relative flex h-full flex-col overflow-hidden border border-[rgba(73,72,71,0.22)] bg-[var(--theme-surface-low)] p-6 transition-all duration-200 hover:-translate-y-0.5 hover:border-[rgba(0,227,253,0.35)] hover:bg-[var(--theme-surface)]"
          >
            <div className="grid-pattern-panel pointer-events-none absolute inset-0 opacity-[0.08]"></div>
            <div className="relative z-10 flex h-full flex-col">
              <div className="flex items-center justify-between gap-3">
                <p className="font-headline text-[0.62rem] tracking-[0.18em] text-[var(--theme-outline-variant)] uppercase">
                  PUBLIC_REPO
                </p>
                <p className="font-headline text-[0.62rem] tracking-[0.18em] text-[var(--theme-secondary)] uppercase">
                  {String(index + 1).padStart(3, '0')}
                </p>
              </div>

              <h3 className="font-headline mt-4 text-[clamp(1.4rem,2.3vw,1.75rem)] font-bold tracking-[-0.04em] text-[var(--theme-text)] uppercase">
                {repo.title}
              </h3>

              <p className="mt-4 flex-1 text-[var(--theme-text-muted)]">{repo.description}</p>

              <div className="mt-5 flex flex-wrap gap-2 border-l-2 border-[var(--theme-tertiary)] bg-[var(--theme-surface-lowest)] px-3 py-3">
                {repo.techStack.map((tech) => (
                  <span
                    key={`${repo.title}-${tech}`}
                    className="font-headline text-[0.6rem] tracking-[0.16em] text-[var(--theme-tertiary)] uppercase"
                  >
                    # {tech}
                  </span>
                ))}
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                {repo.demoUrl && (
                  <Button
                    variant="primary"
                    href={repo.demoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="!text-black"
                  >
                    LIVE_DEMO_
                  </Button>
                )}
                <Button variant="secondary" href={repo.repoUrl} target="_blank" rel="noreferrer">
                  VIEW_REPO_
                </Button>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
