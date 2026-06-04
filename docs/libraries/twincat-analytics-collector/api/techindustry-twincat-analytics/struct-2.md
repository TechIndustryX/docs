---
title: "struct"
---

# struct

_public record_

Namespace: `TechIndustry.TwinCAT.Analytics`

Source: `TechIndustry.TwinCAT.Analytics/Timestamp.cs`

## Summary

An immutable value type representing a Windows FILETIME timestamp (100-nanosecond ticks since 1601-01-01 UTC). Supports arithmetic, comparison, and implicit conversion to/from .

## Properties

### DateTimeOffset

_property_

```csharp
DateTimeOffset DateTimeOffset
```

Gets the equivalent of this timestamp.

## Methods

### CompareTo

_method_

```csharp
int CompareTo(object? obj)
```

### CompareTo

_method_

```csharp
int CompareTo(Timestamp other)
```

### long

_method_

```csharp
implicit operator long(Timestamp timestamp)
```

### Timestamp

_method_

```csharp
implicit operator Timestamp(long value)
```

### ToString

_method_

```csharp
string ToString()
```

