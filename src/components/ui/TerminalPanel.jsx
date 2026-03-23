export default function TerminalPanel({
  title = 'ssh root@614.514.183',
  className = '',
  bodyClassName = '',
  children,
}) {
  return (
    <div
      className={`relative overflow-hidden border border-[var(--theme-outline-variant)] bg-[var(--theme-surface-lowest)] shadow-[var(--shadow-primary)] ${className}`}
    >
      <div className="crt-overlay pointer-events-none absolute inset-0 z-10"></div>

      <div className="relative z-20 flex items-center justify-between gap-4 border-b border-[rgba(73,72,71,0.35)] bg-[var(--theme-surface-highest)] px-4 py-3">
        <div className="flex gap-2">
          <span className="h-3 w-3 bg-[var(--theme-error-dim)]"></span>
          <span className="h-3 w-3 bg-[var(--theme-tertiary-dim)]"></span>
          <span className="h-3 w-3 bg-[var(--theme-primary-dim)]"></span>
        </div>
        <div className="font-headline text-[0.65rem] tracking-[0.22em] text-[var(--theme-text-muted)] uppercase">
          {title}
        </div>
      </div>

      <div
        className={`font-headline relative z-20 ${bodyClassName || 'grid gap-5 p-6 text-sm md:text-base'}`}
      >
        {children}
      </div>
    </div>
  );
}
