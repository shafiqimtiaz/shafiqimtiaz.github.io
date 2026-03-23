import { miniProjects } from '../../data/projects';
import { Button } from '../../components/ui';

export default function MiniProjectsSection() {
  return (
    <section className="mt-24 pb-8">
      <div className="flex flex-col gap-5 border-b border-[rgba(73,72,71,0.28)] pb-6 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <p className="font-headline text-[0.72rem] tracking-[0.18em] text-[var(--theme-secondary)] uppercase">
            Standalone_HTML / Public_Projects
          </p>
          <h2 className="font-headline mt-3 text-[clamp(2.2rem,4vw,3rem)] font-bold tracking-[-0.05em] text-[var(--theme-text)] uppercase">
            Mini_Project_Grid
          </h2>
        </div>
        <div className="max-w-[34rem] text-sm text-[var(--theme-text-muted)]"></div>
      </div>

      <div className="mt-8 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
        {miniProjects.map((project, index) => (
          <article
            key={project.name}
            className="group relative flex h-full flex-col gap-5 overflow-hidden border border-[rgba(73,72,71,0.22)] bg-[var(--theme-surface-low)] p-6 transition-all duration-200 hover:-translate-y-0.5 hover:border-[rgba(156,255,147,0.35)] hover:bg-[var(--theme-surface)]"
          >
            <div className="grid-pattern-panel pointer-events-none absolute inset-0 opacity-[0.08]"></div>
            <div className="relative z-10 flex h-full flex-col gap-5">
              <div className="flex items-center justify-between gap-4">
                <div className="font-headline text-[0.62rem] tracking-[0.18em] text-[var(--theme-outline-variant)] uppercase">
                  VIEWABLE_BUILD
                </div>
                <div className="font-headline text-[0.62rem] tracking-[0.18em] text-[var(--theme-primary)] uppercase">
                  {String(index + 1).padStart(3, '0')}
                </div>
              </div>
              <h3 className="font-headline text-2xl font-bold tracking-[-0.04em] text-[var(--theme-text)] uppercase">
                {project.name}
              </h3>
              <p className="flex-1 text-[var(--theme-text-muted)]">{project.description}</p>
              <Button
                variant="primary"
                href={project.href}
                target="_blank"
                rel="noreferrer"
                className="mt-auto self-start"
              >
                VIEW_PROJECT_
              </Button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
