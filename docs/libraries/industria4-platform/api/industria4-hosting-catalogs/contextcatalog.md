---
title: "ContextCatalog"
---

# ContextCatalog

_public class_

Namespace: `Industria4.Hosting.Catalogs`

Source: `src/Shared/Hosting/Catalogs/ContextCatalog.cs`

## Summary

Abstract base catalog that loads assemblies into an and resolves satellite assemblies.

## Constructors

### ContextCatalog

_constructor_

```csharp
ContextCatalog(bool create)
```

Initialises a new context catalog, optionally creating an isolated . Reserved; must be `false`. Passing `true` throws .

## Methods

### Dispose

_method_

```csharp
void Dispose()
```

### GetStreams

_method_

```csharp
IEnumerable<ContextCatalogItem> GetStreams()
```

