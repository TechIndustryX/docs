---
title: "MetadataDictionary"
---

# MetadataDictionary

_public class_

Namespace: `Industria4.DomainModel`

Source: `src/Shared/DomainModel/MetadataDictionary.cs`

## Summary

Defines meta information using a key and a value

## Constructors

### MetadataDictionary

_constructor_

```csharp
MetadataDictionary()
```

Initializes a new empty instance with case-insensitive key comparison.

### MetadataDictionary

_constructor_

```csharp
MetadataDictionary(IDictionary<string,object> dictionary)
```

Initializes a new instance pre-populated from the given dictionary, with case-insensitive key comparison. Key/value pairs to copy into this instance.

## Methods

### AddRange

_method_

```csharp
void AddRange(IEnumerable<KeyValuePair<string,object>> items)
```

Adds all key/value pairs from the sequence. The items to add.

