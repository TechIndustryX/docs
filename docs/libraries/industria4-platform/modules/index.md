---
title: Modules
---

# Industria4 Platform Modules

Industria4 is assembled from modules. A module can be a process hosted by the platform shell, a Blazor client package loaded into the web UI, or an in-process extension loaded by another service such as OPC UA.

Use this section when you need to decide which built-in module to install, extend or use as a template for a custom module.

## Runtime Types

| Type | Manifest | Runtime | Use it for |
|---|---|---|---|
| Web host | `Hosting.WebApp.Server` | ASP.NET Core shell | package upload, module catalog, static files, SignalR messaging and web UI hosting |
| Backend process module | `*.WebApi.Hosting/package.json` | child process launched by `ProcessModule` | bounded-context APIs such as Recipes, MES, Identity, OPC UA, Production |
| Client module | `package.json` with `Type: Client` | Blazor WebAssembly shell | menu items, pages, section providers, frontend services |
| Service extension | `package.json` with `TargetProcessNames` | loaded into a target process | OPC UA middleware, data collection, machine-specific write/read transforms |
| Container module | `module.json` | IoT Edge/container build | GHCR images for deployable platform services |

## Built-In Module Catalog

Start with [Built-In Modules](./built-in-modules.md) for a detailed module-by-module overview.

## How Modules Are Loaded

1. The host reads package metadata from the module catalog.
2. `EntryPoint` identifies the assembly to load.
3. The host searches for `IStartupService`.
4. `IStartupService.ConfigureServices` registers module services into DI.
5. Backend packages usually register a `ProcessModule`.
6. Client packages register `IClientModule`, routes, view models and optional `ISectionsProvider`.
7. Service extensions register middleware, hosted services or in-process modules.
8. `DefaultConfiguration` is merged into runtime configuration and can be overridden per environment.

## Related Examples

- [Frontend Local Hosting](../examples/frontend-local-hosting.md)
- [Backend Module](../examples/backend-module.md)
- [Frontend Module](../examples/frontend-module.md)
- [Module Definition](../examples/module-definition.md)
- [Module Packaging](../examples/module-packaging.md)
- [Section Provider](../examples/section-provider.md)
