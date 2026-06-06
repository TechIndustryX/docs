---
title: Production Composition
---

# Production Composition

## Scenario

Define a production composition that groups model and recipe references into a deployable production structure.

## Source Pattern

`CompositionHandler` handles `AddOrUpdateCompositionCommand`, validates deleted conflicts and duplicate descriptions, builds composition items and publishes added or updated events.

## Steps

1. Build an add/update composition command.
2. Include localized descriptions, metadata and tags.
3. Add composition items with model and recipe references.
4. Validate description uniqueness.
5. Store the composition and consume completion events.

## Expected Result

Production definitions can be versioned and updated through the same repository and CQRS patterns as other modules.

