## Context

The Home and Contact pages render terminal-themed panels with mostly static command text and links. Users cannot meaningfully interact with prompt areas to simulate command discovery or command execution. The desired behavior is session-like interaction for both `SHAFIQ_PORTFOLIO_BASH` and `SESSION: DIRECT_CONTACT_V2.0` without introducing backend dependencies.

## Goals / Non-Goals

**Goals:**

- Deliver playable terminal interactions for both Home and Contact pages while preserving their existing shell identity.
- Show contextual Bash autocomplete options when the user hovers or focuses on the CLI header or input zone.
- Animate command output after a 2-second delay when an autocomplete option or command action is selected.
- Preserve accessibility with keyboard-triggered interaction and clear focus states.
- Keep behavior deterministic and data-driven so content can be updated without rewriting core interaction logic.

**Non-Goals:**

- Building a full shell emulator with arbitrary command parsing.
- Introducing server-side execution or dynamic command evaluation.
- Changing overall page IA, routing, or theme system.

## Decisions

1. Use a finite interaction state model for terminal playback.

- Decision: Implement explicit states such as `idle`, `suggesting`, `executing`, and `rendered`.
- Rationale: Prevents race conditions between hover/focus events and delayed output transitions.
- Alternative considered: Ad-hoc booleans (`showSuggestions`, `loading`, `done`) were rejected due to increased branching complexity.

2. Trigger autocomplete from both pointer and keyboard focus on terminal header/input region.

- Decision: Bind interaction handlers to semantic container and focusable trigger elements.
- Rationale: Meets behavior expectation from hover and focus while preserving keyboard accessibility.
- Alternative considered: Pointer-only interaction was rejected because it excludes keyboard users.

3. Model command suggestion and output content as structured data.

- Decision: Represent each action with `{label, command, output, delayMs}`; default `delayMs=2000`.
- Rationale: Supports reusable rendering and future extension to additional terminal sessions.
- Alternative considered: Hardcoded JSX blocks were rejected due to poor maintainability.

4. Use timed staged output rendering with cancellation guard.

- Decision: Use timer-based transition to render output exactly after 2 seconds and cancel pending timer on state resets/unmount.
- Rationale: Guarantees consistent animation timing and avoids stale updates.
- Alternative considered: CSS-only delay was rejected because business state still requires JS orchestration.

5. Reuse a shared interaction engine with per-session datasets.

- Decision: Build one interaction model and renderer behavior, with separate command/action datasets for Home and Contact.
- Rationale: Keeps behavior consistent while allowing each terminal to expose different commands and output.
- Alternative considered: Duplicating interaction logic in each page component was rejected due to drift and maintenance cost.

6. Preserve visual identity and avoid disruptive layout shifts.

- Decision: Reuse existing terminal panel components, adding interaction layers and subtle staged transitions only.
- Rationale: Delivers requested behavior without redesigning the Contact page.

## Risks / Trade-offs

- [Rapid hover/focus transitions can retrigger timers] -> Debounce suggestion visibility and cancel existing timers before scheduling new execution.
- [Accessibility regressions in keyboard navigation] -> Ensure interactive elements are reachable with Tab and expose clear labels/roles.
- [UI feels too scripted if delay is rigid] -> Keep 2s as default but structure data to allow per-command delay tuning in future.
- [Component complexity growth in page files] -> Extract and reuse a shared hook/helper across Home and Contact terminal sections.

## Migration Plan

- Implement shared interaction state and action data contracts, then wire datasets for Home and Contact terminal sections.
- Validate behavior manually for mouse and keyboard interactions in dev build.
- Add/update tests for state transitions and delayed output timing if test harness exists.
- Deploy with no data migration needed.
- Rollback strategy: revert component/hook updates in both terminal sections to restore static behavior.

## Open Questions

- Should autocomplete appear as inline ghost text, dropdown list, or command palette-style menu within current terminal shell?
- Should repeated command selections append a command history log, or should each interaction replace the current output block?
- Should delay animation run for every command equally, or only for commands marked as “remote/network-like” in data?
