export default function PageShell({ children, className = '' }) {
  const pageShell =
    'relative mx-auto w-[min(100%-2rem,var(--container-width))] pt-[calc(var(--header-height)+var(--page-top-spacing))]';
  return <main className={`${pageShell} ${className}`.trim()}>{children}</main>;
}
