## Why

The repository currently has a mix of monolithic and modular page components. We need a consistent modular page architecture to reduce duplication, improve maintainability, and make future features easier to implement and verify.

## What Changes

- Consolidate all page entry points to folder-based modules under `src/pages/{Home,Projects,About,Contact}`.
- Remove legacy root-level page components (`Home.jsx`, `Projects.jsx`, `About.jsx`) and older `_Home.jsx`, `_Projects.jsx` artifacts.
- Ensure data-driven rendering uses shared `src/data` modules and central `PageShell` layout.
- Add explicit OpenSpec capability definitions for modular page composition.

## Capabilities

### New Capabilities

- `page-modularization`: standardize page rendering through modular subfolders and section components (Home, Projects, About, Contact).

### Modified Capabilities

- `none`: no existing capability requirements are changing; this is a structural cleanup.

## Impact

- `src/App.jsx`: routes continue to point at modular page entry points.
- `src/pages/` directory: existing nested pages will be canonical, old root pages removed.
- `src/data/` and component reuse (`PageShell`, UI primitives) are emphasized.
- Minor risk: ensure no stale imports of deleted page files remain.
