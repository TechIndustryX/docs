---
title: "IdGenerator"
---

# IdGenerator

_public class_

Namespace: `Industria4.Bridge.Grpc`

Source: `src/Grpc/IdGenerator.cs`

## Summary

Generates unique composite identifiers by combining caller-supplied values with a random GUID suffix.

## Methods

### New

_method_

```csharp
string New(params object[] values)
```

Creates a new unique ID by joining `values` with colons and appending a random GUID. The key parts to prefix the ID with. A string of the form `value1:value2:...:&amp;lt;guid&amp;gt;`.

