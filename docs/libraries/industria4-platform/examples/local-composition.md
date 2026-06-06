---
title: Local Composition
---

# Local Composition

## Scenario

Run a local platform composition with the services and dependencies required by the modules.

## Source Pattern

The repository README points to `src/Compose/start.ps1`; module startup classes consume configuration and connection strings from the local environment.

## Steps

1. Prepare Docker Desktop and the configured package feeds.
2. Build the platform source set.
3. Start the local composition under `src/Compose`.
4. Verify that module processes receive the expected environment variables.
5. Use the platform URLs exposed by the composition for module validation.

## Expected Result

Developers can run the same module contracts used by production-oriented services without deploying the full environment.

