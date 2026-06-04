---
title: "QuickGridExtensions"
---

# QuickGridExtensions

_public class_

Namespace: `Industria4.Web.Forms.Components`

Source: `src/Shared/Web.Forms/Extensions/QuickGridExtensions.cs`

## Summary

Extension methods for that persist and restore column layout in browser local storage.

## Methods

### SaveLayoutToStorageAsync

_method_

```csharp
ValueTask SaveLayoutToStorageAsync<T>(this QuickGrid<T> grid,IJSRuntime jsRuntime,string id)
```

Saves the current grid layout to browser local storage under the given identifier. The grid item type. The grid whose layout to save. JS interop runtime. Storage key suffix that uniquely identifies this grid. A representing the async write.

