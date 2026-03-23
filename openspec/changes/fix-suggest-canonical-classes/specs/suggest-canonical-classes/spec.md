## ADDED Requirements

### Requirement: Filter class suggestions to canonical values

The system SHALL only suggest class names that are part of the canonical utility class set in the suggestion response.

#### Scenario: Classes include deprecated alias name

- **WHEN** class suggestion source has both canonical name `btn-primary` and alias `primary-btn`
- **THEN** the suggestion response SHALL include `btn-primary` and SHALL NOT include `primary-btn`

### Requirement: Resolve aliases to canonical class

The system SHALL map known alias or non-canonical variants to canonical class names before returning suggestions.

#### Scenario: Input class alias exists

- **WHEN** a candidate class alias `m-t-4` exists and canonical is `mt-4`
- **THEN** the system SHALL return `mt-4` instead of `m-t-4`

### Requirement: Preserve canonical suggestions

The system SHALL preserve all canonical class suggestions not identified as deprecated or alias.

#### Scenario: Canonical classes only

- **WHEN** the suggestion source provides `text-red-500`, `bg-blue-100`, `px-4`
- **THEN** the system SHALL return all provided values unchanged

## MODIFIED Requirements

(n/a)
