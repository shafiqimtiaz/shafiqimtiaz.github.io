import useTheme from '../hooks/useTheme';

export default function ThemeToggle() {
  const { isDark, toggleTheme } = useTheme();
  const icon = isDark ? 'light_mode' : 'dark_mode';
  const label = isDark ? 'LIGHT' : 'DARK';
  const ariaLabel = isDark ? 'Switch to light theme' : 'Switch to dark theme';

  return (
    <button
      className="inline-flex min-h-11 items-center gap-2 border border-[var(--theme-outline-variant)] bg-[var(--theme-surface)] px-3.5 py-2 text-[var(--theme-primary)] transition-all duration-200 hover:-translate-y-px hover:border-[var(--theme-primary)] hover:bg-[var(--theme-surface-high)]"
      type="button"
      onClick={toggleTheme}
      aria-label={ariaLabel}
      title={ariaLabel}
    >
      <span className="material-symbols-outlined" aria-hidden="true">
        {icon}
      </span>
      <span className="font-headline hidden text-[0.65rem] font-bold tracking-[0.18em] min-[700px]:inline">
        {label}
      </span>
    </button>
  );
}
