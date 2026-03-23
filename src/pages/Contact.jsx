const systemStatus = [
  { label: 'AVAILABILITY', value: 'ONLINE [OPEN]', accent: 'text-[var(--theme-primary)]' },
  { label: 'LOC_COORDINATES', value: 'OTTAWA, ON', accent: 'text-[var(--theme-secondary)]' },
  { label: 'RESPONSE_LATENCY', value: '< 24_HOURS', accent: 'text-[var(--theme-tertiary)]' }
];

const externalNodes = [
  { label: 'LINKEDIN', icon: 'share_reviews', href: 'https://linkedin.com/in/shafiqimtiaz' },
  { label: 'GITHUB', icon: 'terminal', href: 'https://github.com/shafiqimtiaz' },
  { label: 'WEBSITE', icon: 'language', href: 'https://shafiqimtiaz.github.io' },
  { label: 'EMAIL', icon: 'alternate_email', href: 'mailto:shafiqimtiaz@gmail.com' }
];

const infoColumns = [
  {
    heading: 'Direct_Comms',
    lines: ['PHONE: +1 514-574-4436', 'EMAIL: shafiqimtiaz@gmail.com']
  },
  {
    heading: 'Location',
    lines: ['Ottawa, ON', 'Canada']
  },
  {
    heading: 'Focus_Areas',
    lines: ['Full-stack delivery, backend modernization, microservices, AWS, AI initiatives']
  }
];

const pageShell =
  'relative mx-auto w-[min(100%-2rem,var(--container-width))] pt-[calc(var(--header-height)+var(--page-top-spacing))]';
const primaryAction =
  'on-primary-text font-headline inline-flex min-h-12 items-center justify-center bg-[var(--theme-primary)] px-5 text-[0.72rem] font-bold uppercase tracking-[0.18em] transition-all duration-200 hover:-translate-y-px hover:brightness-105';
const secondaryAction =
  'font-headline inline-flex min-h-12 items-center justify-center border border-[var(--theme-outline-variant)] px-5 text-[0.72rem] font-bold uppercase tracking-[0.18em] text-[var(--theme-primary)] transition-all duration-200 hover:-translate-y-px hover:border-[var(--theme-primary)] hover:bg-[var(--theme-surface-high)]';
const ghostAction =
  'font-headline inline-flex min-h-12 items-center justify-center border border-[rgba(73,72,71,0.22)] bg-[var(--theme-surface-low)] px-5 text-[0.72rem] font-bold uppercase tracking-[0.18em] text-[var(--theme-text-muted)] transition-all duration-200 hover:-translate-y-px hover:border-[var(--theme-secondary)] hover:text-[var(--theme-secondary)]';

