---
title: "DeploymentItem"
---

# DeploymentItem

_public class_

Namespace: `Industria4.Production.DomainModel.Deployment`

Source: `src/Production/Production.DomainModel/Deployment/DeploymentItem.cs`

## Summary

A single item in a that maps a composition item key to an optional target server.

## Constructors

### DeploymentItem

_constructor_

```csharp
DeploymentItem(string compositionItemKey)
```

Initializes a new deployment item for the given composition item key. The key of the composition item being deployed.

## Properties

### CompositionItemKey

_property_

```csharp
string CompositionItemKey
```

Gets the composition item key this deployment item is associated with.

### Metadata

_property_

```csharp
MetadataDictionary Metadata
```

Gets the arbitrary metadata for this deployment item (lazily initialised).

