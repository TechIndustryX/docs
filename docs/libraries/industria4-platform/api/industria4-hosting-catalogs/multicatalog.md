---
title: "MultiCatalog"
---

# MultiCatalog

_public class_

Namespace: `Industria4.Hosting.Catalogs`

Source: `src/Shared/Hosting/Catalogs/MultiCatalog.cs`

## Summary

Aggregates multiple instances and exposes their items as a single enumerable.

## Constructors

### MultiCatalog

_constructor_

```csharp
MultiCatalog(params ICatalog[] catalogs)
```

Initializes a new instance that delegates to the given catalogs. The catalogs to aggregate.

