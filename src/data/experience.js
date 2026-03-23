export const techStack = [
  {
    icon: 'terminal',
    accent: 'text-[var(--theme-primary)]',
    code: '001',
    title: 'LANGUAGE_CORE',
    items: ['Java', 'JavaScript', 'TypeScript', 'SQL', 'HTML / CSS'],
  },
  {
    icon: 'layers',
    accent: 'text-[var(--theme-secondary)]',
    code: '002',
    title: 'FRAMEWORK_STACK',
    items: ['Spring Boot', 'Quarkus', 'React', 'NodeJS', 'Bootstrap / Swagger / JUnit'],
  },
  {
    icon: 'database',
    accent: 'text-[var(--theme-tertiary)]',
    code: '003',
    title: 'DATA_AND_CLOUD',
    items: ['PostgreSQL', 'MongoDB', 'AWS S3 / SQS', 'Docker / Redis'],
  },
  {
    icon: 'manufacturing',
    accent: 'text-[var(--theme-primary)]',
    code: '004',
    title: 'DELIVERY_TOOLING',
    items: ['Jenkins', 'Git / GitHub / Bitbucket', 'Postman / Kibana / Sentry', 'Linux / Ubuntu'],
  },
  {
    icon: 'sync_alt',
    accent: 'text-[var(--theme-secondary)]',
    code: '005',
    title: 'ENGINEERING_PRACTICE',
    items: ['Agile / Scrum', 'CI/CD', 'Microservices', 'Unit Testing / Debugging'],
  },
  {
    icon: 'psychology',
    accent: 'text-[var(--theme-tertiary)]',
    code: '006',
    title: 'LEADERSHIP_SIGNAL',
    items: [
      'Technical mentorship',
      'Code reviews',
      'Architectural roadmap input',
      'AI initiative leadership',
    ],
  },
];

export const timeline = [
  {
    date: 'NOV 2025',
    title: 'AWS_CERTIFIED_AI_PRACTITIONER',
    org: 'Amazon Web Services',
    accent: 'text-[var(--theme-primary)] border-[var(--theme-primary)]',
    icon: 'workspace_premium',
    details: [
      'Validated practical understanding of AI concepts, AWS AI services, and responsible deployment considerations.',
      'Credential ID: f33dbc99-4952-4c46-ab20-0e303d253724',
    ],
    credentialUrl: 'https://www.credly.com/badges/f33dbc99-4952-4c46-ab20-0e303d253724',
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
      'Mentored interns, led code reviews, and contributed to architectural roadmap planning.',
    ],
  },
  {
    date: 'MAY 2023 - APRIL 2024',
    title: 'SOFTWARE_DEVELOPER_INTERN',
    org: 'Flexspring | Montreal, QC',
    accent: 'text-[var(--theme-secondary)] border-[var(--theme-secondary)]',
    icon: 'monitoring',
    details: [
      'Built and deployed Monitor Pilot using React and TypeScript.',
      'Refactored 15+ APIs to RESTful standards, improving performance and reducing auth errors.',
      'Migrated backend services to Java 17 and Spring Boot 3 for faster real-time integrations.',
      'Raised JUnit coverage above 85% and improved API documentation with Swagger-UI.',
    ],
  },
  {
    date: 'SEP 2022 - APRIL 2024',
    title: 'MASTER_OF_ENGINEERING',
    org: 'Concordia University | Software Engineering | GPA 3.77 / 4.30',
    accent: 'text-[var(--theme-tertiary)] border-[var(--theme-tertiary)]',
    icon: 'school',
    details: [
      'Completed graduate studies in software engineering with a co-op focus.',
      'Strengthened foundations in software architecture, systems thinking, and applied engineering delivery.',
    ],
  },
  {
    date: 'OCT 2022 - APRIL 2023',
    title: 'DIRECTOR_OF_SPONSORSHIP',
    org: 'HackConcordia | Montreal, QC',
    accent: 'text-[var(--theme-secondary)] border-[var(--theme-secondary)]',
    icon: 'groups',
    details: [
      'Helped organize ConUHacks VII, the largest hackathon in Quebec.',
      'Supported an event that brought together 800+ participants from 97 universities.',
    ],
  },
];
