---
title: "AsyncEventHandlerExtensions"
---

# AsyncEventHandlerExtensions

_public class_

Namespace: `Industria4`

Source: `src/Shared/Core/AsyncEventHandler.cs`

## Summary

Extension methods for .

## Methods

### InvokeAsync

_method_

```csharp
Task InvokeAsync<T>(this AsyncEventHandler<T> eventHandler,object sender,T args)
```

Invokes all subscribed handlers sequentially and awaits each one. The event argument type. The delegate multicast to invoke, or `null`. The source of the event. The event data.

