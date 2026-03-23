const techStack = [
  {
    icon: 'terminal',
    accent: 'text-[var(--theme-primary)]',
    code: '001',
    title: 'LANGUAGE_CORE',
    items: ['Java', 'JavaScript', 'TypeScript', 'SQL', 'HTML / CSS']
  },
  {
    icon: 'layers',
    accent: 'text-[var(--theme-secondary)]',
    code: '002',
    title: 'FRAMEWORK_STACK',
    items: ['Spring Boot', 'Quarkus', 'React', 'NodeJS', 'Bootstrap / Swagger / JUnit']
  },
  {
    icon: 'database',
    accent: 'text-[var(--theme-tertiary)]',
    code: '003',
    title: 'DATA_AND_CLOUD',
    items: ['PostgreSQL', 'MongoDB', 'AWS S3 / SQS', 'Docker / Redis']
  },
  {
    icon: 'manufacturing',
    accent: 'text-[var(--theme-primary)]',
    code: '004',
    title: 'DELIVERY_TOOLING',
    items: ['Jenkins', 'Git / GitHub / Bitbucket', 'Postman / Kibana / Sentry', 'Linux / Ubuntu']
  },
  {
    icon: 'sync_alt',
    accent: 'text-[var(--theme-secondary)]',
    code: '005',
    title: 'ENGINEERING_PRACTICE',
    items: ['Agile / Scrum', 'CI/CD', 'Microservices', 'Unit Testing / Debugging']
  },
  {
    icon: 'psychology',
    accent: 'text-[var(--theme-tertiary)]',
    code: '006',
    title: 'LEADERSHIP_SIGNAL',
    items: ['Technical mentorship', 'Code reviews', 'Architectural roadmap input', 'AI initiative leadership']
  }
];

const timeline = [
  {
    date: 'NOV 2025',
    title: 'AWS_CERTIFIED_AI_PRACTITIONER',
    org: 'Amazon Web Services',
    accent: 'text-[var(--theme-primary)] border-[var(--theme-primary)]',
    icon: 'workspace_premium',
    details: [
      'Validated practical understanding of AI concepts, AWS AI services, and responsible deployment considerations.'
    ]
  },
  {
    date: 'MAY 2024 - PRESENT',
    title: 'SOFTWARE_DEVELOPER',
    org: 'Flexspring | Ottawa, ON',
    accent: 'text-[var(--theme-primary)] border-[var(--theme-primary)]',
    icon: 'work',
    details: [
      'Built the Flexspring File Manager microservice with Quarkus, AWS S3, SQS, and MongoDB.',
      'Modernized backend systems from Java 8 to 17 and Spring Boot 2 to 3.',
      'Improved platform stability to 99.97% uptime and reduced incidents by 60%.',
      'Mentored interns, led code reviews, and contributed to architectural roadmap planning.'
    ]
  },
  {
    date: 'MAY 2023 - APRIL 2024',
    title: 'SOFTWARE_DEVELOPER_INTERN',
    org: 'Flexspring | Ottawa, ON',
    accent: 'text-[var(--theme-secondary)] border-[var(--theme-secondary)]',
    icon: 'monitoring',
    details: [
      'Built and deployed Monitor Pilot using React and TypeScript.',
      'Refactored 15+ APIs to RESTful standards, improving performance and reducing auth errors.',
      'Migrated backend services to Java 17 and Spring Boot 3 for faster real-time integrations.',
      'Raised JUnit coverage above 85% and improved API documentation with Swagger-UI.'
    ]
  },
  {
    date: 'SEP 2022 - APRIL 2024',
    title: 'MASTER_OF_ENGINEERING',
    org: 'Concordia University | Software Engineering | GPA 3.77 / 4.30',
    accent: 'text-[var(--theme-tertiary)] border-[var(--theme-tertiary)]',
    icon: 'school',
    details: [
      'Completed graduate studies in software engineering with a co-op focus.',
      'Strengthened foundations in software architecture, systems thinking, and applied engineering delivery.'
    ]
  },
  {
    date: 'OCT 2022 - APRIL 2023',
    title: 'DIRECTOR_OF_SPONSORSHIP',
    org: 'HackConcordia | Ottawa, ON',
    accent: 'text-[var(--theme-secondary)] border-[var(--theme-secondary)]',
    icon: 'groups',
    details: [
      'Helped organize ConUHacks VII, the largest hackathon in Quebec.',
      'Supported an event that brought together 800+ participants from 97 universities.'
    ]
  }
];

const stats = [
  { value: '500+', label: 'Concurrent Requests', accent: 'text-[var(--theme-primary)]' },
  { value: '99.97%', label: 'Platform Uptime', accent: 'text-[var(--theme-secondary)]' },
  { value: '85%+', label: 'JUnit Coverage', accent: 'text-[var(--theme-tertiary)]' }
];

