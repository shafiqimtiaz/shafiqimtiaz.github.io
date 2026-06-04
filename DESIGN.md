# SHAFIQ IMTIAZ // PORTFOLIO

## Mission
Create implementation-ready, token-driven UI guidance for SHAFIQ IMTIAZ // PORTFOLIO that is optimized for consistency, accessibility, and fast delivery across content site.

## Brand
- Product/brand: SHAFIQ IMTIAZ // PORTFOLIO
- URL: https://shafiqimtiaz.vercel.app/
- Audience: readers and knowledge seekers
- Product surface: content site

## Style Foundations
- Visual style: structured, tokenized, content-first
- Main font style: `font.family.primary=JetBrains Mono`, `font.family.stack=JetBrains Mono, SFMono-Regular, Consolas, Liberation Mono, Menlo, monospace`, `font.size.base=16px`, `font.weight.base=400`, `font.lineHeight.base=25.6px`
- Typography scale: `font.size.xs=9.28px`, `font.size.sm=9.6px`, `font.size.md=10.56px`, `font.size.lg=10.88px`, `font.size.xl=11.2px`, `font.size.2xl=11.52px`, `font.size.3xl=12.48px`, `font.size.4xl=12.8px`
- Color palette: `color.text.primary=#f4f7f3`, `color.text.secondary=#9aa39a`, `color.text.tertiary=#8dff7a`, `color.text.inverse=#ffce6b`, `color.surface.base=#000000`, `color.surface.muted=#101210`, `color.surface.raised=#161916`, `color.border.strong=#3c423c`
- Spacing scale: `space.1=4px`, `space.2=8px`, `space.3=12px`, `space.4=14px`, `space.5=16px`, `space.6=20px`, `space.7=24px`, `space.8=28px`
- Radius/shadow/motion tokens: `radius.xs=4px`, `radius.sm=6px`, `radius.md=8px`, `radius.lg=12px` | `motion.duration.instant=150ms`, `motion.duration.fast=200ms`, `motion.duration.normal=700ms`

## Accessibility
- Target: WCAG 2.2 AA
- Keyboard-first interactions required.
- Focus-visible rules required.
- Contrast constraints required.

## Writing Tone
Concise, confident, implementation-focused.

## Rules: Do
- Use semantic tokens, not raw hex values, in component guidance.
- Every component must define states for default, hover, focus-visible, active, disabled, loading, and error.
- Component behavior should specify responsive and edge-case handling.
- Interactive components must document keyboard, pointer, and touch behavior.
- Accessibility acceptance criteria must be testable in implementation.

## Rules: Don't
- Do not allow low-contrast text or hidden focus indicators.
- Do not introduce one-off spacing or typography exceptions.
- Do not use ambiguous labels or non-descriptive actions.
- Do not ship component guidance without explicit state rules.

## Guideline Authoring Workflow
1. Restate design intent in one sentence.
2. Define foundations and semantic tokens.
3. Define component anatomy, variants, interactions, and state behavior.
4. Add accessibility acceptance criteria with pass/fail checks.
5. Add anti-patterns, migration notes, and edge-case handling.
6. End with a QA checklist.

## Required Output Structure
- Context and goals.
- Design tokens and foundations.
- Component-level rules (anatomy, variants, states, responsive behavior).
- Accessibility requirements and testable acceptance criteria.
- Content and tone standards with examples.
- Anti-patterns and prohibited implementations.
- QA checklist.

## Component Rule Expectations
- Include keyboard, pointer, and touch behavior.
- Include spacing and typography token requirements.
- Include long-content, overflow, and empty-state handling.
- Include known page component density: links (40), cards (22), lists (17), buttons (11), navigation (8), inputs (3).


## Quality Gates
- Every non-negotiable rule must use "must".
- Every recommendation should use "should".
- Every accessibility rule must be testable in implementation.
- Teams should prefer system consistency over local visual exceptions.
