---
title: "ExceptionJsonConverter"
---

# ExceptionJsonConverter

_internal class_

Namespace: `Industria4.Cqrs.Json`

Source: `src/Shared/Cqrs/Json/ExceptionJsonConverter.cs`

## Methods

### CanConvert

_method_

```csharp
bool CanConvert(Type objectType)
```

can convert.

### ReadJson

_method_

```csharp
object ReadJson(JsonReader reader,Type objectType,object existingValue,JsonSerializer serializer)
```

read json.

### WriteJson

_method_

```csharp
void WriteJson(JsonWriter writer,object value,JsonSerializer serializer)
```

write json.

