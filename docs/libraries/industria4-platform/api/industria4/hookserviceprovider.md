---
title: "HookServiceProvider"
---

# HookServiceProvider

_public class_

Namespace: `Industria4`

Source: `src/Shared/Core/HookServiceProvider.cs`

## Summary

An decorator that allows intercepting resolved services with registered callbacks.

## Constructors

### HookServiceProvider

_constructor_

```csharp
HookServiceProvider(IServiceProvider original)
```

Initializes a new instance of wrapping the given provider. The inner service provider to delegate resolution to.

## Methods

### Add

_method_

```csharp
void Add(Type type,Func<object,object> callback)
```

Registers a callback for a specific service `type`. The service type to intercept. The transform function to apply to the resolved instance.

### Add

_method_

```csharp
void Add<T>(Action<T> callback)
```

Registers a side-effect callback invoked after a service of type `T` is resolved. The service type to intercept. The action to invoke with the resolved instance.

### Add

_method_

```csharp
void Add<T>(Func<T,T> callback)
```

Registers a transform callback that can replace the resolved instance of type `T`. The service type to intercept. A function that receives the resolved instance and returns the replacement.

### GetService

_method_

```csharp
object GetService(Type serviceType)
```

Resolves a service of the given type, running any registered transform callbacks on the result. The type of service to resolve. The (optionally transformed) service instance, or `null` if not registered.

### Remove

_method_

```csharp
void Remove(Type type,Delegate callback)
```

Removes a previously registered callback for a specific service `type`. The service type whose callback should be removed. The callback delegate to deregister.

### Remove

_method_

```csharp
void Remove<T>(Func<T,T> callback)
```

Removes a previously registered transform callback for type `T`. The service type whose callback should be removed. The callback to deregister.

