---
title: CQRS Command Flow
---

# CQRS Command Flow

## Scenario

Understand how a platform operation travels from HTTP/API input to handlers, repositories and events.

## Source Pattern

Modules register command routes with `AddCqrsGateway`, configure Rebus routes and handlers, and publish validation, added, updated, removed or completed events from handlers.

## Steps

1. Register command assemblies with the module API.
2. Add the module command routes to the service bus.
3. Implement a handler for the command.
4. Validate conflicts, authorization and concurrency before writing.
5. Publish validation or completion events for callers and UI modules.

## Expected Result

Every module follows the same operational contract: commands in, validation/completion events out.

