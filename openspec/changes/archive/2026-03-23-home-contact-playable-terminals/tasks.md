## 1. Interaction Model Setup

- [x] 1.1 Define shared terminal interaction state model (`idle`, `suggesting`, `executing`, `rendered`) and action data contract.
- [x] 1.2 Add or update Home and Contact terminal action datasets to include command label, command text, output payload, and `delayMs` defaulted to 2000.
- [x] 1.3 Wire bounded command resolution so only predefined actions can execute.

## 2. Autocomplete Experience

- [x] 2.1 Implement hover-triggered autocomplete visibility on the CLI header and command interaction zones for `SHAFIQ_PORTFOLIO_BASH` and `SESSION: DIRECT_CONTACT_V2.0`.
- [x] 2.2 Implement keyboard-focus-triggered autocomplete visibility with accessible focus handling and semantics.
- [x] 2.3 Render Bash-style suggestion UI that reuses existing terminal visual language and avoids layout shifts.

## 3. Delayed Output Playback

- [x] 3.1 Implement command selection handling that transitions the terminal into executing state.
- [x] 3.2 Add 2-second delayed output rendering logic with timer cleanup/cancellation to prevent stale updates.
- [x] 3.3 Display mapped output payload for selected command in both Home and Contact terminals, and ensure unsupported commands resolve to bounded fallback behavior.

## 4. Validation and Hardening

- [ ] 4.1 Manually validate mouse and keyboard flows for suggestion reveal and delayed output playback on desktop and mobile breakpoints.
- [ ] 4.2 Add or update component-level tests for state transitions, 2-second delay behavior, and command bounding rules.
- [ ] 4.3 Run project quality checks (`npm run build` and available test command) and fix regressions introduced by the change.
