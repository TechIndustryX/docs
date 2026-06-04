---
title: "LogAnalyticsExtensions"
---

# LogAnalyticsExtensions

_public class_

Namespace: `Microsoft.Extensions.DependencyInjection`

Source: `Azure.Monitor.Collector/LogAnalyticsExtensions.cs`

## Summary

Extension methods for registering with the DI container.

## Methods

### AddLogAnalyticsCollector

_method_

```csharp
IServiceCollection AddLogAnalyticsCollector(this IServiceCollection services,Action<LogAnalyticsOptions>? options)
```

Registers with an optional configuration action. The service collection to add to. Optional action to configure . The same for chaining.

### AddLogAnalyticsCollector

_method_

```csharp
IServiceCollection AddLogAnalyticsCollector(this IServiceCollection services)
```

Registers with default options. The same for chaining.