const pageShell = 'relative mx-auto w-[min(100%-2rem,var(--container-width))] pt-[calc(var(--header-height)+var(--page-top-spacing))]';

// About page that preserves the profile, stack matrix, and career timeline content.
export default function About() {
  return (
    <main className={pageShell}>
      <div className="grid-pattern-panel pointer-events-none fixed inset-0 -z-10 opacity-[0.08]"></div>

      <section className="grid gap-5 py-12 lg:max-w-[56rem]">
        <div className="font-headline inline-flex w-fit items-center border-l-4 border-[var(--theme-primary)] bg-[var(--theme-surface)] px-4 py-2 text-[0.72rem] uppercase tracking-[0.18em] text-[var(--theme-primary)]">
          Identity_Records / Data_Sheet
        </div>
        <h1 className="font-headline text-[clamp(3rem,6vw,5.2rem)] font-bold uppercase tracking-[-0.06em] leading-[0.92] text-[var(--theme-text)]">
          Developer <span className="text-[var(--theme-primary)]">Profile</span>_
        </h1>
        <div className="mt-4 h-px bg-[rgba(73,72,71,0.35)]"></div>
      </section>

      <section className="mb-20 grid gap-12 lg:grid-cols-[minmax(0,1.45fr)_minmax(20rem,1fr)] lg:items-start">
        <div className="min-w-0">
          <div className="border-l-4 border-[var(--theme-primary)] bg-[var(--theme-surface-low)] p-8">
            <h2 className="font-headline mb-5 text-[0.75rem] uppercase tracking-[0.18em] text-[var(--theme-primary)]">
              // MISSION_MANIFESTO
            </h2>
            <p className="text-lg text-[var(--theme-text-muted)]">
              Full-stack software developer and AWS Certified AI Practitioner specializing in scalable cloud-native systems, enterprise modernization, and practical AI-driven solutions. I focus on delivering stable software across the full lifecycle, from architecture and implementation to testing, debugging, and production reliability.
            </p>
            <p className="mt-4 text-lg text-[var(--theme-text-muted)]">
              My work is grounded in ownership, mentorship, and execution. At Flexspring, that has meant building new microservices, modernizing Java and Spring platforms, improving uptime, guiding interns, and helping shape long-term technical direction.
            </p>
          </div>

          <div className="mt-6 flex flex-wrap gap-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="flex items-center gap-4 border border-[rgba(73,72,71,0.2)] bg-[var(--theme-surface)] px-6 py-4"
              >
                <span className={`font-headline text-3xl font-bold ${stat.accent}`}>{stat.value}</span>
                <span className="font-headline text-[0.62rem] uppercase tracking-[0.16em] text-[var(--theme-text-muted)]">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="relative overflow-hidden border border-[rgba(73,72,71,0.3)] bg-[var(--theme-surface)]">
            <div className="crt-overlay absolute inset-0 opacity-20"></div>
            <div className="relative z-10 border-b border-[rgba(73,72,71,0.25)] bg-[var(--theme-surface-high)] px-6 py-4 font-headline text-[0.62rem] uppercase tracking-[0.24em] text-[var(--theme-text-muted)]">
              PROFILE_CARD
            </div>
            <div className="relative z-10 grid gap-6 p-8">
              <div>
                <div className="font-headline text-[0.62rem] uppercase tracking-[0.18em] text-[var(--theme-outline)]">NAME</div>
                <div className="font-headline mt-2 text-3xl font-bold uppercase text-[var(--theme-primary)]">
                  Shafiq Imtiaz
                </div>
              </div>
              <div>
                <div className="font-headline text-[0.62rem] uppercase tracking-[0.18em] text-[var(--theme-outline)]">ROLE</div>
                <div className="mt-2 text-[var(--theme-text-muted)]">
                  Software Developer | Full-stack, backend, cloud, and AI-oriented delivery
                </div>
              </div>
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <div className="font-headline text-[0.62rem] uppercase tracking-[0.18em] text-[var(--theme-outline)]">LOCATION</div>
                  <div className="mt-2 text-[var(--theme-text-muted)]">Ottawa, ON</div>
                </div>
                <div>
                  <div className="font-headline text-[0.62rem] uppercase tracking-[0.18em] text-[var(--theme-outline)]">CERTIFICATION</div>
                  <div className="mt-2 text-[var(--theme-text-muted)]">AWS Certified AI Practitioner</div>
                </div>
              </div>
              <div>
                <div className="font-headline text-[0.62rem] uppercase tracking-[0.18em] text-[var(--theme-outline)]">EDUCATION</div>
                <div className="mt-2 text-[var(--theme-text-muted)]">
                  Master of Engineering in Software Engineering, Concordia University
                </div>
              </div>
              <div className="border-l-4 border-[var(--theme-secondary)] bg-[var(--theme-surface-low)] p-4">
                <div className="font-headline text-[0.62rem] uppercase tracking-[0.18em] text-[var(--theme-secondary)]">
                  SIGNAL
                </div>
                <div className="mt-2 text-[var(--theme-text-muted)]">
                  Strong ownership, technical leadership, and mentorship across R&amp;D, production support, platform modernization, and customer-facing product delivery.
                </div>
              </div>
            </div>
          </div>
          <div className="on-primary-text mt-4 inline-flex bg-[var(--theme-primary)] px-4 py-2 font-headline text-[0.72rem] font-bold uppercase tracking-[0.14em]">
            ID: FLEXSPRING_NODE
          </div>
        </div>
      </section>

      <section className="mb-20">
        <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="font-headline text-[clamp(2rem,3.8vw,2.4rem)] font-bold uppercase tracking-[-0.04em]">
              TECH_STACK.EXE
            </h2>
            <p className="font-headline mt-2 text-[0.62rem] uppercase tracking-[0.18em] text-[var(--theme-text-muted)]">
              CAPABILITIES_MATRIX / RUN_ANALYSIS
            </p>
          </div>
          <div className="font-headline text-[0.62rem] uppercase tracking-[0.18em] text-[var(--theme-text-muted)]">
            STATUS: STABLE
          </div>
        </div>

        <div className="grid gap-px bg-[var(--theme-surface-highest)] md:grid-cols-2 xl:grid-cols-3">
          {techStack.map((category) => (
            <article key={category.title} className="bg-[var(--theme-surface-low)] p-6 transition-all duration-200 hover:-translate-y-0.5 hover:bg-[var(--theme-surface)]">
              <div className="mb-4 flex items-center justify-between gap-4">
                <span className={`material-symbols-outlined ${category.accent}`} aria-hidden="true">
                  {category.icon}
                </span>
                <span className="font-headline text-[0.62rem] uppercase tracking-[0.18em] text-[var(--theme-text-muted)]">
                  {category.code}
                </span>
              </div>
              <h3 className="font-headline mb-4 text-lg font-bold uppercase tracking-[0.02em]">{category.title}</h3>
              <div className="grid gap-3 text-sm text-[var(--theme-text-muted)]">
                {category.items.map((item) => (
                  <div key={item}>{item}</div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mb-8">
        <div className="mb-8">
          <h2 className="font-headline text-[clamp(2rem,3.8vw,2.4rem)] font-bold uppercase tracking-[-0.04em]">
            SYSTEM_HISTORY_LOG
          </h2>
          <p className="font-headline mt-2 text-[0.62rem] uppercase tracking-[0.18em] text-[var(--theme-text-muted)]">
            CHRONOLOGICAL_EXPERIENCE_RECORDS
          </p>
        </div>

        <div className="relative grid gap-8">
          <div className="pointer-events-none absolute bottom-0 left-4 top-0 w-px bg-[var(--theme-surface-highest)] md:left-1/2 md:-translate-x-1/2"></div>
          {timeline.map((entry, index) => (
            <article
              key={`${entry.date}-${entry.title}`}
              className={`relative flex ${index % 2 === 1 ? 'md:justify-end' : 'md:justify-start'}`}
            >
              <div className={`absolute left-4 top-6 z-10 flex h-10 w-10 -translate-x-1/2 items-center justify-center border-2 bg-[var(--theme-bg)] ${entry.accent} md:left-1/2`}>
                <span className="material-symbols-outlined text-sm" aria-hidden="true">
                  {entry.icon}
                </span>
              </div>
              <div className="ml-12 w-full border border-[rgba(73,72,71,0.22)] bg-[var(--theme-surface)] p-6 md:ml-0 md:w-[calc(50%-2.75rem)]">
                <time className="font-headline text-[0.62rem] uppercase tracking-[0.18em] text-[var(--theme-text-muted)]">
                  {entry.date}
                </time>
                <h3 className="font-headline mt-2 text-xl font-bold uppercase tracking-[0.02em]">{entry.title}</h3>
                <p className="font-headline mb-4 mt-1 text-[0.72rem] uppercase tracking-[0.12em] text-[var(--theme-text-muted)]">
                  {entry.org}
                </p>
                <ul className="grid gap-3">
                  {entry.details.map((detail) => (
                    <li key={detail} className="relative pl-4 text-sm text-[var(--theme-text-muted)] before:absolute before:left-0 before:content-['>']">
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
