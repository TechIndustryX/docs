---
title: "BinaryDataConverter"
---

# BinaryDataConverter

_internal class_

Namespace: `TechIndustry.Streaming.AzureFunctions.Services`

Source: `TechIndustry.Streaming.AzureFunctions/Services/BinaryDataConverter.cs`

## Methods

### Read

_method_

```csharp
BinaryData? Read(ref Utf8JsonReader reader,Type typeToConvert,JsonSerializerOptions options)
```

### Write

_method_

```csharp
void Write(Utf8JsonWriter writer,BinaryData value,JsonSerializerOptions options)
```

