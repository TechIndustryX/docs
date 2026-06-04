---
title: "Serializer"
---

# Serializer

_public class_

Namespace: `Industria4.EntityFramework`

Source: `src/Shared/EntityFramework/Serializer.cs`

## Summary

Provides JSON-based serialisation and deserialisation helpers for Entity Framework persistence, with special handling for -keyed dictionaries.

## Methods

### ToDomainModel

_method_

```csharp
T ToDomainModel<T>(string json)
```

Deserialises a JSON string back to a domain model instance of type `T`. The target type to deserialise into. The JSON string, or `null` to return the default instance. The deserialised instance, or a default instance when `json` is `null`.

### ToJson

_method_

```csharp
string ToJson(this object entity)
```

Serialises `entity` to a JSON string, including type information. The object to serialise. A JSON string representation of `entity`.

