---
title: "ComponentsHookExtensions"
---

# ComponentsHookExtensions

_public class_

Namespace: `Industria4.Web.Forms.Components`

Source: `src/Shared/Web.Forms/Components/ComponentsHookExtensions.cs`

## Summary

Extension methods for that simplify adding typed component hooks.

## Methods

### AddDataGridColumnHookAsync

_method_

```csharp
Task AddDataGridColumnHookAsync<T,TProp>(this ComponentsHook componentsHook,Expression<Func<T,TProp>> property,Action<DataGridPropertyColumn<T,TProp>> hook,bool includeHistory = false)
```

Registers a hook for a specific data-grid property column identified by a property expression. The grid item type. The property type. The components hook service. Expression identifying the column property. Callback invoked for the matching column. When `true`, the hook is immediately replayed for already-rendered columns.

### AddDataGridHookAsync

_method_

```csharp
Task AddDataGridHookAsync<T>(this ComponentsHook componentsHook,Action<DataGrid<T>> hook,bool includeHistory = false)
```

Registers a hook for any component. The grid item type. The components hook service. Callback invoked for every matching data grid. When `true`, the hook is immediately replayed for already-rendered grids.

### AddHookAsync

_method_

```csharp
Task AddHookAsync<T>(this ComponentsHook componentsHook,Action<T> hook,bool includeHistory = false)
```

Registers a synchronous hook for component type `T`. The component type to hook into. The components hook service. The synchronous callback to invoke. When `true`, the hook is immediately replayed for already-rendered components.

### ForModel

_method_

```csharp
ModelComponentsHook<T> ForModel<T>(this ComponentsHook componentsHook)
```

Returns a model-scoped hook builder for the given model type `T`. The model type to scope hooks to. The components hook service. A for chaining model-specific hooks.

