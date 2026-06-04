---
title: "GuidJsonConverter"
---

# GuidJsonConverter

_public class_

Namespace: `TechIndustry.TwinCAT.Analytics.Collector.Json`

Source: `TechIndustry.TwinCAT.Analytics.Collector/Json/GuidJsonConverter.cs`

## Summary

A that serializes and deserializes nullable values as JSON strings.

## Methods

### Read

_method_

```csharp
Guid? Read(ref Utf8JsonReader reader,Type typeToConvert,JsonSerializerOptions options)
```

### Write

_method_

```csharp
void Write(Utf8JsonWriter writer,Guid? value,JsonSerializerOptions options)
```

