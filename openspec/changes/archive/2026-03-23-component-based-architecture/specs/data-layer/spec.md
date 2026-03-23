## ADDED Requirements

### Requirement: Projects data module

The system SHALL provide a projects.js data module exporting caseStudies and miniProjects arrays for use across pages.

#### Scenario: caseStudies export

- **WHEN** projects.js is imported
- **THEN** it SHALL export caseStudies array containing all project case study objects with title, description, tags, highlights, and action links

#### Scenario: miniProjects export

- **WHEN** projects.js is imported
- **THEN** it SHALL export miniProjects array containing all mini project objects with name, description, and href

#### Scenario: Data structure matches current usage

- **WHEN** any page imports caseStudies or miniProjects
- **THEN** the data structure SHALL be identical to current inline definitions, requiring no changes to consuming components

### Requirement: Experience data module

The system SHALL provide an experience.js data module exporting timeline and techStack arrays for the About page.

#### Scenario: timeline export

- **WHEN** experience.js is imported
- **THEN** it SHALL export timeline array containing career history entries with date, title, org, icon, details, and accent properties

#### Scenario: techStack export

- **WHEN** experience.js is imported
- **THEN** it SHALL export techStack array containing skill category objects with icon, title, code, items, and accent properties

#### Scenario: Data structure matches current usage

- **WHEN** About page imports timeline or techStack
- **THEN** the data structure SHALL be identical to current inline definitions

### Requirement: Stats data module

The system SHALL provide a stats.js data module exporting all statistics arrays used across pages.

#### Scenario: Home stats export

- **WHEN** stats.js is imported
- **THEN** it SHALL export homeStats array for Home page deployment history section

#### Scenario: About stats export

- **WHEN** stats.js is imported
- **THEN** it SHALL export aboutStats array for About page profile section

#### Scenario: Consistent structure

- **WHEN** any stats array is imported
- **THEN** each item SHALL have value, label, and accent properties matching current inline definitions

### Requirement: Links data module

The system SHALL provide a links.js data module exporting navigation and external link configurations.

#### Scenario: navLinks export

- **WHEN** links.js is imported
- **THEN** it SHALL export navLinks array for primary navigation (HOME, PROJECTS, ABOUT, CONTACT)

#### Scenario: utilityLinks export

- **WHEN** links.js is imported
- **THEN** it SHALL export utilityLinks array for header utility icons (RESUME, EMAIL, GITHUB, LINKEDIN)

#### Scenario: externalNodes export

- **WHEN** links.js is imported
- **THEN** it SHALL export externalNodes array for Contact page external links

#### Scenario: systemStatus export

- **WHEN** links.js is imported
- **THEN** it SHALL export systemStatus array for Contact page availability display

#### Scenario: infoColumns export

- **WHEN** links.js is imported
- **THEN** it SHALL export infoColumns array for Contact page information columns
