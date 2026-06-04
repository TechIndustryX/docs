---
title: "ModulesLoaderHostedService"
---

# ModulesLoaderHostedService

_public class_

Namespace: `Industria4.Hosting.Startup`

Source: `src/Hosting/Hosting.Startup/ModulesLoaderHostedService.cs`

## Summary

A hosted service that triggers module loading when the application starts and license is valid.

## Constructors

### ModulesLoaderHostedService

_constructor_

```csharp
ModulesLoaderHostedService(IServiceProvider serviceProvider,ILogger<ModulesLoaderHostedService> logger,LicenseManager licenseManager)
```

Initializes a new instance of with the required dependencies.

## Properties

### ModulesLoaderTask

_property_

```csharp
Task ModulesLoaderTask
```

Gets the background task that represents the ongoing module loading operation, or if not started.

## Methods

### StartAsync

_method_

```csharp
Task StartAsync(CancellationToken cancellationToken)
```

### StopAsync

_method_

```csharp
Task StopAsync(CancellationToken cancellationToken)
```

