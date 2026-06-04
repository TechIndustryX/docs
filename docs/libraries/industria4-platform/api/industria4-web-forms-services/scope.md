---
title: "Scope"
---

# Scope

_public class_

Namespace: `Industria4.Web.Forms.Services`

Source: `src/Shared/Web.Forms/Services/MenuService.cs`

## Summary

Snapshot scope that clears the menu collections on enter and restores them on dispose.

## Constructors

### Scope

_constructor_

```csharp
Scope(IList<MenuItem> items,IList<MenuItem> bottomItems)
```

Clears the menu items, saving the current contents for later restoration. The main items collection. The bottom items collection.

## Methods

### Dispose

_method_

```csharp
void Dispose()
```

