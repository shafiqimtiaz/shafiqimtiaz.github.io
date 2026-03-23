import { Link } from 'react-router';

const caseStudies = [
  {
    code: '001',
    label: 'DEPLOYED_PRODUCTION',
    monitor: 'FILE_MANAGER_SERVICE',
    highlights: [
      'Reduced file-processing latency by 40%',
      'Scaled to 500+ concurrent requests',
      'Built on Quarkus, S3, SQS, MongoDB'
    ],
    title: 'Flexspring_File_Manager',
    description:
      "Designed and launched a new microservice for file management and processing. The solution improved performance, handled scale reliably, and extended Flexspring's cloud-native architecture with AWS-backed asynchronous workflows.",
    tags: ['JAVA', 'QUARKUS', 'AWS_S3', 'AWS_SQS', 'MONGODB'],
    primary: { label: 'Resume_PDF_', href: '/docs/Shafiq-Imtiaz-Resume.pdf', external: true },
    secondary: { label: 'Contact_', to: '/contact' }
  },
  {
    code: '002',
    label: 'REVENUE_ENABLEMENT',
    monitor: 'MONITOR_PILOT',
    highlights: [
      'Accelerated onboarding by 50%',
      'Generated $200K+ in upsell revenue',
      'Modernized UI performance by 65%'
    ],
    title: 'Monitor_Pilot',
    description:
      'Built and deployed a React and TypeScript dashboard used to improve customer onboarding and visibility. The project combined stronger UX, faster load performance, and measurable commercial impact.',
    tags: ['REACT', 'TYPESCRIPT', 'BOOTSTRAP_5', 'REST_APIS'],
    primary: { label: 'More_Context_', to: '/about' },
    secondary: { label: 'Connect_', to: '/contact' }
  },
  {
    code: '003',
    label: 'AI_INITIATIVE',
    monitor: 'RAG_CHATBOT',
    highlights: [
      'Runner-up at Flexspring Hackathon',
      'Built with Crewdle AI and company data',
      'Foundation for future AI-powered features'
    ],
    title: 'AI_Chatbot_Initiative',
    description:
      'Helped turn a hackathon prototype into a broader product direction by building a retrieval-augmented chatbot that surfaced internal knowledge and demonstrated real potential for enterprise AI features.',
    tags: ['RAG', 'AI_CHATBOT', 'KNOWLEDGE_BASE', 'PRODUCT_DISCOVERY'],
    primary: { label: 'About_AI_', to: '/about' },
    secondary: { label: 'Discuss_', to: '/contact' }
  },
  {
    code: '004',
    label: 'PLATFORM_MODERNIZATION',
    monitor: 'JAVA17_SPRINGBOOT3',
    highlights: [
      'Improved CI/CD efficiency by 35%',
      'Reduced production incidents by 60%',
      'Enabled real-time data streaming improvements'
    ],
    title: 'Backend_Modernization_Program',
    description:
      'Modernized backend services and legacy APIs by migrating to Java 17 and Spring Boot 3, improving maintainability, delivery speed, and runtime reliability across microservice environments.',
    tags: ['JAVA_17', 'SPRING_BOOT_3', 'MICROSERVICES', 'CI_CD'],
    primary: { label: 'Resume_PDF_', href: '/docs/Shafiq-Imtiaz-Resume.pdf', external: true },
    secondary: { label: 'Contact_', to: '/contact' }
  }
];

const miniProjects = [
  {
    name: 'Task List',
    description: 'Standalone task manager for adding, tracking, and clearing day-to-day work items.',
    href: '/projects/1%20Task%20List/index.html'
  },
  {
    name: 'Book List',
    description: 'Small CRUD-style book tracker for capturing title, author, and ISBN entries in the browser.',
    href: '/projects/2%20Book%20List/index.html'
  },
  {
    name: 'Github Finder',
    description: 'Search interface for looking up GitHub users and surfacing profile details quickly.',
    href: '/projects/3%20GitHub%20Finder/index.html'
  },
  {
    name: 'Shopping Cart',
    description: 'Client-side shopping flow for selecting items and reviewing a live cart summary.',
    href: '/projects/Ex1%20Shopping%20Cart/index.html'
  },
  {
    name: 'REG-EX Validator',
    description: 'Interactive validator for testing form patterns and common regular-expression rules.',
    href: '/projects/Ex2%20REG-EX%20Validator/index.html'
  },
  {
    name: 'Number Guessing Game',
    description: 'Browser guessing game with input validation and simple game-state feedback.',
    href: '/projects/Ex3%20Number%20Game/index.html'
  },
  {
    name: 'Colorize',
    description: 'Visual UI experiment showcasing Glass and Neo styling directions in a standalone demo.',
    href: '/projects/UI%20Colorize%20GlassNeo/index.html'
  }
];

const pageShell =
  'relative mx-auto w-[min(100%-2rem,var(--container-width))] pt-[calc(var(--header-height)+var(--page-top-spacing))]';
const actionBase =
  'font-headline inline-flex min-h-12 items-center justify-center gap-2 px-5 text-[0.72rem] font-bold uppercase tracking-[0.18em] transition-all duration-200 hover:-translate-y-px';
const primaryAction = `on-primary-text ${actionBase} bg-[var(--theme-primary)] hover:brightness-105`;
const secondaryAction = `${actionBase} border border-[var(--theme-outline-variant)] text-[var(--theme-primary)] hover:border-[var(--theme-primary)] hover:bg-[var(--theme-surface-high)]`;

function renderAction(action, className) {
  if (action.external) {
    return (
      <a className={className} href={action.href} target="_blank" rel="noreferrer">
        {action.label}
      </a>
    );
  }

  return (
    <Link className={className} to={action.to}>
      {action.label}
    </Link>
  );
}

