---
title: "EntitiesHostedServices"
---

# EntitiesHostedServices

_internal class_

Namespace: `Industria4.Sequences.EntityFramework`

Source: `src/Sequences/Sequences.EntityFramework/EntitiesHostedServices.cs`

## Constructors

### EntitiesHostedServices

_constructor_

```csharp
EntitiesHostedServices(ILogger<EntitiesHostedServices> logger,Backup<SequencesContext> backup,IServiceProvider serviceProvider)
```

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

