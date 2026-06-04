---
title: "ComponentHook<T>"
---

# ComponentHook&lt;T&gt;

_public class_

Namespace: `Industria4.Web.Forms.Components`

Source: `src/Shared/Web.Forms/Components/ComponentHook.cs`

## Summary

Blazor component that wraps another component and forwards parameter-set notifications through . The type of the target component to hook into.

## Properties

### Child

_property_

```csharp
T Child
```

Gets or sets the target component whose parameter changes are monitored.

### ComponentsHook

_property_

```csharp
ComponentsHook ComponentsHook
```

Gets or sets the injected components hook service.

## Methods

### OnParametersSetAsync

_method_

```csharp
Task OnParametersSetAsync()
```

