---
title: "ServicesExtensions"
---

# ServicesExtensions

_public class_

Namespace: `Microsoft.Extensions.DependencyInjection`

Source: `src/Shared/EntityFramework/ServicesExtensions.cs`

## Summary

Extension methods for that register Entity Framework services.

## Methods

### AddDbContextBackup

_method_

```csharp
IServiceCollection AddDbContextBackup(this IServiceCollection services)
```

Registers as a singleton, enabling automatic scheduled backups for the specified type. The service collection to add to. The same so that calls can be chained.

