## Why

The terminal panels on both Home and Contact pages present mostly static content and do not yet behave like an interactive CLI. Making both sessions playable improves realism, discoverability, and user engagement.

## What Changes

- Add interactive terminal playback for both `SHAFIQ_PORTFOLIO_BASH` (Home) and `SESSION: DIRECT_CONTACT_V2.0` (Contact).
- Add hover/focus-triggered Bash autocomplete suggestions when the pointer or focus is on the CLI header or command input area.
- Add delayed command execution output animation so selected interactions render output after a 2-second wait.
- Ensure behavior works with both mouse and keyboard interaction and preserves the current terminal visual language across both pages.

## Capabilities

### New Capabilities

- `home-contact-terminal-playback`: Defines shared playable terminal behavior including contextual autocomplete hints and delayed output rendering for Home and Contact terminal sessions.

### Modified Capabilities

- None.

## Impact

- Affected UI modules in `src/pages/Home/` and `src/pages/Contact/`, plus reusable terminal UI components in `src/components/ui/`.
- Potential updates to terminal interaction data structures to represent commands, suggestions, and output timeline.
- No backend or external API changes expected.
