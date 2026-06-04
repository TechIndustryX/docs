---
title: "SequencesOptions"
---

# SequencesOptions

_public class_

Namespace: `Industria4.Sequences.Cqrs.Handlers`

Source: `src/Sequences/Sequences.Cqrs.Handlers/SequencesOptions.cs`

## Summary

Configuration options for the Sequences CQRS handlers and OPC UA integration.

## Properties

### AddAnyQuantityDoneChanges

_property_

```csharp
bool AddAnyQuantityDoneChanges
```

Gets or sets a value indicating whether any change to the quantity-done node triggers a sequence state change.

### OpcUa

_property_

```csharp
SequencesOpcUaOptions OpcUa
```

Gets the OPC UA-specific configuration for the Sequences integration.

