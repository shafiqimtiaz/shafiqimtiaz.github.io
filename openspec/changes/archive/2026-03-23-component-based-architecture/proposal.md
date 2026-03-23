## Why

The portfolio's page components have grown into monolithic files (250+ lines each) that mix data, styling, and rendering concerns. This makes content hard to find, creates styling drift across pages, and blocks future feature development. The current structure works but doesn't scale.

## What Changes

- **New directory structure**: Separate `ui/` and `layout/` component folders, `data/` for centralized content, and page folders containing section components
- **Extract shared UI components**: Button (primary/secondary/ghost variants), TerminalPanel (CRT-styled container), SectionHeader (label + title + description pattern)
- **Centralize content data**: Move all inline data dictionaries (projects, experience, stats, links) to dedicated data files
- **Page composition pattern**: Each page becomes a folder with `index.jsx` composing section components (~40-80 lines each)
- **BREAKING**: File paths change significantly - imports across the codebase will need updates

## Capabilities

### New Capabilities

- `ui-components`: Shared visual primitives (Button, TerminalPanel, SectionHeader) with consistent styling and variants
- `data-layer`: Centralized content management with single-source-of-truth data files for projects, experience, stats, and links
- `page-sections`: Section-level components that compose into pages, enabling reuse and reducing per-file complexity

### Modified Capabilities

None - this is a new architecture, no existing capabilities to modify.

## Impact

- **Pages**: All 4 page files (Home, Projects, About, Contact) restructured into folder-based composition
- **Components**: New `ui/` and `layout/` subdirectories under `src/components/`
- **Data**: New `src/data/` directory with 4 data modules
- **Imports**: All page imports in App.jsx and internal references update
- **No API changes**: Pure refactoring, no external interface changes
- **No style changes**: Visual output remains identical
