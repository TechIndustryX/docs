---
title: Examples
---

# Industria4 Platform Examples

These examples explain how to assemble and operate a platform installation using the modules and architectural patterns from the repository.

## Learning Path

1. [Local Composition](./local-composition.md): run the core services together for a local environment.
2. [Module Hosting](./module-hosting.md): load platform modules through the hosting layer.
3. [Backend Module](./backend-module.md): create a process-hosted backend module.
4. [Frontend Module](./frontend-module.md): create a Blazor client module with menu registration.
5. [Module Definition](./module-definition.md): understand module lifecycle and when to use each module type.
6. [Dependency Injection](./dependency-injection.md): register module services through `StartupService`.
7. [Section Provider](./section-provider.md): extend frontend screens with module-provided sections.
8. [Web Forms Controls](./webforms-controls.md): use the shared Blazor Web Forms controls.
9. [Command Messaging](./command-messaging.md): define and send CQRS commands.
10. [Standardized API and OData](./standardized-api-odata.md): expose API endpoints, OData queries and typed HTTP clients.
11. [Identity Users Roles](./identity-users-roles.md): configure users, roles and authorization boundaries.
12. [CQRS Command Flow](./cqrs-command-flow.md): send commands and observe resulting events.
13. [Recipes and MES](./recipes-and-mes.md): model recipes and connect them to MES flows.
14. [OPC UA Data Logger](./opcua-data-logger.md): collect machine data from OPC UA.
15. [Production Composition](./production-composition.md): compose a production deployment.

## Platform Shape

```mermaid
flowchart LR
  web["Web apps"] --> gateway["Gateway"]
  gateway --> modules["Hosted modules"]
  modules --> cqrs["CQRS bus"]
  modules --> data["Data access"]
  modules --> opcua["OPC UA / data logger"]
  modules --> mes["MES / recipes"]
```

## Recommended Order For New Modules

When adding a new capability, create it in this order:

1. Define the backend API module and its `StartupService`.
2. Define commands, handlers and read models.
3. Expose the API with standard controllers and OData query endpoints.
4. Create the typed HTTP client.
5. Create the frontend module, dynamic routes and menu entries.
6. Add section providers only when another screen must be extended.
7. Register all services through the module `StartupService`.
