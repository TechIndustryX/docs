---
title: "DataValueJsonConverter"
---

# DataValueJsonConverter

_public class_

Namespace: `Industria4.DomainModel`

Source: `src/Shared/DomainModel/DataValueJsonConverter.cs`

## Summary

JSON converter that handles serialisation and deserialisation of and .

## Methods

### CanConvert

_method_

```csharp
bool CanConvert(Type objectType)
```

### ReadJson

_method_

```csharp
object ReadJson(JsonReader reader,Type objectType,object existingValue,JsonSerializer serializer)
```

### WriteJson

_method_

```csharp
void WriteJson(JsonWriter writer,object value,JsonSerializer serializer)
```

