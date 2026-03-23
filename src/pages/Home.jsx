import { Link } from 'react-router';

const historyCards = [
  {
    type: 'compact',
    accent: 'border-[var(--theme-primary)] text-[var(--theme-primary)]',
    icon: 'folder_open',
    label: 'MICROSERVICE_DELIVERY',
    title: 'Flexspring_File_Manager',
    description:
      'Designed and launched a Quarkus-based file management microservice using AWS S3, AWS SQS, and MongoDB. Reduced file-processing latency by 40% while handling 500+ concurrent requests.',
    tags: ['#QUARKUS', '#AWS_S3', '#AWS_SQS', '#MONGODB']
  },
  {
    type: 'compact',
    accent: 'border-[var(--theme-secondary)] text-[var(--theme-secondary)]',
    icon: 'smart_toy',
    label: 'AI_INITIATIVE',
    title: 'RAG_Chatbot_Prototype',
    description:
      'Runner-up hackathon project built with Crewdle AI and retrieval-augmented generation, then evolved into a broader AI initiative for future product features.'
  },
  {
    type: 'compact',
    accent: 'border-[var(--theme-tertiary)] text-[var(--theme-tertiary)]',
    icon: 'upgrade',
    label: 'MODERNIZATION',
    title: 'Java17_SpringBoot3',
    description:
      'Modernized backend services from Java 8 to 17 and Spring Boot 2 to 3, improving CI/CD efficiency by 35% and reducing production incidents by 60%.'
  },
  {
    type: 'split',
    label: 'PRODUCT_ENABLEMENT',
    title: 'Monitor_Pilot',
    metrics: [
      'React + TypeScript onboarding dashboard',
      'Onboarding accelerated by 50%',
      'Generated $200K+ in upsell revenue',
      'Modernized UI with Bootstrap 5'
    ],
    description:
      'Built and deployed a customer-facing dashboard that accelerated onboarding, improved UX performance, and directly supported new revenue through better visibility and product adoption.',
    tags: ['#REACT', '#TYPESCRIPT', '#BOOTSTRAP5']
  }
];

const stats = [
  { value: '500+', label: 'Concurrent_Requests', accent: 'text-[var(--theme-primary)]' },
  { value: '99.97%', label: 'Platform_Uptime', accent: 'text-[var(--theme-secondary)]' },
  { value: '$200K+', label: 'Upsell_Revenue_Influenced', accent: 'text-[var(--theme-tertiary)]' },
  { value: '85%+', label: 'JUnit_Coverage', accent: 'text-[var(--theme-primary-dim)]' }
];

const pageShell = 'mx-auto w-[min(100%-2rem,var(--container-width))] pt-[calc(var(--header-height)+var(--page-top-spacing))]';
const headline = 'font-headline';
const primaryAction =
  'on-primary-text font-headline inline-flex min-h-14 items-center justify-center gap-3 bg-[var(--theme-primary)] px-6 text-[0.76rem] font-bold uppercase tracking-[0.16em] transition-all duration-200 hover:-translate-y-0.5 hover:brightness-105';
const secondaryAction =
  'font-headline inline-flex min-h-14 items-center justify-center gap-3 border border-[rgba(73,72,71,0.7)] px-6 text-[0.76rem] font-bold uppercase tracking-[0.16em] text-[var(--theme-text)] transition-all duration-200 hover:-translate-y-0.5 hover:border-[var(--theme-primary)] hover:bg-[var(--theme-surface)] hover:text-[var(--theme-primary)]';

