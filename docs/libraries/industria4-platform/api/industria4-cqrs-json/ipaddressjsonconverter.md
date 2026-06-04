---
title: "IpAddressJsonConverter"
---

# IpAddressJsonConverter

_public class_

Namespace: `Industria4.Cqrs.Json`

Source: `src/Shared/Cqrs/Json/IpAddressJsonConverter.cs`

## Summary

JSON converter for using Newtonsoft.Json.

## Methods

### CanConvert

_method_

```csharp
bool CanConvert(Type objectType)
```

Returns `true` when the type is . The type to check. `true` if this converter handles the type; otherwise `false`.

### ReadJson

_method_

```csharp
object ReadJson(JsonReader reader,Type objectType,object existingValue,JsonSerializer serializer)
```

Reads an IP address from a JSON string token. The JSON reader. The target object type. The existing value. The calling serializer. The parsed .

### WriteJson

_method_

```csharp
void WriteJson(JsonWriter writer,object value,JsonSerializer serializer)
```

Writes an IP address as a JSON string token. The JSON writer. The value to write. The calling serializer.

