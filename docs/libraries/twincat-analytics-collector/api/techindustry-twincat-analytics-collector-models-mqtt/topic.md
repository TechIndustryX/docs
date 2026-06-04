---
title: "Topic"
---

# Topic

_public struct_

Namespace: `TechIndustry.TwinCAT.Analytics.Collector.Models.Mqtt`

Source: `TechIndustry.TwinCAT.Analytics.Collector/Models/Mqtt/Topic.cs`

## Summary

An immutable, case-insensitive MQTT topic path that supports segment-based comparison and composition operations.

## Constructors

### Topic

_constructor_

```csharp
Topic(string value)
```

Initializes a from a slash-delimited `value`, stripping leading and trailing separators.

## Properties

### Segments

_property_

```csharp
IReadOnlyList<string> Segments
```

Gets the individual path segments that make up this topic.

### Value

_property_

```csharp
string Value
```

Gets the normalized string representation of this topic path.

## Methods

### Combine

_method_

```csharp
Topic Combine(Topic subTopic)
```

Returns a new formed by appending `subTopic` to this topic.

### Contains

_method_

```csharp
bool Contains(Topic partialTopic)
```

Returns if this topic contains `partialTopic` as a contiguous sub-sequence of segments (case-insensitive).

### EndsWith

_method_

```csharp
bool EndsWith(Topic endTopic)
```

Returns if this topic ends with `endTopic` (case-insensitive segment comparison).

### Equals

_method_

```csharp
bool Equals(object? obj)
```

### Equals

_method_

```csharp
bool Equals(Topic other)
```

### GetHashCode

_method_

```csharp
int GetHashCode()
```

### StartsWith

_method_

```csharp
bool StartsWith(Topic startTopic)
```

Returns if this topic starts with `startTopic` (case-insensitive segment comparison).

### ToString

_method_

```csharp
string ToString()
```

