---
title: "TimestampJsonConverter"
---

# TimestampJsonConverter

_public class_

Namespace: `TechIndustry.TwinCAT.Analytics`

Source: `TechIndustry.TwinCAT.Analytics/Timestamp.cs`

## Summary

Converts values to/from their underlying JSON representation.

## Methods

### Read

_method_

```csharp
Timestamp Read(ref Utf8JsonReader reader,Type typeToConvert,JsonSerializerOptions options)
```

### Write

_method_

```csharp
void Write(Utf8JsonWriter writer,Timestamp value,JsonSerializerOptions options)
```

