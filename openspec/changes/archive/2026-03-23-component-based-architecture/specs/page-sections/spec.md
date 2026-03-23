## ADDED Requirements

### Requirement: Home page sections

The system SHALL provide Home page as a folder with index.jsx composing HeroSection, TerminalSection, HistorySection, and StatsSection components.

#### Scenario: Home page composition

- **WHEN** Home page is rendered
- **THEN** it SHALL compose HeroSection, TerminalSection, HistorySection, and StatsSection in order with proper spacing

#### Scenario: HeroSection renders hero content

- **WHEN** HeroSection renders
- **THEN** it SHALL display status badge, name, tagline, description, and action buttons

#### Scenario: TerminalSection renders terminal panel

- **WHEN** TerminalSection renders
- **THEN** it SHALL display a TerminalPanel with whoami, stack.matrix, and impact.log commands

#### Scenario: HistorySection renders deployment cards

- **WHEN** HistorySection renders
- **THEN** it SHALL display historyCards (compact and split variants) from data layer

#### Scenario: StatsSection renders metrics

- **WHEN** StatsSection renders
- **THEN** it SHALL display stats in full-width surface-low background

### Requirement: Projects page sections

The system SHALL provide Projects page as a folder with index.jsx composing CaseStudiesSection and MiniProjectsSection components.

#### Scenario: Projects page composition

- **WHEN** Projects page is rendered
- **THEN** it SHALL compose CaseStudiesSection and MiniProjectsSection in order

#### Scenario: CaseStudiesSection renders project cards

- **WHEN** CaseStudiesSection renders
- **THEN** it SHALL display caseStudies from data layer with monitor panel and action buttons

#### Scenario: MiniProjectsSection renders project grid

- **WHEN** MiniProjectsSection renders
- **THEN** it SHALL display miniProjects in a responsive grid with links to standalone projects

### Requirement: About page sections

The system SHALL provide About page as a folder with index.jsx composing ProfileSection, TechStackSection, and TimelineSection components.

#### Scenario: About page composition

- **WHEN** About page is rendered
- **THEN** it SHALL compose ProfileSection, TechStackSection, and TimelineSection in order

#### Scenario: ProfileSection renders profile card

- **WHEN** ProfileSection renders
- **THEN** it SHALL display mission manifesto, stats row, and profile card with CRT overlay

#### Scenario: TechStackSection renders skills grid

- **WHEN** TechStackSection renders
- **THEN** it SHALL display techStack categories in a responsive grid

#### Scenario: TimelineSection renders career history

- **WHEN** TimelineSection renders
- **THEN** it SHALL display timeline entries with icons, dates, and details in alternating layout

### Requirement: Contact page sections

The system SHALL provide Contact page as a folder with index.jsx composing TerminalSection and StatusSection components.

#### Scenario: Contact page composition

- **WHEN** Contact page is rendered
- **THEN** it SHALL compose TerminalSection and StatusSection in order with proper grid layout

#### Scenario: Contact TerminalSection renders contact channels

- **WHEN** Contact TerminalSection renders
- **THEN** it SHALL display a TerminalPanel with contact_channels.json, availability.log, and quick_actions

#### Scenario: StatusSection renders status panels

- **WHEN** StatusSection renders
- **THEN** it SHALL display systemStatus panel, externalNodes links, and infoColumns in a grid
