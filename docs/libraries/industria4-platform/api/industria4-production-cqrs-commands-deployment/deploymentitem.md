---
title: "DeploymentItem"
---

# DeploymentItem

_public class_

Namespace: `Industria4.Production.Cqrs.Commands.Deployment`

Source: `src/Production/Production.Cqrs/Commands/Deployment/DeploymentItem.cs`

## Summary

Represents a single deployment item mapping a composition item key to an optional target server.

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

Gets the metadata for this deployment item.

### ServerId

_property_

```csharp
string? ServerId
```

Gets the optional identifier of the target server.

