---
title: "MonitorComponentBase"
---

# MonitorComponentBase

_public class_

Namespace: `Industria4.Web.Forms.Components`

Source: `src/Shared/Web.Forms/Components/MonitorComponentBase.cs`

## Summary

Base Blazor component that tracks observable changes on registered objects and triggers state re-renders on changes.

## Constructors

### MonitorComponentBase

_constructor_

```csharp
MonitorComponentBase()
```

Initialises the component and sets up the internal change tracker.

## Methods

### Dispose

_method_

```csharp
void Dispose()
```

### Dispose

_method_

```csharp
void Dispose(bool disposing)
```

### MonitorChanges

_method_

```csharp
void MonitorChanges(object obj,bool dispose)
```

Begins tracking changes on `obj`, optionally disposing it when this component is disposed. The object to track. When `true`, the object is disposed together with this component.

### MonitorChanges

_method_

```csharp
void MonitorChanges(object obj)
```

Begins tracking changes on `obj` without disposing it when this component is disposed. The object to track.

### OnParametersSetAsync

_method_

```csharp
Task OnParametersSetAsync()
```

