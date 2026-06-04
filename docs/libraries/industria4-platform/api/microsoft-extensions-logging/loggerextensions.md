---
title: "LoggerExtensions"
---

# LoggerExtensions

_public class_

Namespace: `Microsoft.Extensions.Logging`

Source: `src/Shared/Logging/LoggerExtensions.cs`

## Summary

Extension methods for that add performance timing helpers.

## Methods

### CreateStopwatch

_method_

```csharp
IDisposable CreateStopwatch(this ILogger logger,string message = null,params object[] args)
```

Creates a stopwatch scope that logs the elapsed time at when disposed. If the logger has debug logging disabled a lightweight no-op disposable is returned instead. The logger to write the timing entry to. An optional structured-log message template. The elapsed milliseconds are appended automatically. Optional arguments for the message template. An scope; dispose it to record the elapsed time.

