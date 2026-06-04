---
title: "LeakingThisInterceptor"
---

# LeakingThisInterceptor

_public class_

Namespace: `Industria4.Caching.Interceptors`

Source: `src/Shared/Caching/Interceptors/LeakingThisInterceptor.cs`

## Summary

Interceptor that replaces a return value equal to the invocation target with the proxy, preventing accidental escape of the unwrapped target.

## Methods

### Intercept

_method_

```csharp
void Intercept(IInvocation invocation)
```

