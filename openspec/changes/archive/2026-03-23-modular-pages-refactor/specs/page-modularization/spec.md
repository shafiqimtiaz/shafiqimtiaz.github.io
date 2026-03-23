## ADDED Requirements

### Requirement: Modular page folders are canonical entrypoints

The system SHALL use `src/pages/<PageName>/index.jsx` as the canonical component for each route (`/`, `/about`, `/projects`, `/contact`).

#### Scenario: Page route renders from modular folder

- **WHEN** the user navigates to `/projects`
- **THEN** the app renders component from `src/pages/Projects/index.jsx`

### Requirement: Legacy root page components can be removed

The system SHALL no longer require `Home.jsx`, `About.jsx`, `Projects.jsx`, or the legacy `_Home.jsx`, `_Projects.jsx` files. Any remaining code in those files SHALL be deleted or archived outside active imports.

#### Scenario: Build without legacy page files

- **WHEN** the project is built with `npm run build`
- **THEN** build succeeds and no importer references unresolved `Home.jsx` artifacts

### Requirement: Shared style/layout hook is used by pages

The system SHALL wrap each page in `src/components/layout/PageShell.jsx` through its return tree.

#### Scenario: PageShell usage

- **WHEN** the /about page is rendered
- **THEN** the output contains `PageShell` wrapper markup and shared layout classes