// Projects page that keeps the resume-style case studies and links out to standalone mini projects.
export default function Projects() {
  return (
    <main className={pageShell}>
      <section className="grid gap-5 py-12 lg:max-w-[56rem]">
        <p className="font-headline inline-flex w-fit border-l-4 border-[var(--theme-primary)] bg-[var(--theme-surface)] px-4 py-2 text-[0.72rem] uppercase tracking-[0.18em] text-[var(--theme-primary)]">
          Core_System / Impact_Record
        </p>
        <h1 className="font-headline text-[clamp(3rem,6vw,5.2rem)] font-bold uppercase tracking-[-0.06em] leading-[0.92] text-[var(--theme-text)]">
          Selected <span className="text-[var(--theme-primary)]">Projects</span>_
        </h1>
        <div className="max-w-[46rem] text-lg text-[var(--theme-text-muted)]">
          Experience highlights drawn from product, platform, and AI work across Flexspring. These are
          resume-based case snapshots rather than public code drops.
        </div>
      </section>

      <section className="grid gap-8 pb-8 md:grid-cols-2">
        {caseStudies.map((project) => (
          <article
            key={project.title}
            className="group relative overflow-hidden border border-[rgba(73,72,71,0.25)] bg-[var(--theme-surface)] shadow-[var(--shadow-soft)]"
          >
            <div className="grid-pattern-panel pointer-events-none absolute inset-0 opacity-15"></div>
            <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,var(--theme-primary),transparent)] opacity-70"></div>

            <div className="relative z-10 flex items-center justify-between gap-4 px-8 pt-8">
              <span className="font-headline inline-flex bg-[rgba(0,227,253,0.12)] px-3 py-2 text-[0.7rem] uppercase tracking-[0.18em] text-[var(--theme-secondary)]">
                {project.label}
              </span>
              <span className="font-headline text-[0.72rem] uppercase tracking-[0.18em] text-[var(--theme-text-muted)]">
                {project.code}
              </span>
            </div>

            <div className="relative z-10 px-8 pt-6">
              <div className="border border-[rgba(73,72,71,0.3)] bg-[var(--theme-surface-high)] p-6">
                <div className="font-headline text-[0.72rem] uppercase tracking-[0.18em] text-[var(--theme-primary)]">
                  {project.monitor}
                </div>
                <div className="mt-5 grid gap-3 font-headline text-[0.98rem] text-[var(--theme-secondary)]">
                  {project.highlights.map((highlight) => (
                    <div key={highlight}>&gt; {highlight}</div>
                  ))}
                </div>
              </div>
            </div>

            <div className="relative z-10 px-8 pb-8 pt-6">
              <h2 className="font-headline text-[clamp(2rem,3vw,2.6rem)] font-bold uppercase tracking-[-0.05em] text-[var(--theme-text)] transition-colors duration-200 group-hover:text-[var(--theme-primary)]">
                {project.title}
              </h2>
              <p className="mt-4 text-lg text-[var(--theme-text-muted)]">{project.description}</p>

              <div className="mt-6 flex flex-wrap gap-3 border-l-2 border-[var(--theme-tertiary)] bg-[var(--theme-surface-lowest)] px-4 py-4">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-headline text-[0.66rem] font-semibold uppercase tracking-[0.14em] text-[var(--theme-tertiary)]"
                  >
                    # {tag}
                  </span>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                {renderAction(project.primary, primaryAction)}
                {renderAction(project.secondary, secondaryAction)}
              </div>
            </div>
          </article>
        ))}
      </section>

      <section className="mt-24 pb-8">
        <div className="flex flex-col gap-5 border-b border-[rgba(73,72,71,0.28)] pb-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="font-headline text-[0.72rem] uppercase tracking-[0.18em] text-[var(--theme-secondary)]">
              Standalone_HTML / Public_Projects
            </p>
            <h2 className="font-headline mt-3 text-[clamp(2.2rem,4vw,3rem)] font-bold uppercase tracking-[-0.05em] text-[var(--theme-text)]">
              Mini_Project_Grid
            </h2>
          </div>
          <div className="max-w-[34rem] text-sm text-[var(--theme-text-muted)]">
            The original `Projects/` folders stay standalone and are now hosted from `/public/projects/`.
          </div>
        </div>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {miniProjects.map((project, index) => (
            <article
              key={project.name}
              className="group flex h-full flex-col gap-5 border border-[rgba(73,72,71,0.22)] bg-[var(--theme-surface-low)] p-6 transition-all duration-200 hover:-translate-y-0.5 hover:border-[rgba(156,255,147,0.35)] hover:bg-[var(--theme-surface)]"
            >
              <div className="flex items-center justify-between gap-4">
                <div className="font-headline text-[0.62rem] uppercase tracking-[0.18em] text-[var(--theme-outline-variant)]">
                  VIEWABLE_BUILD
                </div>
                <div className="font-headline text-[0.62rem] uppercase tracking-[0.18em] text-[var(--theme-primary)]">
                  {String(index + 1).padStart(3, '0')}
                </div>
              </div>
              <h3 className="font-headline text-2xl font-bold uppercase tracking-[-0.04em] text-[var(--theme-text)]">
                {project.name}
              </h3>
              <p className="flex-1 text-[var(--theme-text-muted)]">{project.description}</p>
              <a
                className="font-headline inline-flex min-h-12 items-center justify-center border border-[var(--theme-outline-variant)] px-5 text-[0.72rem] font-bold uppercase tracking-[0.18em] text-[var(--theme-primary)] transition-all duration-200 group-hover:border-[var(--theme-primary)] group-hover:bg-[var(--theme-surface-high)]"
                href={project.href}
                target="_blank"
                rel="noreferrer"
              >
                View Project
              </a>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
