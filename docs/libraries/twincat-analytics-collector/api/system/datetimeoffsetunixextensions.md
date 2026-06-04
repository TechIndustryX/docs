---
title: "DateTimeOffsetUnixExtensions"
---

# DateTimeOffsetUnixExtensions

_public class_

Namespace: `System`

Source: `TechIndustry.TwinCAT.Analytics/DateTimeOffsetUnixExtensions.cs`

## Summary

Extension methods that convert a to Unix epoch values at various precisions.

## Methods

### ToUnixTimeMicroseconds

_method_

```csharp
long ToUnixTimeMicroseconds(this DateTimeOffset dto)
```

Returns the number of whole microseconds elapsed since the Unix epoch.

### ToUnixTimeMilliseconds

_method_

```csharp
long ToUnixTimeMilliseconds(this DateTimeOffset dto)
```

Returns the number of whole milliseconds elapsed since the Unix epoch.

### ToUnixTimeNanoseconds

_method_

```csharp
long ToUnixTimeNanoseconds(this DateTimeOffset dto)
```

Returns the number of whole nanoseconds elapsed since the Unix epoch.

### ToUnixTimeSeconds

_method_

```csharp
long ToUnixTimeSeconds(this DateTimeOffset dto)
```

Returns the number of whole seconds elapsed since the Unix epoch.

