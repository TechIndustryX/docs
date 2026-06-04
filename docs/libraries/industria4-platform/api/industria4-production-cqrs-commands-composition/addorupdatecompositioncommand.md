---
title: "AddOrUpdateCompositionCommand"
---

# AddOrUpdateCompositionCommand

_public class_

Namespace: `Industria4.Production.Cqrs.Commands.Composition`

Source: `src/Production/Production.Cqrs/Commands/Composition/AddOrUpdateCompositionCommand.cs`

## Summary

Command to create or update a composition.

## Properties

### Descriptions

_property_

```csharp
LanguageDictionary<string> Descriptions
```

Gets the localised descriptions for the composition.

### EntityVersion

_property_

```csharp
byte[] EntityVersion
```

Gets the concurrency token for optimistic locking.

### Items

_property_

```csharp
CompositionItem[] Items
```

Gets the ordered list of composition items (model+recipe pairs).

### Metadata

_property_

```csharp
MetadataDictionary Metadata
```

Gets the metadata to attach to the composition.

### Tags

_property_

```csharp
TagsDictionary Tags
```

Gets the tag dictionary for filtering and classification.

