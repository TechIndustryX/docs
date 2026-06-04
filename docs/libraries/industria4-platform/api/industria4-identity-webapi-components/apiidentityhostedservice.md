---
title: "ApiIdentityHostedService"
---

# ApiIdentityHostedService

_public class_

Namespace: `Industria4.Identity.WebApi.Components`

Source: `src/Identity/Identity.WebApi/Components/ApiIdentityHostedService.cs`

## Summary

Hosted service that seeds identity roles and users from configuration on application startup.

## Constructors

### ApiIdentityHostedService

_constructor_

```csharp
ApiIdentityHostedService(IServiceProvider serviceProvider)
```

Initializes a new instance of . The application service provider used to resolve scoped services.

## Methods

### StartAsync

_method_

```csharp
Task StartAsync(CancellationToken cancellationToken)
```

Seeds configured roles and users into the identity store. A token to observe for cancellation.

### StopAsync

_method_

```csharp
Task StopAsync(CancellationToken cancellationToken)
```

No-op; this service performs all work during startup. A token to observe for cancellation. A completed task.

