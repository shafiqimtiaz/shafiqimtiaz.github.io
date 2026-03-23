## Context

The portfolio is a React 18 + Vite + Tailwind CSS v4 application with 4 main pages (Home, Projects, About, Contact). Current architecture has:

- 3 shared components (Navbar, Footer, ThemeToggle) - well-factored
- 4 monolithic pages (200-300 lines each) - mixing data, styling, rendering
- Inline data dictionaries scattered across page files
- Repeated style strings (primaryAction, secondaryAction, ghostAction)
- Terminal/CRT-styled panels duplicated in 3 pages

No build complexity, no external APIs. Pure frontend refactoring.

## Goals / Non-Goals

**Goals:**

- Reduce page files from 250+ lines to ~40-80 lines each
- Centralize all content data in dedicated modules
- Extract 3 shared UI components with variants
- Enable future features through clear extension points
- Maintain 100% visual parity - zero styling changes

**Non-Goals:**

- No new features or pages
- No CSS/styling architecture changes
- No performance optimization work
- No testing infrastructure changes

## Decisions

### 1. Directory Structure

**Decision:** Create layered component hierarchy (`ui/`, `layout/`) and page folders

```
src/
├── components/
│   ├── ui/           # Shared primitives
│   │   ├── Button.jsx
│   │   ├── TerminalPanel.jsx
│   │   └── SectionHeader.jsx
│   └── layout/       # Structural components
│       └── PageShell.jsx
├── data/             # Content modules
│   ├── projects.js
│   ├── experience.js
│   ├── stats.js
│   └── links.js
└── pages/            # Page folders
    ├── Home/
    ├── Projects/
    ├── About/
    └── Contact/
```

**Alternatives considered:**

- Flat `components/` with prefixes (e.g., `ButtonPrimary.jsx`) → Harder to scale, naming conflicts
- Separate `features/` directory → Overkill for portfolio, adds indirection without benefit

### 2. Button Component Design

**Decision:** Single Button component with `variant` prop

```jsx
<Button variant="primary">Label</Button>
<Button variant="secondary">Label</Button>
<Button variant="ghost">Label</Button>
```

**Alternatives considered:**

- Separate components (PrimaryButton, SecondaryButton) → More files, harder to maintain consistency
- className prop only → Loses semantic meaning, requires memorizing CSS strings

### 3. TerminalPanel Component Design

**Decision:** Container component with `title` prop and `children` for content

```jsx
<TerminalPanel title="SHAFIQ_PORTFOLIO_BASH">{/* Terminal content */}</TerminalPanel>
```

The CRT overlay and window chrome are built-in. Content is fully customizable.

**Alternatives considered:**

- Multiple variant props → Unnecessary complexity, all terminals share same chrome
- Compound components (TerminalHeader, TerminalContent) → Over-engineering for simple container

### 4. Data Organization

**Decision:** Group by domain (projects, experience, stats, links)

**Alternatives considered:**

- Single `content.js` file → Too large, harder to navigate
- Colocate with consuming components → Defeats centralization goal

### 5. Page Composition

**Decision:** Each page is a folder with `index.jsx` + section components

```jsx
export default function Home() {
  return (
    <PageShell>
      <HeroSection />
      <TerminalSection />
      <HistorySection />
      <StatsSection />
    </PageShell>
  );
}
```

**Alternatives considered:**

- Keep flat files with section imports → Still 150+ lines, section extraction is the win
- Route-level code splitting → Premature for 4 pages, adds complexity

## Risks / Trade-offs

- **Import path changes** → Update all imports atomically, use IDE find-replace
- **Over-abstraction** → Start with 3 UI components only, add more as patterns emerge
- **File count increase** → Accept trade-off for clarity, each file does one thing
- **Data file navigation** → Use clear naming matching domain concepts
