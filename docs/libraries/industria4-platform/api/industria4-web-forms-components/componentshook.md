---
title: "ComponentsHook"
---

# ComponentsHook

_public class_

Namespace: `Industria4.Web.Forms.Components`

Source: `src/Shared/Web.Forms/Components/ComponentsHook.cs`

## Summary

Scoped service that allows external code to register callbacks for Blazor component parameter-set events, with optional history replay.

## Methods

### AddHookAsync

_method_

```csharp
Task AddHookAsync<T>(Func<T,Task> hook,bool includeHistory = false)
```

Registers an async hook that is called each time a component of type `T` has its parameters set. The component type to hook into. The async callback to invoke. When `true`, the hook is immediately replayed for all previously rendered components of the same type.

### Dispose

_method_

```csharp
void Dispose()
```

### RaiseParameterSetAsync

_method_

```csharp
Task RaiseParameterSetAsync(IComponent component)
```

Invokes all registered hooks for the given component and records it in the history. The component whose parameters have just been set.

### Remove

_method_

```csharp
void Remove(IComponent component)
```

Removes a specific component instance from the history so that future hooks with `includeHistory: true` do not replay it. The component instance to remove.

### RemoveHook

_method_

```csharp
void RemoveHook<T>(Func<T,Task> hook)
```

Removes a previously registered hook for component type `T`. The component type the hook was registered for. The callback to remove.

