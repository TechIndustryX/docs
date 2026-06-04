---
title: "Composition"
---

# Composition

_public class_

Namespace: `Industria4.Production.DomainModel.Composition`

Source: `src/Production/Production.DomainModel/Composition/Composition.cs`

## Summary

Aggregate root describing how one or more production models and recipes are composed into a single production unit.

## Constructors

### Composition

_constructor_

```csharp
Composition(string id)
```

Initializes a new composition with the given identifier. The unique identifier (max 36 chars).

## Properties

### Descriptions

_property_

```csharp
LanguageDictionary<string> Descriptions
```

Gets the localised descriptions keyed by language.

### Id

_property_

```csharp
string Id
```

### Items

_property_

```csharp
ValidableList<CompositionItem> Items
```

Gets the ordered list of composition items (model+recipe pairs).

### Metadata

_property_

```csharp
MetadataDictionary Metadata
```

Gets the arbitrary metadata for this composition (lazily initialised).

### Tags

_property_

```csharp
TagsDictionary Tags
```

Gets the tag dictionary for filtering and classification.

## Methods

### Equals

_method_

```csharp
bool Equals(Composition other)
```

Determines whether this composition is equal to the specified composition by comparing identifiers. The composition to compare with. if both compositions share the same ; otherwise, .

### Equals

_method_

```csharp
bool Equals(object obj)
```

### GetHashCode

_method_

```csharp
int GetHashCode()
```

