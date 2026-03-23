## ADDED Requirements

### Requirement: Terminal session exposes contextual autocomplete

The system SHALL display command autocomplete options when the user hovers over or focuses on terminal CLI header and command-entry interaction zones for both `SHAFIQ_PORTFOLIO_BASH` and `SESSION: DIRECT_CONTACT_V2.0`.

#### Scenario: Pointer reveals autocomplete options

- **WHEN** the user places the pointer over the CLI header or command interaction region
- **THEN** the system shows one or more Bash-style autocomplete options relevant to available actions for the active terminal session

#### Scenario: Keyboard focus reveals autocomplete options

- **WHEN** the user tabs to the CLI header trigger or command interaction region
- **THEN** the system shows the same autocomplete options without requiring pointer interaction

### Requirement: Command execution output is delayed by two seconds

The system MUST render command execution output with a 2-second delay animation after the user selects an autocomplete option or executable command action.

#### Scenario: Selecting an option starts delayed execution

- **WHEN** the user activates an available autocomplete option
- **THEN** the system transitions into an executing state and displays the corresponding command output after 2 seconds

#### Scenario: Delay is deterministic across interactions

- **WHEN** the user executes multiple supported actions in separate attempts across Home and Contact terminal sessions
- **THEN** each action output appears using the same 2-second delay behavior unless explicitly configured otherwise by the action data

### Requirement: Interactive terminal remains bounded to supported commands

The system SHALL limit execution to predefined commands and outputs configured for each terminal session.

#### Scenario: Unsupported free-text input is not executed

- **WHEN** the user enters or attempts an unsupported command
- **THEN** the system does not execute arbitrary logic and instead shows either no-op behavior or a bounded fallback message

#### Scenario: Supported actions map to known outputs

- **WHEN** the user triggers a supported command action
- **THEN** the system renders only the output mapped to that command in the active session configuration
