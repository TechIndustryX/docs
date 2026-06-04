---
title: "DepdendenciesExtensions"
---

# DepdendenciesExtensions

_public class_

Namespace: `Microsoft.Extensions.Hosting`

Source: `src/Shared/Web/Dependencies.cs`

## Summary

Extensions for IWebHost which allow to apply depedency check before running the host

## Methods

### CheckDependencies

_method_

```csharp
IHost CheckDependencies(this IHost host,Action<DependenciesConfiguration> configuration)
```

Configures dependency checks and returns a wrapped host that validates them before starting. The application host. An action that registers instances. A new that runs dependency checks before starting the original host.

