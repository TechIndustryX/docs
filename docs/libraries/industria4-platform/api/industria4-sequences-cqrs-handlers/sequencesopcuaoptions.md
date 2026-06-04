---
title: "SequencesOpcUaOptions"
---

# SequencesOpcUaOptions

_public class_

Namespace: `Industria4.Sequences.Cqrs.Handlers`

Source: `src/Sequences/Sequences.Cqrs.Handlers/SequencesOptions.cs`

## Summary

OPC UA node and connection settings used by the Sequences service.

## Properties

### NextNode

_property_

```csharp
string NextNode
```

Gets or sets the OPC UA node identifier to which the next sequence information is written.

### NextNodeInfo

_property_

```csharp
NextNodeInfoType NextNodeInfo
```

Gets or sets the type of information written to .

### Password

_property_

```csharp
string Password
```

Gets or sets the password for authenticating with the OPC UA server.

### QuantityDoneNode

_property_

```csharp
string QuantityDoneNode
```

Gets or sets the OPC UA node identifier for the quantity produced so far.

### RequiredQuantityNode

_property_

```csharp
string RequiredQuantityNode
```

Gets or sets the OPC UA node identifier for the required production quantity.

### SequenceNode

_property_

```csharp
string SequenceNode
```

Gets or sets the OPC UA node identifier that holds the current active sequence.

### StateNode

_property_

```csharp
string StateNode
```

Gets or sets the OPC UA node identifier for the sequence runner state (started/stopped).

### Uri

_property_

```csharp
Uri Uri
```

Gets or sets the URI of the OPC UA server endpoint.

### UserName

_property_

```csharp
string UserName
```

Gets or sets the user name for authenticating with the OPC UA server.

