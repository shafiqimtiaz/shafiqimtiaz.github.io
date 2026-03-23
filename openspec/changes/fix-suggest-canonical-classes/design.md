## Context

The current class suggestion/autocomplete subsystem accepts multiple utility class variants and may return non-canonical forms (aliases or deprecated names). This can lead to inconsistent styling and developer confusion as the suggestion set diverges from the canonical CSS framework.

## Goals / Non-Goals

**Goals:**

- Enforce and document canonical class suggestion behavior.
- Ensure the suggestion service returns deterministic canonical names only.
- Add test coverage for canonical/filtered suggestions.

**Non-Goals:**

- Restructuring the entire styling engine.
- Rewriting the UI component library; focus is on suggestion filtering only.

## Decisions

1. Centralized canonical resolver

- Keep an authoritative mapping of canonical class keys and aliases.
- Suggestion pipeline resolves candidate classes against this mapping; only canonical classes are emitted.
- Rationale: Single source of truth avoids divergent behavior across modules.

2. Preserve existing suggestions contract

- API output remains a list of class names; semantics unchanged.
- Existing consumers should continue to work with greedy no-op filter behavior when all classes are canonical.

3. Provide fallback logging for invalid suggestions

- Non-canonical suggestions are dropped and optionally logged in debug mode for diagnostics.
- Rationale: avoids exposing broken values while allowing issue triage.

## Risks / Trade-offs

- [Risk] Existing consumers may rely on alias names in workflows.
  → Mitigation: keep alias-to-canonical mapping and optionally offer opt-in legacy alias mode.

- [Risk] Performance overhead from canonical validation
  → Mitigation: use fast in-memory lookup set and memoize common queries.

- [Risk] Potential mismatch with CSS framework updates
  → Mitigation: include configuration for canonical list updates and automated test coverage.
