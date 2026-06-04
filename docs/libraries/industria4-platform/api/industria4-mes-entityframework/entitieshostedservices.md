---
title: "EntitiesHostedServices"
---

# EntitiesHostedServices

_internal class_

Namespace: `Industria4.Mes.EntityFramework`

Source: `src/Mes/Mes.EntityFramework/EntitiesHostedServices.cs`

## Constructors

### EntitiesHostedServices

_constructor_

```csharp
EntitiesHostedServices(ILogger<EntitiesHostedServices> logger,Backup<MesContext> backup,IServiceProvider serviceProvider)
```

Initialises the service with the logger, backup helper, and service-scope factory.

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