// Landing page that recreates the portfolio hero, terminal panel, and impact snapshot sections.
export default function Home() {
  return (
    <main className={pageShell}>
      <section className="grid gap-12 py-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:items-start">
        <div className="min-w-0">
          <div className="font-headline inline-flex items-center border-l-4 border-[var(--theme-primary)] bg-[var(--theme-surface-high)] px-3 py-2 text-[0.72rem] uppercase tracking-[0.16em] text-[var(--theme-primary)]">
            System Status: Shipping Cloud-Native Software
          </div>
          <h1 className="font-headline mt-6 text-[clamp(3rem,6vw,5.4rem)] font-bold uppercase tracking-[-0.07em] text-[var(--theme-text)] italic leading-[0.95]">
            Shafiq <span className="text-[var(--theme-primary)]">Imtiaz</span>
          </h1>
          <p className="font-headline mt-4 max-w-[34rem] text-[0.88rem] font-semibold uppercase tracking-[0.22em] text-[var(--theme-primary)]">
            Developer by Passion, Engineer by Mind
          </p>
          <p className="mt-4 max-w-[38rem] text-lg text-[var(--theme-text-muted)]">
            Full-stack software developer and AWS Certified AI Practitioner focused on scalable backend systems, enterprise modernization, and AI-driven product delivery across Java, React, cloud, and microservice ecosystems.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a className={primaryAction} href="/docs/Shafiq-Imtiaz-Resume.pdf" target="_blank" rel="noreferrer">
              <span>VIEW_RESUME</span>
              <span className="material-symbols-outlined" aria-hidden="true">
                description
              </span>
            </a>
            <Link className={secondaryAction} to="/contact">
              <span>OPEN_CONTACT</span>
              <span className="material-symbols-outlined" aria-hidden="true">
                mail
              </span>
            </Link>
          </div>
        </div>

        <div className="min-w-0">
          <div className="relative overflow-hidden border border-[rgba(73,72,71,0.35)] bg-[var(--theme-surface-lowest)] shadow-[var(--shadow-primary)]">
            <div className="crt-overlay pointer-events-none absolute inset-0 z-10"></div>
            <div className="relative z-20 flex items-center justify-between gap-4 border-b border-[rgba(73,72,71,0.35)] bg-[var(--theme-surface-highest)] px-4 py-3">
              <div className="flex gap-2">
                <span className="h-3 w-3 bg-[var(--theme-error-dim)]"></span>
                <span className="h-3 w-3 bg-[var(--theme-tertiary-dim)]"></span>
                <span className="h-3 w-3 bg-[var(--theme-primary-dim)]"></span>
              </div>
              <div className="font-headline text-[0.65rem] uppercase tracking-[0.22em] text-[var(--theme-text-muted)]">
                SHAFIQ_PORTFOLIO_BASH
              </div>
            </div>

            <div className="relative z-20 grid gap-5 p-6 font-headline text-sm md:text-base">
              <div className="flex flex-wrap gap-3">
                <span className="text-[var(--theme-primary)]">shafiq@portfolio:~$</span>
                <span>whoami</span>
              </div>
              <div className="text-[var(--theme-text-muted)]">
                Software developer at Flexspring delivering cloud-native systems, modernization work, AI initiatives, and high-ownership execution across product, platform, and production support.
              </div>

              <div className="flex flex-wrap gap-3">
                <span className="text-[var(--theme-primary)]">shafiq@portfolio:~$</span>
                <span>cat stack.matrix</span>
              </div>
              <div className="grid gap-3 text-[var(--theme-secondary)] md:grid-cols-2">
                <div>&gt; LANGUAGES: Java, JavaScript, TypeScript, SQL</div>
                <div>&gt; FRONTEND: React, Bootstrap, HTML, CSS</div>
                <div>&gt; BACKEND: Spring Boot, Quarkus, NodeJS</div>
                <div>&gt; CLOUD: AWS S3, SQS, Docker, MongoDB, PostgreSQL</div>
              </div>

              <div className="flex flex-wrap gap-3">
                <span className="text-[var(--theme-primary)]">shafiq@portfolio:~$</span>
                <span>tail -n 4 impact.log</span>
              </div>
              <div className="grid gap-2 text-[var(--theme-text-muted)]">
                <div>&gt; File Manager microservice scaled to 500+ concurrent requests.</div>
                <div>&gt; Platform uptime improved to 99.97% across core products.</div>
                <div>&gt; Monitor Pilot helped generate $200K+ in upsell revenue.</div>
                <div>&gt; Test coverage raised to 85%+ across backend services.</div>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-[var(--theme-primary)]">shafiq@portfolio:~$</span>
                <span>awaiting_next_build...</span>
                <span className="cursor-block inline-block h-5 w-2 bg-[var(--theme-primary)]" aria-hidden="true"></span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-4">
        <div className="flex flex-col gap-4 border-b border-[rgba(73,72,71,0.25)] pb-6 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className={`${headline} text-[clamp(2rem,3.8vw,2.6rem)] font-bold uppercase tracking-[-0.05em]`}>
              Deployment_History
            </h2>
            <p className="font-headline mt-2 text-[0.7rem] uppercase tracking-[0.14em] text-[var(--theme-text-muted)]">
              Selected impact from Flexspring and academic leadership
            </p>
          </div>
          <Link
            className="font-headline text-[0.72rem] uppercase tracking-[0.18em] text-[var(--theme-secondary)] transition-colors hover:text-[var(--theme-primary)]"
            to="/projects"
          >
            View_All_Logs
          </Link>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {historyCards.map((card) => {
            if (card.type === 'split') {
              return (
                <article key={card.title} className="bg-[var(--theme-surface)] md:col-span-2 xl:col-span-2 xl:grid xl:grid-cols-2">
                  <div className="flex items-center justify-center bg-[var(--theme-surface-high)] p-8">
                    <div className="w-full border border-[rgba(73,72,71,0.35)] bg-[var(--theme-surface-lowest)] p-6">
                      <div className="font-headline mb-4 flex items-center justify-between gap-4 text-[0.65rem] uppercase tracking-[0.18em] text-[var(--theme-text-muted)]">
                        <span>MONITOR_PILOT</span>
                        <span className="text-[var(--theme-secondary)]">DEPLOYED</span>
                      </div>
                      <div className="grid gap-3 font-headline text-[var(--theme-secondary)]">
                        {card.metrics.map((metric) => (
                          <div key={metric}>&gt; {metric}</div>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="p-8">
                    <span className="font-headline text-[0.62rem] uppercase tracking-[0.18em] text-[var(--theme-secondary)]">
                      {card.label}
                    </span>
                    <h3 className="font-headline mt-4 text-3xl font-bold uppercase tracking-[-0.05em]">
                      {card.title}
                    </h3>
                    <p className="mt-3 text-[var(--theme-text-muted)]">{card.description}</p>
                    <div className="mt-6 flex flex-wrap gap-4">
                      {card.tags.map((tag) => (
                        <span key={tag} className="font-headline text-[0.62rem] uppercase tracking-[0.08em] text-[var(--theme-outline-variant)]">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              );
            }

            return (
              <article
                key={card.title}
                className="flex min-h-[18rem] flex-col justify-between gap-6 border-l-4 bg-[var(--theme-surface)] p-8 transition-all duration-200 hover:-translate-y-0.5"
              >
                <span className={`material-symbols-outlined text-4xl ${card.accent}`} aria-hidden="true">
                  {card.icon}
                </span>
                <div>
                  <span className={`font-headline text-[0.62rem] uppercase tracking-[0.18em] ${card.accent}`}>
                    {card.label}
                  </span>
                  <h3 className="font-headline mt-3 text-2xl font-bold uppercase tracking-[-0.05em] text-[var(--theme-text)]">
                    {card.title}
                  </h3>
                  <p className="mt-3 text-sm text-[var(--theme-text-muted)]">{card.description}</p>
                  {card.tags ? (
                    <div className="mt-5 flex flex-wrap gap-3">
                      {card.tags.map((tag) => (
                        <span
                          key={tag}
                          className="font-headline text-[0.62rem] uppercase tracking-[0.08em] text-[var(--theme-outline-variant)]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  ) : null}
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="relative left-1/2 mt-8 w-screen -translate-x-1/2 bg-[var(--theme-surface-low)] py-10">
        <div className="mx-auto grid w-[min(100%-2rem,var(--container-width))] gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="grid gap-2">
              <div className={`${headline} text-[clamp(2.2rem,4vw,3rem)] font-bold ${stat.accent}`}>{stat.value}</div>
              <div className="font-headline text-[0.62rem] uppercase tracking-[0.16em] text-[var(--theme-text-muted)]">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
