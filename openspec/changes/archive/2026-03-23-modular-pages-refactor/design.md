## Context

Current code has evolving page structure and multiple legacy entrypoints (e.g., old `Home.jsx` and `_Home.jsx`). Active routing is in `src/App.jsx`, and page implementations are already in modular folders, but there is no formal standard or spec for how to continue new pages in a structured way.

## Goals / Non-Goals

**Goals:**

- Enforce a clear modular page architecture in `src/pages/<PageName>/index.jsx`.
- Centralize layout in `src/components/layout/PageShell.jsx` and shared data in `src/data`.
- Remove duplicate legacy page files to reduce confusion and improve developer onboarding.

**Non-Goals:**

- Rewrite UI or visual design (keep current layout/style unchanged).
- Introduce new page features beyond modular cleanup.

## Decisions

1. Standardize template entrypoint for each top-level route page:
   - `src/pages/<PageName>/index.jsx` exports default component.
   - Page sub-sections are in same folder (e.g., `HeroSection.jsx`, etc.).

2. Keep Router mapping in `src/App.jsx` unchanged while ensuring path targets existing modular pages.

3. Use existing data modules from `src/data` (projects, experience, stats, links), and remove any duplicated data arrays in page components.

4. Mark legacy files as deleted and validate no open imports remain.

## Risks / Trade-offs

- Risk: Old files may linger in gitattributes or be referenced by outdated tooling; mitigated by full grep for old filenames and cleanup.
- Risk: Behavior changes if page refactor removes custom logic; mitigated by smoke testing with existing page flows.