// Contact page that keeps the terminal-style contact channel and quick-action layout intact.
export default function Contact() {
  return (
    <main className={pageShell}>
      <section className="grid gap-5 py-12 lg:max-w-[56rem]">
        <div className="font-headline inline-flex w-fit items-center border-l-4 border-[var(--theme-primary)] bg-[var(--theme-surface)] px-4 py-2 text-[0.72rem] uppercase tracking-[0.18em] text-[var(--theme-primary)]">
          Direct_Channel / Open_Port
        </div>
        <h1 className="font-headline text-[clamp(3rem,6vw,5.2rem)] font-bold uppercase tracking-[-0.06em] leading-[0.92] text-[var(--theme-text)]">
          Establish <span className="text-[var(--theme-primary)]">Connection</span>_
        </h1>
        <p className="max-w-[46rem] text-lg text-[var(--theme-text-muted)]">
          Open a direct channel for software development, cloud modernization, backend engineering, or
          AI-focused collaboration. The fastest routes are email and LinkedIn.
        </p>
      </section>

      <section className="grid gap-8 lg:grid-cols-[minmax(0,1.35fr)_minmax(18rem,0.75fr)] lg:items-start">
        <div className="relative overflow-hidden border border-[rgba(73,72,71,0.28)] bg-[var(--theme-surface)] shadow-[var(--shadow-soft)]">
          <div className="grid-pattern-panel pointer-events-none absolute inset-0 opacity-10"></div>
          <div className="crt-overlay pointer-events-none absolute inset-0 opacity-20"></div>

          <div className="relative z-10 flex items-center justify-between gap-4 border-b border-[rgba(73,72,71,0.32)] bg-[var(--theme-surface-high)] px-5 py-4">
            <div className="flex gap-2">
              <span className="h-3 w-3 bg-[var(--theme-error-dim)]"></span>
              <span className="h-3 w-3 bg-[var(--theme-tertiary-dim)]"></span>
              <span className="h-3 w-3 bg-[var(--theme-primary-dim)]"></span>
            </div>
            <div className="font-headline text-[0.68rem] uppercase tracking-[0.2em] text-[var(--theme-text-muted)]">
              SESSION: DIRECT_CONTACT_V2.0
            </div>
          </div>

          <div className="relative z-10 grid gap-8 p-6 md:p-8">
            <div>
              <div className="font-headline flex flex-wrap gap-3 text-[0.9rem] text-[var(--theme-primary)]">
                <span>visitor@portfolio:~$</span>
                <span className="text-[var(--theme-text)]">cat contact_channels.json</span>
              </div>
              <div className="mt-4 grid gap-2 border-l-2 border-[var(--theme-secondary)] bg-[var(--theme-surface-lowest)] px-4 py-4 text-[var(--theme-secondary)]">
                <div>"email": "shafiqimtiaz@gmail.com"</div>
                <div>"phone": "+1 514-574-4436"</div>
                <div>"linkedin": "linkedin.com/in/shafiqimtiaz"</div>
                <div>"github": "github.com/shafiqimtiaz"</div>
                <div>"website": "shafiqimtiaz.github.io"</div>
              </div>
            </div>

            <div>
              <div className="font-headline flex flex-wrap gap-3 text-[0.9rem] text-[var(--theme-primary)]">
                <span>visitor@portfolio:~$</span>
                <span className="text-[var(--theme-text)]">cat availability.log</span>
              </div>
              <div className="mt-4 grid gap-3 text-[var(--theme-text-muted)]">
                <div>&gt; Based in Ottawa, ON</div>
                <div>&gt; Open to discussions around full-stack, backend, cloud, and AI-enabled systems</div>
                <div>&gt; Typical response latency: under 24 hours</div>
              </div>
            </div>

            <div>
              <div className="font-headline flex flex-wrap gap-3 text-[0.9rem] text-[var(--theme-primary)]">
                <span>visitor@portfolio:~$</span>
                <span className="text-[var(--theme-text)]">open quick_actions.sh</span>
              </div>
              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                <a className={primaryAction} href="mailto:shafiqimtiaz@gmail.com">
                  EMAIL_NOW
                </a>
                <a className={secondaryAction} href="tel:+15145744436">
                  CALL_DIRECT
                </a>
                <a className={ghostAction} href="https://linkedin.com/in/shafiqimtiaz" target="_blank" rel="noreferrer">
                  LINKEDIN
                </a>
                <a className={ghostAction} href="/docs/Shafiq-Imtiaz-Resume.pdf" target="_blank" rel="noreferrer">
                  OPEN_RESUME
                </a>
              </div>
            </div>

            <div className="font-headline flex items-center gap-3 text-[0.9rem]">
              <span className="text-[var(--theme-primary)]">visitor@portfolio:~$</span>
              <span>awaiting_message</span>
              <span className="cursor-block inline-block text-[var(--theme-primary)]">█</span>
            </div>
          </div>
        </div>

        <div className="grid gap-6">
          <div className="border border-[rgba(73,72,71,0.24)] bg-[var(--theme-surface-low)] p-6 shadow-[var(--shadow-soft)]">
            <h2 className="font-headline text-[0.8rem] font-bold uppercase tracking-[0.18em] text-[var(--theme-text)]">
              SYSTEM_STATUS
            </h2>
            <div className="mt-5 grid gap-4">
              {systemStatus.map((item) => (
                <div
                  key={item.label}
                  className="flex items-center justify-between gap-4 border-b border-[rgba(73,72,71,0.2)] pb-3 last:border-b-0 last:pb-0"
                >
                  <span className="font-headline text-[0.68rem] uppercase tracking-[0.18em] text-[var(--theme-text-muted)]">
                    {item.label}
                  </span>
                  <span className={`font-headline text-[0.72rem] font-bold uppercase tracking-[0.16em] ${item.accent}`}>
                    {item.value}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="border border-[rgba(73,72,71,0.24)] bg-[var(--theme-surface-low)] p-6 shadow-[var(--shadow-soft)]">
            <h2 className="font-headline text-[0.8rem] font-bold uppercase tracking-[0.18em] text-[var(--theme-text)]">
              EXTERNAL_NODES
            </h2>

            <div className="mt-5 grid gap-3">
              {externalNodes.map((node) => (
                <a
                  key={node.label}
                  className="group flex items-center justify-between gap-4 border border-[rgba(73,72,71,0.22)] bg-[var(--theme-surface)] px-4 py-4 transition-all duration-200 hover:-translate-y-px hover:border-[var(--theme-primary)]"
                  href={node.href}
                  target={node.href.startsWith('http') ? '_blank' : undefined}
                  rel={node.href.startsWith('http') ? 'noreferrer' : undefined}
                >
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-[var(--theme-primary)]" aria-hidden="true">
                      {node.icon}
                    </span>
                    <span className="font-headline text-[0.72rem] font-bold uppercase tracking-[0.18em] text-[var(--theme-text)]">
                      {node.label}
                    </span>
                  </div>
                  <span
                    className="material-symbols-outlined text-[var(--theme-outline)] transition-colors group-hover:text-[var(--theme-primary)]"
                    aria-hidden="true"
                  >
                    arrow_outward
                  </span>
                </a>
              ))}
            </div>

            <div className="mt-6 border-l-2 border-[var(--theme-tertiary)] bg-[var(--theme-surface-lowest)] px-4 py-4 font-headline text-[0.72rem] uppercase tracking-[0.16em] text-[var(--theme-tertiary)]">
              <div className="mb-3 text-[0.62rem] font-bold tracking-[0.22em] text-[var(--theme-outline)]">
                HEX_PAYLOAD
              </div>
              <div>
                22 57 61 73 74 65 20 6E 6F 20 6D 6F 72 65 20 74 69 6D 65 20 61 72 67 75
                <br />
                69 6E 67 20 77 68 61 74 20 61 20 67 6F 6F 64 20 6D 61 6E 20 73 68 6F 75
                <br />
                6C 64 20 62 65 2C 20 42 65 20 4F 6E 65 22 20 62 79 20 4D 61 72 63 75 73
                <br />
                20 41 75 72 65 6C 69 75 73
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-12 grid gap-6 pb-8 md:grid-cols-3">
        {infoColumns.map((column) => (
          <div
            key={column.heading}
            className="border border-[rgba(73,72,71,0.22)] bg-[var(--theme-surface)] p-6 shadow-[var(--shadow-soft)]"
          >
            <h3 className="font-headline text-[0.78rem] font-bold uppercase tracking-[0.18em] text-[var(--theme-secondary)]">
              {column.heading}
            </h3>
            <div className="mt-4 grid gap-2 text-sm text-[var(--theme-text-muted)]">
              {column.lines.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}
