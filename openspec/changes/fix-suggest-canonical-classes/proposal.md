## Why

The CSS utility class suggestion feature currently includes duplicate or non-standard class variants, causing inconsistent UI styling and poor developer DX. Fixing canonical class suggestion ensures accurate, predictable class recommendations and reduces styling mistakes.

## What Changes

- Add validation layer for suggested utility classes to ensure only canonical class names are proposed.
- Filter out deprecated, alias, or non-canonical class variants in autocomplete and suggestion APIs.
- Add a new spec for canonical class suggestion behavior.

## Capabilities

### New Capabilities

- `suggest-canonical-classes`: Defines rules for suggesting only canonical CSS utility classes in class search and autocomplete features.

### Modified Capabilities

- (none)

## Impact

- Affects class suggestion engine and autocomplete module.
- May touch component rendering layers if style decision transforms rely on suggested classes.
- Influences tests around class suggestion output and validation.
