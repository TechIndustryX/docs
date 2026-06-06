---
title: Module Hosting
---

# Module Hosting

## Scenario

Register and load platform modules through the shared hosting layer.

## Source Pattern

`ModulesLoaderHostedService` creates a scope and calls `ModulesLoader.LoadAsync` during application startup. Hosted modules such as `Identity.WebApi.Hosting.WebApiModule` inherit from `ProcessModule` and expose process name, working directory and environment.

## Steps

1. Implement or configure an `IModule` or `ProcessModule`.
2. Register the module from its startup service.
3. Provide environment variables from the relevant configuration section.
4. Let `ModulesLoaderHostedService` load modules at application start.
5. Monitor logs for loading failures and process start errors.

## Expected Result

Modules are loaded by the host consistently instead of being started with ad-hoc process scripts.
