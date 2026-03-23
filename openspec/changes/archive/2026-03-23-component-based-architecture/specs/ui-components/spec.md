## ADDED Requirements

### Requirement: Button component with variants

The system SHALL provide a Button component supporting primary, secondary, and ghost variants with consistent styling across all pages.

#### Scenario: Primary button renders correctly

- **WHEN** Button component is rendered with variant="primary"
- **THEN** it SHALL display with primary background color, white text, and hover effects matching existing primaryAction styles

#### Scenario: Secondary button renders correctly

- **WHEN** Button component is rendered with variant="secondary"
- **THEN** it SHALL display with transparent background, border, and primary text color matching existing secondaryAction styles

#### Scenario: Ghost button renders correctly

- **WHEN** Button component is rendered with variant="ghost"
- **THEN** it SHALL display with muted background and hover state matching existing ghostAction styles

#### Scenario: Button supports custom className

- **WHEN** Button component receives a className prop
- **THEN** it SHALL merge custom classes with base variant styles

#### Scenario: Button supports link and button modes

- **WHEN** Button component receives an href prop
- **THEN** it SHALL render as an anchor element
- **WHEN** Button component does not receive an href prop
- **THEN** it SHALL render as a button element

### Requirement: TerminalPanel component

The system SHALL provide a TerminalPanel component that renders a CRT-styled container with customizable title and content.

#### Scenario: TerminalPanel renders with title

- **WHEN** TerminalPanel is rendered with title="SHAFIQ_BASH"
- **THEN** it SHALL display the title in the header area with terminal window chrome (colored dots)

#### Scenario: TerminalPanel renders children content

- **WHEN** TerminalPanel wraps child content
- **THEN** children SHALL render inside the panel body with proper z-index layering

#### Scenario: TerminalPanel includes CRT overlay

- **WHEN** TerminalPanel renders
- **THEN** it SHALL include the .crt-overlay element with pointer-events-none for visual effect only

#### Scenario: TerminalPanel supports full-width mode

- **WHEN** TerminalPanel is used without constraints
- **THEN** it SHALL fill its container width as a block element

### Requirement: SectionHeader component

The system SHALL provide a SectionHeader component that renders a consistent label + title + description pattern used across pages.

#### Scenario: SectionHeader with all props

- **WHEN** SectionHeader is rendered with label, title, and description
- **THEN** it SHALL display label in uppercase tracking with accent color, followed by title and description in proper hierarchy

#### Scenario: SectionHeader without description

- **WHEN** SectionHeader is rendered without description prop
- **THEN** it SHALL render only label and title without description section

#### Scenario: SectionHeader supports action links

- **WHEN** SectionHeader receives an actionLink prop with label and to/href
- **THEN** it SHALL render a clickable link aligned to the right of the header row
