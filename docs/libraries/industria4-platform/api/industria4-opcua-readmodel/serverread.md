---
title: "ServerRead"
---

# ServerRead

_public class_

Namespace: `Industria4.OpcUa.ReadModel`

Source: `src/OpcUa/OpcUa.ReadModel/ServerRead.cs`

## Summary

Read model (DTO) representing an OPC-UA server entry.

## Properties

### Description

_property_

```csharp
string Description
```

Gets or sets the display description of the server.

### Id

_property_

```csharp
string Id
```

Gets or sets the unique identifier of the server.

### IsDeleted

_property_

```csharp
bool IsDeleted
```

Gets or sets a value indicating whether the server has been soft-deleted.

### Metadata

_property_

```csharp
Dictionary<string,object> Metadata
```

Gets or sets the deserialised metadata dictionary (excluded from serialisation).

### MetadataJson

_property_

```csharp
string MetadataJson
```

Gets or sets the raw JSON metadata string (excluded from serialisation).

### Uri

_property_

```csharp
string Uri
```

Gets or sets the OPC-UA endpoint URI.

